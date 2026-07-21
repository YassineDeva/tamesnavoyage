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

/* -------------------------------------------------------------------------- */
/*  Destination detail content (used by /destinations/[slug])                 */
/* -------------------------------------------------------------------------- */
export type DestinationDetail = {
  intro: L;
  highlights: L[];
  bestTime: L;
  idealFor: L;
  duration: L;
  language: L;
};

export const destinationDetails: Record<string, DestinationDetail> = {
  marrakech: {
    intro: {
      fr: "Cité impériale trépidante, Marrakech mêle souks parfumés, palais somptueux et jardins secrets. Sa médina classée à l'UNESCO bat au rythme de la place Jemaa el-Fna, tandis que la palmeraie et l'Atlas veillent à l'horizon.",
      ar: "مدينة إمبراطورية نابضة، تمزج مراكش بين الأسواق العطرة والقصور الفخمة والحدائق السرّية. مدينتها العتيقة المصنّفة عالميًّا تنبض على إيقاع ساحة جامع الفنا، بينما تحرسها واحة النخيل وجبال الأطلس في الأفق.",
    },
    highlights: [
      { fr: "Place Jemaa el-Fna", ar: "ساحة جامع الفنا" },
      { fr: "Jardin Majorelle", ar: "حديقة ماجوريل" },
      { fr: "Palais Bahia", ar: "قصر الباهية" },
      { fr: "Souks de la médina", ar: "أسواق المدينة العتيقة" },
    ],
    bestTime: { fr: "Mars – Mai & Oct – Nov", ar: "مارس–ماي وأكتوبر–نونبر" },
    idealFor: { fr: "Culture & shopping", ar: "الثقافة والتسوّق" },
    duration: { fr: "3 – 4 jours", ar: "3 – 4 أيام" },
    language: { fr: "Arabe, Français", ar: "العربية، الفرنسية" },
  },
  sahara: {
    intro: {
      fr: "Aux portes du désert, l'Erg Chebbi déroule ses dunes dorées à perte de vue. Balades à dos de dromadaire, nuits en bivouac de luxe et ciels étoilés composent l'une des expériences les plus inoubliables du Maroc.",
      ar: "على أبواب الصحراء، يمدّ عرق الشبي كثبانه الذهبية إلى ما لا نهاية. جولات على الجِمال، وليالٍ في مخيّمات فاخرة، وسماء مرصّعة بالنجوم تصنع واحدة من أكثر التجارب المغربية تأثيرًا.",
    },
    highlights: [
      { fr: "Dunes de l'Erg Chebbi", ar: "كثبان عرق الشبي" },
      { fr: "Nuit en bivouac de luxe", ar: "ليلة في مخيّم فاخر" },
      { fr: "Balade à dos de dromadaire", ar: "جولة على الجِمال" },
      { fr: "Lever de soleil sur les dunes", ar: "شروق الشمس فوق الكثبان" },
    ],
    bestTime: { fr: "Oct – Avr", ar: "أكتوبر – أبريل" },
    idealFor: { fr: "Aventure & nature", ar: "المغامرة والطبيعة" },
    duration: { fr: "2 – 3 jours", ar: "2 – 3 أيام" },
    language: { fr: "Arabe, Amazigh", ar: "العربية، الأمازيغية" },
  },
  chefchaouen: {
    intro: {
      fr: "Nichée dans les montagnes du Rif, la perle bleue enchante par ses ruelles indigo et sa douceur de vivre. On y flâne sans but, entre échoppes d'artisans, cafés paisibles et panoramas sur les sommets.",
      ar: "متربّعة في جبال الريف، تسحر اللؤلؤة الزرقاء بأزقّتها النيليّة وهدوء عيشها. تتجوّل فيها بلا وجهة، بين دكاكين الحرفيّين والمقاهي الهادئة والإطلالات على القمم.",
    },
    highlights: [
      { fr: "Ruelles bleues", ar: "الأزقّة الزرقاء" },
      { fr: "Place Outa el-Hammam", ar: "ساحة وطاء الحمّام" },
      { fr: "Cascades d'Akchour", ar: "شلّالات أقشور" },
      { fr: "Panorama sur le Rif", ar: "إطلالة على الريف" },
    ],
    bestTime: { fr: "Avr – Juin & Sep – Oct", ar: "أبريل–يونيو وشتنبر–أكتوبر" },
    idealFor: { fr: "Photo & détente", ar: "التصوير والاسترخاء" },
    duration: { fr: "1 – 2 jours", ar: "1 – 2 يوم" },
    language: { fr: "Arabe, Amazigh", ar: "العربية، الأمازيغية" },
  },
  fes: {
    intro: {
      fr: "Capitale spirituelle et artisanale du Maroc, Fès abrite la plus vieille médina du monde. Un labyrinthe millénaire de tanneries, medersas et ateliers où chaque ruelle raconte mille ans d'histoire.",
      ar: "العاصمة الروحية والحرفية للمغرب، تحتضن فاس أقدم مدينة عتيقة في العالم. متاهة عمرها قرون من المدابغ والمدارس والورش، حيث يحكي كل زقاق ألف عام من التاريخ.",
    },
    highlights: [
      { fr: "Médina de Fès el-Bali", ar: "مدينة فاس البالي" },
      { fr: "Tanneries Chouara", ar: "مدابغ الشوارة" },
      { fr: "Médersa Bou Inania", ar: "مدرسة بوعنانية" },
      { fr: "Bab Bou Jeloud", ar: "باب بوجلود" },
    ],
    bestTime: { fr: "Mars – Mai & Oct – Nov", ar: "مارس–ماي وأكتوبر–نونبر" },
    idealFor: { fr: "Histoire & artisanat", ar: "التاريخ والحرف" },
    duration: { fr: "2 – 3 jours", ar: "2 – 3 أيام" },
    language: { fr: "Arabe, Français", ar: "العربية، الفرنسية" },
  },
  essaouira: {
    intro: {
      fr: "Face à l'Atlantique, Essaouira séduit par ses remparts battus par les vents, son port bleu animé et sa médina bohème. Un havre de musique gnaoua, de fruits de mer et de sports de glisse.",
      ar: "في مواجهة الأطلسي، تأسر الصويرة بأسوارها التي تعصف بها الرياح، ومينائها الأزرق النابض، ومدينتها البوهيمية. ملاذ لموسيقى كناوة والمأكولات البحرية ورياضات التزلّج على الماء.",
    },
    highlights: [
      { fr: "Remparts & Skala", ar: "الأسوار والسقالة" },
      { fr: "Port de pêche", ar: "ميناء الصيد" },
      { fr: "Plage & kitesurf", ar: "الشاطئ والكايت سيرف" },
      { fr: "Médina bohème", ar: "المدينة البوهيمية" },
    ],
    bestTime: { fr: "Avr – Nov", ar: "أبريل – نونبر" },
    idealFor: { fr: "Océan & musique", ar: "المحيط والموسيقى" },
    duration: { fr: "2 – 3 jours", ar: "2 – 3 أيام" },
    language: { fr: "Arabe, Français", ar: "العربية، الفرنسية" },
  },
  atlas: {
    intro: {
      fr: "Toit du Maroc, le Haut Atlas déroule vallées émeraude, villages berbères perchés et sommets enneigés. Terre de trekking et d'hospitalité, dominée par le Toubkal, plus haut pic d'Afrique du Nord.",
      ar: "سقف المغرب، يمدّ الأطلس الكبير وديانه الزمرّدية وقراه الأمازيغية المعلّقة وقممه المكسوّة بالثلج. أرض للجبال والضيافة، يتوّجها توبقال، أعلى قمّة في شمال إفريقيا.",
    },
    highlights: [
      { fr: "Vallée de l'Ourika", ar: "وادي أوريكا" },
      { fr: "Villages berbères", ar: "القرى الأمازيغية" },
      { fr: "Ascension du Toubkal", ar: "تسلّق توبقال" },
      { fr: "Cols panoramiques", ar: "الممرّات البانورامية" },
    ],
    bestTime: { fr: "Avr – Oct", ar: "أبريل – أكتوبر" },
    idealFor: { fr: "Trek & nature", ar: "المشي الجبلي والطبيعة" },
    duration: { fr: "2 – 4 jours", ar: "2 – 4 أيام" },
    language: { fr: "Amazigh, Arabe", ar: "الأمازيغية، العربية" },
  },
  turkey: {
    intro: {
      fr: "À cheval entre l'Europe et l'Asie, la Turquie fascine par la richesse d'Istanbul, les paysages lunaires de Cappadoce et ses côtes turquoise. Un carrefour de civilisations où mosquées, bazars et montgolfières composent des souvenirs impérissables.",
      ar: "ممتدّة بين أوروبا وآسيا، تبهر تركيا بثراء إسطنبول ومناظر كابادوكيا القمرية وسواحلها الفيروزية. ملتقى حضارات تصنع فيه المساجد والأسواق والمناطيد ذكريات لا تُنسى.",
    },
    highlights: [
      { fr: "Sainte-Sophie & Mosquée Bleue", ar: "آيا صوفيا والمسجد الأزرق" },
      { fr: "Grand Bazar d'Istanbul", ar: "البازار الكبير بإسطنبول" },
      { fr: "Montgolfières de Cappadoce", ar: "مناطيد كابادوكيا" },
      { fr: "Croisière sur le Bosphore", ar: "رحلة بحرية في البوسفور" },
    ],
    bestTime: { fr: "Avr – Juin & Sep – Oct", ar: "أبريل–يونيو وشتنبر–أكتوبر" },
    idealFor: { fr: "Culture & panoramas", ar: "الثقافة والمناظر" },
    duration: { fr: "5 – 7 jours", ar: "5 – 7 أيام" },
    language: { fr: "Turc", ar: "التركية" },
  },
  bali: {
    intro: {
      fr: "Île des dieux, Bali envoûte par ses rizières en terrasses, ses temples suspendus et ses plages de rêve. Entre spiritualité, bien-être et couchers de soleil sur l'océan, c'est une invitation à la sérénité.",
      ar: "جزيرة الآلهة، تسحر بالي بحقول أرزّها المدرّجة ومعابدها المعلّقة وشواطئها الساحرة. بين الروحانية والاستجمام وغروب الشمس على المحيط، إنها دعوة إلى الصفاء.",
    },
    highlights: [
      { fr: "Rizières de Tegallalang", ar: "حقول أرزّ تيغالالانغ" },
      { fr: "Temple d'Uluwatu", ar: "معبد أولواتو" },
      { fr: "Ubud & ses artisans", ar: "أوبود وحرفيّوها" },
      { fr: "Plages de Seminyak", ar: "شواطئ سيمينياك" },
    ],
    bestTime: { fr: "Avr – Oct", ar: "أبريل – أكتوبر" },
    idealFor: { fr: "Nature & bien-être", ar: "الطبيعة والاستجمام" },
    duration: { fr: "7 – 10 jours", ar: "7 – 10 أيام" },
    language: { fr: "Indonésien", ar: "الإندونيسية" },
  },
  zanzibar: {
    intro: {
      fr: "Archipel aux mille épices, Zanzibar marie plages de sable blanc, eaux turquoise et ruelles chargées d'histoire de Stone Town. Un paradis balnéaire au cœur de l'océan Indien.",
      ar: "أرخبيل التوابل، تجمع زنجبار بين شواطئ الرمال البيضاء والمياه الفيروزية وأزقّة ستون تاون المفعمة بالتاريخ. جنّة شاطئية في قلب المحيط الهندي.",
    },
    highlights: [
      { fr: "Stone Town", ar: "ستون تاون" },
      { fr: "Plages de Nungwi", ar: "شواطئ نونغوي" },
      { fr: "Île aux épices", ar: "جزيرة التوابل" },
      { fr: "Bancs de sable turquoise", ar: "الضفاف الرملية الفيروزية" },
    ],
    bestTime: { fr: "Juin – Oct", ar: "يونيو – أكتوبر" },
    idealFor: { fr: "Plage & détente", ar: "الشاطئ والاسترخاء" },
    duration: { fr: "5 – 7 jours", ar: "5 – 7 أيام" },
    language: { fr: "Swahili", ar: "السواحيلية" },
  },
  saudi: {
    intro: {
      fr: "Terre sainte de l'islam, l'Arabie Saoudite accueille chaque année des millions de fidèles à La Mecque et Médine. Tamesna Voyages organise votre Hajj et votre Omra dans le respect des rites, avec un accompagnement attentif à chaque étape.",
      ar: "الأرض المقدّسة للإسلام، تستقبل المملكة العربية السعودية كل عام ملايين المؤمنين في مكة المكرمة والمدينة المنوّرة. تنظّم تامسنا فوياج حجّك وعمرتك وفق المناسك، مع مرافقة دقيقة في كل خطوة.",
    },
    highlights: [
      { fr: "La Kaaba & Masjid al-Haram", ar: "الكعبة والمسجد الحرام" },
      { fr: "Mosquée du Prophète (Médine)", ar: "المسجد النبوي (المدينة)" },
      { fr: "Accompagnement du pèlerinage", ar: "مرافقة المناسك" },
      { fr: "Formules tous budgets", ar: "صيغ لكل الميزانيات" },
    ],
    bestTime: { fr: "Selon le calendrier du Hajj & de la Omra", ar: "حسب موسم الحج والعمرة" },
    idealFor: { fr: "Hajj & Omra", ar: "الحج والعمرة" },
    duration: { fr: "10 – 15 jours", ar: "10 – 15 يومًا" },
    language: { fr: "Arabe", ar: "العربية" },
  },
  maldives: {
    intro: {
      fr: "Écrin de l'océan Indien, les Maldives déploient lagons cristallins, villas sur pilotis et récifs coralliens foisonnants. La destination absolue pour une lune de miel ou une parenthèse de luxe absolu.",
      ar: "جوهرة المحيط الهندي، تنشر المالديف بحيراتها الصافية وفيلاتها فوق الماء وشعابها المرجانية الغنيّة. الوجهة المثالية لشهر عسل أو استراحة فخامة مطلقة.",
    },
    highlights: [
      { fr: "Villas sur pilotis", ar: "فيلات فوق الماء" },
      { fr: "Plongée & snorkeling", ar: "الغوص والغطس" },
      { fr: "Récifs coralliens", ar: "الشعاب المرجانية" },
      { fr: "Couchers de soleil en mer", ar: "غروب الشمس في البحر" },
    ],
    bestTime: { fr: "Nov – Avr", ar: "نونبر – أبريل" },
    idealFor: { fr: "Lune de miel & luxe", ar: "شهر العسل والفخامة" },
    duration: { fr: "5 – 7 jours", ar: "5 – 7 أيام" },
    language: { fr: "Dhivehi, Anglais", ar: "الديفيهية، الإنجليزية" },
  },
  japan: {
    intro: {
      fr: "Entre tradition et ultra-modernité, le Japon fascine : temples de Kyoto, effervescence de Tokyo, mont Fuji et cerisiers en fleurs. Un voyage sensoriel où chaque détail est porté à la perfection.",
      ar: "بين التقليد والحداثة الفائقة، تبهر اليابان: معابد كيوتو، صخب طوكيو، جبل فوجي وأزهار الكرز. رحلة حسّية يُتقَن فيها كل تفصيل إلى حدّ الكمال.",
    },
    highlights: [
      { fr: "Temples de Kyoto", ar: "معابد كيوتو" },
      { fr: "Tokyo & Shibuya", ar: "طوكيو وشيبويا" },
      { fr: "Mont Fuji", ar: "جبل فوجي" },
      { fr: "Cerisiers en fleurs", ar: "أزهار الكرز" },
    ],
    bestTime: { fr: "Mars – Mai & Oct – Nov", ar: "مارس–ماي وأكتوبر–نونبر" },
    idealFor: { fr: "Culture & modernité", ar: "الثقافة والحداثة" },
    duration: { fr: "8 – 12 jours", ar: "8 – 12 يومًا" },
    language: { fr: "Japonais", ar: "اليابانية" },
  },
  safari: {
    intro: {
      fr: "Au cœur des savanes d'Afrique de l'Est, le safari offre des rencontres inoubliables avec la grande faune. Big Five, grande migration et nuits en lodge sous les étoiles : l'aventure à l'état pur.",
      ar: "في قلب سافانا شرق إفريقيا، يقدّم السفاري لقاءات لا تُنسى مع الحياة البرّية. الحيوانات الخمسة الكبرى، الهجرة الكبرى وليالٍ في نُزُل تحت النجوم: المغامرة في أنقى صورها.",
    },
    highlights: [
      { fr: "Les Big Five", ar: "الحيوانات الخمسة الكبرى" },
      { fr: "La grande migration", ar: "الهجرة الكبرى" },
      { fr: "Nuit en lodge", ar: "ليلة في نُزل" },
      { fr: "Montgolfière au lever du jour", ar: "منطاد عند الفجر" },
    ],
    bestTime: { fr: "Juin – Oct", ar: "يونيو – أكتوبر" },
    idealFor: { fr: "Faune & aventure", ar: "الحياة البرّية والمغامرة" },
    duration: { fr: "6 – 8 jours", ar: "6 – 8 أيام" },
    language: { fr: "Swahili, Anglais", ar: "السواحيلية، الإنجليزية" },
  },
  europe: {
    intro: {
      fr: "De Paris à Rome en passant par Barcelone, l'Europe conjugue patrimoine, art de vivre et escapades citadines. Des capitales chargées d'histoire aux terrasses ensoleillées, chaque ville est une nouvelle promesse.",
      ar: "من باريس إلى روما مرورًا ببرشلونة، تجمع أوروبا بين التراث وفنّ العيش وعطل المدن. من العواصم المفعمة بالتاريخ إلى الشرفات المشمسة، كل مدينة وعد جديد.",
    },
    highlights: [
      { fr: "Paris & la Seine", ar: "باريس ونهر السين" },
      { fr: "Rome antique", ar: "روما القديمة" },
      { fr: "Barcelone", ar: "برشلونة" },
      { fr: "Escapades citadines", ar: "عطل المدن" },
    ],
    bestTime: { fr: "Avr – Juin & Sep – Oct", ar: "أبريل–يونيو وشتنبر–أكتوبر" },
    idealFor: { fr: "City-breaks & culture", ar: "عطل المدن والثقافة" },
    duration: { fr: "5 – 8 jours", ar: "5 – 8 أيام" },
    language: { fr: "Multiple", ar: "متعدّدة" },
  },
};

/** All destinations (Morocco + international) for lookups and static params. */
export const allDestinations: Destination[] = [
  ...destinations,
  ...internationalDestinations,
];

export const getTour = (slug: string) => tours.find((x) => x.slug === slug);
export const getDestination = (slug: string) =>
  allDestinations.find((x) => x.slug === slug);
export const getDestinationDetail = (id: string) => destinationDetails[id];
