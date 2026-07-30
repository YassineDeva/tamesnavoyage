import type { L } from "./data";
import type { Locale } from "@/i18n/routing";
import { contact } from "./site";

/**
 * Legal pages — mentions légales, politique de confidentialité, CGV.
 *
 * Written for a Moroccan travel agency: loi 09-08 (protection des données
 * personnelles / CNDP) and loi 31-96 (agences de voyages), with the GDPR
 * mentioned because part of the clientele travels from the EU.
 *
 * Two rules held throughout:
 *
 * 1. Nothing invented. Registry identifiers (RC, ICE, IF, patente, licence du
 *    Ministère du Tourisme, garantie financière, hébergeur) are NOT in this
 *    repository, so they sit empty in `legalEntity` below and each row renders
 *    only once it holds a value. A missing line is a gap the operator fills; a
 *    made-up line is a false statement on a legal page.
 * 2. No contradicting the catalogue. The payment and cancellation figures on
 *    the CGV page are pulled from the same i18n keys the circuit pages already
 *    render (`pages.tourDetail.paymentList` / `cancellationList`), so the two
 *    can never drift apart.
 *
 * ⚠️ Have a Moroccan lawyer read these before they go live. They are a solid,
 * honest starting point, not legal advice.
 */

/** Last review date, shown on every document. */
export const LEGAL_UPDATED = "2026-07-30";

/**
 * Identity of the publisher.
 *
 * ⚠️ TO COMPLETE — every empty string below is a legally expected mention that
 * is simply unknown to this codebase. Fill it from the company's papers and it
 * appears on /legal/mentions-legales automatically.
 */
export const legalEntity = {
  name: "Tamesna Voyages",
  tagline: { fr: "Tourisme & Events", ar: "السياحة والفعاليات" },
  activity: {
    fr: "Agence de voyages et d'événementiel",
    ar: "وكالة أسفار وتنظيم فعاليات",
  } as L,
  address: {
    fr: "Av. Yaâkoub El Mansour, Imm. A, Magasin N°1, Tamesna, Témara, 12000 — Maroc",
    ar: "شارع يعقوب المنصور، عمارة A، محل رقم 1، تامسنا، تمارة، 12000 — المغرب",
  } as L,
  phone: contact.phone,
  email: contact.email,
  site: "www.tamesnavoyages.ma",

  /** Directrice générale, per the brand charter. */
  publisher: "Dalal Semlali",

  /* --- Fill these in ---------------------------------------------------- */
  /** e.g. "SARL", "SARL AU", "SA". */
  legalForm: "",
  /** Share capital, e.g. "100 000 MAD". */
  capital: "",
  /** Registre du commerce + greffe, e.g. "12345 — Tribunal de Rabat". */
  rc: "",
  /** Identifiant Commun de l'Entreprise (15 digits). */
  ice: "",
  /** Identifiant fiscal. */
  taxId: "",
  /** Taxe professionnelle (ex-patente). */
  patente: "",
  /** Licence d'agence de voyages — Ministère du Tourisme, loi 31-96. */
  tourismLicence: "",
  /** Déclaration CNDP (loi 09-08). */
  cndp: "",
  /** Assureur + n° de police pour la RC professionnelle. */
  insurance: "",
  /** Hébergeur du site : raison sociale + adresse. */
  host: "",
};

/** A paragraph, a bullet list, or the identity table. */
export type LegalBlock =
  | { kind: "p"; text: L }
  | { kind: "list"; items: L[] }
  /** Renders `legalEntity`, skipping every field left empty. */
  | { kind: "identity" }
  /**
   * Renders a list straight from i18n so the CGV cannot contradict what the
   * circuit pages say. `keys` are relative to `pages.tourDetail`.
   */
  | { kind: "i18nList"; keys: string[] };

export type LegalSection = { id: string; heading: L; blocks: LegalBlock[] };

export type LegalDoc = {
  slug: string;
  title: L;
  /** Meta description and the lede under the page header. */
  summary: L;
  sections: LegalSection[];
};

/* ========================================================================== */
/*  Mentions légales                                                          */
/* ========================================================================== */

