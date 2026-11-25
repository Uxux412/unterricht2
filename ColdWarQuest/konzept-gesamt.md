# Cold War Quest – Gesamtkonzept (Entwurf zur Freigabe)

Stand: 25.11.2026. Das Konzept fasst die Arbeit des Teams zusammen: Story, Grafik, Gameplay, Didaktik, Think Tank und Technik. Die Details stehen in den Teamdateien `konzept-*.md`.

**Entscheidungsstand:**
- **F1–F24 sind entschieden.** Bei F10–F13 und F14–F24 hat der Lehrer die Empfehlungen angenommen („mach das so“, „Ja, go“). Die Marken **[F…]** im Text zeigen, woher eine Festlegung stammt.
- **Noch offen sind F25–F30:** Story-Rahmen, zwei Twists, Sprache der Quellen, Bonus-Akten und Codes. Danach folgt die Freigabe zum Bauen.
- **Offen bleibt das Dossier:** Es wartet auf die Vorlage des Lehrers.

## 0. Auf einen Blick

| | |
|---|---|
| Fach / Stufe | Geschichte mit Gemeinschaftskunde, berufliches Gymnasium BW, **J2**, Bildungsplan 2021, **BPE 3.1** |
| Leitfrage | **Warum wurde der Kalte Krieg nie heiß?** |
| Dauer | 45 min spielen, die Folgestunde dient der Sicherung (Dossier) |
| Spielform | jede/r allein am eigenen Gerät, ohne Server; Grundlage ist die J2-Architektur von BRD Quest auf GitHub |
| Spielfigur | **Agent KS001**, Geheimagent der KS1, ohne Codenamen und ohne Waffe, mit Aktenkoffer und UV-Lampe |
| Rahmen | **Operation KALTFRONT**: Die Zentrale (Chefin **ROTSTIFT**) schickt KS001 los, damit er die Leitfrage für die Klassenarbeit klärt |

| Haus | Mission | Ort / Zeit | Quellen (geprüft) | Rätsel | Beweis |
|---|---|---|---|---|---|
| 1 | EISZEIT | Archiv, Herbst 1947 | Truman 12.3.1947 · Schdanow 22.9.1947 | Perspektiv-Schloss | Doppelrede |
| 2 | BRANDHERDE | Lagezentrum, 1950–1989 | eigene Akten: Korea, Vietnam, Afghanistan | Akten-Matching | Kriegsakte |
| 3 | REICHWEITE | Washington, 22.10.1962 | Kennedy-Fernsehrede 22.10.1962 | Karikatur deuten | Reichweitenkarte |
| 4 | SPIEGELBILD | Moskau, 26./27.10.1962 | Chruschtschow 26. und 27.10.1962 | Karikatur deuten (Spiegelbild) | Seil mit Knoten |
| Finale | HEISSER DRAHT | Agentenbrücke | alle vier Beweise | Satzbaukasten | Dossier |

**Was die Schüler am Ende wissen** (Wunschliste des Lehrers abgedeckt):
- Truman-Doktrin und Zwei-Lager-Theorie (Haus 1)
- Stellvertreterkriege (Haus 2)
- warum der Krieg „kalt“ heißt (Haus 1: Baruch 1947; Finale: Abschreckung)
- Atomwaffen und Wettrüsten (Haus 3 und 4, Finale)

**Lehrerhinweis zum Bildungsplan:**
- **Abgedeckt:** BPE 3.1 „Truman-Doktrin und Zwei-Lager-Theorie“ (Haus 1). Den verbindlichen Punkt „Blockkonfrontation anhand eines Konflikts“ erfüllt die **Kubakrise** (Haus 3 und 4). Haus 2 ist ein Überblick, die Stellvertreterkriege stehen im Plan nur als Hinweis.
- **Nicht abgedeckt**, obwohl in BPE 3.1 verbindlich: Potsdamer Abkommen, Gründung zweier deutscher Staaten, UNO als Institution, Anfänge der europäischen Einigung. Diese Inhalte gehören in andere Stunden.

## 1. Story

**Figuren**
- **ROTSTIFT:** Chefin der Zentrale, meldet sich nur per Funkspruch.
- **Archivar Staub** (Haus 1)
- **Funkerin Marta Seidel** (Haus 2): spricht ruhig, macht keine Witze, weil es dort um Kriegsopfer geht.
- **Kameramann Eddie Novak** (Haus 3)
- **Dolmetscherin Vera Sokolova** (Haus 4)

