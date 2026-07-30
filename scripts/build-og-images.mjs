/**
 * Builds the JPEG previews that social crawlers get to see.
 *
 * The site stores its photography as WebP, which WhatsApp — the way most of
 * this audience passes a link around — still refuses to render in a link
 * preview. So every photo referenced from the source tree is re-encoded once,
 * at the 1200×630 Open Graph size, into /public/media/og/*.jpg, and the list of
 * what was produced is written to lib/og-manifest.json so `ogImage()` can never
 * point at a rendition that does not exist.
 *
 *   npm run og:build
 *
 * Re-run it whenever photography is added or replaced.
 */
import { readFile, writeFile, mkdir, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const OUT_DIR = path.join(PUBLIC, "media", "og");
const MANIFEST = path.join(ROOT, "lib", "og-manifest.json");

const SIZE = { width: 1200, height: 630 };
const SCAN_DIRS = ["app", "components", "lib"];
const SCAN_EXT = new Set([".ts", ".tsx"]);
const MEDIA_RE = /\/media\/[A-Za-z0-9._\-/]+\.(?:webp|jpe?g|png)/g;

/**
 * Our own output — renditions would breed renditions — and the testimonial
 * portraits, which are small square crops that no page ever passes as a share
 * image and which would only widen into a blurry 1200×630 band.
 */
const SKIP = [/^\/media\/og\//, /^\/media\/avatars\//];

/** Every source file under the scanned directories. */
async function sourceFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await sourceFiles(full)));
    else if (SCAN_EXT.has(path.extname(entry.name))) out.push(full);
  }
  return out;
}

/** `/media/destinations/intl/saudi.webp` → `/media/og/destinations-intl-saudi.jpg` */
function ogPathFor(src) {
  const flat = src
    .replace(/^\/media\//, "")
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/\//g, "-");
  return `/media/og/${flat}.jpg`;
}

/**
 * Cover-crop to the OG frame with a slight downward bias — travel photography
 * puts its subject above the horizon, and a centre crop tends to behead people.
 */
async function render(inputPath, outputPath) {
  await sharp(inputPath)
    .resize({ ...SIZE, fit: "cover", position: "attention" })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outputPath);
}

async function main() {
  const files = (
    await Promise.all(SCAN_DIRS.map((d) => sourceFiles(path.join(ROOT, d))))
  ).flat();

  const referenced = new Set();
  for (const file of files) {
    const text = await readFile(file, "utf8");
    for (const match of text.matchAll(MEDIA_RE)) {
      if (!SKIP.some((re) => re.test(match[0]))) referenced.add(match[0]);
    }
  }

  await mkdir(OUT_DIR, { recursive: true });

  const manifest = [];
  const missing = [];

  for (const src of [...referenced].sort()) {
    const input = path.join(PUBLIC, src);
    if (!existsSync(input)) {
      missing.push(src);
      continue;
    }
    const rel = ogPathFor(src);
    const output = path.join(PUBLIC, rel);

    /* Skip work when the rendition is already newer than its source. */
    if (existsSync(output)) {
      const [a, b] = await Promise.all([stat(input), stat(output)]);
      if (b.mtimeMs >= a.mtimeMs) {
        manifest.push(rel);
        continue;
      }
    }

    await render(input, output);
    manifest.push(rel);
    console.log(`  ✓ ${src} → ${rel}`);
  }

  /* The brand card every page falls back to. The hero is the one photo that is
     unmistakably "this agency" without any text on it. */
  const fallbackSource = [
    "/media/hero-santorini.webp",
    ...referenced,
  ].find((src) => existsSync(path.join(PUBLIC, src)));

  if (fallbackSource) {
    await render(
      path.join(PUBLIC, fallbackSource),
      path.join(OUT_DIR, "default.jpg"),
    );
    manifest.push("/media/og/default.jpg");
  } else {
    throw new Error("No source photograph found to build the default OG card.");
  }

  const unique = [...new Set(manifest)].sort();
  await writeFile(MANIFEST, `${JSON.stringify(unique, null, 2)}\n`, "utf8");

  console.log(`\n${unique.length} Open Graph renditions in public/media/og/`);
  if (missing.length) {
    console.warn(
      `\n${missing.length} referenced image(s) are not on disk and have no preview:\n` +
        missing.map((m) => `  · ${m}`).join("\n"),
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
