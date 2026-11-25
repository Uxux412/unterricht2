# Cold War Quest – Gameplay-Konzept

Stand: Konzept, noch kein Code. Basis: briefing.md, Mechanik-Vorlage BRD Quest (CONTENT, ROOM_STATIONS, STAR_STEPS/RANKS).

## 1. Spielschleife (45 min)

| Min. | Phase | Inhalt |
|---|---|---|
| 0–3 | Intro-Briefing | Akte KS001, Leitfrage, Steuerung, leerer Aktenkoffer |
| 3–13 | Haus 1 | Truman/Schdanow: Perspektiv-Schloss + Lückentext |
| 13–23 | Haus 2 | Stellvertreterkriege: Akten-Matching |
| 23–33 | Haus 3 Washington | Quelle + Karikatur (US-Sicht) |
| 33–41 | Haus 4 Moskau | Quelle + Karikatur (sowj. Sicht) |
| 41–45 | Finale | Vergleich 3+4, Schlussrätsel, Rang, Abschlussakte |

Häuser 1→4 werden nacheinander freigeschaltet (Tür mit Siegel, erst nach Code des Vorgängers). Grund: Das Finale baut auf allen Beweisen auf, und die Reihenfolge folgt der Chronologie (Blockbildung → Konflikte → Wettrüsten). Schnelle Agenten nutzen die Bonus-Akte, statt vorzueilen.

Schleife pro Haus (ROOM_STATIONS aus BRD Quest um eine Station erweitert):
1. **Infotafel** – kurze Quelle (max. 120 Wörter bzw. 1 Karikatur), Herkunftszeile.
2. **UV-Lampe** – versteckte Notiz „Wer profitiert?“ an einer Stelle im Raum (Wand, Schublade, Rückseite der Quelle). Fundstück wandert in den Koffer; nötig für den Code (s. u.), damit die Klammer nicht dekorativ bleibt.
3. **Rätselstation** – Mechanik, Ergebnis = Codewort/Ziffernfolge.
4. **Tresor/Ausgang** – Codeeingabe, bei Erfolg Beweisstück + Stern(e), Tür zum nächsten Haus entsiegelt.
5. **Bonus-Akte** (optional, Schublade, erst nach gelöstem Code sichtbar).

## 2. Intro-Briefing

Pixel-Szene: Büro mit Schreibtischlampe, Agent KS001 (Anzug, schwarze Frisur, Aktenkoffer). Telegramm-Typewriter-Effekt:

> AN: AGENT KS001 – STRENG GEHEIM
> Die Klassenarbeit naht. Auftrag: Klären, was der Kalte Krieg war.
> Zwei Supermächte, Atomwaffen auf beiden Seiten, über 40 Jahre Feindschaft – und doch kein direkter Krieg zwischen USA und UdSSR.
> **Leitfrage: Warum wurde der Kalte Krieg nie heiß?**
> Sammle in vier Häusern Beweise in deinem Aktenkoffer. Lies jede Quelle genau – Codes knackt nur, wer versteht, nicht wer sucht.

Danach: Hypothesen-Karte (1 Klick, keine Wertung): „Ich vermute, weil …“ (a) beide Angst hatten, (b) die UNO es verhindert hat, (c) sie sich eigentlich einig waren, (d) Zufall. Wird im Finale wieder aufgedeckt („Deine Vermutung am Anfang war …“). Kein Stern dafür.

## 3. Häuser – Rätselablauf

### Haus 1 – Truman-Doktrin & Zwei-Lager-Theorie
**Quelle:** je 3 kurze Auszüge Truman (12.3.1947) und Schdanow (Sept. 1947), Herkunft zunächst verdeckt.

