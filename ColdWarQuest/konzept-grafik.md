# Cold War Quest – Grafikkonzept

Stilbasis BRD Quest: Canvas 1280×760, 40-px-Kacheln, ASCII-`MAP` (32×19), Sprites als String-Arrays über `bitmapP(rows, x, y, s, pal, flip)`, außen Maßstab 1, innen Maßstab 2. Die BRD-Quest-Datei bleibt unverändert, wir übernehmen nur die Mechanik.

## 1. Agent KS001 (ersetzt den Wächter)

**Silhouette:** Der Agent steht frontal und aufrecht, wie ein Beamter. Er hat keine Waffe, keine Seitenpose und keinen Smoking. Der Aktenkoffer hängt rechts in der Hand und ist mit dem `flip` der Laufrichtung gespiegelt. Er dient als sichtbares Inventar.
**Anzug:** Grauer Straßenanzug (Typ Behörde) mit Knopfleiste, weißem Hemd und schmaler Krawatte. Am Revers sitzt ein gelber Ausweis-Clip „KS1“.
**Haare:** Schwarzer, kurzer Seitenscheitel mit einer kühlen Lichtkante.

**Abgrenzung zu Bond:**
- Grau-blauer Anzug statt schwarzem Smoking mit Fliege
- Krawatte in Dunkelrot oder Schulfarbe
- Aktenkoffer statt Pistole, Haltung neutral
- Kein 007, kein Gun-Barrel, kein Martini
- Ein Ausweis-Clip zeigt, dass er „Ermittler der KS1“ ist (Archivar, nicht Killer)

**Palette `KS001_PAL`:**

| Key | Farbe | Rolle |
|---|---|---|
| o | #101014 | Outline |
| e | #101014 | Augen (fehlte im ersten Entwurf: Das Sprite nutzt `e`, ohne Eintrag wären die Augen durchsichtig) |
| N / n | #16161d / #3a4150 | Haar / Haarlicht |
| F / f | #e2ab80 / #b87c58 | Haut / Schatten |
| m | #9c5a48 | Mund |
| S / s | #4a5566 / #2c3542 | Anzug / Falten |
| u | #c9ccd2 | Knöpfe |
| W | #ecebe4 | Hemd |
| R | #8a2424 | Krawatte |
| Y | #f2d64b | Ausweis-Clip |
| C / c | #7a4e2a / #4e3018 | Koffer / Unterkante |
| G | #c9a640 | Kofferschloss, Griff |
| K / k | #121214 / #3c3c44 | Schuhe / Glanz |

**Entwurf `KS001_SPRITE` (38×48, MODEL1-Format, alle Zeilen geprüft):**

```js
const KS001_SPRITE = [
  "...............oooooooo...............",
  ".............ooNNNNNNNNoo.............",
  "............oNNNnnNNNNNNNo............",
  "...........oNNnnNNNNNNNNNNo...........",
  "...........oNNNNNNNNNNNNNNo...........",
  "...........oNNNNNNNNNNNNNNo...........",
  "...........oNNFFFFFFFFFFNNo...........",
  "...........oNFFFFFFFFFFFFNo...........",
  "...........ofFFeeFFFFeeFFfo...........",
  "...........ofFFFFFFFFFFFFfo...........",
  "...........ofFFFFFffFFFFFfo...........",
  "............ofFFFFFFFFFFfo............",
  "............ofFFFmmmmFFFfo............",
  ".............offFFFFFFffo.............",
  "..............ooffffffoo..............",
  "...............oofFFfoo...............",
  "...........ooooSWWWWWWSoooo...........",
  ".........ooSSSSsWWRRWWsSSSSoo.........",
  "........oSSSSSSsWWRRWWsSSSSSSo........",
  "........oSSSSSSSsWRRWsSSSYSSSSo.......",
  ".......oSSSSSSSSsWRRWsSSSSSSSSo.......",
  ".......oSSsSSSSSSsRRsSSSSSSsSSo.......",
  ".......oSSsSSSSSSSsRsSSSSSSsSSo.......",
  ".......oSSsSSSSSSSSsSSSSSSSsSSo.......",
  ".......oSSsSSSSSSSSuSSSSSSSsSSo.......",
  ".......oSSsSSSSSSSSsSSSSSSSsSSo.......",
  ".......oSSsSSSSSSSSuSSSSSSSsSSo.......",
  ".......oSSsooooooooooooooooosSSo......",
  ".......oFFoSSSSSSSSsSSSSSSSoFFoo......",
  ".......offoSSSSSSSSsSSSSSSSoffGGo.....",
  "........oooSSSSSSSSsSSSSSSSoooCGCo....",
  "..........oSSSSSSSSoSSSSSSSo.oCCCC....",
  "..........oSSSSSSSo.oSSSSSSo.oCCCC....",
  "..........oSSSSSSSo.oSSSSSSo.oCGCC....",
  "..........oSSSSSSso.osSSSSSo.oCCCC....",
  "..........oSSSSSSso.osSSSSSo.occcc....",
  "..........oSSSSSSso.osSSSSSo..oooo....",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........osssssssso.ossssso..........",
  "..........oKKKKKKKo.oKKKKKKo..........",
  ".........oKKKKKKKKo.oKKKKKKKo.........",
  ".........oKkKKKKKKo.oKKKKKKkKo........",
  ".........ooooooooo...oooooooooo.......",
  "......................................"
];
```

