# Cold War Quest – Technik-Bauplan

Stand: Konzept. Programmiert wird erst nach Freigabe.

## 1. Grundlage: BRD Quest J2 von GitHub, nicht die alte lokale Kopie

Geprüft wurde das GitHub-Repo `Uxux412/unterricht2`, Stand vom 24.11.2026. Die lokale Kopie in einem alten Scratchpad ist veraltet (abweichender Hash). Maßgeblich ist die **J2-Architektur**:

```
unterricht2/
  assets/quest-intro.js    8-Bit-Infotext beim Start (QuestIntro), auch hinter dem „?“-Knopf
  assets/quest-modes.js    Spielarten: rollenspiel, abstimmung, weg, faelle, werbinich, zeit, vorhersage, info
                           + Merksatz-Kasten „✍️ Ergebnis fürs Arbeitsblatt“ + QuestFlag (Siegesfahne)
  brdquest-j2/index.html   Engine + Grundinhalte (CONTENT, MAP, HOUSES, RANKS, ROOM_STATIONS)
  brdquest-j2/j2.js        window.J2(C): überschreibt pro Haus title, infoCards, mode, game, summary
```

So ruft das Spiel die Spielart auf (`openStationModal`): `QuestModes[d.mode](host, d, schonGeloest, () => markSolved(null))`. Jede Spielart bekommt also `d.game` (Inhalt) und `d.summary` (Merksatz fürs Arbeitsblatt).

**Konventionen aus deinen letzten Commits:**
- Infotafel mit **3 Karten à ca. 35 Wörter**, `infoLead` „Lies die drei Karten. Danach …“
- Merksatz kurz und im Format `<b>Begriff:</b> … · <b>Begriff:</b> …`
- Jede falsche Antwort bekommt eine **erklärende Rückmeldung** (`fb`). Das ist formatives Feedback, keine bloße Rot-Markierung.
- Knöpfe mindestens 44 px groß, Hochformat am Handy wird unterstützt, gegen Doppeltippen gibt es den `guard()`.

## 2. Zielstruktur für Cold War Quest

```
unterricht2/
  coldwarquest/
    index.html     Kopie von brdquest-j2/index.html, umgebaut (Engine bleibt)
    cw.js          Inhalte (wie j2.js): 4 Häuser + Finale
    cw-modes.js    NEUE Spielarten, die window.QuestModes erweitern
  assets/          unverändert mitbenutzt
```

**Warum eine eigene `cw-modes.js`?** `assets/quest-modes.js` ist laut Kopfzeile für die J2-Quests da (BRD Quest J2, Euro Quest J2). Ob auch die 2J-Fassung sie lädt, ist ungeprüft. Jede Änderung dort kann diese Spiele kaputtmachen. Die neuen Spielarten hängen sich deshalb nur an:

```js
Object.assign(window.QuestModes, { schloss, akten, hotspot, tresor, finale });
```

## 3. Was bleibt und was neu kommt

| Bereich | BRD Quest J2 | Cold War Quest |
|---|---|---|
| Dorf, Steuerung, Pfadsuche, Touch-Pad | vorhanden | **bleibt** |
| Innenraum-Szene, `ROOM_STATIONS`, `openStationModal`, `markSolved`, `selfTest` | vorhanden | **bleibt**, wird erweitert |
| `MAP` / `HOUSES` | Dorf mit 5 Häusern | Grenzstadt mit Fluss und Brücke, 4 Häuser + Startbüro |
| Spielfigur | `MODEL1_SPRITE` (Wächter) | `KS001_SPRITE` + Gang mit 2 Bildern |
| Hauszeichnungen | `drawParliament…`, `drawMerchant…`, `drawGrenzhaeuschen…` | 4 neue: Archiv, Lagezentrum, Washington, Moskau |
| Innenraum | ein Raumtyp | 4 Raum-Themen (Farben, Möbel, Deko je Haus) |
| Stationen | Infotafel · Aufgaben-Tisch · Ausgang | + **UV-Versteck** (Position je Haus) + **Tresor** |
| Belohnung | `LAENDER` (16 Wappen) | **Bündniskarte** (Vorschlag: 12 NATO-Gründer 1949 + 8 Warschauer-Pakt-Staaten 1955 = 20) |
| Ränge | Dorf-Ränge | Agentenränge |
| Sieg | `QuestFlag("de")` | eigenes Siegbild (Vorschlag: Fernschreiber des „heißen Drahts“) |
| Freischaltung | frei | der Reihe nach (Tür „versiegelt“, bis das vorige Haus gelöst ist) |
| Inventar | – | **Aktenkoffer**-Panel (HUD-Knopf, Taste I) |
| UV-Lampe | – | Taste U bzw. Knopf, Abdunkel-Overlay in `drawInterior()` |

