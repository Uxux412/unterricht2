// 8-Bit-Infotext beim Spielstart (Euro Quest, BRD Quest)
// Aufruf: QuestIntro({ key: "euroquest", title: "...", pages: [["Zeile", ...], ...] })
// Wird beim ersten Start gezeigt; danach über den "?"-Knopf erneut aufrufbar.
window.QuestIntro = function (cfg) {
  var css = document.createElement("style");
  css.textContent =
    "#qiOverlay{position:fixed;inset:0;z-index:9999;background:#000;display:flex;align-items:center;justify-content:center;" +
    "padding:max(12px,env(safe-area-inset-top)) 12px;font-family:'Courier New',Courier,monospace;image-rendering:pixelated}" +
    "#qiOverlay::after{content:'';position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,.35) 0 2px,transparent 2px 4px)}" +
    "#qiBox{position:relative;width:100%;max-width:640px;max-height:100%;overflow-y:auto;background:#0b1a5c;color:#fff;" +
    "border:4px solid #fff;box-shadow:0 0 0 4px #0b1a5c,0 0 0 8px #fff;padding:18px 18px 14px}" +
    "#qiTitle{color:#ffe066;font-weight:bold;font-size:clamp(18px,5vw,26px);text-align:center;letter-spacing:2px;margin-bottom:14px;text-shadow:3px 3px 0 #c0392b}" +
    "#qiText{font-size:clamp(15px,4.2vw,19px);line-height:1.5;min-height:9em;white-space:pre-wrap}" +
    "#qiText .cur{display:inline-block;width:.6em;background:#fff;animation:qiB .6s steps(1) infinite}" +
    "@keyframes qiB{50%{opacity:0}}" +
    "#qiFoot{display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:10px}" +
    "#qiDots{color:#7f8fd6;font-size:16px;letter-spacing:4px}" +
    "#qiNext{font:bold 17px 'Courier New',monospace;background:#ffe066;color:#0b1a5c;border:3px solid #fff;padding:12px 18px;min-height:48px;cursor:pointer;box-shadow:4px 4px 0 #c0392b}" +
    "#qiNext:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #c0392b}" +
    "#qiHelp{position:fixed;right:10px;bottom:calc(10px + env(safe-area-inset-bottom));z-index:50;width:44px;height:44px;border-radius:0;" +
    "font:bold 22px 'Courier New',monospace;background:#0b1a5c;color:#ffe066;border:3px solid #fff;cursor:pointer;box-shadow:3px 3px 0 #000}" +
    "#qiHelp.inHud{position:static;width:40px;height:40px;font-size:20px;border-width:2px;box-shadow:2px 2px 0 #000;flex-shrink:0}" +
    // Hochformat-Handy: Spiel füllt den ganzen Bildschirm, Steuerung groß im freien Platz darunter
    "@media (orientation:portrait) and (max-width:780px){html,body{padding:0!important}" +
    "#game{min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;border-radius:0!important}" +
    "#pad{flex:1;justify-content:space-around!important;align-items:center;padding:12px 10px!important}" +
    ".dpad{grid-template-columns:repeat(3,76px)!important;grid-template-rows:repeat(2,68px)!important;gap:8px!important}" +
    ".pb{font-size:28px!important}#bE{width:112px!important;height:100px!important;font-size:22px!important}}";
  document.head.appendChild(css);

  var open = false, page = 0, timer = null, typing = false, full = "";
  var ov, txt, btn, dots;

  // Tastatur fürs Spiel sperren, solange der Infotext offen ist
  window.addEventListener("keydown", function (e) {
    if (!open) return;
    e.stopImmediatePropagation(); e.preventDefault();
    if (e.key === "Enter" || e.key === " " || e.key === "e" || e.key === "E") next();
    if (e.key === "Escape") close();
  }, true);

  function build() {
    ov = document.createElement("div"); ov.id = "qiOverlay";
    ov.innerHTML = '<div id="qiBox" role="dialog" aria-modal="true"><div id="qiTitle"></div><div id="qiText"></div>' +
      '<div id="qiFoot"><span id="qiDots"></span><button id="qiNext" type="button"></button></div></div>';
    document.body.appendChild(ov);
    ov.querySelector("#qiTitle").textContent = cfg.title;
    txt = ov.querySelector("#qiText"); btn = ov.querySelector("#qiNext"); dots = ov.querySelector("#qiDots");
    btn.addEventListener("click", function (e) { e.stopPropagation(); next(); });
    ov.addEventListener("click", function () { next(); });
    ["touchstart", "pointerdown"].forEach(function (t) { ov.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true }); });
  }

  function show(p) {
    page = p; full = cfg.pages[p].join("\n");
    var d = ""; for (var i = 0; i < cfg.pages.length; i++) d += i === p ? "■" : "□"; dots.textContent = d;
    btn.textContent = p < cfg.pages.length - 1 ? "WEITER ▶" : "LOS GEHT'S ▶";
    var n = 0; typing = true; clearInterval(timer);
    timer = setInterval(function () {
      n += 2; txt.innerHTML = ""; txt.appendChild(document.createTextNode(full.slice(0, n)));
      var c = document.createElement("span"); c.className = "cur"; c.innerHTML = "&nbsp;"; txt.appendChild(c);
      if (n >= full.length) { clearInterval(timer); typing = false; }
    }, 22);
  }

  function next() {
    if (typing) { clearInterval(timer); typing = false; txt.textContent = full; return; }
    if (page < cfg.pages.length - 1) show(page + 1); else close();
  }

  function close() {
    open = false; clearInterval(timer); ov.style.display = "none";
    try { localStorage.setItem("intro-" + cfg.key, "1"); } catch (e) {}
  }

  window.QuestIntro.open = function () {
    if (!ov) build();
    open = true; ov.style.display = "flex"; show(0);
  };

  function init() {
    var h = document.createElement("button"); h.id = "qiHelp"; h.type = "button"; h.textContent = "?";
    h.title = "Spielanleitung"; h.setAttribute("aria-label", "Spielanleitung anzeigen");
    h.addEventListener("click", function (e) { e.stopPropagation(); window.QuestIntro.open(); });
    var hud = document.getElementById("hud");
    if (hud) { h.className = "inHud"; hud.appendChild(h); } else document.body.appendChild(h);
    var seen = false; try { seen = localStorage.getItem("intro-" + cfg.key) === "1"; } catch (e) {}
    if (!seen) window.QuestIntro.open();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
};