const MENTIONS: LegalDoc = {
  slug: "mentions-legales",
  title: { fr: "Mentions légales", ar: "معلومات قانونية" },
  summary: {
    fr: "Identité de l'éditeur du site, hébergement, propriété intellectuelle et droit applicable.",
    ar: "هوية ناشر الموقع، الاستضافة، الملكية الفكرية والقانون المطبَّق.",
  },
  sections: [
    {
      id: "editeur",
      heading: { fr: "Éditeur du site", ar: "ناشر الموقع" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Le présent site est édité par l'agence Tamesna Voyages, agence de voyages et d'événementiel de droit marocain.",
            ar: "هذا الموقع تنشره وكالة تامسنا فوياج، وكالة أسفار وتنظيم فعاليات خاضعة للقانون المغربي.",
          },
        },
        { kind: "identity" },
      ],
    },
    {
      id: "objet",
      heading: { fr: "Objet du site", ar: "موضوع الموقع" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Le site présente les circuits, séjours, programmes d'Omra et prestations sur-mesure proposés par l'agence, ainsi que ses services de billetterie, d'hôtellerie et d'organisation d'événements. Les informations publiées sont fournies à titre indicatif et ne constituent pas une offre contractuelle : seule la confirmation écrite adressée au client après réservation engage l'agence.",
            ar: "يعرض الموقع الجولات والإقامات وبرامج العمرة والخدمات المخصّصة التي تقترحها الوكالة، إلى جانب خدمات التذاكر والفندقة وتنظيم الفعاليات. المعلومات المنشورة تُقدَّم على سبيل الإرشاد ولا تشكّل عرضاً تعاقدياً: وحده التأكيد الكتابي الموجَّه إلى العميل بعد الحجز يُلزم الوكالة.",
          },
        },
        {
          kind: "p",
          text: {
            fr: "Les prix affichés sont exprimés en dirhams marocains, par personne, et restent susceptibles d'évoluer jusqu'à la confirmation de la réservation, notamment en fonction des tarifs aériens et hôteliers et du taux de change.",
            ar: "الأثمنة المعروضة محدّدة بالدرهم المغربي للشخص الواحد، وتبقى قابلة للتغيير إلى حين تأكيد الحجز، خاصة تبعاً لأسعار الطيران والفندقة وسعر الصرف.",
          },
        },
      ],
    },
    {
      id: "hebergement",
      heading: { fr: "Hébergement", ar: "الاستضافة" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Le site est hébergé par un prestataire technique dont les coordonnées peuvent être obtenues sur simple demande adressée à l'agence.",
            ar: "يستضيف الموقعَ مزوّدٌ تقني يمكن الحصول على معلوماته بمجرّد طلب يوجَّه إلى الوكالة.",
          },
        },
      ],
    },
    {
      id: "propriete",
      heading: { fr: "Propriété intellectuelle", ar: "الملكية الفكرية" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "La charte graphique, le logo, les textes, les photographies et l'ensemble des contenus du site sont protégés par la loi 2-00 relative aux droits d'auteur et droits voisins. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable de l'agence est interdite.",
            ar: "الهوية البصرية والشعار والنصوص والصور وجميع محتويات الموقع محمية بالقانون 2-00 المتعلق بحقوق المؤلف والحقوق المجاورة. يُمنع كل استنساخ أو تمثيل أو تعديل، كلّياً أو جزئياً، دون إذن كتابي مسبق من الوكالة.",
          },
        },
        {
          kind: "p",
          text: {
            fr: "Les marques et logos des compagnies aériennes, chaînes hôtelières et partenaires cités demeurent la propriété de leurs titulaires respectifs et ne sont reproduits qu'à titre d'information.",
            ar: "تبقى علامات وشعارات شركات الطيران والسلاسل الفندقية والشركاء المذكورين ملكاً لأصحابها، ولا تُعرض إلا لغرض الإخبار.",
          },
        },
      ],
    },
    {
      id: "liens",
      heading: { fr: "Liens externes", ar: "الروابط الخارجية" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Le site peut renvoyer vers des sites tiers — partenaires, transporteurs, services consulaires. L'agence n'exerce aucun contrôle sur leur contenu et ne saurait en être tenue responsable.",
            ar: "قد يحيل الموقع إلى مواقع خارجية — شركاء، ناقلون، خدمات قنصلية. لا تمارس الوكالة أيّ رقابة على محتواها ولا تتحمّل أيّ مسؤولية بشأنها.",
          },
        },
      ],
    },
    {
      id: "droit",
      heading: { fr: "Droit applicable", ar: "القانون المطبَّق" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Le présent site et les prestations qui y sont présentées sont régis par le droit marocain. Tout litige relève de la compétence des tribunaux marocains, après recherche d'une solution amiable.",
            ar: "يخضع هذا الموقع والخدمات المعروضة فيه للقانون المغربي. يعود الاختصاص في كل نزاع إلى المحاكم المغربية، بعد السعي إلى حلّ ودّي.",
          },
        },
      ],
    },
  ],
};

