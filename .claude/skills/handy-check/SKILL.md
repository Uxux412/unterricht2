---
name: handy-check
description: Prüft Spiele und Materialseiten auf dem Handy (iPhone SE, iPhone 14, Pixel 7, Querformat). Startet die Seite, tippt den Infotext weg, testet das Steuerkreuz, macht Screenshots und meldet zu kleine Knöpfe, Überlauf, abgeschnittene Steuerung und JS-Fehler. Aktivieren bei "Handy-Check", "läuft das auf dem Handy", "prüf das mobil", nach jeder Änderung an euroquest/ oder brdquest/ und bei jedem neuen Spiel.
---
1. `node tools/handy-check.js <ordner>/index.html [...]` im Repo-Hauptordner ausführen.
2. Jeden Befund (✘) beheben, dabei Screenshots in `handy-check-ergebnis/` ansehen (je Gerät Start, Intro zu, nach Tippen).
3. Erneut laufen lassen, bis überall ✔ steht. Ergebnis dem Nutzer in 2–3 Sätzen ohne Fachbegriffe melden.
4. `handy-check-ergebnis/` nicht committen (steht in .gitignore).
