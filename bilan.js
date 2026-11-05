// ManifMonitor — bilan comparé des journées du 17, 24, 31 octobre et du 5 novembre 2026 (page index.html, copiée dans bilan.html).
// Le direct est archivé dans archive-5-novembre.html. Chaque chiffre porte sa source.
// Dans compare et cities : a = 17/10, b = 24/10, c = 31/10, d = 5/11. Absent = pas de chiffre retrouvé ; null = bilan attendu.
const BFM5 = "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html";
const FI5 = "https://www.franceinfo.fr/societe/manifestations/direct-greve-du-5-novembre-plus-de-250-actions-annoncees-dans-toute-la-france-selon-une-carte-de-la-ggt_8268827.html";
const CN5 = "https://www.cnews.fr/france/2026-11-05/manifestations-du-5-novembre-le-cortege-parisien-arrive-place-de-la-nation-600000";
const F35 = "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-5-novembre-a-paris-avant-un-parcours-impose-republique-nation-plusieurs-blocages-de-lycees-suivez-les-derniers-evenements-3444756.html";
const LY5 = "https://france3-regions.franceinfo.fr/auvergne-rhone-alpes/rhone/lyon/direct-manifestation-du-5-novembre-a-lyon-aucun-metro-le-centre-ville-deja-sous-cloche-30-000-manifestants-attendus-3444585.html";
const LL5 = "https://www.lalibre.be/international/europe/2026/11/05/greve-nationale-en-france-270000-manifestants-dans-180-corteges-hors-paris-ME6PQRIITZB2ZN5DOG2UBDE4JM/";
const IC5 = "https://www.ici.fr/infos/economie-social/greve-du-5-novembre-manifestation-parisienne-entre-republique-a-nation-les-transports-perturbes-9313057";
const AFP5 = "https://www.boursorama.com/actualite-economique/actualites/lecornu-convoque-une-conference-sociale-apres-une-journee-de-colere-sociale-68f8c3351ea9fcafb4a769ddb01c28f3";
const BE31 = "https://www.lalibre.be/dernieres-depeches/2026/11/01/manifestations-en-france-565-interpellations-au-niveau-national-5-membres-des-forces-de-lordre-blesses-a-paris-ZU3DIT6IRRFRBOH7OL7WMW6DAY/";
const ME31 = "https://www.mediaterranee.com/0172026-manifestation-du-31-octobre-contre-la-vie-chere-320-000-personnes.html";

