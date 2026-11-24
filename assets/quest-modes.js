// Spielarten für die Häuser der J2-Quests (BRD Quest J2, Euro Quest J2)
// Aufruf: QuestModes[mode](container, d, schonGeloest, onSolved)
// d.game enthält die Inhalte, d.summary den Merksatz fürs Arbeitsblatt.
(function () {
  var css = document.createElement("style");
  css.textContent =
    ".qm-card{background:#fbf2d8;border:2px solid #8a6236;border-radius:6px;padding:10px 12px;margin:8px 0;font-size:13.5px;line-height:1.45}" +
    ".qm-step{font-size:11.5px;color:#7a4a24;font-weight:bold;margin-bottom:4px}" +
    ".qm-opts{display:flex;flex-direction:column;gap:7px;margin-top:8px}" +
    ".qm-opts button,.qm-grid button{font:bold 13.5px Georgia,serif;text-align:left;background:#dec99a;color:#2b1d12;border:2px solid #8a6236;border-radius:6px;padding:10px 12px;min-height:44px;cursor:pointer}" +
    ".qm-opts button.ok,.qm-grid button.ok{background:#d4efdf;border-color:#1e8449}" +
    ".qm-opts button.bad,.qm-grid button.bad{background:#f9d6d0;border-color:#c0392b}" +
    ".qm-fb{font-size:13px;font-weight:bold;margin:8px 0;min-height:18px;line-height:1.4}" +
    ".qm-fb.ok{color:#1e7a3a}.qm-fb.bad{color:#a5281b}" +
    ".qm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px;margin-top:8px}" +
    ".qm-grid button{text-align:center;font-size:12.5px;padding:6px 3px}" +
    ".qm-land{display:flex;flex-direction:column;align-items:center;line-height:1.15}" +
    ".qm-land b{font-size:15px}.qm-land.ja{background:#d4efdf!important;border-color:#1e8449!important}" +
    ".qm-land.nein{background:#f9d6d0!important;border-color:#c0392b!important}.qm-land.enth{background:#e5e7eb!important;border-color:#6b7280!important}" +
    ".qm-bar{height:22px;background:#e6d3a7;border:2px solid #8a6236;border-radius:4px;position:relative;margin:8px 0;overflow:hidden}" +
    ".qm-bar i{position:absolute;left:0;top:0;bottom:0;background:#1e8449;transition:width .25s}" +
    ".qm-bar s{position:absolute;top:-2px;bottom:-2px;width:3px;background:#c0392b}" +
    ".qm-bar span{position:absolute;inset:0;text-align:center;font:bold 12.5px Georgia,serif;line-height:18px;color:#24160b}" +
    ".qm-path{font-size:12.5px;background:#e6d3a7;border-left:3px solid #7a4a24;padding:6px 8px;margin:8px 0;line-height:1.5}" +
    ".qm-sum{background:#fff8d6;border:3px solid #d4ac0d;border-radius:6px;padding:12px 14px;margin-top:10px;font-size:15px;line-height:1.5}" +
    ".qm-sum h4{font-size:15px;color:#1e3a7a;margin-bottom:4px}" +
    ".qm-timer{font:bold 18px 'Courier New',monospace;text-align:center;margin:6px 0}" +
    ".qm-big{font-size:15px;font-weight:bold;text-align:center;padding:14px 10px}" +
    "#board .btns button{min-height:44px;padding:8px 14px;font-size:14px}" +
    "#victoryBox{max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);overflow-y:auto}" +
    "#victoryBox button{min-height:44px}" +
    ".qm-info{margin:6px 0 10px}.qm-info summary{cursor:pointer;font-weight:bold;font-size:14px;padding:10px 12px;background:#dec99a;border:2px solid #8a6236;border-radius:6px;min-height:44px}" +
    ".qm-info .infoCard{margin-top:6px}";
  document.head.appendChild(css);

  function el(parent, tag, text, cls) {
    var e = document.createElement(tag);
    if (text != null) e.innerHTML = text;
    if (cls) e.className = cls;
    if (parent) parent.appendChild(e);
    return e;
  }
  function btn(parent, text, cls) { var b = el(parent, "button", text, cls); b.type = "button"; return b; }
  // Weiter-/Start-Knöpfe: der zweite Tipp eines Doppeltipps darf nicht auf dem neu aufgebauten Inhalt landen
  function guard(fn) {
    return function (e) {
      var stop = function (ev) { ev.stopImmediatePropagation(); ev.preventDefault(); };
      document.addEventListener("click", stop, true);
      setTimeout(function () { document.removeEventListener("click", stop, true); }, 450);
      fn(e);
    };
  }
  function weiter(parent, text, fn, cls) {
    var w = el(parent, "div", null, "btns" + (cls ? " " + cls : ""));
    var b = btn(w, text);
    b.addEventListener("click", guard(function () { if (b.disabled) return; b.disabled = true; fn(); }));
    return w;
  }

  // Merksatz fürs Arbeitsblatt (groß, zum Abschreiben)
  function summary(root, d) {
    var s = el(root, "div", null, "qm-sum");
    el(s, "h4", "✍️ Ergebnis fürs Arbeitsblatt");
    el(s, "div", d.summary);
  }
  function finish(root, d, onSolved, text) {
    root.innerHTML = "";
    el(root, "div", text || "✔ Geschafft!", "qm-fb ok");
    summary(root, d);
    onSolved();
  }

  var M = {};

  // ---------- 1. Rollenspiel mit Konsequenz ----------
  // d.game.cases: [{ text, options:[{t, ok, fb}], fn }], d.game.fns: ["Gesetzgebung", ...]
  M.rollenspiel = function (root, d, done, onSolved) {
    if (done) { summary(root, d); return; }
    var g = d.game, i = 0;
    function show() {
      root.innerHTML = "";
      var c = g.cases[i];
      var card = el(root, "div", null, "qm-card");
      el(card, "div", (g.role || "") + " · Situation " + (i + 1) + " von " + g.cases.length, "qm-step");
      el(card, "div", c.text);
      var opts = el(card, "div", null, "qm-opts");
      var fb = el(root, "div", "", "qm-fb");
      c.options.forEach(function (o) {
        var b = btn(opts, o.t);
        b.addEventListener("click", function () {
          if (b.disabled) return;
          fb.innerHTML = o.fb;
          if (!o.ok) { b.className = "bad"; fb.className = "qm-fb bad"; return; }
          b.className = "ok"; fb.className = "qm-fb ok";
          [].forEach.call(opts.children, function (x) { x.disabled = true; });
          // Schritt 2: Welche Funktion war das?
          var q = el(root, "div", null, "qm-card");
          el(q, "div", "Welche Funktion des Bundestags hast du gerade genutzt?", "qm-step");
          var fo = el(q, "div", null, "qm-opts");
          var fb2 = el(root, "div", "", "qm-fb");
          g.fns.forEach(function (f) {
            var fbn = btn(fo, f);
            fbn.addEventListener("click", function () {
              if (f !== c.fn) { fbn.className = "bad"; fb2.className = "qm-fb bad"; fb2.textContent = "Nicht ganz – überleg, was du gerade getan hast."; return; }
              fbn.className = "ok"; fb2.className = "qm-fb ok"; fb2.textContent = "✔ Richtig: " + f + ".";
              [].forEach.call(fo.children, function (x) { x.disabled = true; });
              weiter(root, i < g.cases.length - 1 ? "Nächste Situation ▶" : "Abschließen ⭐", function () {
                i++; if (i < g.cases.length) show(); else finish(root, d, onSolved, "✔ Alle Situationen gemeistert!");
              });
            });
          });
        });
      });
    }
    show();
  };

  // ---------- 2. Abstimmung im Bundesrat ----------
  // d.game.lands: [[kürzel, name, stimmen]], d.game.rounds: siehe unten
  M.abstimmung = function (root, d, done, onSolved) {
    if (done) { summary(root, d); return; }
    var g = d.game, total = g.lands.reduce(function (s, l) { return s + l[2]; }, 0), need = Math.floor(total / 2) + 1, r = 0;
    function grid(parent, state, clickable, onChange) {
      var gr = el(parent, "div", null, "qm-grid");
      g.lands.forEach(function (l) {
        var b = btn(gr, "<b>" + l[0] + "</b><small>" + l[1] + "</small><small>" + l[2] + " Stimmen</small>", "qm-land");
        function paint() { b.className = "qm-land" + (state[l[0]] ? " " + state[l[0]] : ""); }
        paint();
        if (clickable) b.addEventListener("click", function () { state[l[0]] = state[l[0]] === "ja" ? "" : "ja"; paint(); onChange(); });
        else b.disabled = true;
      });
    }
    function bar(parent, yes) {
      var b = el(parent, "div", null, "qm-bar");
      var fill = el(b, "i"); var mark = el(b, "s"); mark.style.left = (need / total * 100) + "%";
      var lab = el(b, "span");
      function set(v) { fill.style.width = (v / total * 100) + "%"; lab.textContent = "Ja-Stimmen: " + v + " / " + total + " (nötig: " + need + ")"; }
      set(yes); return set;
    }
    function round() {
      root.innerHTML = "";
      var rd = g.rounds[r];
      var card = el(root, "div", null, "qm-card");
      el(card, "div", "Abstimmung " + (r + 1) + " von " + g.rounds.length, "qm-step");
      el(card, "div", rd.text);
      var fb = el(root, "div", "", "qm-fb");
      var state = {};
      if (rd.type === "sammeln") {
        var setBar = bar(root, 0);
        grid(root, state, true, function () {
          var y = g.lands.reduce(function (s, l) { return s + (state[l[0]] === "ja" ? l[2] : 0); }, 0);
          setBar(y);
          if (y >= need) { fb.className = "qm-fb ok"; fb.innerHTML = rd.fb; next(root); }
          else { fb.className = "qm-fb"; fb.textContent = "Noch " + (need - y) + " Stimmen bis zur Mehrheit."; var nx = root.querySelector(".qm-next"); if (nx) nx.remove(); }
        });
      } else {
        if (rd.preset) {
          for (var k in rd.preset) state[k] = rd.preset[k];
          var y = g.lands.reduce(function (s, l) { return s + (state[l[0]] === "ja" ? l[2] : 0); }, 0);
          bar(root, y);
          grid(root, state, false);
          el(root, "div", "🟩 Ja · 🟥 Nein · ⬜ Enthaltung", "qm-step");
        }
        var opts = el(root, "div", null, "qm-opts");
        root.appendChild(fb);
        rd.options.forEach(function (o) {
          var b = btn(opts, o.t);
          b.addEventListener("click", function () {
            fb.innerHTML = o.fb;
            if (!o.ok) { b.className = "bad"; fb.className = "qm-fb bad"; return; }
            b.className = "ok"; fb.className = "qm-fb ok";
            [].forEach.call(opts.children, function (x) { x.disabled = true; });
            next(root);
          });
        });
      }
    }
    function next(parent) {
      if (parent.querySelector(".qm-next")) return;
      weiter(parent, r < g.rounds.length - 1 ? "Nächste Abstimmung ▶" : "Abschließen ⭐", function () {
        r++; if (r < g.rounds.length) round(); else finish(root, d, onSolved, "✔ Alle Abstimmungen richtig entschieden!");
      }, "qm-next");
    }
    round();
  };

  // ---------- 3. Weg durch die Instanzen ----------
  // d.game.stations: {id: name}, d.game.steps: [{id, says}], d.game.wrong: {id: text}
  M.weg = function (root, d, done, onSolved) {
    if (done) { summary(root, d); return; }
    var g = d.game, i = 0;
    root.innerHTML = "";
    var card = el(root, "div", null, "qm-card");
    el(card, "div", g.title, "qm-step");
    var task = el(card, "div", g.start);
    var path = el(root, "div", "📍 Bisheriger Weg: –", "qm-path");
    var fb = el(root, "div", "", "qm-fb");
    var gr = el(root, "div", null, "qm-grid");
    var visited = [];
    Object.keys(g.stations).forEach(function (id) {
      var b = btn(gr, g.stations[id]);
      b.addEventListener("click", function () {
        var st = g.steps[i];
        if (id !== st.id) {
          fb.className = "qm-fb bad";
          fb.innerHTML = "✘ " + (g.wrong[id] || ("Noch nicht. " + (st.hint || "Wo muss der Entwurf jetzt hin?")));
          b.className = "bad"; setTimeout(function () { b.className = ""; }, 700);
          return;
        }
        visited.push(g.stations[id]);
        path.innerHTML = "📍 Bisheriger Weg: " + visited.join(" → ");
        fb.className = "qm-fb ok"; fb.innerHTML = "✔ " + st.says;
        i++;
        if (i < g.steps.length) task.innerHTML = g.steps[i].ask || "Wohin geht der Entwurf jetzt?";
        else {
          gr.style.display = "none";
          weiter(root, "Abschließen ⭐", function () { finish(root, d, onSolved, "✔ Das Gesetz ist beschlossen und verkündet!"); });
        }
      });
    });
    task.innerHTML = g.start + "<br><br><b>" + (g.steps[0].ask || "Wo beginnt alles?") + "</b>";
  };

  // ---------- 4. Fälle beurteilen ----------
  // d.game.question, d.game.choices: [..], d.game.cases: [{text, a:[...], fb}]
  M.faelle = function (root, d, done, onSolved) {
    if (done) { summary(root, d); return; }
    var g = d.game, i = 0, fehler = 0;
    function show() {
      root.innerHTML = "";
      var c = g.cases[i];
      var card = el(root, "div", null, "qm-card");
      el(card, "div", "Fall " + (i + 1) + " von " + g.cases.length, "qm-step");
      el(card, "div", "<b>" + c.text + "</b>");
      el(card, "div", g.question, "qm-step");
      var opts = el(card, "div", null, "qm-grid");
      var fb = el(root, "div", "", "qm-fb");
      g.choices.forEach(function (ch) {
        var b = btn(opts, ch);
        b.addEventListener("click", function () {
          if (c.a.indexOf(ch) < 0) { fehler++; b.className = "bad"; fb.className = "qm-fb bad"; fb.textContent = c.miss || "Nicht ganz – lies den Fall noch einmal genau."; return; }
          b.className = "ok"; fb.className = "qm-fb ok"; fb.innerHTML = "✔ " + c.fb;
          [].forEach.call(opts.children, function (x) { x.disabled = true; });
          weiter(root, i < g.cases.length - 1 ? "Nächster Fall ▶" : "Abschließen ⭐", function () {
            i++; if (i < g.cases.length) show(); else finish(root, d, onSolved, "✔ Alle " + g.cases.length + " Fälle richtig geprüft" + (fehler ? " (" + fehler + (fehler === 1 ? " Fehlversuch)." : " Fehlversuche).") : " – ohne Fehler!"));
          });
        });
      });
    }
    show();
  };

  // ---------- 5. Wer bin ich? (Hinweise nach und nach) ----------
  // d.game.choices: [..], d.game.riddles: [{a, hints:[...], fb}]
  M.werbinich = function (root, d, done, onSolved) {
    if (done) { summary(root, d); return; }
    var g = d.game, i = 0, punkte = 0;
    function show() {
      root.innerHTML = "";
      var c = g.riddles[i], shown = 1;
      var card = el(root, "div", null, "qm-card");
      el(card, "div", "Rätsel " + (i + 1) + " von " + g.riddles.length + " · Punkte: " + punkte, "qm-step");
      var hl = el(card, "div");
      function paintHints() { hl.innerHTML = c.hints.slice(0, shown).map(function (h, k) { return "🔎 Hinweis " + (k + 1) + ": " + h; }).join("<br>"); }
      paintHints();
      var w0 = el(root, "div", null, "btns");
      var more = btn(w0, "Weiteren Hinweis zeigen");
      more.addEventListener("click", function () { if (shown < c.hints.length) { shown++; paintHints(); } if (shown >= c.hints.length) more.disabled = true; });
      el(root, "div", "Wer bin ich? (Je früher richtig, desto mehr Punkte)", "qm-step");
      var opts = el(root, "div", null, "qm-grid");
      var fb = el(root, "div", "", "qm-fb");
      g.choices.forEach(function (ch) {
        var b = btn(opts, ch);
        b.addEventListener("click", function () {
          if (ch !== c.a) {
            b.className = "bad"; fb.className = "qm-fb bad"; fb.innerHTML = (c.wrong && c.wrong[ch]) || "Falsch geraten – hol dir noch einen Hinweis.";
            if (shown < c.hints.length) { shown++; paintHints(); }
            if (shown >= c.hints.length) more.disabled = true;
            return;
          }
          var p = c.hints.length - shown + 1; punkte += p;
          b.className = "ok"; fb.className = "qm-fb ok"; fb.innerHTML = "✔ +" + p + (p === 1 ? " Punkt. " : " Punkte. ") + c.fb;
          [].forEach.call(opts.children, function (x) { x.disabled = true; }); more.disabled = true;
          weiter(root, i < g.riddles.length - 1 ? "Nächstes Rätsel ▶" : "Abschließen ⭐", function () {
            i++; if (i < g.riddles.length) show(); else finish(root, d, onSolved, "✔ Alle Institutionen erkannt – " + punkte + " Punkte!");
          });
        });
      });
    }
    show();
  };

  // ---------- 6. Sortieren auf Zeit ----------
  // d.game.baskets: [..], d.game.cards: [{t, a, fb}], d.game.seconds, d.game.need
  M.zeit = function (root, d, done, onSolved) {
    if (done) { summary(root, d); return; }
    var g = d.game;
    function start() {
      root.innerHTML = "";
      root.dataset.running = "1";
      var cards = g.cards.slice().sort(function () { return Math.random() - 0.5; });
      var i = 0, right = 0, left = g.seconds, over = false;
      var tm = el(root, "div", "⏱ " + left + " s · 0 richtig", "qm-timer");
      var card = el(root, "div", null, "qm-card qm-big");
      var opts = el(root, "div", null, "qm-grid");
      var fb = el(root, "div", "", "qm-fb");
      var t = setInterval(function () {
        // Haus verlassen: Runde abbrechen, beim nächsten Betreten startet sie neu
        if (!root.isConnected || !root.getClientRects().length) { clearInterval(t); over = true; introScreen(); return; }
        left--; tm.textContent = "⏱ " + left + " s · " + right + " richtig"; if (left <= 0) end();
      }, 1000);
      function paint() { card.innerHTML = "Karte " + (i + 1) + " / " + cards.length + "<br>" + cards[i].t; }
      g.baskets.forEach(function (bk) {
        var b = btn(opts, bk);
        b.addEventListener("click", function () {
          if (over) return;
          var c = cards[i];
          if (bk === c.a) { right++; fb.className = "qm-fb ok"; fb.innerHTML = "✔ " + (c.fb || bk); }
          else { fb.className = "qm-fb bad"; fb.innerHTML = "✘ Richtig wäre: " + c.a + (c.fb ? " – " + c.fb : ""); }
          i++; tm.textContent = "⏱ " + left + " s · " + right + " richtig";
          if (i >= cards.length) end(); else paint();
        });
      });
      paint();
      function end() {
        if (over) return; over = true; clearInterval(t); delete root.dataset.running;
        opts.style.display = "none";
        card.innerHTML = right + " von " + cards.length + " richtig" + (left <= 0 ? " (Zeit abgelaufen)" : "");
        if (right >= g.need) weiter(root, "Abschließen ⭐", function () { finish(root, d, onSolved, "✔ " + right + " von " + cards.length + " – Zoll-Profi!"); });
        else { fb.className = "qm-fb bad"; fb.textContent = "Für die Sterne brauchst du " + g.need + " Richtige. Noch eine Runde!"; weiter(root, "🔄 Neue Runde", start); }
      }
    }
    function introScreen() {
      root.innerHTML = ""; delete root.dataset.running;
      var intro = el(root, "div", null, "qm-card");
      el(intro, "div", g.intro);
      weiter(root, "▶ Start (" + g.seconds + " Sekunden)", start);
    }
    introScreen();
  };

  // ---------- 7. Vorhersage mit Kugel ----------
  // d.game.ends: [..], d.game.scenarios: [{text, a, fb}]
  M.vorhersage = function (root, d, done, onSolved) {
    if (done) { summary(root, d); return; }
    var g = d.game, i = 0;
    function show() {
      root.innerHTML = "";
      var c = g.scenarios[i];
      var card = el(root, "div", null, "qm-card");
      el(card, "div", "Szenario " + (i + 1) + " von " + g.scenarios.length, "qm-step");
      el(card, "div", c.text);
      el(root, "div", "Wo landet die Kugel? Sag den Ausgang voraus:", "qm-step");
      var ball = el(root, "div", "⚪", "");
      ball.style.cssText = "font-size:26px;line-height:34px;transition:padding-left .9s cubic-bezier(.3,1.6,.6,1);height:34px;padding-left:calc(50% - 13px)";
      var lanes = el(root, "div", null, "qm-grid");
      var fb = el(root, "div", "", "qm-fb");
      g.ends.forEach(function (e, k) {
        var b = btn(lanes, e);
        b.addEventListener("click", function () {
          if (e !== c.a) { b.className = "bad"; fb.className = "qm-fb bad"; fb.innerHTML = c.miss || "Die Kugel springt woanders hin – überleg noch mal."; return; }
          ball.style.paddingLeft = Math.max(0, b.offsetLeft - lanes.offsetLeft + b.offsetWidth / 2 - 13) + "px";
          b.className = "ok"; fb.className = "qm-fb ok"; fb.innerHTML = "✔ " + c.fb;
          [].forEach.call(lanes.children, function (x) { x.disabled = true; });
          weiter(root, i < g.scenarios.length - 1 ? "Nächste Kugel ▶" : "Abschließen ⭐", function () {
            i++; if (i < g.scenarios.length) show(); else finish(root, d, onSolved, "✔ Alle Kugeln richtig vorhergesagt!");
          });
        });
      });
    }
    show();
  };

  // Aufklappbare Infotafel: QuestModes.info(container, d) – nutzt d.infoCards [{heading, text}]
  M.info = function (root, d) {
    if (!d.infoCards || !d.infoCards.length) return;
    var det = el(root, "details", null, "qm-info");
    el(det, "summary", "📖 Infotafel lesen (" + d.infoCards.length + " Karten)");
    d.infoCards.forEach(function (ic) { var c = el(det, "div", null, "infoCard"); el(c, "h4", ic.heading); el(c, "div", ic.text); });
  };

  window.QuestModes = M;

  // ---------- Wehende Fahne beim Sieg ----------
  // QuestFlag(container, "de" | "eu")
  window.QuestFlag = function (box, typ) {
    if (box.querySelector("canvas.qm-flag")) return;
    var c = document.createElement("canvas");
    c.className = "qm-flag";
    c.width = 300; c.height = 200; c.style.cssText = "display:block;margin:0 auto 10px;width:auto;max-width:100%;height:200px;max-height:32vh;image-rendering:pixelated;background:transparent";
    box.insertBefore(c, box.firstChild);
    var x = c.getContext("2d"), t = 0;
    var W = 240, H = 144, X0 = 40, Y0 = 20;
    function farbe(u, v) {
      if (typ === "de") return v < 1 / 3 ? "#000000" : v < 2 / 3 ? "#dd0000" : "#ffce00";
      // EU: blau mit 12 Sternen im Kreis
      for (var k = 0; k < 12; k++) {
        var a = k / 12 * Math.PI * 2, sx = 0.5 + Math.cos(a) * 0.22, sy = 0.5 + Math.sin(a) * 0.33;
        if (Math.abs(u - sx) < 0.022 && Math.abs(v - sy) < 0.034) return "#ffdd00";
      }
      return "#003399";
    }
    (function draw() {
      if (!c.isConnected) return;
      if (!c.getClientRects().length) { setTimeout(draw, 500); return; }
      x.clearRect(0, 0, c.width, c.height);
      x.fillStyle = "#6b4a2b"; x.fillRect(X0 - 8, Y0 - 6, 6, 186);
      x.fillStyle = "#d4ac0d"; x.fillRect(X0 - 10, Y0 - 10, 10, 6);
      var px = 4;
      for (var i = 0; i < W; i += px) {
        var u = i / W, wave = Math.round(Math.sin(u * 7 - t) * 9 * u), shade = 1 - 0.25 * Math.max(0, Math.cos(u * 7 - t)) * u;
        for (var j = 0; j < H; j += px) {
          x.fillStyle = farbe(u, j / H);
          x.globalAlpha = 1; x.fillRect(X0 + i, Y0 + j + wave, px, px);
          if (shade < 1) { x.fillStyle = "rgba(0,0,0," + (1 - shade).toFixed(2) + ")"; x.fillRect(X0 + i, Y0 + j + wave, px, px); }
        }
      }
      t += 0.12;
      requestAnimationFrame(draw);
    })();
  };
})();
