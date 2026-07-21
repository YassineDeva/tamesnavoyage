/** Inline brand glyphs (lucide v1 removed brand icons for trademark reasons). */

type P = { className?: string };

export function InstagramIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14 8.5V7c0-.8.3-1.2 1.2-1.2H16.5V3.2C16 3.1 15 3 14 3c-2.1 0-3.6 1.3-3.6 3.6v1.9H8v2.8h2.4V21h3v-9.7h2.3l.4-2.8H13.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsappIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3.5 20.5l1.3-4.5A8 8 0 1112 20a8 8 0 01-4-1.1l-4.5 1.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c-.3 0-.6.1-.8.4-.3.3-.8.8-.8 1.8s.8 2.1 1 2.3c.1.2 1.5 2.4 3.8 3.3 1.9.7 2.3.6 2.7.5.4 0 1.3-.5 1.5-1s.2-1 .1-1.1c-.1-.1-.3-.2-.6-.4-.3-.2-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.2.3-.6.7-.7.9-.1.1-.3.1-.5 0-.3-.1-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.3 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5s0-.3 0-.5c-.1-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4H9z"
        fill="currentColor"
      />
    </svg>
  );
}