**Schritt A – Perspektiv-Schloss:** Ein Kombinationsschloss mit 6 Rädchen, jedes Rädchen zeigt ein Zitat und steht auf „USA“ oder „UdSSR“. Interaktion: Klick dreht das Rädchen. Das Schloss prüft erst, wenn alle 6 gesetzt sind und der Spieler „Prüfen“ drückt. Rückmeldung nur als Anzahl richtiger Rädchen („4 von 6 stimmen“), nicht welche. Damit wird Systematisches Durchprobieren nicht verhindert, aber teuer: siehe Abschnitt 7 (Sperrzeit).
Deutungsanker: Freiheit vs. Unterdrückung (Truman) gegenüber imperialistisches vs. antiimperialistisches Lager (Schdanow) – gleiche Weltaufteilung, gespiegelte Wertung.

**Schritt B – Lückentext:** 4 Lücken, Auswahl je aus 4 Begriffskarten (Drag & Drop oder Klick):
„Beide Reden teilen die Welt in **zwei** Lager. Truman verspricht, freie Völker gegen **Unterwerfung** zu unterstützen (Politik der **Eindämmung**). Schdanow nennt die USA das **imperialistische** Lager.“
**Code** = Schlüsselwort der Lücke 3 (**EINDÄMMUNG**), das nur trifft, wer Trumans Absicht deutet; Distraktoren (Befreiung, Abschreckung, Neutralität) sind plausibel, aber falsch. Die UV-Notiz („Wer profitiert? Beide – jede Seite rechtfertigt ihren Einflussraum.“) markiert, welche Lücke den Code liefert.

**Bonus-Akte:** „Wessen Rede ist Propaganda?“ – Kurzwahl mit Begründungskärtchen (beide, mit je anderem Ziel). 1 Zusatzstern.

### Haus 2 – Stellvertreterkriege
**Material:** 3 Kurzakten (Korea 1950–53, Vietnam 1955–75, Afghanistan 1979–89), je 3–4 Sätze plus Mini-Karte.

**Ablauf:** Tisch mit 3 Aktenmappen und 9 losen Karteikarten in drei Farben:
- Stellvertreter/Konfliktparteien (Nord-/Südkorea; Nord-/Südvietnam; Regierung/Mudschaheddin)
- Supermacht-Unterstützung (USA+UNO-Truppen/China+UdSSR; USA direkt/UdSSR+China Material; UdSSR direkt/USA Waffen wie Stinger)
- Ausgang (Waffenstillstand am 38. Breitengrad; Abzug USA, Wiedervereinigung unter Nordvietnam; Abzug UdSSR)

Spieler ordnen alle 9 Karten den Mappen zu (Prüfung als Gesamtzustand). Danach pro Akte eine Deutungsfrage: „Welche Supermacht zog sich am Ende zurück? (0 = keine, 1 = USA, 2 = UdSSR)“. **Code** in Reihenfolge Korea–Vietnam–Afghanistan → **0-1-2**. Ziffern stehen nirgends auf den Karten; ableitbar nur, wer den Ausgang inhaltlich verstanden hat.
**UV-Notiz:** „Wer profitiert? Gekämpft und gestorben wurde vor Ort – nicht in Washington oder Moskau.“ (Vorbereitung des Finales.)
**Bonus-Akte:** Kuba 1962 als Gegenbeispiel – warum hier *kein* Stellvertreterkrieg, sondern direkter Beinahe-Konflikt? 1 Zusatzstern.

### Haus 3 – Washington (US-Sicht aufs Wettrüsten)
**Quellenvorschlag (Rechte prüfen):** Auszug Eisenhower „Atoms for Peace“ (UN, 8.12.1953) oder Kennedy, Rede an der American University (10.6.1963); Karikatur: US-Karikatur zur Kubakrise/zum Rüstungswettlauf (z. B. Kennedy und Chruschtschow im Armdrücken auf Atombomben, gemeinfreie Fassung suchen).

