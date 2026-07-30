import type { L, StayRow, Tour } from "./data";

/**
 * Omra catalogue.
 *
 * The programme below (rites, guided visits, inclusions, paperwork) is the
 * standard Moroccan 15-day Omra format and is stated as fact. What is NOT
 * stated as fact is commercial detail nobody has signed off on yet: every
 * package carries `priceOnRequest` and no hotel names, categories, distances to
 * the Haram or fixed departure dates.
 *
 * ⚠️ TO PUBLISH REAL FARES — fill in, per package:
 *   · `priceMad` + `pricing[]` (per room type) and DROP `priceOnRequest`
 *   · `stay[].hotel` / `.stars` / `.walk` (walking distance to the Haram)
 *   · `hotels[]`, `departures[]`, `flights[]`, `airline`
 * Every one of those slots already renders on the card and the detail page the
 * moment it holds a value — no code change needed.
 */

const ARABIE: L = { fr: "Arabie Saoudite", ar: "المملكة العربية السعودية" };
const CASABLANCA: L = { fr: "Casablanca", ar: "الدار البيضاء" };
const MAKKAH: L = { fr: "La Mecque", ar: "مكة المكرمة" };
const MADINAH: L = { fr: "Médine", ar: "المدينة المنورة" };

const HOTEL_TBC: L = {
  fr: "Hôtel et distance au Haram confirmés à la réservation",
  ar: "الفندق والمسافة إلى الحرم يُؤكَّدان عند الحجز",
};

/** 4 nights in Madinah then 10 in Makkah — the standard 15-day split. */
const STAY_15J: StayRow[] = [
  { city: MADINAH, nights: 4, note: HOTEL_TBC },
  { city: MAKKAH, nights: 10, note: HOTEL_TBC },
];

