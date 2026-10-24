# ManifMonitor — TODO

## Demandes (dans l'ordre)
- [x] 1. Carte de Paris + tracé du cortège + position actuelle (tête de cortège = `headIndex` dans data.js, mise à jour manuelle)
- [x] 2. Stations de métro fermées (6 sur 24 nommées, liste complète à récupérer)
- [x] 3. Points sécurisés (périmètres d'interdiction de la préfecture + gares)
- [x] 4. Zones chaudes (évaluation éditoriale, chaleur 1 à 3)
- [x] 5. Événements : fil en direct filtrable + frise de la journée + couche incidents sur la carte
- [x] 6. Stats : interpellations, manifestants, contrôles, stations, effectifs

## Ensuite
- [ ] Liste complète des 24 stations fermées (article RATP/Sortiraparis lié)
- [ ] Position du cortège automatique (interpolation horaire 14h → 19h, ou saisie manuelle rapide)
- [ ] Tracé exact via OSM (boulevards des Maréchaux)
- [ ] Mise à jour automatique : script qui lit les liveblogs (franceinfo, BFM) et écrit data.js
- [ ] Courbe des interpellations et des manifestants dans la journée
- [ ] Hébergement (GitHub Pages / Vercel) pour partager le lien

## Entre deux manifs (depuis le 24/10 au soir)
- `index.html` = page bilan (bandeau prochain rendez-vous + infographie 17/10 vs 24/10), données dans `bilan.js`.
- `live.html` = modèle du direct (lit `data.js`, archive du 24/10). Pour la prochaine manif (5 novembre), 24 h avant :
  1. copier `data.js` en `archive/2026-10-24-data.js`, puis vider/adapter `data.js` (meta, parcours, stations, zones, feed) ;
  2. retirer `meta.archived` de data.js (sinon la page reste en mode archive), puis `cp live.html index.html` (garder l'ancienne page bilan en `bilan.html` si besoin) ;
  3. relancer la tâche de veille toutes les 3 min (BFMTV via Claude in Chrome en priorité) et publier avec `sh publish.sh`.
- [ ] Dimanche 25/10 au matin : réactualiser les chiffres du 24/10 dans `bilan.js` (bilans définitifs : interpellations, GAV, blessés FdO, commerces), puis `provisional: false`.
