// Euro Quest J2 (Oberstufe): neue Spielarten in Ratshalle, Markthaus und Flipper-Bau.
// Die Schmiede (Meilensteine Europas) bleibt im Ablauf wie in der Grundfassung, Inhalte fachlich korrigiert.
window.J2 = function (C) {

  // ---------------- Schmiede: Maastricht mit Helmut Kohl statt Kissinger ----------------
  var MM = window.MeilensteineModul;
  if (MM) {
    MM.POLS.E = { name: "Helmut Kohl", info: "1930–2017, Bundeskanzler (1982–1998), treibende Kraft hinter dem Vertrag von Maastricht", letters: "AL" };
    MM.QUOTES.b = { text: "„Die Politik der europäischen Einigung ist in Wirklichkeit eine Frage von Krieg und Frieden im 21. Jahrhundert.“ (Rede in Löwen, 1996)", letters: "T" };
    MM.EVENTS[2].tip = "Der Kanzler der deutschen Einheit wollte das vereinte Deutschland fest in Europa verankern. Sein Zitat spricht von Krieg und Frieden.";
    MM.EVENTS[2].text = "7. Februar 1992: Im Vertrag von Maastricht gründen zwölf Staaten die Europäische Union. Sie vereinbaren die Wirtschafts- und Währungsunion mit dem Ziel einer gemeinsamen Währung, die Unionsbürgerschaft und eine Gemeinsame Außen- und Sicherheitspolitik (GASP), in der alle Staaten einstimmig entscheiden müssen.";
    MM.POLS.C.info = "1925–2023, Präsident der EG-Kommission (1985–1995)";
    MM.QUOTES.a.text = "„Europa ist wie ein Fahrrad. Hält man es an, fällt es um.“ (zugeschrieben)";
  }

  // ---------------- Ratshalle: Wer bin ich? ----------------
  C.ratshalle.title = "Ratshalle – Wer bin ich?";
  C.ratshalle.intro = "Sechs Institutionen stellen sich vor – eine davon gehört gar nicht zur EU. Rate so früh wie möglich, wer spricht!";
  C.ratshalle.mode = "werbinich";
  C.ratshalle.infoCards = [
    { heading: "🏛️ Kommission und Parlament", text: "Die <strong>Europäische Kommission</strong> (27 Mitglieder, eins pro Staat) schlägt fast allein neue EU-Gesetze vor (<strong>Initiativrecht</strong>) und wacht als „Hüterin der Verträge“ über das EU-Recht. Das <strong>Europäische Parlament</strong> (720 Abgeordnete) wird alle fünf Jahre direkt gewählt – in Deutschland ab 16. Es beschließt Gesetze und den Haushalt, wählt die Kommissionspräsidentin und kann die Kommission mit Zwei-Drittel-Mehrheit zum Rücktritt zwingen." },
    { heading: "⚖️ Zwei Räte – nicht verwechseln!", text: "Im <strong>Rat der EU</strong> (Ministerrat) sitzen die <strong>Fachministerinnen und -minister</strong> der Mitgliedstaaten; der Vorsitz wechselt alle sechs Monate. Er beschließt Gesetze <strong>gemeinsam mit dem Parlament</strong>, meist mit qualifizierter Mehrheit (55 % der Staaten, die 65 % der EU-Bevölkerung vertreten). Im <strong>Europäischen Rat</strong> treffen sich die <strong>Staats- und Regierungschefs</strong> mit ihrem Präsidenten und der Kommissionspräsidentin zu Gipfeln: Er gibt die Leitlinien vor, macht aber keine Gesetze." },
    { heading: "🔍 EuGH – und eine Falle", text: "Der <strong>Europäische Gerichtshof</strong> in Luxemburg (eine Richterin oder ein Richter pro Mitgliedstaat) sorgt dafür, dass EU-Recht überall gleich ausgelegt wird. Der <strong>Europarat</strong> in Straßburg ist dagegen <strong>kein EU-Organ</strong>: eine eigene Organisation von 46 Staaten (seit 1949), die über die Europäische Menschenrechtskonvention wacht." }
  ];
  var falle = { "Europarat": "Vorsicht, Falle: Der Europarat ist kein Organ der EU, sondern eine eigene Organisation mit 46 Staaten." };
  C.ratshalle.game = {
    choices: ["Europäische Kommission", "Europäisches Parlament", "Rat der EU", "Europäischer Rat", "Europarat", "Europäischer Gerichtshof"],
    riddles: [
      { a: "Europäische Kommission", wrong: falle, fb: "Die Kommission hat fast allein das Initiativrecht: Parlament und Rat können sie nur auffordern, einen Vorschlag zu machen. Als „Hüterin der Verträge“ wacht sie außerdem über das EU-Recht.",
        hints: ["Ich habe 27 Mitglieder – eins pro Mitgliedstaat.", "Ich sitze vor allem in Brüssel und gelte als „Hüterin der Verträge“.", "Nur ich darf neue EU-Gesetze vorschlagen (Initiativrecht)."] },
      { a: "Europäisches Parlament", wrong: falle, fb: "Das Parlament ist das einzige direkt gewählte EU-Organ (in Deutschland ab 16). Es beschließt Gesetze gemeinsam mit dem Rat der EU, wählt die Kommissionspräsidentin und kann die Kommission mit Zwei-Drittel-Mehrheit zum Rücktritt zwingen – wie der Bundestag: Gesetzgebung, Wahl, Kontrolle.",
        hints: ["Ich tage in Straßburg und Brüssel.", "Ich habe 720 Mitglieder, 96 davon aus Deutschland.", "Ich werde alle fünf Jahre direkt von den EU-Bürgerinnen und -Bürgern gewählt."] },
      { a: "Rat der EU", wrong: falle, fb: "Im Rat der EU (Ministerrat) sitzen die Fachminister – je nach Thema z. B. die Agrar- oder Innenminister.",
        hints: ["Meine Zusammensetzung wechselt je nach Thema.", "Mein Vorsitz wechselt alle sechs Monate zwischen den Mitgliedstaaten.", "In mir sitzen die Fachministerinnen und -minister der Mitgliedstaaten; ich beschließe Gesetze mit dem Parlament."] },
      { a: "Europäischer Rat", wrong: falle, fb: "Der Europäische Rat der Staats- und Regierungschefs gibt die Richtung vor, macht aber keine Gesetze.",
        hints: ["Ich treffe mich mehrmals im Jahr zu „Gipfeln“.", "Ich mache selbst keine Gesetze, gebe aber die großen Leitlinien vor.", "In mir sitzen die Staats- und Regierungschefs der Mitgliedstaaten, mein Präsident und die Präsidentin der Kommission."] },
      { a: "Europarat", fb: "Richtig erkannt: Der Europarat (seit 1949) ist keine EU-Institution. Über seine Menschenrechtskonvention wacht der Gerichtshof für Menschenrechte in Straßburg.",
        hints: ["Ich sitze in Straßburg.", "Ich habe 46 Mitgliedstaaten – mehr als die EU.", "Ich bin gar kein EU-Organ, sondern eine eigene Organisation für Menschenrechte und Demokratie."] },
      { a: "Europäischer Gerichtshof", wrong: falle, fb: "Der EuGH in Luxemburg sorgt dafür, dass EU-Recht in allen Mitgliedstaaten gleich ausgelegt und angewendet wird.",
        hints: ["Ich sitze in Luxemburg.", "Ich habe eine Richterin oder einen Richter pro Mitgliedstaat.", "Ich sorge dafür, dass EU-Recht überall gleich ausgelegt wird."] }
    ]
  };
  C.ratshalle.summary = "<b>Kommission:</b> schlägt Gesetze vor (Initiativrecht), Hüterin der Verträge · <b>Parlament:</b> direkt gewählt, beschließt Gesetze mit dem <b>Rat der EU</b> (Fachminister) · <b>Europäischer Rat:</b> Staats- und Regierungschefs (Gipfel), gibt Leitlinien vor, macht keine Gesetze · <b>EuGH:</b> legt EU-Recht aus. Der <b>Europarat</b> ist kein EU-Organ.";

  // ---------------- Markthaus: Zollschalter auf Zeit ----------------
  C.markt.title = "Markthaus – Der Zollschalter";
  C.markt.intro = "Am Zollschalter stehen zehn Leute an. Ordne jeden Fall in 60 Sekunden der richtigen Grundfreiheit oder Schengen zu!";
  C.markt.mode = "zeit";
  C.markt.infoCards = [
    { heading: "🛒 Der Binnenmarkt", text: "Zwischen den EWG-Gründerstaaten gibt es seit <strong>1968</strong> keine Zölle mehr (Zollunion). Seit <strong>1993</strong> gilt der <strong>Binnenmarkt</strong> mit den <strong>vier Grundfreiheiten</strong>: freier Verkehr von <strong>Waren</strong> (ohne Zölle und Warenkontrollen), <strong>Personen</strong> (überall in der EU wohnen, arbeiten, studieren), <strong>Dienstleistungen</strong> (Aufträge über die Grenze erledigen) und <strong>Kapital</strong> (Geld anlegen, überweisen, Immobilien kaufen)." },
    { heading: "🛂 Schengen", text: "Das <strong>Schengener Abkommen</strong> (ab 1995 umgesetzt) schafft die regulären <strong>Personenkontrollen an den Binnengrenzen</strong> ab. Schengen ist nicht dasselbe wie die EU: Die <strong>Schweiz, Norwegen, Island und Liechtenstein</strong> machen mit, Irland nicht. <strong>Ausnahme:</strong> Staaten dürfen befristet wieder kontrollieren – Deutschland tut das seit 2015 an der Grenze zu Österreich und seit 2024 an allen Landgrenzen. Ob das noch „vorübergehend“ ist, ist politisch umstritten." },
    { heading: "⚖️ Chance oder Risiko?", text: "Befürworter sagen: Der Binnenmarkt bringt Wohlstand, Wettbewerb und Freiheit – gerade für ein Exportland wie Deutschland. Kritiker sagen: Er setzt Löhne und Standorte unter Druck, und offene Grenzen erschweren die Kontrolle von Migration und Kriminalität." }
  ];
  C.markt.game = {
    intro: "Du arbeitest am alten Zollschalter. Zölle gibt es zwischen den EWG-Gründerstaaten schon seit 1968 nicht mehr, seit dem Binnenmarkt 1993 auch keine Warenkontrollen. Die Passkontrollen fielen erst mit Schengen (ab 1995) weg. Ordne jeden Fall zu – <b>ab 8 von 10 Richtigen</b> leuchten die Sterne.",
    seconds: 60, need: 8,
    baskets: ["Waren", "Personen", "Dienstleistungen", "Kapital", "Schengen"],
    cards: [
      { t: "Wein aus Frankreich wird ohne Zoll in Stuttgart verkauft.", a: "Waren" },
      { t: "Eine Ärztin aus Rumänien zieht nach Ulm und arbeitet im Krankenhaus.", a: "Personen" },
      { t: "Ein Steuerbüro in Wien berät online eine Firma in Freiburg.", a: "Dienstleistungen" },
      { t: "Ein Rentner kauft eine Ferienwohnung in Portugal.", a: "Kapital" },
      { t: "Seit 2015 kontrolliert die Bundespolizei an der Grenze zu Österreich wieder Pässe – „vorübergehend“. Welche Regel wird hier ausnahmsweise ausgesetzt?", a: "Schengen",
        fb: "Schengen erlaubt Kontrollen an Binnengrenzen nur ausnahmsweise und befristet. Ob das nach über zehn Jahren noch „vorübergehend“ ist, ist umstritten." },
      { t: "Ein Student aus Spanien zieht zum Studium nach Heidelberg.", a: "Personen" },
      { t: "Eine Bäckerei aus Kehl liefert Brezeln nach Straßburg.", a: "Waren" },
      { t: "Ein Dachdecker aus dem Elsass repariert ein Dach in Freiburg.", a: "Dienstleistungen" },
      { t: "Du kaufst Aktien einer italienischen Firma.", a: "Kapital" },
      { t: "Mit dem Zug von Basel nach Freiburg: Eine Passkontrolle ist eigentlich nicht vorgesehen – obwohl die Schweiz nicht in der EU ist.", a: "Schengen",
        fb: "Die Schweiz gehört zum Schengen-Raum, aber nicht zur EU und nicht zum Binnenmarkt – den Zoll gibt es an ihrer Grenze trotzdem." }
    ]
  };
  C.markt.summary = "Der <b>Binnenmarkt</b> (seit 1993) beruht auf <b>vier Grundfreiheiten</b>: freier Verkehr von <b>Waren, Personen, Dienstleistungen und Kapital</b>. Der <b>Schengen-Raum</b> schafft zusätzlich die regulären Kontrollen an den Binnengrenzen ab – dazu gehören auch Nicht-EU-Staaten wie die Schweiz und Norwegen. <b>Ausnahme:</b> befristete Kontrollen, z. B. Deutschland seit 2015 an der Grenze zu Österreich, seit 2024 an allen Landgrenzen.";

  // ---------------- Flipper-Bau: Vorhersage ----------------
  C.flipper.title = "Flipper-Bau – Wo landet das Gesetz?";
  C.flipper.intro = "Ein EU-Gesetz rollt wie eine Flipperkugel zwischen Parlament und Rat hin und her. Lies das Szenario und sag voraus, wo die Kugel landet!";
  C.flipper.mode = "vorhersage";
  C.flipper.infoCards = [
    { heading: "📜 Wer macht EU-Gesetze?", text: "Die <strong>Kommission schlägt vor</strong>, das <strong>Europäische Parlament</strong> und der <strong>Rat der EU</strong> entscheiden <strong>gleichberechtigt</strong> (ordentliches Gesetzgebungsverfahren, Art. 294 AEUV). Eine <strong>Verordnung</strong> gilt sofort in allen Mitgliedstaaten, eine <strong>Richtlinie</strong> muss erst von den nationalen Parlamenten umgesetzt werden." },
    { heading: "🎯 Die Lesungen", text: "<strong>1. Lesung:</strong> Das Parlament legt seinen Standpunkt fest. Billigt der Rat ihn, ist das Gesetz angenommen. Sonst legt der Rat einen eigenen Standpunkt vor. <strong>2. Lesung:</strong> Billigt das Parlament ihn, ist das Gesetz angenommen; lehnt es ihn mit der Mehrheit seiner Mitglieder ab, ist es gescheitert; ändert es ihn und der Rat übernimmt nicht alles, tagt der <strong>Vermittlungsausschuss</strong> (sechs Wochen). <strong>3. Lesung:</strong> Parlament und Rat müssen dem Kompromiss beide zustimmen – sonst ist das Gesetz gescheitert. Oft wird schon vorher im nicht öffentlichen <strong>Trilog</strong> verhandelt." },
    { heading: "🇩🇪 Und Deutschland?", text: "Im Rat der EU sitzt die <strong>Bundesregierung</strong>. <strong>Bundestag und Bundesrat</strong> wirken nach Art. 23 GG mit: Sie werden informiert, können Stellung nehmen und eine <strong>Subsidiaritätsrüge</strong> erheben, wenn sie meinen, die EU mische sich in Dinge ein, die die Mitgliedstaaten besser selbst regeln. Richtlinien setzt der Bundestag in deutsches Recht um." }
  ];
  C.flipper.game = {
    ends: ["Angenommen in 1. Lesung", "Angenommen in 2. Lesung", "Angenommen nach Vermittlung", "Gescheitert"],
    scenarios: [
      { text: "Die <b>Kommission</b> schlägt einheitliche Ladekabel für Handys vor. Das Parlament legt in 1. Lesung seinen Standpunkt fest – und der Rat der EU <b>billigt ihn ohne Änderungen</b>.",
        a: "Angenommen in 1. Lesung", fb: "Sind sich Parlament und Rat gleich einig, ist das Gesetz schon nach der 1. Lesung angenommen – heute der häufigste Fall. Meist wurde der Kompromiss vorher im „Trilog“ ausgehandelt (Parlament, Rat, Kommission, nicht öffentlich). Das geht schnell – Kritiker bemängeln, dass man kaum sieht, wer was durchgesetzt hat." },
      { text: "Der Rat ist mit dem Standpunkt des Parlaments nicht einverstanden und legt einen <b>eigenen Standpunkt</b> vor. Das Parlament <b>billigt diesen Standpunkt</b> in der 2. Lesung.",
        a: "Angenommen in 2. Lesung", fb: "Billigt das Parlament in 2. Lesung den Standpunkt des Rates, ist das Gesetz angenommen." },
      { text: "Das Parlament ändert in 2. Lesung den Standpunkt des Rates. Der Rat <b>übernimmt nicht alle Änderungen</b>. Ein Ausschuss aus Vertretern beider Seiten findet einen Kompromiss, dem beide in 3. Lesung zustimmen.",
        a: "Angenommen nach Vermittlung", fb: "Der Vermittlungsausschuss sucht den Kompromiss; Parlament und Rat müssen ihm anschließend zustimmen." },
      { text: "In der 2. Lesung <b>lehnt das Parlament</b> den Standpunkt des Rates <b>mit der Mehrheit seiner Mitglieder ab</b>.",
        a: "Gescheitert", fb: "Lehnt das Parlament mit absoluter Mehrheit ab, ist das Gesetz gescheitert. Im Rat entscheidet meist die qualifizierte Mehrheit: 55 % der Staaten, die 65 % der EU-Bevölkerung vertreten." }
    ]
  };
  C.flipper.game.scenarios.push(
    { text: "Die Kommission schlägt EU-weite Regeln für Schulbusse vor. Der <b>Bundestag</b> meint, das könnten die Länder besser selbst regeln, und erhebt eine <b>Subsidiaritätsrüge</b>. Nur wenige andere nationale Parlamente schließen sich an. Parlament und Rat einigen sich in 1. Lesung.",
      a: "Angenommen in 1. Lesung", fb: "Bundestag und Bundesrat prüfen jeden EU-Vorschlag auf Subsidiarität (Art. 23 GG, Art. 12 EUV). Erst wenn ein Drittel der nationalen Parlamente rügt, muss die Kommission ihren Vorschlag überprüfen („Gelbe Karte“). Stoppen kann ein einzelnes Parlament das Gesetz nicht." },
    { text: "Parlament und Rat streiten in der 2. Lesung. Im <b>Vermittlungsausschuss</b> finden sie innerhalb von sechs Wochen <b>keinen gemeinsamen Text</b>.",
      a: "Gescheitert", fb: "Ohne Einigung im Vermittlungsausschuss ist das Gesetz gescheitert (Art. 294 AEUV). Gescheitert ist es auch, wenn Parlament oder Rat den Kompromiss in der 3. Lesung ablehnen." }
  );
  C.flipper.summary = "<b>Ordentliches Gesetzgebungsverfahren:</b> Die <b>Kommission</b> schlägt vor → <b>Parlament</b> (1. Lesung) → <b>Rat der EU</b> billigt oder ändert → bei Uneinigkeit 2. Lesung und notfalls <b>Vermittlungsausschuss</b> → Veröffentlichung im Amtsblatt. Parlament und Rat sind <b>gleichberechtigte Gesetzgeber</b>. Bundestag und Bundesrat können eine <b>Subsidiaritätsrüge</b> erheben (Art. 23 GG).";

  // ---------------- Gekürzte Infotafeln und Merksätze (didaktische Reduktion) ----------------
  // euroquest-j2/j2.js (Schmiede hat keine Infotafel und bleibt unverändert)

  // ---------- Ratshalle (Wer bin ich?) ----------
  C.ratshalle.infoCards = [
    { heading: "🏛️ Kommission und Parlament",
      text: "Die <strong>Kommission</strong> hat ein Mitglied pro Staat. Sie <strong>schlägt Gesetze vor</strong> und wacht als „Hüterin der Verträge“ über das EU-Recht. Das <strong>Parlament</strong> mit 720 Abgeordneten wird <strong>direkt gewählt</strong>, beschließt Gesetze und wählt die Kommissionspräsidentin." },
    { heading: "⚖️ Zwei Räte – nicht verwechseln!",
      text: "Im <strong>Rat der EU</strong> sitzen <strong>Fachminister</strong>, je nach Thema andere; er beschließt Gesetze <strong>mit dem Parlament</strong>. Im <strong>Europäischen Rat</strong> geben die <strong>Staats- und Regierungschefs</strong> bei Gipfeln die Richtung vor – <strong>Gesetze macht er nicht</strong>." },
    { heading: "🔍 EuGH – und eine Falle",
      text: "Der <strong>Europäische Gerichtshof</strong> in Luxemburg sorgt dafür, dass EU-Recht überall <strong>gleich ausgelegt</strong> wird. Der <strong>Europarat</strong> in Straßburg ist <strong>kein EU-Organ</strong>, sondern eine eigene Organisation von 46 Staaten für Menschenrechte." }
  ];
  C.ratshalle.summary = "<b>Kommission:</b> schlägt Gesetze vor · <b>Parlament</b> (direkt gewählt) und <b>Rat der EU</b> (Fachminister) beschließen sie · <b>Europäischer Rat:</b> Staats- und Regierungschefs, gibt die Richtung vor, keine Gesetze · <b>EuGH:</b> legt EU-Recht aus · <b>Europarat:</b> kein EU-Organ.";

  // ---------- Markthaus (Zollschalter) ----------
  C.markt.infoCards = [
    { heading: "🛒 Binnenmarkt: vier Grundfreiheiten",
      text: "Seit <strong>1993</strong> gilt der <strong>Binnenmarkt</strong>. Frei über die Grenze gehen: <strong>Waren</strong> – ohne Zoll · <strong>Personen</strong> – wohnen, arbeiten, studieren · <strong>Dienstleistungen</strong> – Aufträge wie Handwerk oder Beratung · <strong>Kapital</strong> – Geld anlegen, Aktien oder Wohnungen kaufen." },
    { heading: "🛂 Schengen",
      text: "Das <strong>Schengener Abkommen</strong> schafft die regulären <strong>Passkontrollen an den Binnengrenzen</strong> ab – auch mit Nicht-EU-Staaten wie der <strong>Schweiz</strong>. Ausnahme: <strong>befristete Kontrollen</strong>. Deutschland kontrolliert so seit 2015 an der Grenze zu Österreich, seit 2024 an allen Landgrenzen." }
  ];
  C.markt.summary = "<b>Binnenmarkt</b> (seit 1993): freier Verkehr von <b>Waren, Personen, Dienstleistungen und Kapital</b>. <b>Schengen:</b> keine regulären Passkontrollen an den Binnengrenzen, auch mit Nicht-EU-Staaten wie der Schweiz; befristete Kontrollen sind erlaubt.";

  // ---------- Flipper-Bau (Wo landet das Gesetz?) ----------
  C.flipper.infoCards = [
    { heading: "📜 Wer macht EU-Gesetze?",
      text: "Die <strong>Kommission schlägt vor</strong>. Das <strong>Parlament</strong> und der <strong>Rat der EU</strong> entscheiden <strong>gleichberechtigt</strong>. Oft einigen sich beide schon vorher mit der Kommission im nicht öffentlichen <strong>Trilog</strong>." },
    { heading: "🎯 1. und 2. Lesung",
      text: "<strong>1. Lesung:</strong> Billigt der Rat die Position des Parlaments: <strong>angenommen</strong>. Sonst legt er eine eigene vor. <strong>2. Lesung:</strong> Billigt das Parlament sie: <strong>angenommen</strong>. Lehnt es sie <strong>mit der Mehrheit aller Mitglieder</strong> ab: <strong>gescheitert</strong>." },
    { heading: "🤝 Vermittlung – und Deutschland",
      text: "Ändert das Parlament die Rats-Position und der Rat zieht nicht mit, sucht der <strong>Vermittlungsausschuss</strong> einen Kompromiss. Findet er keinen oder lehnt eine Seite ihn ab: <strong>gescheitert</strong>. Eine <strong>Subsidiaritätsrüge</strong> des Bundestags allein stoppt kein Gesetz." }
  ];
  C.flipper.summary = "<b>Kommission</b> schlägt vor → <b>Parlament</b> (1. Lesung) → <b>Rat der EU</b> billigt oder ändert → 2. Lesung → notfalls <b>Vermittlungsausschuss</b>. <b>Gescheitert:</b> Parlament lehnt in 2. Lesung mit der Mehrheit aller Mitglieder ab oder Vermittlung scheitert.";

  // Szenarien 2 und 3 ohne verratene Lösung: Die Regel muss angewendet werden
  C.flipper.game.scenarios[1].text = "Der Rat ist mit dem Standpunkt des Parlaments nicht einverstanden und legt einen <b>eigenen Standpunkt</b> vor. In der 2. Lesung findet sich im Parlament <b>keine Mehrheit</b>, die ihn ablehnen oder ändern will.";
  C.flipper.game.scenarios[1].fb = "Lehnt das Parlament den Standpunkt des Rates in der 2. Lesung nicht mit der Mehrheit seiner Mitglieder ab und ändert ihn nicht, gilt das Gesetz als angenommen – in der Fassung des Rates.";
  C.flipper.game.scenarios[2].text = "Das Parlament ändert in der 2. Lesung den Standpunkt des Rates. Der Rat übernimmt <b>nur einen Teil</b> der Änderungen. Nach zähen Verhandlungen stimmen am Ende <b>beide einem gemeinsamen Text</b> zu.";
  C.flipper.game.scenarios[2].fb = "Übernimmt der Rat nicht alle Änderungen, tagt der Vermittlungsausschuss. Stimmen Parlament und Rat seinem Kompromiss in der 3. Lesung zu, ist das Gesetz angenommen.";
};