**Mechanik A – Karikatur-Hotspot:** Karikatur auf der Infotafel, Lupe als Werkzeug. 5 Hotspots (Figuren, Bomben, Bildtitel, Kleidung/Symbole, Knöpfe). Bei Klick öffnet sich eine Deutungsfrage mit 3 Optionen („Wofür steht der Knopf?“). Jede richtige Deutung liefert einen Buchstaben ins Notizbuch. Falsche Deutung: Hotspot bleibt grau, 20 s Sperre.
**Mechanik B – Zeitstrahl des Wettrüstens:** 6 Ereigniskarten (1945 Hiroshima, 1949 sowj. Atombombe, 1952/53 Wasserstoffbomben, 1957 Sputnik, 1962 Kubakrise, 1963 Teststoppvertrag + Heißer Draht) auf den Zeitstrahl ziehen. Über dem Strahl ein Balken „Rüstungsvorsprung USA ↔ UdSSR“, der sich mit jeder Karte bewegt.
**Code:** Aus den Hotspot-Buchstaben ergibt sich das US-Schlüsselwort (z. B. **STÄRKE** – „Frieden durch Stärke“). Prüfung erst nach richtigem Zeitstrahl.
**UV-Notiz:** „Wer profitiert? Rüstungsindustrie – Eisenhower warnte 1961 selbst vor dem militärisch-industriellen Komplex.“

### Haus 4 – Moskau (sowjetische Sicht)
**Quellenvorschlag:** Auszug Chruschtschow-Brief an Kennedy (26.10.1962, „Knoten des Krieges“) – als Regierungsdokument gut belegbar; Karikatur: sowjetisches Krokodil-Motiv (Rechte kritisch, ggf. Beschreibung/Nachzeichnung) zur US-Rüstung/NATO-Basen.

**Mechanik – Spiegel-Hotspot:** Gleiche Hotspot-Mechanik wie Haus 3, aber zusätzlich ein Schieberegler „Bedrohung durch …“ pro Hotspot (USA/NATO vs. UdSSR). Spieler erkennen: Moskau sieht sich *eingekreist* (Basen in Türkei, Europa).
**Mini-Rätsel Knoten:** Chruschtschows Bild vom Seil, an dem beide ziehen: 3 Aussagen ordnen, was passiert, wenn (a) beide weiter ziehen, (b) einer loslässt, (c) beide nachgeben. Richtige Folge → Schlüsselwort.
**Code:** sowjetisches Schlüsselwort **SICHERHEIT** (Schutz vor Einkreisung).
**UV-Notiz:** „Wer profitiert? Beide Führungen – Angst hält das eigene Lager zusammen.“
**Bonus-Akte (H3+H4 gemeinsam):** Raketenzahlen 1960/1970/1980 als Mini-Diagramm deuten (Parität ab ca. 1970).

## 4. Gestufte Tipps

Gleiches System in jedem Haus, ausgelöst durch **Fehlversuche ODER Zeit** (was zuerst eintritt):

| Stufe | Auslöser | Inhalt |
|---|---|---|
| 1 Denkanstoß | 2 Fehlversuche oder 3 min | Frage zur Quelle („Wer ist für Truman der Gegner?“) |
| 2 Markierung | 4 Fehlversuche oder 5 min | Relevante Quellenstelle leuchtet auf |
| 3 Teillösung | 6 Fehlversuche oder 7 min | Ein Element wird gesetzt (ein Rädchen, eine Karte) |

Tipps kosten nichts außer dem Bonus „Ohne Tipp“ (siehe Ränge). Die Lösung selbst wird nie angezeigt.

## 5. Aktenkoffer-Inventar

Klick auf Koffer-Symbol im HUD (Taste I). 4 Fächer + Fach „UV-Notizen“ + Fach „Bonus“.
- Pro Haus ein **Beweisstück** (Pixel-Icon + 1 Satz Erkenntnis): Doppelrede-Dokument (H1), Kriegsakte mit Stempel „Stellvertreter“ (H2), US-Raketenplan (H3), Moskauer Telegramm (H4).
- Die **Erkenntnissätze** sind die Sicherung für die Folgestunde (Export: „Dossier drucken“, Format offen bis Lehrervorlage).
- Beweisstücke H3 + H4 sind im Finale kombinierbar (Drag aufeinander).

## 6. Belohnung und Ränge

