#!/usr/bin/env sh
# Publie les données (et la page si modifiée) sur GitHub Pages → manifmonitor.artificiel.ai
# Usage : sh publish.sh "message"
cd "$(dirname "$0")" || exit 1
node -e "global.window={};require('./data.js')" || { echo "data.js invalide, rien publié"; exit 1; }
git add -A
git diff --cached --quiet && { echo "rien à publier"; exit 0; }
git -c user.name="Jrm-EDM" -c user.email="jeremy.skornik@gmail.com" commit -q -m "${1:-MàJ données live}"
git pull --rebase -q origin main 2>/dev/null; git push -q origin main && echo "publié : $(git log -1 --format=%h)"
# purge du cache jsDelivr (repli quand l'API GitHub est saturée)
for i in 1 2; do curl -s -m 15 -o /dev/null "https://purge.jsdelivr.net/gh/Jrm-EDM/manifmonitor@main/data.js"; sleep 2; done
