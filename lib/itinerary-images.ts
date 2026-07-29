import type { L } from "./data";

/**
 * Two illustrations per itinerary day, picked from that day's title and
 * detail. Every shot is an Unsplash photo under the Unsplash License — free
 * for commercial use, no attribution required (https://unsplash.com/license).
 * `images.unsplash.com` is allow-listed in `next.config.ts`, so Next/Image
 * optimises them exactly like a local asset, and `Media` falls back to the
 * brand gradient if one ever stops resolving.
 *
 * The bank is keyed by subject rather than by day so a shot can serve several
 * days and several programmes; `byTour` pairs each day with two of them. The
 * label doubles as the alt text, which is why it names what is in frame rather
 * than repeating the day heading.
 */
export type DayImage = { src: string; alt: L };

const bank = {
  "adriatic-road": {
    src: "https://images.unsplash.com/photo-1780587427463-2468043226b7?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Route côtière de l'Adriatique", ar: "الطريق الساحلي على الأدرياتيكي" },
  },
  "aegean-cove": {
    src: "https://images.unsplash.com/photo-1600194795031-e8c60926db4f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Crique aux eaux claires", ar: "خليج صغير بمياه صافية" },
  },
  "airplane-wing": {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "En vol vers la destination", ar: "في الجوّ نحو الوجهة" },
  },
  "airport-terminal": {
    src: "https://images.unsplash.com/photo-1553619948-505cc1cdc320?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Départ à l'aéroport", ar: "المغادرة من المطار" },
  },
  "albanian-coast": {
    src: "https://images.unsplash.com/photo-1556489819-3b1be20e1d54?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Littoral albanais", ar: "الساحل الألباني" },
  },
  "alexandria-corniche": {
    src: "https://images.unsplash.com/photo-1722264221001-211fd811a57a?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Corniche d'Alexandrie", ar: "كورنيش الإسكندرية" },
  },
  "anatolia-landscape": {
    src: "https://images.unsplash.com/photo-1694838877052-1fd4bae14174?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Paysages d'Anatolie", ar: "مناظر الأناضول" },
  },
  "antalya-marina": {
    src: "https://images.unsplash.com/photo-1648325129746-abcc1b872380?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vieux port d'Antalya", ar: "الميناء القديم بأنطاليا" },
  },
  aspendos: {
    src: "https://images.unsplash.com/photo-1659375653731-6d88cd30fb8f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Théâtre antique de la région d'Antalya", ar: "المسرح الأثري بنواحي أنطاليا" },
  },
  "azmak-river": {
    src: "https://images.unsplash.com/photo-1642588894968-f5946658dba8?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Rivière Azmak à Akyaka", ar: "نهر أزماك في أكياكا" },
  },
  "beach-sunset": {
    src: "https://images.unsplash.com/photo-1707990756580-05a469007cb4?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Coucher de soleil sur la plage", ar: "غروب الشمس على الشاطئ" },
  },
  "beijing-skyline": {
    src: "https://images.unsplash.com/photo-1708660367433-01261c964b8d?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Panorama de Pékin", ar: "بانوراما بكين" },
  },
  berat: {
    src: "https://images.unsplash.com/photo-1623167428954-be47340e0812?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Berat, la ville aux mille fenêtres", ar: "بيرات، مدينة الألف نافذة" },
  },
  "big-ben": {
    src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Big Ben et le palais de Westminster", ar: "بيغ بن وقصر وستمنستر" },
  },
  "birds-nest": {
    src: "https://images.unsplash.com/photo-1647549666881-d1d23dd72f78?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Stade national de Pékin", ar: "الملعب الوطني ببكين" },
  },
  "blue-mosque": {
    src: "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Mosquée Bleue, Istanbul", ar: "المسجد الأزرق، إسطنبول" },
  },
  "bodrum-castle": {
    src: "https://images.unsplash.com/photo-1760197045829-221c11482607?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Château Saint-Pierre de Bodrum", ar: "قلعة القدّيس بطرس ببودروم" },
  },
  "bodrum-marina": {
    src: "https://images.unsplash.com/photo-1727713682954-271a2135c375?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Marina de Bodrum", ar: "مارينا بودروم" },
  },
  "bosphorus-cruise": {
    src: "https://images.unsplash.com/photo-1691324745671-5492378d1695?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Croisière sur le Bosphore", ar: "رحلة بحرية في البوسفور" },
  },
  "bosphorus-night": {
    src: "https://images.unsplash.com/photo-1518084823714-2f59a7315a39?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Le Bosphore illuminé", ar: "البوسفور المضاء" },
  },
  "british-museum": {
    src: "https://images.unsplash.com/photo-1577729507926-78897cc4de05?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "British Museum, Londres", ar: "المتحف البريطاني، لندن" },
  },
  "buckingham-palace": {
    src: "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Buckingham Palace", ar: "قصر باكنغهام" },
  },
  "budva-beach": {
    src: "https://images.unsplash.com/photo-1652012787970-584a54206c85?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Plages de Budva", ar: "شواطئ بودفا" },
  },
  "budva-old-town": {
    src: "https://images.unsplash.com/photo-1664958451522-90ce9fd47b2c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vieille ville de Budva", ar: "مدينة بودفا العتيقة" },
  },
  burano: {
    src: "https://images.unsplash.com/photo-1619339163285-0b384b75b5e8?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Maisons colorées de Burano", ar: "بيوت بورانو الملوّنة" },
  },
  "bursa-mosque": {
    src: "https://images.unsplash.com/photo-1690976370084-905003c834ba?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Mosquée de Bursa", ar: "جامع بورصة" },
  },
  butrint: {
    src: "https://images.unsplash.com/photo-1628271996568-355af7a34fa1?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Site antique de Butrint", ar: "موقع بوترينت الأثري" },
  },
  "butterfly-valley": {
    src: "https://images.unsplash.com/photo-1695735943992-6de4b93e56e3?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vallée des Papillons, Fethiye", ar: "وادي الفراشات، فتحية" },
  },
  "cairo-citadel": {
    src: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Citadelle et mosquées du Caire", ar: "قلعة القاهرة ومساجدها" },
  },
  calligraphy: {
    src: "https://images.unsplash.com/photo-1546638008-efbe0b62c730?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Atelier de calligraphie chinoise", ar: "ورشة الخطّ الصيني" },
  },
  "cappadocia-balloons": {
    src: "https://images.unsplash.com/photo-1604156789095-3348604c0f43?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Montgolfières au-dessus de la Cappadoce", ar: "مناطيد فوق كابادوكيا" },
  },
  "cave-city": {
    src: "https://images.unsplash.com/photo-1669046639202-339a501ae245?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Ville souterraine de Cappadoce", ar: "مدينة كابادوكيا الجوفية" },
  },
  "china-bullet-train": {
    src: "https://images.unsplash.com/photo-1607426083183-74e497672a8f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Train à grande vitesse chinois", ar: "القطار الصيني فائق السرعة" },
  },
  "china-tea-fields": {
    src: "https://images.unsplash.com/photo-1714241159015-fc7bd2fda53d?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Plantations de thé", ar: "حقول الشاي" },
  },
  "coach-bus": {
    src: "https://images.unsplash.com/photo-1730127143554-4342739f2732?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Autocar de tourisme", ar: "حافلة سياحية" },
  },
  "corfu-old-town": {
    src: "https://images.unsplash.com/photo-1682197289142-424218d0cd7c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vieille ville de Corfou", ar: "مدينة كورفو العتيقة" },
  },
  "countryside-train": {
    src: "https://images.unsplash.com/photo-1684431186863-64f43181a0ad?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Train à travers la campagne anglaise", ar: "قطار عبر الريف الإنجليزي" },
  },
  "dinner-cruise": {
    src: "https://images.unsplash.com/photo-1692735678510-03d976e6565e?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Dîner-croisière en soirée", ar: "عشاء على متن باخرة مساءً" },
  },
  "doges-palace": {
    src: "https://images.unsplash.com/photo-1631995225772-dfec39e1403e?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Palais des Doges, Venise", ar: "قصر الدوجي، البندقية" },
  },
  "dubrovnik-adriatic": {
    src: "https://images.unsplash.com/photo-1594754492697-990e41b6b07b?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Côte adriatique à Dubrovnik", ar: "الساحل الأدرياتيكي بدوبروفنيك" },
  },
  "dubrovnik-walls": {
    src: "https://images.unsplash.com/photo-1414862625453-d87604a607e4?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Remparts de Dubrovnik", ar: "أسوار دوبروفنيك" },
  },
  "duden-waterfall": {
    src: "https://images.unsplash.com/photo-1585473568361-b289de1eaa6f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Cascade de Düden, Antalya", ar: "شلّال دودن، أنطاليا" },
  },
  "durham-cathedral": {
    src: "https://images.unsplash.com/photo-1699465924373-131dc878dab7?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Cathédrale de Durham", ar: "كاتدرائية درم" },
  },
  durres: {
    src: "https://images.unsplash.com/photo-1742244563308-abf90bfd42b4?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Bord de mer albanais à Durrës", ar: "الواجهة البحرية بدوريس" },
  },
  "edfu-temple": {
    src: "https://images.unsplash.com/photo-1660705630675-d66d60fdca46?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Temple d'Edfou", ar: "معبد إدفو" },
  },
  "edinburgh-castle": {
    src: "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Château d'Édimbourg", ar: "قلعة إدنبرة" },
  },
  "edinburgh-old-town": {
    src: "https://images.unsplash.com/photo-1709531766566-7e26b3ea582d?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vieille ville d'Édimbourg", ar: "مدينة إدنبرة العتيقة" },
  },
  "egyptian-museum": {
    src: "https://images.unsplash.com/photo-1707068226685-27a15039f19b?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Musée égyptien du Caire", ar: "المتحف المصري بالقاهرة" },
  },
  "fairy-chimneys": {
    src: "https://images.unsplash.com/photo-1643354812958-b648b92dc6c5?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Cheminées de fées de Cappadoce", ar: "مداخن الجنّ بكابادوكيا" },
  },
  "florence-duomo": {
    src: "https://images.unsplash.com/photo-1687817997684-c9335cce7c5c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Duomo de Florence", ar: "كاتدرائية فلورنسا" },
  },
  "florence-skyline": {
    src: "https://images.unsplash.com/photo-1526216538347-8a69e894ae24?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Panorama de Florence", ar: "بانوراما فلورنسا" },
  },
  "forbidden-city": {
    src: "https://images.unsplash.com/photo-1614555383820-941c466f1b52?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Cité interdite, Pékin", ar: "المدينة المحرّمة، بكين" },
  },
  "galleria-vittorio": {
    src: "https://images.unsplash.com/photo-1620475655006-0f0c6a10a221?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Galleria Vittorio Emanuele II, Milan", ar: "رواق فيتوريو إيمانويلي الثاني، ميلانو" },
  },
  "giza-pyramids": {
    src: "https://images.unsplash.com/photo-1600520611035-84157ad4084d?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Pyramides de Gizeh", ar: "أهرامات الجيزة" },
  },
  "grand-bazaar": {
    src: "https://images.unsplash.com/photo-1689760661321-ad2aec0548ae?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Grand Bazar d'Istanbul", ar: "البازار الكبير بإسطنبول" },
  },
  "great-wall": {
    src: "https://images.unsplash.com/photo-1608037521277-154cd1b89191?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Grande Muraille de Chine", ar: "سور الصين العظيم" },
  },
  "guilin-landscape": {
    src: "https://images.unsplash.com/photo-1554950113-4f3081cb3a41?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Paysages karstiques de Guilin", ar: "مناظر غويلين الكارستية" },
  },
  "hagia-sophia": {
    src: "https://images.unsplash.com/photo-1683874350903-8151d987fef4?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Sainte-Sophie, Istanbul", ar: "آيا صوفيا، إسطنبول" },
  },
  hierapolis: {
    src: "https://images.unsplash.com/photo-1723372401041-d94ab970266d?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Théâtre antique de Hiérapolis", ar: "المسرح الأثري بهيرابوليس" },
  },
  "hotel-room": {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Chambre d'hôtel", ar: "غرفة الفندق" },
  },
  "hurghada-beach": {
    src: "https://images.unsplash.com/photo-1667852976428-3b6f59f0db4f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Plage de Hurghada", ar: "شاطئ الغردقة" },
  },
  "hurghada-resort": {
    src: "https://images.unsplash.com/photo-1738935457539-936fdb320c51?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Resort au bord de la mer Rouge", ar: "منتجع على البحر الأحمر" },
  },
  hutong: {
    src: "https://images.unsplash.com/photo-1772764058009-e6cb2203d773?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Hutongs de Pékin", ar: "أزقّة الهوتونغ ببكين" },
  },
  "istanbul-skyline": {
    src: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Panorama d'Istanbul", ar: "بانوراما إسطنبول" },
  },
  "istanbul-street": {
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Rues d'Istanbul", ar: "شوارع إسطنبول" },
  },
  "istiklal-taksim": {
    src: "https://images.unsplash.com/photo-1674714853921-4835e0085763?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Tram de l'avenue Istiklal", ar: "ترام شارع الاستقلال" },
  },
  "italy-train": {
    src: "https://images.unsplash.com/photo-1683539404327-5ef034106d6c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Train entre les villes italiennes", ar: "قطار بين المدن الإيطالية" },
  },
  kaleici: {
    src: "https://images.unsplash.com/photo-1654162148114-a04db0a49616?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vieille ville de Kaleiçi, Antalya", ar: "مدينة كاليتشي العتيقة، أنطاليا" },
  },
  "karnak-temple": {
    src: "https://images.unsplash.com/photo-1643806294274-2db9dcbfe7a5?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Temple de Karnak, Louxor", ar: "معبد الكرنك، الأقصر" },
  },
  "khan-el-khalili": {
    src: "https://images.unsplash.com/photo-1710211288826-b7df3ab71588?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Souk Khan el-Khalili, Le Caire", ar: "سوق خان الخليلي، القاهرة" },
  },
  "kom-ombo": {
    src: "https://images.unsplash.com/photo-1557640047-75c97a5f1ea4?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Temple de Kom Ombo", ar: "معبد كوم أمبو" },
  },
  "konya-mevlana": {
    src: "https://images.unsplash.com/photo-1759930018775-bf3c3fe9bdc6?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Mausolée de Mevlana, Konya", ar: "ضريح مولانا، قونية" },
  },
  "kotor-bay": {
    src: "https://images.unsplash.com/photo-1614122027743-50a9e6e8002f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Baie de Kotor", ar: "خليج كوتور" },
  },
  "kruja-castle": {
    src: "https://images.unsplash.com/photo-1721213784726-915fdee1940d?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Château de Kruja", ar: "قلعة كرويا" },
  },
  "ksamil-beach": {
    src: "https://images.unsplash.com/photo-1588883233496-ba8945a53460?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Plages de Ksamil", ar: "شواطئ كسميل" },
  },
  "li-river-raft": {
    src: "https://images.unsplash.com/photo-1772490184745-2c8e0ebbab4d?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Radeau sur la rivière Li", ar: "طوف على نهر لي" },
  },
  "london-eye": {
    src: "https://images.unsplash.com/photo-1587659901518-7020d4413085?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "London Eye", ar: "عين لندن" },
  },
  "london-skyline": {
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Panorama de Londres", ar: "بانوراما لندن" },
  },
  "luxor-temple": {
    src: "https://images.unsplash.com/photo-1710886324980-997f7742f16c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Temple de Louxor", ar: "معبد الأقصر" },
  },
  "marmaris-marina": {
    src: "https://images.unsplash.com/photo-1636377688406-e0d0108eb882?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Marina de Marmaris", ar: "مارينا مرماريس" },
  },
  "milan-city": {
    src: "https://images.unsplash.com/photo-1773160063998-d4f9560ae5ad?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Toits de Milan", ar: "أسطح ميلانو" },
  },
  "milan-duomo": {
    src: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Duomo de Milan", ar: "كاتدرائية ميلانو" },
  },
  "mostar-bridge": {
    src: "https://images.unsplash.com/photo-1689019345483-4f847b92e5e3?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vieux Pont de Mostar", ar: "الجسر القديم بموستار" },
  },
  "mostar-town": {
    src: "https://images.unsplash.com/photo-1643054136954-684629fedc90?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Mostar et la Neretva", ar: "موستار ونهر نيريتفا" },
  },
  "murano-glass": {
    src: "https://images.unsplash.com/photo-1697191745625-3ace7a4abba9?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Verre soufflé de Murano", ar: "زجاج مورانو المنفوخ" },
  },
  "naples-bay": {
    src: "https://images.unsplash.com/photo-1610641819167-e9f4f393a7fe?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Baie de Naples et Vésuve", ar: "خليج نابولي وبركان فيزوف" },
  },
  "newcastle-quayside": {
    src: "https://images.unsplash.com/photo-1598964356102-dfb0a21898b1?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Quayside de Newcastle", ar: "كيسايد بنيوكاسل" },
  },
  "newcastle-street": {
    src: "https://images.unsplash.com/photo-1639246411392-cdd2a0008117?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Rues de Newcastle", ar: "شوارع نيوكاسل" },
  },
  "nile-cruise": {
    src: "https://images.unsplash.com/photo-1778402153163-fc9a5fd0131a?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Bateau de croisière sur le Nil", ar: "باخرة الرحلة النيلية" },
  },
  "nubian-village": {
    src: "https://images.unsplash.com/photo-1655163394179-8b30a553dd6c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Village nubien au bord du Nil", ar: "قرية نوبية على ضفاف النيل" },
  },
  "oludeniz-lagoon": {
    src: "https://images.unsplash.com/photo-1498222954553-93fc8d1941da?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Lagon bleu d'Ölüdeniz", ar: "البحيرة الزرقاء بأولودينيز" },
  },
  "ortakoy-mosque": {
    src: "https://images.unsplash.com/photo-1596679735505-f6e30ad1b3e8?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Mosquée d'Ortaköy", ar: "جامع أورتاكوي" },
  },
  "our-lady-rocks": {
    src: "https://images.unsplash.com/photo-1631651565034-50a3abadaa0c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Notre-Dame-du-Rocher, baie de Kotor", ar: "جزيرة سيّدة الصخرة، خليج كوتور" },
  },
  "oxford-street": {
    src: "https://images.unsplash.com/photo-1648417013217-3342a1c884f3?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Oxford Street, Londres", ar: "شارع أكسفورد، لندن" },
  },
  paleokastritsa: {
    src: "https://images.unsplash.com/photo-1488563348104-a68615b8b5f3?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Paleokastritsa, Corfou", ar: "باليوكاستريتسا، كورفو" },
  },
  pamukkale: {
    src: "https://images.unsplash.com/photo-1708251088223-e56cd382e8c6?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vasques calcaires de Pamukkale", ar: "أحواض باموكالي الكلسية" },
  },
  pantheon: {
    src: "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Panthéon de Rome", ar: "بانثيون روما" },
  },
  "papyrus-art": {
    src: "https://images.unsplash.com/photo-1662994314076-68a7573a1e23?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Papyrus égyptiens", ar: "أوراق البردي المصرية" },
  },
  "piazza-navona": {
    src: "https://images.unsplash.com/photo-1662398885856-cf2ab6e981b2?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Piazza Navona, Rome", ar: "ساحة نافونا، روما" },
  },
  "piazza-signoria": {
    src: "https://images.unsplash.com/photo-1651536146537-a52d68e337bc?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Piazza della Signoria, Florence", ar: "ساحة السينيوريا، فلورنسا" },
  },
  pompeii: {
    src: "https://images.unsplash.com/photo-1663875766535-4f6c5ba9829c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Ruines de Pompéi", ar: "أطلال بومبي" },
  },
  "ponte-vecchio": {
    src: "https://images.unsplash.com/photo-1601195576601-346d58e024c0?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Ponte Vecchio, Florence", ar: "بونتي فيكيو، فلورنسا" },
  },
  positano: {
    src: "https://images.unsplash.com/photo-1583844056361-4418a8f2a985?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Positano, côte amalfitaine", ar: "بوزيتانو، ساحل أمالفي" },
  },
  "princes-islands": {
    src: "https://images.unsplash.com/photo-1631375703063-9e7941a7b412?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Îles des Princes", ar: "جزر الأميرات" },
  },
  "pudong-skyline": {
    src: "https://images.unsplash.com/photo-1627484986972-e544190b8abb?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Gratte-ciel de Pudong, Shanghai", ar: "ناطحات سحاب بودونغ، شنغهاي" },
  },
  "qaitbay-citadel": {
    src: "https://images.unsplash.com/photo-1697546889969-27f7b5be8664?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Fort de Qaitbay, Alexandrie", ar: "قلعة قايتباي، الإسكندرية" },
  },
  "red-sea-boat": {
    src: "https://images.unsplash.com/photo-1566288592686-d91a0b04e0e0?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Bateaux sur la mer Rouge", ar: "قوارب على البحر الأحمر" },
  },
  "red-sea-coral": {
    src: "https://images.unsplash.com/photo-1651871756929-09d7bde4e97d?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Récifs coralliens de la mer Rouge", ar: "شعاب البحر الأحمر المرجانية" },
  },
  "resort-pool": {
    src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Piscine du resort", ar: "مسبح المنتجع" },
  },
  "roman-forum": {
    src: "https://images.unsplash.com/photo-1612021148925-466704654aeb?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Forum romain", ar: "المنتدى الروماني" },
  },
  "rome-colosseum": {
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Colisée de Rome", ar: "كولوسيوم روما" },
  },
  "saklikent-canyon": {
    src: "https://images.unsplash.com/photo-1713888207724-01a9a4c0e87a?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Canyon de Saklıkent", ar: "وادي ساكليكنت" },
  },
  "sarajevo-mosque": {
    src: "https://images.unsplash.com/photo-1683764681443-c85ff83109b4?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Baščaršija et ses minarets, Sarajevo", ar: "باشتشارشيا ومآذنها، سراييفو" },
  },
  "sarajevo-old-town": {
    src: "https://images.unsplash.com/photo-1570831709673-03320e9d734f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vieille ville de Sarajevo", ar: "مدينة سراييفو العتيقة" },
  },
  "sarajevo-view": {
    src: "https://images.unsplash.com/photo-1706233385855-8153b12194dc?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Sarajevo et ses collines", ar: "سراييفو وتلالها" },
  },
  "seaside-lunch": {
    src: "https://images.unsplash.com/photo-1782174177266-0cbab3611789?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Déjeuner au bord de la mer", ar: "غداء على شاطئ البحر" },
  },
  "sforza-castle": {
    src: "https://images.unsplash.com/photo-1648315574956-9656d61fd447?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Château des Sforza, Milan", ar: "قلعة سفورتسا، ميلانو" },
  },
  "shanghai-bund": {
    src: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Le Bund, Shanghai", ar: "الباوند، شنغهاي" },
  },
  shkoder: {
    src: "https://images.unsplash.com/photo-1724776379053-f8b9b91def34?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Château de Rozafa, Shkodër", ar: "قلعة روزافا، شكودر" },
  },
  "shopping-mall": {
    src: "https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Centre commercial", ar: "مركز تجاري" },
  },
  "sleeper-train": {
    src: "https://images.unsplash.com/photo-1768750046794-168c1b23d25e?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Train de nuit", ar: "قطار ليلي" },
  },
  "spanish-steps": {
    src: "https://images.unsplash.com/photo-1636804907035-8ae6360f1d4f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Piazza di Spagna, Rome", ar: "ساحة إسبانيا، روما" },
  },
  sphinx: {
    src: "https://images.unsplash.com/photo-1669301038557-f84309ac1269?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Sphinx de Gizeh", ar: "أبو الهول بالجيزة" },
  },
  "spice-bazaar": {
    src: "https://images.unsplash.com/photo-1589900586776-53db57559c73?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Marché aux épices d'Istanbul", ar: "سوق التوابل بإسطنبول" },
  },
  "spice-market": {
    src: "https://images.unsplash.com/photo-1761289731268-900eba5cf09f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Étals d'épices", ar: "بسطات التوابل" },
  },
  "st-marks-square": {
    src: "https://images.unsplash.com/photo-1613808001261-8f302f8aabf6?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Place Saint-Marc, Venise", ar: "ساحة القدّيس مرقس، البندقية" },
  },
  "st-peters-square": {
    src: "https://images.unsplash.com/photo-1610655769765-be8a0dd9627a?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Basilique Saint-Pierre, Vatican", ar: "بازيليك القدّيس بطرس، الفاتيكان" },
  },
  "sultanahmet-square": {
    src: "https://images.unsplash.com/photo-1700757602374-2346184dd008?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Place Sultanahmet et l'Hippodrome", ar: "ساحة السلطان أحمد والميدان" },
  },
  "summer-palace": {
    src: "https://images.unsplash.com/photo-1586788630595-bbd71f6f8646?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Palais d'Été, Pékin", ar: "قصر الصيف، بكين" },
  },
  "sun-loungers": {
    src: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Transats face à la mer", ar: "كراسي استرخاء أمام البحر" },
  },
  "suzhou-garden": {
    src: "https://images.unsplash.com/photo-1733192542649-937b28328c31?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Jardin classique de Suzhou", ar: "حديقة سوجو الكلاسيكية" },
  },
  "terracotta-warriors": {
    src: "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Guerriers en terre cuite de Xi'an", ar: "جيش الطين بشيان" },
  },
  "thames-cruise": {
    src: "https://images.unsplash.com/photo-1512734099960-65a682cbfe2b?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Croisière sur la Tamise", ar: "جولة على نهر التايمز" },
  },
  tiananmen: {
    src: "https://images.unsplash.com/photo-1586784444981-ac96e335555c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Place Tian'anmen, Pékin", ar: "ساحة تيان آنمن، بكين" },
  },
  "tirana-square": {
    src: "https://images.unsplash.com/photo-1742500481926-f61a4be9abfe?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Place Skanderbeg, Tirana", ar: "ساحة سكاندربيغ، تيرانا" },
  },
  "tirana-street": {
    src: "https://images.unsplash.com/photo-1717612031475-6d742751677c?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Rues de Tirana", ar: "شوارع تيرانا" },
  },
  "tongli-canals": {
    src: "https://images.unsplash.com/photo-1636992833290-75ec4eb1d42e?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Canaux de Tongli", ar: "قنوات تونغلي" },
  },
  "topkapi-palace": {
    src: "https://images.unsplash.com/photo-1663213774378-b83b5f0bceb7?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Palais de Topkapi, Istanbul", ar: "قصر طوب قابي، إسطنبول" },
  },
  "tower-bridge": {
    src: "https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Tower Bridge, Londres", ar: "جسر البرج، لندن" },
  },
  "tower-of-london": {
    src: "https://images.unsplash.com/photo-1633894914370-6935b23ccbce?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Tower of London", ar: "برج لندن" },
  },
  "traditional-dinner": {
    src: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Dîner traditionnel", ar: "عشاء تقليدي" },
  },
  "trevi-fountain": {
    src: "https://images.unsplash.com/photo-1596627116790-af6f46dddbda?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Fontaine de Trevi, Rome", ar: "نافورة تريفي، روما" },
  },
  "turkish-breakfast": {
    src: "https://images.unsplash.com/photo-1768566108465-dde1e43a0493?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Petit déjeuner turc", ar: "فطور تركي" },
  },
  "turkish-riviera": {
    src: "https://images.unsplash.com/photo-1582030826675-8b596001240a?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Plages de la Riviera turque", ar: "شواطئ الريفييرا التركية" },
  },
  "turkish-tea": {
    src: "https://images.unsplash.com/photo-1613987108430-b4bb3863e595?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Thé turc", ar: "الشاي التركي" },
  },
  "turquoise-island": {
    src: "https://images.unsplash.com/photo-1591211028625-bf35ca092e43?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Eaux turquoise et îlots", ar: "مياه فيروزية وجزر صغيرة" },
  },
  "tyne-bridge": {
    src: "https://images.unsplash.com/photo-1606840418190-25625fcc674f?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Tyne Bridge, Newcastle", ar: "جسر تاين، نيوكاسل" },
  },
  uchisar: {
    src: "https://images.unsplash.com/photo-1641885789658-29ecd57e3087?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Uçhisar, Cappadoce", ar: "أوتشيصار، كابادوكيا" },
  },
  "uludag-cable-car": {
    src: "https://images.unsplash.com/photo-1707880561791-ca4bbf314abb?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Téléphérique du mont Uludağ", ar: "تلفريك جبل أولوداغ" },
  },
  "valley-of-kings": {
    src: "https://images.unsplash.com/photo-1632944398987-494eebe663be?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Tombeaux de la Vallée des Rois", ar: "مقابر وادي الملوك" },
  },
  "vatican-museums": {
    src: "https://images.unsplash.com/photo-1586884542514-f6bef0283446?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Musées du Vatican", ar: "متاحف الفاتيكان" },
  },
  "venice-canal": {
    src: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Canaux de Venise", ar: "قنوات البندقية" },
  },
  "venice-gondola": {
    src: "https://images.unsplash.com/photo-1660801611138-4e51737fcbef?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Gondole dans Venise", ar: "غندول في البندقية" },
  },
  "venice-grand-canal": {
    src: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Grand Canal de Venise", ar: "القناة الكبرى بالبندقية" },
  },
  "venice-sunset": {
    src: "https://images.unsplash.com/photo-1482690205767-61deebe15ef7?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Venise au coucher du soleil", ar: "البندقية عند الغروب" },
  },
  "xian-old-street": {
    src: "https://images.unsplash.com/photo-1762996770562-ffce7254c4cc?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Vieilles rues de Xi'an", ar: "شوارع شيان القديمة" },
  },
  xingping: {
    src: "https://images.unsplash.com/photo-1773318901379-aac92fdf5611?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Xingping et les monts karstiques", ar: "شينغبينغ والجبال الكارستية" },
  },
  "yangshuo-street": {
    src: "https://images.unsplash.com/photo-1585988418977-2123a3503ddb?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Yangshuo au bord de la rivière", ar: "يانغشو على ضفاف النهر" },
  },
  "yu-garden": {
    src: "https://images.unsplash.com/photo-1609088399054-7661a95fe0e2?auto=format&fit=crop&w=1400&q=70",
    alt: { fr: "Jardin Yu, Shanghai", ar: "حديقة يو، شنغهاي" },
  },
} satisfies Record<string, DayImage>;