Sterne wie BRD Quest über STAR_STEPS, angepasst auf 4 Häuser:
- Code geknackt: 2 Sterne · ohne Tipp: +1 · Bonus-Akte: +1 → max. 4 pro Haus, Finale +4 → **20 Sterne**.

RANKS (nach gelösten Stationen, ersetzt Dorf-Ränge):
0. Rekrut/in
1. Aktenträger/in
2. Feldagent/in
3. Analyst/in
4. Sonderermittler/in
5. (Finale) Chef-Analyst/in der KS1 🏆

Rangaufstieg mit kurzem Stempel-Effekt („BEFÖRDERT“). Keine Bestenliste (Einzelspiel ohne Server).

## 7. Finale – Gleichgewicht des Schreckens

1. **Vergleichstisch:** Beweise H3 und H4 nebeneinander. Spieler füllen eine 2×3-Matrix per Kartenwahl: *Feindbild* / *Ziel* / *Was sie fürchten*. Erkenntnis: Beide rüsten aus Angst vor dem anderen; beide können den anderen vernichten.
2. **Waage-Rätsel:** Eine Pixel-Waage mit Raketen links (USA) und rechts (UdSSR). Spieler legen Gewichte aus dem Koffer auf. Ein Ungleichgewicht löst eine Warnung „Erstschlag lohnt sich?“ aus, erst im Gleichgewicht erscheint der Satz „Wer zuerst schießt, stirbt als Zweiter.“ (Zweitschlagfähigkeit).
3. **Schlussrätsel:** Aus den Code-Wörtern aller Häuser (EINDÄMMUNG, Ziffern H2, STÄRKE, SICHERHEIT) wird je ein markierter Buchstabe gezogen; mit den UV-Notizen als Hinweis „Was verhinderte den heißen Krieg?“ ergibt sich das Schlusswort **ABSCHRECKUNG** (Eingabe-Feld, Anfangsbuchstabe vorgegeben). Danach Multiple-Choice-Begründung in 1 Satz: „Weil beide Seiten Atomwaffen besaßen und ein Angriff die eigene Vernichtung bedeutet hätte – Gleichgewicht des Schreckens. Gekämpft wurde stattdessen in Stellvertreterkriegen.“
4. **Rückblick:** Anfangshypothese wird gezeigt und eingeordnet; Hinweis auf Grenze der Antwort (Zufall/Krisenmanagement Kuba, Heißer Draht) als Brücke zur Folgestunde.

## 8. Anti-Abkürzungen

- **Lösungen gehasht:** Im Quelltext stehen nur SHA-256-Hashes (Web Crypto, salted pro Haus) der normalisierten Eingabe (Großbuchstaben, Umlaute → AE/OE/UE, ohne Leerzeichen). Kein Klartext-Lösungsarray wie in BRD Quest CONTENT.
- **Zuordnungsrätsel** (Schloss, Matching, Zeitstrahl) werden als Gesamtzustand gehasht geprüft; Rückmeldung nur „x von n richtig“ bzw. gar keine Teilinfo beim Tresor.
- **Sperrzeit wächst:** nach 3 Fehlversuchen 15 s, danach je +15 s (max. 60 s). Bei 6 Rädchen (64 Kombinationen) macht Durchprobieren das Spiel langsamer als Nachdenken.
- **Codes aus Deutung:** Distraktoren sind inhaltlich plausibel (z. B. „Abschreckung“ in H1), sodass nur Quellenverständnis zum Ziel führt.
- **Türen gesiegelt,** keine Sprünge per URL/Konsole: Fortschritt in localStorage nur als Hash-Kette (Haus n erfordert Hash von Code n−1); manuelles Setzen bringt keine Erkenntnissätze in den Koffer.
- Konsole ist für Schüler J2 nicht völlig ausgeschlossen; Ziel ist „teurer als Lösen“, nicht unknackbar.

## Offene Punkte
- Konkrete gemeinfreie Karikaturen für H3/H4 recherchieren (Krokodil-Motive vermutlich nicht frei → Nachzeichnung).
- Format Dossier/Arbeitsblatt nach Lehrervorlage.
- Recht-Check vor Upload.