/* ========================================================================== */
/*  Politique de confidentialité                                              */
/* ========================================================================== */

const PRIVACY: LegalDoc = {
  slug: "confidentialite",
  title: { fr: "Politique de confidentialité", ar: "سياسة الخصوصية" },
  summary: {
    fr: "Quelles données nous collectons, pourquoi, à qui elles sont transmises et comment exercer vos droits.",
    ar: "ما هي المعطيات التي نجمعها، ولماذا، ولمن تُنقل، وكيف تمارس حقوقك.",
  },
  sections: [
    {
      id: "responsable",
      heading: { fr: "Responsable du traitement", ar: "المسؤول عن المعالجة" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Tamesna Voyages est responsable du traitement des données personnelles collectées via ce site, conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. Pour les voyageurs résidant dans l'Union européenne, le Règlement général sur la protection des données (RGPD) s'applique également.",
            ar: "تُعتبر تامسنا فوياج مسؤولة عن معالجة المعطيات الشخصية المجموعة عبر هذا الموقع، وفقاً للقانون 09-08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي. أما المسافرون المقيمون في الاتحاد الأوروبي فيسري عليهم كذلك النظام الأوروبي العام لحماية المعطيات (RGPD).",
          },
        },
      ],
    },
    {
      id: "donnees",
      heading: { fr: "Données collectées", ar: "المعطيات المجموعة" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Nous ne collectons que les données nécessaires au traitement de votre demande :",
            ar: "لا نجمع إلا المعطيات الضرورية لمعالجة طلبك:",
          },
        },
        {
          kind: "list",
          items: [
            {
              fr: "Formulaire de réservation : nom, adresse e-mail, numéro de téléphone, nombre de voyageurs, voyage concerné et message éventuel.",
              ar: "استمارة الحجز: الاسم، البريد الإلكتروني، رقم الهاتف، عدد المسافرين، السفر المعني ورسالة إن وُجدت.",
            },
            {
              fr: "Inscription à la lettre d'information : adresse e-mail uniquement.",
              ar: "الاشتراك في الرسالة الإخبارية: البريد الإلكتروني فقط.",
            },
            {
              fr: "Constitution d'un dossier de voyage ou de visa : copie du passeport, photo d'identité, et pour l'Omra les informations exigées par les autorités saoudiennes.",
              ar: "تكوين ملف سفر أو تأشيرة: نسخة من جواز السفر، صورة شخصية، وبالنسبة للعمرة المعلومات التي تطلبها السلطات السعودية.",
            },
          ],
        },
        {
          kind: "p",
          text: {
            fr: "Aucune donnée bancaire n'est saisie ni conservée sur ce site.",
            ar: "لا تُدخَل ولا تُحفَظ أيّ معطيات بنكية في هذا الموقع.",
          },
        },
      ],
    },
    {
      id: "finalites",
      heading: { fr: "Finalités et base légale", ar: "الغايات والأساس القانوني" },
      blocks: [
        {
          kind: "list",
          items: [
            {
              fr: "Répondre à vos demandes de devis et gérer vos réservations — exécution du contrat.",
              ar: "الاستجابة لطلبات العروض وتدبير حجوزاتك — تنفيذ العقد.",
            },
            {
              fr: "Accomplir les formalités de voyage : billetterie, hébergement, visa, assurance — exécution du contrat et obligation légale.",
              ar: "إنجاز إجراءات السفر: التذاكر، الإقامة، التأشيرة، التأمين — تنفيذ العقد والالتزام القانوني.",
            },
            {
              fr: "Vous adresser nos offres et notre lettre d'information — sur la base de votre consentement, retirable à tout moment.",
              ar: "توجيه عروضنا ورسالتنا الإخبارية إليك — على أساس موافقتك، القابلة للسحب في أيّ وقت.",
            },
          ],
        },
      ],
    },
    {
      id: "destinataires",
      heading: { fr: "Destinataires des données", ar: "المرسَل إليهم" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Vos données ne sont ni vendues ni louées. Elles sont transmises uniquement à ce que le voyage exige :",
            ar: "لا تُبَاع معطياتك ولا تُكرى. لا تُنقل إلا لما يقتضيه السفر:",
          },
        },
        {
          kind: "list",
          items: [
            {
              fr: "Compagnies aériennes, hôtels et prestataires locaux, pour l'émission des billets et des réservations.",
              ar: "شركات الطيران والفنادق والمزوّدون المحليون، لإصدار التذاكر والحجوزات.",
            },
            {
              fr: "Autorités consulaires et prestataires agréés de visa, pour l'instruction des dossiers — ce qui implique, pour l'Omra, un transfert de données vers l'Arabie Saoudite.",
              ar: "السلطات القنصلية ومزوّدو التأشيرات المعتمدون، لدراسة الملفات — وهذا يعني، في حالة العمرة، نقل معطيات نحو المملكة العربية السعودية.",
            },
            {
              fr: "Compagnies d'assurance, pour la couverture médicale et d'assistance.",
              ar: "شركات التأمين، لأجل التغطية الصحية والمساعدة.",
            },
          ],
        },
        {
          kind: "p",
          text: {
            fr: "Ces transferts hors du Maroc sont limités à ce qui est strictement nécessaire à la réalisation du voyage que vous avez demandé.",
            ar: "تبقى عمليات النقل هذه خارج المغرب محدودة بما هو ضروري تماماً لإنجاز السفر الذي طلبته.",
          },
        },
      ],
    },
    {
      id: "conservation",
      heading: { fr: "Durée de conservation", ar: "مدّة الحفظ" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Les demandes restées sans suite sont conservées douze mois. Les dossiers de voyage sont conservés le temps requis par les obligations comptables et fiscales. Les adresses inscrites à la lettre d'information le sont jusqu'au retrait du consentement.",
            ar: "تُحفَظ الطلبات التي لم تُتابَع لمدة اثني عشر شهراً. وتُحفَظ ملفات السفر المدّة التي تقتضيها الالتزامات المحاسبية والجبائية. أما عناوين المشتركين في الرسالة الإخبارية فتُحفَظ إلى حين سحب الموافقة.",
          },
        },
      ],
    },
    {
      id: "droits",
      heading: { fr: "Vos droits", ar: "حقوقك" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression sur vos données. Pour l'exercer, écrivez-nous en précisant votre demande :",
            ar: "لك حق الولوج إلى معطياتك وتصحيحها والتعرّض عليها وحذفها. لممارسة هذا الحق، اكتب إلينا موضّحاً طلبك:",
          },
        },
        {
          kind: "list",
          items: [
            { fr: `Par e-mail : ${contact.email}`, ar: `بالبريد الإلكتروني: ${contact.email}` },
            { fr: `Par téléphone : ${contact.phone}`, ar: `بالهاتف: ${contact.phone}` },
          ],
        },
        {
          kind: "p",
          text: {
            fr: "Vous pouvez également saisir la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) si vous estimez que vos droits ne sont pas respectés.",
            ar: "كما يمكنك اللجوء إلى اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي (CNDP) إذا اعتبرت أن حقوقك لم تُحترَم.",
          },
        },
      ],
    },
    {
      id: "cookies",
      heading: { fr: "Cookies", ar: "ملفات التعريف" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Ce site utilise les cookies techniques nécessaires à son fonctionnement, notamment la mémorisation de la langue choisie. Aucun cookie publicitaire n'est déposé sans votre accord préalable.",
            ar: "يستعمل هذا الموقع ملفات التعريف التقنية اللازمة لعمله، ومنها تذكّر اللغة المختارة. ولا يُودَع أيّ ملف تعريف إشهاري دون موافقتك المسبقة.",
          },
        },
      ],
    },
  ],
};