Das ist ein erster Entwurf. Der Koffer ist noch schmal (5 px). In der Feinarbeit soll er auf 8–9 px verbreitert werden und die Spalten 29–37 nutzen. Außerdem fehlen noch ein 2-Frame-Gang (Beine versetzt) und ein „Koffer-Blitz“, wenn ein Beweis eingesammelt wird.

## 2. Dorf: „Grenzstadt“ statt Bundesdorf

Die Stadt wird geteilt, aber **ohne Mauer** (Vorgabe). Statt einer Mauer verläuft ein **Fluss mit Kontrollbrücke** von Nord nach Süd (Spalten 15–16, wie die Wasserachse in BRD Quest). Damit bleibt die alte MAP-Struktur fast erhalten.
- **West-Hälfte (links):** warmes Ziegelrot #a5523a, Rasen #5f9a48, Reklameschilder (Neon-Rosa/Türkis blinkend), Straßenlaternen gelb, Autos in Pastell.
- **Ost-Hälfte (rechts):** Plattenbau-Grau #8a8c88, Beton-Beige #c2b89a, gedämpftes Grün #6f7d58, rote Transparente/Sterne, Laternen kaltweiß.
- **Mitte:** Die Brücke ersetzt den Platz `P/F`. Auf ihr steht ein neutrales Häuschen „Startbüro KS1“, wo der Agent das Briefing erhält. Statt des Brunnens zeigt dort eine Weltkarte-Tafel den Fortschritt: 4 Lämpchen, analog zu den `drawStarAt1280`-Sternen.
- **Neue Kacheln:** `~` Fluss (aus `drawWater1280`), `=` Kopfsteinpflaster West / `-` Betonplatten Ost, `B` Brückenbohlen, `L` Laterne (Glow-Animation), `R` Litfaßsäule West / Wandzeitung Ost (Deko, solid), `A` Kasten-Auto (solid).

| Lage | Haus | Grund |
|---|---|---|
| oben links | Haus 1 Archiv/Botschaft | Ursprung: Doktrin |
| unten links | Haus 3 Washington | West |
| oben rechts | Haus 2 Lagezentrum | Konflikte weltweit, neutrales Gebäude am Ostufer |
| unten rechts | Haus 4 Moskau | Ost |

Haus 3 und Haus 4 liegen sich am Fluss gegenüber, so ist der Perspektivvergleich auch räumlich sichtbar. Haus 2 wird sinnvollerweise als „Weltlagezentrum“ grau-neutral gestaltet, Haus 1 zweifarbig (halb Sternenbanner-Blau, halb Rot), denn es zeigt beide Reden.

## 3. Häuser

Raster für alle Innenräume (wie `drawInteriorStations1280`): **Infotafel** links an der Wand, **Rätselstation** mittig hinten, **UV-Versteck** an einem unauffälligen Objekt, **Ausgang** unten mittig als Türmatte mit Pfeil. Der Agent wird im Maßstab 2 gezeichnet.

**Haus 1 – Archiv/Botschaft (Truman/Schdanow)**
- *Außen:* Klassizistische Fassade mit zwei Fahnenmasten (USA links, UdSSR rechts, animiert wie `drawGermanyFlag1280`) und Messingschild „Archiv“.
- *Innen:* Holzvertäfelung und Regale mit Aktenordnern. Ein Rednerpult trägt zwei Mikrofone.
- *Stationen:* Infotafel = gerahmte Zeitungsseite 1947. Rätsel = **Perspektiv-Schloss**: ein Tresor mit zwei Drehrädern (Sternenbanner/Hammer-Sichel-Symbolfarben), daneben eine Schreibmaschine für den Lückentext. UV-Versteck = Unterseite des Rednerpults.