Reale Personen sprechen nur über ihre echten Quellen. Bond-Anklänge sind gemieden: kein „M“, kein „Q“, kein „Streng geheim“ (das steckt im deutschen Moonraker-Titel), daher „VERSCHLUSSSACHE“.

**Intro** (rund 125 Wörter, im Schreibmaschinen-Stil von QuestIntro):
> **VERSCHLUSSSACHE · ZENTRALE DER KS1 AN AGENT KS001**
> Die Lage ist ernst: Die Klassenarbeit rückt näher. Thema: der Kalte Krieg.
> Über 40 Jahre lang standen sich die USA und die Sowjetunion als Gegner gegenüber, ab 1949 beide mit Atombomben. Trotzdem führten sie nie offen Krieg gegeneinander. Schon 1947 sagte der US-Berater Bernard Baruch: „Wir befinden uns heute mitten in einem kalten Krieg.“
> Dein Auftrag (Operation KALTFRONT): Kläre die Leitfrage: **Warum wurde der Kalte Krieg nie heiß?**
> Vier Häuser, vier Schauplätze, vier Beweise. Jeder Beweis wandert in deinen Aktenkoffer, jeder Merksatz in dein Dossier für die Klassenarbeit. Die Codes knackst du durch Verstehen, nicht durch Suchen. Und die UV-Lampe im Koffer zeigt dir, was zwischen den Zeilen steht.
> Erstes Ziel: das Archiv. Viel Erfolg, KS001. – ROTSTIFT

Danach wählt man eine **Vermutung** (a) Angst (b) UNO (c) eigentlich einig (d) Zufall. Sie wird im Finale wieder aufgedeckt **[F24]**.

**Spannungsbogen als Thermometer:** Jeder Funkspruch nach einem gelösten Haus endet mit einer LAGE-Zeile:
1. „eisig“ (Haus 1)
2. „kalt, aber nur zwischen den Supermächten“ (Haus 2)
3. „kritisch“ (Haus 3)
4. „knapp unter dem Siedepunkt“ (Haus 4)
5. „Die Kaltfront hält.“ (Finale)

**Spiegel-Moment:** Eddie in Washington und Vera in Moskau sagen absichtlich fast denselben Satz: „… direkt in unserer Nachbarschaft. Für uns ist klar, wer hier der Aggressor ist.“ Einmal geht es um Kuba, einmal um die Türkei. Daran wird das Sicherheitsdilemma hörbar. Der Satz darf **nicht** als Wiederholung gestrichen werden.

**Twists**
- Nach Haus 2 korrigiert ROTSTIFT ihre Leitfrage in Rot: „… **zwischen den Supermächten** nie heiß?“ **[F26]**
- Im Finale folgt ein Nachtrag zum geheimen Türkei-Deal **[F27]**.
- In Haus 2 gibt es die Bonus-Akte „Das Geheimnis über dem Yalu“ **[F23]**.

Die vollständigen Texte (Ankunft, Kontaktsätze, Funksprüche, Urkunde) stehen in `konzept-story.md`.

## 2. Ablauf der 45 Minuten

| Minute | Phase |
|---|---|
| 0–3 | Intro, Vermutung, Steuerung |
| 3–13 | Haus 1 |
| 13–23 | Haus 2 |
| 23–33 | Haus 3 |
| 33–41 | Haus 4 |
| 41–45 | Finale und Urkunde |

- Die Häuser werden **der Reihe nach** freigeschaltet. Solange das Haus davor nicht gelöst ist, bleibt die Tür versiegelt **[F19]**.
- Wer schneller ist, öffnet die Bonus-Akte, statt vorzueilen.
- **Die Leitfrage steht die ganze Zeit sichtbar im HUD** *(Didaktik-Check, Befund 13)*.
- Jedes Haus hat **eine** Rätsel-Mechanik (das Gameplay-Konzept hatte für Haus 3 und 4 je zwei, das passt nicht in 9 Minuten).

**Ablauf in jedem Raum** (wie ROOM_STATIONS in BRD Quest, erweitert):
1. Infotafel mit 3 Karten
2. Rätselstation
3. UV-Versteck
4. Tresor, der den Code abfragt
5. Ausgang

