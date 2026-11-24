// Euro Quest J2 (Oberstufe): neue Spielarten in Ratshalle, Markthaus und Flipper-Bau.
// Die Schmiede (Meilensteine Europas) bleibt wie in der Grundfassung.
window.J2 = function (C) {

  // ---------------- Ratshalle: Wer bin ich? ----------------
  C.ratshalle.title = "Ratshalle – Wer bin ich?";
  C.ratshalle.intro = "Sechs Institutionen stellen sich vor – eine davon gehört gar nicht zur EU. Rate so früh wie möglich, wer spricht!";
  C.ratshalle.mode = "werbinich";
  var falle = { "Europarat": "Vorsicht, Falle: Der Europarat ist kein Organ der EU, sondern eine eigene Organisation mit 46 Staaten." };
  C.ratshalle.game = {
    choices: ["Europäische Kommission", "Europäisches Parlament", "Rat der EU", "Europäischer Rat", "Europarat", "Europäischer Gerichtshof"],
    riddles: [
      { a: "Europäische Kommission", wrong: falle, fb: "Die Kommission hat als einziges Organ das Initiativrecht und wacht als „Hüterin der Verträge“ über das EU-Recht.",
        hints: ["Ich habe 27 Mitglieder – eins pro Mitgliedstaat.", "Ich sitze vor allem in Brüssel und gelte als „Hüterin der Verträge“.", "Nur ich darf neue EU-Gesetze vorschlagen (Initiativrecht)."] },
      { a: "Europäisches Parlament", wrong: falle, fb: "Das Parlament ist das einzige direkt gewählte EU-Organ und beschließt Gesetze gemeinsam mit dem Rat der EU.",
        hints: ["Ich tage in Straßburg und Brüssel.", "Ich habe 720 Mitglieder, 96 davon aus Deutschland.", "Ich werde alle fünf Jahre direkt von den EU-Bürgerinnen und -Bürgern gewählt."] },
      { a: "Rat der EU", wrong: falle, fb: "Im Rat der EU (Ministerrat) sitzen die Fachminister – je nach Thema z. B. die Agrar- oder Innenminister.",
        hints: ["Meine Zusammensetzung wechselt je nach Thema.", "Mein Vorsitz wechselt alle sechs Monate zwischen den Mitgliedstaaten.", "In mir sitzen die Fachministerinnen und -minister der Mitgliedstaaten; ich beschließe Gesetze mit dem Parlament."] },
      { a: "Europäischer Rat", wrong: falle, fb: "Der Europäische Rat der Staats- und Regierungschefs gibt die Richtung vor, macht aber keine Gesetze.",
        hints: ["Ich treffe mich mehrmals im Jahr zu „Gipfeln“.", "Ich mache selbst keine Gesetze, gebe aber die großen Leitlinien vor.", "In mir sitzen die Staats- und Regierungschefs der Mitgliedstaaten und mein Präsident."] },
      { a: "Europarat", fb: "Richtig erkannt: Der Europarat (seit 1949) ist keine EU-Institution. Über seine Menschenrechtskonvention wacht der Gerichtshof für Menschenrechte in Straßburg.",
        hints: ["Ich sitze in Straßburg.", "Ich habe 46 Mitgliedstaaten – mehr als die EU.", "Ich bin gar kein EU-Organ, sondern eine eigene Organisation für Menschenrechte und Demokratie."] },
      { a: "Europäischer Gerichtshof", wrong: falle, fb: "Der EuGH in Luxemburg sorgt dafür, dass EU-Recht in allen Mitgliedstaaten gleich ausgelegt und angewendet wird.",
        hints: ["Ich sitze in Luxemburg.", "Ich habe eine Richterin oder einen Richter pro Mitgliedstaat.", "Ich sorge dafür, dass EU-Recht überall gleich ausgelegt wird."] }
    ]
  };
  C.ratshalle.summary = "<b>Kommission:</b> schlägt Gesetze vor (Initiativrecht), Hüterin der Verträge · <b>Parlament:</b> direkt gewählt, beschließt Gesetze mit dem <b>Rat der EU</b> (Fachminister) · <b>Europäischer Rat:</b> Staats- und Regierungschefs, gibt Leitlinien vor · <b>EuGH:</b> legt EU-Recht aus. Der <b>Europarat</b> ist kein EU-Organ.";

  // ---------------- Markthaus: Zollschalter auf Zeit ----------------
  C.markt.title = "Markthaus – Der Zollschalter";
  C.markt.intro = "Am Zollschalter stehen zehn Leute an. Ordne jeden Fall in 60 Sekunden der richtigen Grundfreiheit oder Schengen zu!";
  C.markt.mode = "zeit";
  C.markt.game = {
    intro: "Du arbeitest am alten Zollschalter. Seit dem Binnenmarkt (1993) musst du hier niemanden mehr aufhalten – aber du sollst wissen, welche Freiheit jeweils gilt. <b>Ab 8 von 10 richtigen</b> leuchten die Sterne.",
    seconds: 60, need: 8,
    baskets: ["Waren", "Personen", "Dienstleistungen", "Kapital", "Schengen"],
    cards: [
      { t: "Wein aus Frankreich wird ohne Zoll in Stuttgart verkauft.", a: "Waren" },
      { t: "Eine Ärztin aus Rumänien zieht nach Ulm und arbeitet im Krankenhaus.", a: "Personen" },
      { t: "Ein Steuerbüro in Wien berät online eine Firma in Freiburg.", a: "Dienstleistungen" },
      { t: "Ein Rentner kauft eine Ferienwohnung in Portugal.", a: "Kapital" },
      { t: "Mit dem Zug nach Österreich – an der Grenze gibt es normalerweise keine Passkontrolle.", a: "Schengen" },
      { t: "Ein Student aus Spanien zieht zum Studium nach Heidelberg.", a: "Personen" },
      { t: "Eine Bäckerei aus Kehl liefert Brezeln nach Straßburg.", a: "Waren" },
      { t: "Ein Dachdecker aus dem Elsass repariert ein Dach in Freiburg.", a: "Dienstleistungen" },
      { t: "Du kaufst Aktien einer italienischen Firma.", a: "Kapital" },
      { t: "Wandern in die Schweiz ohne Grenzkontrolle – obwohl die Schweiz nicht in der EU ist.", a: "Schengen", fb: "Die Schweiz, Norwegen, Island und Liechtenstein gehören zum Schengen-Raum, aber nicht zur EU." }
    ]
  };
  C.markt.summary = "Der <b>Binnenmarkt</b> (seit 1993) beruht auf <b>vier Grundfreiheiten</b>: freier Verkehr von <b>Waren, Personen, Dienstleistungen und Kapital</b>. Der <b>Schengen-Raum</b> schafft zusätzlich die regulären Kontrollen an den Binnengrenzen ab – dazu gehören auch Nicht-EU-Staaten wie die Schweiz und Norwegen.";

  // ---------------- Flipper-Bau: Vorhersage ----------------
  C.flipper.title = "Flipper-Bau – Wo landet das Gesetz?";
  C.flipper.intro = "Ein EU-Gesetz rollt wie eine Flipperkugel zwischen Parlament und Rat hin und her. Lies das Szenario und sag voraus, wo die Kugel landet!";
  C.flipper.mode = "vorhersage";
  C.flipper.game = {
    ends: ["Angenommen in 1. Lesung", "Angenommen in 2. Lesung", "Angenommen nach Vermittlung", "Gescheitert"],
    scenarios: [
      { text: "Die <b>Kommission</b> schlägt einheitliche Ladekabel für Handys vor. Das Parlament legt in 1. Lesung seinen Standpunkt fest – und der Rat der EU <b>billigt ihn ohne Änderungen</b>.",
        a: "Angenommen in 1. Lesung", fb: "Sind sich Parlament und Rat gleich einig, ist das Gesetz schon nach der 1. Lesung angenommen – das ist heute der häufigste Fall." },
      { text: "Der Rat ist mit dem Standpunkt des Parlaments nicht einverstanden und legt einen <b>eigenen Standpunkt</b> vor. Das Parlament <b>billigt diesen Standpunkt</b> in der 2. Lesung.",
        a: "Angenommen in 2. Lesung", fb: "Billigt das Parlament in 2. Lesung den Standpunkt des Rates, ist das Gesetz angenommen." },
      { text: "Das Parlament ändert in 2. Lesung den Standpunkt des Rates. Der Rat <b>übernimmt nicht alle Änderungen</b>. Ein Ausschuss aus Vertretern beider Seiten findet einen Kompromiss, dem beide in 3. Lesung zustimmen.",
        a: "Angenommen nach Vermittlung", fb: "Der Vermittlungsausschuss sucht den Kompromiss; Parlament und Rat müssen ihm anschließend zustimmen." },
      { text: "In der 2. Lesung <b>lehnt das Parlament</b> den Standpunkt des Rates <b>mit der Mehrheit seiner Mitglieder ab</b>.",
        a: "Gescheitert", fb: "Lehnt das Parlament mit absoluter Mehrheit ab, ist das Gesetz gescheitert. Im Rat entscheidet meist die qualifizierte Mehrheit: 55 % der Staaten, die 65 % der EU-Bevölkerung vertreten." }
    ]
  };
  C.flipper.summary = "<b>Ordentliches Gesetzgebungsverfahren:</b> Die <b>Kommission</b> schlägt vor → <b>Parlament</b> (1. Lesung) → <b>Rat der EU</b> billigt oder ändert → bei Uneinigkeit 2. Lesung und notfalls <b>Vermittlungsausschuss</b> → Veröffentlichung im Amtsblatt. Parlament und Rat sind <b>gleichberechtigte Gesetzgeber</b>.";
};