/** The 15-day programme, identical across departures. */
const ITINERARY_15J: Tour["itinerary"] = [
  {
    day: 1,
    title: { fr: "Casablanca – Médine", ar: "الدار البيضاء – المدينة المنورة" },
    detail: {
      fr: "Envol pour Médine, accueil par notre accompagnateur et transfert à l'hôtel. Installation et repos.",
      ar: "الإقلاع نحو المدينة المنورة، استقبال من طرف مرافقنا والنقل إلى الفندق. الاستقرار والراحة.",
    },
  },
  {
    day: 2,
    title: { fr: "Mosquée du Prophète et Rawda Charifa", ar: "المسجد النبوي والروضة الشريفة" },
    detail: {
      fr: "Prières à la Mosquée du Prophète ﷺ et visite de la Rawda Charifa, avec réservation du créneau via l'application Nusuk.",
      ar: "الصلاة في المسجد النبوي ﷺ وزيارة الروضة الشريفة، مع حجز الموعد عبر تطبيق نسك.",
    },
  },
  {
    day: 3,
    title: { fr: "Les lieux saints de Médine", ar: "المزارات في المدينة المنورة" },
    detail: {
      fr: "Mosquée de Quba, la première mosquée de l'islam, mont Uhud et le cimetière des martyrs, mosquée des Deux Qibla, les Sept Mosquées et les palmeraies de dattes.",
      ar: "مسجد قباء أول مسجد في الإسلام، جبل أُحد ومقبرة الشهداء، مسجد القبلتين، المساجد السبعة وبساتين النخيل.",
    },
  },
  {
    day: 4,
    title: { fr: "Médine – journée libre", ar: "المدينة المنورة – يوم حرّ" },
    detail: {
      fr: "Journée libre consacrée aux prières et à la lecture du Coran, avec temps libre pour les marchés autour du Haram.",
      ar: "يوم حرّ للصلاة وقراءة القرآن، مع وقت حرّ لأسواق محيط الحرم.",
    },
  },
  {
    day: 5,
    title: { fr: "Médine – La Mecque : ihram et Omra", ar: "المدينة – مكة: الإحرام والعمرة" },
    detail: {
      fr: "Route vers La Mecque avec entrée en état d'ihram à Dhul-Hulayfa (Abyar Ali), puis accomplissement de la Omra : tawaf, sa'y entre Safa et Marwa.",
      ar: "الطريق نحو مكة المكرمة مع الإحرام من ذي الحليفة (أبيار علي)، ثم أداء العمرة: الطواف والسعي بين الصفا والمروة.",
    },
  },
  {
    day: 6,
    title: { fr: "La Mecque – prières à la Grande Mosquée", ar: "مكة – الصلاة في المسجد الحرام" },
    detail: {
      fr: "Journée consacrée aux prières à la Masjid al-Haram et au tawaf surérogatoire, à votre rythme.",
      ar: "يوم مخصّص للصلاة في المسجد الحرام وطواف النافلة، على إيقاعك.",
    },
  },
  {
    day: 7,
    title: { fr: "La Mecque – journée libre", ar: "مكة – يوم حرّ" },
    detail: {
      fr: "Prières libres et temps libre pour les marchés et centres commerciaux voisins du Haram.",
      ar: "صلوات حرّة ووقت حرّ للأسواق والمراكز التجارية المجاورة للحرم.",
    },
  },
  {
    day: 8,
    title: { fr: "Les lieux saints de La Mecque", ar: "المزارات في مكة المكرمة" },
    detail: {
      fr: "Mont Thawr, mont an-Nour et la grotte de Hira, puis Arafat, Muzdalifa, Mina et les Jamarat, commentés par notre guide.",
      ar: "جبل ثور، جبل النور وغار حراء، ثم عرفات ومزدلفة ومنى والجمرات، بشرح من مرشدنا.",
    },
  },
  {
    day: 9,
    title: { fr: "Seconde Omra", ar: "عمرة ثانية" },
    detail: {
      fr: "Entrée en ihram à la mosquée d'Aïcha (Tan'im) pour accomplir une seconde Omra.",
      ar: "الإحرام من مسجد عائشة (التنعيم) لأداء عمرة ثانية.",
    },
  },
  {
    day: 10,
    title: { fr: "La Mecque – prières et repos", ar: "مكة – الصلاة والراحة" },
    detail: {
      fr: "Journée de prières et de repos, encadrée par notre accompagnateur religieux.",
      ar: "يوم للصلاة والراحة، بمرافقة مرشدنا الديني.",
    },
  },
  {
    day: 11,
    title: { fr: "La Mecque – journée libre", ar: "مكة – يوم حرّ" },
    detail: {
      fr: "Prières libres à la Grande Mosquée et temps personnel.",
      ar: "صلوات حرّة في المسجد الحرام ووقت شخصي.",
    },
  },
  {
    day: 12,
    title: { fr: "La Mecque – journée libre", ar: "مكة – يوم حرّ" },
    detail: {
      fr: "Journée libre : prières, lecture du Coran ou visite libre des marchés.",
      ar: "يوم حرّ: الصلاة، قراءة القرآن أو زيارة حرّة للأسواق.",
    },
  },
  {
    day: 13,
    title: { fr: "La Mecque – journée libre", ar: "مكة – يوم حرّ" },
    detail: {
      fr: "Dernière journée pleine consacrée aux prières et aux achats de souvenirs.",
      ar: "آخر يوم كامل مخصّص للصلاة وشراء الهدايا.",
    },
  },
  {
    day: 14,
    title: { fr: "Tawaf d'adieu", ar: "طواف الوداع" },
    detail: {
      fr: "Accomplissement du tawaf al-wada' puis préparation du départ.",
      ar: "أداء طواف الوداع ثم التحضير للسفر.",
    },
  },
  {
    day: 15,
    title: { fr: "La Mecque – Casablanca", ar: "مكة – الدار البيضاء" },
    detail: {
      fr: "Transfert vers l'aéroport de Jeddah pour le vol retour vers Casablanca.",
      ar: "النقل إلى مطار جدة لرحلة العودة نحو الدار البيضاء.",
    },
  },
];

const RITUALS_15J: L[] = [
  {
    fr: "Accomplissement de la Omra encadré par un guide religieux marocain",
    ar: "أداء العمرة بمرافقة مرشد ديني مغربي",
  },
  {
    fr: "Réservation du créneau de la Rawda Charifa via l'application Nusuk",
    ar: "حجز موعد الروضة الشريفة عبر تطبيق نسك",
  },
  {
    fr: "Entrée en ihram à Dhul-Hulayfa (Abyar Ali)",
    ar: "الإحرام من ذي الحليفة (أبيار علي)",
  },
  {
    fr: "Seconde Omra depuis la mosquée d'Aïcha (Tan'im)",
    ar: "عمرة ثانية من مسجد عائشة (التنعيم)",
  },
  {
    fr: "Visites commentées des lieux saints de La Mecque et de Médine",
    ar: "زيارات مع شرح للمزارات في مكة المكرمة والمدينة المنورة",
  },
];

