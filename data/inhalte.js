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
  untertitel: 'Geschichte · Religion · Gemeinschaftskunde',

  faecher: [
    { id: 'geschichte', name: 'Geschichte', ordner: 'geschichte', icon: 'saeule',
      kurz: 'Quellen, Karikaturen und Strukturlegen von der Frühen Neuzeit bis zur Gegenwart.' },
    { id: 'religion', name: 'Religion', ordner: 'religion', icon: 'kerze',
      kurz: 'Bibel, Ethik, Weltreligionen und Fragen nach Sinn und Verantwortung.' },
    { id: 'gemeinschaftskunde', name: 'Gemeinschaftskunde', ordner: 'gemeinschaftskunde', icon: 'waage',
      kurz: 'Politisches System, Gesellschaft, Recht und internationale Politik.' }
  ],

  bereiche: [
    { id: 'revolution-1848', fach: 'geschichte', name: 'Revolution 1848/49',
      kurz: 'Vormärz, Paulskirche und die europäische Dimension der Revolution.' },
    { id: 'nachkriegszeit', fach: 'geschichte', name: 'Deutschland 1945–1949',
      kurz: 'Besatzungszeit, Potsdamer Konferenz und doppelte Staatsgründung.' }
  ],

  materialien: [
    { id: 'rundgemaelde', name: 'Rundgemälde von Europa im August 1849',
      bereich: 'revolution-1848', pfad: 'rundgemaelde/index.html', status: 'aktiv', datum: '2026-10-26',
      kurz: 'Interaktive Bildanalyse der Karikatur von Ferdinand Schröder mit Stationen D1–D7, Arbeitsblatt M1 und Historikerurteil D8.',
      merkmale: ['Interaktives Bild', 'Arbeitsblatt', 'Historikerurteil'] },
    { id: 'besatzung', name: 'Strukturlegen: Deutschland 1945–1949',
      bereich: 'nachkriegszeit', pfad: 'besatzung.html', status: 'aktiv', datum: '2026-10-16',
      kurz: 'Karten zur Besatzungspolitik ordnen und Zusammenhänge legen, mit Tipps, Notizkarten und Notfall-Kartensatz.',
      merkmale: ['Strukturlegen', 'Karten', 'Tipps'] }
  ]
};
