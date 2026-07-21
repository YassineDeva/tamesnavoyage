import type { Locale } from "@/i18n/routing";

/** A bilingual string. */
export type L = { fr: string; ar: string };
export const t = (v: L, locale: Locale) => v[locale];

export type Destination = {
  id: string;
  slug: string;
  name: L;
  region: L;
  blurb: L;
  image: string;
  tag?: L;
  span?: "tall" | "wide" | "normal";
};

export type Tour = {
  id: string;
  slug: string;
  title: L;
  summary: L;
  region: L;
  days: number;
  priceMad: number;
  rating: number;
  reviews: number;
  image: string;
  level: L;
  best: L;
  highlights: L[];
  itinerary: { day: number; title: L; detail: L }[];
};

export type Experience = {
  id: string;
  title: L;
  desc: L;
  image: string;
  meta: L;
};

export type Testimonial = {
  id: string;
  name: string;
  country: L;
  quote: L;
  rating: number;
  trip: L;
  avatar: string;
};

/* -------------------------------------------------------------------------- */
/*  Destinations                                                              */
/* -------------------------------------------------------------------------- */
export const destinations: Destination[] = [
  {
    id: "marrakech",
    slug: "marrakech",
    name: { fr: "Marrakech", ar: "مراكش" },
    region: { fr: "La ville rouge", ar: "المدينة الحمراء" },
    blurb: {
      fr: "Souks, palais et jardins secrets au pied de l'Atlas.",
      ar: "أسواق وقصور وحدائق سرّية عند سفح الأطلس.",
    },
    image: "/media/destinations/marrakech.jpg",
    tag: { fr: "Incontournable", ar: "الأبرز" },
    span: "tall",
  },
  {
    id: "sahara",
    slug: "sahara-merzouga",
    name: { fr: "Sahara – Merzouga", ar: "الصحراء – مرزوكة" },
    region: { fr: "Les dunes d'or", ar: "الكثبان الذهبية" },
    blurb: {
      fr: "Nuit sous les étoiles au cœur de l'Erg Chebbi.",
      ar: "ليلة تحت النجوم في قلب عرق الشبي.",
    },
    image: "/media/destinations/sahara.jpg",
    tag: { fr: "Tendance", ar: "رائج" },
    span: "wide",
  },
  {
    id: "chefchaouen",
    slug: "chefchaouen",
    name: { fr: "Chefchaouen", ar: "شفشاون" },
    region: { fr: "La perle bleue", ar: "اللؤلؤة الزرقاء" },
    blurb: {
      fr: "Ruelles indigo et douceur de vivre du Rif.",
      ar: "أزقّة نيليّة وهدوء الحياة في الريف.",
    },
    image: "/media/destinations/chefchaouen.jpg",
  },
  {
    id: "fes",
    slug: "fes",
    name: { fr: "Fès", ar: "فاس" },
    region: { fr: "La cité impériale", ar: "المدينة الإمبراطورية" },
    blurb: {
      fr: "Mille ans d'artisanat dans la plus vieille médina du monde.",
      ar: "ألف عام من الحرف في أقدم مدينة عتيقة في العالم.",
    },
    image: "/media/destinations/fes.jpg",
  },
  {
    id: "essaouira",
    slug: "essaouira",
    name: { fr: "Essaouira", ar: "الصويرة" },
    region: { fr: "L'alizé atlantique", ar: "نسيم الأطلسي" },
    blurb: {
      fr: "Remparts, embruns et musique gnaoua.",
      ar: "أسوار ورذاذ بحر وموسيقى كناوة.",
    },
    image: "/media/destinations/essaouira.jpg",
    span: "wide",
  },
  {
    id: "atlas",
    slug: "haut-atlas",
    name: { fr: "Haut Atlas", ar: "الأطلس الكبير" },
    region: { fr: "Les cimes berbères", ar: "قمم الأمازيغ" },
    blurb: {
      fr: "Villages perchés et vallées émeraude.",
      ar: "قرى معلّقة ووديان زمرّدية.",
    },
    image: "/media/destinations/atlas.jpg",
    span: "tall",
  },
];