type Subject = keyof typeof bank;

/** Tour slug → day number → the two subjects illustrating it. */
const byTour: Record<string, Record<number, readonly [Subject, Subject]>> = {
  "istanbul-ete-2026": {
    1: ["istanbul-skyline", "hotel-room"],
    2: ["bosphorus-cruise", "shopping-mall"],
    3: ["blue-mosque", "grand-bazaar"],
    4: ["dinner-cruise", "bosphorus-night"],
    5: ["sultanahmet-square", "topkapi-palace"],
    6: ["princes-islands", "seaside-lunch"],
    7: ["bursa-mosque", "uludag-cable-car"],
    8: ["airport-terminal", "airplane-wing"],
  },
  "istanbul-antalya-ete-2026": {
    1: ["istanbul-skyline", "istanbul-street"],
    2: ["blue-mosque", "hagia-sophia"],
    3: ["bosphorus-cruise", "istiklal-taksim"],
    4: ["airplane-wing", "antalya-marina"],
    5: ["kaleici", "spice-market"],
    6: ["aspendos", "resort-pool"],
    7: ["duden-waterfall", "turkish-breakfast"],
    8: ["turkish-riviera", "beach-sunset"],
    9: ["shopping-mall", "turquoise-island"],
    10: ["aegean-cove", "seaside-lunch"],
    11: ["airport-terminal", "airplane-wing"],
  },
  "istanbul-marmaris-bodrum-ete-2026": {
    1: ["istanbul-skyline", "istanbul-street"],
    2: ["blue-mosque", "grand-bazaar"],
    3: ["bosphorus-cruise", "istiklal-taksim"],
    4: ["airplane-wing", "marmaris-marina"],
    5: ["turkish-riviera", "spice-market"],
    6: ["resort-pool", "seaside-lunch"],
    7: ["coach-bus", "bodrum-marina"],
    8: ["bodrum-castle", "turkish-tea"],
    9: ["aegean-cove", "turquoise-island"],
    10: ["oludeniz-lagoon", "beach-sunset"],
    11: ["airport-terminal", "airplane-wing"],
  },
  "turquie-anatolie": {
    1: ["airplane-wing", "anatolia-landscape"],
    2: ["uchisar", "fairy-chimneys"],
    3: ["cappadocia-balloons", "cave-city"],
    4: ["konya-mevlana", "spice-market"],
    5: ["kaleici", "duden-waterfall"],
    6: ["turquoise-island", "seaside-lunch"],
    7: ["saklikent-canyon", "butterfly-valley"],
    8: ["oludeniz-lagoon", "aegean-cove"],
    9: ["azmak-river", "marmaris-marina"],
    10: ["hierapolis", "pamukkale"],
    11: ["airport-terminal", "istanbul-skyline"],
    12: ["spice-bazaar", "ortakoy-mosque"],
    13: ["hagia-sophia", "grand-bazaar"],
    14: ["istanbul-street", "airplane-wing"],
  },
  "egypte-nil-hurghada": {
    1: ["airplane-wing", "hotel-room"],
    2: ["giza-pyramids", "sphinx"],
    3: ["cairo-citadel", "egyptian-museum"],
    4: ["khan-el-khalili", "sleeper-train"],
    5: ["nubian-village", "nile-cruise"],
    6: ["kom-ombo", "edfu-temple"],
    7: ["valley-of-kings", "karnak-temple"],
    8: ["luxor-temple", "coach-bus"],
    9: ["hurghada-beach", "resort-pool"],
    10: ["red-sea-coral", "red-sea-boat"],
    11: ["hurghada-resort", "seaside-lunch"],
    12: ["beach-sunset", "sun-loungers"],
    13: ["coach-bus", "papyrus-art"],
    14: ["qaitbay-citadel", "alexandria-corniche"],
    15: ["airport-terminal", "airplane-wing"],
  },
  "grand-tour-balkans": {
    1: ["airplane-wing", "istanbul-skyline"],
    2: ["airport-terminal", "sarajevo-view"],
    3: ["sarajevo-mosque", "sarajevo-old-town"],
    4: ["mostar-bridge", "mostar-town"],
    5: ["dubrovnik-walls", "dubrovnik-adriatic"],
    6: ["budva-old-town", "budva-beach"],
    7: ["kotor-bay", "our-lady-rocks"],
    8: ["shkoder", "durres"],
    9: ["albanian-coast", "adriatic-road"],
    10: ["butrint", "ksamil-beach"],
    11: ["paleokastritsa", "corfu-old-town"],
    12: ["berat", "tirana-street"],
    13: ["tirana-square", "traditional-dinner"],
    14: ["kruja-castle", "spice-market"],
    15: ["airport-terminal", "airplane-wing"],
  },
  "chine-grand-tour": {
    1: ["airport-terminal", "airplane-wing"],
    2: ["beijing-skyline", "hotel-room"],
    3: ["tiananmen", "forbidden-city"],
    4: ["great-wall", "summer-palace"],
    5: ["birds-nest", "hutong"],
    6: ["china-bullet-train", "xian-old-street"],
    7: ["terracotta-warriors", "calligraphy"],
    8: ["li-river-raft", "xingping"],
    9: ["yangshuo-street", "guilin-landscape"],
    10: ["china-tea-fields", "airport-terminal"],
    11: ["shanghai-bund", "yu-garden"],
    12: ["tongli-canals", "suzhou-garden"],
    13: ["pudong-skyline", "china-bullet-train"],
    14: ["beijing-skyline", "airport-terminal"],
    15: ["airplane-wing", "airport-terminal"],
  },
  "angleterre-ecosse": {
    1: ["london-skyline", "big-ben"],
    2: ["buckingham-palace", "london-eye"],
    3: ["tower-of-london", "tower-bridge"],
    4: ["british-museum", "oxford-street"],
    5: ["shopping-mall", "thames-cruise"],
    6: ["coach-bus", "newcastle-quayside"],
    7: ["newcastle-street", "tyne-bridge"],
    8: ["edinburgh-castle", "edinburgh-old-town"],
    9: ["durham-cathedral", "countryside-train"],
    10: ["airport-terminal", "airplane-wing"],
  },
  "italie-trio-italien": {
    1: ["venice-grand-canal", "hotel-room"],
    2: ["st-marks-square", "doges-palace"],
    3: ["florence-duomo", "ponte-vecchio"],
    4: ["italy-train", "spanish-steps"],
    5: ["rome-colosseum", "trevi-fountain"],
    6: ["airport-terminal", "airplane-wing"],
  },
  "italie-bella-italia": {
    1: ["milan-city", "sforza-castle"],
    2: ["milan-duomo", "galleria-vittorio"],
    3: ["italy-train", "venice-canal"],
    4: ["st-marks-square", "venice-gondola"],
    5: ["ponte-vecchio", "florence-skyline"],
    6: ["rome-colosseum", "pantheon"],
    7: ["vatican-museums", "piazza-navona"],
    8: ["airport-terminal", "airplane-wing"],
  },
  "italie-tresors-d-italie": {
    1: ["naples-bay", "hotel-room"],
    2: ["pompeii", "positano"],
    3: ["trevi-fountain", "piazza-navona"],
    4: ["roman-forum", "st-peters-square"],
    5: ["florence-duomo", "piazza-signoria"],
    6: ["st-marks-square", "venice-sunset"],
    7: ["burano", "murano-glass"],
    8: ["airport-terminal", "airplane-wing"],
  },
};

/** The two photos for a given day, or an empty list when none are mapped. */
export function getDayImages(slug: string, day: number): DayImage[] {
  const subjects = byTour[slug]?.[day];
  return subjects ? subjects.map((s) => bank[s]) : [];
}
