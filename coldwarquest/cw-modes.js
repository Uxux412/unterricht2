// Cold War Quest – Spielarten (Schloss, Akten, Lernbild, Finale), Tresor, Koffer, Bonus-Akten, Spielstand, Druck.
// Erweitert window.QuestModes aus ../assets/quest-modes.js, ohne die gemeinsame Datei zu verändern.
(function () {
  // ---------- Spielstand (localStorage, abgesichert) ----------
  const S = { solved: {}, uv: {}, bonus: {}, vermutung: null, twist1: false };
  try {
    const raw = localStorage.getItem(CW.key);
    if (raw) { const d = JSON.parse(raw); ["solved", "uv", "bonus"].forEach(k => { if (d[k]) S[k] = d[k]; }); S.vermutung = d.vermutung || null; S.antwort = d.antwort || ""; S.twist1 = !!d.twist1; }
  } catch (e) {}
  S.save = function () {
    try { localStorage.setItem(CW.key, JSON.stringify({ solved: S.solved, uv: S.uv, bonus: S.bonus, vermutung: S.vermutung, twist1: S.twist1, antwort: S.antwort || "" })); } catch (e) {}
  };
  S.reset = function () { try { localStorage.removeItem(CW.key); } catch (e) {} };
  S.solvedCount = function () { return CW.order.filter(id => S.solved[id]).length; };
  S.flags = function () { return [].concat.apply([], CW.flagStages.slice(0, S.solvedCount())); };
  window.CWS = S;
  CW.order = ["truman", "stellvertreter", "washington", "moskau", "buero"];
  Object.keys(CW.content).forEach(id => { CW.content[id]._id = id; });

  // ---------- kleine Helfer ----------
  function el(parent, tag, html, cls) {
    const e = document.createElement(tag);
    if (html != null) e.innerHTML = html;
    if (cls) e.className = cls;
    if (parent) parent.appendChild(e);
    return e;
  }
  function btn(parent, html, cls) { const b = el(parent, "button", html, cls); b.type = "button"; return b; }
  function shuffled(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function norm(s) {
    return String(s || "").toUpperCase().replace(/Ä/g, "AE").replace(/Ö/g, "OE").replace(/Ü/g, "UE").replace(/ß/g, "SS").replace(/[^A-Z]/g, "");
  }
  // Nach einer falschen Antwort sperren die Knöpfe kurz: Raten kostet Zeit, Lesen lohnt sich.
  const LOCK_S = 4;
  function lockButtons(buttons, fb) {
    buttons.forEach(x => { if (!x.classList.contains("ok")) { x.disabled = true; x.dataset.lock = "1"; } });
    let n = LOCK_S;
    const tick = el(fb, "div", "⏳ Funkstille: " + n + " s – lies in der Zwischenzeit nach.", "cw-lock-tick");
    const iv = setInterval(() => {
      n--;
      if (n > 0) { tick.textContent = "⏳ Funkstille: " + n + " s – lies in der Zwischenzeit nach."; return; }
      clearInterval(iv); tick.remove();
      buttons.forEach(x => { if (x.dataset.lock) { x.disabled = false; delete x.dataset.lock; } });
    }, 1000);
  }
  function mcQuestion(parent, frage, options, onRight) {
    const card = el(parent, "div", null, "qm-card");
    el(card, "div", frage, "qm-step");
    const opts = el(card, "div", null, "qm-opts");
    const fb = el(parent, "div", "", "qm-fb");
    shuffled(options).forEach(o => {
      const b = btn(opts, o.t);
      b.addEventListener("click", () => {
        if (b.disabled) return;
        fb.innerHTML = o.fb || (o.ok ? "✔ Richtig." : "Nicht ganz – lies noch einmal nach.");
        if (!o.ok) { b.className = "bad"; fb.className = "qm-fb bad"; lockButtons([].slice.call(opts.children), fb); return; }
        b.className = "ok"; fb.className = "qm-fb ok";
        [].forEach.call(opts.children, x => { x.disabled = true; });
        onRight();
      });
    });
    return card;
  }
  function weiter(parent, label, fn) {
    const w = el(parent, "div", null, "btns");
    const b = btn(w, label);
    b.addEventListener("click", () => {
      if (b.disabled) return;
      b.disabled = true;
      // Doppeltipp: der zweite Tipp darf nicht auf dem neu aufgebauten Inhalt landen
      const stop = ev => { ev.stopImmediatePropagation(); ev.preventDefault(); };
      document.addEventListener("click", stop, true);
      setTimeout(() => document.removeEventListener("click", stop, true), 450);
      fn();
    });
    return w;
  }

  const M = window.QuestModes || (window.QuestModes = {});

  // ---------- Haus 1: Perspektiv-Schloss ----------
  M.schloss = function (root, d, done, onDone) {
    const g = d.game;
    const order = d._order || (d._order = shuffled(g.items.map((_, i) => i)));
    root.innerHTML = "";
    const lock = el(root, "div", null, "cw-lock");
    const dials = g.items.map((_, i) => el(lock, "span", String(i + 1), "cw-dial"));
    const fbAll = el(root, "div", "Stell alle sechs Rädchen richtig ein. Bei jedem Fehler bekommst du eine Erklärung.", "qm-fb");
    let solvedN = 0, errors = 0;
    order.forEach((idx, k) => {
      const it = g.items[idx];
      const card = el(root, "div", null, "qm-card");
      el(card, "div", "Rädchen " + (k + 1), "qm-step");
      el(card, "div", it.t);
      const opts = el(card, "div", null, "qm-opts cw-two");
      const fb = el(card, "div", "", "qm-fb");
      [["L", g.left], ["R", g.right]].forEach(([side, label]) => {
        const b = btn(opts, label);
        b.addEventListener("click", () => {
          if (b.disabled) return;
          if (side !== it.a) {
            b.className = "bad"; fb.className = "qm-fb bad"; fb.innerHTML = "✘ " + it.bad;
            errors++;
            if (errors >= 3) {
              fbAll.className = "qm-fb bad";
              fbAll.innerHTML = "🚨 Alarm: Drei Rädchen falsch – das Schloss verriegelt sich und mischt neu. Lies die Karten auf der Infotafel genau!";
              [].forEach.call(root.querySelectorAll("button"), x => { x.disabled = true; });
              setTimeout(() => { delete d._order; M.schloss(root, d, done, onDone); }, 3500);
            }
            return;
          }
          b.className = "ok"; fb.className = "qm-fb ok"; fb.innerHTML = "✔ " + it.ok;
          [].forEach.call(opts.children, x => { x.disabled = true; });
          dials[k].classList.add("on");
          solvedN++;
          if (solvedN === g.items.length) {
            fbAll.className = "qm-fb ok";
            fbAll.innerHTML = "🔓 Klick – alle sechs Rädchen sind eingerastet!";
            onDone();
          }
        });
      });
    });
  };

  // ---------- Haus 2: Akten zuordnen ----------
  M.akten = function (root, d, done, onDone) {
    const g = d.game;
    let a = 0;
    function show() {
      root.innerHTML = "";
      const akte = g.akten[a];
      el(root, "div", "🗂️ Akte " + (a + 1) + " von " + g.akten.length + ": <b>" + akte.name + "</b>", "qm-step");
      let right = 0;
      akte.antworten.forEach((opts, qi) => {
        mcQuestion(root, g.fragen[qi], opts, () => {
          right++;
          if (right === g.fragen.length) {
            el(root, "div", "🗂️ Stempel drauf: <b>STELLVERTRETERKRIEG</b> ✔", "qm-fb ok");
            if (a < g.akten.length - 1) weiter(root, "Nächste Akte ▶", () => { a++; show(); root.scrollIntoView ? root.scrollIntoView({ block: "start" }) : 0; });
            else onDone();
          }
        });
      });
    }
    show();
  };

  // ---------- Haus 3 und 4: Lernbild mit drei Stellen ----------
  M.hotspot = function (root, d, done, onDone) {
    const g = d.game;
    const solvedSpots = {};
    root.innerHTML = "";
    const wrap = el(root, "div", null, "cw-pic");
    const cv = el(wrap, "canvas");
    cv.width = 480; cv.height = 300;
    const pg = cv.getContext("2d");
    const list = el(root, "div", null, "cw-spotlist");
    const panel = el(root, "div");
    function draw() {
      drawLernbild(pg, g.bild, 480, 300);
      g.hotspots.forEach((h, i) => {
        pg.save();
        pg.lineWidth = 3;
        pg.strokeStyle = solvedSpots[i] ? "#22c55e" : "#f2d64b";
        pg.fillStyle = solvedSpots[i] ? "rgba(34,197,94,.25)" : "rgba(242,214,75,.18)";
        pg.beginPath(); pg.arc(h.x, h.y, h.r, 0, Math.PI * 2); pg.fill(); pg.stroke();
        pg.fillStyle = solvedSpots[i] ? "#14532d" : "#111";
        pg.beginPath(); pg.arc(h.x + h.r * 0.7, h.y - h.r * 0.7, 10, 0, Math.PI * 2); pg.fill();
        pg.fillStyle = "#fff"; pg.font = "bold 12px sans-serif"; pg.textAlign = "center"; pg.textBaseline = "middle";
        pg.fillText(solvedSpots[i] ? "✓" : String(i + 1), h.x + h.r * 0.7, h.y - h.r * 0.7 + 1);
        pg.restore();
      });
    }
    function openSpot(i) {
      const h = g.hotspots[i];
      panel.innerHTML = "";
      if (solvedSpots[i]) { el(panel, "div", "✔ " + h.label + " ist schon gedeutet.", "qm-fb ok"); return; }
      el(panel, "div", "🔎 Stelle " + (i + 1) + ": <b>" + h.label + "</b>", "qm-step");
      mcQuestion(panel, h.frage, h.options, () => {
        solvedSpots[i] = true;
        draw(); renderList();
        const n = Object.keys(solvedSpots).length;
        if (n === g.hotspots.length) {
          el(panel, "div", "Alle drei Stellen gedeutet. Jetzt noch die wichtigste Frage:", "qm-step");
          mcQuestion(panel, g.schluss.frage, g.schluss.options, () => onDone());
        }
      });
    }
    function renderList() {
      list.innerHTML = "";
      g.hotspots.forEach((h, i) => {
        const b = btn(list, (solvedSpots[i] ? "✔ " : "🔎 ") + (i + 1) + " " + h.label);
        if (solvedSpots[i]) b.className = "ok";
        b.addEventListener("click", () => openSpot(i));
      });
    }
    cv.addEventListener("click", e => {
      const r = cv.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width * 480, y = (e.clientY - r.top) / r.height * 300;
      g.hotspots.forEach((h, i) => { if (Math.hypot(x - h.x, y - h.y) <= h.r + 6) openSpot(i); });
    });
    draw(); renderList();
  };

  // ---------- Finale: Vergleich und Satzbaukasten ----------
  M.finale = function (root, d, done, onSolved) {
    const g = d.game;
    root.innerHTML = "";
    if (done) { showResult(root, d, null); return; }
    el(root, "div", "🪞 <b>Vergleichstisch:</b> Leg die Lernbilder aus Washington und Moskau nebeneinander.", "qm-step");
    const pics = el(root, "div", null, "cw-pics2");
    ["washington", "moskau"].forEach(w => {
      const c = el(pics, "canvas"); c.width = 480; c.height = 300;
      drawLernbild(c.getContext("2d"), w, 480, 300);
    });
    el(root, "div", "Jede Seite sieht sich als Verteidiger – und die andere als Aggressor. Beide fordern Sicherheit, beide warnen vor einem Atomkrieg, den niemand gewinnen kann.", "qm-card");
    weiter(root, "Weiter zum Fernschreiber ▶", () => step2());
    function step2() {
      root.innerHTML = "";
      el(root, "div", "📠 <b>Fernschreiber an die Zentrale</b> – wähle die Bausteine, die durch deine Beweise <b>belegt</b> sind.", "qm-step");
      el(root, "div", "<b>" + g.satzanfang + "</b>", "qm-card");
      const answer = el(root, "div", null, "cw-answer");
      const opts = el(root, "div", null, "qm-opts");
      const fb = el(root, "div", "", "qm-fb");
      const need = g.bausteine.filter(b => b.ok).length;
      const chosen = [];
      shuffled(g.bausteine).forEach(bs => {
        const b = btn(opts, bs.t);
        b.addEventListener("click", () => {
          if (b.disabled) return;
          if (!bs.ok) { b.className = "bad"; fb.className = "qm-fb bad"; fb.innerHTML = "✘ " + bs.fb; lockButtons([].slice.call(opts.children), fb); return; }
          b.className = "ok"; b.disabled = true; chosen.push(bs);
          fb.className = "qm-fb ok"; fb.innerHTML = "✔ Belegt durch " + bs.beleg + ".";
          el(answer, "div", "✔ " + bs.t + " <small>(" + bs.beleg + ")</small>");
          if (chosen.length === need) {
            [].forEach.call(opts.children, x => { x.disabled = true; });
            const eigen = el(root, "div", null, "qm-card");
            el(eigen, "div", "✍️ <b>Jetzt du:</b> Schreib die Antwort auf die Leitfrage in 1–2 eigenen Sätzen. Nenne mindestens zwei Gründe. (Sie kommt in dein Dossier.)", "qm-step");
            const ta = el(eigen, "textarea"); ta.rows = 4; ta.className = "cw-eigen"; ta.value = CWS.antwort || "";
            ta.setAttribute("aria-label", "Eigene Antwort auf die Leitfrage");
            ta.addEventListener("keydown", e => e.stopPropagation());
            const hint = el(eigen, "div", "", "qm-fb");
            const w = el(root, "div", null, "btns");
            const send = btn(w, "📠 Antwort senden");
            send.addEventListener("click", () => {
              const words = ta.value.trim().split(/\s+/).filter(Boolean).length;
              if (words < 12) { hint.className = "qm-fb bad"; hint.textContent = "Die Zentrale braucht mehr: mindestens 12 Wörter, zwei Gründe. (" + words + " Wörter bisher)"; return; }
              if (send.disabled) return; send.disabled = true;
              CWS.antwort = ta.value.trim(); CWS.save();
              showResult(root, d, chosen, onSolved);
            });
          }
        });
      });
    }
  };
  function showResult(root, d, chosen, onSolved) {
    const g = d.game;
    root.innerHTML = "";
    if (chosen) {
      el(root, "div", "<b>Deine Antwort:</b> " + esc(CWS.antwort || ""), "qm-card");
    }
    el(root, "div", "<b>Zum Vergleich – die Antwort der Zentrale:</b><br>" + g.musterantwort, "qm-sum");
    el(root, "div", g.nachtrag, "cw-funk");
    const v = CW.vermutung.optionen.find(o => o.id === CWS.vermutung);
    if (v) el(root, "div", "<b>Deine Vermutung am Anfang:</b> „" + v.t + "“<br>" + v.aufloesung, "qm-card");
    el(root, "div", g.gegenwart, "qm-card");
    if (onSolved) onSolved();
  }

  // ---------- Tresor ----------
  function tresor(root, d, onOpen) {
    const t = d.tresor;
    const box = el(root, "div", null, "cw-tresor");
    el(box, "div", "🔐 <b>Tresor</b> – " + t.frage, "qm-step");
    const row = el(box, "div", null, "cw-tresor-row");
    const inp = el(row, "input"); inp.type = "text"; inp.autocomplete = "off"; inp.spellcheck = false; inp.placeholder = "Code eingeben";
    inp.setAttribute("aria-label", "Tresor-Code");
    const ob = btn(row, "Öffnen");
    const fb = el(box, "div", "", "qm-fb");
    const tip = el(box, "div", "", "cw-tipp");
    let wrong = 0, tipsShown = 0, revealed = 1;
    function pattern() {
      const c = t.code; let s = "";
      for (let i = 0; i < c.length; i++) s += (i < revealed || i === c.length - 1) ? c[i] : "_";
      return s.split("").join(" ");
    }
    // Textuelle Tipps gibt es auf Knopfdruck; Buchstaben des Codes erst nach drei echten Fehlversuchen.
    function showTip() {
      if (tipsShown < t.tipps.length) { tip.innerHTML = "💡 Tipp: " + t.tipps[tipsShown]; tipsShown++; return; }
      if (wrong >= 3) { tip.innerHTML = "💡 Teillösung: <b class='cw-mono'>" + pattern() + "</b>"; revealed = Math.min(t.code.length - 1, revealed + 1); }
      else tip.innerHTML = "💡 Tipp: " + t.tipps[t.tipps.length - 1] + "<br><small>Mehr Hilfe gibt es, wenn du ein paar Codes ausprobiert hast.</small>";
    }
    const tb = el(box, "div", null, "btns");
    btn(tb, "💡 Tipp").addEventListener("click", () => showTip());
    function tryOpen() {
      const v = norm(inp.value);
      if (!v) { fb.className = "qm-fb bad"; fb.textContent = "Gib zuerst einen Code ein."; return; }
      if (t.accept.map(norm).indexOf(v) >= 0) {
        fb.className = "qm-fb ok"; fb.innerHTML = "🔓 Der Tresor springt auf! " + t.erklaerung;
        inp.disabled = true; ob.disabled = true;
        onOpen();
      } else {
        wrong++; fb.className = "qm-fb bad"; fb.textContent = "✘ Der Tresor bleibt zu. Lies die Quelle noch einmal.";
        if (wrong >= 3 || tipsShown < wrong) showTip();
      }
    }
    ob.addEventListener("click", tryOpen);
    inp.addEventListener("keydown", e => { e.stopPropagation(); if (e.key === "Enter") tryOpen(); });
  }

  // ---------- Ablauf eines Hauses ----------
  window.CWHouse = function (root, d, done, onSolved) {
    root.innerHTML = "";
    if (d.mode === "finale") { M.finale(root, d, done, onSolved); return; }
    if (done) { success(root, d, false); return; }
    const puzzle = el(root, "div");
    const after = el(root, "div");
    M[d.mode](puzzle, d, false, () => afterPuzzle());
    function afterPuzzle() {
      after.innerHTML = "";
      root._uvRetry = null;
      if (!CWS.uv[d._id]) {
        root._uvRetry = afterPuzzle;
        const lockMsg = el(after, "div", "🔦 <b>Der Tresor öffnet erst mit der UV-Notiz aus diesem Raum.</b> Schalte die UV-Lampe ein ([U] oder 🔦 UV oben) und such den Raum ab. Dann komm zurück an den Tisch.", "qm-card cw-uvhint");
        weiter(after, "Ich habe die Notiz – Tresor zeigen", () => afterPuzzle());
        void lockMsg;
        return;
      }
      el(after, "div", "🔦 UV-Notiz: <i>" + d.uv.text + "</i>", "qm-card");
      tresor(after, d, () => { onSolved(); success(after, d, true); });
    }
  };
  function success(root, d, fresh) {
    const box = el(root, "div");
    el(box, "div", "💼 <b>Beweis gesichert:</b> " + d.beweis.icon + " " + d.beweis.name + " – " + d.beweis.text, "qm-card cw-beweis");
    const s = el(box, "div", null, "qm-sum");
    el(s, "h4", "✍️ Ergebnis fürs Arbeitsblatt");
    el(s, "div", d.summary);
    el(box, "div", "📻 " + d.funkspruch, "cw-funk");
    if (d.bonus) {
      const w = el(box, "div", null, "btns");
      const b = btn(w, CWS.bonus[d._id] ? "📁 Bonus-Akte (gelöst ✔)" : "📁 Bonus-Akte öffnen (für Schnelle)");
      b.addEventListener("click", () => CWBonus.open(d._id));
    }
    if (fresh && box.scrollIntoView) setTimeout(() => box.scrollIntoView({ block: "start", behavior: "smooth" }), 80);
  }

  // ---------- Bonus-Akten ----------
  window.CWBonus = {
    open(id) {
      const d = CW.content[id], b = d.bonus;
      showBoard(board => {
        el(board, "h2", b.titel);
        el(board, "div", b.text, "qm-card");
        if (b.link) {
          const p = el(board, "p");
          const a = el(p, "a", "🔗 " + b.link.t); a.href = b.link.href; a.target = "_blank"; a.rel = "noopener";
        }
        const host = el(board, "div");
        if (CWS.bonus[id]) el(host, "div", "✔ Diese Bonus-Akte hast du schon gelöst.", "qm-fb ok");
        mcQuestion(host, b.frage, b.options, () => {
          if (!CWS.bonus[id]) { CWS.bonus[id] = true; CWS.save(); }
          el(host, "div", "📁 Bonus-Akte gelöst – sie liegt jetzt in deinem Koffer.", "qm-fb ok");
        });
        const w = el(board, "div", null, "btns");
        btn(w, "◀ Zurück").addEventListener("click", () => backToHouseOrClose(id));
      });
    }
  };
  function backToHouseOrClose(id) {
    if (typeof current !== "undefined" && current && current.id === id) openStationModal(current, false, "quiz");
    else closeBoard();
  }

  // ---------- Koffer ----------
  window.CWKoffer = {
    open() {
      showBoard(board => {
        el(board, "h2", "💼 Aktenkoffer von Agent KS001");
        el(board, "div", "❓ <b>Leitfrage:</b> " + (CWS.twist1 ? CW.leitfrageKorrigiert : CW.leitfrage), "sheetNote");
        el(board, "h3", "🔎 Beweise und Merksätze", "cw-h3");
        CW.order.slice(0, 4).forEach((id, i) => {
          const d = CW.content[id];
          if (CWS.solved[id]) el(board, "div", "<b>" + d.beweis.icon + " Haus " + (i + 1) + ": " + d.beweis.name + "</b><br>" + d.summary, "infoCard");
          else el(board, "div", "🔒 Haus " + (i + 1) + ": noch kein Beweis", "infoCard cw-dim");
        });
        el(board, "h3", "🔦 UV-Notizen (Quellenkritik)", "cw-h3");
        CW.order.slice(0, 4).forEach((id, i) => {
          const d = CW.content[id];
          el(board, "div", (CWS.uv[id] ? "🔦 " + d.uv.text : "– Haus " + (i + 1) + ": noch nicht gefunden"), "infoCard" + (CWS.uv[id] ? "" : " cw-dim"));
        });
        el(board, "h3", "📁 Bonus-Akten", "cw-h3");
        const bl = el(board, "div", null, "btns");
        CW.order.slice(0, 4).forEach((id, i) => {
          const b = btn(bl, (CWS.bonus[id] ? "✔ " : "📁 ") + "Haus " + (i + 1));
          if (!CWS.solved[id]) { b.disabled = true; b.title = "Erst nach dem Lösen des Hauses"; }
          else b.addEventListener("click", () => CWBonus.open(id));
        });
        el(board, "h3", "🚩 Bündniskarte (Stand 1962)", "cw-h3");
        const fl = CWS.flags();
        el(board, "div", fl.length + " von 23 Flaggen gesammelt", "qm-step");
        const grid = el(board, "div", null, "cw-flaggrid");
        ["NATO", "Warschauer Pakt"].forEach(bloc => {
          const col = el(grid, "div", null, "cw-flagcol");
          el(col, "div", "<b>" + bloc + "</b>");
          Object.keys(CW_FLAGS).filter(k => CW_FLAGS[k][1] === bloc).forEach(k => {
            const row = el(col, "div", null, "cw-flagrow" + (fl.indexOf(k) >= 0 ? "" : " cw-dim"));
            const c = el(row, "canvas"); c.width = 30; c.height = 20;
            if (fl.indexOf(k) >= 0) drawFlag(c.getContext("2d"), k, 0, 0, 30, 20);
            else { const g = c.getContext("2d"); g.fillStyle = "#cfc6ad"; g.fillRect(0, 0, 30, 20); }
            el(row, "span", fl.indexOf(k) >= 0 ? CW_FLAGS[k][0] + " (" + CW_FLAGS[k][2] + ")" : "?");
          });
        });
        if (fl.length >= 23) el(board, "div", "<h4>✍️ Merksatz Bündnisse</h4>" + CW.flagMerksatz, "qm-sum");
        const w = el(board, "div", null, "btns");
        btn(w, "🖨️ Dossier drucken").addEventListener("click", () => CWPrint.dossier());
        if (CWS.solved.buero) btn(w, "🖨️ Urkunde drucken").addEventListener("click", () => CWPrint.urkunde(CW.ranks[CWS.solvedCount()], CWS.flags().length));
        btn(w, "Schließen").addEventListener("click", () => closeBoard());
      });
    }
  };

  // ---------- Vermutung zu Beginn ----------
  window.CWVermutung = {
    open() {
      showBoard(board => {
        el(board, "h2", "🕵️ Deine erste Vermutung");
        el(board, "p", CW.vermutung.frage);
        const opts = el(board, "div", null, "qm-opts");
        CW.vermutung.optionen.forEach(o => {
          const b = btn(opts, o.t);
          b.addEventListener("click", () => {
            CWS.vermutung = o.id; CWS.save();
            closeBoard();
          });
        });
        el(board, "div", "Es gibt hier kein Richtig oder Falsch. Im Finale schauen wir, was an deiner Vermutung dran ist.", "sheetNote");
      });
    }
  };

  // ---------- Drucken: Dossier und Urkunde ----------
  function esc(s) { return String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])); }
  window.CWPrint = {
    show(html) {
      const pa = document.getElementById("printArea");
      pa.innerHTML = html;
      setTimeout(() => window.print(), 60);
    },
    dossier() {
      const lines = n => '<div class="pl"></div>'.repeat(n);
      let h = "<h1>Akte KS001 – Dossier Cold War Quest</h1><p>Name: ____________________ &nbsp; Klasse: ______ &nbsp; Datum: __________</p>";
      h += "<h2>Leitfrage</h2><p><b>" + (CWS.twist1 ? CW.leitfrageKorrigiert : CW.leitfrage) + "</b></p>";
      h += "<h2>1 Warum heißt er „Kalter Krieg“?</h2><p>1947 sagte der US-Berater Bernard Baruch: „Wir befinden uns heute mitten in einem kalten Krieg.“ Kalt heißt: Gegner, aber kein offener Krieg zwischen den Supermächten.</p>";
      CW.order.slice(0, 4).forEach((id, i) => {
        const d = CW.content[id];
        h += "<h2>" + (i + 2) + " " + esc(d.title) + "</h2>";
        h += CWS.solved[id] ? "<p>" + d.summary + "</p>" : lines(3);
      });
      h += "<h2>6 Quellenkritik: Wer profitiert?</h2>";
      CW.order.slice(0, 4).forEach(id => { if (CWS.uv[id]) h += "<p>🔦 " + CW.content[id].uv.text + "</p>"; });
      h += lines(2);
      h += "<h2>7 Meine Antwort auf die Leitfrage</h2>" + (CWS.antwort ? "<p>" + esc(CWS.antwort) + "</p>" + lines(1) : lines(4)) + "<p><b>Einschränkung:</b></p>" + lines(2);
      h += "<h2>8 Urteil (Sicherungsstunde)</h2><p>Beurteile, ob „Kalter Krieg“ eine treffende Bezeichnung ist.</p>" + lines(4);
      this.show(h);
    },
    urkunde(rang, flaggen) {
      const datum = new Date().toLocaleDateString("de-DE");
      this.show("<div class='urk'><h1>URKUNDE · OPERATION KALTFRONT</h1><p>" + CW.urkunde + "</p><p><b>Rang:</b> " + esc(rang) + " · <b>Flaggen:</b> " + flaggen + " von 23 · " + datum + "</p><p>Die Zentrale meldet: einsatzbereit für die Klassenarbeit.</p><p>gez. ROTSTIFT, Zentrale der KS1</p><p><i>" + CW.urkundePS + "</i></p></div>");
    }
  };
})();
