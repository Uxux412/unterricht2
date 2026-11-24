// BRD Quest J2 (Oberstufe): neue Spielarten in den Häusern, fachliche Korrekturen, Merksätze fürs Arbeitsblatt.
// Wird nach den Inhalten der Grundfassung geladen und überschreibt nur, was hier steht.
window.J2 = function (C) {
  var QUELLE = { bundestag: "bundestag.de und bpb.de", bundesrat: "bundesrat.de und bpb.de", gewaltenteilung: "bpb.de und dem Grundgesetz",
    gesetzgebung: "bundestag.de, bundesrat.de und dem Grundgesetz", wahlrecht: "bundeswahlleiterin.de und bpb.de" };
  Object.keys(C).forEach(function (k) { C[k].infoSource = "📖 Infotafel (eigene Darstellung nach " + QUELLE[k] + ")"; });
  C.gewaltenteilung.title = "04 Haus 3: Gewaltenteilung und -verschränkung";

  // ---------------- Haus 1: Bundestag – Rollenspiel ----------------
  C.bundestag.title = "02 Haus 1: Bundestag – Du bist Opposition";
  C.bundestag.infoLead = "Lies zuerst die Infotafel. Danach übernimmst du die Rolle der Oppositionsführerin / des Oppositionsführers:";
  C.bundestag.infoCards[2].text = "Der Bundestag <strong>kontrolliert die Regierung</strong>. Das macht vor allem die <strong>Opposition</strong> (die Parteien, die nicht mitregieren). Ihre Werkzeuge: <strong>Fragestunde, Kleine und Große Anfragen, Untersuchungsausschuss (ab 1/4 der Abgeordneten, Art. 44 GG)</strong> und die <strong>abstrakte Normenkontrolle</strong>: Ebenfalls ein Viertel der Abgeordneten kann ein Gesetz vom Bundesverfassungsgericht prüfen lassen (Art. 93 GG).";
  C.bundestag.intro = "Rollenspiel: Deine Fraktion ist in der Opposition und hat 27 % der Sitze. Wie reagierst du?";
  C.bundestag.mode = "rollenspiel";
  C.bundestag.game = {
    role: "🎭 Du bist Oppositionsführer/in",
    fns: ["Gesetzgebung", "Kontrolle", "Wahl"],
    cases: [
      { text: "Im Verteidigungsministerium gibt es Hinweise auf Vetternwirtschaft bei Aufträgen. Die Regierung schweigt. Was tust du?",
        fn: "Kontrolle",
        options: [
          { t: "Einen Untersuchungsausschuss beantragen", ok: true, fb: "Richtig: Ein Viertel der Abgeordneten reicht dafür (Art. 44 GG) – mit 27 % schafft ihr das allein." },
          { t: "Den Kanzler sofort absetzen", ok: false, fb: "Geht nicht: Abwählen kann der Bundestag nur, wenn er gleichzeitig eine neue Person wählt (Art. 67 GG) – dafür fehlt euch die Mehrheit." },
          { t: "Das Bundesverfassungsgericht ermitteln lassen", ok: false, fb: "Das Verfassungsgericht ermittelt keine Affären. Aufklären ist Aufgabe des Parlaments." }
        ] },
      { text: "Ein neues Rüstungsprojekt soll Milliarden kosten. Ihr wollt wissen, was genau dahintersteckt.",
        fn: "Kontrolle",
        options: [
          { t: "Den Bundespräsidenten um Auskunft bitten", ok: false, fb: "Der Bundespräsident ist nicht für die Regierungsarbeit zuständig." },
          { t: "Eine Große Anfrage an die Bundesregierung stellen", ok: true, fb: "Richtig: Mit Anfragen und in der Fragestunde muss die Regierung dem Parlament Rede und Antwort stehen." },
          { t: "Den Haushalt allein blockieren", ok: false, fb: "Den Haushalt beschließt die Mehrheit – als Opposition könnt ihr ihn allein nicht stoppen." }
        ] },
      { text: "Ihr habt eine Idee für ein besseres Klimaschutzgesetz. Wie bringt ihr sie ins Parlament?",
        fn: "Gesetzgebung",
        options: [
          { t: "Den Entwurf direkt beim Bundespräsidenten einreichen", ok: false, fb: "Der Bundespräsident unterschreibt erst ganz am Ende fertige Gesetze." },
          { t: "Eine Volksabstimmung ansetzen", ok: false, fb: "Auf Bundesebene gibt es keine Volksabstimmung über Gesetze (Ausnahme: Neugliederung der Länder)." },
          { t: "Einen Gesetzentwurf „aus der Mitte des Bundestages“ einbringen", ok: true, fb: "Richtig: Gesetzentwürfe können „aus der Mitte des Bundestages“ kommen (Art. 76 GG). Laut Geschäftsordnung des Bundestags braucht es dafür eine Fraktion oder 5 % der Abgeordneten." }
        ] },
      { text: "Die Koalition zerbricht. Mehrere Abgeordnete der Regierungsfraktionen wollen mit euch zusammen einen neuen Kanzler wählen.",
        fn: "Wahl",
        options: [
          { t: "Konstruktives Misstrauensvotum: mit absoluter Mehrheit (316 Stimmen) einen Nachfolger wählen", ok: true, fb: "Richtig: So wird der amtierende Kanzler abgewählt (Art. 67 GG). Einzig erfolgreich war das 1982 (Kohl löste Schmidt ab)." },
          { t: "Den Kanzler einfach abwählen, Nachfolger später suchen", ok: false, fb: "Das gibt es bewusst nicht – eine Lehre aus Weimar, wo Regierungen ohne Ersatz gestürzt wurden." },
          { t: "Den Bundesrat über den Kanzler abstimmen lassen", ok: false, fb: "Den Kanzler wählt allein der Bundestag." }
        ] }
    ]
  };
  // Neuer Fall: abstrakte Normenkontrolle (als 3. Situation)
  C.bundestag.game.cases.splice(2, 0, { text: "Die Koalition beschließt ein Gesetz, das eurer Meinung nach gegen das Grundgesetz verstößt. Der Bundespräsident hat es schon unterschrieben. Was könnt ihr tun?",
    fn: "Kontrolle",
    options: [
      { t: "Den Bundesrat bitten, das Gesetz nachträglich aufzuheben", ok: false, fb: "Ein fertiges Gesetz kann der Bundesrat nicht nachträglich aufheben – das geht nur durch ein neues Gesetz." },
      { t: "Beim Bundesverfassungsgericht eine abstrakte Normenkontrolle beantragen", ok: true, fb: "Richtig: Ein Viertel der Abgeordneten kann ein Gesetz in Karlsruhe prüfen lassen (Art. 93 Abs. 1 Nr. 2 GG) – mit 27 % schafft ihr das allein. Das Gericht wird nur auf Antrag tätig." },
      { t: "Ein Volksbegehren gegen das Gesetz starten", ok: false, fb: "Auf Bundesebene gibt es kein Volksbegehren gegen Gesetze – anders als auf Landesebene, z. B. in Baden-Württemberg (Art. 59, 60 Landesverfassung)." }
    ] });
  C.bundestag.summary = "Der Bundestag hat drei Hauptfunktionen: <b>Gesetzgebung</b> (Gesetze in 3 Lesungen, Haushalt), <b>Kontrolle</b> der Regierung – vor allem durch die Opposition (Anfragen, Fragestunde, Untersuchungsausschuss ab 1/4) – und <b>Wahl</b> (Kanzler/in; Abwahl nur per konstruktivem Misstrauensvotum, Art. 67 GG). Mit einem Viertel der Sitze kann die Opposition zudem ein Gesetz vom <b>Bundesverfassungsgericht</b> prüfen lassen (abstrakte Normenkontrolle).";

  // ---------------- Haus 2: Bundesrat – Abstimmung ----------------
  C.bundesrat.title = "03 Haus 2: Bundesrat – Die Abstimmung";
  C.bundesrat.infoCards[1] = { heading: "🛑 Was ist ein Zustimmungsgesetz?",
    text: "Ein Gesetz ist nur dann zustimmungspflichtig, wenn das <strong>Grundgesetz es ausdrücklich vorschreibt</strong> – z. B. wenn es die Finanzen oder die Verwaltung der Länder betrifft. Dann gilt: <strong>Ohne Ja des Bundesrats scheitert das Gesetz.</strong> Jeder Beschluss des Bundesrats braucht die <strong>absolute Mehrheit: 35 der 69 Stimmen</strong> (Art. 52 GG). Beim Zustimmungsgesetz wirken Enthaltungen deshalb wie ein Nein. Für eine <strong>Grundgesetzänderung</strong> braucht es 2/3 in Bundestag <em>und</em> Bundesrat (Art. 79 GG)." };
  C.bundesrat.infoCards[2] = { heading: "⚖️ Was ist ein Einspruchsgesetz?",
    text: "Bei allen anderen Gesetzen kann der Bundesrat nach dem <strong>Vermittlungsausschuss Einspruch einlegen</strong> – auch dafür braucht er 35 Stimmen. Der <strong>Bundestag kann ihn überstimmen</strong>: mit absoluter Mehrheit – oder mit 2/3, wenn der Bundesrat mit 2/3 Einspruch eingelegt hat (Art. 77 GG). Jedes Land muss seine Stimmen <strong>einheitlich</strong> abgeben (Art. 51 GG)." };
  C.bundesrat.intro = "Abstimmung im Bundesrat: Du sitzt auf dem Präsidentenstuhl und zählst die Stimmen der 16 Länder.";
  C.bundesrat.mode = "abstimmung";
  C.bundesrat.game = {
    lands: [["BW", "Baden-Württ.", 6], ["BY", "Bayern", 6], ["NW", "Nordrh.-Westf.", 6], ["NI", "Niedersachsen", 6], ["HE", "Hessen", 5],
      ["BE", "Berlin", 4], ["BB", "Brandenburg", 4], ["SN", "Sachsen", 4], ["ST", "Sachsen-Anhalt", 4], ["RP", "Rheinland-Pfalz", 4],
      ["SH", "Schleswig-Holst.", 4], ["TH", "Thüringen", 4], ["HB", "Bremen", 3], ["HH", "Hamburg", 3], ["MV", "Meckl.-Vorp.", 3], ["SL", "Saarland", 3]],
    rounds: [
      { type: "sammeln", text: "Ein <b>Zustimmungsgesetz</b> zur Ganztagsbetreuung steht an. Tippe so viele Länder an, bis es eine Mehrheit hat. Wie viele Stimmen braucht es?",
        fb: "✔ Mehrheit erreicht! Nötig ist die absolute Mehrheit: 35 von 69 Stimmen (Art. 52 GG). Große Länder haben mehr Stimmen – aber nicht im Verhältnis zur Einwohnerzahl." },
      { type: "quiz", text: "Nächstes Zustimmungsgesetz: 6 Länder stimmen mit Ja, 4 Länder <b>enthalten sich</b>, der Rest stimmt mit Nein. Ist das Gesetz angenommen?",
        preset: { BW: "ja", BY: "ja", NI: "ja", HE: "ja", RP: "ja", SH: "ja", NW: "enth", BE: "enth", SN: "enth", HH: "enth",
                  BB: "nein", ST: "nein", TH: "nein", HB: "nein", MV: "nein", SL: "nein" },
        options: [
          { t: "Ja – es gibt mehr Ja- als Nein-Stimmen (31 : 21)", ok: false, fb: "Vorsicht: Es zählt nicht Ja gegen Nein, sondern ob 35 Ja-Stimmen erreicht sind." },
          { t: "Nein – 31 Ja-Stimmen reichen nicht, Enthaltungen wirken wie Nein", ok: true, fb: "Richtig: Der Bundesrat braucht 35 Ja-Stimmen. Darum zählt eine Enthaltung praktisch wie ein Nein – typisch, wenn sich eine Landeskoalition nicht einig ist." }
        ] },
      { type: "quiz", text: "In Brandenburg ist die Koalition zerstritten: Die Ministerin ruft „Ja“, der Minister ruft „Nein“. Was passiert mit den 4 Stimmen?",
        options: [
          { t: "Sie werden geteilt: 2 Ja, 2 Nein", ok: false, fb: "Teilen geht nicht – ein Land kann nur einheitlich abstimmen." },
          { t: "Sie sind ungültig, weil das Land nicht einheitlich abstimmt", ok: true, fb: "Richtig: Die Stimmen eines Landes können nur einheitlich abgegeben werden (Art. 51 GG). So entschied das Bundesverfassungsgericht 2002 beim Zuwanderungsgesetz." },
          { t: "Es zählt automatisch das Ja", ok: false, fb: "Nein – uneinheitlich abgegebene Stimmen sind ungültig." }
        ] },
      { type: "quiz", text: "Ein <b>Einspruchsgesetz</b>: Nach dem Vermittlungsausschuss legt der Bundesrat mit 40 von 69 Stimmen Einspruch ein. Was braucht der Bundestag, um das Gesetz trotzdem durchzusetzen?",
        options: [
          { t: "Nichts – der Einspruch ist endgültig", ok: false, fb: "Endgültig blockieren kann der Bundesrat nur Zustimmungsgesetze." },
          { t: "Die absolute Mehrheit seiner Mitglieder (316 von 630)", ok: true, fb: "Richtig (Art. 77 GG). Hätte der Bundesrat mit 2/3 (46 Stimmen) Einspruch eingelegt, bräuchte der Bundestag ebenfalls 2/3." },
          { t: "Eine Zustimmung des Bundesverfassungsgerichts", ok: false, fb: "Das Gericht ist an der Gesetzgebung nicht beteiligt." }
        ] }
    ]
  };
  C.bundesrat.game.rounds.push({ type: "quiz",
    text: "Ein <b>Einspruchsgesetz</b>: Nach dem Vermittlungsausschuss stimmen 6 Länder für einen Einspruch (31 Stimmen), 4 Länder <b>enthalten sich</b>, der Rest stimmt dagegen. Was passiert?",
    preset: { BW: "ja", BY: "ja", NI: "ja", HE: "ja", RP: "ja", SH: "ja", NW: "enth", BE: "enth", SN: "enth", HH: "enth",
              BB: "nein", ST: "nein", TH: "nein", HB: "nein", MV: "nein", SL: "nein" },
    options: [
      { t: "Der Einspruch ist eingelegt – 31 sind mehr als 21", ok: false, fb: "Auch für einen Einspruch braucht der Bundesrat 35 Stimmen (Art. 52 Abs. 3 GG)." },
      { t: "Kein Einspruch – das Gesetz kommt zustande", ok: true, fb: "Richtig (Art. 78 GG): Ohne 35 Stimmen kein Einspruch. Beim Einspruchsgesetz helfen Enthaltungen also dem Gesetz – beim Zustimmungsgesetz bringen sie es zu Fall." },
      { t: "Der Bundestag muss mit 2/3 neu abstimmen", ok: false, fb: "Über eine Zurückweisung stimmt der Bundestag nur ab, wenn der Bundesrat wirklich Einspruch eingelegt hat." }
    ] });
  C.bundesrat.summary = "Im Bundesrat wirken die <b>16 Landesregierungen</b> an der Bundesgesetzgebung mit (<b>69 Stimmen</b>, BW: 6; je Land einheitlich). Jeder Beschluss braucht <b>35 Ja-Stimmen</b> (Art. 52 GG). <b>Zustimmungsgesetze</b> (nur wenn das GG es vorschreibt) scheitern ohne diese 35 – Enthaltung wirkt hier wie Nein. Bei <b>Einspruchsgesetzen</b> braucht schon der Einspruch 35 Stimmen, und der Bundestag kann ihn überstimmen (absolute bzw. 2/3-Mehrheit, Art. 77 GG).";

  // ---------------- Haus 3: Gewaltenteilung – bleibt Zuordnung ----------------
  C.gewaltenteilung.infoCards[2].text = "Die <strong>Judikative</strong> spricht Recht. Auf Bundesebene wacht das <strong>Bundesverfassungsgericht (Karlsruhe, 16 Richter/innen)</strong> als „Hüter der Verfassung“: <strong>Es prüft Gesetze am Grundgesetz</strong> und entscheidet über Verfassungsbeschwerden.";
  C.gewaltenteilung.summary = "<b>Legislative:</b> Bundestag und Bundesrat · <b>Exekutive:</b> Bundesregierung und Bundespräsident/in · <b>Judikative:</b> Bundesverfassungsgericht. Die Gewalten sind <b>verschränkt</b>: Der Bundestag wählt den Kanzler, Minister sind oft Abgeordnete, Landesregierungen sitzen im Bundesrat.";

  // ---------------- Haus 4: Gesetzgebung – Weg eines Gesetzes ----------------
  C.gesetzgebung.title = "05 Haus 4: Gesetzgebung – Schick das Gesetz auf die Reise";
  C.gesetzgebung.infoCards[0].text = "Ein <strong>Gesetzentwurf wird eingebracht von: Bundesregierung, „aus der Mitte des Bundestages“ (Fraktion oder 5 % der Abgeordneten) oder Bundesrat</strong>. Die meisten Entwürfe kommen von der Regierung – sie gehen <strong>zuerst an den Bundesrat zur Stellungnahme</strong> (1. Durchgang, Art. 76 GG).";
  C.gesetzgebung.infoCards[3].text = "Zum Schluss <strong>zeichnet die Regierung gegen</strong> (Kanzler/in oder Minister/in), dann <strong>prüft & unterschreibt der/die Bundespräsident/in</strong> das Gesetz. Danach wird es im <strong>Bundesgesetzblatt verkündet</strong> (seit 2023 elektronisch). <strong>In Kraft</strong> tritt es an dem Tag, den es selbst festlegt (Art. 82 Abs. 2 GG).";
  C.gesetzgebung.intro = "Schick den Entwurf Station für Station durch das Verfahren. Tippe immer die nächste richtige Station an!";
  C.gesetzgebung.mode = "weg";
  C.gesetzgebung.game = {
    title: "📜 Entwurf: „Gesetz zur Erhöhung des Kindergeldes“ (Zustimmungsgesetz)",
    start: "Das Familienministerium hat einen Entwurf geschrieben.",
    stations: { BReg: "🏢 Bundesregierung", BT: "🏛️ Bundestag", BR: "🦁 Bundesrat", VA: "🤝 Vermittlungsausschuss",
      GZ: "✒️ Gegenzeichnung (Kanzler/in)", BP: "🖋️ Bundespräsident/in", BGBl: "📰 Bundesgesetzblatt",
      BVerfG: "⚖️ Bundesverfassungsgericht", Volk: "🗳️ Volksabstimmung" },
    wrong: { BVerfG: "Das Bundesverfassungsgericht ist nicht Teil des Gesetzgebungsverfahrens. Es prüft ein Gesetz nur auf Antrag – z. B. wenn ein Viertel des Bundestags oder eine Landesregierung klagt.",
      Volk: "Bundesgesetze werden in Deutschland nicht per Volksabstimmung beschlossen (repräsentative Demokratie)." },
    steps: [
      { id: "BReg", ask: "Wer beschließt den Entwurf und bringt ihn offiziell ein?", says: "Das Kabinett beschließt den Entwurf.", hint: "Der Entwurf kommt aus einem Ministerium." },
      { id: "BR", ask: "Regierungsentwürfe gehen zuerst zur Stellungnahme an …?", says: "1. Durchgang: Der Bundesrat nimmt Stellung (Art. 76 GG).", hint: "Bei Regierungsentwürfen dürfen sich zuerst die Länder äußern." },
      { id: "BT", ask: "Wo wird der Entwurf in drei Lesungen beraten und beschlossen?", says: "Der Bundestag berät in 3 Lesungen und Ausschüssen und beschließt das Gesetz.", hint: "Jetzt ist das Parlament dran." },
      { id: "BR", ask: "Wer muss einem Zustimmungsgesetz jetzt zustimmen?", says: "2. Durchgang: Das Gesetz ist zustimmungspflichtig, weil das Kindergeld die Einkommensteuer mindert, die sich Bund, Länder und Gemeinden teilen (Art. 105 Abs. 3 GG). Der Bundesrat lehnt ab – die Länder wollen weniger zahlen. Was nun?", hint: "Die Länder sind noch einmal gefragt." },
      { id: "VA", ask: "Der Bundesrat lehnt ab. Wer sucht jetzt einen Kompromiss?", says: "Bundestag oder Bundesregierung rufen den Vermittlungsausschuss an (16 + 16 Mitglieder). Er findet einen Kompromiss: Der Bund übernimmt einen größeren Teil der Kosten.", hint: "Ein Gremium aus Bundestag und Bundesrat." },
      { id: "BT", ask: "Der Kompromiss ändert das Gesetz. Wer muss neu abstimmen?", says: "Der Bundestag bestätigt den Kompromiss.", hint: "Das Gesetz hat sich geändert – das Parlament muss neu beschließen." },
      { id: "BR", ask: "Und wer muss dem Kompromiss noch zustimmen?", says: "Der Bundesrat stimmt jetzt zu – das Gesetz ist beschlossen.", hint: "Zustimmungsgesetz!" },
      { id: "GZ", ask: "Wer unterschreibt zuerst und übernimmt damit die politische Verantwortung?", says: "Gegenzeichnung durch Kanzler/in und Fachminister/in (Art. 82 Abs. 1, Art. 58 GG): Die Regierung übernimmt damit die politische Verantwortung.", hint: "Die Regierung bestätigt das Gesetz mit ihrer Unterschrift." },
      { id: "BP", ask: "Wer prüft und fertigt das Gesetz aus?", says: "Der Bundespräsident prüft und unterschreibt (Ausfertigung, Art. 82 GG).", hint: "Das Staatsoberhaupt ist dran." },
      { id: "BGBl", ask: "Wo muss das Gesetz erscheinen, damit es gilt?", says: "Verkündung im Bundesgesetzblatt (seit 2023 elektronisch). In Kraft tritt das Gesetz an dem Tag, den es selbst festlegt (Art. 82 Abs. 2 GG). 🎉", hint: "Ohne Veröffentlichung gilt es nicht." }
    ]
  };
  C.gesetzgebung.summary = "<b>Weg eines Gesetzes:</b> Initiative (Bundesregierung → zuerst Stellungnahme des Bundesrats; Bundestag; Bundesrat) → <b>3 Lesungen im Bundestag</b> → <b>Bundesrat</b> (Zustimmung oder Einspruch) → bei Streit <b>Vermittlungsausschuss</b> (16 + 16) → Gegenzeichnung durch die Regierung → <b>Bundespräsident/in</b> prüft & unterschreibt → Verkündung im <b>Bundesgesetzblatt</b>; in Kraft am festgelegten Tag.";

  // ---------------- Haus 5: Wahlrecht – Fälle ----------------
  C.wahlrecht.title = "06 Haus 5: Grenzhäuschen – Ist das verfassungsgemäß?";
  C.wahlrecht.infoCards[0].text = "Bei der Bundestagswahl hat man 2 Stimmen: Mit der <strong>Erststimme</strong> wählt man eine <strong>Person im Wahlkreis (299 Wahlkreise)</strong>. Mit der <strong>Zweitstimme</strong> wählt man die <strong>Landesliste einer Partei – sie entscheidet über die Sitzverteilung</strong>. Seit 2025 bekommt ein Wahlkreissieger seinen Sitz nur, <strong>wenn die Zweitstimmen seiner Partei ihn decken</strong>.";
  C.wahlrecht.intro = "Du bist Wahlprüfer/in. Prüfe jeden Fall: Ist er verfassungsgemäß – oder welcher Wahlgrundsatz (Art. 38 GG) ist verletzt?";
  C.wahlrecht.mode = "faelle";
  C.wahlrecht.game = {
    question: "Verfassungsgemäß – oder welcher Grundsatz ist verletzt?",
    choices: ["✔ verfassungsgemäß", "allgemein", "unmittelbar", "frei", "gleich", "geheim"],
    cases: [
      { text: "Nur wer Einkommensteuer zahlt, darf wählen.", a: ["allgemein"], fb: "Allgemein: Alle Deutschen ab 18 dürfen wählen – egal ob reich, arm, Mann oder Frau." },
      { text: "Ein Chef verlangt von seinen Leuten ein Handyfoto vom ausgefüllten Stimmzettel.", a: ["geheim", "frei"], fb: "Geheim (und frei): Niemand darf erfahren oder kontrollieren, was du wählst." },
      { text: "Die Bürger wählen Wahlleute – und die wählen dann die Abgeordneten.", a: ["unmittelbar"], fb: "Unmittelbar: Die Stimme geht direkt an Kandidat/in bzw. Partei, ohne Zwischenstufe." },
      { text: "Wer einen Doktortitel hat, bekommt zwei Zweitstimmen.", a: ["gleich"], fb: "Gleich: Jede Stimme zählt gleich viel." },
      { text: "Ein Unternehmen droht mit Kündigung, wenn Beschäftigte eine bestimmte Partei wählen.", a: ["frei"], fb: "Frei: Niemand darf unter Druck gesetzt werden." },
      { text: "Eine 17-Jährige darf bei der Bundestagswahl noch nicht wählen.", a: ["✔ verfassungsgemäß"], fb: "Verfassungsgemäß: Das Wahlalter für den Bundestag ist 18 (Art. 38 Abs. 2 GG).", miss: "Ein Mindestalter verstößt nicht gegen „allgemein“ – es steht selbst im Grundgesetz." },
      { text: "Ein Wahlkreissieger bekommt keinen Sitz, weil seine Partei zu wenige Zweitstimmen hat.", a: ["✔ verfassungsgemäß"], fb: "Verfassungsgemäß: Zweitstimmendeckung seit 2025 – das Bundesverfassungsgericht hat sie 2024 bestätigt. So bleibt es bei 630 Sitzen.", miss: "Das klingt ungerecht – aber das Gericht sah darin keinen Verstoß. Die Sitzverteilung richtet sich nach den Zweitstimmen." },
      { text: "Eine Partei mit 4,8 % und 2 gewonnenen Wahlkreisen kommt nicht in den Bundestag.", a: ["✔ verfassungsgemäß"], fb: "Verfassungsgemäß: 5-%-Hürde (Ausnahme erst ab 3 Wahlkreisen) – sie soll eine Zersplitterung des Parlaments verhindern.", miss: "Die Sperrklausel schränkt die Gleichheit ein, ist aber als Schutz vor Zersplitterung erlaubt." }
    ]
  };
  C.wahlrecht.summary = "<b>Erststimme:</b> Person im Wahlkreis (299) · <b>Zweitstimme:</b> Partei, entscheidet über die Sitze (630; seit 2025 Zweitstimmendeckung) · <b>5-%-Hürde</b> (oder 3 Wahlkreise). Wahlgrundsätze nach <b>Art. 38 GG</b>: allgemein, unmittelbar, frei, gleich, geheim.";
};