**Haus 2 – Lagezentrum/Dschungel (Stellvertreterkriege)**
- *Außen:* Flachbau mit Antennenmast (blinkendes Rotlicht) und Tarnnetz über dem Eingang. Davor stehen Palmen- und Bambus-Kacheln.
- *Innen:* Die hintere Hälfte ist ein dunkler Kartenraum mit großer Weltkarte und drei Leuchtpins (Korea, Vietnam, Afghanistan). Die vordere Hälfte zeigt Dschungelboden, Kisten und Hängepflanzen.
- *Stationen:* Infotafel = Fernschreiber-Streifen. Rätsel = **Akten-Matching**: drei Aktenkisten, deren Mappen auf ein Korkbrett mit drei Spalten (Stellvertreter / Supermacht / Ausgang) gezogen werden. UV-Versteck = Rückseite einer Munitionskiste. Achtung: neutral darstellen, ohne Gewaltbilder.

**Haus 3 – Washington (Wettrüsten US-Sicht)**
- *Außen:* Weiße Fassade mit Säulen und Kuppel-Anklang, blauem Dach (kein echtes Weißes Haus, generisch). Ein Rasen mit Sternenwimpel liegt davor.
- *Innen:* Oval-Office-ähnliches Büro mit blauem Teppich, Fernseher (Nachrichten-Flimmern) und einer Raketenmodell-Vitrine.
- *Stationen:* Infotafel = Quelle als Memo auf dem Schreibtisch. Rätsel = Karikatur an der Wand. Ein Klick zoomt sie heran, Bildelemente werden gedeutet und daraus ergibt sich der Code. UV-Versteck = Globus.

**Haus 4 – Moskau (Wettrüsten sowjetische Sicht)**
- *Außen:* Rotbraune Fassade mit Zwiebel-Andeutung auf dem Dach und rotem Stern. Davor liegen Schnee-Kacheln.
- *Innen:* Holzschreibtisch, Samowar, rote Wandfahne, Wählscheibentelefon (rot = heißer Draht, nur als Deko).
- *Stationen:* Infotafel = Prawda-artige Zeitung (Fantasietitel). Rätsel = Karikatur auf der Staffelei. Zusätzlich gibt es am Ende den **Vergleichstisch**: zwei Karteikarten (Washington/Moskau) werden nebeneinander gelegt. UV-Versteck = Samowar-Sockel.

## 4. UV-Lampen-Effekt

1. **Item:** Die UV-Lampe liegt im Koffer und wird mit der Taste `U` an- und ausgeschaltet. Die Inventar-Anzeige zeigt dazu ein violettes Icon.
2. **Rendering pro Frame (Innenraum):**
   ```js
   // Raum normal zeichnen (interiorCache), dann:
   ctx.save();
   ctx.fillStyle = "rgba(10,0,30,0.72)";          // Raum abdunkeln
   ctx.fillRect(0,0,1280,760);
   ctx.globalCompositeOperation = "destination-out"; // Kegel ausstanzen
   const g = ctx.createRadialGradient(px,py,10, px,py,140);
   g.addColorStop(0,"rgba(0,0,0,1)"); g.addColorStop(1,"rgba(0,0,0,0)");
   ctx.fillStyle = g; ctx.beginPath(); ctx.arc(px,py,140,0,7); ctx.fill();
   ctx.globalCompositeOperation = "source-over";
   ctx.fillStyle = "rgba(140,60,255,0.18)";         // violetter Schimmer
   ctx.beginPath(); ctx.arc(px,py,140,0,7); ctx.fill();
   ctx.restore();
   ```
   Für ein knackiges Pixel-Look den Kegel in 4 Stufen quantisieren (konzentrische Kreise statt weichem Verlauf).
3. **Geheimtext:** Jede Raum-Definition erhält `uvNote: {x, y, text}`. Der Text wird nur gezeichnet, wenn die Lampe an ist **und** der Abstand zum Agenten unter 140 px liegt. Farbe ist leuchtendes Cyan-Weiß #b8fff4 mit `shadowBlur: 8` und einer Handschrift-Pixel-Font. Die Alpha-Deckkraft steigt mit der Nähe (`1 - d/140`), dadurch entsteht ein Such-Effekt.
4. **Fund:** Bei Abstand unter 50 px plus Taste `E` wandert die Notiz („Wer profitiert?“ + raumspezifische Quellenkritik-Frage) in den Koffer. Das erzeugt Partikel wie bei `drawParticles1280`, nur violett. Ein Zähler „Notizen 0/4“ läuft mit und wird für den Abschlussvergleich gebraucht.
5. **Außen:** Dort ist die Lampe deaktiviert, damit das Dorf nicht dunkel wird.