window.BILAN = {
  updated: "2026-11-06T00:05:00+01:00",
  provisional: true, // 5/11 : bilan provisoire, réactualisé le vendredi 6 au matin
  provisionalNote: "Chiffres du 5 novembre encore provisoires : le bilan des interpellations et des blessés date de 18h, et la préfecture de police n'a pas publié de bilan pour Paris. Cette page sera réactualisée vendredi 6 novembre au matin.",

  days: [
    { k: "a", short: "17/10", label: "17 octobre", color: "var(--d17)" },
    { k: "b", short: "24/10", label: "24 octobre", color: "var(--d24)" },
    { k: "c", short: "31/10", label: "31 octobre", color: "var(--d31)" },
    { k: "d", short: "5/11", label: "5 novembre", color: "var(--d05)" }
  ],

  next: {
    date: "2026-11-07T00:00:00+01:00",
    label: "Samedi 7 novembre",
    title: "Nouvelles actions annoncées",
    text: "Organisations de jeunesse et gilets jaunes, pour leur « Acte IV », annoncent de nouvelles actions samedi ; l'Unef donne « rendez-vous le 7 novembre ». Nous n'avons pas encore retrouvé de parcours ni d'horaires.",
    src: "AFP via Boursorama",
    url: AFP5,
    before: { label: "Lundi 9 novembre", text: "« conférence sociale » à Matignon avec les syndicats et le patronat.", src: "BFMTV", url: BFM5 }
  },

  compare: [
    { id: "france", label: "Manifestants en France", unit: "personnes",
      a: 550000, aSrc: "Ministère de l'Intérieur (Wikipédia)",
      b: 410000, bSrc: "Ministère de l'Intérieur (CNews, franceinfo)",
      c: 320000, cSrc: "Autorités (La Libre / Belga)",
      d: 575000, dSrc: "Ministère de l'Intérieur, chiffre définitif de 19h30 (franceinfo)",
      alt: { a: 800000, aSrc: "Organisateurs (Wikipédia)", b: 800000, bSrc: "CGT (BFMTV)", c: 500000, cSrc: "Organisateurs (La Libre / Belga)", d: 1600000, dSrc: "CGT, « près de 1,6 million » (BFMTV, CNews)" } },
    { id: "paris", label: "Manifestants à Paris", unit: "personnes",
      a: 110000, aSrc: "Ministère de l'Intérieur (Wikipédia)",
      b: 110000, bSrc: "Préfecture de police (ICI, France 3)",
      c: 70000, cSrc: "Autorités (La Libre / Belga)",
      d: 65000, dSrc: "Ministère de l'Intérieur (franceinfo, ICI)",
      alt: { b: 250000, bSrc: "CGT (ICI)", d: 350000, dSrc: "CGT (BFMTV, CNews)" } },
    { id: "arrests", label: "Interpellations en France", unit: "interpellations",
      a: 2397, aSrc: "Wikipédia ; plus de 1 800 selon L. Nuñez",
      b: 1314, bSrc: "Ministère de l'Intérieur, bilan du 25/10 (DH / AFP)",
      c: 565, cSrc: "Ministère de l'Intérieur, bilan de 21h (La Libre / Belga)",
      d: 448, dSrc: "Ministère de l'Intérieur, bilan provisoire de 18h (franceinfo, CNews)",
      note: "Bilans pris à des moments différents : celui du 5/11 s'arrête à 18h et doit être consolidé." },
    { id: "arrestsParis", label: "Interpellations à Paris", unit: "interpellations",
      a: 855, aSrc: "Autorités, agglomération parisienne, bilan provisoire (Wikipédia)",
      b: 142, bSrc: "Préfecture de police, bilan du 25/10 au matin (franceinfo)",
      c: 79, cSrc: "Préfecture de police, bilan de 21h (La Libre / Belga)",
      d: null, dSrc: "Pas de bilan parisien publié ; 18 interpellations dans les gares avant le cortège (préfecture via CNews)",
      note: "Périmètres différents : agglomération le 17/10, Paris intra-muros ensuite." },
    { id: "policeHurt", label: "Policiers et gendarmes blessés", unit: "blessés",
      a: 997, aSrc: "Bilan final (Wikipédia)",
      b: 53, bSrc: "Ministère de l'Intérieur, bilan du 25/10 (DH / AFP)",
      d: 53, dSrc: "Ministère de l'Intérieur, bilan provisoire de 18h (franceinfo, CNews)",
      note: "31/10 : pas de chiffre national retrouvé, 5 blessés à Paris (La Libre / Belga). Même total le 24/10 et le 5/11, dans deux bilans distincts." },
    { id: "deaths", label: "Morts", unit: "morts",
      a: 1, aSrc: "Homme de 59 ans, boulevard de Magenta, « arrêt cardiorespiratoire » selon la préfecture (Wikipédia)",
      b: 0, bSrc: "Aucun décès signalé au 24/10 à 22h30",
      d: 0, dSrc: "Aucun décès signalé dans les sources lues au 5/11 à 23h50" }
  ],

  // Dispositif : une seule valeur sourcée pour le 5/11.
  police: { d: 70000, delta: "« exactement le même dispositif » que le 31 octobre", src: "L. Nuñez via BFMTV" },

  // Le 5 novembre en quelques moments ; sev 3 = incident.
  timeline: [
    { t: "07h30", sev: 3, text: "Tournefeuille, près de Toulouse : une trentaine de personnes cagoulées incendient un lycée, fermé pour au moins dix jours.", src: "La Libre, BFMTV", url: LL5 },
    { t: "13h18", sev: 1, text: "Gares de l'agglomération parisienne : 1 404 contrôles, 18 interpellations, matériels dangereux saisis.", src: "Préfecture via CNews", url: "https://www.cnews.fr/france/2026-11-05/manifestations-du-5-novembre-les-premieres-tensions-eclatent-dans-lest-de-paris" },
    { t: "14h10", sev: 1, text: "Le cortège parisien s'élance de République, après une minute de silence pour la victime de l'attentat raciste de Trappes.", src: "BFMTV, CNews", url: BFM5 },
    { t: "15h30", sev: 1, text: "Raphaël Glucksmann quitte la manifestation après avoir été bloqué à République par des militants hostiles.", src: "BFMTV, CNews", url: BFM5 },
    { t: "≈ 16h", sev: 3, text: "Boulevard Voltaire : dégradations d'individus cagoulés selon la préfecture, puis lacrymogènes et charge ; plusieurs blessures à la tête soignées par des street medics.", src: "France 3, AFP via La Libre", url: F35 },
    { t: "16h47", sev: 1, text: "La tête de cortège arrive place de la Nation ; les derniers manifestants ne quitteront République que vers 17h30.", src: "BFMTV, franceinfo", url: BFM5 },
    { t: "17h00", sev: 3, text: "Lyon : 40 blessés dont 34 policiers, 24 interpellations, 5 commerces dégradés, barricades.", src: "Préfecture du Rhône via France 3", url: LY5 },
    { t: "17h10", sev: 1, text: "Sébastien Lecornu annonce une « conférence sociale » lundi 9 novembre à Matignon.", src: "BFMTV, CNews", url: BFM5 },
    { t: "19h06", sev: 3, text: "Place de la Nation : charges de CRS pour faire intervenir les pompiers sur un incendie, détonations.", src: "CNews", url: CN5 },
    { t: "19h30", sev: 1, text: "L'Intérieur publie son chiffre définitif : 575 000 manifestants dans 193 cortèges, dont 65 000 à Paris. La CGT en revendique 1,6 million.", src: "franceinfo", url: FI5 },
    { t: "21h38", sev: 3, text: "Marseille : un CRS grièvement touché au thorax, en détresse respiratoire ; dix policiers blessés, vingt interpellations.", src: "Préfecture via CNews", url: CN5 }
  ],

  // Cortèges des grandes villes, chiffres des autorités (préfecture ou police).
  cities: [
    { city: "Paris", a: 110000, b: 110000, c: 70000, d: 65000, aSrc: "Ministère de l'Intérieur", bSrc: "Préfecture de police", cSrc: "Autorités (La Libre / Belga)", dSrc: "Ministère de l'Intérieur" },
    { city: "Lyon", a: 10000, b: 10000, bApprox: true, c: 19000, d: 30500, aSrc: "Wikipédia", bSrc: "« Environ 10 000 », manifestation interdite (ICI)", cSrc: "Chiffres officiels (Méditerranée)", dSrc: "Fourchette basse, jusqu'à 55 000 selon l'intersyndicale (France 3)" },
    { city: "Bordeaux", a: 7000, b: 15500, c: 11000, d: 21000, aSrc: "Préfecture", bSrc: "Bilan de 17h30 (ICI)", cSrc: "Police (Méditerranée)", dSrc: "Préfecture (franceinfo)" },
    { city: "Lille", a: 24000, b: 15000, c: 20000, aSrc: "Préfecture du Nord", bSrc: "Préfecture (BFMTV)", cSrc: "Chiffres officiels (Méditerranée)" },
    { city: "Strasbourg", a: 15000, b: 6500, d: 10000, dApprox: true, aSrc: "Forces de l'ordre", bSrc: "Cortège sauvage (L'Alsace via franceinfo)", dSrc: "Fourchette basse de « 10 000 à 26 000 » (franceinfo, CNews)" },
    { city: "Marseille", c: 10000, cApprox: true, d: 14000, cSrc: "« Environ 10 000 » (Méditerranée)", dSrc: "Préfecture de police (franceinfo)" },
    { city: "Toulouse", a: 32000, b: 26500, aSrc: "Préfecture", bSrc: "Préfecture (ICI)" },
    { city: "Rouen", a: 9000, b: 4800, aSrc: "Wikipédia", bSrc: "Bilan de 17h30 (ICI)" }
  ],
  citiesNote: "Une barre manque quand nous n'avons pas retrouvé de chiffre des autorités pour ce jour-là. Le 24/10, plusieurs cortèges étaient interdits (Lyon, Bordeaux, Toulouse, Strasbourg…). Les chiffres du 17/10 viennent de Wikipédia, qui ne cite pas toujours l'autorité d'origine.",

  // Ce qui distingue les journées, en faits sourcés.
  contrasts: [
    { k: "Pillages",
      a: "1 500 à 3 000 commerces touchés en France, dont ~300 à Marseille et ~160 sur la Presqu'île de Lyon", aSrc: "FCD, ministre S. Papin (Wikipédia)",
      b: "Pillages ciblés : 7 commerces pillés ou dégradés dans les Bouches-du-Rhône, 3 dégradés à Lyon, magasins à Nantes et Grenoble ; à Tours, une agence bancaire incendiée", bSrc: "Préfectures des Bouches-du-Rhône, du Rhône, d'Indre-et-Loire (franceinfo, BFMTV, CNews)",
      d: "Pas de pillage relevé dans nos sources ; 5 commerces dégradés à Lyon, une voiture incendiée", dSrc: "Préfecture du Rhône (France 3)" },
    { k: "Paris",
      a: "Pillages République, Magenta, Châtelet, 8e ; barricades aux abords de l'Élysée", aSrc: "ICI, Wikipédia",
      b: "Heurts en fin de cortège cours de Vincennes (500 casseurs selon la préfecture), dispersion à 19h58 ; 142 interpellations", bSrc: "Préfecture de police (France 3, CNews, franceinfo)",
      d: "Cortège calme ; dégradations et charge boulevard Voltaire vers 16h, charges et incendie place de la Nation à 19h06", dSrc: "Préfecture de police, France 3, CNews" },
    { k: "Blessés graves",
      a: "Un adolescent a la main arrachée (Saint-Étienne), une jeune femme perd un œil (Mulhouse)", aSrc: "Wikipédia",
      b: "Blessés à la main à Toulouse et à Clermont-Ferrand (sans amputation), un jeune blessé à l'œil à Poitiers", bSrc: "Préfectures (franceinfo, BFMTV)",
      d: "Un CRS grièvement touché au thorax à Marseille ; un lycéen de 16 ans poignardé à La Courneuve, pronostic vital non engagé ; trois employés de lycée blessés par des mortiers à Argenteuil", dSrc: "Préfecture des Bouches-du-Rhône (CNews), parquet de Bobigny (ICI)" },
    { k: "Lycées",
      d: "81 bloqués ou fermés sur 3 700 selon Matignon, près de mille selon le Snes-FSU ; lycée incendié à Tournefeuille", dSrc: "AFP via Boursorama, BFMTV" },
    { k: "Réponse politique",
      d: "Conférence sociale lundi 9 novembre à Matignon ; le gouvernement se dit ouvert à un coup de pouce du Smic ; Marine Tondelier estime que « la question du départ de Lecornu se pose »", dSrc: "AFP via Boursorama, BFMTV" },
    { k: "Coût",
      a: "« Plusieurs centaines de millions d'euros » selon la FCD", aSrc: "FCD (Wikipédia)",
      b: "Pas chiffré", d: "Pas chiffré" }
  ],

  sources: [
    { name: "Wikipédia : manifestations du 17 octobre 2026", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "BFMTV, direct du 24 octobre", url: "https://www.bfmtv.com/societe/manifestations/direct-colere-sociale-70-000-policiers-et-gendarmes-mobilises-en-france-pour-cette-nouvelle-journee-de-mobilisation_LN-202610240063.html" },
    { name: "ICI, direct du 24 octobre", url: "https://www.ici.fr/infos/societe/direct-mobilisation-du-24-octobre-des-manifestations-partout-en-france-70-000-policiers-et-gendarmes-deployes-8725021" },
    { name: "CNews, direct du 24 octobre", url: "https://www.cnews.fr/france/2026-10-24/mobilisation-du-24-octobre-le-cortege-parisien-selance-de-la-porte-ditalie-135" },
    { name: "franceinfo, direct du 24 octobre", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html" },
    { name: "franceinfo : bilan du 25 octobre (Paris)", url: "https://www.franceinfo.fr/societe/manifestations/direct-manifestations-du-24-octobre-142-personnes-ont-ete-interpellees-a-paris-dont-120-ont-ete-placees-en-garde-a-vue-selon-la-prefecture-de-police_8252812.html" },
    { name: "DH / AFP : bilan de l'Intérieur du 24 octobre", url: "https://www.dhnet.be/dernieres-depeches/2026/10/25/manifestations-de-samedi-en-france-1314-interpellations-53-membres-des-forces-de-lordre-blesses-selon-linterieur-BR7GK5EVZJEB5HDTXDWC3CA6FI/" },
    { name: "La Libre / Belga : bilan du 31 octobre", url: BE31 },
    { name: "Méditerranée : cortèges du 31 octobre", url: ME31 },
    { name: "BFMTV, direct du 5 novembre", url: BFM5 },
    { name: "franceinfo, direct du 5 novembre", url: FI5 },
    { name: "CNews, direct du 5 novembre", url: CN5 },
    { name: "France 3 Paris, direct du 5 novembre", url: F35 },
    { name: "France 3 Lyon, direct du 5 novembre", url: LY5 },
    { name: "ICI : manifestation parisienne du 5 novembre", url: IC5 },
    { name: "AFP via Boursorama : conférence sociale", url: AFP5 }
  ]
};