const DOCUMENTS: L[] = [
  {
    fr: "Passeport valable au moins 6 mois à la date du départ",
    ar: "جواز سفر صالح لمدة 6 أشهر على الأقل من تاريخ السفر",
  },
  {
    fr: "Photo d'identité récente sur fond blanc",
    ar: "صورة شخصية حديثة بخلفية بيضاء",
  },
  {
    fr: "Carnet de vaccination à jour (méningite ACYW135)",
    ar: "دفتر التلقيح محدَّث (اللقاح الرباعي للحمى الشوكية ACYW135)",
  },
  {
    fr: "Copie de la carte nationale d'identité",
    ar: "نسخة من البطاقة الوطنية للتعريف",
  },
];

const INCLUDED_15J: L[] = [
  { fr: "Visa Omra pour l'Arabie Saoudite", ar: "تأشيرة العمرة إلى المملكة العربية السعودية" },
  { fr: "Assurance médicale pour toute la durée du séjour", ar: "تأمين صحّي طيلة مدّة الإقامة" },
  { fr: "Vol aller-retour au départ de Casablanca", ar: "رحلة الذهاب والإياب انطلاقاً من الدار البيضاء" },
  { fr: "Hébergement à Médine et à La Mecque avec petit déjeuner", ar: "الإقامة بالمدينة المنورة ومكة المكرمة مع الفطور" },
  { fr: "Transferts et transport interne en autocars climatisés", ar: "التنقّلات والنقل الداخلي بحافلات مكيّفة" },
  { fr: "Accompagnement religieux marocain durant tout le séjour", ar: "مرافقة دينية مغربية طيلة الإقامة" },
  { fr: "Visites des lieux saints des deux villes", ar: "زيارة المزارات في المدينتين" },
];

const NOT_INCLUDED_15J: L[] = [
  { fr: "Les déjeuners et les dîners", ar: "وجبات الغداء والعشاء" },
  { fr: "Le sacrifice (hadiya) et les dépenses personnelles", ar: "الهدي والمصاريف الشخصية" },
  { fr: "Les frais de passeport et de vaccination", ar: "مصاريف جواز السفر والتلقيح" },
  {
    fr: "Les extras, les pourboires et tout ce qui n'est pas mentionné au programme",
    ar: "المصاريف الإضافية والإكراميات وكل ما لم يُذكر في البرنامج",
  },
];

const VISA: L = {
  fr: "Le visa Omra est délivré pour un séjour pouvant aller jusqu'à 90 jours et il est pris en charge par l'agence. Il suffit de nous remettre le passeport et la photo ; nous nous occupons du dépôt et du suivi du dossier auprès du prestataire agréé.",
  ar: "تُمنح تأشيرة العمرة لإقامة تصل إلى 90 يوماً وتتكفّل بها الوكالة. يكفي تسليمنا جواز السفر والصورة، ونتولّى نحن إيداع الملف ومتابعته عند المزوّد المعتمد.",
};

/** Shape shared by every 15-day Omra departure. */
const base = {
  zone: ARABIE,
  kind: "omra" as const,
  region: { fr: "La Mecque & Médine", ar: "مكة المكرمة والمدينة المنورة" },
  days: 15,
  nights: 14,
  priceMad: 0,
  priceOnRequest: true,
  level: { fr: "Omra", ar: "عمرة" },
  departureCity: CASABLANCA,
  flightIncluded: true,
  stay: STAY_15J,
  itinerary: ITINERARY_15J,
  rituals: RITUALS_15J,
  documents: DOCUMENTS,
  included: INCLUDED_15J,
  notIncluded: NOT_INCLUDED_15J,
  visa: VISA,
};