/* ========================================================================== */
/*  Conditions générales de vente                                             */
/* ========================================================================== */

const TERMS: LegalDoc = {
  slug: "conditions-generales",
  title: { fr: "Conditions générales de vente", ar: "الشروط العامة للبيع" },
  summary: {
    fr: "Réservation, paiement, annulation, documents de voyage et responsabilités.",
    ar: "الحجز، الأداء، الإلغاء، وثائق السفر والمسؤوليات.",
  },
  sections: [
    {
      id: "objet",
      heading: { fr: "Objet et champ d'application", ar: "الموضوع ومجال التطبيق" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Les présentes conditions régissent la vente des circuits, séjours, programmes d'Omra et prestations à la carte proposés par Tamesna Voyages. Toute réservation implique leur acceptation sans réserve.",
            ar: "تنظّم هذه الشروط بيع الجولات والإقامات وبرامج العمرة والخدمات المفردة التي تقترحها تامسنا فوياج. وكلّ حجز يعني قبولها دون تحفّظ.",
          },
        },
      ],
    },
    {
      id: "reservation",
      heading: { fr: "Réservation et confirmation", ar: "الحجز والتأكيد" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Une demande formulée depuis le site ou par téléphone ne vaut pas réservation. La réservation devient ferme à la réception de la confirmation écrite de l'agence et du versement de l'acompte prévu ci-dessous. Les places sont attribuées dans la limite des disponibilités au moment de la confirmation.",
            ar: "لا يُعتبر الطلب المقدَّم عبر الموقع أو الهاتف حجزاً. يصبح الحجز نهائياً عند تلقّي التأكيد الكتابي من الوكالة وأداء التسبيق المنصوص عليه أدناه. وتُمنح الأماكن في حدود المتوفّر عند التأكيد.",
          },
        },
      ],
    },
    {
      id: "prix",
      heading: { fr: "Prix", ar: "الأثمنة" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Les prix sont indiqués en dirhams marocains et par personne, sur la base d'occupation précisée au programme. Ils comprennent les prestations expressément listées sous « Ce qui est inclus » et excluent celles listées sous « Ce qui n'est pas inclus ».",
            ar: "الأثمنة محدّدة بالدرهم المغربي وللشخص الواحد، على أساس نوع الإشغال المذكور في البرنامج. وتشمل الخدمات المدرَجة صريحاً تحت «ما يشمله» وتستثني المدرَجة تحت «ما لا يشمله».",
          },
        },
        { kind: "i18nList", keys: ["pricingNote"] },
        {
          kind: "p",
          text: {
            fr: "Les programmes dont le tarif est annoncé « sur demande » ne sont chiffrés qu'après confirmation des vols et des hôtels ; le prix communiqué au client fait alors seul foi.",
            ar: "أما البرامج التي يُعلَن ثمنها «على الطلب» فلا تُحدَّد أثمنتها إلا بعد تأكيد الرحلات والفنادق؛ ويكون الثمن المبلَّغ للعميل حينها هو المرجع الوحيد.",
          },
        },
      ],
    },
    {
      id: "paiement",
      heading: { fr: "Modalités de paiement", ar: "شروط الأداء" },
      blocks: [
        { kind: "i18nList", keys: ["paymentList.p1", "paymentList.p2"] },
        {
          kind: "p",
          text: {
            fr: "À défaut de règlement du solde dans le délai prévu, l'agence peut annuler la réservation et appliquer les frais d'annulation ci-dessous.",
            ar: "في حال عدم أداء المتبقّي في الأجل المحدَّد، يمكن للوكالة إلغاء الحجز وتطبيق رسوم الإلغاء المذكورة أدناه.",
          },
        },
      ],
    },
    {
      id: "annulation",
      heading: { fr: "Annulation par le client", ar: "الإلغاء من طرف العميل" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Toute annulation doit être notifiée par écrit. Les frais retenus sont calculés sur le prix total du voyage :",
            ar: "يجب الإشعار بكلّ إلغاء كتابةً. وتُحسَب الرسوم المحتفَظ بها على أساس الثمن الإجمالي للسفر:",
          },
        },
        {
          kind: "i18nList",
          keys: ["cancellationList.c1", "cancellationList.c2", "cancellationList.c3"],
        },
        {
          kind: "p",
          text: {
            fr: "Les frais de visa, d'assurance et les billets déjà émis restent dus en toutes circonstances, ces prestations étant non remboursables dès leur délivrance.",
            ar: "تبقى مصاريف التأشيرة والتأمين والتذاكر المُصدَرة مستحقّة في جميع الأحوال، لكون هذه الخدمات غير قابلة للاسترداد بمجرّد إصدارها.",
          },
        },
      ],
    },
    {
      id: "modification",
      heading: {
        fr: "Modification ou annulation par l'agence",
        ar: "التعديل أو الإلغاء من طرف الوكالة",
      },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "L'agence peut être contrainte de modifier un programme pour des raisons de sécurité, de météo, de décision d'un transporteur ou d'une autorité, ou faute d'un nombre suffisant de participants. Elle propose alors une prestation équivalente ou, si le client la refuse, le remboursement intégral des sommes versées, à l'exclusion de toute autre indemnité.",
            ar: "قد تُضطرّ الوكالة إلى تعديل برنامج لأسباب أمنية أو مناخية، أو بقرار من ناقل أو سلطة، أو لعدم كفاية عدد المشاركين. وتقترح حينها خدمة معادِلة، أو تُرجع كامل المبالغ المؤدّاة إن رفض العميل ذلك، دون أيّ تعويض آخر.",
          },
        },
        {
          kind: "p",
          text: {
            fr: "L'ordre des visites d'un circuit peut être réaménagé sur place sans que le contenu global de la prestation en soit réduit.",
            ar: "يمكن إعادة ترتيب الزيارات داخل الجولة على عين المكان، دون أن يُنقَص من المحتوى الإجمالي للخدمة.",
          },
        },
      ],
    },
    {
      id: "documents",
      heading: { fr: "Documents de voyage et visa", ar: "وثائق السفر والتأشيرة" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Il appartient au client de détenir un passeport en cours de validité — au minimum six mois après la date de retour pour la plupart des destinations — et de fournir en temps utile les pièces demandées pour le dossier de visa.",
            ar: "يتحمّل العميل مسؤولية حَمْل جواز سفر ساري الصلاحية — ستة أشهر على الأقل بعد تاريخ العودة في معظم الوجهات — وتقديم الوثائق المطلوبة لملفّ التأشيرة في الوقت المناسب.",
          },
        },
        {
          kind: "p",
          text: {
            fr: "L'agence dépose et suit les dossiers de visa mais ne décide pas de leur issue. Un refus de visa, un document non conforme ou remis tardivement, ainsi qu'un refus d'embarquement qui en découlerait, ne peuvent engager sa responsabilité et sont traités comme une annulation du fait du client.",
            ar: "تودع الوكالة ملفات التأشيرة وتتابعها، لكنها لا تقرّر نتيجتها. ولا يمكن أن تترتّب مسؤوليتها عن رفض تأشيرة أو وثيقة غير مطابقة أو مسلَّمة متأخّرة، ولا عن منع الصعود إلى الطائرة الناتج عن ذلك، وتُعالَج هذه الحالات كإلغاء من فعل العميل.",
          },
        },
      ],
    },
    {
      id: "responsabilite",
      heading: { fr: "Responsabilité", ar: "المسؤولية" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "L'agence agit en qualité d'intermédiaire entre le client et les prestataires — transporteurs, hôteliers, réceptifs. Sa responsabilité ne peut être engagée en cas de force majeure, de fait d'un tiers, de retard ou d'annulation imputable à un transporteur, ni pour les pertes, vols et dommages affectant les bagages et effets personnels.",
            ar: "تتصرّف الوكالة بصفة وسيط بين العميل والمزوّدين — الناقلون، الفندقيون، المتعهّدون المحليون. ولا تترتّب مسؤوليتها في حالة القوّة القاهرة أو فعل الغير أو تأخّر أو إلغاء يُنسَب إلى ناقل، ولا عن فقدان الأمتعة والأغراض الشخصية أو سرقتها أو تضرّرها.",
          },
        },
        {
          kind: "p",
          text: {
            fr: "Le client doit respecter les lois et usages des pays visités. Tout comportement conduisant à son exclusion du groupe par une autorité ou un prestataire reste à sa charge exclusive.",
            ar: "على العميل احترام قوانين وأعراف البلدان المُزارة. ويبقى على عاتقه وحده كلّ سلوك يؤدّي إلى استبعاده من المجموعة من طرف سلطة أو مزوّد.",
          },
        },
      ],
    },
    {
      id: "reclamations",
      heading: { fr: "Réclamations", ar: "الشكايات" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Toute réclamation doit être adressée par écrit dans les trente jours suivant le retour, accompagnée des pièces justificatives. Les parties s'efforcent de trouver une solution amiable avant toute action judiciaire.",
            ar: "توجَّه كلّ شكاية كتابةً في أجل ثلاثين يوماً بعد العودة، مرفقةً بالوثائق المثبِتة. ويسعى الطرفان إلى حلّ ودّي قبل أيّ مسطرة قضائية.",
          },
        },
        {
          kind: "list",
          items: [
            { fr: `E-mail : ${contact.email}`, ar: `البريد الإلكتروني: ${contact.email}` },
            { fr: `Téléphone : ${contact.phone}`, ar: `الهاتف: ${contact.phone}` },
          ],
        },
      ],
    },
    {
      id: "droit",
      heading: { fr: "Droit applicable", ar: "القانون المطبَّق" },
      blocks: [
        {
          kind: "p",
          text: {
            fr: "Les présentes conditions sont soumises au droit marocain. À défaut d'accord amiable, les tribunaux marocains sont seuls compétents.",
            ar: "تخضع هذه الشروط للقانون المغربي. وفي حال عدم التوصّل إلى اتفاق ودّي، تكون المحاكم المغربية وحدها المختصّة.",
          },
        },
      ],
    },
  ],
};