**Rückmeldung [F14]:** Wie in deinen J2-Quests wird jede falsche Antwort **erklärt**. Jede richtige Deutung gibt einen Code-Buchstaben frei. Der Tresor öffnet erst mit dem ganzen Code. Es gibt keine Sperrzeiten und keine verschlüsselten Lösungen.

**Tipps** kommen in drei Stufen, je nach Zahl der Fehlversuche:
1. Denkanstoß
2. Quellenstelle leuchtet auf
3. Teillösung

## 3. Stadt und Grafik

- **Grenzstadt ohne Mauer [F17]:** Die West-Hälfte ist warm, mit Ziegelrot und Neonschildern. Die Ost-Hälfte zeigt Plattenbau-Grau, Beton-Beige und rote Transparente. Dazwischen fließt ein Fluss mit **Agentenbrücke**, angelehnt an die Glienicker Brücke, auf der am 10.2.1962 der U-2-Pilot Powers gegen Abel ausgetauscht wurde. Auf der Brücke stehen das Startbüro der KS1 und die Station des Finales.
- **Lage der Häuser:**
  - oben links Haus 1 (Archiv, zweifarbig)
  - oben rechts Haus 2 (Lagezentrum, neutral grau)
  - unten links Haus 3 (Washington)
  - unten rechts Haus 4 (Moskau)

  Washington und Moskau liegen sich am Fluss gegenüber.
- **KS001:** grau-blauer Behördenanzug, weißes Hemd, dunkelrote Krawatte, schwarzer Seitenscheitel, gelber Ausweis-Clip „KS1“, Aktenkoffer. Es gibt einen ersten Sprite-Entwurf. Daran ist noch zu tun:
  - Koffer auf 8–9 px verbreitern
  - Gang mit 2 Bildern
  - Farbschlüssel `e` für die Augen ergänzen (erledigt)
- **UV-Lampe** (Taste U bzw. Knopf): Der Raum wird abgedunkelt, und der Agent leuchtet mit einem violetten Lichtkegel. Die versteckte Notiz wird deutlicher, je näher er kommt.
- **Korrekturen aus der Faktenprüfung:**
  - Haus 4 bekommt **kein rotes Telefon**, denn 1962 gab es noch keinen heißen Draht.
  - Die Quelle in Haus 4 erscheint als **Brief**, nicht als Zeitung, weil der Brief geheim war.

## 4. Die Häuser

Für jedes Haus gilt die Regel „3 Karten“: Karte 1 gibt den Kontext (höchstens 35 Wörter), Karte 2 und 3 enthalten Quellen (höchstens ca. 60 Wörter) **[F15]**. Die Quellen stehen als **eigene deutsche Arbeitsübersetzung** im Spiel, das Original lässt sich aufklappen **[F28]**.

### Haus 1 – Mission EISZEIT (Archiv, Herbst 1947)
- **Karte 1 – Anlass und Abfolge:** März 1947: Truman bittet den Kongress um 400 Mio. Dollar für Griechenland und die Türkei. Damit beginnt die Politik der „Eindämmung“ (containment). Juni 1947: Marshallplan. September 1947: Moskau antwortet bei der Gründung des Kominform mit Schdanows Rede. *(Baruchs „cold war“ von 1947 steht jetzt im Intro. Grund: Didaktik-Check, Befund 1.)*
- **Karte 2 – Truman, 12.3.1947:** zwei „alternative ways of life“. Die eine beruht auf dem Willen der Mehrheit und freien Wahlen, die andere auf „terror and oppression“. Die USA sollen „support free peoples“. *(Wortlaut bei Avalon geprüft.)*
- **Karte 3 – Schdanow, 22.9.1947:** „the imperialist and anti-democratic camp … and the anti-imperialist and democratic camp“. Das eine Lager will „to hatch a new imperialist war“, das andere „to resist the threat of new wars … to strengthen democracy“. *(Wortlaut bei soviethistory.msu.edu geprüft, nach GPO 1948.)*
- **Rätsel:** Perspektiv-Schloss mit 6 Zitat-Rädchen, ohne Herkunftsangabe, jedes soll auf USA oder UdSSR gedreht werden. Danach kommt die Deutungsfrage: Welches Wort beansprucht Schdanow für sein Lager, obwohl Truman genau das für den Westen beschreibt?
- **Code (Vorschlag):** DEMOKRATIE **[F16]**. Den Begriff „Eindämmung“ erklärt die Infotafel. Er stammt von Kennan und steht nicht in der Rede.
- **UV-Notiz** (unter dem Rednerpult): Truman will vom Kongress 400 Mio. Dollar, Schdanow will die Gefolgschaft der kommunistischen Parteien. Wer profitiert von einem klaren Feindbild?
- **Merksatz:** 1947 teilen die Truman-Doktrin (Hilfe für „freie Völker“, Eindämmung) und Schdanows Zwei-Lager-Theorie die Welt in zwei feindliche Lager. Jede Seite sieht sich als Verteidiger, die andere als Bedrohung.

