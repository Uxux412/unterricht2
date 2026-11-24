// BRD Quest – sprachsensible Fassung (Berufsschule).
// Gleicher Spielablauf wie brdquest/, nur sprachlich vereinfacht: kurze Sätze, Fachwörter mit Erklärung,
// pro Haus ein Wortspeicher. Wird vor dem Selbsttest aufgerufen und überschreibt nur Texte.
window.SPRACHE = function (C) {
  var Q = "📖 Infotafel (eigene Darstellung nach bundestag.de, bundesrat.de und HanisauLand)";
  var LEAD = "Lies den Text. Hier findest du alle Antworten.";
  var INTRO = "Wähle für jede Frage die richtige Antwort. Der Text auf der 📖 Infotafel hilft dir.";
  Object.keys(C).forEach(function (k) { C[k].infoSource = Q; C[k].infoLead = LEAD; C[k].intro = INTRO; });

  // ---------------- Haus 1: Bundestag ----------------
  C.bundestag.title = "02 Haus 1: Bundestag – 3 Aufgaben";
  C.bundestag.infoCards = [
    { heading: "🏛️ Was ist der Bundestag?", text: "Der Bundestag ist das <strong>Parlament</strong> von Deutschland. Er ist in Berlin. Im Bundestag sitzen <strong>630 Abgeordnete</strong>. Das <strong>Volk wählt</strong> die Abgeordneten. Der Bundestag hat <strong>3 Aufgaben</strong>." },
    { heading: "📜 Aufgabe 1: Gesetze machen", text: "Der Bundestag <strong>macht Gesetze</strong>. Er spricht 3-mal über ein Gesetz. Das heißt: <strong>3 Lesungen</strong>. Dann <strong>stimmt er ab</strong>. Er beschließt auch den <strong>Haushalt</strong>. Das ist der Plan für das Geld vom Staat." },
    { heading: "🔍 Aufgabe 2: Die Regierung kontrollieren", text: "Der Bundestag <strong>kontrolliert die Regierung</strong>. Das macht vor allem die <strong>Opposition</strong>. Das sind die Parteien, die nicht regieren. Sie stellen der Regierung <strong>Fragen</strong>. Sie können einen <strong>Untersuchungsausschuss</strong> machen. Dafür braucht man <strong>1/4</strong> (ein Viertel) der Abgeordneten." },
    { heading: "🗳️ Aufgabe 3: Wählen", text: "Der Bundestag <strong>wählt den Bundeskanzler</strong> oder die Bundeskanzlerin. Er kann ihn auch abwählen. Aber nur, wenn er gleichzeitig einen <strong>neuen</strong> Kanzler wählt. Das heißt: <strong>konstruktives Misstrauensvotum</strong>. Der Bundestag wählt auch die <strong>Hälfte</strong> der Richter am Bundesverfassungsgericht." },
    { heading: "📚 Wichtige Wörter", text: "<strong>das Parlament</strong> – die gewählte Vertretung vom Volk<br><strong>der/die Abgeordnete</strong> – ein Mitglied im Parlament<br><strong>die Opposition</strong> – die Parteien, die nicht regieren<br><strong>kontrollieren</strong> – genau prüfen<br><strong>der Haushalt</strong> – der Plan für das Geld vom Staat" }
  ];
  C.bundestag.tip = "Gesetze: 3 Lesungen und Haushalt · Kontrolle: Opposition, Fragen, Untersuchungsausschuss · Wahl: Kanzler/in und Richter.";
  C.bundestag.items = [
    { q: "1. Aufgabe Gesetze: Was macht der Bundestag?", a: "Er spricht 3-mal über Gesetze und beschließt sie. Er beschließt den Haushalt." },
    { q: "2. Aufgabe Kontrolle: Wie kontrolliert die Opposition die Regierung?", a: "Sie stellt Fragen. Mit 1/4 der Abgeordneten macht sie einen Untersuchungsausschuss." },
    { q: "3. Aufgabe Wahl: Wen wählt der Bundestag?", a: "Den Bundeskanzler oder die Bundeskanzlerin und die Hälfte der Verfassungsrichter." }
  ];
  C.bundestag.distractors = ["Er vertritt die 16 Bundesländer. Er hat 69 Stimmen.", "Er prüft in Karlsruhe, ob Gesetze zum Grundgesetz passen."];

  // ---------------- Haus 2: Bundesrat ----------------
  C.bundesrat.title = "03 Haus 2: Bundesrat – Die 16 Länder";
  C.bundesrat.infoCards = [
    { heading: "🦁 Was ist der Bundesrat?", text: "Deutschland hat <strong>16 Bundesländer</strong>. Im Bundesrat arbeiten die Länder bei Gesetzen mit. Dort sitzen Mitglieder der <strong>16 Landesregierungen</strong>, zum Beispiel die Ministerpräsidenten. Der Bundesrat hat <strong>69 Stimmen</strong>. <strong>Baden-Württemberg hat 6 Stimmen</strong>." },
    { heading: "🛑 Zustimmungsgesetz", text: "Manche Gesetze sind für die Länder sehr wichtig, zum Beispiel wenn es um das <strong>Geld der Länder</strong> geht. Dann sagt das Grundgesetz: Der Bundesrat muss <strong>Ja sagen</strong>. Sagt er Nein, <strong>scheitert</strong> das Gesetz. Das heißt: <strong>Zustimmungsgesetz</strong>." },
    { heading: "⚖️ Einspruchsgesetz", text: "Bei den anderen Gesetzen kann der Bundesrat <strong>Einspruch</strong> einlegen. Das heißt: Er sagt „Wir sind dagegen“. Aber der <strong>Bundestag kann ihn überstimmen</strong>. Dann gilt das Gesetz trotzdem. Das heißt: <strong>Einspruchsgesetz</strong>." },
    { heading: "📚 Wichtige Wörter", text: "<strong>das Bundesland</strong> – ein Teil von Deutschland, z. B. Baden-Württemberg<br><strong>die Landesregierung</strong> – die Regierung von einem Bundesland<br><strong>zustimmen</strong> – Ja sagen<br><strong>der Einspruch</strong> – „Wir sind dagegen“<br><strong>überstimmen</strong> – mit mehr Stimmen gewinnen<br><strong>scheitern</strong> – nicht klappen" }
  ];
  C.bundesrat.tip = "Im Bundesrat: 16 Landesregierungen, 69 Stimmen · Zustimmungsgesetz: Bundesrat muss Ja sagen · Einspruchsgesetz: Bundestag kann überstimmen.";
  C.bundesrat.items = [
    { q: "1. Wer sitzt im Bundesrat? Wie viele Stimmen gibt es?", a: "Mitglieder der 16 Landesregierungen. 69 Stimmen, Baden-Württemberg hat 6." },
    { q: "2. Zustimmungsgesetz: Was passiert, wenn der Bundesrat Nein sagt?", a: "Das Gesetz scheitert. Der Bundesrat muss Ja sagen." },
    { q: "3. Einspruchsgesetz: Was kann der Bundestag machen?", a: "Der Bundestag kann den Einspruch überstimmen." }
  ];
  C.bundesrat.distractors = ["Das Volk wählt den Bundesrat alle 4 Jahre direkt.", "Der Bundesrat kann den Bundeskanzler jederzeit abwählen."];

  // ---------------- Haus 3: Gewaltenteilung ----------------
  C.gewaltenteilung.title = "04 Haus 3: Gewaltenteilung und -verschränkung";
  C.gewaltenteilung.infoCards = [
    { heading: "📜 Legislative: Gesetze machen", text: "Die Macht im Staat ist <strong>geteilt</strong>. So kann <strong>niemand allein</strong> bestimmen. Die <strong>Legislative</strong> macht die Gesetze. Dazu gehören der <strong>Bundestag</strong> und der <strong>Bundesrat</strong>." },
    { heading: "🏛️ Exekutive: Gesetze ausführen", text: "Die <strong>Exekutive</strong> führt die Gesetze aus. Sie regiert. Dazu gehören die <strong>Bundesregierung</strong> (Kanzler/in und Minister) und der <strong>Bundespräsident</strong> oder die Bundespräsidentin. Er oder sie ist das Staatsoberhaupt." },
    { heading: "⚖️ Judikative: Recht sprechen", text: "Die <strong>Judikative</strong> spricht Recht. Das sind die <strong>Gerichte</strong>. Das <strong>Bundesverfassungsgericht</strong> ist in <strong>Karlsruhe</strong>. Es prüft: Passt ein Gesetz zum <strong>Grundgesetz</strong>?" },
    { heading: "🔗 Gewaltenverschränkung", text: "Die 3 Gewalten sind <strong>nicht ganz getrennt</strong>. Sie sind <strong>verbunden</strong>. Beispiele: Der <strong>Bundestag wählt den Kanzler</strong>. Viele <strong>Minister</strong> sind auch <strong>Abgeordnete</strong>. Die <strong>Landesregierungen</strong> sitzen im <strong>Bundesrat</strong>." },
    { heading: "📚 Wichtige Wörter", text: "<strong>die Gewalt</strong> – hier: die Macht im Staat<br><strong>ausführen</strong> – in die Tat umsetzen<br><strong>das Gericht</strong> – dort entscheiden Richterinnen und Richter<br><strong>das Grundgesetz</strong> – die Verfassung von Deutschland<br><strong>verschränkt</strong> – miteinander verbunden" }
  ];
  C.gewaltenteilung.tip = "Legislative = Gesetze machen · Exekutive = Gesetze ausführen, regieren · Judikative = Recht sprechen · Verschränkung = die Gewalten sind verbunden.";
  C.gewaltenteilung.items = [
    { q: "1. Legislative (Gesetze machen):", a: "Bundestag und Bundesrat." },
    { q: "2. Exekutive (Gesetze ausführen, regieren):", a: "Bundesregierung und Bundespräsident/in." },
    { q: "3. Judikative (Recht sprechen):", a: "Bundesverfassungsgericht in Karlsruhe: prüft Gesetze am Grundgesetz." },
    { q: "4. Gewaltenverschränkung: Wie sind die Gewalten verbunden?", a: "Der Bundestag wählt den Kanzler. Minister sind oft Abgeordnete." }
  ];
  C.gewaltenteilung.distractors = ["Die Gewalten sind ganz getrennt. Sie haben keine Verbindung.", "Ein Gericht in Straßburg für Menschenrechte."];

  // ---------------- Haus 4: Gesetzgebung ----------------
  C.gesetzgebung.title = "05 Haus 4: Gesetzgebung – Der Weg eines Gesetzes";
  C.gesetzgebung.infoCards = [
    { heading: "💡 Schritt 1: Wer macht den Vorschlag?", text: "Am Anfang steht ein <strong>Gesetzentwurf</strong>. Das ist ein Vorschlag für ein Gesetz. Den Vorschlag machen die <strong>Bundesregierung</strong>, der <strong>Bundestag</strong> oder der <strong>Bundesrat</strong>." },
    { heading: "🗣️ Schritt 2: Der Bundestag", text: "Der <strong>Bundestag</strong> spricht <strong>3-mal</strong> über den Entwurf (<strong>3 Lesungen</strong>). Kleine Gruppen arbeiten genau daran. Das sind die <strong>Ausschüsse</strong>. Am Ende <strong>stimmt</strong> der Bundestag ab." },
    { heading: "🤝 Schritt 3 und 4: Bundesrat und Vermittlungsausschuss", text: "Dann ist der <strong>Bundesrat</strong> dran. Er sagt Ja oder Nein, oder er legt Einspruch ein. Gibt es <strong>Streit</strong>, hilft der <strong>Vermittlungsausschuss</strong>. Dort sitzen 16 Leute aus dem Bundestag und 16 aus dem Bundesrat. Sie suchen einen <strong>Kompromiss</strong>." },
    { heading: "✍️ Schritt 5: Unterschrift", text: "Zum Schluss <strong>prüft</strong> der <strong>Bundespräsident</strong> oder die Bundespräsidentin das Gesetz und <strong>unterschreibt</strong>. Dann steht das Gesetz im <strong>Bundesgesetzblatt</strong>. Jetzt kann es gelten." },
    { heading: "📚 Wichtige Wörter", text: "<strong>der Entwurf</strong> – der erste Vorschlag<br><strong>die Lesung</strong> – eine Beratung im Parlament<br><strong>der Ausschuss</strong> – eine kleine Arbeitsgruppe<br><strong>der Kompromiss</strong> – eine Lösung, mit der beide Seiten leben können<br><strong>das Bundesgesetzblatt</strong> – die amtliche Zeitung für Gesetze" }
  ];
  C.gesetzgebung.intro = "Bring die Schritte in die richtige Reihenfolge. Wähle für jeden Schritt die passende Antwort.";
  C.gesetzgebung.tip = "1. Vorschlag (Regierung, Bundestag oder Bundesrat) → 2. Bundestag (3 Lesungen) → 3./4. Bundesrat, bei Streit Vermittlungsausschuss → 5. Bundespräsident/in, Bundesgesetzblatt.";
  C.gesetzgebung.items = [
    { q: "Schritt 1: Wer darf einen Gesetzentwurf einbringen?", a: "Die Bundesregierung, der Bundestag oder der Bundesrat." },
    { q: "Schritt 2: Was macht der Bundestag?", a: "Er spricht 3-mal über den Entwurf und stimmt ab." },
    { q: "Schritt 3 und 4: Was passiert im Bundesrat?", a: "Der Bundesrat entscheidet. Bei Streit sucht der Vermittlungsausschuss einen Kompromiss." },
    { q: "Schritt 5: Wie endet der Weg?", a: "Der Bundespräsident unterschreibt. Das Gesetz steht im Bundesgesetzblatt." }
  ];
  C.gesetzgebung.distractors = ["Das Bundesverfassungsgericht muss jedem Entwurf zuerst zustimmen.", "Alle Bürgerinnen und Bürger stimmen über jedes Gesetz ab."];

  // ---------------- Haus 5: Wahlrecht ----------------
  C.wahlrecht.title = "06 Haus 5: Grenzhäuschen – Wahlrecht";
  C.wahlrecht.infoCards = [
    { heading: "🗳️ Erststimme und Zweitstimme", text: "Bei der Bundestagswahl hast du <strong>2 Stimmen</strong>. Mit der <strong>Erststimme</strong> (links auf dem Zettel) wählst du eine <strong>Person</strong> aus deinem <strong>Wahlkreis</strong>. Mit der <strong>Zweitstimme</strong> (rechts) wählst du eine <strong>Partei</strong>. Die Zweitstimme ist <strong>wichtiger</strong>. Sie bestimmt, wie viele Sitze eine Partei bekommt." },
    { heading: "🚧 5-Prozent-Hürde und 630 Sitze", text: "Eine Partei braucht <strong>mindestens 5 %</strong> der Zweitstimmen. Oder sie gewinnt <strong>3 Wahlkreise</strong>. Sonst kommt sie nicht in den Bundestag. Der Bundestag hat <strong>630 Sitze</strong>. Seit 2025 gilt: Wer seinen Wahlkreis gewinnt, bekommt den Sitz nur, wenn seine Partei genug Zweitstimmen hat." },
    { heading: "📜 5 Regeln für die Wahl (Art. 38 GG)", text: "<strong>allgemein</strong> – alle Deutschen ab 18 dürfen wählen<br><strong>unmittelbar</strong> – direkt, ohne Zwischenstufe<br><strong>frei</strong> – ohne Druck<br><strong>gleich</strong> – jede Stimme zählt gleich viel<br><strong>geheim</strong> – niemand sieht, was du wählst" },
    { heading: "📚 Wichtige Wörter", text: "<strong>der Wahlkreis</strong> – ein Gebiet, in dem gewählt wird (299 in Deutschland)<br><strong>die Partei</strong> – eine Gruppe mit gleichen politischen Zielen<br><strong>die Hürde</strong> – eine Grenze, die man schaffen muss<br><strong>der Sitz</strong> – ein Platz im Parlament<br><strong>der Grundsatz</strong> – eine wichtige Regel" }
  ];
  C.wahlrecht.tip = "Erststimme = Person im Wahlkreis · Zweitstimme = Partei, bestimmt die Sitze · 5 % oder 3 Wahlkreise · 630 Sitze · allgemein, unmittelbar, frei, gleich, geheim.";
  C.wahlrecht.items = [
    { q: "1. Erststimme (links auf dem Stimmzettel):", a: "Ich wähle eine Person aus meinem Wahlkreis." },
    { q: "2. Zweitstimme (rechts): Warum ist sie wichtiger?", a: "Ich wähle eine Partei. Sie bestimmt die Sitze im Bundestag." },
    { q: "3. 5-Prozent-Hürde:", a: "Eine Partei braucht 5 % der Zweitstimmen oder 3 Wahlkreise." },
    { q: "4. Wie viele Sitze hat der Bundestag?", a: "630 Sitze. Sie werden nach den Zweitstimmen verteilt." },
    { q: "5. Die 5 Wahlgrundsätze (Art. 38 GG):", a: "allgemein, unmittelbar, frei, gleich, geheim" }
  ];
  C.wahlrecht.distractors = ["Mit der Erststimme wähle ich den Bundeskanzler direkt.", "Jede Partei kommt in den Bundestag, egal wie viele Stimmen sie hat."];
};
