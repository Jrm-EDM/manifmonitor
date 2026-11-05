// ManifMonitor — données du dashboard.
// Modifier ce fichier suffit : la page le recharge toutes les 60 s.
// Heures en "HH:MM" (heure de Paris). sev : 1 info · 2 notable · 3 alerte · 4 critique.
window.MANIF_DATA = {
  meta: {
    title: "Mobilisation du 5 novembre",
    routeLabel: "cortège République → Nation",
    dayLabel: "Journée du 5 nov. · 06h → 02h",
    date: "2026-11-05",
    updated: "2026-11-05T17:40:00+01:00",
    tension: 3, // 1 calme · 2 vigilance · 3 tendu · 4 émeutes · 5 crise
    tensionNote: "Paris : dégradations boulevard Voltaire (préfecture) ; 40 blessés à Lyon, violences à Rennes et Nantes.",
    window: { start: "14:00", end: "19:00" },
    march: { start: "14:10", end: "16:47" }, // départ réel, arrivée de la tête
    curfew: null,
    restrictions: "Parcours République–Nation par le boulevard Voltaire, de 14h à 19h, seul itinéraire autorisé à Paris : Bastille–Concorde interdit (tribunal administratif, 4 novembre), cortège étudiant Panthéon–MEDEF interdit. Aucun autre rassemblement autorisé dans la capitale selon BFMTV. Pas de couvre-feu signalé pour cette journée."
  },

  kpis: [
    { id: "paris", label: "Manifestants Paris", value: "n.c.", delta: "pas encore de comptage ; 40 000 à 80 000 attendus", trend: "flat", src: "BFMTV", at: "06:36" },
    { id: "arrests", label: "Interpellations Paris", value: "18", delta: "dans les gares, avant le cortège ; pas de bilan national", trend: "up", src: "Préfecture via CNews", at: "13:18" },
    { id: "crowd", label: "Manifestants France", value: "600 000", delta: "ministère de l'Intérieur, 1re estimation ; CGT : 250 000+ à 13h", trend: "up", src: "Min. Intérieur via BFMTV / CNews", at: "17:04" },
    { id: "controls", label: "Contrôles Paris", value: "1 404", delta: "dans les gares de l'agglomération parisienne", trend: "up", src: "Préfecture via CNews", at: "13:18" },
    { id: "stations", label: "Stations de métro fermées", value: "25", delta: "République et Nation restent ouvertes", trend: "flat", src: "Sortiraparis", at: "11:00" },
    { id: "police", label: "Policiers & gendarmes", value: "70 000", delta: "France entière, même dispositif que le 31/10", trend: "flat", src: "L. Nuñez via BFMTV", at: "06:39" }
  ],

  feed: [
    { t: "17:10", cat: "politique", sev: 3, text: "Sébastien Lecornu annonce une « conférence sociale » lundi 9 novembre à Matignon avec syndicats et patronat ; le ministre du Travail doit finaliser ses concertations d'ici dimanche.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "17:04", cat: "cortege", sev: 3, text: "Près de 600 000 manifestants en France à 17h, Paris compris, selon une première estimation du ministère de l'Intérieur ; chiffre définitif attendu dans la soirée.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "17:00", cat: "securite", sev: 3, incident: true, text: "Lyon : 40 blessés dont 34 policiers et 6 manifestants, 24 interpellations, 5 commerces dégradés, une voiture de particulier incendiée avenue Berthelot, barricades (préfecture du Rhône). Entre 30 500 et 55 000 manifestants.", src: "France 3 Auvergne-Rhône-Alpes", url: "https://france3-regions.franceinfo.fr/auvergne-rhone-alpes/rhone/lyon/direct-manifestation-du-5-novembre-a-lyon-aucun-metro-le-centre-ville-deja-sous-cloche-30-000-manifestants-attendus-3444585.html", approx: true },
    { t: "16:57", cat: "transports", sev: 1, text: "Philippe Tabarot : 9 TGV sur 10 et 2 trains régionaux sur 3 ont circulé ; trafic quasi normal à Roissy et Orly ; aucune perturbation métro, bus et tram en Île-de-France.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "16:47", cat: "cortege", sev: 2, text: "Paris : la tête de cortège arrive place de la Nation, trois heures après le départ ; il reste des manifestants place de la République.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "16:08", cat: "securite", sev: 3, incident: true, text: "Paris, boulevard Voltaire : « des individus cagoulés ont commis des dégradations », les forces de l'ordre interviennent pour « isoler les fauteurs de troubles » (préfecture de police).", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "16:05", cat: "securite", sev: 2, incident: true, text: "Caen : 12 500 manifestants « dans le calme » selon le préfet, qui déplore d'« importantes dégradations » dans les lycées Rostand et Fresnel (extincteurs, barres de fer).", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "16:00", cat: "securite", sev: 3, incident: true, text: "Nantes : 30 interpellations à 16h (préfecture) ; cortège stoppé devant le CHU, lacrymogènes, la préfète appelle à quitter les lieux.", src: "France 3 Pays de la Loire", url: "https://france3-regions.franceinfo.fr/pays-de-la-loire/loire-atlantique/nantes/direct-manifestation-du-5-novembre-parcours-transports-perturbes-greve-suivez-les-mobilisations-a-nantes-angers-le-mans-ou-encore-laval-3444654.html" },
    { t: "15:38", cat: "securite", sev: 3, incident: true, text: "Rennes : la préfète annonce que des syndicalistes ont été « violemment attaqués par des individus masqués » ; plusieurs dizaines d'interpellations après les dégradations d'un hôtel.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "15:30", cat: "politique", sev: 2, text: "Raphaël Glucksmann quitte la manifestation parisienne après 45 minutes bloqué place de la République par des militants hostiles.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "15:11", cat: "cortege", sev: 1, text: "Pas-de-Calais : 3 250 manifestants, aucune dégradation ni interpellation (préfet).", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "15:02", cat: "cortege", sev: 1, text: "Paris : près d'une heure après le départ, le cortège avance dans le calme vers Nation.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "14:36", cat: "cortege", sev: 2, text: "Grévistes à la mi-journée : 9,89 % dans la fonction publique d'État, 4,60 % dans la territoriale, 3,93 % dans l'hospitalière (ministère).", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "14:15", cat: "cortege", sev: 2, text: "Paris : le cortège s'élance de la place de la République vers 14h10, après une minute de silence pour la victime de l'attentat raciste de Trappes ; ambiance « calme et festive ».", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "13:53", cat: "securite", sev: 3, incident: true, text: "Lyon : forces de l'ordre visées par des jets de projectiles, « plusieurs centaines d'individus » constitués en black bloc selon le ministère de l'Intérieur.", src: "CNews", url: "https://www.cnews.fr/france/2026-11-05/manifestations-du-5-novembre-les-premieres-tensions-eclatent-dans-lest-de-paris" },
    { t: "13:40", cat: "cortege", sev: 2, text: "270 000 manifestants dans 180 cortèges à 13h, hors Paris, selon l'entourage de Laurent Nuñez.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "13:38", cat: "securite", sev: 3, incident: true, text: "Nantes : des casseurs arrachent des pavés et les jettent sur les forces de l'ordre.", src: "CNews", url: "https://www.cnews.fr/france/2026-11-05/manifestations-du-5-novembre-les-premieres-tensions-eclatent-dans-lest-de-paris" },
    { t: "13:27", cat: "securite", sev: 3, incident: true, text: "Lille : feu de poubelles et importante fuite de gaz devant le lycée César-Baggio, périmètre de 200 m, habitants évacués (préfecture).", src: "CNews / BFMTV", url: "https://www.cnews.fr/france/2026-11-05/manifestations-du-5-novembre-les-premieres-tensions-eclatent-dans-lest-de-paris" },
    { t: "13:18", cat: "securite", sev: 2, text: "Agglomération parisienne : 18 interpellations et 1 404 contrôles dans les gares, matériels dangereux découverts (préfecture de police).", src: "CNews", url: "https://www.cnews.fr/france/2026-11-05/manifestations-du-5-novembre-les-premieres-tensions-eclatent-dans-lest-de-paris" },
    { t: "13:16", cat: "politique", sev: 2, text: "Sophie Binet (CGT) depuis République : « rien ne nous arrêtera », elle réclame des « réponses immédiates ».", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "13:09", cat: "cortege", sev: 2, text: "La CGT revendique « plus de 250 000 manifestants » à 13h dans 73 villes.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "12:39", cat: "transports", sev: 1, text: "La tour Eiffel est fermée en raison de la grève ; certaines salles du Louvre aussi.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "12:13", cat: "cortege", sev: 2, text: "Enseignement supérieur : 33 % des établissements « perturbés » selon le gouvernement ; 90 % des universités mobilisées selon l'Union étudiante.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "11:54", cat: "cortege", sev: 2, text: "Éducation nationale : 15,81 % d'enseignants en grève selon le ministère (19,14 % dans le 1er degré, 13,53 % dans le 2d) ; 52 % dans le 2d degré selon le Snes-FSU.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "11:43", cat: "securite", sev: 3, incident: true, text: "Rennes : « violences urbaines » selon la préfète : tentatives de barricades, feux de poubelles devant des lycées, boules de pétanque lancées devant le lycée Bréquigny.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "11:24", cat: "securite", sev: 3, incident: true, text: "Tournefeuille (Haute-Garonne) : un lycée évacué après un incendie déclenché à la suite d'une intrusion ; le recteur dénonce des faits « inqualifiables ».", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "11:00", cat: "transports", sev: 2, text: "Paris : 25 stations de métro fermées à partir de 11h ; République et Nation restent ouvertes.", src: "Sortiraparis", url: "https://www.sortiraparis.com/actualites/a-paris/articles/357062-manifestation-du-5-novembre-a-paris-25-stations-de-metro-fermees-ce-jeudi" },
    { t: "10:55", cat: "securite", sev: 2, incident: true, text: "Paris, rue de Rivoli : les forces de l'ordre dispersent un cortège qui bloquait l'artère ; une lycéenne dénonce des coups de matraque (CLPress).", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "10:49", cat: "cortege", sev: 2, text: "Lycées à 10h : 81 bloqués (2,2 %) selon le ministère, plus de 1 000 à l'arrêt selon l'Union syndicale lycéenne.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "10:36", cat: "cortege", sev: 1, text: "Les premiers cortèges s'élancent à Caen, Lyon, Marseille et Nantes.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "10:30", cat: "securite", sev: 2, incident: true, text: "Paris 17e, lycée Honoré-de-Balzac : des élèves disent avoir été chargés, avec lacrymogène et coups ; le calme est revenu.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "10:07", cat: "securite", sev: 2, text: "Gare de Châtelet : matériels dangereux saisis et une interpellation lors des contrôles (préfecture de police).", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "09:57", cat: "justice", sev: 2, text: "Toulouse : le tribunal rejette le recours des syndicats contre l'interdiction du centre-ville ; ils maintiennent leur parcours.", src: "BFMTV / CNews", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "09:49", cat: "securite", sev: 2, text: "Note de la préfecture de police : 400 à 600 militants d'ultragauche et casseurs pourraient se glisser dans les cortèges parisiens.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "08:09", cat: "securite", sev: 2, incident: true, text: "Paris 20e : premières tensions près du lycée Hélène-Boucher ; le calme revient vers 9h40.", src: "CNews", url: "https://www.cnews.fr/france/2026-11-05/manifestations-du-5-novembre-les-premieres-tensions-eclatent-dans-lest-de-paris" },
    { t: "07:25", cat: "politique", sev: 1, text: "Sondage Elabe pour BFMTV : plus d'un Français sur deux approuve la mobilisation, 88 % jugent les revendications légitimes.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "06:39", cat: "securite", sev: 2, text: "70 000 policiers et gendarmes mobilisés, « exactement le même dispositif » que le 31 octobre (Nuñez).", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "06:37", cat: "justice", sev: 2, text: "Le tribunal administratif valide le parcours République–Nation imposé par la préfecture ; le trajet Bastille–Concorde de l'intersyndicale reste interdit.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { t: "06:36", cat: "cortege", sev: 1, text: "Attendus : 500 000 à 700 000 manifestants hors Paris, 40 000 à 80 000 à Paris.", src: "BFMTV", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" }
  ],

  // Parcours République → Nation par le boulevard Voltaire (points : stations de la ligne 9 sur le boulevard)
  route: [[48.86762, 2.3637], [48.86411, 2.36942], [48.86104, 2.37473], [48.85818, 2.37982], [48.85474, 2.3853], [48.85258, 2.38879], [48.8483, 2.3958]],
  // Tête de cortège : "auto" = interpolée sur l'heure (meta.march) ; ou un index de route pour forcer une position signalée
  headIndex: 6, // tête arrivée place de la Nation à 16h47 (BFMTV)

  places: [
    { name: "Place de la République", ll: [48.86762, 2.3637], kind: "start", note: "Départ vers 14h10" },
    { name: "Place de la Nation", ll: [48.8483, 2.3958], kind: "end", note: "Arrivée de la tête à 16h47, fin autorisée 19h" },
    { name: "Bastille", ll: [48.8532, 2.3691], kind: "banned", note: "Départ du parcours de l'intersyndicale, interdit par la préfecture" },
    { name: "Concorde", ll: [48.86621, 2.32238], kind: "banned", note: "Arrivée du parcours de l'intersyndicale, interdite par la préfecture" }
  ],

  curfewZones: [],

  closedStations: [
    { name: "Argentine", lines: "1", ll: [48.87534, 2.29013] },
    { name: "Assemblée nationale", lines: "12", ll: [48.86058, 2.32117] },
    { name: "Champs-Élysées - Clemenceau", lines: "1, 13", ll: [48.86749, 2.31407] },
    { name: "Charles de Gaulle - Étoile", lines: "1, 2, 6, RER A", ll: [48.87441, 2.29551] },
    { name: "Charonne", lines: "9", ll: [48.85474, 2.3853] },
    { name: "Cluny - La Sorbonne", lines: "10", ll: [48.85109, 2.34416] },
    { name: "Concorde", lines: "1, 8, 12", ll: [48.86621, 2.32238] },
    { name: "Franklin D. Roosevelt", lines: "1, 9", ll: [48.86903, 2.30993] },
    { name: "George V", lines: "1", ll: [48.87208, 2.30042] },
    { name: "Invalides", lines: "8, 13, RER C", ll: [48.86017, 2.3145] },
    { name: "Mabillon", lines: "10", ll: [48.85289, 2.33494] },
    { name: "Madeleine", lines: "8, 12, 14", ll: [48.8701, 2.326] },
    { name: "Maubert - Mutualité", lines: "10", ll: [48.85006, 2.34843] },
    { name: "Miromesnil", lines: "9, 13", ll: [48.87372, 2.3145] },
    { name: "Oberkampf", lines: "5, 9", ll: [48.86411, 2.36942] },
    { name: "Odéon", lines: "4, 10", ll: [48.8523, 2.33937] },
    { name: "Richard-Lenoir", lines: "5", ll: [48.86022, 2.37205] },
    { name: "Rue des Boulets", lines: "9", ll: [48.85258, 2.38879] },
    { name: "Rue du Bac", lines: "12", ll: [48.85518, 2.32577] },
    { name: "Saint-Ambroise", lines: "9", ll: [48.86104, 2.37473] },
    { name: "Saint-Germain-des-Prés", lines: "4", ll: [48.85363, 2.33447] },
    { name: "Sèvres - Babylone", lines: "10, 12", ll: [48.85125, 2.32699] },
    { name: "Solférino", lines: "12", ll: [48.85866, 2.32299] },
    { name: "Tuileries", lines: "1", ll: [48.86452, 2.32963] },
    { name: "Voltaire", lines: "9", ll: [48.85818, 2.37982] }
  ],

  closedVenues: [
    { name: "Tour Eiffel", ll: [48.8584, 2.2945] }
  ],

  securedPoints: [],

  // Évaluation éditoriale : heat 1 tension · 2 affrontements (lacrymos nourris, projectiles, charges) · 3 émeutes (incendies, pillages, barricades).
  hotZones: [
    { name: "Boulevard Voltaire", ll: [48.86104, 2.37473], r: 450, heat: 1, note: "16h08 : individus cagoulés, dégradations, forces de l'ordre engagées (préfecture de police via BFMTV). Lieu exact non précisé." }
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

  incidents: [
    { t: "16:08", ll: [48.86104, 2.37473], sev: 3, text: "Dégradations par des individus cagoulés, boulevard Voltaire (préfecture via BFMTV, position approximative)" },
    { t: "10:55", ll: [48.8601, 2.3432], sev: 2, text: "Rue de Rivoli : cortège bloquant l'artère dispersé par les forces de l'ordre (CLPress via BFMTV, position approximative)" },
    { t: "10:30", ll: [48.8961, 2.3157], sev: 2, text: "Lycée Honoré-de-Balzac : élèves disant avoir été chargés, lacrymogène (BFMTV, position approximative)" },
    { t: "08:09", ll: [48.8479, 2.4056], sev: 2, text: "Tensions devant le lycée Hélène-Boucher, calme revenu vers 9h40 (CNews, position approximative)" }
  ],

  transports: [
    { line: "SNCF", state: "dévié", text: "9 TGV sur 10, 2 trains régionaux sur 3 (Tabarot, 16h57)" },
    { line: "RATP", state: "ok", text: "Aucune perturbation métro, bus, tram hors stations fermées" }
  ],

  cities: [
    { city: "Lyon", state: "vigilance", text: "30 500 à 55 000 manifestants ; 40 blessés dont 34 policiers, 24 interpellations, voiture incendiée, barricades" },
    { city: "Nantes", state: "vigilance", text: "30 interpellations à 16h ; pavés lancés, lacrymogènes devant le CHU" },
    { city: "Rennes", state: "vigilance", text: "Violences urbaines, tentatives de barricades, syndicalistes attaqués par des individus masqués" },
    { city: "Caen", state: "autorisé", text: "12 500 manifestants ; dégradations dans les lycées Rostand et Fresnel" },
    { city: "Tours", state: "autorisé", text: "16 200 selon la préfecture, 22 000 selon la CGT ; 3 interpellations, heurts après la manifestation" },
    { city: "Angers", state: "autorisé", text: "15 000 à 20 000 selon la CFDT" },
    { city: "Toulouse", state: "interdit", text: "Centre-ville interdit, recours rejeté, syndicats maintenus sur leur parcours ; lycée incendié à Tournefeuille" },
    { city: "Lille", state: "vigilance", text: "Feu et fuite de gaz devant le lycée César-Baggio, habitants évacués" },
    { city: "Marseille", state: "autorisé", text: "Cortège dans le calme (Réformés → Castellane)" },
    { city: "Nice", state: "autorisé", text: "Gare SNCF → Masséna, cœur commerçant contourné" },
    { city: "Bordeaux", state: "vigilance", text: "Une centaine d'élèves bloquent le lycée Montaigne" },
    { city: "Strasbourg", state: "vigilance", text: "Tentative de blocage du lycée Marie-Curie dispersée" }
  ],

  agenda: [
    { d: "dim. 08/11", text: "Fin des concertations du ministre du Travail" },
    { d: "lun. 09/11", text: "Conférence sociale à Matignon" }
  ],

  // Jalons de la journée affichés sur la frise
  milestones: [
    { t: "10:36", text: "Premiers cortèges" },
    { t: "14:10", text: "Départ République" },
    { t: "16:47", text: "Tête à Nation" },
    { t: "19:00", text: "Fin autorisée" }
  ],

  // Directs vidéo YouTube : vid = id du direct de la chaîne (vérifié 17h40)
  videos: [
    { vid: "NG7ZX42nZKc", name: "franceinfo", title: "franceinfo en direct" },
    { vid: "C15czQgHSrE", name: "BFM2", title: "BFM2 en direct" }
  ],

  sources: [
    { name: "BFMTV — direct", url: "https://www.bfmtv.com/societe/manifestations/direct-greve-du-5-novembre-jusqu-a-plus-de-700-000-manifestants-attendus-en-france-de-nombreuses-forces-de-l-ordre-mobilisees_LN-202611050121.html" },
    { name: "CNews — direct", url: "https://www.cnews.fr/france/2026-11-05/manifestations-du-5-novembre-les-premieres-tensions-eclatent-dans-lest-de-paris" },
    { name: "France 3 Lyon — direct", url: "https://france3-regions.franceinfo.fr/auvergne-rhone-alpes/rhone/lyon/direct-manifestation-du-5-novembre-a-lyon-aucun-metro-le-centre-ville-deja-sous-cloche-30-000-manifestants-attendus-3444585.html" },
    { name: "France 3 Pays de la Loire — direct", url: "https://france3-regions.franceinfo.fr/pays-de-la-loire/loire-atlantique/nantes/direct-manifestation-du-5-novembre-parcours-transports-perturbes-greve-suivez-les-mobilisations-a-nantes-angers-le-mans-ou-encore-laval-3444654.html" },
    { name: "ICI Touraine — direct", url: "https://www.ici.fr/infos/societe/direct-greve-du-5-novembre-suivez-la-mobilisation-contre-la-vie-chere-a-tours-2516270" },
    { name: "Sortiraparis — stations fermées", url: "https://www.sortiraparis.com/actualites/a-paris/articles/357062-manifestation-du-5-novembre-a-paris-25-stations-de-metro-fermees-ce-jeudi" },
    { name: "Sortiraparis — parcours", url: "https://www.sortiraparis.com/actualites/a-paris/articles/357052-manifestation-du-5-novembre-a-paris-le-parcours-impose-par-la-prefecture-confirme" },
    { name: "Préfecture de police (X)", url: "https://x.com/prefpolice" },
    { name: "RATP — trafic", url: "https://www.ratp.fr/infos-trafic" }
  ]
};