### Haus 2 – Mission BRANDHERDE (Lagezentrum, 1950–1989)
- **Karten 1–3:** je eine selbst formulierte Akte zu Korea, Vietnam und Afghanistan. Die Fakten sind belegt (bpb, LeMO, Office of the Historian), die Texte der bpb und von LeMO werden nicht übernommen, weil ihre Lizenz das nicht erlaubt. Jede Akte nennt auch **die eigene Ursache vor Ort**: Teilung Koreas 1945, Vietnams Unabhängigkeitskrieg gegen Frankreich ab 1946, Aufstand gegen die kommunistische Regierung Afghanistans 1978/79 *(Didaktik-Check, Befund 4)*.
- **Rätsel:** Akten-Matching mit 3 Fällen und 3 Merkmalen: Stellvertreter, welche Supermacht selbst kämpfte, Ausgang. Danach die Deutungsfrage: Wie oft kämpften USA und UdSSR offen direkt gegeneinander?
- **Code (Vorschlag):** 0-1-2. Gefragt ist, wer am Ende seine Truppen abzog: Korea keine Seite, Vietnam die USA, Afghanistan die UdSSR.
- **UV-Notiz:** Gekämpft und gestorben wurde vor Ort, nicht in Washington oder Moskau.
- **Bonus-Akte [F23]:** „Das Geheimnis über dem Yalu“. Sowjetische Piloten kämpften verdeckt über Korea, Washington schwieg bewusst. Belegt bei Carson, *Secret Wars*, 2018. Wer profitiert vom Schweigen?
- **Merksatz:** In den Stellvertreterkriegen (Korea, Vietnam, Afghanistan) standen USA und UdSSR auf gegnerischen Seiten, kämpften aber nie offen gegeneinander. Millionen Menschen starben, die meisten aus den umkämpften Ländern selbst.
- **Grafik:** ohne Gewaltbilder.

### Haus 3 – Mission REICHWEITE (Washington, 22.10.1962)
- **Karte 1 – Zeitleiste des Wettrüstens:** 1945 US-Atombombe · 1949 sowjetische Atombombe · ab 1952 Wasserstoffbomben · 1957 Sputnik, Raketen erreichen jeden Ort · Oktober 1962 Raketen auf Kuba, 90 Meilen vor Florida. *(Daten werden beim Bauen einzeln geprüft.)*
- **Karte 2 – Kennedy, Teil A:** „unmistakable evidence … offensive missile sites … on that imprisoned island“, dazu „Third: … any nuclear missile launched from Cuba … requiring a full retaliatory response upon the Soviet Union“.
- **Karte 3 – Kennedy, Teil B:** „even the fruits of victory would be ashes in our mouth – but neither will we shrink from that risk“. *(Wortlaut bei Wikisource und Teaching American History geprüft.)*
- **Rätsel:** Die selbst gezeichnete Karikatur **„Besuch im Nachbargarten“** hat drei Hotspots:
  - Fernglas: Luftaufklärung
  - Schiffskette: Quarantäne statt Angriff
  - roter Knopf: volle Vergeltung, also Abschreckung

  Dazu die Frage: „Was fehlt im Bild?“ Die Antwort sind die US-Raketen in der Türkei, und das führt zu Haus 4.