export const legalDocs: LegalDoc[] = [MENTIONS, PRIVACY, TERMS];

export const getLegalDoc = (slug: string) =>
  legalDocs.find((d) => d.slug === slug);

/**
 * Identity rows for the mentions légales, minus everything left unfilled — so
 * the table shows what is known and never a blank or an invented identifier.
 */
export function identityRows(locale: Locale): { label: L; value: string }[] {
  const e = legalEntity;
  const rows: { label: L; value: string }[] = [
    { label: { fr: "Dénomination", ar: "التسمية" }, value: e.name },
    { label: { fr: "Activité", ar: "النشاط" }, value: e.activity[locale] },
    { label: { fr: "Adresse", ar: "العنوان" }, value: e.address[locale] },
    { label: { fr: "Forme juridique", ar: "الشكل القانوني" }, value: e.legalForm },
    { label: { fr: "Capital social", ar: "الرأسمال" }, value: e.capital },
    { label: { fr: "Registre du commerce", ar: "السجل التجاري" }, value: e.rc },
    { label: { fr: "ICE", ar: "المعرّف الموحّد للمقاولة" }, value: e.ice },
    { label: { fr: "Identifiant fiscal", ar: "المعرّف الجبائي" }, value: e.taxId },
    { label: { fr: "Taxe professionnelle", ar: "الرسم المهني" }, value: e.patente },
    {
      label: { fr: "Licence d'agence de voyages", ar: "رخصة وكالة الأسفار" },
      value: e.tourismLicence,
    },
    { label: { fr: "Déclaration CNDP", ar: "تصريح CNDP" }, value: e.cndp },
    { label: { fr: "Assurance RC professionnelle", ar: "التأمين على المسؤولية المدنية المهنية" }, value: e.insurance },
    { label: { fr: "Directrice de la publication", ar: "مديرة النشر" }, value: e.publisher },
    { label: { fr: "Téléphone", ar: "الهاتف" }, value: e.phone },
    { label: { fr: "E-mail", ar: "البريد الإلكتروني" }, value: e.email },
    { label: { fr: "Site", ar: "الموقع" }, value: e.site },
    { label: { fr: "Hébergeur", ar: "المستضيف" }, value: e.host },
  ];
  return rows.filter((r) => r.value !== "");
}
