# Mein Unterricht

**Startseite:** https://uxux412.github.io/unterricht2/

Statische Seite über GitHub Pages (Branch `main`), ohne Build-Schritt.

## Aufbau

```
index.html              Startseite (Fächer + zuletzt veröffentlicht + Suche)
geschichte/ religion/ gemeinschaftskunde/
                        Fachseiten, nach Themenbereichen gegliedert
data/inhalte.js         ⚑ zentrale Liste: Fächer, Themenbereiche, Materialien
assets/site.css         gemeinsames Aussehen
assets/site.js          baut Kopfzeile, Navigation, Brotkrumen, Kacheln, QR-Fenster
rundgemaelde/           Material: Rundgemälde von Europa 1849
besatzung.html          Material: Strukturlegen Deutschland 1945–1949
```

## Neues Material

1. Datei oder Ordner mit `index.html` anlegen.
2. In `data/inhalte.js` unter `materialien` eintragen (bei Bedarf vorher einen Themenbereich unter `bereiche`).

Danach erscheint es automatisch auf der Startseite, auf der Fachseite und in der Suche.
