# Hinweise für Claude

- Der Nutzer ist Lehrer (Geschichte, Religion, Gemeinschaftskunde) und kennt sich mit GitHub nicht aus.
  Alles auf GitHub selbst erledigen. Wenn ein Schritt nur der Nutzer machen kann: genau einen Schritt, mit Klick-Anleitung, ohne Fachbegriffe.
- Keine Entschuldigungen, keine Paraphrasen der Anfrage, sofort zum Punkt.
- Dieses Repo ist öffentlich und wird über GitHub Pages (Branch `main`) veröffentlicht: https://uxux412.github.io/unterricht2/
- Aufbau wie in `README.md`: Startseite `index.html`, Fachseiten `geschichte/`, `religion/`, `gemeinschaftskunde/`, `spiele/`,
  alles wird aus `data/inhalte.js` erzeugt. Neues Material = eigener Ordner mit `index.html` + Eintrag in `data/inhalte.js`
  (Feld `pfad` immer mit `index.html` am Ende, damit es auch lokal geöffnet funktioniert). Sonst nichts ändern.
- Pfade bestehender Materialien nicht verschieben: Schüler haben QR-Codes dazu.
- Materialseiten verlinken mit „🏠 Übersicht“ (`href="../index.html"`) zurück zur Startseite.
