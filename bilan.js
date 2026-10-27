// ManifMonitor — bilan comparé des journées du 17 et du 24 octobre 2026 (page index.html).
// Le direct est archivé dans live.html (lit data.js). Chaque chiffre porte sa source.
window.BILAN = {
  updated: "2026-10-25T09:08:00+01:00",
  provisional: true, // 24/10 : bilan provisoire, réactualisé le dimanche 25 au matin
  provisionalNote: "Réactualisé le dimanche 25 octobre au matin : le bilan parisien de la préfecture de police est intégré (142 interpellations, 120 gardes à vue). Le ministère de l'Intérieur n'a pas encore publié de bilan national définitif (interpellations, policiers blessés) : ces chiffres restent provisoires.",

  next: {
    date: "2026-11-05T14:00:00+01:00",
    label: "Jeudi 5 novembre 2026",
    title: "Grève et manifestations interprofessionnelles",
    text: "L'intersyndicale (CGT, CFDT, FO, UNSA, FSU…) appelle salariés du public et du privé, retraités et jeunes à une journée nationale pour les salaires, les services publics, l'emploi et l'industrie. Appel maintenu après la rencontre à Matignon du 21 octobre ; les quatre principaux syndicats de la SNCF appellent aussi à la grève.",
    src: "CNews / SE-UNSA / BFMTV",
    url: "https://www.cnews.fr/france/2026-10-05/salaires-emploi-services-publics-une-intersyndicale-appelle-une-journee-nationale",
    before: { label: "Vendredi 30 et samedi 31 octobre", text: "« casserolade » des Gilets jaunes devant l'Assemblée nationale vendredi de 18h à 21h (temps fort à 20h), puis sit-in devant l'Assemblée et les mairies samedi dès 14h, pour les libertés publiques. Rassemblement déclaré en préfecture.", src: "Sortiraparis / Le Parisien", url: "https://www.sortiraparis.com/actualites/a-paris/articles/356011-casserolades-des-gilets-jaunes-a-paris-le-30-octobre-a-quoi-faut-il-s-attendre" }
  },

  // Comparaisons chiffrées. a = 17/10, b = 24/10 (null = pas encore connu). alt = chiffres syndicaux.
  compare: [
    { id: "france", label: "Manifestants en France", unit: "personnes",
      a: 550000, aSrc: "Ministère de l'Intérieur (Wikipédia)", b: 410000, bSrc: "Ministère de l'Intérieur (CNews, franceinfo)",
      alt: { a: 800000, aSrc: "Organisateurs (Wikipédia)", b: 800000, bSrc: "CGT (BFMTV)" } },
    { id: "paris", label: "Manifestants à Paris", unit: "personnes",
      a: 110000, aSrc: "Ministère de l'Intérieur (Wikipédia)", b: 110000, bSrc: "Préfecture de police (ICI, France 3)",
      alt: { a: null, aSrc: "Pas de chiffre syndical parisien retrouvé", b: 250000, bSrc: "CGT (ICI)" } },
    { id: "arrests1930", label: "Interpellations en France à 19h30", unit: "interpellations",
      a: 385, aSrc: "Laurent Nuñez, le 24/10 (CNews, ICI)", b: 1000, bApprox: true, bSrc: "Laurent Nuñez, « près de 1 000 » (CNews, ICI)",
      note: "Même heure, même source : le ministre a comparé lui-même les deux journées. Pas de bilan national actualisé au 25/10 au matin. Bilan final du 17/10 : plus de 1 800 (Nuñez) à 2 397 (Wikipédia)." },
    { id: "arrestsParis", label: "Interpellations à Paris", unit: "interpellations",
      a: 855, aSrc: "Autorités, agglomération parisienne, bilan provisoire (Wikipédia)", b: 142, bSrc: "Préfecture de police, bilan du 25/10 au matin, dont 120 gardes à vue (franceinfo)",
      note: "Périmètres différents : agglomération le 17/10, Paris intra-muros le 24/10." },
    { id: "policeHurt", label: "Policiers et gendarmes blessés", unit: "blessés",
      a: 997, aSrc: "Bilan final (Wikipédia)", b: null, bSrc: "Pas de bilan national au 25/10 au matin ; 18 blessés à Lyon (préfecture du Rhône), 2 à Pau (préfecture des Pyrénées-Atlantiques)" },
    { id: "deaths", label: "Morts", unit: "morts",
      a: 1, aSrc: "Homme de 59 ans, boulevard de Magenta, « arrêt cardiorespiratoire » selon la préfecture (Wikipédia)", b: 0, bSrc: "Aucun décès signalé au 24/10 à 22h30" },
    { id: "buildings", label: "Bâtiments publics attaqués", unit: "bâtiments",
      a: 7, aSrc: "Mairies de Limoges, Marseille et Saint-Étienne, résidence préfectorale de Bordeaux, université de Rouen… (Wikipédia)", b: 0, bSrc: "Laurent Nuñez : attaques « systématiquement empêchées » (BFMTV)" }
  ],

  // Dispositif : une seule valeur sourcée pour le 24/10, comparaison relative uniquement.
  police: { b: 70000, delta: "+20 % par rapport au 17 octobre", src: "Gouvernement (Sortiraparis)" },

  // Cortèges des grandes villes, chiffres des autorités (préfecture ou police) pour les deux journées.
  cities: [
    { city: "Paris", a: 110000, b: 110000, aSrc: "Ministère de l'Intérieur", bSrc: "Préfecture de police" },
    { city: "Toulouse", a: 32000, b: 26500, aSrc: "Préfecture", bSrc: "Préfecture (ICI)" },
    { city: "Lille", a: 24000, b: 15000, aSrc: "Préfecture du Nord", bSrc: "Préfecture (BFMTV)" },
    { city: "Bordeaux", a: 7000, b: 15500, aSrc: "Préfecture", bSrc: "Bilan de 17h30 (ICI)" },
    { city: "Strasbourg", a: 15000, b: 6500, aSrc: "Forces de l'ordre", bSrc: "Cortège sauvage (L'Alsace via franceinfo)" },
    { city: "Lyon", a: 10000, b: 10000, bApprox: true, aSrc: "Wikipédia", bSrc: "« Environ 10 000 », manifestation interdite (ICI)" },
    { city: "Rouen", a: 9000, b: 4800, aSrc: "Wikipédia", bSrc: "Bilan de 17h30 (ICI)" }
  ],
  citiesNote: "Les chiffres du 17/10 viennent de Wikipédia, qui ne cite pas toujours l'autorité d'origine. Le 24/10, plusieurs cortèges étaient interdits (Lyon, Bordeaux, Toulouse, Strasbourg…).",

  // Ce qui distingue les deux journées, en faits sourcés.
  contrasts: [
    { k: "Pillages", a: "1 500 à 3 000 commerces touchés en France, dont ~300 à Marseille et ~160 sur la Presqu'île de Lyon", b: "Pillages ciblés : 7 commerces pillés ou dégradés dans les Bouches-du-Rhône, 3 dégradés à Lyon, magasins à Nantes et Grenoble ; à Paris, un commerce fracturé et volé, un autre abîmé ; à Tours, une agence bancaire incendiée, habitants des étages relogés", aSrc: "FCD, ministre S. Papin (Wikipédia)", bSrc: "Préfectures des Bouches-du-Rhône, du Rhône, d'Indre-et-Loire et de police (franceinfo, BFMTV, CNews)" },
    { k: "Paris", a: "Pillages République, Magenta, Châtelet, 8e ; barricades aux abords de l'Élysée", b: "Heurts en fin de cortège cours de Vincennes (500 casseurs selon la préfecture), dispersion à 19h58 ; 142 interpellations, 120 gardes à vue", aSrc: "ICI, Wikipédia", bSrc: "Préfecture de police (France 3, CNews, franceinfo)" },
    { k: "Blessés graves", a: "Un adolescent a la main arrachée (Saint-Étienne), une jeune femme perd un œil (Mulhouse)", b: "Blessés à la main à Toulouse et à Clermont-Ferrand (sans amputation), un jeune blessé à l'œil à Poitiers", aSrc: "Wikipédia", bSrc: "Préfectures (franceinfo, BFMTV)" },
    { k: "Coût", a: "« Plusieurs centaines de millions d'euros » selon la FCD", b: "Pas encore chiffré", aSrc: "FCD (Wikipédia)", bSrc: "" }
  ],

  sources: [
    { name: "Wikipédia : manifestations du 17 octobre 2026", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "BFMTV, direct du 24 octobre", url: "https://www.bfmtv.com/societe/manifestations/direct-colere-sociale-70-000-policiers-et-gendarmes-mobilises-en-france-pour-cette-nouvelle-journee-de-mobilisation_LN-202610240063.html" },
    { name: "ICI, direct du 24 octobre", url: "https://www.ici.fr/infos/societe/direct-mobilisation-du-24-octobre-des-manifestations-partout-en-france-70-000-policiers-et-gendarmes-deployes-8725021" },
    { name: "CNews, direct du 24 octobre", url: "https://www.cnews.fr/france/2026-10-24/mobilisation-du-24-octobre-le-cortege-parisien-selance-de-la-porte-ditalie-135" },
    { name: "franceinfo, direct du 24 octobre", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html" },
    { name: "franceinfo : bilan du 25 octobre (Paris)", url: "https://www.franceinfo.fr/societe/manifestations/direct-manifestations-du-24-octobre-142-personnes-ont-ete-interpellees-a-paris-dont-120-ont-ete-placees-en-garde-a-vue-selon-la-prefecture-de-police_8252812.html" },
    { name: "SE-UNSA : mobilisation du 5 novembre", url: "https://www.se-unsa.org/2026/10/mobilisation-interprofessionnelle-du-5-novembre-2026/" }
  ]
};
