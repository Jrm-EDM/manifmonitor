// ManifMonitor — données du dashboard.
// Modifier ce fichier suffit : la page le recharge toutes les 60 s.
// Heures en "HH:MM" (heure de Paris). sev : 1 info · 2 notable · 3 alerte · 4 critique.
window.MANIF_DATA = {
  meta: {
    title: "Mobilisation du 24 octobre",
    date: "2026-10-24",
    updated: "2026-10-24T16:14:00+02:00",
    tension: 2, // 1 calme · 2 vigilance · 3 tendu · 4 émeutes · 5 crise
    tensionNote: "40 000 à Paris, cortège calme ; défilé sauvage av. Michel-Bizot, tentative d'accès au périph repoussée.",
    window: { start: "13:00", end: "19:00" },
    march: { start: "14:30", end: "18:30" }, // départ réel, arrivée estimée : sert à interpoler la tête de cortège
    curfew: { start: "23:00", end: "06:00", until: "lundi 26 oct. 6h" }
  },

  kpis: [
    { id: "crowd", label: "Manifestants (France)", value: "35 000", delta: "vs 60 000 sam. 17/10 même heure", trend: "down", src: "Min. Intérieur via franceinfo", at: "13:00" },
    { id: "arrests", label: "Interpellations (France)", value: "135", delta: "dont 17 à Paris (armes, mortiers)", trend: "flat", src: "L. Nuñez, point presse", at: "13:00" },
    { id: "paris", label: "Cortège parisien", value: "40 000", delta: "selon la préfecture (10 000 à 15h15)", trend: "up", src: "Préfecture via France 3 IDF", at: "15:55" },
    { id: "controls", label: "Contrôles gares/transports", value: "635", delta: "saisies de matériel interdit", trend: "up", src: "Préfecture via Euronews", at: "12:28" },
    { id: "stations", label: "Stations de métro fermées", value: "24", delta: "+ ligne 2 coupée Barbès ↔ Nation", trend: "flat", src: "RATP via Presse-citron", at: "09:00" },
    { id: "police", label: "Policiers & gendarmes", value: "70 000", delta: "France entière, +20 % vs 17/10", trend: "up", src: "Gouvernement via Sortiraparis", at: "veille" }
  ],

  feed: [
    { t: "16:12", cat: "securite", sev: 3, incident: true, text: "Lyon : environ 2 000 manifestants bravent l'interdiction dans le 7e ; tirs de mortiers d'artifice sur les forces de l'ordre, riposte aux grenades lacrymogènes.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "16:10", cat: "securite", sev: 2, text: "Nantes : situation tendue, un cortège non autorisé traverse le périmètre interdit du centre-ville.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "16:08", cat: "cortege", sev: 1, text: "Marseille : 17 000 manifestants selon la préfecture ; 1 000 à Aix-en-Provence malgré l'interdiction. Bretagne : 1 200 à Lorient, 1 000 à Vannes.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "15:55", cat: "cortege", sev: 2, text: "Paris : la préfecture compte désormais 40 000 manifestants.", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html", approx: true },
    { t: "15:54", cat: "securite", sev: 2, text: "Paris : un groupe se détache du cortège et forme un second défilé avenue du Général-Michel-Bizot (12e).", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html", approx: true },
    { t: "15:57", cat: "cortege", sev: 1, text: "Greta Thunberg serait présente dans le cortège parisien.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "15:55", cat: "cortege", sev: 1, text: "Porte d'Italie : des étudiants des Mureaux disent manifester aussi contre une réponse policière jugée disproportionnée ; le cortège avance dans le calme.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "15:50", cat: "cortege", sev: 1, text: "CGT et Lutte ouvrière défilent sur le tracé imposé ; une partie des manifestants n'a pas encore quitté la place d'Italie.", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html", approx: true },
    { t: "15:45", cat: "securite", sev: 2, text: "Militaires de Sentinelle déployés pour sécuriser des sites, notamment près du Louvre.", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html", approx: true },
    { t: "15:30", cat: "securite", sev: 2, incident: true, text: "Place de la Bastille : personnes contrôlées, fouillées et verbalisées (135 €), le départ depuis Bastille étant interdit.", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html", approx: true },
    { t: "15:20", cat: "securite", sev: 3, incident: true, text: "Une cinquantaine de personnes tentent de pénétrer sur le périphérique, reconduites sur le parcours par les forces de l'ordre.", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html" },
    { t: "15:39", cat: "cortege", sev: 1, text: "Marseille : le cortège intersyndical s'est élancé dans le calme vers 14h des Réformés vers la porte d'Aix.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "15:21", cat: "cortege", sev: 1, text: "Le cortège parisien avance dans le calme ; slogans lycéens, quelques slogans hostiles à la police.", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html", approx: true },
    { t: "15:15", cat: "cortege", sev: 2, text: "Paris : la police estime le cortège à 10 000 personnes, chiffre en hausse, des manifestants convergent encore depuis la place d'Italie.", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html", approx: true },
    { t: "15:00", cat: "securite", sev: 2, text: "Préfecture : 17 interpellations à Paris (port d'arme prohibée, détention de mortiers). Risque de cortèges sauvages ou contre-rassemblements à Bastille.", src: "France 3 Paris IDF", url: "https://france3-regions.franceinfo.fr/paris-ile-de-france/direct-manifestation-du-24-octobre-a-paris-parcours-des-corteges-stations-fermees-securite-suivez-notre-direct-pour-tout-savoir-heure-par-heure-3438498.html", approx: true },
    { t: "15:23", cat: "securite", sev: 1, text: "Laurent Nuñez maintient : « aucun incident majeur » à Paris à ce stade.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "15:21", cat: "politique", sev: 1, text: "Orléans : le congrès du RN débute au Zénith. Entre 13 000 et 26 000 personnes ont manifesté contre.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "15:20", cat: "securite", sev: 3, text: "Nantes : environ un millier de personnes place de la République, gaz lacrymogènes et canon à eau.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "15:15", cat: "securite", sev: 2, text: "Lyon : un cortège part de la place Jean-Macé malgré l'interdiction, la préfecture annonce la dispersion de tout attroupement.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "15:10", cat: "cortege", sev: 1, text: "Bordeaux : un cortège se forme place de la Bourse malgré l'interdiction, situation calme.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "14:58", cat: "politique", sev: 1, text: "Mélenchon prévient que les mobilisations « se répéteront chaque semaine » et estime que la situation peut « exploser ».", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "14:54", cat: "cortege", sev: 1, text: "Jean-Luc Mélenchon rejoint le cortège parisien et demande à Emmanuel Macron de « céder ».", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "14:54", cat: "cortege", sev: 1, text: "Les organisateurs acceptent le nouveau parcours Porte d'Italie → Porte de Vincennes.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "14:43", cat: "securite", sev: 3, text: "Grenoble : une tentative de blocage de l'A480 provoque un accident, deux blessés légers. Les manifestants sont dispersés.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "14:41", cat: "securite", sev: 1, text: "La préfecture de police juge la situation « calme » dans la capitale.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "14:40", cat: "securite", sev: 1, text: "Commerçants parisiens sur leurs gardes après les pillages de la semaine passée (environ 3 000 commerces touchés).", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "14:39", cat: "politique", sev: 1, text: "Marine Tondelier critique le changement tardif du tracé, des militants « déboussolés ».", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html", approx: true },
    { t: "14:36", cat: "securite", sev: 2, text: "Laurent Nuñez : 135 interpellations à la mi-journée, 35 000 manifestants en France (60 000 sam. dernier), aucun incident majeur.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "14:31", cat: "cortege", sev: 2, text: "Le cortège parisien s'élance de la porte d'Italie. La place de la Bastille est sous haute surveillance.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "14:15", cat: "securite", sev: 3, text: "Lyon : grenades lacrymogènes pour disperser la foule place Jean-Macé, scindée dans la confusion ; la préfecture invoque la présence d'individus masqués.", src: "CNews", url: "https://www.cnews.fr/france/2026-10-24/mobilisation-du-24-octobre-le-cortege-parisien-selance-de-la-porte-ditalie-135" },
    { t: "14:01", cat: "politique", sev: 1, text: "Les Gilets jaunes appellent à une nouvelle mobilisation le 31 octobre devant l'Assemblée nationale et les mairies.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "13:50", cat: "cortege", sev: 2, text: "Orléans : 11 000 manifestants contre le congrès du RN selon la préfecture, 26 000 selon les organisateurs.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "13:42", cat: "politique", sev: 1, text: "Union étudiante et Unef dénoncent l'annulation du parcours Bastille–Nation et parlent de répression.", src: "franceinfo", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html" },
    { t: "13:24", cat: "securite", sev: 3, text: "Lyon : un rassemblement d'environ 150 personnes dispersé à coups de grenades lacrymogènes.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "12:59", cat: "securite", sev: 2, text: "Fourgons de gendarmes mobiles stationnés devant l'Arc de Triomphe.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "12:52", cat: "securite", sev: 2, text: "L'Unef dénonce des contrôles et verbalisations de militants encerclés par des CRS.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "12:38", cat: "politique", sev: 1, text: "La France insoumise accepte le parcours et appelle à se retrouver porte d'Italie à 14h.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "12:28", cat: "securite", sev: 2, text: "Préfecture : 635 contrôles dans les gares et transports, saisies de matériel interdit, plusieurs interpellations.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "11:48", cat: "politique", sev: 2, text: "Sébastien Lecornu juge le niveau de menace élevé et pointe l'ultragauche et la délinquance.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "11:39", cat: "justice", sev: 2, text: "Limoges : deux suspects mis en examen et placés en détention pour l'incendie de l'hôtel de ville.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "11:27", cat: "justice", sev: 3, text: "Le tribunal administratif rejette le recours : seule la manifestation Porte d'Italie → Porte de Vincennes est autorisée.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "11:18", cat: "justice", sev: 2, text: "Bouches-du-Rhône : manifestations interdites dans les villes de plus de 10 000 habitants, couvre-feux maintenus à Marseille et dans trois communes.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "11:16", cat: "securite", sev: 2, text: "70 000 policiers et gendarmes mobilisés, avec GIGN, BRI, RAID et Sentinelle.", src: "Euronews", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { t: "10:00", cat: "transports", sev: 2, text: "Tramways T3a et T3b suspendus jusqu'à dimanche 6h.", src: "Sortiraparis", url: "https://www.sortiraparis.com/en/news/in-paris/articles/355171-october-24-demonstration-in-paris-route-closures-and-closed-stations-what-you-need-to-know" },
    { t: "09:00", cat: "transports", sev: 2, text: "24 stations de métro fermées à la demande de la préfecture, ligne 2 coupée entre Barbès et Nation.", src: "Presse-citron", url: "https://www.presse-citron.net/paris-ferme-ses-metros-et-ses-rer-pour-les-manifestations-du-samedi-24-octobre-voici-les-zones-a-eviter/" }
  ],

  // Tracé officiel (approximatif) : Porte d'Italie → Bd Masséna → Bd Gal-Jean-Simon → Pont National → Bd Poniatowski → Bd Soult → Porte de Vincennes
  route: [
    [48.8190, 2.3597], [48.8197, 2.3645], [48.8215, 2.3695], [48.8240, 2.3780],
    [48.8262, 2.3840], [48.8285, 2.3858], [48.8306, 2.3840], [48.8322, 2.3868],
    [48.8330, 2.3930], [48.8338, 2.3992], [48.8351, 2.4058], [48.8395, 2.4100],
    [48.8440, 2.4112], [48.8472, 2.4108]
  ],
  // Tête de cortège : "auto" = interpolée sur l'heure (meta.march) ; ou un index de route pour forcer une position signalée
  headIndex: "auto",

  places: [
    { name: "Porte d'Italie", ll: [48.8190, 2.3597], kind: "start", note: "Départ 14h" },
    { name: "Porte de Vincennes", ll: [48.8472, 2.4108], kind: "end", note: "Dispersion, fin autorisée 19h" },
    { name: "Bastille", ll: [48.8532, 2.3691], kind: "banned", note: "Parcours Bastille–Nation interdit vendredi soir. RDV Gilets jaunes annoncé en début d'après-midi." },
    { name: "Nation", ll: [48.8483, 2.3958], kind: "banned", note: "Ancienne arrivée, parcours interdit" },
    { name: "35 av. Gabriel (Élysée)", ll: [48.8687, 2.3155], kind: "banned", note: "Rassemblements Gilets jaunes interdits 23, 24 et 25 oct. (arrêté 2026-01415)" },
    { name: "Opéra", ll: [48.8720, 2.3316], kind: "banned", note: "Parcours Bastille–Opéra des Gilets jaunes refusé" }
  ],

  curfewZones: [
    { name: "République", ll: [48.8674, 2.3637], r: 450 },
    { name: "Les Halles", ll: [48.8620, 2.3470], r: 450 }
  ],

  closedStations: [
    { name: "Argentine", lines: "1", ll: [48.8756, 2.2894] },
    { name: "Charles de Gaulle–Étoile", lines: "1, 2, 6, RER A", ll: [48.8738, 2.295] },
    { name: "George V", lines: "1", ll: [48.872, 2.3006] },
    { name: "Franklin D. Roosevelt", lines: "1, 9", ll: [48.869, 2.3098] },
    { name: "Champs-Élysées–Clemenceau", lines: "1, 13", ll: [48.8676, 2.3141] },
    { name: "Miromesnil", lines: "9, 13", ll: [48.8735, 2.3158] },
    { name: "Concorde", lines: "1, 8, 12", ll: [48.8656, 2.3212] },
    { name: "Tuileries", lines: "1", ll: [48.8645, 2.3297] },
    { name: "Assemblée nationale", lines: "12", ll: [48.8611, 2.3206] },
    { name: "Solférino", lines: "12", ll: [48.8584, 2.323] },
    { name: "Rue du Bac", lines: "12", ll: [48.8559, 2.3256] },
    { name: "Varenne", lines: "13", ll: [48.8566, 2.315] },
    { name: "Sèvres–Babylone", lines: "10, 12", ll: [48.8515, 2.3262] },
    { name: "Rennes", lines: "12", ll: [48.8483, 2.3279] },
    { name: "Saint-Sulpice", lines: "4", ll: [48.8512, 2.3305] },
    { name: "Saint-Germain-des-Prés", lines: "4", ll: [48.8538, 2.3336] },
    { name: "Mabillon", lines: "10", ll: [48.8529, 2.3354] },
    { name: "Odéon", lines: "4, 10", ll: [48.8521, 2.3389] },
    { name: "Cluny–La Sorbonne", lines: "10", ll: [48.8511, 2.3449] },
    { name: "Maubert–Mutualité", lines: "10", ll: [48.8501, 2.3484] },
    { name: "Dugommier", lines: "6", ll: [48.839, 2.3895] },
    { name: "Daumesnil", lines: "6, 8", ll: [48.8395, 2.396] },
    { name: "Bel-Air", lines: "6", ll: [48.8414, 2.4005] },
    { name: "Picpus", lines: "6", ll: [48.8451, 2.4013] }
  ],

  closedVenues: [
    { name: "Louvre", ll: [48.8606, 2.3376] },
    { name: "Musée d'Orsay", ll: [48.8600, 2.3266] },
    { name: "Musée Picasso", ll: [48.8598, 2.3625] },
    { name: "Grand Palais / Art Basel", ll: [48.8661, 2.3125] },
    { name: "Jardin du Luxembourg", ll: [48.8462, 2.3372] },
    { name: "Jardin des Plantes", ll: [48.8440, 2.3596] },
    { name: "Hôtel de la Marine", ll: [48.8665, 2.3229] },
    { name: "Gaîté Lyrique", ll: [48.8665, 2.3535] }
  ],

  // Points sécurisés : périmètres d'interdiction de la préfecture (arrêtés de la semaine) + sites gardés. r en mètres.
  securedPoints: [
    { name: "Élysée / Faubourg-St-Honoré", ll: [48.8704, 2.3167], r: 350, note: "Périmètre interdit · Sentinelle" },
    { name: "Place Beauvau (Intérieur)", ll: [48.8722, 2.3162], r: 200, note: "Périmètre interdit" },
    { name: "Champs-Élysées", ll: [48.8698, 2.3076], r: 500, note: "Périmètre interdit" },
    { name: "Assemblée nationale", ll: [48.8620, 2.3185], r: 250, note: "Périmètre interdit" },
    { name: "Matignon", ll: [48.8547, 2.3207], r: 200, note: "Périmètre interdit" },
    { name: "Sénat", ll: [48.8483, 2.3371], r: 220, note: "Périmètre interdit" },
    { name: "Île de la Cité", ll: [48.8546, 2.3477], r: 350, note: "Périmètre interdit" },
    { name: "Châtelet / Les Halles", ll: [48.8608, 2.3470], r: 300, note: "Périmètre interdit + couvre-feu" },
    { name: "Grands magasins (Haussmann)", ll: [48.8738, 2.3320], r: 300, note: "Périmètre interdit" },
    { name: "Bourse", ll: [48.8690, 2.3412], r: 200, note: "Périmètre interdit" },
    { name: "Gare du Nord / Gare de l'Est", ll: [48.8790, 2.3570], r: 400, note: "Périmètre interdit · contrôles" },
    { name: "Gare de Lyon", ll: [48.8443, 2.3740], r: 300, note: "Périmètre interdit · contrôles" },
    { name: "Gare d'Austerlitz", ll: [48.8424, 2.3653], r: 250, note: "Périmètre interdit · contrôles" },
    { name: "Gare Montparnasse", ll: [48.8412, 2.3200], r: 300, note: "Périmètre interdit · contrôles" },
    { name: "Gare Saint-Lazare", ll: [48.8763, 2.3253], r: 250, note: "Périmètre interdit · contrôles" },
    { name: "Place d'Italie", ll: [48.8310, 2.3557], r: 250, note: "Périmètre interdit" }
  ],

  // Zones chaudes = foyers de violence. heat 1 tension (face-à-face, rassemblement interdit, lacrymos ponctuels)
  // · 2 affrontements (lacrymos nourris, projectiles, charges) · 3 émeutes (incendies, pillages, barricades).
  // Une zone n'entre ici que sur signalement sourcé ; les zones « à risque » restent en heat 1 avec la mention.
  hotZones: [
    { name: "Avenue du Général-Michel-Bizot", ll: [48.8385, 2.4025], r: 300, heat: 1, note: "Cortège sauvage détaché du défilé officiel vers 15h55 (France 3 Paris IDF). Pas de heurts signalés." },
    { name: "Bastille", ll: [48.8532, 2.3691], r: 400, heat: 1, note: "Contrôles, fouilles et verbalisations (135 €) vers 15h30, départ interdit. Pas de heurts signalés (France 3, 15h51)." },
    { name: "République", ll: [48.8674, 2.3637], r: 400, heat: 1, note: "Couvre-feu 23h, foyer des violences du 17/10. Risque : calme à 15h23." },
    { name: "Porte de Vincennes", ll: [48.8472, 2.4108], r: 350, heat: 1, note: "Point de dispersion vers 18h30-19h, moment le plus sensible d'un cortège. Risque." }
  ],

  // Dégâts du 17 octobre (et nuit du 18) à Paris, lieux cités par la presse. type : incendie · pillage · barricade · affrontement · degradation
  oct17: [
    { name: "Boulevard Saint-Denis (Celio)", ll: [48.8698, 2.354], type: "incendie", text: "Boutique Celio saccagée, pillée puis incendiée", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Rue Saint-Denis / porte Saint-Denis", ll: [48.8693, 2.3523], type: "incendie", text: "Voitures brûlées", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Rue Beaubourg (3e)", ll: [48.8628, 2.3533], type: "barricade", text: "Barricade incendiée", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Place de la République", ll: [48.8674, 2.3637], type: "pillage", text: "Épicentre des pillages, affrontements jusqu'en soirée, lacrymogènes dès midi", date: "17/10", url: "https://www.ici.fr/ile-de-france/paris-75/paris/mobilisation-du-17-octobre-le-difficile-bilan-des-degats-a-paris-une-cellule-d-aide-aux-commerces-mise-en-place-4435615" },
    { name: "Place de la République (2e nuit)", ll: [48.8664, 2.3652], type: "pillage", text: "Nouveaux commerces visés, vite contenus", date: "18/10", url: "https://www.ici.fr/ile-de-france/paris-75/paris/mobilisation-du-17-octobre-le-difficile-bilan-des-degats-a-paris-une-cellule-d-aide-aux-commerces-mise-en-place-4435615" },
    { name: "Boulevard de Magenta", ll: [48.8745, 2.3592], type: "pillage", text: "Épicentre des pillages avec République", date: "17/10", url: "https://www.ici.fr/ile-de-france/paris-75/paris/mobilisation-du-17-octobre-le-difficile-bilan-des-degats-a-paris-une-cellule-d-aide-aux-commerces-mise-en-place-4435615" },
    { name: "Châtelet", ll: [48.8584, 2.3474], type: "pillage", text: "Commerces pillés", date: "17/10", url: "https://www.ici.fr/ile-de-france/paris-75/paris/mobilisation-du-17-octobre-le-difficile-bilan-des-degats-a-paris-une-cellule-d-aide-aux-commerces-mise-en-place-4435615" },
    { name: "Rue de Rivoli", ll: [48.8601, 2.3432], type: "pillage", text: "Commerces pillés", date: "17/10", url: "https://www.ici.fr/ile-de-france/paris-75/paris/mobilisation-du-17-octobre-le-difficile-bilan-des-degats-a-paris-une-cellule-d-aide-aux-commerces-mise-en-place-4435615" },
    { name: "Madeleine", ll: [48.8701, 2.3247], type: "pillage", text: "Commerces pillés", date: "17/10", url: "https://www.ici.fr/ile-de-france/paris-75/paris/mobilisation-du-17-octobre-le-difficile-bilan-des-degats-a-paris-une-cellule-d-aide-aux-commerces-mise-en-place-4435615" },
    { name: "8e arrondissement", ll: [48.8738, 2.3112], type: "pillage", text: "Dizaines de boutiques pillées vers 18h, secteur « en état de siège »", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Avenue des Champs-Élysées", ll: [48.8703, 2.3065], type: "barricade", text: "Barricades et affrontements malgré l'interdiction", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Abords de l'Élysée", ll: [48.8697, 2.3183], type: "barricade", text: "Barricades à environ 200 m du palais", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Rue du Faubourg-Saint-Honoré", ll: [48.8711, 2.315], type: "affrontement", text: "Cortèges sauvages repoussés près de l'Élysée", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Rue Cambacérès (8e)", ll: [48.8732, 2.3186], type: "affrontement", text: "Affrontements avec les forces de l'ordre", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Place Vendôme (ministère de la Justice)", ll: [48.8675, 2.3294], type: "degradation", text: "Porte du ministère visée par peinture et tags", date: "17/10", url: "https://www.france24.com/fr/france/20261017-affrontements-incendies-sc%C3%A8nes-de-chaos-%C3%A0-l-issue-des-manifestations-contre-la-vie-ch%C3%A8re-macron-melenchon-paris" },
    { name: "Siège CNews / Europe 1 (15e)", ll: [48.8425, 2.2785], type: "degradation", text: "Parking bloqué, projectiles, vitres brisées, 21 interpellations (position approximative)", date: "17/10", url: "https://fr.wikipedia.org/wiki/Manifestations_du_17_octobre_2026" },
    { name: "Monoprix · République", ll: [48.8667, 2.3621], type: "pillage", text: "Magasin dévalisé, tag « C'est pour les lycéens » (enseigne citée autour de République, position approximative)", date: "17/10", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    { name: "McDonald's · République", ll: [48.868, 2.3626], type: "pillage", text: "Pillé (enseigne citée autour de République, position approximative)", date: "17/10", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    { name: "SFR · République", ll: [48.8671, 2.3649], type: "pillage", text: "Pillé (enseigne citée autour de République, position approximative)", date: "17/10", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    { name: "Yves Rocher · République", ll: [48.8683, 2.3646], type: "pillage", text: "Pillé (enseigne citée autour de République, position approximative)", date: "17/10", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    { name: "Picard · République", ll: [48.866, 2.364], type: "pillage", text: "Pillé (enseigne citée autour de République, position approximative)", date: "17/10", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    { name: "Carrefour City · République", ll: [48.8688, 2.3633], type: "pillage", text: "Pillé (enseigne citée autour de République, position approximative)", date: "17/10", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    { name: "Franprix · République", ll: [48.8662, 2.3627], type: "pillage", text: "Rideau forcé, tag « Vive le ruissellement » (enseigne citée autour de République, position approximative)", date: "17/10", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    { name: "Etam · République", ll: [48.8678, 2.3612], type: "pillage", text: "Pillé (enseigne citée autour de République, position approximative)", date: "17/10", url: "https://fr.news.yahoo.com/sport/17-octobre-pillages-marge-cort%C3%A8ges-071119570.html" },
    { name: "Abords de la place de la République", ll: [48.8692, 2.3658], type: "incendie", text: "Rue de voitures garées en feu, une voiture renversée et calcinée, poubelles et vélos brûlés ; incendies dans 3 bâtiments signalés (non confirmé)", date: "17/10", url: "https://www.letribunaldunet.fr/faits-divers/paris-republique-voitures-incendiees-trois-batiments.html" },
    { name: "Rues entre République et Bastille (11e)", ll: [48.8608, 2.3707], type: "pillage", text: "Franprix, bijouterie et opticien pillés, caisses fracassées", date: "17/10", url: "https://actu.orange.fr/economie/quot-du-jamais-vu-quot-dans-le-centre-de-paris-des-scenes-de-pillage-hors-de-controle-CNT000002t3etq.html" },
    { name: "Boulevard de Sébastopol", ll: [48.8641, 2.3503], type: "pillage", text: "Secteur cité parmi les plus pillés (direct TF1 Info, via un cabinet d'avocats)", date: "17/10", url: "https://kohenavocats.fr/2026/10/18/pillage-magasin-paris-franchise-pille-assurance-redevances-recours-etat-2026/" },
    { name: "Les Halles", ll: [48.8619, 2.3462], type: "incendie", text: "« Dégradations et feux ont repris » selon le maire du 1er, rapporté par un site militant (à confirmer)", date: "18/10", url: "https://www.fdesouche.com/2026/10/18/manifs-du-17-octobre-scenes-de-chaos-dans-plusieurs-villes-de-france-affrontements-incendies-mairie-de-marseille-attaquee-statues-de-bocuse-ou-encore-jeanne-darc-cibles-pillages-et-b/" }
  ],

  // Incidents géolocalisés (vide pour l'instant). Ex : { t:"15:10", ll:[48.83,2.39], sev:3, text:"Heurts Pont National" }
  incidents: [
    { t: "15:54", ll: [48.8385, 2.4025], sev: 2, text: "Un groupe se détache du cortège : second défilé avenue du Général-Michel-Bizot (France 3 Paris IDF)" }
  ],

  transports: [
    { line: "M2", state: "coupé", text: "Barbès-Rochechouart ↔ Nation" },
    { line: "M6", state: "coupé", text: "Kléber ↔ Ch. de Gaulle-Étoile ; Dugommier, Daumesnil, Bel-Air, Picpus fermées" },
    { line: "M12", state: "coupé", text: "Madeleine ↔ Notre-Dame-des-Champs" },
    { line: "T3a", state: "coupé", text: "Montsouris ↔ Porte de Vincennes, jusqu'à dim. 6h" },
    { line: "T3b", state: "coupé", text: "Porte de Montreuil ↔ Porte de Vincennes, jusqu'à dim. 6h" },
    { line: "Bus", state: "dévié", text: "21, 24, 29, 46, 56, 57, 64, 67, 77, 86, 87, 109, 202, 215 + lignes des portes" },
    { line: "M7", state: "ok", text: "Dessert Porte d'Italie" }
  ],

  cities: [
    { city: "Marseille", state: "autorisé", text: "17 000 manifestants selon la préfecture, cortège calme ; 1 000 à Aix malgré l'interdiction" },
    { city: "Lyon", state: "interdit", text: "~2 000 manifestants dans le 7e malgré l'interdiction, mortiers contre les forces de l'ordre, lacrymogènes" },
    { city: "Nantes", state: "interdit", text: "Lacrymos et canon à eau place de la République ; cortège non autorisé dans le périmètre interdit (16h10)" },
    { city: "Bordeaux", state: "vigilance", text: "Cortège place de la Bourse malgré l'interdiction, calme" },
    { city: "Limoges", state: "autorisé", text: "TA suspend l'interdiction des rassemblements et le couvre-feu" },
    { city: "Le Havre", state: "interdit", text: "Interdiction ville ou centre" },
    { city: "Orléans", state: "autorisé", text: "Contre le congrès du RN : 13 000 à 26 000 manifestants ; congrès ouvert à 15h21" },
    { city: "Grenoble", state: "vigilance", text: "Blocage de l'A480 : accident, 2 blessés légers (14h43)" },
    { city: "Île-de-France", state: "vigilance", text: "Actions mobiles attendues : ronds-points, stations-service, dépôts pétroliers, péages" }
  ],

  agenda: [
    { d: "dim. 25/10 16h30", text: "Rassemblement GJ av. Gabriel (interdit)" },
    { d: "lun. 26/10 6h", text: "Fin du couvre-feu République / Les Halles" },
    { d: "jeu. 29/10", text: "Réunion lycéenne" },
    { d: "sam. 31/10", text: "Acte III / mobilisation Gilets jaunes" },
    { d: "mar. 03/11", text: "Journée nationale lycéenne" },
    { d: "jeu. 05/11", text: "Grève intersyndicale" }
  ],

  // Jalons de la journée affichés sur la frise
  milestones: [
    { t: "09:00", text: "Fermeture 24 stations" },
    { t: "10:00", text: "T3 suspendu" },
    { t: "13:00", text: "Fenêtre ouverte" },
    { t: "14:00", text: "Départ Porte d'Italie" },
    { t: "19:00", text: "Fin autorisée" },
    { t: "23:00", text: "Couvre-feu" }
  ],

  // Directs vidéo YouTube : vid = id de la vidéo live en cours (vérifié 15h05)
  videos: [
    { vid: "NG7ZX42nZKc", name: "franceinfo", title: "franceinfo EN DIRECT : manifestations du 24 octobre" },
    { vid: "-EBIK8Gowgc", name: "BFMTV", title: "Suivez les manifestations du 24 octobre en direct" }
  ],

  sources: [
    { name: "franceinfo — direct", url: "https://www.franceinfo.fr/societe/manifestations/manifestations-du-24-octobre-suivez-en-direct-cette-nouvelle-journee-de-mobilisation-sous-tres-haute-securite_8251987.html" },
    { name: "Euronews — live", url: "https://fr.euronews.com/2026/10/24/france-acte-ii-de-la-colere-sociale-la-manifestation-contre-le-congres-du-rn-debute-a-orle" },
    { name: "CNews — direct", url: "https://www.cnews.fr/france/2026-10-24/mobilisation-du-24-octobre-le-cortege-parisien-selance-de-la-porte-ditalie-135" },
    { name: "Sortiraparis — parcours & fermetures", url: "https://www.sortiraparis.com/en/news/in-paris/articles/355171-october-24-demonstration-in-paris-route-closures-and-closed-stations-what-you-need-to-know" },
    { name: "Préfecture de police (X)", url: "https://x.com/prefpolice" },
    { name: "RATP — trafic", url: "https://www.ratp.fr/infos-trafic" },
    { name: "Sytadin — routes IDF", url: "https://www.sytadin.fr/" }
  ]
};
