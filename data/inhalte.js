/* =====================================================================
   Inhaltsverzeichnis von „Mein Unterricht“
   ---------------------------------------------------------------------
   Nur hier werden Fächer, Themenbereiche und Materialien eingetragen.
   Startseite, Fachseiten, Navigation und Brotkrumen entstehen daraus.

   Neues Material:
   1. Ordner anlegen, z. B. geschichte/... oder direkt im Hauptordner
   2. Eintrag unten bei "materialien" ergänzen
      (pfad relativ zum Hauptordner, datum im Format JJJJ-MM-TT)

   status: "aktiv"   -> Kachel ist verlinkt
           "geplant" -> Kachel erscheint grau, ohne Link
   ===================================================================== */

window.INHALTE = {

  titel: 'Mein Unterricht',
  untertitel: 'Geschichte · Religion · Gemeinschaftskunde · Spiele',

  faecher: [
    { id: 'geschichte', name: 'Geschichte', ordner: 'geschichte', icon: 'saeule',
      kurz: 'Quellen, Karikaturen und Strukturlegen von der Frühen Neuzeit bis zur Gegenwart.' },
    { id: 'religion', name: 'Religion', ordner: 'religion', icon: 'kerze',
      kurz: 'Bibel, Ethik, Weltreligionen und Fragen nach Sinn und Verantwortung.' },
    { id: 'gemeinschaftskunde', name: 'Gemeinschaftskunde', ordner: 'gemeinschaftskunde', icon: 'waage',
      kurz: 'Politisches System, Gesellschaft, Recht und internationale Politik.' },
    { id: 'spiele', name: 'Spiele', ordner: 'spiele', icon: 'wuerfel',
      kurz: 'Lernspiele, Quizze und Hilfen fürs Spielen am echten Brett.' }
  ],

  bereiche: [
    { id: 'revolution-1848', fach: 'geschichte', name: 'Revolution 1848/49',
      kurz: 'Vormärz, Paulskirche und die europäische Dimension der Revolution.' },
    { id: 'nachkriegszeit', fach: 'geschichte', name: 'Deutschland 1945–1949',
      kurz: 'Besatzungszeit, Potsdamer Konferenz und doppelte Staatsgründung.' },
    { id: 'revolution-1789', fach: 'geschichte', name: 'Französische Revolution',
      kurz: 'Ancien Régime, Sturm auf die Bastille und die Proteste von heute.' },
    { id: 'quizze', fach: 'spiele', name: 'Quizze „1, 2, 3 oder 4“',
      kurz: 'Fragen für die Ecken rot, grün, blau – auflösen per Knopfdruck.' },
    { id: 'lernspiele', fach: 'spiele', name: 'Lernspiele',
      kurz: 'Pixel-Abenteuer: durchs Dorf laufen und in den Hütten Aufgaben lösen.' },
    { id: 'brettspiele', fach: 'spiele', name: 'Brettspiele',
      kurz: 'Begleiter, die neben dem Spielbrett auf Tablet oder Handy laufen.' }
  ],

  materialien: [
    { id: 'rundgemaelde', name: 'Rundgemälde von Europa im August 1849',
      bereich: 'revolution-1848', pfad: 'rundgemaelde/index.html', status: 'aktiv', datum: '2026-10-26',
      kurz: 'Interaktive Bildanalyse der Karikatur von Ferdinand Schröder mit Stationen D1–D7, Arbeitsblatt M1 und Historikerurteil D8.',
      merkmale: ['Interaktives Bild', 'Arbeitsblatt', 'Historikerurteil'] },
    { id: 'besatzung', name: 'Strukturlegen: Deutschland 1945–1949',
      bereich: 'nachkriegszeit', pfad: 'besatzung.html', status: 'aktiv', datum: '2026-10-16',
      kurz: 'Karten zur Besatzungspolitik ordnen und Zusammenhänge legen, mit Tipps, Notizkarten und Notfall-Kartensatz.',
      merkmale: ['Strukturlegen', 'Karten', 'Tipps'] },
    { id: 'loesungen-arbeitsauftrag', name: 'Lösungen Arbeitsauftrag: Wiederholung Teilung',
      bereich: 'nachkriegszeit', pfad: 'geschichte/loesungen-arbeitsauftrag/index.html', status: 'aktiv', datum: '2026-11-13',
      kurz: 'Lösung zum Tafelbild „Der Weg zur Teilung“ und Erwartungshorizont zur Karikatur „Die deutschen siamesischen Zwillinge“.',
      merkmale: ['Lösung', 'Tafelbild', 'Karikatur'] },
    { id: 'quiz-nachkriegszeit', name: '1, 2, 3 oder 4: Deutschland nach 1945',
      bereich: 'nachkriegszeit', pfad: 'geschichte/quiz-nachkriegszeit/index.html', status: 'aktiv', datum: '2026-10-31',
      kurz: 'Zehn Quizfragen von der Kapitulation über Potsdam bis zur doppelten Staatsgründung – Ecken rot, grün, blau.',
      merkmale: ['Quiz', '1, 2, 3 oder 4', 'Auflösung'] },
    { id: 'revolution-quiz', name: '1, 2, 3 oder 4: Französische Revolution',
      bereich: 'revolution-1789', pfad: 'geschichte/revolution-quiz.html', status: 'aktiv', datum: '2026-10-25',
      kurz: 'Zehn Quizfragen von der Bastille bis zu den Protesten 2026.',
      merkmale: ['Quiz', '1, 2, 3 oder 4', 'Auflösung'] },
    { id: 'learning-snack', name: 'Learning Snack: Vom Absolutismus zur Revolution',
      bereich: 'revolution-1789', pfad: 'https://uxux412.github.io/index.html', status: 'aktiv', datum: '2026-10-31',
      kurz: 'Lernhäppchen im Chat-Stil für die Eingangsklasse, BPE 1.1.',
      merkmale: ['Chat', 'Selbstlernen', 'QR-Code'] },
    { id: 'bach-quiz', name: '1, 2, 3 oder 4: Johann Sebastian Bach',
      bereich: 'quizze', pfad: 'spiele/bach-quiz.html', status: 'aktiv', datum: '2026-10-31',
      kurz: 'Zehn Quizfragen zu Johann Sebastian Bach.',
      merkmale: ['Quiz', '1, 2, 3 oder 4', 'Auflösung'] },
    { id: 'euroquest', name: 'Euro Quest',
      bereich: 'lernspiele', pfad: 'euroquest/index.html', status: 'aktiv', datum: '2026-11-20',
      kurz: 'Vier Hütten, zwölf Sterne: Montanunion, EU-Organe, Gesetzgebung und Binnenmarkt.',
      merkmale: ['Pixel-Spiel', 'Handy', 'EU'] },
    { id: 'brdquest', name: 'BRD Quest',
      bereich: 'lernspiele', pfad: 'brdquest/index.html', status: 'aktiv', datum: '2026-11-20',
      kurz: 'Fünf Häuser, zwölf Sterne: Bundestag, Bundesrat, Gewaltenteilung und -verschränkung, Gesetzgebung, Wahlrecht.',
      merkmale: ['Pixel-Spiel', 'Handy', 'Politisches System'] },
    { id: 'brdquest-sprache', name: 'BRD Quest (sprachsensibel)',
      bereich: 'lernspiele', pfad: 'brdquest-sprache/index.html', status: 'aktiv', datum: '2026-11-24',
      kurz: 'Wie BRD Quest für die Berufsschule, aber in einfacher Sprache: kurze Sätze, Fachwörter mit Erklärung, Wortspeicher in jedem Haus.',
      merkmale: ['Pixel-Spiel', 'Handy', 'Sprachsensibel'] },
    { id: 'euroquest-j2', name: 'Euro Quest J2 (Oberstufe)',
      bereich: 'lernspiele', pfad: 'euroquest-j2/index.html', status: 'aktiv', datum: '2026-11-24',
      kurz: 'Oberstufen-Fassung: Wer-bin-ich-Rätsel der EU-Organe, Zollschalter auf Zeit, Flipper-Vorhersage, am Ende weht die Europafahne.',
      merkmale: ['Pixel-Spiel', 'Handy', 'EU', 'J2'] },
    { id: 'brdquest-j2', name: 'BRD Quest J2 (Oberstufe)',
      bereich: 'lernspiele', pfad: 'brdquest-j2/index.html', status: 'aktiv', datum: '2026-11-24',
      kurz: 'Oberstufen-Fassung: Rollenspiel Opposition, Bundesrats-Abstimmung, Gesetzesweg, Wahlrechts-Fälle, 16 Länderwappen sammeln.',
      merkmale: ['Pixel-Spiel', 'Handy', 'Politisches System', 'J2'] },
    { id: 'risiko', name: 'Risiko-Begleiter',
      bereich: 'brettspiele', pfad: 'risiko/index.html', status: 'aktiv', datum: '2026-10-26',
      kurz: 'Würfeln mit automatischer Würfelzahl, Rechner für neue Truppen und Kartentausch, alle Regeln zum Nachlesen.',
      merkmale: ['Würfeln', 'Rechner', 'Regeln'] }
  ]
};
