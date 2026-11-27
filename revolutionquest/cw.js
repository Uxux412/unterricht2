// Revolution Quest – Inhalte (Story, Quellen, Rätsel, Merksätze).
// Quellen: Sieyès (1789), Ballhausschwur (20.6.1789), Ludwig XVI. (23.6.1789), Erklärung der Menschen- und Bürgerrechte (1789),
// Robespierre (5.2.1794), Olympe de Gouges (1791), Proklamation der Konsuln (15.12.1799), Code civil (1804). Alle gemeinfrei.
// Deutsche Fassungen = eigene Arbeitsübersetzungen; das Original lässt sich auf jeder Karte aufklappen.
window.CW = {
  key: "revolutionquest-v1",
  leitfrage: "Wie kam Napoleon an die Macht?",
  leitfrageKorrigiert: 'Wie kam Napoleon an die Macht <span class="rot">– und warum jubelten ihm so viele Franzosen zu?</span>',
  twistGrund: "Denn Napoleon nahm die Macht nicht gegen ganz Frankreich: Nach Jahren voller Umsturz, Krieg und Terror wollten viele vor allem Ordnung.",

  introPages: [
    ["FLUGBLATT", "DRUCKEREI ROUX, PARIS", "AN LEHRLING KS001", "", "Die Lage ist ernst:", "Die Klassenarbeit rückt näher.", "Thema: die Französische Revolution."],
    ["1789 herrscht in Frankreich", "ein König mit fast unbegrenzter", "Macht. Der Staat ist pleite.", "15 Jahre später krönt sich", "ein General zum Kaiser:", "Napoleon Bonaparte.", "", "Was ist dazwischen passiert?"],
    ["DEIN AUFTRAG:", "OPERATION BRUMAIRE", "", "Kläre die Leitfrage:", "WIE KAM NAPOLEON", "AN DIE MACHT?", "", "Vier Häuser, vier Beweise.", "Die Codes knackst du durch", "Verstehen, nicht durch Suchen."],
    ["SO GEHT'S:", "", "Häuser der Reihe nach besuchen.", "📖 Infotafel lesen,", "🧩 am Tisch das Rätsel lösen,", "🕯️ [U] Kerze: Geheimtinte lesen,", "🔐 Tresor-Code knacken.", "💼 [I] Tasche: deine Beweise.", "", "Erstes Ziel: Versailles.", "– MEISTER ROUX"]
  ],

  vermutung: {
    frage: "Bevor du losgehst: Was vermutest du? Wie kam Napoleon an die Macht?",
    optionen: [
      { id: "a", t: "Er nutzte das Durcheinander nach Revolution und Krieg.",
        aufloesung: "Gut vermutet: Die Revolution radikalisierte sich, dazu kam Krieg. Viele wollten Ordnung – und ein siegreicher General versprach sie." },
      { id: "b", t: "Die Franzosen haben ihn frei gewählt.",
        aufloesung: "Nein: Napoleon kam 1799 durch einen Staatsstreich an die Macht. Die Volksabstimmungen danach hatten keine Alternative, die Zahlen wurden geschönt." },
      { id: "c", t: "Er war ein Verwandter des Königs.",
        aufloesung: "Nein: Napoleon stammte aus einer Familie des niederen Adels auf Korsika. Aufgestiegen ist er in der Armee der Revolution." },
      { id: "d", t: "Das Ausland hat ihn eingesetzt.",
        aufloesung: "Im Gegenteil: Napoleon wurde berühmt, weil er gegen das Ausland Kriege gewann." }
    ]
  },

  ranks: ["Lehrling", "Setzer/in", "Drucker/in", "Flugblattschreiber/in", "Chronist/in", "Meisterdrucker/in der KS1 🏆"],

  // Fahnen der Koalitionskriege (vereinfacht): Frankreich gegen die Monarchien Europas
  flagStages: [["FR"], ["AT", "PR"], ["GB", "NL", "ES"], ["SA", "NA", "PT"], ["RU", "OT"]],
  flagTitel: "Kriegskarte",
  flagMerksatz: "Ab <b>1792</b> führt das revolutionäre Frankreich Krieg gegen <b>Bündnisse (Koalitionen)</b> der europäischen Monarchien. Zur <b>1. Koalition</b> (1792–1797) gehören Österreich, Preußen, Großbritannien, die Niederlande, Spanien, Sardinien, Neapel und Portugal, zur <b>2. Koalition</b> (1798–1802) auch Russland und das Osmanische Reich. Der Krieg treibt die Revolution in den Terror – und macht Generäle wie <b>Napoleon</b> berühmt.",

  urkunde: "Hiermit wird bestätigt: Lehrling KS001 hat vier Schauplätze der Französischen Revolution untersucht, vier Beweise gesichert und die Leitfrage beantwortet.",
  urkundePS: "PS: Die Druckerschwärze geht in drei Wochen wieder ab. Vielleicht.",

  content: {
    // ------------------------------------------------------------------ Haus 1
    truman: {
      title: "Haus 1: Versailles – Mission DRITTER STAND",
      ort: "VERSAILLES, JUNI 1789",
      ankunft: "Der Staat ist pleite. Der König hat die Generalstände einberufen, zum ersten Mal seit 1614. Doch Adel und Geistlichkeit (1. und 2. Stand) sollen getrennt vom Dritten Stand abstimmen. Der Dritte Stand will das nicht mehr hinnehmen.",
      kontakt: { name: "Saaldiener Lucien", text: "„Hier fliegen Flugblätter und Reden durcheinander. Dummerweise habe ich alle Zettel auf einen Haufen geworfen. Pass auf: Beide Seiten benutzen dieselben Wörter.“" },
      infoSource: "📖 Infotafel · Quellen in eigener Arbeitsübersetzung, Original zum Aufklappen",
      infoLead: "Lies die drei Karten. Danach knackst du am Tisch das Schloss.",
      infoCards: [
        { heading: "📅 1789: Was passiert?", max: 48,
          text: "<strong>Januar:</strong> Abbé Sieyès veröffentlicht die Flugschrift „Was ist der Dritte Stand?“. <strong>5. Mai:</strong> Die Generalstände treten in Versailles zusammen. Der Dritte Stand (rund 98 % der Menschen) hat nur eine von drei Stimmen. <strong>17. Juni:</strong> Er erklärt sich zur <strong>Nationalversammlung</strong>. <strong>20. Juni:</strong> Ballhausschwur. <strong>23. Juni:</strong> Antwort des Königs." },
        { heading: "📜 Sieyès (Januar 1789) und der Ballhausschwur (20.6.1789)", max: 80,
          text: "Sieyès: „Was ist der Dritte Stand? Alles. Was ist er bisher in der politischen Ordnung gewesen? Nichts. Was verlangt er? Etwas darin zu werden. […] Alles, was nicht zum Dritten Stand gehört, kann sich nicht als Teil der Nation betrachten.“<br><br>Ballhausschwur: „Die Nationalversammlung […] beschließt, dass alle ihre Mitglieder sofort den feierlichen Eid leisten, sich niemals zu trennen […], bis die Verfassung des Königreichs geschaffen und auf feste Grundlagen gestellt ist.“",
          quelle: "Emmanuel Joseph Sieyès: Qu'est-ce que le Tiers-État?, 1789; Beschluss der Nationalversammlung vom 20.6.1789. Auszüge, eigene Arbeitsübersetzung. Gemeinfrei.",
          orig: "« Qu'est-ce que le Tiers-État ? Tout. Qu'a-t-il été jusqu'à présent dans l'ordre politique ? Rien. Que demande-t-il ? À y devenir quelque chose. […] Tout ce qui n'est pas le Tiers ne peut pas se regarder comme étant de la nation. »<br><br>« L'Assemblée nationale […] arrête que tous les membres de cette assemblée prêteront, à l'instant, serment solennel de ne jamais se séparer, et de se rassembler partout où les circonstances l'exigeront, jusqu'à ce que la constitution du royaume soit établie et affermie sur des fondements solides. »" },
        { heading: "📜 Ludwig XVI. vor den drei Ständen, 23.6.1789", max: 80,
          text: "„Der König will, dass die alte Unterscheidung der drei Stände des Staates in vollem Umfang erhalten bleibt, da sie wesentlich mit der Verfassung seines Königreichs verbunden ist. […]“<br><br>Am Ende der Sitzung: „Ich befehle Ihnen, meine Herren, sich sofort zu trennen und sich morgen früh jeder in den Saal seines Standes zu begeben.“",
          quelle: "Erklärung des Königs und Schlussrede in der königlichen Sitzung vom 23.6.1789. Auszüge, eigene Arbeitsübersetzung. Gemeinfrei.",
          orig: "« Le Roi veut que l'ancienne distinction des trois ordres de l'État soit conservée en son entier, comme essentiellement liée à la constitution de son royaume. »<br><br>« Je vous ordonne, Messieurs, de vous séparer tout de suite, et de vous rendre demain matin chacun dans les chambres affectées à votre ordre. »" }
      ],
      intro: "Am Tisch wartet ein Schloss mit sechs Rädchen. Jedes Rädchen zeigt einen Satz aus den Quellen. Stell es auf die richtige Seite.",
      mode: "schloss",
      game: {
        left: "König · Ludwig XVI.", right: "Dritter Stand",
        items: [
          { t: "„Was ist der Dritte Stand? Alles.“", a: "R",
            ok: "Sieyès: Der Dritte Stand ist die eigentliche Nation.", bad: "Nein – das ist Sieyès' berühmte Flugschrift für den Dritten Stand." },
          { t: "„… dass die alte Unterscheidung der drei Stände in vollem Umfang erhalten bleibt …“", a: "L",
            ok: "Der König will die Ständeordnung behalten.", bad: "Hier soll die alte Ordnung bleiben – das will der König." },
          { t: "„… sich niemals zu trennen, bis die Verfassung des Königreichs geschaffen ist.“", a: "R",
            ok: "Ballhausschwur: Die Nationalversammlung bleibt zusammen.", bad: "Das ist der Ballhausschwur der Nationalversammlung." },
          { t: "„Ich befehle Ihnen, meine Herren, sich sofort zu trennen …“", a: "L",
            ok: "Der König befiehlt – und die Abgeordneten bleiben trotzdem sitzen.", bad: "„Ich befehle“ – so spricht nur der König." },
          { t: "„Alles, was nicht zum Dritten Stand gehört, kann sich nicht als Teil der Nation betrachten.“", a: "R",
            ok: "Sieyès schließt Adel und Geistlichkeit aus der Nation aus.", bad: "Das ist Sieyès: Für ihn gehören die Privilegierten nicht zur Nation." },
          { t: "„… da sie wesentlich mit der Verfassung seines Königreichs verbunden ist.“", a: "L",
            ok: "Gut erkannt: Auch der König spricht von „Verfassung“ – er meint aber die alte Ordnung mit drei Ständen.", bad: "Klingt nach Nationalversammlung – ist aber der König! Er meint mit „Verfassung“ die alte Ständeordnung." }
        ]
      },
      tresor: {
        frage: "Welches Wort benutzen der König und der Dritte Stand beide – meinen damit aber etwas ganz anderes?",
        accept: ["VERFASSUNG"], code: "VERFASSUNG",
        tipps: ["Vergleiche den Ballhausschwur (Karte 2) mit dem ersten Satz des Königs (Karte 3).",
                "Der Dritte Stand will sie erst schaffen, der König will die alte behalten."],
        erklaerung: "Beide reden von der Verfassung: Der König meint die alte Ordnung der drei Stände, die Nationalversammlung eine neue, geschriebene Ordnung, in der die Nation herrscht."
      },
      uv: { text: "Wer profitiert? Sieyès war selbst Geistlicher, also Mitglied des 1. Standes – und schrieb trotzdem für den Dritten Stand. Wer im Dritten Stand hatte Zeit und Geld, Flugschriften zu lesen und Abgeordneter zu werden: Bauern oder Anwälte und Kaufleute?" },
      beweis: { icon: "📜", name: "Flugschrift", text: "„Was ist der Dritte Stand?“, zerknittert, mit Notizen am Rand." },
      summary: "<b>Ständegesellschaft:</b> 1. Stand (Geistlichkeit) und 2. Stand (Adel) haben Privilegien, der 3. Stand (rund 98 %) trägt die Steuern. · <b>17.6.1789:</b> Der Dritte Stand erklärt sich zur <b>Nationalversammlung</b>, am <b>20.6.</b> schwört er, sich nicht zu trennen, bis eine <b>Verfassung</b> da ist (Ballhausschwur). · Der König befiehlt die Trennung – vergeblich.",
      funkspruch: "MEISTER ROUX AN KS001: Flugschrift gesichert. Der König hat nachgegeben, vorerst. Nächstes Ziel: das Rathaus von Paris. Dort bleibt es nicht bei Worten.",
      bonus: {
        titel: "Bonus-Akte: Wer spricht für den Dritten Stand?",
        text: "Die rund 600 Abgeordneten des Dritten Standes waren fast nur Anwälte, Beamte, Kaufleute und Gelehrte. Bauern und Handwerker – die große Mehrheit – saßen kaum im Saal.",
        frage: "Was folgt daraus?",
        options: [
          { t: "Für den Dritten Stand sprach vor allem das gebildete Bürgertum – mit eigenen Interessen.", ok: true, fb: "Richtig: Das Bürgertum führte die Revolution an. Ob Bauern und Arme dasselbe wollten, ist eine eigene Frage." },
          { t: "Bauern und Handwerker durften nach dem Gesetz gar nicht gewählt werden.", ok: false, fb: "Ein Verbot gab es nicht. Aber wer lesen, reden und nach Versailles reisen konnte, hatte Vorteile." },
          { t: "Das spielte keine Rolle, denn alle im Dritten Stand wollten dasselbe.", ok: false, fb: "Ein reicher Kaufmann und ein armer Tagelöhner hatten oft ganz unterschiedliche Sorgen." }
        ]
      }
    },

    // ------------------------------------------------------------------ Haus 2
    stellvertreter: {
      title: "Haus 2: Rathaus von Paris – Mission UMSTURZ",
      ort: "RATHAUS VON PARIS, 1789–1794",
      ankunft: "Im Rathaus stapeln sich Akten aus fünf Jahren. Draußen wechseln die Parolen schneller, als der Meister drucken kann. Wer heute ein Held ist, kann morgen ein Verräter sein.",
      kontakt: { name: "Schreiberin Margot", text: "„Ich ordne die Akten nach Jahren. Lies genau: Wer hat die Macht, welche Rechte haben die Bürger – und wie endet jeder Abschnitt?“" },
      infoSource: "📖 Infotafel · eigene Darstellung nach bpb und LeMO",
      infoLead: "<b>Radikalisierung:</b> Die Forderungen und Mittel der Revolution werden immer schärfer. Lies die drei Akten.",
      infoCards: [
        { heading: "🗂️ Akte 1789: Bastille und Menschenrechte", max: 52,
          text: "Am <strong>14. Juli</strong> stürmen Pariser die <strong>Bastille</strong>, ein Gefängnis und Waffenlager. Am <strong>4. August</strong> schafft die Nationalversammlung die Vorrechte von Adel und Kirche ab, am <strong>26. August</strong> beschließt sie die <strong>Erklärung der Menschen- und Bürgerrechte</strong>. Im Oktober holen Pariser Frauen den König nach Paris." },
        { heading: "🗂️ Akte 1791: Verfassung", max: 52,
          text: "Im Juni flieht der König und wird in <strong>Varennes</strong> erkannt. Im September tritt die <strong>Verfassung</strong> in Kraft: Frankreich wird eine <strong>konstitutionelle Monarchie</strong>. Gesetze macht die gewählte Versammlung, der König kann sie nur aufschieben (Veto). Wählen dürfen nur Männer, die genug Steuern zahlen. 1792 beginnt der Krieg gegen Österreich und Preußen." },
        { heading: "🗂️ Akte 1793/94: Republik und Terror", max: 56,
          text: "Im August 1792 stürmen Pariser das Schloss des Königs, im September wird Frankreich <strong>Republik</strong>. Am <strong>21. Januar 1793</strong> wird Ludwig XVI. hingerichtet. Ein <strong>Wohlfahrtsausschuss</strong> um <strong>Robespierre</strong> regiert mit fast unbegrenzter Macht. Wer verdächtig ist, wird verhaftet; rund 17.000 Menschen werden nach Urteil hingerichtet. Im <strong>Juli 1794</strong> wird Robespierre gestürzt und selbst hingerichtet." }
      ],
      intro: "Auf dem Tisch liegen drei Akten. Ordne jeder Akte die richtigen Angaben zu.",
      mode: "akten",
      game: {
        fragen: ["Wer hat die Macht?", "Was gilt für die Bürger?", "Wie endet dieser Abschnitt?"],
        akten: [
          { name: "1789: Bastille und Menschenrechte", antworten: [
            [{ t: "Der König, aber die Nationalversammlung macht ihm die Macht streitig", ok: true }, { t: "Ein Wohlfahrtsausschuss mit fast unbegrenzter Macht", fb: "Den gibt es erst 1793." }, { t: "Eine gewählte Versammlung, der König hat nur ein Veto", fb: "So steht es erst in der Verfassung von 1791." }],
            [{ t: "Vorrechte fallen; Menschen sind frei und gleich an Rechten", ok: true }, { t: "Nur Männer mit genug Steuern dürfen wählen", fb: "Das regelt die Verfassung von 1791." }, { t: "Verdächtige werden ohne langen Prozess verhaftet", fb: "Das gehört zum Terror 1793/94." }],
            [{ t: "Pariser Frauen holen den König von Versailles nach Paris", ok: true }, { t: "Der König flieht und wird in Varennes erkannt", fb: "Das war 1791." }, { t: "Robespierre wird gestürzt und hingerichtet", fb: "Das war 1794." }]
          ] },
          { name: "1791: Verfassung", antworten: [
            [{ t: "Eine gewählte Versammlung, der König hat nur ein Veto", ok: true }, { t: "Der König allein, wie vor 1789", fb: "Nein – die Verfassung schränkt ihn ein." }, { t: "Ein Wohlfahrtsausschuss mit fast unbegrenzter Macht", fb: "Den gibt es erst 1793." }],
            [{ t: "Nur Männer mit genug Steuern dürfen wählen", ok: true }, { t: "Alle Männer und Frauen dürfen wählen", fb: "Frauen bekommen in Frankreich erst 1944 das Wahlrecht." }, { t: "Adel und Kirche behalten ihre Vorrechte", fb: "Die wurden schon im August 1789 abgeschafft." }],
            [{ t: "Krieg gegen Österreich und Preußen (1792)", ok: true }, { t: "Pariser Frauen holen den König nach Paris", fb: "Das war 1789." }, { t: "Robespierre wird gestürzt und hingerichtet", fb: "Das war 1794." }]
          ] },
          { name: "1793/94: Republik und Terror", antworten: [
            [{ t: "Ein Wohlfahrtsausschuss um Robespierre", ok: true }, { t: "Der König mit einem Veto", fb: "Der König ist im Januar 1793 hingerichtet worden." }, { t: "Napoleon als Erster Konsul", fb: "Das kommt erst 1799." }],
            [{ t: "Verdächtige werden verhaftet, Tausende hingerichtet", ok: true }, { t: "Vorrechte fallen, die Menschenrechte werden erklärt", fb: "Das war 1789." }, { t: "Nur Männer mit genug Steuern dürfen wählen", fb: "Das war 1791." }],
            [{ t: "Robespierre wird gestürzt und hingerichtet (Juli 1794)", ok: true }, { t: "Der König flieht und wird in Varennes erkannt", fb: "Das war 1791." }, { t: "Napoleon krönt sich zum Kaiser", fb: "Das war erst 1804." }]
          ] }
        ]
      },
      tresor: {
        frage: "Wie wurde die Revolution von Akte zu Akte? (Ein Wort, Steigerungsform)",
        accept: ["RADIKALER", "RADIKAL", "RADIKALISIERT", "RADIKALISIERUNG"], code: "RADIKALER",
        tipps: ["Lies oben auf der Infotafel, wie man diese Entwicklung nennt.",
                "Radikal heißt: bis an die Wurzel. Die Steigerung von radikal ist …"],
        erklaerung: "Die Revolution wurde immer radikaler: von der Verfassung mit König über die Republik bis zum Terror."
      },
      uv: { text: "Wer profitiert? Ab 1792 ist Krieg. Wer Gegner zu „Verrätern“ und Helfern des Feindes erklärt, kann sie leichter ausschalten. Wem nützt der Krieg im Inneren?" },
      beweis: { icon: "🗂️", name: "Aktenbündel", text: "Drei Akten, auf der letzten ein roter Stempel: „VERDÄCHTIG“." },
      summary: "<b>1789:</b> Sturm auf die Bastille (14.7.), Ende der Vorrechte (4.8.), <b>Menschen- und Bürgerrechte</b> (26.8.). · <b>1791:</b> <b>konstitutionelle Monarchie</b>, Wahlrecht nur für Männer mit Steuern. · <b>1792–94:</b> Krieg, <b>Republik</b>, Hinrichtung des Königs (21.1.1793), <b>Terror</b> unter Robespierre. · Die Revolution wird immer <b>radikaler</b>.",
      funkspruch: "MEISTER ROUX AN KS001: Akten geordnet. ✍️ KORREKTUR: Unsere Leitfrage war zu einfach. Ab sofort gilt: Wie kam Napoleon an die Macht – und warum jubelten ihm so viele Franzosen zu? Nächstes Ziel: der Revolutionsplatz, 1794.",
      twist1: true,
      bonus: {
        titel: "Bonus-Akte: Die Revolution frisst ihre Kinder",
        text: "Danton, einer der wichtigsten Revolutionäre, wurde im April 1794 selbst hingerichtet. Auf dem Weg zur Guillotine soll er gesagt haben, Robespierre werde ihm bald folgen. Drei Monate später starb Robespierre unter derselben Klinge. Der Satz „Die Revolution frisst ihre Kinder“ stammt von dem Girondisten Vergniaud (1793), der ebenfalls hingerichtet wurde.",
        frage: "Was bedeutet der Satz?",
        options: [
          { t: "Die Revolutionäre richteten sich am Ende gegenseitig hin.", ok: true, fb: "Richtig: Wer nicht radikal genug war oder zu mächtig wurde, galt bald selbst als Verräter." },
          { t: "Die Revolution ließ Kinder für sich in den Krieg ziehen.", ok: false, fb: "Gemeint sind die Anführer der Revolution, nicht wirkliche Kinder." },
          { t: "Die Kinder des Adels wurden alle hingerichtet.", ok: false, fb: "Nein – gemeint sind die Revolutionäre selbst." }
        ]
      }
    },

    // ------------------------------------------------------------------ Haus 3
    washington: {
      title: "Haus 3: Revolutionsplatz – Mission TUGEND",
      ort: "REVOLUTIONSPLATZ, FEBRUAR 1794",
      ankunft: "Auf dem Platz, auf dem der König hingerichtet wurde, steht die Guillotine. Im Konvent, dem Parlament der Republik, hat Robespierre gerade eine lange Rede gehalten. Am Pranger hängt ein Lernbild, das die Revolution feiert.",
      kontakt: { name: "Zeitungsverkäufer Jules", text: "„Freiheit! Gleichheit! Und jeden Tag neue Verdächtige. Robespierre sagt, das sei alles Gerechtigkeit. Lies, wie er es begründet.“" },
      infoSource: "📖 Infotafel · Quellen in eigener Arbeitsübersetzung, Original zum Aufklappen",
      infoLead: "Lies die drei Karten. Danach untersuchst du am Tisch das Lernbild.",
      infoCards: [
        { heading: "⏱️ Vom Krieg zum Terror 1792–1794", max: 40,
          text: "<strong>April 1792</strong> Krieg gegen Österreich, bald auch Preußen · <strong>September 1792</strong> Republik · <strong>Januar 1793</strong> Hinrichtung des Königs, danach Krieg gegen fast ganz Europa und Aufstände im Inneren · <strong>September 1793</strong> Gesetz über die Verdächtigen · <strong>5. Februar 1794</strong> Robespierres Rede vor dem Konvent." },
        { heading: "📜 Erklärung der Menschen- und Bürgerrechte, 26.8.1789", max: 70,
          text: "Art. 1: „Die Menschen werden frei und gleich an Rechten geboren und bleiben es.“<br>Art. 9: „Da jeder Mensch so lange als unschuldig gilt, bis er für schuldig erklärt worden ist, soll jede Härte, die nicht notwendig ist, um sich seiner Person zu versichern, durch das Gesetz streng unterbunden werden, wenn seine Verhaftung für unumgänglich erachtet wird.“",
          quelle: "Déclaration des droits de l'homme et du citoyen, 26.8.1789, Art. 1 und 9. Eigene Arbeitsübersetzung. Gemeinfrei.",
          orig: "Art. 1 : « Les hommes naissent et demeurent libres et égaux en droits. »<br>Art. 9 : « Tout homme étant présumé innocent jusqu'à ce qu'il ait été déclaré coupable, s'il est jugé indispensable de l'arrêter, toute rigueur qui ne serait pas nécessaire pour s'assurer de sa personne doit être sévèrement réprimée par la loi. »" },
        { heading: "📜 Robespierre vor dem Konvent, 5.2.1794", max: 80,
          text: "„Wenn die Triebfeder der Volksregierung im Frieden die Tugend ist, so ist die Triebfeder der Volksregierung in der Revolution zugleich die Tugend und der Terror: die Tugend, ohne die der Terror verhängnisvoll ist, der Terror, ohne den die Tugend machtlos ist. Der Terror ist nichts anderes als die schnelle, strenge, unbeugsame Gerechtigkeit; er ist also ein Ausfluss der Tugend.“",
          quelle: "Rede „Über die Grundsätze der politischen Moral“, 5.2.1794 (17. Pluviôse II), Auszug, eigene Arbeitsübersetzung. Gemeinfrei.",
          orig: "« Si le ressort du gouvernement populaire dans la paix est la vertu, le ressort du gouvernement populaire en révolution est à la fois la vertu et la terreur : la vertu, sans laquelle la terreur est funeste ; la terreur, sans laquelle la vertu est impuissante. La terreur n'est autre chose que la justice prompte, sévère, inflexible ; elle est donc une émanation de la vertu. »" }
      ],
      intro: "Am Pranger hängt ein Lernbild zur Revolution in Paris. Tippe die drei markierten Stellen an und deute sie mit Hilfe der Quellen.",
      mode: "hotspot",
      game: {
        bild: "washington",
        hotspots: [
          { x: 95, y: 70, r: 50, label: "Bastille",
            frage: "Warum wurde die Bastille zum Symbol der Revolution?",
            options: [
              { t: "Sie stand für die Willkür des Königs: Er konnte Menschen ohne Prozess einsperren lassen.", ok: true, fb: "Richtig: Mit einem königlichen Haftbefehl kam man ohne Urteil hinein. Art. 9 der Menschenrechte richtet sich genau dagegen." },
              { t: "Dort saßen Tausende Bauern gefangen, die ihre Steuern nicht bezahlt hatten.", ok: false, fb: "Am 14.7.1789 saßen dort nur sieben Gefangene. Wichtig war das Symbol – und das Waffenlager." },
              { t: "In ihr wohnte der König, bevor er nach Versailles zog.", ok: false, fb: "Nein – die Bastille war eine Festung und ein Staatsgefängnis." }
            ] },
          { x: 250, y: 150, r: 46, label: "Marianne",
            frage: "Wofür steht die Frau mit der roten Mütze?",
            options: [
              { t: "Sie ist eine Sinnbild-Figur (Allegorie) für Freiheit und Republik.", ok: true, fb: "Richtig: Marianne mit der Jakobinermütze verkörpert die Republik. Wirkliche Frauen durften trotzdem nicht wählen." },
              { t: "Sie ist Königin Marie-Antoinette, die das Volk anführt.", ok: false, fb: "Im Gegenteil – Marie-Antoinette wurde im Oktober 1793 hingerichtet." },
              { t: "Sie ist eine Abgeordnete der Nationalversammlung.", ok: false, fb: "Frauen saßen nicht in den Versammlungen der Revolution." }
            ] },
          { x: 420, y: 125, r: 42, label: "Guillotine",
            frage: "Wie passt die Guillotine zur Erklärung der Menschenrechte?",
            options: [
              { t: "Gar nicht gut: Im Terror wurden Verdächtige schnell verurteilt, obwohl Art. 9 die Unschuldsvermutung verspricht.", ok: true, fb: "Richtig: Robespierre nennt das „schnelle“ Gerechtigkeit. Art. 9 verlangt das Gegenteil." },
              { t: "Sehr gut: Die Menschenrechte erlauben ausdrücklich, Verräter ohne Prozess hinzurichten.", ok: false, fb: "Lies Art. 9 noch einmal: Jeder gilt als unschuldig, bis er verurteilt ist." },
              { t: "Gar nicht: Die Guillotine wurde erst unter Napoleon gebaut.", ok: false, fb: "Nein – die Guillotine war ab 1792 im Einsatz." }
            ] }
        ],
        schluss: {
          frage: "Und jetzt Quellenkritik am Lernbild: Bastille und Guillotine stehen hier gleichzeitig auf einem Bild. Was stimmt daran nicht?",
          options: [
            { t: "Zwischen dem Sturm auf die Bastille (1789) und dem Terror (1793/94) liegen Jahre – das Bild zieht sie zu einem Moment zusammen.", ok: true, fb: "Richtig: Das Bild verdichtet die ganze Revolution. Außerdem wurde die Bastille nach 1789 abgerissen – 1794 stand sie gar nicht mehr." },
            { t: "Nichts – an einem einzigen Tag im Jahr 1789 geschah das alles zugleich.", ok: false, fb: "Nein – die Guillotine wurde erst 1792 eingeführt." },
            { t: "Die Bastille stand gar nicht in Paris, sondern in Versailles.", ok: false, fb: "Doch, die Bastille stand im Osten von Paris." }
          ]
        }
      },
      tresor: {
        frage: "Was ist der Terror laut Robespierre? Such das Hauptwort auf Karte 3: „nichts anderes als die schnelle, strenge, unbeugsame …“",
        accept: ["GERECHTIGKEIT"], code: "GERECHTIGKEIT",
        tipps: ["Lies den letzten Satz von Karte 3.", "Robespierre nennt den Terror eine Form von …"],
        erklaerung: "Robespierre rechtfertigt den Terror als Gerechtigkeit. Damit bricht die Revolution ihr eigenes Versprechen aus Art. 9."
      },
      uv: { text: "Wer profitiert? Robespierre spricht vor dem Konvent, Frankreich ist im Krieg mit halb Europa. Wer bestimmt, wer „tugendhaft“ ist – und wer „verdächtig“?" },
      beweis: { icon: "🎀", name: "Kokarde", text: "Eine blau-weiß-rote Kokarde, etwas angesengt." },
      summary: "<b>Terror</b> (1793/94): Der Wohlfahrtsausschuss lässt Verdächtige verhaften und hinrichten. · <b>Robespierre</b> (5.2.1794): Tugend und Terror gehören zusammen, Terror sei „schnelle Gerechtigkeit“. · Das widerspricht der <b>Unschuldsvermutung</b> (Art. 9 der Menschenrechte von 1789). · Bilder der Revolution <b>verdichten</b> oft Jahre zu einem Moment.",
      funkspruch: "MEISTER ROUX AN KS001: Robespierre ist gestürzt, der Terror vorbei. Die neue Regierung, das Direktorium, ist schwach, der Krieg geht weiter. Ein junger General feiert Sieg um Sieg: Bonaparte. Nächstes Ziel: der Palast der Konsuln.",
      bonus: {
        titel: "Bonus-Akte: Olympe de Gouges",
        text: "1791 veröffentlichte Olympe de Gouges eine „Erklärung der Rechte der Frau und Bürgerin“. Art. 1: „Die Frau wird frei geboren und bleibt dem Manne gleich an Rechten.“ Art. 10: „Die Frau hat das Recht, das Schafott zu besteigen; sie muss gleichermaßen das Recht haben, die Rednertribüne zu besteigen.“ Am 3. November 1793 wurde sie hingerichtet.",
        frage: "Was kritisiert Olympe de Gouges an der Revolution?",
        options: [
          { t: "Die Menschenrechte von 1789 galten in Wahrheit nur für Männer.", ok: true, fb: "Richtig: Frauen durften sterben wie Männer, aber nicht mitbestimmen. In Frankreich wählten Frauen erst 1945 zum ersten Mal." },
          { t: "Die Revolution war zu radikal und sollte den König zurückholen.", ok: false, fb: "Das war nicht ihr Hauptpunkt. Sie forderte gleiche Rechte für Frauen." },
          { t: "Frauen sollten nicht hingerichtet werden dürfen.", ok: false, fb: "Im Gegenteil – sie nutzt das Schafott als Argument: Wer bestraft werden kann, soll auch mitreden dürfen." }
        ]
      }
    },

    // ------------------------------------------------------------------ Haus 4
    moskau: {
      title: "Haus 4: Palast der Konsuln – Mission BRUMAIRE",
      ort: "PARIS, 1799–1804",
      ankunft: "Am 9. November 1799 (18. Brumaire) stürzt General Bonaparte mit Soldaten das Direktorium. Er wird Erster Konsul. Auf seinem Schreibtisch liegt ein altes Flugblatt von 1789: der Bauer, der Bischof und Adligen trägt. Prüfe, was sich seitdem wirklich verändert hat.",
      kontakt: { name: "Sekretär Fabien", text: "„Der Erste Konsul sagt: Die Revolution ist beendet. Er hat ein neues Gesetzbuch schreiben lassen. Schau dir das alte Flugblatt an und vergleiche.“" },
      infoSource: "📖 Infotafel · Quellen in eigener Arbeitsübersetzung, Original zum Aufklappen",
      infoLead: "Lies die drei Karten. Danach untersuchst du am Tisch das Lernbild.",
      infoCards: [
        { heading: "⏱️ Napoleons Weg 1793–1804", max: 45,
          text: "<strong>1793</strong> mit 24 Jahren General · <strong>1796/97</strong> Siege in Italien · <strong>1795–1799</strong> schwache Regierung (Direktorium), Krieg, Geldnot · <strong>9.11.1799</strong> Staatsstreich, Napoleon wird <strong>Erster Konsul</strong>; Volksabstimmung ohne Alternative, Ergebnis geschönt · <strong>1800</strong> die meisten Pariser Zeitungen werden verboten · <strong>1801</strong> Vertrag mit dem Papst (Konkordat) · <strong>21.3.1804</strong> <strong>Code civil</strong> · <strong>2.12.1804</strong> Kaiserkrönung." },
        { heading: "📜 Proklamation der Konsuln, 15.12.1799", max: 50,
          text: "„Bürger, die Revolution ist auf die Grundsätze festgelegt, mit denen sie begonnen hat. Sie ist beendet.“",
          quelle: "Proklamation der Konsuln an die Franzosen zur neuen Verfassung, 15.12.1799 (24. Frimaire VIII), Auszug, eigene Arbeitsübersetzung. Gemeinfrei.",
          orig: "« Citoyens, la Révolution est fixée aux principes qui l'ont commencée : elle est finie. »" },
        { heading: "📜 Code civil, 1804", max: 75,
          text: "Art. 8: „Jeder Franzose genießt die bürgerlichen Rechte.“<br>Art. 544: „Eigentum ist das Recht, Sachen auf die unbeschränkteste Weise zu nutzen und über sie zu verfügen, sofern man davon keinen durch Gesetze oder Verordnungen verbotenen Gebrauch macht.“<br>Art. 213: „Der Ehemann schuldet seiner Frau Schutz, die Frau ihrem Ehemann Gehorsam.“",
          quelle: "Code civil des Français, 1804, Art. 8, 544, 213. Eigene Arbeitsübersetzung. Gemeinfrei.",
          orig: "Art. 8 : « Tout Français jouira des droits civils. »<br>Art. 544 : « La propriété est le droit de jouir et disposer des choses de la manière la plus absolue, pourvu qu'on n'en fasse pas un usage prohibé par les lois ou par les règlemens. »<br>Art. 213 : « Le mari doit protection à sa femme, la femme obéissance à son mari. »" }
      ],
      intro: "Am Tisch liegt das alte Flugblatt von 1789. Tippe die drei markierten Stellen an: Was ist davon unter Napoleon noch übrig?",
      mode: "hotspot",
      game: {
        bild: "moskau",
        hotspots: [
          { x: 180, y: 140, r: 40, label: "Der Bauer",
            frage: "Muss der Bauer unter Napoleon die beiden noch tragen?",
            options: [
              { t: "Nein: Die Vorrechte sind seit 1789 weg, der Code civil sichert Gleichheit vor dem Gesetz und Eigentum.", ok: true, fb: "Richtig: Wer Land gekauft hatte, durfte es behalten (Art. 544). Deshalb hielten viele Bauern zu Napoleon." },
              { t: "Ja: Napoleon führt die Abgaben an Adel und Kirche wieder ein.", ok: false, fb: "Nein – das hätte ihm die Bauern zum Feind gemacht. Die Vorrechte kamen nicht zurück." },
              { t: "Nein, weil Napoleon alles Land an die Bauern verschenkt.", ok: false, fb: "Verschenkt hat er nichts. Er hat gesichert, was sie seit 1789 erworben hatten." }
            ] },
          { x: 220, y: 60, r: 38, label: "Der Bischof",
            frage: "Was wird aus der Kirche unter Napoleon?",
            options: [
              { t: "Sie darf wieder frei arbeiten, bekommt aber ihr Land und ihre Vorrechte nicht zurück; der Staat bezahlt die Priester.", ok: true, fb: "Richtig: So steht es im Konkordat von 1801. Napoleon versöhnt die Gläubigen, ohne die Revolution rückgängig zu machen." },
              { t: "Sie wird wieder 1. Stand und zahlt keine Steuern mehr.", ok: false, fb: "Nein – Stände gibt es nicht mehr." },
              { t: "Sie wird ganz verboten.", ok: false, fb: "Im Gegenteil: Napoleon schließt 1801 einen Vertrag mit dem Papst." }
            ] },
          { x: 285, y: 65, r: 38, label: "Der Adlige",
            frage: "Was wird aus dem Adel unter Napoleon?",
            options: [
              { t: "Die alten Vorrechte bleiben weg; Napoleon verteilt neue Ehrentitel – für Verdienste, nicht für Geburt.", ok: true, fb: "Richtig: 1802 gründet er die Ehrenlegion, 1808 einen neuen Adel. Titel ja, Steuerfreiheit nein." },
              { t: "Der alte Adel bekommt alle Rechte von vor 1789 zurück.", ok: false, fb: "Nein – Gleichheit vor dem Gesetz bleibt." },
              { t: "Alle Adligen werden hingerichtet.", ok: false, fb: "Nein – viele geflohene Adlige durften unter Napoleon sogar zurückkehren." }
            ] }
        ],
        schluss: {
          frage: "Und jetzt Quellenkritik: Napoleon sagt 1799, die Revolution sei „beendet“ und auf ihre Grundsätze festgelegt. Was verschweigt er?",
          options: [
            { t: "Dass die politische Freiheit verschwindet: Zeitungen werden verboten, Wahlen haben keine Auswahl, die Macht liegt bei ihm.", ok: true, fb: "Richtig: Gleichheit vor dem Gesetz bleibt, Freiheit und Mitbestimmung nicht. Dazu Art. 213: Frauen schulden Gehorsam." },
            { t: "Dass er die Vorrechte von Adel und Kirche wieder einführen will.", ok: false, fb: "Das tut er nicht – das zeigt das Lernbild." },
            { t: "Dass er den König zurückholen will.", ok: false, fb: "Nein – er krönt sich 1804 lieber selbst zum Kaiser." }
          ]
        }
      },
      tresor: {
        frage: "Was ist die Revolution laut Napoleon im Dezember 1799? (Karte 2, ein Wort)",
        accept: ["BEENDET", "ZUENDE", "VORBEI"], code: "BEENDET",
        tipps: ["Lies Karte 2.", "Der letzte Satz der Proklamation: „Sie ist …“"],
        erklaerung: "Napoleon erklärt die Revolution für beendet: Ihre Ergebnisse für die Gleichheit sichert er, die politische Freiheit beendet er."
      },
      uv: { text: "Wer profitiert? Bürger und Bauern hatten seit 1789 Land von Kirche und Adel gekauft. Art. 544 schützt ihr Eigentum. Wer hat also ein Interesse daran, dass Napoleon an der Macht bleibt?" },
      beweis: { icon: "📕", name: "Code civil", text: "Ein dickes Gesetzbuch, „Code civil des Français, 1804“." },
      summary: "<b>Staatsstreich</b> (9.11.1799): Napoleon stürzt das Direktorium und wird <b>Erster Konsul</b>, 1804 <b>Kaiser</b>. · Er erklärt die Revolution für <b>beendet</b>: Der <b>Code civil</b> sichert <b>Gleichheit vor dem Gesetz</b> und <b>Eigentum</b>, die Vorrechte kommen nicht zurück. · Dafür verschwinden <b>politische Freiheit</b> und Mitbestimmung; Frauen bleiben rechtlich untergeordnet.",
      funkspruch: "MEISTER ROUX AN KS001: Alle Akten liegen vor. Morgen krönt sich Bonaparte in Notre-Dame zum Kaiser. Komm in die Druckerei an der Brücke: Wir drucken das letzte Flugblatt.",
      bonus: {
        titel: "Bonus-Akte: Die Kaiserkrönung, 2.12.1804",
        text: "Papst Pius VII. ist nach Paris gekommen. Doch Napoleon setzt sich die Krone in Notre-Dame selbst auf. Der Maler Jacques-Louis David hält die Krönung in einem riesigen Gemälde fest – auf Napoleons Wunsch malt er sogar Napoleons Mutter ins Bild, die gar nicht dabei war.",
        link: { href: "https://commons.wikimedia.org/wiki/File:Jacques-Louis_David_-_The_Coronation_of_Napoleon_(1805-1807).jpg", t: "Davids Gemälde ansehen (Wikimedia Commons)" },
        frage: "Was zeigt die Selbstkrönung?",
        options: [
          { t: "Napoleon verdankt seine Macht niemandem außer sich selbst – auch nicht der Kirche.", ok: true, fb: "Richtig: Ein König von Gottes Gnaden wurde von der Kirche gekrönt. Napoleon zeigt: Ich habe mir die Macht selbst erarbeitet." },
          { t: "Der Papst hatte sich geweigert, die Krone anzufassen.", ok: false, fb: "Nein – der Ablauf war vorher abgesprochen. Napoleon wollte dieses Bild." },
          { t: "Napoleon wollte zeigen, dass er der Nachfolger Ludwigs XVI. ist.", ok: false, fb: "Im Gegenteil: Er wollte keine Fortsetzung der alten Königsherrschaft sein." }
        ]
      }
    },

    // ------------------------------------------------------------------ Finale
    buero: {
      title: "Druckerei an der Brücke – Finale LETZTES FLUGBLATT",
      ort: "DRUCKEREI ROUX, PONT NEUF",
      ankunft: "Der Pont Neuf ist die älteste Brücke von Paris. Auf ihr verkauften Händler und Straßensänger jahrhundertelang Lieder, Neuigkeiten und Flugblätter.",
      kontakt: { name: "Meister Roux, Drucker", text: "„Gute Arbeit, KS001. Leg deine vier Beweise auf den Tisch. Dann setzen wir zusammen das letzte Flugblatt – nur mit Belegen.“" },
      infoSource: "📖 Lagebericht",
      infoLead: "Lies den Lagebericht. Danach setzt du an der Druckerpresse deine Antwort.",
      infoCards: [
        { heading: "📅 Von 1789 bis 1804", max: 35,
          text: "1789 Generalstände und Nationalversammlung · 1791 Verfassung mit König · 1792 Krieg und Republik · 1793/94 Terror · 1795–99 Direktorium · 1799 Staatsstreich · 1804 Code civil und Kaiserkrönung." },
        { heading: "🗂️ Deine vier Beweise", max: 35,
          text: "Haus 1: Verfassung, zwei Bedeutungen · Haus 2: Die Revolution wird radikaler · Haus 3: Terror als „Gerechtigkeit“ · Haus 4: Die Revolution ist „beendet“, der Code civil bleibt." },
        { heading: "⚖️ Wie kam Napoleon an die Macht?", max: 35,
          text: "Prüfe jeden Baustein: Welches Haus liefert den Beleg? Nur belegte Bausteine kommen in die Druckerpresse." }
      ],
      intro: "An der Druckerpresse wartet der Meister auf deine Antwort. Setz sie aus Bausteinen zusammen – nur belegte Bausteine zählen.",
      mode: "finale",
      game: {
        satzanfang: "Napoleon kam an die Macht, weil …",
        bausteine: [
          { t: "… die Revolution immer radikaler wurde und viele nach Krieg und Terror vor allem Ruhe und Ordnung wollten.", ok: true, beleg: "Haus 2 (radikaler) und Haus 3 (Terror)" },
          { t: "… er als siegreicher General beliebt war und 1799 die schwache Regierung durch einen Staatsstreich stürzte.", ok: true, beleg: "Haus 4 (Infotafel: Napoleons Weg)" },
          { t: "… er wichtige Ergebnisse von 1789 sicherte: Gleichheit vor dem Gesetz und Eigentum (Code civil).", ok: true, beleg: "Haus 1 (Ende der Ständeordnung) und Haus 4 (Code civil)" },
          { t: "… die Franzosen ihn in freien Wahlen mit mehreren Kandidaten zum Kaiser gewählt haben.", ok: false, fb: "Nein: Er kam durch einen Staatsstreich an die Macht. Die Volksabstimmungen boten keine Wahl, die Zahlen wurden geschönt." },
          { t: "… Ludwig XVI. ihn als seinen Nachfolger eingesetzt hatte.", ok: false, fb: "Ludwig XVI. wurde schon 1793 hingerichtet (Haus 2)." },
          { t: "… er die Ständegesellschaft wiederherstellte, wie es Adel und Kirche wollten.", ok: false, fb: "Haus 4 zeigt das Gegenteil: Die Vorrechte kamen nicht zurück." },
          { t: "… die Revolution von Anfang an einen Alleinherrscher wollte.", ok: false, fb: "Haus 1 zeigt das Gegenteil: Die Nationalversammlung wollte eine Verfassung, die die Macht begrenzt." }
        ],
        musterantwort: "„Napoleon kam an die Macht, weil die Revolution sich <b>radikalisierte</b>: Nach Krieg, Republik und <b>Terror</b> war die Regierung des Direktoriums schwach, und viele Franzosen sehnten sich nach <b>Ordnung</b>. Als erfolgreicher <b>General</b> nutzte Napoleon das 1799 zum <b>Staatsstreich</b>. Er blieb an der Macht, weil er wichtige Ergebnisse der Revolution sicherte (<b>Gleichheit vor dem Gesetz</b>, <b>Eigentum</b> im Code civil) – und dafür die <b>politische Freiheit</b> abschaffte.“",
        nachtrag: "NACHTRAG DES MEISTERS: 1815 wurde Napoleon bei Waterloo endgültig besiegt und verbannt. Sein Gesetzbuch überlebte ihn: Im Großherzogtum Baden galt es ab 1810 als „Badisches Landrecht“, bis 1900 das Bürgerliche Gesetzbuch kam.",
        gegenwart: "UND HEUTE? Die französische Verfassung von 1958 beruft sich in ihrer Präambel auf die Erklärung der Menschen- und Bürgerrechte von 1789. Und im Grundgesetz steht in Art. 3: „Alle Menschen sind vor dem Gesetz gleich.“"
      },
      summary: "<b>Antwort auf die Leitfrage:</b> Napoleon kam an die Macht, weil die Revolution sich <b>radikalisierte</b> und viele nach Krieg und <b>Terror</b> Ordnung wollten. Als siegreicher General stürzte er 1799 die schwache Regierung (<b>Staatsstreich</b>). Er sicherte <b>Gleichheit vor dem Gesetz</b> und <b>Eigentum</b> (Code civil), schaffte aber die <b>politische Freiheit</b> ab. · 1804 krönte er sich selbst zum <b>Kaiser</b>.",
      funkspruch: "MEISTER ROUX AN KS001: Operation BRUMAIRE abgeschlossen. Das Flugblatt ist gedruckt."
    }
  }
};
