// Cold War Quest – Inhalte (Story, Quellen, Rätsel, Merksätze).
// Alle Zitate sind an der Fundstelle geprüft (siehe ColdWarQuest/konzept-gesamt.md, Abschnitt 8).
// Deutsche Fassungen = eigene Arbeitsübersetzungen; das Original lässt sich auf jeder Karte aufklappen.
window.CW = {
  key: "coldwarquest-v1",
  leitfrage: "Warum wurde der Kalte Krieg nie heiß?",
  leitfrageKorrigiert: 'Warum wurde der Kalte Krieg <span class="rot">zwischen den Supermächten</span> nie heiß?',

  introPages: [
    ["VERSCHLUSSSACHE", "ZENTRALE DER KS1", "AN AGENT KS001", "", "Die Lage ist ernst:", "Die Klassenarbeit rückt näher.", "Thema: der Kalte Krieg."],
    ["Über 40 Jahre standen sich die", "USA und die Sowjetunion als", "Gegner gegenüber, ab 1949 beide", "mit Atombomben. Trotzdem", "führten sie nie offen Krieg", "gegeneinander.", "", "1947 sagte Bernard Baruch:", "„Wir befinden uns heute mitten", "in einem kalten Krieg.“"],
    ["DEIN AUFTRAG:", "OPERATION KALTFRONT", "", "Kläre die Leitfrage:", "WARUM WURDE DER KALTE KRIEG", "NIE HEISS?", "", "Vier Häuser, vier Beweise.", "Die Codes knackst du durch", "Verstehen, nicht durch Suchen."],
    ["SO GEHT'S:", "", "Häuser der Reihe nach besuchen.", "📖 Infotafel lesen,", "🧩 am Tisch das Rätsel lösen,", "🔦 [U] UV-Lampe: Geheimes finden,", "🔐 Tresor-Code knacken.", "💼 [I] Koffer: deine Beweise.", "", "Erstes Ziel: das Archiv.", "– ROTSTIFT"]
  ],

  vermutung: {
    frage: "Bevor du losgehst: Was vermutest du? Warum wurde der Kalte Krieg nie heiß?",
    optionen: [
      { id: "a", t: "Beide Seiten hatten Angst vor einem Atomkrieg.",
        aufloesung: "Gut vermutet: Die Angst vor der gegenseitigen Vernichtung (Abschreckung) ist der Kern. Dazu kamen Verhandlungen – und Glück." },
      { id: "b", t: "Die UNO hat es verhindert.",
        aufloesung: "Teilweise: Die UNO war Bühne und sollte den Abzug der Raketen überwachen. Entscheidend waren aber Abschreckung und Verhandlungen der beiden Regierungen." },
      { id: "c", t: "Sie waren sich eigentlich einig.",
        aufloesung: "Nein: Haus 1 zeigt zwei feindliche Lager. Einig waren sie sich nur darin, keinen Atomkrieg zu wollen." },
      { id: "d", t: "Es war Zufall.",
        aufloesung: "Ein Stück stimmt das: Am „Schwarzen Samstag“ 1962 hing viel am Glück. Entscheidend waren aber Abschreckung und Verhandlungen." }
    ]
  },

  ranks: ["Rekrut/in", "Aktenträger/in", "Feldagent/in", "Analyst/in", "Sonderermittler/in", "Chef-Analyst/in der KS1 🏆"],

  // Bündniskarte, Stand 1962: 15 NATO-Staaten und 8 Staaten des Warschauer Pakts
  flagStages: [["US", "SU", "GB", "PL", "FR"], ["CA", "CS", "IT", "HU", "BE"], ["RO", "NL", "BG", "LU", "AL"], ["TR", "GR", "DK", "NO"], ["IS", "PT", "DE", "DD"]],
  flagMerksatz: "<b>Zwei Militärbündnisse</b> teilen Europa: die <b>NATO</b> (1949 von 12 Staaten gegründet, 1952 kommen Griechenland und die Türkei dazu, 1955 die Bundesrepublik) und der <b>Warschauer Pakt</b> (1955, 8 Staaten mit der DDR). Damit ist die Teilung Deutschlands auch militärisch besiegelt.",

  urkunde: "Hiermit wird bestätigt: Agent KS001 hat vier Schauplätze des Kalten Krieges untersucht, vier Beweise gesichert und die Leitfrage beantwortet.",
  urkundePS: "PS: Den Rotstift lege ich jetzt weg. Vorerst.",

  content: {
    // ------------------------------------------------------------------ Haus 1
    truman: {
      title: "Haus 1: Archiv – Mission EISZEIT",
      ort: "ARCHIV, HERBST 1947",
      ankunft: "Die USA und die Sowjetunion, im Krieg noch Verbündete, sind Gegner geworden. Hier lagern zwei Reden aus diesem Jahr, eine aus jedem Lager.",
      kontakt: { name: "Archivar Staub", text: "„Truman sprach im März vor dem Kongress, Schdanow im September für Moskau. Dummerweise sind mir die Etiketten abgefallen. Pass auf, wer bei wem der Gute ist.“" },
      infoSource: "📖 Infotafel · Quellen in eigener Arbeitsübersetzung, Original zum Aufklappen",
      infoLead: "Lies die drei Karten. Danach knackst du am Tisch das Schloss.",
      infoCards: [
        { heading: "📅 1947: Was passiert?", max: 48,
          text: "<strong>März:</strong> Truman bittet den Kongress um 400 Mio. Dollar, vor allem Wirtschaftshilfe, für Griechenland und die Türkei. Damit beginnt die Politik der <strong>Eindämmung</strong> (containment). <strong>Juni:</strong> Marshallplan (Wirtschaftshilfe für Europa). <strong>September:</strong> Moskau antwortet mit Schdanows Rede bei der Gründung des Kominform (Bund kommunistischer Parteien)." },
        { heading: "📜 Truman vor dem US-Kongress, 12.3.1947", max: 80,
          text: "„Fast jede Nation muss zwischen alternativen Lebensformen wählen. […] Die eine gründet sich auf den Willen der Mehrheit und zeichnet sich aus durch freie Institutionen, repräsentative Regierung, freie Wahlen […]. Die zweite gründet sich auf den Willen einer Minderheit, der der Mehrheit gewaltsam aufgezwungen wird. Sie stützt sich auf Terror und Unterdrückung, eine kontrollierte Presse und Rundfunk, manipulierte Wahlen und die Unterdrückung persönlicher Freiheiten. […] es muss die Politik der Vereinigten Staaten sein, freie Völker zu unterstützen, die sich der versuchten Unterwerfung […] widersetzen.“",
          quelle: "Rede vor dem Kongress, 12.3.1947, Auszug, eigene Arbeitsübersetzung. Original: Avalon Project (Yale Law School). Werk der US-Regierung, in den USA gemeinfrei; kurzer Auszug als Zitat.",
          orig: "“At the present moment in world history nearly every nation must choose between alternative ways of life. The choice is too often not a free one. One way of life is based upon the will of the majority, and is distinguished by free institutions, representative government, free elections, guarantees of individual liberty, freedom of speech and religion, and freedom from political oppression. The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio; fixed elections, and the suppression of personal freedoms. I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures.”" },
        { heading: "📜 Schdanow bei der Gründung des Kominform, 22.9.1947", max: 80,
          text: "„[…] zwei Hauptlager: das imperialistische und antidemokratische Lager einerseits und das antiimperialistische und demokratische Lager andererseits. Die wichtigste treibende Kraft des imperialistischen Lagers sind die USA. […] Das Hauptziel des imperialistischen Lagers ist es, […] einen neuen imperialistischen Krieg anzuzetteln […]. Das Ziel dieses Lagers [des antiimperialistischen] ist es, der Gefahr neuer Kriege […] entgegenzutreten, die Demokratie zu stärken und die Überreste des Faschismus auszurotten.“",
          quelle: "Bericht auf der Gründungskonferenz des Kominform, 22.9.1947, Auszug, eigene Arbeitsübersetzung nach der englischen Fassung der US-Regierung (1948). Schdanow starb 1948; der Text ist gemeinfrei.",
          orig: "“… two major camps; the imperialist and anti-democratic camp, on the one hand, and the anti-imperialist and democratic camp, on the other. The principal driving force of the imperialist camp is the USA. […] The cardinal purpose of the imperialist camp is to strengthen imperialism, to hatch a new imperialist war, to combat Socialism and democracy, and to support reactionary and anti-democratic pro-fascist regimes and movements everywhere. […] The purpose of this camp is to resist the threat of new wars and imperialist expansion, to strengthen democracy and to extirpate the vestiges of fascism.”" }
      ],
      intro: "Am Tisch wartet ein Schloss mit sechs Rädchen. Jedes Rädchen zeigt einen Satz aus den beiden Reden. Stell es auf die richtige Seite.",
      mode: "schloss",
      game: {
        left: "USA · Truman", right: "UdSSR · Schdanow",
        items: [
          { t: "„Fast jede Nation muss zwischen alternativen Lebensformen wählen.“", a: "L",
            ok: "Truman: zwei „Lebensformen“, Freiheit gegen Unterdrückung.", bad: "Nein – das ist Truman. Er teilt die Welt in zwei „Lebensformen“." },
          { t: "„Die wichtigste treibende Kraft des imperialistischen Lagers sind die USA.“", a: "R",
            ok: "Schdanow: Für Moskau führen die USA das „imperialistische“ Lager an.", bad: "Hier werden die USA angeklagt – das kann nur Schdanow sein." },
          { t: "„… der Gefahr neuer Kriege entgegenzutreten, die Demokratie zu stärken …“", a: "R",
            ok: "Gut erkannt: Schdanow nennt sein eigenes Lager „demokratisch“ und friedliebend.", bad: "Klingt westlich – ist aber Schdanow! So beschreibt er das Ziel seines eigenen Lagers." },
          { t: "„Sie stützt sich auf Terror und Unterdrückung, eine kontrollierte Presse und Rundfunk, manipulierte Wahlen …“", a: "L",
            ok: "Truman beschreibt so die „zweite Lebensform“, gemeint ist der kommunistische Machtbereich.", bad: "Klingt wie eine Anklage gegen den Westen – ist aber Truman. So beschreibt er die „zweite Lebensform“." },
          { t: "„… freie Völker zu unterstützen, die sich der versuchten Unterwerfung widersetzen.“", a: "L",
            ok: "Kernsatz der Truman-Doktrin: Die USA unterstützen „freie Völker“.", bad: "Das ist der Kernsatz der Truman-Doktrin." },
          { t: "„… die Überreste des Faschismus auszurotten.“", a: "R",
            ok: "Schdanow: Auch Moskau beansprucht den Kampf gegen den Faschismus für sich.", bad: "Klingt nach dem Westen – ist aber Schdanow. Auch Moskau sieht sich als Kämpfer gegen den Faschismus." }
        ]
      },
      tresor: {
        frage: "Welches Wort beansprucht Schdanow für sein eigenes Lager – obwohl Truman genau das für den Westen beschreibt (Wille der Mehrheit, freie Wahlen)?",
        accept: ["DEMOKRATIE", "DEMOKRATISCH", "DEMOKRATISCHE"], code: "DEMOKRATIE",
        tipps: ["Lies Karte 3: Wie nennt Schdanow das „antiimperialistische“ Lager noch?",
                "Truman beschreibt den Willen der Mehrheit und freie Wahlen. Wie heißt diese Staatsform?"],
        erklaerung: "Beide Seiten beanspruchen die Demokratie für sich: Jede sieht sich als ihre Verteidigerin – und die andere als Bedrohung."
      },
      uv: { text: "Wer profitiert? Truman braucht vom Kongress 400 Mio. Dollar. Schdanow spricht vor den kommunistischen Parteien, die Moskau im Kominform zusammenführt. Was nützt beiden Rednern ein klares Feindbild?" },
      beweis: { icon: "📜", name: "Doppelrede", text: "Zwei Redemanuskripte von 1947, mit einer Büroklammer zusammengeheftet." },
      summary: "<b>Truman-Doktrin</b> (März 1947): Die USA unterstützen „freie Völker“ gegen Unterwerfung – Politik der <b>Eindämmung</b>. · <b>Zwei-Lager-Theorie</b> (Schdanow, Sept. 1947): ein „imperialistisches“ Lager unter Führung der USA gegen ein „demokratisches“ Lager. · Beide beanspruchen <b>Demokratie</b> für sich; jede Seite sieht sich als Verteidiger, die andere als Bedrohung.",
      funkspruch: "ZENTRALE AN KS001: Beweis gesichert, die Fronten stehen. LAGE: eisig. Nächstes Ziel: das Lagezentrum. Dort bleibt es nicht bei Worten.",
      bonus: {
        titel: "Bonus-Akte: Wessen Rede ist Propaganda?",
        text: "Beide Reden wurden für ein Publikum gehalten: Truman sprach vor dem Kongress, Schdanow vor den kommunistischen Parteien.",
        frage: "Wessen Rede ist Propaganda?",
        options: [
          { t: "Nur Schdanows – er macht die USA zu Kriegstreibern, Truman bleibt sachlich.", ok: false, fb: "Auch Truman zeichnet ein Schwarz-Weiß-Bild – und er will Geld vom Kongress." },
          { t: "Nur Trumans – er übertreibt die Gefahr, um vom Kongress Geld zu bekommen.", ok: false, fb: "Auch Schdanow malt ein Feindbild: die USA als Kriegstreiber." },
          { t: "Beide – jede Rede wirbt für die eigene Seite und braucht dafür einen Feind.", ok: true, fb: "Richtig: Beide Reden sind politische Werbung. Sie wollen überzeugen, nicht neutral informieren." }
        ]
      }
    },

    // ------------------------------------------------------------------ Haus 2
    stellvertreter: {
      title: "Haus 2: Lagezentrum – Mission BRANDHERDE",
      ort: "LAGEZENTRUM, 1946–1989",
      ankunft: "Auf der Weltkarte leuchten drei Punkte: Korea, Vietnam, Afghanistan. Der Fernschreiber rattert Meldungen aus vier Jahrzehnten. Hinter jeder Meldung stehen Menschen.",
      kontakt: { name: "Funkerin Marta Seidel", text: "„Kalt war dort nichts. Lies genau: Wer kämpfte gegen wen, und welche Supermacht stand hinter wem?“" },
      infoSource: "📖 Infotafel · eigene Darstellung nach bpb, LeMO und dem Office of the Historian (US-Außenministerium)",
      infoLead: "<b>Stellvertreterkrieg:</b> Die Supermächte kämpfen nicht offen gegeneinander, sondern unterstützen gegnerische Seiten. Lies die drei Akten.",
      infoCards: [
        { heading: "🗂️ Akte Korea, 1950–1953", max: 48,
          text: "Korea ist seit 1945 am 38. Breitengrad geteilt. 1950 greift das kommunistische Nordkorea den Süden an. Die <strong>USA</strong> führen UN-Truppen für den Süden; <strong>China</strong> schickt Soldaten, die <strong>UdSSR</strong> Waffen für den Norden. 1953 Waffenstillstand – Korea bleibt geteilt." },
        { heading: "🗂️ Akte Vietnam, 1946–1975", max: 56,
          text: "Ab 1946 kämpft Vietnam um Unabhängigkeit von Frankreich, 1954 wird es geteilt. Der kommunistische Norden und der Vietcong im Süden kämpfen gegen Südvietnams Regierung. Ab 1965 kämpfen die <strong>USA</strong> mit eigenen Soldaten für den Süden; <strong>UdSSR</strong> und <strong>China</strong> liefern dem Norden Waffen, China auch Hilfstruppen. 1973 ziehen die USA ab, 1975 siegt der Norden." },
        { heading: "🗂️ Akte Afghanistan, 1979–1989", max: 48,
          text: "1978 übernehmen Kommunisten die Macht, viele Afghanen erheben sich dagegen. Ende 1979 marschiert die <strong>UdSSR</strong> mit eigener Armee ein. Die <strong>USA</strong> liefern den Aufständischen (Mudschaheddin) Geld und Waffen, ab 1986 auch Stinger-Raketen. 1989 zieht die UdSSR ab." }
      ],
      intro: "Auf dem Tisch liegen drei Kriegsakten. Ordne jeder Akte die richtigen Angaben zu.",
      mode: "akten",
      game: {
        fragen: ["Wer kämpfte vor Ort gegeneinander?", "Wer kämpfte mit eigenen Soldaten – und wer lieferte vor allem Waffen?", "Wie endete der Krieg?"],
        akten: [
          { name: "Korea 1950–1953", antworten: [
            [{ t: "Nordkorea gegen Südkorea", ok: true }, { t: "Vietnam gegen Frankreich", fb: "Das ist die Vorgeschichte von Vietnam." }, { t: "Regierung gegen Mudschaheddin", fb: "Das gehört zu Afghanistan." }],
            [{ t: "Die USA (mit UN-Truppen) und China mit Soldaten, die UdSSR lieferte Waffen", ok: true }, { t: "Die UdSSR mit eigenen Soldaten, die USA und China lieferten nur Waffen", fb: "Andersherum: In Korea führten die USA die UN-Truppen, die UdSSR lieferte Waffen." }, { t: "Keine Supermacht schickte Soldaten, beide lieferten nur Geld und Waffen", fb: "Doch – lies die Akte noch einmal." }],
            [{ t: "Waffenstillstand 1953, Korea bleibt geteilt", ok: true }, { t: "Abzug der USA 1953, Sieg des Nordens, Korea wird vereint", fb: "Nein – Korea ist bis heute geteilt. Der Abzug der USA mit Sieg des Nordens war Vietnam." }, { t: "Abzug der UdSSR 1953, der Süden übernimmt ganz Korea", fb: "Nein – 1953 gab es einen Waffenstillstand, Korea blieb geteilt." }]
          ] },
          { name: "Vietnam 1946–1975", antworten: [
            [{ t: "Nordvietnam gegen Südvietnam", ok: true }, { t: "Nordkorea gegen Südkorea", fb: "Das war Korea." }, { t: "Regierung gegen Mudschaheddin", fb: "Das gehört zu Afghanistan." }],
            [{ t: "Die USA mit eigenen Soldaten, UdSSR und China lieferten Waffen", ok: true }, { t: "Die UdSSR mit eigenen Soldaten, die USA und China lieferten Waffen", fb: "Andersherum – wer schickt ab 1965 eigene Soldaten?" }, { t: "Nur Frankreich kämpfte, die Supermächte hielten sich ganz heraus", fb: "Frankreich kämpfte bis 1954 – danach kamen die USA." }],
            [{ t: "Abzug der USA 1973, Sieg des Nordens 1975", ok: true }, { t: "Waffenstillstand, das Land bleibt geteilt", fb: "Das war Korea." }, { t: "Abzug der UdSSR 1975, das Land bleibt bis heute geteilt", fb: "Nein – die UdSSR hatte in Vietnam keine Truppen. 1975 siegte der Norden, Vietnam wurde vereint." }]
          ] },
          { name: "Afghanistan 1979–1989", antworten: [
            [{ t: "Kommunistische Regierung gegen Aufständische (Mudschaheddin)", ok: true }, { t: "Nordkorea gegen Südkorea, geteilt am 38. Breitengrad", fb: "Das war Korea." }, { t: "Nordvietnam gegen Südvietnam nach dem Abzug Frankreichs", fb: "Das war Vietnam." }],
            [{ t: "Die UdSSR mit eigener Armee, die USA lieferten Geld und Waffen", ok: true }, { t: "Die USA mit eigenen Soldaten, die UdSSR lieferte Geld und Waffen", fb: "Andersherum: Hier marschiert die UdSSR selbst ein." }, { t: "China mit eigenen Soldaten, die UdSSR lieferte nur Waffen", fb: "China schickte Soldaten nach Korea, nicht nach Afghanistan." }],
            [{ t: "Abzug der UdSSR 1989", ok: true }, { t: "Waffenstillstand, das Land bleibt geteilt", fb: "Das war Korea." }, { t: "Abzug der USA, Sieg des Nordens", fb: "Das war Vietnam." }]
          ] }
        ]
      },
      tresor: {
        frage: "Wie kämpften die USA und die UdSSR in allen drei Kriegen gegeneinander? (Ein Wort)",
        accept: ["INDIREKT", "INDIREKTE", "INDIREKTEN", "INDIREKTER"], code: "INDIREKT",
        tipps: ["Lies die drei Akten auf der Infotafel (unten aufklappen): Kämpften Soldaten der USA und der UdSSR irgendwo direkt gegeneinander?",
                "Sie kämpften nicht direkt, sondern über andere."],
        erklaerung: "Die Supermächte kämpften indirekt: mit Waffen, Geld und Soldaten auf gegnerischen Seiten, aber nie offen gegeneinander."
      },
      uv: { text: "Wer profitiert? Gekämpft und gestorben wurde vor Ort – in Korea, Vietnam und Afghanistan, nicht in Washington oder Moskau. Wer trägt die Kosten eines Stellvertreterkriegs?" },
      beweis: { icon: "🗂️", name: "Kriegsakte", text: "Drei Fernschreiben mit dem Stempel „STELLVERTRETERKRIEG“." },
      summary: "<b>Stellvertreterkriege</b> (Korea 1950–53, Vietnam bis 1975, Afghanistan 1979–89): USA und UdSSR unterstützen gegnerische Seiten, kämpfen aber <b>nie offen gegeneinander</b> – sie kämpfen <b>indirekt</b>. · Die Kriege haben auch <b>eigene Ursachen</b> vor Ort (Teilung, Unabhängigkeitskampf, Aufstand). · <b>Millionen Tote</b>, vor allem in den umkämpften Ländern.",
      funkspruch: "ZENTRALE AN KS001: Akte bestätigt. LAGE: kalt, aber nur zwischen den Supermächten. ✍️ KORREKTUR IN ROT: Unsere Leitfrage war ungenau. Ab sofort gilt: Warum wurde der Kalte Krieg zwischen den Supermächten nie heiß? Nächstes Ziel: Washington, Oktober 1962. Dort stehen sich die beiden direkt gegenüber.",
      twist1: true,
      bonus: {
        titel: "Bonus-Akte: Das Geheimnis über dem Yalu",
        text: "VERSCHLUSSSACHE: Im Koreakrieg flogen sowjetische Piloten verdeckt Einsätze gegen US-Flugzeuge – getarnt als nordkoreanische oder chinesische Einheiten. Die US-Führung wusste davon und verschwieg es. (Nach Austin Carson: Secret Wars, 2018)",
        frage: "Warum schwiegen beide Seiten?",
        options: [
          { t: "Ein offener Kampf USA gegen UdSSR hätte einen großen Krieg auslösen können.", ok: true, fb: "Richtig: Beide Seiten hielten den Krieg absichtlich „kalt“ – sogar, als ihre Piloten schon gegeneinander flogen." },
          { t: "Die Einsätze waren militärisch unwichtig und deshalb keine Meldung wert.", ok: false, fb: "Im Gegenteil – gerade weil sie brisant waren, blieben sie geheim." },
          { t: "Die UNO hatte beiden Seiten verboten, über Kampfeinsätze zu sprechen.", ok: false, fb: "Nein – das Schweigen war eine Entscheidung der beiden Supermächte selbst." }
        ]
      }
    },

    // ------------------------------------------------------------------ Haus 3
    washington: {
      title: "Haus 3: Washington – Mission REICHWEITE",
      ort: "WASHINGTON, 22. OKTOBER 1962",
      ankunft: "Vor gut einer Woche hat ein US-Spionageflugzeug sowjetische Raketenstellungen auf Kuba fotografiert. Heute Abend erfährt es die Welt. Im Weißen Haus werden schon die Fernsehkameras aufgebaut.",
      kontakt: { name: "Kameramann Eddie Novak", text: "„Sowjetische Raketen auf Kuba, direkt in unserer Nachbarschaft. Für uns ist klar, wer hier der Aggressor ist. Gleich geht der Präsident auf Sendung. Achte darauf, womit er droht.“" },
      infoSource: "📖 Infotafel · Rede in eigener Arbeitsübersetzung, Original zum Aufklappen",
      infoLead: "Lies die drei Karten. Danach untersuchst du am Tisch das Lernbild.",
      infoCards: [
        { heading: "⏱️ Wettrüsten 1945–1962", max: 35,
          text: "<strong>1945</strong> US-Atombomben auf Hiroshima und Nagasaki · <strong>1949</strong> erste sowjetische Atombombe · <strong>ab 1952</strong> Wasserstoffbomben · <strong>1957</strong> Sputnik: Sowjetische Raketen könnten nun die USA erreichen · <strong>Oktober 1962</strong> Raketen auf Kuba, 90 Meilen vor den USA." },
        { heading: "📺 Kennedy im Fernsehen, 22.10.1962 (1)", max: 90,
          text: "„Innerhalb der vergangenen Woche haben eindeutige Beweise belegt, dass auf dieser gefangenen Insel gerade eine Reihe von Stellungen für Angriffsraketen vorbereitet wird. […] Erstens: Um diesen offensiven Aufbau zu stoppen, wird eine strikte Quarantäne für alle offensiven Militärgüter auf dem Weg nach Kuba eingeleitet. […] Drittens: Es wird die Politik dieser Nation sein, jede Atomrakete, die von Kuba aus gegen irgendeine Nation der westlichen Hemisphäre abgefeuert wird, als Angriff der Sowjetunion auf die Vereinigten Staaten zu betrachten, der einen vollen Vergeltungsschlag gegen die Sowjetunion erfordert.“",
          quelle: "Fernsehansprache, 22.10.1962, Auszug, eigene Arbeitsübersetzung. Original: John F. Kennedy Presidential Library, „Address on the Cuban Crisis“. Werk der US-Regierung, in den USA gemeinfrei; kurzer Auszug als Zitat.",
          orig: "“Within the past week, unmistakable evidence has established the fact that a series of offensive missile sites is now in preparation on that imprisoned island. […] First: To halt this offensive buildup, a strict quarantine on all offensive military equipment under shipment to Cuba is being initiated. […] Third: It shall be the policy of this Nation to regard any nuclear missile launched from Cuba against any nation in the Western Hemisphere as an attack by the Soviet Union on the United States, requiring a full retaliatory response upon the Soviet Union.”" },
        { heading: "📺 Kennedy im Fernsehen, 22.10.1962 (2)", max: 65,
          text: "„Wir werden die Kosten eines weltweiten Atomkriegs, in dem selbst die Früchte des Sieges in unserem Mund zu Asche würden, nicht vorschnell oder unnötig riskieren – aber wir werden auch zu keinem Zeitpunkt vor diesem Risiko zurückschrecken, wenn man sich ihm stellen muss.“",
          quelle: "Wie Karte 2.",
          orig: "“We will not prematurely or unnecessarily risk the costs of worldwide nuclear war in which even the fruits of victory would be ashes in our mouth – but neither will we shrink from that risk at any time it must be faced.”" }
      ],
      intro: "Am Tisch liegt ein Lernbild zur Lage in Washington. Tippe die drei markierten Stellen an und deute sie mit Hilfe der Rede.",
      mode: "hotspot",
      game: {
        bild: "washington",
        hotspots: [
          { x: 121, y: 218, r: 46, label: "Luftbilder",
            frage: "Worauf stützt Kennedy seine Anklage?",
            options: [
              { t: "Auf Beweise aus der Luftaufklärung („eindeutige Beweise“).", ok: true, fb: "Richtig: Am 14.10.1962 fotografierte ein U-2-Flugzeug die Raketenstellungen. Kennedy spricht von „eindeutigen Beweisen“." },
              { t: "Auf eine Rede Chruschtschows, in der er die Raketen ankündigt.", ok: false, fb: "Nein – Kennedy beruft sich auf eigene Beweise, nicht auf Moskau." },
              { t: "Auf Gerüchte von Flüchtlingen aus Kuba („zuverlässige Hinweise“).", ok: false, fb: "Kennedy betont gerade das Gegenteil: „eindeutige Beweise“." }
            ] },
          { x: 284, y: 98, r: 48, label: "Seekarte",
            frage: "Welchen Schritt wählt Kennedy – zwischen Nichtstun und Angriff?",
            options: [
              { t: "Eine „Quarantäne“: Kriegsschiffe kontrollieren die Schiffe auf dem Weg nach Kuba.", ok: true, fb: "Richtig: Washington spricht bewusst von „Quarantäne“, nicht von Blockade – eine Blockade wäre rechtlich eine Kriegshandlung." },
              { t: "Einen sofortigen Luftangriff auf die Raketenstellungen, danach eine Landung auf Kuba.", ok: false, fb: "Den gab es nicht. Kennedy wählt bewusst einen Mittelweg." },
              { t: "Er wartet ab und tut nichts, bis die UNO über die Raketen entschieden hat.", ok: false, fb: "Nein – er handelt, aber ohne zu schießen." }
            ] },
          { x: 428, y: 118, r: 40, label: "Fenster zum Flugplatz",
            frage: "Womit droht Kennedy, falls von Kuba aus eine Atomrakete abgefeuert wird?",
            options: [
              { t: "Mit einem vollen Gegenschlag gegen die Sowjetunion.", ok: true, fb: "Richtig: Jede Rakete von Kuba gilt als Angriff der Sowjetunion – Moskau würde selbst getroffen." },
              { t: "Mit einem Angriff nur auf Kuba, von wo die Rakete kam.", ok: false, fb: "Nein – Kennedy macht Moskau verantwortlich, nicht nur Kuba." },
              { t: "Mit Wirtschaftssanktionen gegen die Sowjetunion und Kuba.", ok: false, fb: "Lies Maßnahme „Drittens“ auf Karte 2 noch einmal." }
            ] }
        ],
        schluss: {
          frage: "Und jetzt Quellenkritik: Was könnte Kennedy in seiner Rede verschweigen? Stell eine Vermutung auf – in Moskau (Haus 4) prüfst du sie.",
          options: [
            { t: "Dass die USA selbst Atomraketen in der Türkei haben – direkt an der sowjetischen Grenze.", ok: true, fb: "Richtig: Die Türkei kommt in der ganzen Rede nicht vor. Genau dieses Argument wird Moskau anführen – auf nach Haus 4!" },
            { t: "Dass auf Kuba sowjetische Raketen aufgebaut werden – nur 90 Meilen vor der Küste der USA.", ok: false, fb: "Das sagt er ja gerade." },
            { t: "Dass er den UN-Sicherheitsrat einschaltet und Moskau vor der Weltöffentlichkeit anklagt.", ok: false, fb: "Die UNO erwähnt er sogar mehrmals – er ruft den Sicherheitsrat an." }
          ]
        }
      },
      tresor: {
        frage: "Wie heißt der Gegenschlag, mit dem Kennedy Moskau abschrecken will? Such das Wort auf Karte 2 (ohne „-schlag“).",
        accept: ["VERGELTUNG", "VERGELTUNGSSCHLAG"], code: "VERGELTUNG",
        tipps: ["Lies Maßnahme „Drittens“ auf Karte 2.", "Gesucht ist ein voller …schlag gegen die Sowjetunion."],
        erklaerung: "Kennedy droht mit Vergeltung: Wer angreift, wird selbst vernichtend getroffen."
      },
      uv: { text: "Wer profitiert? Die Rede läuft live im Fernsehen – zwei Wochen vor der Kongresswahl am 6. November 1962. An wen richtet sich Kennedy außer an Moskau? Sogar Chruschtschow warnt am 26.10. vor „kleinlichen Leidenschaften, ganz gleich, ob in diesem oder jenem Land Wahlen anstehen“." },
      beweis: { icon: "🗺️", name: "Reichweitenkarte", text: "Kuba in der Mitte, die Kreise reichen bis Washington." },
      summary: "<b>US-Sicht</b> (Kennedy, 22.10.1962): Die UdSSR ist der <b>Aggressor</b> – Raketen auf Kuba. Die USA wählen eine <b>Quarantäne</b> statt eines Angriffs und drohen: Jede Rakete von Kuba führt zur <b>vollen Vergeltung</b> gegen die UdSSR. · Die US-Raketen in der Türkei <b>verschweigt</b> Kennedy.",
      funkspruch: "ZENTRALE AN KS001: Washingtons Botschaft ist angekommen, hoffentlich auch in Moskau. LAGE: kritisch. Nächstes Ziel: Moskau. Hör dort genau hin, wie man über Washington spricht.",
      bonus: {
        titel: "Bonus-Akte: Das Beweisfoto",
        text: "Am 14.10.1962 fotografierte ein U-2-Flugzeug die Raketenstellung San Cristóbal. Das Originalfoto liegt im US-Nationalarchiv und ist gemeinfrei.",
        link: { href: "https://commons.wikimedia.org/wiki/File:MRBM_Field_Launch_Site_San_Cristobal_No._2_14_October_1962_-_NARA_-_193927.tif", t: "Originalfoto ansehen (Wikimedia Commons)" },
        frage: "Wer macht aus einem Luftbild einen Beweis?",
        options: [
          { t: "Fachleute, die es auswerten – ohne ihre Deutung sieht man nur Wege und Flecken.", ok: true, fb: "Richtig: Erst die Auswertung macht aus dem Foto „eindeutige Beweise“. Quellenkritik heißt auch: Wer deutet das Bild – und mit welchem Ziel?" },
          { t: "Niemand – ein Luftbild ist objektiv und spricht ganz für sich selbst.", ok: false, fb: "Ein Foto zeigt nur einen Ausschnitt. Gedeutet wird es von Menschen mit Interessen." },
          { t: "Der Pilot allein, denn er hat die Stellungen mit eigenen Augen gesehen.", ok: false, fb: "Der Pilot flog nur – ausgewertet haben andere." }
        ]
      }
    },

    // ------------------------------------------------------------------ Haus 4
    moskau: {
      title: "Haus 4: Moskau – Mission SPIEGELBILD",
      ort: "MOSKAU, 26./27. OKTOBER 1962",
      ankunft: "Seit dem 24. Oktober kontrollieren US-Kriegsschiffe die Schiffe auf dem Weg nach Kuba. Washington nennt das „Quarantäne“, nicht Blockade, denn eine Blockade wäre eine Kriegshandlung. Auf dem Schreibtisch liegen Briefe an den US-Präsidenten. Seltsam: Irgendwas hier kommt dir bekannt vor.",
      kontakt: { name: "Dolmetscherin Vera Sokolova", text: "„Amerikanische Raketen in der Türkei, direkt in unserer Nachbarschaft. Für uns ist klar, wer hier der Aggressor ist. Lies, mit welchem Bild Genosse Chruschtschow den drohenden Krieg beschreibt.“" },
      infoSource: "📖 Infotafel · Briefe in eigener Arbeitsübersetzung, Original zum Aufklappen",
      infoLead: "Lies die drei Karten. Danach untersuchst du am Tisch das Lernbild.",
      infoCards: [
        { heading: "🗺️ Die Lage aus Moskauer Sicht", max: 40,
          text: "Seit 1961/62 stehen US-Atomraketen in Italien und in der Türkei, die an die Sowjetunion grenzt. 1961 scheiterte auf Kuba eine von der CIA geplante Landung von Exilkubanern (Schweinebucht). Moskau will Kuba schützen und schickt Raketen." },
        { heading: "✉️ Chruschtschow an Kennedy, 26.10.1962 (geheimer Brief)", max: 85,
          text: "„[…] wir und Sie sollten jetzt nicht an den Enden des Seils ziehen, in das Sie den Knoten des Krieges geknüpft haben, denn je mehr wir beide ziehen, desto fester zieht sich dieser Knoten zu. Und es kann ein Moment kommen, in dem dieser Knoten so fest zugezogen ist, dass selbst der, der ihn geknüpft hat, nicht mehr die Kraft hat, ihn zu lösen […]. Lassen Sie uns Maßnahmen ergreifen, um diesen Knoten zu lösen. Wir sind dazu bereit.“",
          quelle: "Brief an Kennedy, 26.10.1962, Auszug. Eigene Arbeitsübersetzung der englischen Übersetzung der US-Botschaft (FRUS 1961–1963, Bd. VI, Dok. 65). Amtliche Regierungskorrespondenz, kurzer Auszug zur Quellenanalyse. Achtung: Übersetzung einer Übersetzung!",
          orig: "“Mr. President, we and you ought not now to pull on the ends of the rope in which you have tied the knot of war, because the more the two of us pull, the tighter that knot will be tied. And a moment may come when that knot will be tied so tight that even he who tied it will not have the strength to untie it, and then it will be necessary to cut that knot, and what that would mean is not for me to explain to you, because you yourself understand perfectly of what terrible forces our countries dispose. […] let us take measures to untie that knot. We are ready for this.”" },
        { heading: "📻 Chruschtschow an Kennedy, 27.10.1962 (im Radio verlesen)", max: 65,
          text: "„Sie sind über Kuba beunruhigt. Sie sagen, das beunruhige Sie, weil es 90 Meilen über See von der Küste der Vereinigten Staaten von Amerika entfernt liegt. Aber die Türkei grenzt an uns; unsere Wachposten gehen auf und ab und sehen einander. Meinen Sie also, Sie hätten das Recht, Sicherheit für Ihr eigenes Land […] zu verlangen, gestehen uns aber nicht dasselbe Recht zu?“",
          quelle: "Botschaft an Kennedy, 27.10.1962, von Radio Moskau verbreitet. Auszug, eigene Arbeitsübersetzung (FRUS 1961–1963, Bd. VI, Dok. 66). Amtliche Regierungserklärung, kurzer Auszug zur Quellenanalyse.",
          orig: "“You are disturbed over Cuba. You say that this disturbs you because it is 90 miles by sea from the coast of the United States of America. But Turkey adjoins us; our sentries patrol back and forth and see each other. Do you consider, then, that you have the right to demand security for your own country and the removal of the weapons you call offensive, but do not accord the same right to us?”" }
      ],
      intro: "Am Tisch liegt ein Lernbild zur Lage in Moskau – das Spiegelbild zu Washington. Tippe die drei markierten Stellen an und deute sie mit Hilfe der Briefe.",
      mode: "hotspot",
      game: {
        bild: "moskau",
        hotspots: [
          { x: 300, y: 262, r: 36, label: "Raketenzaun",
            frage: "Welches Argument steckt hinter dem Raketenzaun mit den beiden Wachposten?",
            options: [
              { t: "Die USA haben selbst Raketen direkt an der sowjetischen Grenze – in der Türkei.", ok: true, fb: "Richtig: „Die Türkei grenzt an uns; unsere Wachposten … sehen einander.“ (Karte 3)" },
              { t: "Die UNO kreist die Sowjetunion mit Truppen ein – die Wachposten sind Blauhelme.", ok: false, fb: "Von der UNO ist hier keine Rede – lies Karte 3." },
              { t: "Die Raketen im Zaun gehören der Sowjetunion und schützen sie vor der Türkei.", ok: false, fb: "Schau auf die Schilder: Türkei, Italien – das sind US-Raketen." }
            ] },
          { x: 436, y: 178, r: 32, label: "Pfote über der Insel",
            frage: "Wie stellt Moskau seine Rolle auf Kuba dar?",
            options: [
              { t: "Als Beschützer Kubas vor einem US-Angriff wie 1961 in der Schweinebucht.", ok: true, fb: "Richtig: Moskau sieht sich als Schutzmacht Kubas (Karte 1)." },
              { t: "Als Angreifer, der die USA mit Raketen vor ihrer Küste bedrohen will.", ok: false, fb: "So sieht es Washington – nicht Moskau." },
              { t: "Als neutraler Beobachter, der zwischen Kuba und den USA vermitteln will.", ok: false, fb: "Neutral ist hier niemand." }
            ] },
          { x: 105, y: 156, r: 24, label: "Knoten",
            frage: "Wovor warnt Chruschtschow mit dem Bild vom Knoten?",
            options: [
              { t: "Dass der Konflikt außer Kontrolle gerät, bis ihn niemand mehr lösen kann.", ok: true, fb: "Richtig. Am Ende des Briefs bietet er an: „Lassen Sie uns Maßnahmen ergreifen, um diesen Knoten zu lösen. Wir sind dazu bereit.“" },
              { t: "Dass die USA schwächer sind und den Knoten deshalb bald lösen müssen.", ok: false, fb: "Davon spricht er nicht – lies Karte 2." },
              { t: "Dass Kuba den Knoten geknüpft hat und nur Kuba ihn wieder lösen kann.", ok: false, fb: "Er schreibt: Sie – also die USA – haben den Knoten geknüpft." }
            ] }
        ],
        schluss: {
          frage: "Und jetzt Quellenkritik: Am 27.10. bietet Chruschtschow an, „die Mittel, die Sie für offensiv halten“, aus Kuba abzuziehen. Was verschweigt diese Formulierung?",
          options: [
            { t: "Dass es Atomraketen sind, die US-Städte erreichen können.", ok: true, fb: "Richtig: Er nennt sie nicht offensiv – so wie Kennedy die Türkei-Raketen nicht erwähnt. Jede Seite verschweigt die eigene Bedrohung." },
            { t: "Dass überhaupt sowjetische Waffen und Soldaten auf Kuba stehen.", ok: false, fb: "Das gibt er ja zu – er bietet ihren Abzug an." },
            { t: "Dass die Türkei ein NATO-Staat und damit ein Gegner der UdSSR ist.", ok: false, fb: "Das verschweigt er nicht – er spricht die Türkei sogar direkt an." }
          ]
        }
      },
      tresor: {
        frage: "Welches Recht verlangt Chruschtschow auf Karte 3 für sein Land – dasselbe, das die USA für sich beanspruchen? (Ein Hauptwort)",
        accept: ["SICHERHEIT"], code: "SICHERHEIT",
        tipps: ["Lies den letzten Satz von Karte 3.", "Das Recht auf … für das eigene Land."],
        erklaerung: "Beide Seiten fordern Sicherheit – und jede fühlt sich von der anderen bedroht. Das nennt man Sicherheitsdilemma."
      },
      uv: { text: "Wer profitiert? Den Brief vom 26.10. schickte Chruschtschow geheim an Kennedy. Die Botschaft vom 27.10. mit der Türkei-Forderung ließ Moskau im Radio verlesen. Warum macht eine Regierung eine Forderung öffentlich?" },
      beweis: { icon: "🔗", name: "Seil mit Knoten", text: "Ein Seilstück mit festgezogenem Knoten." },
      summary: "<b>Sowjetische Sicht</b> (Chruschtschow, 26./27.10.1962): Die USA sind der <b>Aggressor</b> – US-Raketen in der Türkei. Moskau verlangt dasselbe Recht auf <b>Sicherheit</b> und warnt: Der „Knoten des Krieges“ kann sich so fest zuziehen, dass ihn <b>niemand mehr lösen</b> kann. · Jede Seite <b>verschweigt</b> die eigene Bedrohung.",
      funkspruch: "ZENTRALE AN KS001: Beide Akten liegen vor. LAGE: knapp unter dem Siedepunkt. Leg die Beweise aus Washington und Moskau nebeneinander. Fällt dir etwas auf? Komm ins KS1-Büro auf der Agentenbrücke.",
      bonus: {
        titel: "Bonus-Akte: Schwarzer Samstag, 27.10.1962",
        text: "Am selben Tag wird über Kuba ein US-Aufklärungsflugzeug (U-2) abgeschossen. Auf See werfen US-Zerstörer Übungs-Wasserbomben neben das sowjetische U-Boot B-59. Kapitän und Politoffizier glauben, der Krieg habe begonnen, und wollen einen Atomtorpedo abfeuern. Dafür müssen drei Offiziere zustimmen – Wassili Archipow sagt Nein. (So berichteten es Beteiligte Jahrzehnte später; Einzelheiten sind umstritten.)",
        frage: "Was zeigt der „Schwarze Samstag“?",
        options: [
          { t: "Ein einziger Zwischenfall hätte den Krieg auslösen können, auch wenn ihn keine Regierung wollte.", ok: true, fb: "Richtig: Abschreckung allein garantierte nichts. Am 27.10.1962 hing viel an einzelnen Menschen." },
          { t: "Kennedy wollte den Krieg und suchte nur noch einen Anlass für den Angriff.", ok: false, fb: "Nein – er suchte gerade an diesem Tag nach einer diplomatischen Lösung." },
          { t: "Die Krise war an diesem Tag schon beigelegt; die Zwischenfälle waren bloß Missverständnisse ohne Gefahr.", ok: false, fb: "Im Gegenteil: Der 27.10. war einer ihrer gefährlichsten Tage." }
        ]
      }
    },

    // ------------------------------------------------------------------ Finale
    buero: {
      title: "KS1-Büro auf der Agentenbrücke – Finale HEISSER DRAHT",
      ort: "AGENTENBRÜCKE",
      ankunft: "Die Brücke erinnert an die Glienicker Brücke bei Potsdam: Dort tauschten die USA und die Sowjetunion im Kalten Krieg gefangene Agenten aus – 1962 zum Beispiel den U-2-Piloten Powers gegen den Spion Abel.",
      kontakt: { name: "ROTSTIFT, Zentrale der KS1", text: "„Gute Arbeit, KS001. Leg deine vier Beweise auf den Tisch. Dann beantwortest du die Leitfrage – mit Belegen.“" },
      infoSource: "📖 Lagebericht",
      infoLead: "Lies den Lagebericht. Danach baust du am Fernschreiber deine Antwort.",
      infoCards: [
        { heading: "🪞 Washington und Moskau", max: 35,
          text: "Eddie (Washington): „Sowjetische Raketen auf Kuba, direkt in unserer Nachbarschaft.“ Vera (Moskau): „Amerikanische Raketen in der Türkei, direkt in unserer Nachbarschaft.“ Beide: „Für uns ist klar, wer hier der Aggressor ist.“" },
        { heading: "🗂️ Deine vier Beweise", max: 35,
          text: "Haus 1: zwei Lager, beide „demokratisch“ · Haus 2: Stellvertreterkriege – indirekt · Haus 3: Vergeltung als Drohung · Haus 4: Sicherheit für beide und der „Knoten des Krieges“." },
        { heading: "⚖️ Was hielt den Krieg kalt?", max: 35,
          text: "Prüfe jeden Baustein: Welches Haus liefert den Beleg? Nur belegte Bausteine kommen durch den Fernschreiber." }
      ],
      intro: "Am Fernschreiber wartet die Zentrale auf deine Antwort. Bau sie aus Bausteinen – nur belegte Bausteine zählen.",
      mode: "finale",
      game: {
        satzanfang: "Der Kalte Krieg wurde zwischen den Supermächten nie heiß, weil …",
        bausteine: [
          { t: "… ein Atomkrieg beide Seiten vernichtet hätte – wer angreift, wird selbst getroffen.", ok: true, beleg: "Haus 3 (Vergeltung) und Haus 4 (Knoten)" },
          { t: "… beide Seiten in der Kubakrise nicht angriffen, sondern Verhandlungen anboten.", ok: true, beleg: "Haus 3 (Quarantäne statt Angriff) und Haus 4 (Angebot, den Knoten zu lösen)" },
          { t: "… sie ihre Gegnerschaft indirekt in Stellvertreterkriegen austrugen.", ok: true, beleg: "Haus 2 (indirekt)" },
          { t: "… die UNO den Krieg verhindert hat, weil sie beide Seiten zum Abrüsten zwang.", ok: false, fb: "Nicht ganz: Die UNO war Bühne – Kennedy ruft den Sicherheitsrat an – und sollte den Abzug der Raketen überwachen. Verhindert haben den Krieg aber Abschreckung und Verhandlungen der beiden Regierungen." },
          { t: "… sie sich eigentlich einig waren und nur zum Schein gegeneinander rüsteten.", ok: false, fb: "Haus 1 zeigt das Gegenteil: zwei Lager, zwei Weltbilder." },
          { t: "… nur eine Seite Atomwaffen besaß und die andere deshalb nie angreifen konnte.", ok: false, fb: "Seit 1949 hatten beide Atombomben – gerade deshalb war ein Krieg so gefährlich." },
          { t: "… Kuba den Konflikt beendet hat, indem es die Raketen selbst zurückschickte.", ok: false, fb: "Kuba saß nicht am Verhandlungstisch – Washington und Moskau einigten sich direkt." }
        ],
        musterantwort: "„Der Kalte Krieg wurde zwischen den Supermächten nie heiß, weil ein Angriff den eigenen Untergang bedeutet hätte (<b>gegenseitige Abschreckung</b>: Auch die schwächere Seite hätte der anderen unerträglichen Schaden zufügen können) und weil beide Seiten in der Kubakrise am Ende <b>verhandelten</b>. Dahin führte das <b>Sicherheitsdilemma</b>: Jede Seite hielt die andere für den Aggressor und rüstete auf. Ausgetragen wurde der Konflikt in <b>Stellvertreterkriegen</b> – für die Menschen dort war er heiß.“",
        nachtrag: "NACHTRAG DER ZENTRALE: Was die Öffentlichkeit 1962 nicht erfuhr: Auch Washington gab nach. Öffentlich sicherten die USA zu, Kuba nicht anzugreifen. Geheim sagte Robert Kennedy am Abend des 27.10. dem sowjetischen Botschafter Dobrynin zu, dass die USA ihre Raketen bald aus der Türkei abziehen würden – aber nicht als Teil der öffentlichen Lösung.",
        gegenwart: "UND HEUTE? 1963 richteten Washington und Moskau den „heißen Draht“ ein – einen Fernschreiber, nie ein rotes Telefon. Heute ist er eine gesicherte Computerverbindung; 2023 wurde er 60 Jahre alt."
      },
      summary: "<b>Antwort auf die Leitfrage:</b> Zwischen den Supermächten blieb der Krieg kalt, weil ein Atomkrieg beide vernichtet hätte (<b>gegenseitige Abschreckung</b>: Auch die schwächere Seite hätte der anderen unerträglichen Schaden zufügen können) und weil beide in der Kubakrise <b>verhandelten</b>. · Ursache des Wettrüstens: das <b>Sicherheitsdilemma</b>. · <b>Einschränkung:</b> In den Stellvertreterkriegen war der Krieg heiß.",
      funkspruch: "ZENTRALE AN KS001: Operation KALTFRONT abgeschlossen. LAGE: Die Kaltfront hält."
    }
  }
};