- **Code:** offen. Zur Wahl stehen VERGELTUNG, QUARANTÄNE und STÄRKE (wird nach F14, F16 und F21 entschieden).
- **UV-Notiz:** Die Rede lief live im Fernsehen, zwei Wochen vor der Kongresswahl. Chruschtschow warnt selbst vor „petty passions, regardless of whether elections are impending“ *(FRUS geprüft)*.
- **Bonus-Akte [F29]:** das echte U-2-Foto der Stellung San Cristóbal vom 14.10.1962 (NARA, gemeinfrei). Erkennst du die Raketen ohne Beschriftung?
- **Merksatz:** US-Sicht: Die Sowjetunion ist der Aggressor (Raketen auf Kuba). Die USA rüsten zur Verteidigung und drohen: Auf jeden Angriff folgt die volle Vergeltung.

### Haus 4 – Mission SPIEGELBILD (Moskau, 26./27.10.1962)
- **Karte 1 – Kontext:** US-Atomraketen in der Türkei und Italien direkt vor der Sowjetunion, die gescheiterte Invasion in der Schweinebucht 1961. Moskau schickt Raketen nach Kuba. *(Daten zu den Jupiter-Raketen werden beim Bauen geprüft.)*
- **Karte 2 – Chruschtschow, 26.10.1962:** „we and you ought not now to pull on the ends of the rope in which you have tied the knot of war … let us take measures to untie that knot. We are ready for this.“ *(FRUS VI, Dok. 65, zweimal geprüft.)*
- **Karte 3 – Chruschtschow, 27.10.1962:** „You are disturbed over Cuba … But Turkey adjoins us; our sentries patrol back and forth and see each other. Do you consider, then, that you have the right to demand security for your own country … but do not accord the same right to us?“ *(FRUS VI, Dok. 66, geprüft.)*
- **Rätsel:** Die selbst gezeichnete Karikatur **„Die umzingelte Höhle“** ist das Spiegelbild zu Haus 3 und hat drei Hotspots:
  - Raketenzaun mit Wachposten: Türkei
  - Pfote über der Insel: Kuba als Schützling
  - Seil mit Knoten: Kontrollverlust

  Dazu die Frage: „Was verschweigt das Bild?“ Die Antwort sind die Atomraketen auf Kuba, die auf US-Städte zielen.
- **Code (Vorschlag):** SICHERHEIT. Chruschtschow verlangt dasselbe Recht, das die USA für sich beanspruchen, und darin steckt das Sicherheitsdilemma.
- **UV-Notiz:** Der Brief war nicht für die Prawda bestimmt. Spricht Moskau hier anders als in seiner Propaganda?
- **Bonus-Akte [F29]:** „Schwarzer Samstag“, 27.10.1962. Über Kuba wird ein U-2-Flugzeug abgeschossen (laut Office of the Historian), dazu kommt der Fall des U-Boots B-59 *(beim Bauen prüfen)*. Ein Beleg dafür, dass auch Glück eine Rolle spielte.
- **Merksatz:** Sowjetische Sicht: Die USA sind der Aggressor (Raketen in der Türkei). Die UdSSR rüstet zur Verteidigung und weiß: Ein Atomkrieg würde beide vernichten.

### Finale – HEISSER DRAHT (Agentenbrücke)
1. **Vergleichstisch:** Die beiden Karikaturen fügen sich zu einem Bild zusammen. Adler und Bär ziehen am selben Seil, jeder steht vor seinem Raketenzaun.
2. **Satzbaukasten** „Der Kalte Krieg blieb kalt, weil …“: Das Schloss öffnet nur mit Bausteinen, die durch Beweise aus **beiden** Hauptstädten und aus Haus 2 gestützt sind. Die Ablenker greifen die falschen Vermutungen vom Anfang auf, etwa „weil die UNO es verhinderte“ oder „weil sie sich einig waren“.
3. **Finaltext** mit dem Antwortsatz fürs Dossier:
   > „Der Kalte Krieg wurde zwischen den Supermächten nie heiß, weil ein Angriff den eigenen Untergang bedeutet hätte (Abschreckung, Gleichgewicht des Schreckens). Dahin führte das Sicherheitsdilemma: Jede Seite hielt die andere für den Aggressor und rüstete auf, was die Gegenseite noch mehr bedrohte, bis jede die andere vernichten konnte. Ausgetragen wurde der Konflikt stattdessen in Stellvertreterkriegen.“