## 4. Neue Spielarten (cw-modes.js)

Alle neuen Spielarten folgen deiner Konvention: Es gibt erklärendes `fb` bei jedem Fehler, am Ende steht `finish()` mit Merksatz. Das Escape-Room-Gefühl entsteht durch **Code-Buchstaben**, die jede richtige Deutung freigibt, und durch den **Tresor** am Schluss.

| Spielart | Einsatz | Kern |
|---|---|---|
| `schloss` | Haus 1 | Zitatkarten drehen: USA oder UdSSR. Jede richtige Karte gibt einen Code-Buchstaben frei. |
| `akten` | Haus 2 | 3 Akten × 3 Merkmale zuordnen, pro Zeile geprüft, danach eine Deutungsfrage |
| `hotspot` | Haus 3 + 4 | selbst gezeichnete Pixel-Karikatur mit 3 klickbaren Stellen, je eine Deutungsfrage |
| `tresor` | jedes Haus | Code eintippen (Großbuchstaben, Umlaute normalisiert) → Beweisstück in den Koffer |
| `finale` | Finale | Satzbaukasten „Heißer Draht“: Die Antwort auf die Leitfrage aus Bausteinen, die sich auf alle 4 Beweise stützen |

Weiterverwendbar ohne neuen Code sind `faelle`, `werbinich`, `zeit` und `vorhersage`, zum Beispiel für Bonus-Akten.

**Datenform pro Haus in cw.js** (wie in j2.js):

```js
C.truman = {
  title, infoLead, infoSource, infoCards: [/* 3 Karten */],
  intro, mode: "schloss", game: { /* Inhalt */ },
  summary: "…",                       // Merksatz fürs Arbeitsblatt
  code: "DEMOKRATIE",                 // Tresor
  uvNote: { x, y, text },             // UV-Versteck im Raum
  evidence: { icon, name, satz },     // Beweisstück im Koffer
  bonus: { mode: "faelle", game: {…} } // optional
};
```

## 5. Technische Empfehlungen

- **Keine Hashes für Lösungen.** Für erklärendes Feedback muss das Spiel wissen, welche Antwort richtig ist. Deine bisherigen Quests verzichten auch darauf. Wer in J2 den Quelltext liest, um zu schummeln, braucht dafür länger als fürs Lösen.
- **Keine Sperrzeiten.** In 45 Minuten frustriert eine Wartezeit mehr, als sie nützt. Gestufte Tipps nach Fehlversuchen bleiben (Denkanstoß → Quellenstelle markieren → Teillösung).
- **Fortschritt sichern:** Gelöste Häuser und Koffer-Inhalt kommen in `localStorage` (mit try/catch), damit ein versehentliches Neuladen auf dem Tablet nicht 30 Minuten Arbeit löscht. Dazu ein Knopf „Neu starten“, wichtig für geteilte Schul-iPads.
- **`selfTest()` erweitern:**
  - Jede Spielart muss lösbar sein.
  - Jede falsche Option braucht ein `fb`.
  - Jeder Code muss zum Inhalt passen.
  - **Infokarten werden automatisch gezählt** und nach den Wortgrenzen geprüft, damit deine 35-Wörter-Regel nicht verrutscht.
- **Keine Bilddateien:** Karikaturen, Fahnen und Beweisstücke werden als Pixel-Art im Canvas gezeichnet wie bisher. Das ist rechtlich sauber, und die Seite bleibt offline-fähig.

## 6. Reihenfolge beim Bauen (nach Freigabe)

1. Gerüst: Kopie anlegen, `cw.js` und `cw-modes.js` anbinden, Häuser mit Platzhaltern
2. Inhalte und Spielarten Haus 1–4 + Finale, inklusive `selfTest`
3. Grafik: KS001, Stadt, 4 Häuser außen und innen, UV-Effekt, Koffer
4. Prüfen: Didaktik-Check, Schülertest (der Schnelle, der Abgehängte, der Unmotivierte), Durchspielen im Browser (Desktop und Handy)
5. Recht-Check, danach Upload auf GitHub erst nach deinem OK