export const omraPackages: Tour[] = [
  {
    ...base,
    id: "omra-mawlid-2026",
    slug: "omra-mawlid-2026",
    status: "open",
    title: { fr: "Omra du Mawlid an-Nabawi", ar: "عمرة المولد النبوي" },
    summary: {
      fr: "Quinze jours entre Médine et La Mecque autour du Mawlid an-Nabawi : quatre nuits auprès de la Mosquée du Prophète ﷺ, puis dix nuits à La Mecque, accompagnement religieux marocain du départ au retour.",
      ar: "خمسة عشر يوماً بين المدينة المنورة ومكة المكرمة في موسم المولد النبوي: أربع ليالٍ قرب المسجد النبوي ﷺ، ثم عشر ليالٍ بمكة، مع مرافقة دينية مغربية من الانطلاق إلى العودة.",
    },
    best: { fr: "Août – Septembre 2026", ar: "غشت – شتنبر 2026" },
    image: "/media/destinations/gallery/saudi-1.webp",
    highlights: [
      { fr: "Quatre nuits à Médine, dix nuits à La Mecque", ar: "أربع ليالٍ بالمدينة المنورة وعشر ليالٍ بمكة" },
      { fr: "Visite de la Rawda Charifa réservée via Nusuk", ar: "زيارة الروضة الشريفة بحجز عبر تطبيق نسك" },
      { fr: "Deux Omras : à l'arrivée puis depuis Tan'im", ar: "عمرتان: عند الوصول ثم من التنعيم" },
      { fr: "Visa, assurance et accompagnateur religieux inclus", ar: "التأشيرة والتأمين والمرشد الديني مشمولون" },
    ],
  },

  {
    ...base,
    id: "omra-chawwal-2026",
    slug: "omra-chawwal-2026",
    status: "open",
    title: { fr: "Omra d'automne", ar: "عمرة الخريف" },
    summary: {
      fr: "La même Omra de quinze jours hors des grandes affluences : des Lieux saints plus calmes, les mêmes prestations et le même encadrement religieux marocain.",
      ar: "نفس عمرة الخمسة عشر يوماً بعيداً عن الزحام: أماكن مقدّسة أكثر هدوءاً، بنفس الخدمات ونفس المرافقة الدينية المغربية.",
    },
    best: { fr: "Octobre – Novembre 2026", ar: "أكتوبر – نونبر 2026" },
    image: "/media/destinations/gallery/saudi-2.webp",
    highlights: [
      { fr: "Haram plus calme qu'en haute saison", ar: "الحرم أكثر هدوءاً من الموسم المرتفع" },
      { fr: "Quatre nuits à Médine, dix nuits à La Mecque", ar: "أربع ليالٍ بالمدينة المنورة وعشر ليالٍ بمكة" },
      { fr: "Visites commentées des lieux saints des deux villes", ar: "زيارات مع شرح للمزارات في المدينتين" },
      { fr: "Visa, assurance et accompagnateur religieux inclus", ar: "التأشيرة والتأمين والمرشد الديني مشمولون" },
    ],
  },

  {
    ...base,
    id: "omra-ramadan-2027",
    slug: "omra-ramadan-2027",
    status: "soon",
    title: { fr: "Omra de Ramadan", ar: "عمرة رمضان" },
    summary: {
      fr: "La Omra la plus recherchée de l'année : les nuits de Ramadan à la Grande Mosquée, tarawih derrière l'imam du Haram. Programme en cours de confirmation — inscrivez-vous pour être prévenu à l'ouverture.",
      ar: "أكثر عمرة مطلوبة في السنة: ليالي رمضان في المسجد الحرام وصلاة التراويح خلف إمام الحرم. البرنامج في طور التأكيد — سجّل ليصلك الإشعار عند الافتتاح.",
    },
    best: { fr: "Ramadan 1448 · février – mars 2027", ar: "رمضان 1448 · فبراير – مارس 2027" },
    image: "/media/services/pelerinage.webp",
    highlights: [
      { fr: "Tarawih à la Grande Mosquée", ar: "التراويح في المسجد الحرام" },
      { fr: "Formules dix derniers jours et mois complet", ar: "صيغ العشر الأواخر والشهر الكامل" },
      { fr: "Places limitées, ouverture des inscriptions à venir", ar: "الأماكن محدودة، فتح التسجيل قريباً" },
      { fr: "Visa, assurance et accompagnateur religieux inclus", ar: "التأشيرة والتأمين والمرشد الديني مشمولون" },
    ],
  },
];

export const getOmra = (slug: string) => omraPackages.find((x) => x.slug === slug);