/* -------------------------------------------------------------------------- */
/*  Tours / Circuits                                                          */
/* -------------------------------------------------------------------------- */
export const tours: Tour[] = [
  {
    id: "grand-sud",
    slug: "grand-sud-marocain",
    title: { fr: "Grand Sud marocain", ar: "الجنوب المغربي الكبير" },
    summary: {
      fr: "De Marrakech aux dunes de Merzouga par les kasbahs et l'Atlas.",
      ar: "من مراكش إلى كثبان مرزوكة عبر القصبات والأطلس.",
    },
    region: { fr: "Atlas & Sahara", ar: "الأطلس والصحراء" },
    days: 7,
    priceMad: 14900,
    rating: 4.9,
    reviews: 128,
    image: "/media/tours/grand-sud.jpg",
    level: { fr: "Confort", ar: "مريح" },
    best: { fr: "Oct – Avr", ar: "أكتوبر – أبريل" },
    highlights: [
      { fr: "Nuit en bivouac de luxe à l'Erg Chebbi", ar: "ليلة في مخيّم فاخر بعرق الشبي" },
      { fr: "Route des mille kasbahs", ar: "طريق ألف قصبة" },
      { fr: "Aït-Ben-Haddou, classé UNESCO", ar: "آيت بن حدّو، مصنّف يونسكو" },
    ],
    itinerary: [
      { day: 1, title: { fr: "Marrakech", ar: "مراكش" }, detail: { fr: "Accueil et dîner dans un riad de la médina.", ar: "استقبال وعشاء في رياض بالمدينة القديمة." } },
      { day: 2, title: { fr: "Aït-Ben-Haddou", ar: "آيت بن حدّو" }, detail: { fr: "Col du Tichka et ksar millénaire.", ar: "ممر تيشكا والقصر العتيق." } },
      { day: 3, title: { fr: "Vallée du Dadès", ar: "وادي دادس" }, detail: { fr: "Gorges spectaculaires et villages berbères.", ar: "مضائق مذهلة وقرى أمازيغية." } },
      { day: 4, title: { fr: "Merzouga", ar: "مرزوكة" }, detail: { fr: "Dromadaires au coucher du soleil, nuit sous les étoiles.", ar: "جِمال عند الغروب وليلة تحت النجوم." } },
    ],
  },
  {
    id: "villes-imperiales",
    slug: "villes-imperiales",
    title: { fr: "Les villes impériales", ar: "المدن الإمبراطورية" },
    summary: {
      fr: "Fès, Meknès, Rabat et Marrakech : mille ans d'histoire.",
      ar: "فاس ومكناس والرباط ومراكش: ألف عام من التاريخ.",
    },
    region: { fr: "Nord & Centre", ar: "الشمال والوسط" },
    days: 8,
    priceMad: 16400,
    rating: 4.8,
    reviews: 96,
    image: "/media/tours/villes-imperiales.jpg",
    level: { fr: "Culture", ar: "ثقافي" },
    best: { fr: "Mar – Juin", ar: "مارس – يونيو" },
    highlights: [
      { fr: "Médina de Fès avec un artisan tanneur", ar: "مدينة فاس مع حرفي دبّاغ" },
      { fr: "Volubilis, cité romaine", ar: "وليلي، المدينة الرومانية" },
      { fr: "Ateliers de zellige et de cuir", ar: "ورشات الزليج والجلد" },
    ],
    itinerary: [
      { day: 1, title: { fr: "Rabat", ar: "الرباط" }, detail: { fr: "Tour Hassan et kasbah des Oudayas.", ar: "صومعة حسّان وقصبة الأوداية." } },
      { day: 2, title: { fr: "Meknès & Volubilis", ar: "مكناس ووليلي" }, detail: { fr: "Bab Mansour et mosaïques romaines.", ar: "باب منصور والفسيفساء الرومانية." } },
      { day: 3, title: { fr: "Fès", ar: "فاس" }, detail: { fr: "Deux jours dans la médina classée.", ar: "يومان في المدينة العتيقة المصنّفة." } },
    ],
  },
  {
    id: "atlantique-essaouira",
    slug: "cote-atlantique",
    title: { fr: "Échappée atlantique", ar: "هروب أطلسي" },
    summary: {
      fr: "Essaouira, plages sauvages et arganeraies vers Agadir.",
      ar: "الصويرة وشواطئ برّية وغابات الأركان نحو أكادير.",
    },
    region: { fr: "Côte Atlantique", ar: "الساحل الأطلسي" },
    days: 5,
    priceMad: 9800,
    rating: 4.7,
    reviews: 74,
    image: "/media/tours/atlantique.jpg",
    level: { fr: "Détente", ar: "استرخاء" },
    best: { fr: "Avr – Sep", ar: "أبريل – سبتمبر" },
    highlights: [
      { fr: "Remparts d'Essaouira au coucher du soleil", ar: "أسوار الصويرة عند الغروب" },
      { fr: "Coopérative d'huile d'argan", ar: "تعاونية زيت الأركان" },
      { fr: "Balade à cheval sur la plage", ar: "نزهة على الخيل على الشاطئ" },
    ],
    itinerary: [
      { day: 1, title: { fr: "Essaouira", ar: "الصويرة" }, detail: { fr: "Médina, port et remparts.", ar: "المدينة والميناء والأسوار." } },
      { day: 2, title: { fr: "Arganeraie", ar: "غابة الأركان" }, detail: { fr: "Rencontre avec une coopérative de femmes.", ar: "لقاء بتعاونية نسائية." } },
    ],
  },
  {
    id: "trek-toubkal",
    slug: "trek-toubkal",
    title: { fr: "Ascension du Toubkal", ar: "تسلّق توبقال" },
    summary: {
      fr: "Le toit de l'Afrique du Nord, guides berbères et refuges.",
      ar: "سقف شمال إفريقيا، مرشدون أمازيغ وملاجئ جبلية.",
    },
    region: { fr: "Haut Atlas", ar: "الأطلس الكبير" },
    days: 4,
    priceMad: 7600,
    rating: 4.9,
    reviews: 61,
    image: "/media/tours/toubkal.jpg",
    level: { fr: "Sportif", ar: "رياضي" },
    best: { fr: "Mai – Oct", ar: "ماي – أكتوبر" },
    highlights: [
      { fr: "Sommet à 4 167 m", ar: "قمّة على 4167 م" },
      { fr: "Villages d'Imlil et d'Aroumd", ar: "قريتا إمليل وأرومد" },
      { fr: "Nuit en refuge de montagne", ar: "ليلة في ملجأ جبلي" },
    ],
    itinerary: [
      { day: 1, title: { fr: "Imlil", ar: "إمليل" }, detail: { fr: "Marche d'approche vers le refuge.", ar: "مسير نحو الملجأ." } },
      { day: 2, title: { fr: "Sommet", ar: "القمّة" }, detail: { fr: "Ascension au lever du jour.", ar: "الصعود عند الفجر." } },
    ],
  },
  {
    id: "chefchaouen-rif",
    slug: "chefchaouen-rif",
    title: { fr: "Bleu du Rif", ar: "أزرق الريف" },
    summary: {
      fr: "Chefchaouen, cascades d'Akchour et villages de montagne.",
      ar: "شفشاون وشلالات أقشور وقرى الجبل.",
    },
    region: { fr: "Rif", ar: "الريف" },
    days: 4,
    priceMad: 8200,
    rating: 4.8,
    reviews: 53,
    image: "/media/tours/chefchaouen.jpg",
    level: { fr: "Nature", ar: "طبيعة" },
    best: { fr: "Avr – Nov", ar: "أبريل – نونبر" },
    highlights: [
      { fr: "Médina bleue au lever du jour", ar: "المدينة الزرقاء عند الفجر" },
      { fr: "Randonnée aux cascades d'Akchour", ar: "نزهة إلى شلالات أقشور" },
      { fr: "Déjeuner chez l'habitant", ar: "غداء عند السكان" },
    ],
    itinerary: [
      { day: 1, title: { fr: "Chefchaouen", ar: "شفشاون" }, detail: { fr: "Flânerie dans la médina indigo.", ar: "تجوّل في المدينة النيليّة." } },
      { day: 2, title: { fr: "Akchour", ar: "أقشور" }, detail: { fr: "Randonnée au pont de Dieu.", ar: "نزهة إلى جسر الله." } },
    ],
  },
  {
    id: "luxe-riads",
    slug: "escapade-riads-luxe",
    title: { fr: "Riads & bien-être", ar: "رياضات ورفاهية" },
    summary: {
      fr: "Marrakech en riads d'exception, hammams et spas.",
      ar: "مراكش في رياضات فاخرة، حمّامات ومنتجعات.",
    },
    region: { fr: "Marrakech", ar: "مراكش" },
    days: 4,
    priceMad: 12600,
    rating: 5.0,
    reviews: 88,
    image: "/media/tours/riads-luxe.jpg",
    level: { fr: "Prestige", ar: "فاخر" },
    best: { fr: "Toute l'année", ar: "طوال السنة" },
    highlights: [
      { fr: "Riad privatisé avec majordome", ar: "رياض خاص مع خادم" },
      { fr: "Rituel hammam et massage à l'argan", ar: "طقس حمّام وتدليك بالأركان" },
      { fr: "Dîner gastronomique sur les toits", ar: "عشاء راقٍ على الأسطح" },
    ],
    itinerary: [
      { day: 1, title: { fr: "Arrivée", ar: "الوصول" }, detail: { fr: "Installation et thé à la menthe.", ar: "الاستقرار وشاي بالنعناع." } },
      { day: 2, title: { fr: "Bien-être", ar: "العافية" }, detail: { fr: "Journée spa et jardins secrets.", ar: "يوم منتجع وحدائق سرّية." } },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Experiences                                                              */
/* -------------------------------------------------------------------------- */
export const experiences: Experience[] = [
  {
    id: "bivouac",
    title: { fr: "Nuit en bivouac étoilé", ar: "ليلة في مخيّم النجوم" },
    desc: { fr: "Camp de luxe dans les dunes, dîner berbère et musique.", ar: "مخيّم فاخر بين الكثبان، عشاء أمازيغي وموسيقى." },
    image: "/media/experiences/bivouac.jpg",
    meta: { fr: "Sahara · 1 nuit", ar: "الصحراء · ليلة" },
  },
  {
    id: "montgolfiere",
    title: { fr: "Montgolfière au lever du jour", ar: "منطاد عند الفجر" },
    desc: { fr: "Survolez la palmeraie de Marrakech au petit matin.", ar: "حلّق فوق واحة مراكش في الصباح الباكر." },
    image: "/media/experiences/montgolfiere.jpg",
    meta: { fr: "Marrakech · 4 h", ar: "مراكش · 4 س" },
  },
  {
    id: "cuisine",
    title: { fr: "Atelier de cuisine marocaine", ar: "ورشة طبخ مغربي" },
    desc: { fr: "Marché aux épices puis tajine avec une cheffe locale.", ar: "سوق التوابل ثم طاجين مع طاهية محلّية." },
    image: "/media/experiences/cuisine.jpg",
    meta: { fr: "Fès · demi-journée", ar: "فاس · نصف يوم" },
  },
  {
    id: "surf",
    title: { fr: "Surf & yoga sur l'Atlantique", ar: "ركوب أمواج ويوغا على الأطلسي" },
    desc: { fr: "Sessions de surf et couchers de soleil à Taghazout.", ar: "جلسات ركوب أمواج وغروب في تغازوت." },
    image: "/media/experiences/surf.jpg",
    meta: { fr: "Taghazout · 2 jours", ar: "تغازوت · يومان" },
  },
  {
    id: "hammam",
    title: { fr: "Rituel hammam & argan", ar: "طقس حمّام وأركان" },
    desc: { fr: "Un moment de bien-être ancestral dans un riad.", ar: "لحظة عافية عريقة في رياض." },
    image: "/media/experiences/hammam.jpg",
    meta: { fr: "Marrakech · 2 h", ar: "مراكش · ساعتان" },
  },
  {
    id: "gnaoua",
    title: { fr: "Soirée gnaoua à Essaouira", ar: "أمسية كناوة بالصويرة" },
    desc: { fr: "Transe musicale et rythmes ancestraux au coucher.", ar: "طرب صوفي وإيقاعات عريقة عند الغروب." },
    image: "/media/experiences/gnaoua.jpg",
    meta: { fr: "Essaouira · soirée", ar: "الصويرة · أمسية" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                             */
/* -------------------------------------------------------------------------- */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Camille Laurent",
    country: { fr: "Lyon, France", ar: "ليون، فرنسا" },
    quote: {
      fr: "Le voyage le plus beau de notre vie. Chaque détail était pensé, du riad au guide dans le désert. Inoubliable.",
      ar: "أجمل رحلة في حياتنا. كل تفصيل كان مدروسًا، من الرياض إلى المرشد في الصحراء. لا تُنسى.",
    },
    rating: 5,
    trip: { fr: "Grand Sud · 7 jours", ar: "الجنوب الكبير · 7 أيام" },
    avatar: "/media/avatars/camille.jpg",
  },
  {
    id: "t2",
    name: "Youssef El Amrani",
    country: { fr: "Casablanca, Maroc", ar: "الدار البيضاء، المغرب" },
    quote: {
      fr: "Une agence qui connaît son pays sur le bout des doigts. Organisation parfaite pour notre lune de miel.",
      ar: "وكالة تعرف بلدها عن ظهر قلب. تنظيم مثالي لشهر العسل.",
    },
    rating: 5,
    trip: { fr: "Riads & bien-être", ar: "رياضات ورفاهية" },
    avatar: "/media/avatars/youssef.jpg",
  },
  {
    id: "t3",
    name: "Sofia Rossi",
    country: { fr: "Milan, Italie", ar: "ميلانو، إيطاليا" },
    quote: {
      fr: "Le bivouac dans les dunes restera gravé à jamais. Merci pour cette parenthèse hors du temps.",
      ar: "ليلة المخيّم بين الكثبان ستبقى محفورة للأبد. شكرًا على هذه اللحظة خارج الزمن.",
    },
    rating: 5,
    trip: { fr: "Sahara · Merzouga", ar: "الصحراء · مرزوكة" },
    avatar: "/media/avatars/sofia.jpg",
  },
  {
    id: "t4",
    name: "James Whitfield",
    country: { fr: "Londres, Royaume-Uni", ar: "لندن، المملكة المتحدة" },
    quote: {
      fr: "Professionnalisme et chaleur humaine. Notre conseiller répondait à toute heure. Cinq étoiles amplement méritées.",
      ar: "احترافية ودفء إنساني. مستشارنا كان يجيب في أي وقت. خمس نجوم عن جدارة.",
    },
    rating: 5,
    trip: { fr: "Villes impériales", ar: "المدن الإمبراطورية" },
    avatar: "/media/avatars/james.jpg",
  },
  {
    id: "t5",
    name: "Amina Benali",
    country: { fr: "Paris, France", ar: "باريس، فرنسا" },
    quote: {
      fr: "Un itinéraire vraiment sur-mesure, loin des circuits touristiques. On a découvert le vrai Maroc.",
      ar: "مسار مخصّص حقًّا، بعيدًا عن المسارات السياحية. اكتشفنا المغرب الحقيقي.",
    },
    rating: 5,
    trip: { fr: "Bleu du Rif", ar: "أزرق الريف" },
    avatar: "/media/avatars/amina.jpg",
  },
  {
    id: "t6",
    name: "Lucas Fernández",
    country: { fr: "Madrid, Espagne", ar: "مدريد، إسبانيا" },
    quote: {
      fr: "L'ascension du Toubkal avec leurs guides berbères : une aventure humaine incroyable.",
      ar: "تسلّق توبقال مع مرشديهم الأمازيغ: مغامرة إنسانية رائعة.",
    },
    rating: 5,
    trip: { fr: "Ascension du Toubkal", ar: "تسلّق توبقال" },
    avatar: "/media/avatars/lucas.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*  International destinations (catalogue « Top destinations »)                */
/* -------------------------------------------------------------------------- */
export const internationalDestinations: Destination[] = [
  {
    id: "turkey",
    slug: "turquie",
    name: { fr: "Turquie", ar: "تركيا" },
    region: { fr: "Istanbul & Cappadoce", ar: "إسطنبول وكابادوكيا" },
    blurb: {
      fr: "Montgolfières au lever du jour, bazars et merveilles ottomanes.",
      ar: "مناطيد عند الفجر، أسواق وعجائب عثمانية.",
    },
    image: "/media/destinations/intl/turkey.webp",
    tag: { fr: "Tendance", ar: "رائج" },
  },
  {
    id: "bali",
    slug: "bali",
    name: { fr: "Bali", ar: "بالي" },
    region: { fr: "Indonésie", ar: "إندونيسيا" },
    blurb: {
      fr: "Rizières émeraude, temples et plages de rêve.",
      ar: "حقول أرزّ زمرّدية، معابد وشواطئ ساحرة.",
    },
    image: "/media/dest-bali.webp",
    tag: { fr: "Best-seller", ar: "الأكثر مبيعًا" },
  },
  {
    id: "zanzibar",
    slug: "zanzibar",
    name: { fr: "Zanzibar", ar: "زنجبار" },
    region: { fr: "Tanzanie", ar: "تنزانيا" },
    blurb: {
      fr: "Lagons turquoise, épices et boutres traditionnels.",
      ar: "بحيرات فيروزية، توابل وقوارب تقليدية.",
    },
    image: "/media/destinations/intl/zanzibar.webp",
    tag: { fr: "Évasion", ar: "استجمام" },
  },
  {
    id: "saudi",
    slug: "arabie-saoudite",
    name: { fr: "Arabie Saoudite", ar: "المملكة العربية السعودية" },
    region: { fr: "La Mecque & Médine", ar: "مكة المكرمة والمدينة المنوّرة" },
    blurb: {
      fr: "Hajj & Omra organisés dans le respect des rites religieux.",
      ar: "الحج والعمرة بتنظيم يراعي المناسك الدينية.",
    },
    image: "/media/destinations/intl/saudi.webp",
    tag: { fr: "Hajj & Omra", ar: "الحج والعمرة" },
  },
  {
    id: "maldives",
    slug: "maldives",
    name: { fr: "Maldives", ar: "جزر المالديف" },
    region: { fr: "Océan Indien", ar: "المحيط الهندي" },
    blurb: {
      fr: "Villas sur pilotis et eaux cristallines à perte de vue.",
      ar: "فيلات فوق الماء ومياه صافية بلا حدود.",
    },
    image: "/media/destinations/intl/maldives.webp",
    tag: { fr: "Luxe", ar: "فخامة" },
  },
  {
    id: "japan",
    slug: "japon",
    name: { fr: "Japon", ar: "اليابان" },
    region: { fr: "Tokyo & Kyoto", ar: "طوكيو وكيوتو" },
    blurb: {
      fr: "Cerisiers en fleurs, temples millénaires et modernité.",
      ar: "أزهار الكرز، معابد عريقة وحداثة.",
    },
    image: "/media/destinations/intl/japan.webp",
    tag: { fr: "Culture", ar: "ثقافة" },
  },
  {
    id: "safari",
    slug: "safari",
    name: { fr: "Safari", ar: "سفاري" },
    region: { fr: "Afrique de l'Est", ar: "شرق إفريقيا" },
    blurb: {
      fr: "La grande faune au cœur des savanes dorées.",
      ar: "الحياة البرّية في قلب السافانا الذهبية.",
    },
    image: "/media/destinations/intl/safari.webp",
    tag: { fr: "Aventure", ar: "مغامرة" },
  },
  {
    id: "europe",
    slug: "europe",
    name: { fr: "Europe", ar: "أوروبا" },
    region: { fr: "Grandes capitales", ar: "كبرى العواصم" },
    blurb: {
      fr: "Paris, Rome, Barcelone : l'art de vivre à l'européenne.",
      ar: "باريس، روما، برشلونة: فنّ العيش الأوروبي.",
    },
    image: "/media/destinations/intl/europe.webp",
    tag: { fr: "Incontournable", ar: "الأبرز" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Services (catalogue « Nos Services »)                                     */
/* -------------------------------------------------------------------------- */
export type Service = {
  id: string;
  /** lucide icon key, resolved in the component */
  icon: string;
  title: L;
  tagline: L;
  description: L;
  bullets: L[];
  image: string;
};

export const services: Service[] = [
  {
    id: "affaires",
    icon: "briefcase",
    title: { fr: "Voyages d'affaires", ar: "أسفار الأعمال" },
    tagline: {
      fr: "Déplacements professionnels de A à Z",
      ar: "تنقّلات مهنية من الألف إلى الياء",
    },
    description: {
      fr: "Organisation complète de vos déplacements professionnels : vols, hébergement, transferts et location de voiture, avec une assistance 24/7 et une gestion des urgences.",
      ar: "تنظيم كامل لتنقّلاتكم المهنية: تذاكر الطيران، الإقامة، النقل وكراء السيارات، مع مساعدة على مدار الساعة وإدارة للطوارئ.",
    },
    bullets: [
      { fr: "Vols, hôtels & transferts", ar: "طيران، فنادق ونقل" },
      { fr: "Location de voiture", ar: "كراء السيارات" },
      { fr: "Assistance 24/7 & urgences", ar: "مساعدة 24/7 وطوارئ" },
      { fr: "Tarifs corporate négociés", ar: "أسعار مفاوَضة للشركات" },
    ],
    image: "/media/services/affaires.webp",
  },
  {
    id: "mice",
    icon: "users",
    title: { fr: "MICE & voyages de groupe", ar: "MICE وأسفار المجموعات" },
    tagline: {
      fr: "Séminaires, congrès & incentives",
      ar: "ندوات، مؤتمرات وحوافز",
    },
    description: {
      fr: "Organisation de séminaires, congrès, expositions et voyages de récompense (incentive), avec une coordination logistique de A à Z, sur place et à distance.",
      ar: "تنظيم الندوات والمؤتمرات والمعارض وأسفار المكافآت، مع تنسيق لوجستي كامل، حضوريًّا وعن بُعد.",
    },
    bullets: [
      { fr: "Séminaires & congrès", ar: "ندوات ومؤتمرات" },
      { fr: "Expositions & événements", ar: "معارض وفعاليات" },
      { fr: "Voyages incentive", ar: "أسفار تحفيزية" },
      { fr: "Logistique A → Z", ar: "لوجستيك من الألف إلى الياء" },
    ],
    image: "/media/services/mice.webp",
  },
  {
    id: "pelerinage",
    icon: "moon",
    title: { fr: "Hajj & Omra", ar: "الحج والعمرة" },
    tagline: {
      fr: "Le pèlerinage en toute sérénité",
      ar: "الحج والعمرة في طمأنينة تامة",
    },
    description: {
      fr: "Organisation complète du Hajj et de la Omra dans le respect des normes religieuses, avec des formules adaptées à tous les budgets et un accompagnement à chaque étape.",
      ar: "تنظيم كامل للحج والعمرة وفق الضوابط الشرعية، مع صيغ تناسب جميع الميزانيات ومرافقة في كل خطوة.",
    },
    bullets: [
      { fr: "Organisation complète", ar: "تنظيم شامل" },
      { fr: "Respect des rites", ar: "احترام المناسك" },
      { fr: "Formules tous budgets", ar: "صيغ لكل الميزانيات" },
      { fr: "Accompagnement dédié", ar: "مرافقة مخصّصة" },
    ],
    image: "/media/services/pelerinage.webp",
  },
  {
    id: "sur-mesure",
    icon: "compass",
    title: { fr: "Voyages sur-mesure", ar: "أسفار حسب الطلب" },
    tagline: {
      fr: "Vacances, noces & croisières",
      ar: "عطل، أعراس ورحلات بحرية",
    },
    description: {
      fr: "Pour les particuliers, nous créons des séjours 100 % sur-mesure : vacances, voyages de noces, croisières et itinéraires personnalisés (aventure, détente, culture).",
      ar: "للأفراد، نصمّم إقامات مخصّصة 100٪: عطل، شهر العسل، رحلات بحرية ومسارات شخصية (مغامرة، استجمام، ثقافة).",
    },
    bullets: [
      { fr: "Voyages de noces", ar: "شهر العسل" },
      { fr: "Croisières", ar: "رحلات بحرية" },
      { fr: "Aventure, détente, culture", ar: "مغامرة، استجمام، ثقافة" },
      { fr: "Tarifs privilégiés partenaires", ar: "أسعار تفضيلية مع الشركاء" },
    ],
    image: "/media/services/sur-mesure.webp",
  },
];

/** « Nos services voyages » à la carte (slide 11). */
export type AlaCarteService = { id: string; icon: string; label: L; desc: L };

export const alaCarteServices: AlaCarteService[] = [
  {
    id: "tickets",
    icon: "ticket",
    label: { fr: "Billetterie", ar: "تذاكر الطيران" },
    desc: { fr: "Vols au meilleur prix, toutes compagnies.", ar: "تذاكر بأفضل الأسعار، جميع الشركات." },
  },
  {
    id: "transport",
    icon: "car",
    label: { fr: "Transport", ar: "النقل" },
    desc: { fr: "Transferts et location de voiture.", ar: "نقل وكراء السيارات." },
  },
  {
    id: "hotel",
    icon: "bed",
    label: { fr: "Hôtellerie", ar: "الفنادق" },
    desc: { fr: "Hébergements sélectionnés partout dans le monde.", ar: "إقامات مختارة في كل أنحاء العالم." },
  },
  {
    id: "autres",
    icon: "sparkles",
    label: { fr: "Autres services", ar: "خدمات أخرى" },
    desc: { fr: "Assurances, visas et services sur demande.", ar: "تأمينات، تأشيرات وخدمات حسب الطلب." },
  },
];

export const getTour = (slug: string) => tours.find((x) => x.slug === slug);
export const getDestination = (slug: string) =>
  destinations.find((x) => x.slug === slug);