4. **Nachtrag zum geheimen Deal [F27]:** Öffentlich garantierten die USA, Kuba nicht anzugreifen. Über Robert Kennedy und Botschafter Dobrynin sagten sie im Geheimen zu, die Jupiter-Raketen aus der Türkei abzuziehen *(Office of the Historian geprüft)*.
5. **Die Vermutung vom Anfang** wird aufgedeckt und eingeordnet. Bei (d) Zufall gibt es eine Wendung: Glück spielte tatsächlich eine Rolle.
6. **Siegbild:** der Fernschreiber des heißen Drahts. Das Abkommen stammt vom 20.6.1963, in Betrieb ging er am 30.8.1963, und **es war nie ein rotes Telefon** *(geprüft)*. Dazu kommt die Urkunde.

## 5. Belohnung und Ränge
- **Bündniskarte [F18]:** Statt Sternen füllen sich 20 Flaggen: 12 NATO-Gründerstaaten von 1949 und 8 Staaten des Warschauer Pakts von 1955. So wird die verbindliche Vorgabe „NATO und Warschauer Pakt“ (BPE 3.1) nebenbei sichtbar.
- **Ränge:** Rekrut/in → Aktenträger/in → Feldagent/in → Analyst/in → Sonderermittler/in → Chef-Analyst/in der KS1.
- Der Fortschritt wird im Browser gespeichert, es gibt einen Knopf „Neu starten“ **[F20]**.

## 6. Dossier (Arbeitsblatt), wartet auf die Vorlage des Lehrers
Jedes Haus liefert ein „Ergebnis fürs Arbeitsblatt“, wie in deinen J2-Quests. Vorgesehen sind diese Felder:
1. Warum „kalt“? (Baruch 1947)
2. Ideologie (Haus 1)
3. Ventil Stellvertreterkriege (Haus 2)
4. US-Sicht (Haus 3)
5. sowjetische Sicht (Haus 4)
6. Quellenkritik (UV-Notizen)
7. Antwort auf die Leitfrage, mit Einschränkung: Für die Menschen in den Stellvertreterkriegen war der Krieg heiß.
8. Urteilsaufgabe (AFB III) für die Sicherungsstunde: „Beurteile, ob ‚Kalter Krieg‘ eine treffende Bezeichnung ist.“

## 7. Rechte-Ampel (vor dem Upload läuft der Skill recht-check)

**Grün:**
- eigene Pixelgrafik, auch beide Karikaturen
- eigene Übersetzungen
- US-Regierungstexte (Truman, Kennedy, Dulles, Eisenhower)
- FRUS-Übersetzungen
- Schdanow (in Deutschland seit 2019 gemeinfrei)
- U-2-Foto (NARA)

**Gelb:**
- das russische Original der Chruschtschow-Briefe. Absicherung: kurzer Auszug mit Quellenangabe und eigener Deutungsaufgabe (§ 51 UrhG).
- Fakten aus bpb und LeMO. Übernommen werden nur die Fakten, der Wortlaut ist eigener.

**Rot:**
- Karikaturen von Illingworth (geschützt bis 2049), Herblock, Krokodil. Sie kommen nicht in die Fassung auf GitHub. Zeigen geht nur im Unterricht über den Beamer (§ 60a UrhG).
- Bond-Elemente: 007, Gun-Barrel, „Streng geheim“

## 8. Faktenprüfung – Ergebnis

| Angabe | Status |
|---|---|
| Truman 12.3.1947 (Avalon) · Schdanow 22.9.1947 (GPO 1948) | ✅ Wort für Wort |
| „into bondage to American capital“ (Schdanow) | ❌ nicht belegt, gestrichen |
| Kennedy 22.10.1962 · Chruschtschow 26. und 27.10.1962 (FRUS) | ✅ Wort für Wort |
| Dulles „at places of our choosing“ · Kennedy 1963 „our children's futures“ | ✅ korrigiert |
| Orwell 1945 · Baruch 1947 | ✅ |
| Daten zu Korea, Vietnam, Afghanistan | ✅ bis auf einzelne Tagesdaten (⚠️, die verwenden wir nicht) |
| Sowjetische Piloten über Korea | ✅ Carson 2018 und 2016 |
| U-2-Fotos 14.10. · Quarantäne 22.10. · Türkei-Deal | ✅ Office of the Historian |
| Heißer Draht 1963 als Fernschreiber | ✅ |
| „Raketen wie Würste“ (Chruschtschow) · „Operation Cyclone“ | ❌ gestrichen |
| „Seeblockade“ im Story-Text | korrigiert zu „Quarantäne“ |
