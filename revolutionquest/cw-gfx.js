// Cold War Quest – Grafik: Agent KS001, geteilte Stadt mit Agentenbrücke, Häuser, Innenräume, UV-Lampe, Flaggen, Lernbilder.
// Nutzt die Zeichenhelfer aus index.html (P, discP, cobbleStone, hash, roof3DParallelogram1280, label1280, activeCtx, TW, MAP ...).
// Alle Funktionen werden erst zur Laufzeit aufgerufen, wenn index.html geladen ist.

// ===================== Agent KS001 (Entwurf des Grafikers, Koffer verbreitert) =====================
const KS001_SPRITE = [
  "...............oooooooo...............",
  ".............ooNNNNNNNNoo.............",
  "............oNNNnnNNNNNNNo............",
  "...........oNNnnNNNNNNNNNNo...........",
  "...........oNNNNNNNNNNNNNNo...........",
  "...........oNNNNNNNNNNNNNNo...........",
  "...........oNNFFFFFFFFFFNNo...........",
  "...........oNFFFFFFFFFFFFNo...........",
  "...........ofFFeeFFFFeeFFfo...........",
  "...........ofFFFFFFFFFFFFfo...........",
  "...........ofFFFFFffFFFFFfo...........",
  "............ofFFFFFFFFFFfo............",
  "............ofFFFmmmmFFFfo............",
  ".............offFFFFFFffo.............",
  "..............ooffffffoo..............",
  "...............oofFFfoo...............",
  "...........ooooSWWWWWWSoooo...........",
  ".........ooSSSSsWWRRWWsSSSSoo.........",
  "........oSSSSSSsWWRRWWsSSSSSSo........",
  "........oSSSSSSSsWRRWsSSSYSSSSo.......",
  ".......oSSSSSSSSsWRRWsSSSSSSSSo.......",
  ".......oSSsSSSSSSsRRsSSSSSSsSSo.......",
  ".......oSSsSSSSSSSsRsSSSSSSsSSo.......",
  ".......oSSsSSSSSSSSsSSSSSSSsSSo.......",
  ".......oSSsSSSSSSSSuSSSSSSSsSSo.......",
  ".......oSSsSSSSSSSSsSSSSSSSsSSo.......",
  ".......oSSsSSSSSSSSuSSSSSSSsSSo.......",
  ".......oSSsooooooooooooooooosSSo......",
  ".......oFFoSSSSSSSSsSSSSSSSoFFoo......",
  ".......offoSSSSSSSSsSSSSSSSoffGGo.....",
  "........oooSSSSSSSSsSSSSSSSoooGGGoo...",
  "..........oSSSSSSSSoSSSSSSSo.oCCCCCCo.",
  "..........oSSSSSSSo.oSSSSSSoooCCCCCCo.",
  "..........oSSSSSSSo.oSSSSSSoCCCGGCCCo.",
  "..........oSSSSSSso.osSSSSSoCCCCCCCCo.",
  "..........oSSSSSSso.osSSSSSoCCCCCCCCo.",
  "..........oSSSSSSso.osSSSSSocccccccco.",
  "..........oSSSSSSso.osSSSSSo.oooooooo.",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........oSSSSSSso.osSSSSSo..........",
  "..........osssssssso.ossssso..........",
  "..........oKKKKKKKo.oKKKKKKo..........",
  ".........oKKKKKKKKo.oKKKKKKKo.........",
  ".........oKkKKKKKKo.oKKKKKKkKo........",
  ".........ooooooooo...oooooooooo.......",
  "......................................"
];
const KS001_PAL = {
  o: "#101014", e: "#101014", N: "#16161d", n: "#3a4150", F: "#e2ab80", f: "#b87c58", m: "#9c5a48",
  S: "#4a5566", s: "#2c3542", u: "#c9ccd2", W: "#ecebe4", R: "#8a2424", Y: "#f2d64b",
  C: "#7a4e2a", c: "#4e3018", G: "#c9a640", K: "#121214", k: "#3c3c44"
};
// Optionale PNG-Sprites des Lehrers (Ordner bilder/). Fehlen sie, zeichnet das Spiel den Pixel-Agenten.
// Sobald bilder/agent.png existiert, hier "bilder/agent.png" eintragen (leer = keine Anfrage, kein 404).
const CW_SPRITE_SRC = "";
const CW_SPRITE_IMG = { ready: false, img: null };
if (CW_SPRITE_SRC) (function () {
  const img = new Image();
  img.onload = () => { CW_SPRITE_IMG.ready = true; CW_SPRITE_IMG.img = img; if (typeof cachesBuilt !== "undefined") cachesBuilt = false; };
  img.onerror = () => {};
  img.src = CW_SPRITE_SRC;
})();
// Agent KS001 im Stil der Vorlagen (Anzug, schwarze Haare, Aktentasche) – gleiche Figur wie im Phishing-Escape-Room.
// Bilder: front, blink, back, r1–r4 (Laufen nach rechts; links = gespiegelt), watch, read, win. 24 × 40 Pixel.
const KS_PAL = {"k":"#0c0b10","h":"#1e1d26","i":"#2d2c39","H":"#55546c","s":"#f0bb93","S":"#cf8f6c","e":"#141419","w":"#f2f5f8","W":"#c3cad6","m":"#8f4f3c","j":"#272834","J":"#41435a","q":"#15151c","t":"#121320","T":"#2f3245","p":"#20212a","P":"#363849","n":"#0a0a0e","N":"#4b4b57","c":"#6b4423","C":"#93602f","y":"#e7bf55","z":"#4a2e17","g":"#f0c64a","x":"#f2ead6","X":"#9a8f78","d":"#c8a364","D":"#8e6c39"};
const KS_SPR = {
  front: ["........kkkkkkkk........","......kkhhhhhhhhkk......",".....khhHHhhhhhhhhk.....","....khhhhHHhhhhiihhk....","....khhhhhhHHhhhhhhk....","...khhhhhhhhhhhhhhhhk...","...khhhhhhhhhhhhhhhhk...","...khhsssssshhhhhhhhk...","...khssssssssssshhhhk...","...khskkkssssssskkkhk...","..kSssswesssssswesssSk..","..kSsssssssSSssssssSk...","...kssssssSmmSssssssk...","....kSssssssssssssSk....","......kSssssssssSk......",".........kSSSSk.........",".....kjjjwwttwwjjjk.....","...kjjjjJwwttwwJjjjjk...","..kjqjjjJwWttWwJjjjqjk..","..kjqjjjjJwttwJjjjjqjk..","..kjqjjjjjJttJjjjjjqjk..","..kjqjjjjjjTTjjjjjjqjk..","..kjqjjjjjjJjjjjjjjqjk..","..kjqjjjjjjjjjjjjjjqjk..","..kwqjjjjjjjjjjjjjjqwk..",".kssqjjjjjjjjjjjjjjqssk.",".kSSkqqqqqqqqqqqqqqkSSk.",".....kppppppppppppk.kk..","......kpPppkkpPppkkkkkkk","......kpPppkkpPppkkCCCCk","......kpPppkkpPppkkcyyck","......kpPppkkpPppkkcccck","......kpPppkkpPppkkzzzzk","......kpPppkkpPppkkkkkkk","......kpPppkkpPppk......","......kpPppkkpPppk......","......kpppppkpppppk.....",".....knnnnnkknnnnnk.....",".....knNnnnkknNnnnk.....","......kkkkkk.kkkkkk....."],
  blink: ["........kkkkkkkk........","......kkhhhhhhhhkk......",".....khhHHhhhhhhhhk.....","....khhhhHHhhhhiihhk....","....khhhhhhHHhhhhhhk....","...khhhhhhhhhhhhhhhhk...","...khhhhhhhhhhhhhhhhk...","...khhsssssshhhhhhhhk...","...khssssssssssshhhhk...","...khskkkssssssskkkhk...","..kSsssSkssssssSksssSk..","..kSsssssssSSssssssSk...","...kssssssSmmSssssssk...","....kSssssssssssssSk....","......kSssssssssSk......",".........kSSSSk.........",".....kjjjwwttwwjjjk.....","...kjjjjJwwttwwJjjjjk...","..kjqjjjJwWttWwJjjjqjk..","..kjqjjjjJwttwJjjjjqjk..","..kjqjjjjjJttJjjjjjqjk..","..kjqjjjjjjTTjjjjjjqjk..","..kjqjjjjjjJjjjjjjjqjk..","..kjqjjjjjjjjjjjjjjqjk..","..kwqjjjjjjjjjjjjjjqwk..",".kssqjjjjjjjjjjjjjjqssk.",".kSSkqqqqqqqqqqqqqqkSSk.",".....kppppppppppppk.kk..","......kpPppkkpPppkkkkkkk","......kpPppkkpPppkkCCCCk","......kpPppkkpPppkkcyyck","......kpPppkkpPppkkcccck","......kpPppkkpPppkkzzzzk","......kpPppkkpPppkkkkkkk","......kpPppkkpPppk......","......kpPppkkpPppk......","......kpppppkpppppk.....",".....knnnnnkknnnnnk.....",".....knNnnnkknNnnnk.....","......kkkkkk.kkkkkk....."],
  back: ["........kkkkkkkk........","......kkhhhhhhhhkk......",".....khhhhhHHhhhhhk.....","....khhhhhHHHHhhhhhk....","....khhhhhhhhhhhhhhk....","...khhhhhhhhhhhhhhhhk...","...khhhhhhhhhhhhhhhhk...","...khhhhhhhhhhhhhhhhk...","...khhhhhhhhhhhhhhhhk...","...khhhhhhhhhhhhhhhhk...","..kShhhhhhhhhhhhhhhhSk..","..kShhhhhhhhhhhhhhhhSk..","...khhhhhhhhhhhhhhhhk...","....khhhhhhhhhhhhhhk....","......kkhhhhhhhhkk......",".........kSSSSk.........",".....kjjjwwwwwwjjjk.....","...kjjjjjjjjjjjjjjjjk...","..kjqjjjjjjjjjjjjjjqjk..","..kjqjjjjjjjjjjjjjjqjk..","..kjqjjjjjjjqjjjjjjqjk..","..kjqjjjjjjjqjjjjjjqjk..","..kjqjjjjjjjqjjjjjjqjk..","..kjqjjjjjjjqjjjjjjqjk..","..kwqjjjjjjjqjjjjjjqwk..",".kssqjjjjjjjqjjjjjjqssk.",".kSSkqqqqqqqqqqqqqqkSSk.","..kk.kppppppppppppk.....","kkkkkkkpPppkkpPppk......","kCCCCkkpPppkkpPppk......","kcyyckkpPppkkpPppk......","kcccckkpPppkkpPppk......","kzzzzkkpPppkkpPppk......","kkkkkkkpPppkkpPppk......","......kpPppkkpPppk......","......kpPppkkpPppk......","......kpppppkpppppk.....",".....knnnnnkknnnnnk.....",".....knNnnnkknNnnnk.....","......kkkkkk.kkkkkk....."],
  r1: [".........kkkkkkk........",".......kkhhhhhhhkk......","......khhHHhhhhhhhk.....",".....khhhhHHhhhhhhhk....",".....khhhhhhHHhhhhhhk...","....khhhhhhhhhhhhhhhk...","....khhhhhhhhhhhhhhhk...","....khhhhhhhhhhhssssk...","....khhhhhhhhhssssssk...","....khhhhhhhhhskkkssk...","....khhhhSShhssswessk...","....khhhhSShssssssssssk.",".....khhhSssssssmmssk...","......khhSssssssssssk...",".......kkSsssssssSk.....","..........kSSSSk........","........kjjjjjjwtk......",".......kjjkJjkjwtjk.....",".......kjkJjqkjjtjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkwwwkjjjjk.....",".......kjkssskjjjjk.....",".......kqqkSSkqqqqk.....",".......kpppkkppppk......","......kqkkkkkkkkpk......","......kqkCCCCCCkPpk.....",".....kqqkccyycckpPpk....",".....kqqkcccccckpPpk....","....kqqkkzzzzzzkkpPpk...","....kqqkkkkkkkkkkpPpk...","...kqqk..........kpPpk..","...kqqk..........kpPpk..","..knnnk...........knnnk.","..knnnnnk.........knNnnk","...kkkkk...........kkkk.","........................"],
  r2: [".........kkkkkkk........",".......kkhhhhhhhkk......","......khhHHhhhhhhhk.....",".....khhhhHHhhhhhhhk....",".....khhhhhhHHhhhhhhk...","....khhhhhhhhhhhhhhhk...","....khhhhhhhhhhhhhhhk...","....khhhhhhhhhhhssssk...","....khhhhhhhhhssssssk...","....khhhhhhhhhskkkssk...","....khhhhSShhssswessk...","....khhhhSShssssssssssk.",".....khhhSssssssmmssk...","......khhSssssssssssk...",".......kkSsssssssSk.....","..........kSSSSk........","........kjjjjjjwtk......",".......kjjkJjkjwtjk.....",".......kjkJjqkjjtjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkwwwkjjjjk.....",".......kjkssskjjjjk.....",".......kqqkkkkqqqqk.....",".......kkkkkkkkkpk......","........kCCCCCCkk.......","........kccyycckk.......","........kcccccckk.......","........kzzzzzzkqk......","........kkkkkkkkqk......","........kpPppk.kqqk.....","........kpPppk.kqqk.....","........kpPppk..kqk.....",".......knnnnnnk.knnk....",".......knNnnnnnkknnnk...","........kkkkkkk..kkk....","........................"],
  r3: [".........kkkkkkk........",".......kkhhhhhhhkk......","......khhHHhhhhhhhk.....",".....khhhhHHhhhhhhhk....",".....khhhhhhHHhhhhhhk...","....khhhhhhhhhhhhhhhk...","....khhhhhhhhhhhhhhhk...","....khhhhhhhhhhhssssk...","....khhhhhhhhhssssssk...","....khhhhhhhhhskkkssk...","....khhhhSShhssswessk...","....khhhhSShssssssssssk.",".....khhhSssssssmmssk...","......khhSssssssssssk...",".......kkSsssssssSk.....","..........kSSSSk........","........kjjjjjjwtk......",".......kjjkJjkjwtjk.....",".......kjkJjqkjjtjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkwwwkjjjjk.....",".......kjkssskjjjjk.....",".......kqqkSSkqqqqk.....",".......kpppkkppppk......","......kpkkkkkkkkqk......","......kpkCCCCCCkqqk.....",".....kpPkccyycckqqqk....",".....kpPkcccccckqqqk....","....kpPkkzzzzzzkkqqqk...","....kpPkkkkkkkkkkqqqk...","...kpPk..........kqqqk..","...kpPk..........kqqqk..","..knnnk...........knnnk.","..knNnnnk.........knnnnk","...kkkkk...........kkkk.","........................"],
  r4: [".........kkkkkkk........",".......kkhhhhhhhkk......","......khhHHhhhhhhhk.....",".....khhhhHHhhhhhhhk....",".....khhhhhhHHhhhhhhk...","....khhhhhhhhhhhhhhhk...","....khhhhhhhhhhhhhhhk...","....khhhhhhhhhhhssssk...","....khhhhhhhhhssssssk...","....khhhhhhhhhskkkssk...","....khhhhSShhssswessk...","....khhhhSShssssssssssk.",".....khhhSssssssmmssk...","......khhSssssssssssk...",".......kkSsssssssSk.....","..........kSSSSk........","........kjjjjjjwtk......",".......kjjkJjkjwtjk.....",".......kjkJjqkjjtjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkJjqkjjjjk.....",".......kjkwwwkjjjjk.....",".......kjkssskjjjjk.....",".......kqqkkkkqqqqk.....",".......kkkkkkkkkpk......","........kCCCCCCkk.......","........kccyycckk.......","........kcccccckk.......","........kzzzzzzkpk......","........kkkkkkkkPk......","........kqqqqk.kpPk.....","........kqqqqk.kpPk.....","........kqqqqk..kpk.....",".......knnnnnnk.knnk....",".......knnnnnnnkknNnk...","........kkkkkkk..kkk....","........................"],
  watch: ["........kkkkkkkk........","......kkhhhhhhhhkk......",".....khhHHhhhhhhhhk.....","....khhhhHHhhhhiihhk....","....khhhhhhHHhhhhhhk....","...khhhhhhhhhhhhhhhhk...","...khhhhhhhhhhhhhhhhk...","...khhsssssshhhhhhhhk...","...khssssssssssshhhhk...","...khskkkssssssskkkhk...","..kSssssssssssssssssSk..","..kSssswesssssswesssSk..","...kssssssSmmSssssssk...","....kSssssssssssssSk....","......kSssssssssSk......",".........kSSSSk.........",".....kjjjwwttwwjjjk.....","...kjjjjJwwttwwJjjjjk...","..kjqjjjJwWttWwJjjjqjk..","..kjqjjjjJwttwJjjjjqjk..","..kjqjjjjjJttJjjjjjqjk..","..kjqjkkkkkkkkkkkjjqjk..","..kjqkssgwJJJJJJJkjqjk..","..kjqjkkkkkkkkkkkkjqjk..","..kwqjjjjjjjjjjjjjjqjk..",".kssqjjjjjjjjjjjjjjqjk..",".kSSkqqqqqqqqqqqqqqkqk..","..kk.kppppppppppppk.....","kkkkkkkpPppkkpPppk......","kCCCCkkpPppkkpPppk......","kcyyckkpPppkkpPppk......","kcccckkpPppkkpPppk......","kzzzzkkpPppkkpPppk......","kkkkkkkpPppkkpPppk......","......kpPppkkpPppk......","......kpPppkkpPppk......","......kpppppkpppppk.....",".....knnnnnkknnnnnk.....",".....knNnnnkknNnnnk.....","......kkkkkk.kkkkkk....."],
  read: ["........kkkkkkkk........","......kkhhhhhhhhkk......",".....khhHHhhhhhhhhk.....","....khhhhHHhhhhiihhk....","....khhhhhhHHhhhhhhk....","...khhhhhhhhhhhhhhhhk...","...khhhhhhhhhhhhhhhhk...","...khhsssssshhhhhhhhk...","...khssssssssssshhhhk...","...khskkkssssssskkkhk...","..kSssssssssssssssssSk..","..kSssswesssssswesssSk..","...kssssssSmmSssssssk...","....kSssssssssssssSk....","......kSssssssssSk......",".........kSSSSk.........",".....kjjjwwttwwjjjk.....","...kjjjjJwwttwwJjjjjk...","..kjqjjjJwWttWwJjjjqjk..","..kjqkkkkkkkkkkkkkkqjk..","..kjqkxxxxxDxxxxxkqjjk..","..kjqkxXXXxDxXXXxkqjjk..","..kjqkxxxxxDxXXxxkqjjk..","..kjskxXXxxDxxxxxksjjk..","..kjqkdddddDdddddkqjjk..","..kqqqkkkkkkkkkkkkqqqk..","..kqqqqqqqqqqqqqqqqqqk..",".....kppppppppppppk.....","......kpPppkkpPppk......","......kpPppkkpPppk......","......kpPppkkpPppk......","......kpPppkkpPppk......","......kpPppkkpPppk..kk..","......kpPppkkpPppkkkkkkk","......kpPppkkpPppkkCCCCk","......kpPppkkpPppkkcyyck","......kpppppkpppppkcccck",".....knnnnnkknnnnnkzzzzk",".....knNnnnkknNnnnkkkkkk","......kkkkkk.kkkkkk....."],
  win: ["........kkkkkkkk........","......kkhhhhhhhhkk......",".....khhHHhhhhhhhhk.....","....khhhhHHhhhhiihhk....","....khhhhhhHHhhhhhhk....","...khhhhhhhhhhhhhhkkk...","...khhhhhhhhhhhhhkssSk..","...khhsssssshhhhhksssk..","...khssssssssssshhkwwk..","...khskkkssssssskkkjJk..","..kSssswessssssweskjJk..","..kSsssssssSSssssskjJk..","...kssssssSmmSsssskjJk..","....kSsssssssssssskjJk..","......kSssssssssSkkjJk..",".........kSSSSk...kjJk..",".....kjjjwwttwwjjjkjjk..","...kjjjjJwwttwwJjjjjk...","..kjqjjjJwWttWwJjjjk....","..kjqjjjjJwttwJjjjk.....","..kjqjjjjjJttJjjjjk.....","..kjqjjjjjjTTjjjjjk.....","..kjqjjjjjjJjjjjjjk.....","..kjqjjjjjjjjjjjjjk.....","..kwqjjjjjjjjjjjjjk.....",".kssqjjjjjjjjjjjjjk.....",".kSSkqqqqqqqqqqqqqk.....","..kk.kppppppppppppk.....","kkkkkkkpPppkkpPppk......","kCCCCkkpPppkkpPppk......","kcyyckkpPppkkpPppk......","kcccckkpPppkkpPppk......","kzzzzkkpPppkkpPppk......","kkkkkkkpPppkkpPppk......","......kpPppkkpPppk......","......kpPppkkpPppk......","......kpppppkpppppk.....",".....knnnnnkknnnnnk.....",".....knNnnnkknNnnnk.....","......kkkkkk.kkkkkk....."],
};
const KS_CACHE = {};
function ksFrame(name) {
  if (KS_CACHE[name]) return KS_CACHE[name];
  const rows = KS_SPR[name], c = document.createElement("canvas");
  c.width = 24; c.height = 40;
  const g = c.getContext("2d");
  rows.forEach((r, yy) => { for (let xx = 0; xx < r.length; xx++) { const col = KS_PAL[r[xx]]; if (col) { g.fillStyle = col; g.fillRect(xx, yy, 1, 1); } } });
  return (KS_CACHE[name] = c);
}
// x, y: linke obere Ecke der alten 38 × 48-Box (mal scale). Füße bleiben an derselben Stelle.
// Spritesheet nach den Vorlagen des Lehrers (Gemini, 2026): 4 × 4 Bilder.
// Zeile 1 nach unten · Zeile 2 nach oben · Zeile 3 nach rechts (links = gespiegelt) · Zeile 4 Posen: stehen, Uhr, Dossier, Jubel.
const KS_SHEET = new Image();
KS_SHEET.src = "bilder/agent-ks001.png";
let ksPose = null; // z. B. "read" oder "win"
function drawAgentSheet(x, y, scale, dir, moving, t) {
  const fw = KS_SHEET.naturalWidth / 4, fh = KS_SHEET.naturalHeight / 4;
  let row = 3, col = 0, flip = false;
  const step = Math.floor(t / 120) % 4;
  if (ksPose === "watch") col = 1; else if (ksPose === "read") col = 2; else if (ksPose === "win") col = 3;
  else if (dir === "up") { row = 1; col = moving ? step : 0; }
  else if (dir === "left" || dir === "right") { row = 2; col = moving ? step : 0; flip = dir === "left"; }
  else if (moving) { row = 0; col = step; }
  const h = 52 * scale, w = h * fw / fh;
  const dx = x + (38 * scale - w) / 2, dy = y + 48 * scale - h + 2 * scale;
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  if (flip) { ctx.translate(dx + w, dy); ctx.scale(-1, 1); ctx.drawImage(KS_SHEET, col * fw, row * fh, fw, fh, 0, 0, w, h); }
  else ctx.drawImage(KS_SHEET, col * fw, row * fh, fw, fh, dx, dy, w, h);
  ctx.restore();
}
function drawAgentKS(x, y, scale, dir, moving, t) {
  if (KS_SHEET.complete && KS_SHEET.naturalWidth) { drawAgentSheet(x, y, scale, dir, moving, t); return; }
  let name = "front", flip = false;
  if (dir === "up") name = "back";
  else if (dir === "left" || dir === "right") { name = moving ? "r" + (1 + Math.floor(t / 110) % 4) : "r1"; flip = dir === "left"; }
  else if (!moving && Math.floor(t / 3200) % 4 === 3 && t % 3200 < 160) name = "blink";
  const k = 1.2 * scale, w = 24 * k, h = 40 * k;
  const dx = x + (38 * scale - w) / 2, dy = y + 48 * scale - h;
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  if (flip) { ctx.translate(dx + w, dy); ctx.scale(-1, 1); ctx.drawImage(ksFrame(name), 0, 0, w, h); }
  else ctx.drawImage(ksFrame(name), dx, dy, w, h);
  ctx.restore();
}
function drawAgent(x, y, scale, flip) {
  if (CW_SPRITE_IMG.ready) {
    const im = CW_SPRITE_IMG.img, w = 38 * scale, h = 48 * scale;
    ctx.save();
    if (flip) { ctx.translate(x + w, y); ctx.scale(-1, 1); ctx.drawImage(im, 0, 0, w, h); }
    else ctx.drawImage(im, x, y, w, h);
    ctx.restore();
  } else bitmapP(KS001_SPRITE, x, y, scale, KS001_PAL, flip);
}

// ===================== Stadt: Fluss, Brücke, Ost und West =====================
const RIVER_C0 = 14, RIVER_C1 = 17, BRIDGE_R0 = 7, BRIDGE_R1 = 11;
function isEastCol(c) { return c > RIVER_C1; }

function drawRiver1280(X, Y, c, r, t) {
  P(X, Y, TW, TW, "#2f5f99");
  for (let py = 0; py < TW; py += 2) {
    P(X, Y + py, TW, 1, ((py + r * 3) % 6 === 0) ? "#3a6fae" : "#2f5f99");
  }
  const o = Math.floor(t / 300 + c * 2 + r) % 6;
  P(X + 4 + o * 3, Y + 9 + (r % 3), 12, 2, "#6aa3e0");
  P(X + 22 - o * 2, Y + 26, 10, 2, "#6aa3e0");
  P(X + 10, Y + 33, 6, 1, "#b8daf7");
  if (c === RIVER_C0) {           // Westufer
    for (let py = 0; py < TW; py++) {
      const k = Math.round(Math.sin(py * 0.18 + r) * 2);
      P(X + k, Y + py, 4, 1, "#3a5a2e");
      P(X + 4 + k, Y + py, 3, 1, "#6b5538");
      P(X + 7 + k, Y + py, 2, 1, "#a9d4f5");
    }
  }
  if (c === RIVER_C1) {           // Ostufer (Beton-Kaimauer)
    for (let py = 0; py < TW; py++) {
      P(X + TW - 9, Y + py, 2, 1, "#a9d4f5");
      P(X + TW - 7, Y + py, 7, 1, py % 10 === 0 ? "#7d6f58" : "#a8977a");
    }
  }
}

function drawConcrete1280(X, Y, c, r) {
  P(X, Y, TW, TW, "#7c7e84");
  for (let iy = 0; iy < 2; iy++) for (let ix = 0; ix < 2; ix++) {
    const v = hash(c * 2 + ix, r * 2 + iy, 9) % 3;
    const base = ["#a3a39e", "#9b9b96", "#aaa9a3"][v];
    const px = X + ix * 20, py = Y + iy * 20;
    P(px + 1, py + 1, 18, 18, base);
    P(px + 1, py + 1, 18, 1, "#bdbcb6");
    P(px + 1, py + 18, 18, 1, "#7f7f7a");
    if (hash(c, r, ix + iy * 2) % 7 === 0) P(px + 5, py + 8, 7, 1, "#6d6d68");
  }
}

function drawGrassEast1280(X, Y, c, r) {
  P(X, Y, TW, TW, "#5d7550");
  for (let i = 0; i < 16; i++) {
    const h = hash(c, r, i);
    P(X + (h % 36), Y + ((h >> 6) % 36), 2, 1, ["#4d6443", "#6d855e", "#566c4a"][i % 3]);
  }
}

function drawWallEast1280(X, Y, c, r) {
  drawConcrete1280(X, Y, c, r);
  P(X, Y + 4, TW, 30, "#5b5d63");
  P(X, Y + 4, TW, 4, "#8a8c92");
  P(X, Y + 30, TW, 4, "#3e4045");
  for (let bx = 0; bx < TW; bx += 20) P(X + bx, Y + 8, 1, 22, "#46484d");
  if (hash(c, r, 5) % 4 === 0) { P(X + 8, Y + 12, 22, 10, "#b03a2e"); P(X + 10, Y + 14, 18, 2, "#e8c46a"); }
}

function drawBridgeDeck1280() {
  const x0 = RIVER_C0 * TW - 6, x1 = (RIVER_C1 + 1) * TW + 6, y0 = BRIDGE_R0 * TW, y1 = (BRIDGE_R1 + 1) * TW;
  P(x0, y0 + 6, x1 - x0, y1 - y0 - 6, "#3b3a38");
  for (let y = y0 + 8; y < y1 - 6; y += 10) {
    for (let x = x0 + 2; x < x1 - 2; x += 22) {
      const off = ((y / 10) | 0) % 2 ? 11 : 0;
      const w = Math.min(21, x1 - 2 - (x + off));
      if (w > 4) cobbleStone(x + off, y, w, 10, "#a8a296", "#cbc5b8", "#7d786d", "#3b3a38");
    }
  }
  // Geländer Nord und Süd
  [y0 + 2, y1 - 12].forEach(ry => {
    P(x0, ry, x1 - x0, 10, "#1f1d1b");
    P(x0 + 2, ry + 2, x1 - x0 - 4, 3, "#6f6a61");
    for (let x = x0 + 6; x < x1 - 4; x += 14) P(x, ry + 5, 3, 5, "#4a4640");
  });
  // Mittelstreifen: weiße Grenzlinie mitten auf der Brücke
  // Laternen an den Ecken
  [[x0 + 4, y0 - 26], [x1 - 10, y0 - 26], [x0 + 4, y1 - 40], [x1 - 10, y1 - 40]].forEach(([lx, ly]) => {
    P(lx + 2, ly + 10, 3, 30, "#1c1b1a");
    P(lx, ly + 2, 7, 9, "#1c1b1a");
    P(lx + 1, ly + 3, 5, 6, "#ffe6a0");
  });
}

function drawLitfass1280(X, Y) {
  discP(X + 20, Y + 36, 14, 4, "rgba(0,0,0,.35)");
  P(X + 8, Y + 2, 24, 34, "#1c1a18");
  P(X + 10, Y + 4, 20, 30, "#3c6e4a");
  const cols = ["#e74c3c", "#f1c40f", "#3498db", "#ecf0f1"];
  for (let i = 0; i < 4; i++) P(X + 11 + (i % 2) * 9, Y + 8 + ((i / 2) | 0) * 12, 8, 10, cols[i]);
  P(X + 6, Y - 2, 28, 6, "#2d5a3a");
  P(X + 14, Y - 6, 12, 4, "#2d5a3a");
}
function drawPlakatwand1280(X, Y) {
  discP(X + 20, Y + 36, 16, 4, "rgba(0,0,0,.35)");
  P(X + 1, Y + 4, 38, 28, "#3a2414");
  P(X + 3, Y + 6, 34, 24, "#6b4a2b");
  P(X + 5, Y + 8, 13, 16, "#efe4c8"); P(X + 20, Y + 10, 15, 12, "#e8dcb8"); P(X + 9, Y + 22, 14, 7, "#f4ecd6");
  for (let i = 0; i < 4; i++) { P(X + 7, Y + 11 + i * 3, 9, 1, "#5a4a3a"); P(X + 22, Y + 13 + i * 2, 11, 1, "#5a4a3a"); }
  P(X + 29, Y + 19, 2, 2, "#1f3a9a"); P(X + 31, Y + 19, 2, 2, "#f4f1ea"); P(X + 33, Y + 19, 2, 2, "#d22630");
  P(X + 8, Y + 32, 3, 6, "#3a2414"); P(X + 29, Y + 32, 3, 6, "#3a2414");
}
function drawCar1280(X, Y, body, roof) {
  discP(X + 20, Y + 33, 18, 5, "rgba(0,0,0,.35)");
  P(X + 4, Y + 14, 30, 14, "#2a1a0e");
  P(X + 6, Y + 15, 26, 11, body);
  for (let i = 0; i < 4; i++) P(X + 8 + i * 6, Y + 15, 1, 11, "#3a2414");
  P(X + 8, Y + 8, 8, 7, roof); P(X + 18, Y + 9, 9, 6, "#c9a86a"); P(X + 20, Y + 7, 5, 3, "#d9bf86");
  P(X + 34, Y + 20, 6, 2, "#3a2414");
  discP(X + 12, Y + 29, 6, 6, "#2a1a0e"); discP(X + 12, Y + 29, 4, 4, "#8a6a3a"); discP(X + 12, Y + 29, 1, 1, "#2a1a0e");
  discP(X + 28, Y + 29, 6, 6, "#2a1a0e"); discP(X + 28, Y + 29, 4, 4, "#8a6a3a"); discP(X + 28, Y + 29, 1, 1, "#2a1a0e");
}

// ---------- Häuser ----------
function drawLagezentrumStatic1280(X, Y) {
  P(X - 4, Y + 114, 210, 10, "rgba(0,0,0,.32)");
  P(X + 6, Y + 24, 188, 94, "#1a1c1e");
  P(X + 9, Y + 27, 182, 88, "#8b8f95");
  for (let yy = Y + 33; yy < Y + 112; yy += 12) P(X + 9, yy, 182, 1, "#6f7379");
  for (let xx = X + 30; xx < X + 190; xx += 40) P(xx, Y + 27, 1, 88, "#73777d");
  P(X + 2, Y + 14, 196, 14, "#1a1c1e");
  P(X + 4, Y + 16, 192, 10, "#a3a7ad");
  P(X + 4, Y + 16, 192, 2, "#c4c8ce");
  [[X + 22, Y + 44], [X + 146, Y + 44]].forEach(([wx, wy]) => {
    P(wx, wy, 34, 10, "#111315"); P(wx + 2, wy + 2, 30, 6, "#2f4a5c");
    P(wx, wy + 26, 34, 10, "#111315"); P(wx + 2, wy + 28, 30, 6, "#2f4a5c");
  });
  // Tarnnetz über dem Eingang
  for (let i = 0; i < 3; i++) P(X + 62 + i * 26, Y + 32, 26, 12, ["#1f3a9a", "#f4f1ea", "#d22630"][i]);
  for (let i = 0; i < 3; i++) discP(X + 75 + i * 26, Y + 44, 13, 4, ["#1f3a9a", "#f4f1ea", "#d22630"][i]);
  P(X + 80, Y + 50, 40, 68, "#111315");
  P(X + 83, Y + 53, 34, 65, "#5b6066");
  P(X + 99, Y + 53, 2, 65, "#3e4247");
  P(X + 86, Y + 80, 5, 3, "#d4d7db");
  cobbleStone(X + 72, Y + 112, 56, 8, "#9a9a95", "#c4c4bf", "#6c6c68", "#1c1c1c");
  // Antennenmast und Radarschüssel
  P(X + 160, Y - 44, 3, 60, "#3a2a1a");
  discP(X + 161, Y - 46, 3, 3, "#d9a41e");
  // Uhrtürmchen
  P(X + 28, Y - 14, 28, 30, "#6f6a60"); P(X + 30, Y - 12, 24, 28, "#b9b2a2");
  discP(X + 42, Y, 8, 8, "#f4ecd6"); P(X + 41, Y - 5, 2, 6, "#222"); P(X + 42, Y - 1, 5, 2, "#222");
  P(X + 26, Y - 20, 32, 6, "#4a4640");
}
function drawLagezentrumAnim1280(X, Y, t) {
  for (let i = 0; i < 18; i++) {
    const wave = Math.round(Math.sin(i * 0.5 - t / 220) * 2);
    P(X + 163 + i, Y - 42 + wave, 1, 12, i < 6 ? "#1f3a9a" : i < 12 ? "#f4f1ea" : "#d22630");
  }
}

function drawMoskauStatic1280(X, Y) {
  P(X - 4, Y + 114, 210, 10, "rgba(0,0,0,.32)");
  P(X + 6, Y + 28, 188, 90, "#2a1210");
  P(X + 9, Y + 31, 182, 84, "#9c3a2c");
  for (let yy = Y + 35; yy < Y + 112; yy += 6) {
    const off = ((yy - Y) / 6 | 0) % 2 ? 6 : 0;
    for (let xx = X + 9 + off; xx < X + 190; xx += 12) P(xx, yy, 1, 6, "#7d2b20");
    P(X + 9, yy, 182, 1, "#83301f");
  }
  P(X + 4, Y + 24, 192, 8, "#efe4cc"); P(X + 4, Y + 30, 192, 2, "#b9ad93");
  [X + 22, X + 52, X + 132, X + 162].forEach(wx => {
    P(wx, Y + 48, 18, 34, "#efe4cc");
    P(wx + 2, Y + 54, 14, 26, "#24303a");
    discP(wx + 9, Y + 54, 7, 6, "#24303a");
    P(wx + 8, Y + 54, 2, 26, "#efe4cc");
  });
  P(X + 78, Y + 46, 44, 72, "#efe4cc");
  P(X + 82, Y + 58, 36, 60, "#3a1a10");
  discP(X + 100, Y + 58, 18, 10, "#3a1a10");
  P(X + 99, Y + 52, 2, 66, "#5a2c18");
  // Mittelturm mit Zwiebelkuppel und Stern
  P(X + 84, Y - 10, 32, 40, "#2a1210");
  P(X + 86, Y - 8, 28, 38, "#b04a36");
  P(X + 86, Y - 8, 28, 4, "#efe4cc");
  for (let dy = 0; dy < 34; dy++) {
    const w = Math.round(Math.sin(Math.min(Math.PI, (dy / 34) * Math.PI * 1.15)) * 20) + 2;
    P(X + 100 - w, Y - 44 + dy, w * 2, 1, dy < 4 ? "#8a96a3" : (dy % 6 < 3 ? "#5d6874" : "#4a5460"));
  }
  P(X + 99, Y - 56, 2, 12, "#d9a41e");
}
function drawRedStar(cx, cy, r, col) {
  activeCtx.save();
  activeCtx.fillStyle = col;
  activeCtx.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 === 0 ? r : r * 0.45;
    activeCtx.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
  }
  activeCtx.closePath();
  activeCtx.fill();
  activeCtx.restore();
}
function drawMoskauAnim1280(X, Y, t) {
  const glow = 0.2 + 0.15 * Math.sin(t / 400);
  discP(X + 100, Y - 62, 12, 12, "rgba(255,210,80," + glow.toFixed(2) + ")");
  // goldener Adler (vereinfacht)
  P(X + 98, Y - 66, 4, 8, "#d9a41e"); P(X + 90, Y - 66, 8, 3, "#d9a41e"); P(X + 102, Y - 66, 8, 3, "#d9a41e");
  P(X + 88, Y - 69, 4, 3, "#d9a41e"); P(X + 108, Y - 69, 4, 3, "#d9a41e"); P(X + 99, Y - 70, 2, 4, "#f4d35e");
}

function drawBueroStatic1280(X, Y) {
  P(X - 2, Y + 74, 86, 8, "rgba(0,0,0,.35)");
  P(X + 2, Y + 14, 76, 64, "#1b1d22");
  P(X + 4, Y + 16, 72, 60, "#d8d2c2");
  P(X + 4, Y + 16, 72, 3, "#efe9da");
  P(X, Y + 6, 80, 10, "#1b1d22");
  P(X + 2, Y + 8, 76, 6, "#3a4a63");
  // Schild KS1
  P(X + 22, Y - 10, 36, 16, "#111");
  P(X + 24, Y - 8, 32, 12, "#f2d64b");
  activeCtx.save(); activeCtx.font = "bold 11px 'Courier New', monospace"; activeCtx.fillStyle = "#111";
  activeCtx.textAlign = "center"; activeCtx.textBaseline = "middle"; activeCtx.fillText("ROUX", X + 40, Y - 1); activeCtx.restore();
  P(X + 44, Y + 26, 26, 22, "#1b1d22"); P(X + 46, Y + 28, 22, 18, "#3f6688");
  P(X + 8, Y + 36, 24, 40, "#1b1d22"); P(X + 10, Y + 38, 20, 38, "#5a3b22"); P(X + 26, Y + 56, 3, 3, "#f2d64b");
}
function drawBueroAnim1280(X, Y, t) {
  if (Math.floor(t / 900) % 3 !== 0) P(X + 48, Y + 30, 18, 14, "rgba(255,240,170,.55)");
}

function drawArchivFlags1280(X, Y, t) {
  [[X + 14, "ROI"], [X + 180, "FR"]].forEach(([px, code]) => {
    P(px, Y - 30, 3, 120, "#2a241e");
    discP(px + 1, Y - 32, 3, 3, "#d9a41e");
    for (let i = 0; i < 22; i++) {
      const wave = Math.round(Math.sin(i * 0.45 - t / 220) * 2);
      const col = code === "ROI"
        ? (i < 9 ? null : "stripe")
        : "#c8261b";
      for (let j = 0; j < 14; j++) {
        let c;
        if (code === "ROI") c = ((i % 6 === 2 || i % 6 === 3) && (j % 6 === 2 || j % 6 === 3)) ? "#d9a41e" : "#f4f1ea";
        else c = i < 7 ? "#1f3a9a" : i < 15 ? "#f4f1ea" : "#d22630";
        P(px + 3 + i, Y - 28 + j + wave, 1, 1, c);
      }
      void col;
    }
  });
}

function drawDoorMarker(h, t) {
  const dx = h.door.c * TW, dy = h.door.r * TW;
  if (CWS.solved[h.id]) {
    P(dx + 12, dy - 16, 16, 16, "#14532d"); P(dx + 14, dy - 14, 12, 12, "#22c55e");
    P(dx + 17, dy - 8, 3, 3, "#fff"); P(dx + 19, dy - 6, 3, 3, "#fff"); P(dx + 21, dy - 10, 3, 3, "#fff");
  } else if (!isUnlocked(h)) {
    discP(dx + 20, dy - 8, 9, 9, "#5a0f0a");
    discP(dx + 20, dy - 8, 7, 7, "#b3261e");
    P(dx + 17, dy - 10, 7, 6, "#f2d24b"); P(dx + 18, dy - 14, 5, 4, "#f2d24b"); P(dx + 19, dy - 13, 3, 3, "#b3261e");
  } else {
    const bob = Math.round(Math.sin(t / 220) * 3);
    const ax = dx + 20, ay = dy - 30 + bob;
    P(ax - 6, ay, 12, 4, "#f2d64b"); P(ax - 4, ay + 4, 8, 3, "#f2d64b"); P(ax - 2, ay + 7, 4, 3, "#f2d64b");
  }
}

const villageCache = document.createElement("canvas");
villageCache.width = 1280;
villageCache.height = 760;

function buildVillageCache() {
  const prev = activeCtx;
  activeCtx = villageCache.getContext("2d");
  activeCtx.imageSmoothingEnabled = false;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const X = c * TW, Y = r * TW, k = MAP[r][c], east = false;
      if (c >= RIVER_C0 && c <= RIVER_C1) { drawRiver1280(X, Y, c, r, 0); continue; }
      if (k === "T" || k === ".") (east ? drawGrassEast1280 : drawGrass1280)(X, Y, c, r);
      else if (k === "#") (east ? drawWallEast1280 : drawHedge1280)(X, Y, c, r);
      else (east ? drawConcrete1280 : drawPath1280)(X, Y, c, r);
      if (k === "D") {
        cobbleStone(X + 4, Y - 2, 32, 9, "#9c988e", "#cfcbc0", "#6e6b63", "#24201c");
        cobbleStone(X + 8, Y + 11, 24, 11, "#82412c", "#a85c43", "#57291a", "#24120a");
      }
    }
  }
  for (let r = 0; r < ROWS - 1; r++) for (let c = 0; c < COLS; c++) {
    if (MAP[r][c] === "#" && !"#T~".includes(MAP[r + 1][c])) P(c * TW, (r + 1) * TW, TW, 8, "rgba(0,0,0,.24)");
  }
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    if (MAP[r][c] === "T") drawTree1280(c * TW, r * TW, c, r);
  }
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    const k = MAP[r][c];
    if (k === "R") drawPlakatwand1280(c * TW, r * TW);
    if (k === "A") drawCar1280(c * TW, r * TW, isEastCol(c) ? "#7a5232" : "#8a3a2a", "#e8dcc0");
  }
  // Ost-Hälfte grauer, West-Hälfte etwas wärmer
  activeCtx.fillStyle = "rgba(255,190,120,0.07)";
  activeCtx.fillRect(0, 0, 1280, 760);

  drawBridgeDeck1280();
  drawBueroStatic1280(15 * TW, 8 * TW);
  // Häuser
  drawParliamentStatic1280(5 * TW, 2 * TW, "archiv");
  drawLagezentrumStatic1280(22 * TW, 2 * TW);
  drawParliamentStatic1280(5 * TW, 13 * TW, "washington");
  drawMoskauStatic1280(22 * TW, 13 * TW);

  label1280(["HAUS 1: VERSAILLES", "Juni 1789"], 5 * TW + 100, 2 * TW + 152);
  label1280(["HAUS 2: RATHAUS", "1789–1794"], 22 * TW + 100, 2 * TW + 152);
  label1280(["HAUS 3: REVOLUTIONSPLATZ", "Februar 1794"], 5 * TW + 100, 13 * TW + 152);
  label1280(["HAUS 4: KONSULAT", "1799–1804"], 22 * TW + 100, 13 * TW + 152);
  label1280(["PONT NEUF", "Druckerei (Finale)"], 640, 12 * TW + 18);
  label1280(["RIVE DROITE"], 3 * TW + 20, 6 * TW + 26);
  label1280(["RIVE GAUCHE"], 28 * TW + 20, 6 * TW + 26);
  activeCtx = prev;
}

function renderCityAnim(t) {
  for (let r = 0; r < ROWS; r++) {
    if (r >= BRIDGE_R0 && r <= BRIDGE_R1) continue;
    for (let c = RIVER_C0; c <= RIVER_C1; c++) drawRiver1280(c * TW, r * TW, c, r, t);
  }
  drawArchivFlags1280(5 * TW, 2 * TW, t);
  drawParliamentAnim1280(5 * TW, 2 * TW, t, "archiv");
  drawLagezentrumAnim1280(22 * TW, 2 * TW, t);
  drawParliamentAnim1280(5 * TW, 13 * TW, t, "washington");
  drawMoskauAnim1280(22 * TW, 13 * TW, t);
  drawBueroAnim1280(15 * TW, 8 * TW, t);
  HOUSES.forEach(h => drawDoorMarker(h, t));
}

// ===================== Innenräume nach Thema =====================
// Die Raumgeometrie (Wände, Boden, Tisch, Infotafel, Tür) bleibt wie in BRD Quest,
// damit Laufwege und Stationen stimmen. Jedes Haus bekommt Farben, Requisiten und ein UV-Versteck.
function leftWallTop(x) { return 324 - (x - 40) * 0.5 - 248; }
function rightWallTop(x) { return 24 + (x - 640) * 0.5; }
function wallPolyLeft(g) { g.moveTo(40, 62); g.lineTo(640, -238); g.lineTo(640, 24); g.lineTo(40, 324); g.closePath(); }
function wallPolyRight(g) { g.moveTo(640, 10); g.lineTo(1240, 310); g.lineTo(1240, 572); g.lineTo(640, 272); g.closePath(); }
function floorPoly(g) { g.moveTo(640, 268); g.lineTo(1256, 576); g.lineTo(1256, 760); g.lineTo(24, 760); g.lineTo(24, 576); g.closePath(); }
function tintRegion(g, polyFn, color, mode) {
  g.save(); g.beginPath(); polyFn(g); g.clip();
  g.globalCompositeOperation = mode; g.fillStyle = color; g.fillRect(0, 0, 1280, 760);
  g.restore();
}
function leftWallPanel(x0, x1, yOff, h, col, frame) {
  for (let x = x0; x < x1; x++) {
    const yt = Math.round(leftWallTop(x) + yOff);
    if (frame) { P(x, yt - 3, 1, h + 6, frame); }
    if (!frame || (x > x0 + 2 && x < x1 - 3)) P(x, yt, 1, h, col);
  }
}
function rightWallPanel(x0, x1, yOff, h, col, frame) {
  for (let x = x0; x < x1; x++) {
    const yt = Math.round(rightWallTop(x) + yOff);
    if (frame) P(x, yt - 3, 1, h + 6, frame);
    if (!frame || (x > x0 + 2 && x < x1 - 3)) P(x, yt, 1, h, col);
  }
}
function shelfOverlay(colsFn) {
  for (let dx = 32; dx <= 144; dx++) {
    const x = 1080 + dx, yTop = Math.round(320 + dx * 0.48);
    const i = ((dx - 32) / 10) | 0;
    if ((dx - 32) % 10 > 1) { P(x, yTop + 22, 1, 36, colsFn(i, 0)); P(x, yTop + 78, 1, 36, colsFn(i, 1)); }
  }
}
function drawLectern(x, y) {
  discP(x, y + 34, 30, 8, "rgba(0,0,0,.35)");
  P(x - 22, y - 30, 44, 64, "#1c0f08"); P(x - 20, y - 28, 40, 60, "#6e4222"); P(x - 20, y - 28, 40, 6, "#9c6236");
  P(x - 26, y - 36, 52, 10, "#1c0f08"); P(x - 24, y - 34, 48, 6, "#8f5932");
  [x - 10, x + 8].forEach(mx => { P(mx, y - 56, 2, 22, "#222"); discP(mx + 1, y - 58, 4, 5, "#3a3a3a"); });
}
function drawGlobe(x, y) {
  discP(x, y + 30, 24, 7, "rgba(0,0,0,.35)");
  P(x - 3, y + 6, 6, 24, "#3d2a18"); P(x - 14, y + 28, 28, 5, "#3d2a18");
  discP(x, y - 8, 20, 20, "#1c1c1c"); discP(x, y - 8, 18, 18, "#2f6fb0");
  [[-8, -14, 7, 5], [4, -4, 8, 6], [-6, 2, 5, 4], [8, -16, 4, 3]].forEach(([a, b, w, h]) => discP(x + a, y - 8 + b + 4, w, h, "#5da35a"));
}
function drawCrate(x, y) {
  discP(x, y + 26, 30, 7, "rgba(0,0,0,.35)");
  cobbleStone(x - 28, y - 18, 56, 44, "#5f6b3a", "#7d8a4c", "#3f4826", "#1a1d10");
  P(x - 22, y - 2, 44, 3, "#3f4826");
  P(x - 6, y - 26, 12, 8, "#2b2b2b"); P(x - 4, y - 24, 8, 4, "#56d364");
}
function drawCrateWood(x, y) {
  discP(x, y + 26, 30, 7, "rgba(0,0,0,.35)");
  cobbleStone(x - 28, y - 18, 56, 44, "#7a5232", "#9c6e44", "#4e331c", "#24160a");
  P(x - 22, y - 2, 44, 3, "#4e331c");
  P(x - 10, y - 24, 20, 8, "#efe4c8"); P(x - 8, y - 22, 16, 1, "#5a4a3a"); P(x - 8, y - 19, 12, 1, "#5a4a3a");
}
function drawSamovar(x, y) {
  discP(x, y + 30, 26, 7, "rgba(0,0,0,.35)");
  P(x - 16, y + 18, 32, 10, "#4a2a14");
  discP(x, y, 16, 20, "#5a3a0a"); discP(x, y, 14, 18, "#c98d22"); discP(x - 4, y - 6, 5, 7, "#f4d35e");
  P(x - 6, y - 30, 12, 10, "#c98d22"); P(x - 3, y - 36, 6, 6, "#5a3a0a");
  P(x + 14, y + 2, 10, 3, "#c98d22");
}
function drawTeletype(x, y) {
  discP(x + 40, y + 52, 60, 10, "rgba(0,0,0,.35)");
  P(x + 4, y - 40, 10, 94, "#4a2e18"); P(x + 70, y - 40, 10, 94, "#4a2e18");
  P(x, y - 46, 84, 10, "#3a2414");
  P(x + 39, y - 36, 6, 30, "#2a2a2a"); P(x + 20, y - 26, 44, 4, "#2a2a2a");
  cobbleStone(x + 8, y + 10, 68, 30, "#6b4a2b", "#8f6a3d", "#45301a", "#1c0f08");
  P(x + 12, y - 30, 58, 34, "#f4f1e6");
  for (let l = 0; l < 5; l++) P(x + 16, y - 26 + l * 6, 40 + (l % 2) * 8, 2, "#3a2a1a");
}
function drawTV(x, y) {
  discP(x + 40, y + 70, 46, 8, "rgba(0,0,0,.35)");
  P(x + 34, y + 20, 12, 52, "#5a3a1e"); P(x + 14, y + 66, 52, 6, "#3a2414");
  P(x + 4, y, 72, 46, "#c9a640"); P(x + 8, y + 4, 64, 38, "#e8dcc0");
  P(x + 8, y + 4, 21, 38, "#1f3a9a"); P(x + 51, y + 4, 21, 38, "#d22630");
  discP(x + 40, y + 22, 8, 8, "#d9a41e");
}
function drawWallBanner(x0, x1, yOff, h, col) {
  rightWallPanel(x0, x1, yOff, h, col, "#0d1a3a");
  const cx = Math.round((x0 + x1) / 2), cy = Math.round(rightWallTop(cx) + yOff + h * 0.35);
  activeCtx.save(); activeCtx.font = "bold 30px Georgia, serif"; activeCtx.fillStyle = "#d9a41e";
  activeCtx.textAlign = "center"; activeCtx.textBaseline = "middle"; activeCtx.fillText("N", cx, cy); activeCtx.restore();
}
function drawWorldMapLeft(x0, x1, yOff, h) {
  leftWallPanel(x0, x1, yOff, h, "#e8dcc0", "#4a2a14");
  // Frankreich, stark vereinfacht als Sechseck
  const pts = [[0.42, 0.10], [0.66, 0.24], [0.62, 0.62], [0.50, 0.90], [0.26, 0.82], [0.22, 0.42], [0.10, 0.30]];
  const g = activeCtx; g.save(); g.fillStyle = "#b9c79a"; g.strokeStyle = "#4a3a20"; g.lineWidth = 2; g.beginPath();
  pts.forEach(([u, v], k) => { const x = x0 + u * (x1 - x0), y = leftWallTop(x) + yOff + v * h; k ? g.lineTo(x, y) : g.moveTo(x, y); });
  g.closePath(); g.fill(); g.stroke(); g.restore();
}
function mapPinPos(u, v) {
  const x0 = 170, x1 = 470, yOff = 26, h = 200;
  const x = x0 + u * (x1 - x0);
  return [Math.round(x), Math.round(leftWallTop(x) + yOff + v * h)];
}

const ROOM_THEMES = {
  truman:        { name: "Versailles", fire: true,  uv: { x: 300, y: 624, prop: "lectern" } },
  stellvertreter:{ name: "Rathaus", fire: false, uv: { x: 968, y: 640, prop: "crate" } },
  washington:    { name: "Revolutionsplatz", fire: true,  uv: { x: 300, y: 624, prop: "globe" } },
  moskau:        { name: "Konsulat", fire: true,  uv: { x: 960, y: 640, prop: "globe" } },
  buero:         { name: "Druckerei", fire: false, uv: null }
};
const themedInteriorCaches = {};
function buildThemedInterior(id) {
  const cv = document.createElement("canvas");
  cv.width = 1280; cv.height = 760;
  const g = cv.getContext("2d");
  g.imageSmoothingEnabled = false;
  g.drawImage(interiorCache, 0, 0);
  const prev = activeCtx;
  activeCtx = g;
  if (id === "truman") {
    shelfOverlay((i, row) => ["#d8c9a3", "#a79a7c", "#cbb98e", "#8f8a7a", "#e3d6b4", "#b5a77f", "#9c8f6e"][(i + row * 3) % 7]);
    leftWallPanel(470, 560, 40, 64, "#efe2be", "#4a2a14");
    for (let l = 0; l < 5; l++) leftWallPanel(480, 548, 50 + l * 10, 2, "#6e5a3e");
  } else if (id === "stellvertreter") {
    tintRegion(g, wallPolyLeft, "#6f8190", "multiply");
    tintRegion(g, wallPolyRight, "#6f8190", "multiply");
    tintRegion(g, floorPoly, "#8b949b", "multiply");
    drawWorldMapLeft(170, 470, 26, 200);
    shelfOverlay((i, row) => (i + row) % 3 === 0 ? "#2a2f36" : "#59626e");
  } else if (id === "washington") {
    tintRegion(g, wallPolyLeft, "rgba(210,220,245,0.55)", "screen");
    tintRegion(g, wallPolyRight, "rgba(210,220,245,0.55)", "screen");
    g.save(); g.beginPath(); g.moveTo(650, 352); g.lineTo(1082, 548); g.lineTo(650, 744); g.lineTo(218, 548); g.closePath(); g.clip();
    g.globalCompositeOperation = "color"; g.fillStyle = "#7a2a20"; g.fillRect(0, 0, 1280, 760); g.restore();
    drawTV(40, 300);
    rightWallPanel(700, 820, 60, 70, "#f4f1ea", "#7a6a4a");
    rightWallPanel(704, 741, 62, 66, "#1f3a9a"); rightWallPanel(741, 779, 62, 66, "#f4f1ea"); rightWallPanel(779, 816, 62, 66, "#d22630");
  } else if (id === "moskau") {
    tintRegion(g, wallPolyLeft, "#d9a093", "multiply");
    tintRegion(g, wallPolyRight, "#d9a093", "multiply");
    drawWallBanner(700, 820, 40, 120, "#1f3a9a");
  } else if (id === "buero") {
    tintRegion(g, wallPolyLeft, "#8e9bb0", "multiply");
    tintRegion(g, wallPolyRight, "#8e9bb0", "multiply");
    leftWallPanel(170, 470, 26, 200, "#2c3440", "#14181d");
    shelfOverlay((i, row) => (i + row) % 2 ? "#7a8698" : "#566173");
  }
  const uv = ROOM_THEMES[id] && ROOM_THEMES[id].uv;
  if (uv) {
    if (uv.prop === "lectern") drawLectern(uv.x - 40, uv.y - 30);
    if (uv.prop === "crate") drawCrateWood(uv.x + 34, uv.y - 14);
    if (uv.prop === "globe") drawGlobe(uv.x + (uv.x > 640 ? 40 : -44), uv.y - 30);
    if (uv.prop === "samovar") drawSamovar(uv.x + 40, uv.y - 30);
  }
  if (id === "buero") drawTeletype(250, 150);
  activeCtx = prev;
  return cv;
}
function getThemedInterior(id) {
  if (!themedInteriorCaches[id]) themedInteriorCaches[id] = buildThemedInterior(id);
  return themedInteriorCaches[id];
}
function drawThemeAnim(id, t) {
  const th = ROOM_THEMES[id];
  if (th && th.fire) {
    const f = Math.floor(t / 95) % 4;
    discP(308, 348, 38, 16, "#d93800");
    discP(308, 336 - f * 2, 30, 22, "#ff7700");
    discP(308, 338 - f, 20, 16, "#ffbb24");
    discP(308, 342, 11, 9, "#fff6b0");
  }
  if (id === "stellvertreter") {
    [[0.42, 0.38, "Paris"], [0.38, 0.44, "Versailles"], [0.56, 0.36, "Varennes"]].forEach(([u, v], i) => {
      const [x, y] = mapPinPos(u, v);
      const on = Math.floor(t / 400 + i) % 2 === 0;
      discP(x, y, on ? 7 : 5, on ? 7 : 5, on ? "#ff3b30" : "#8a1f19");
    });
  }
  if (id === "washington") {

  }
  if (id === "buero") {
    const n = Math.floor(t / 300) % 6;
    for (let l = 0; l <= n; l++) P(266, 126 + l * 6, 36 + (l % 2) * 10, 2, "#1f3a7a");
  }
}

// UV-Lampe: Raum abdunkeln, Lichtkegel um den Agenten, Geheimschrift sichtbar machen.
function drawUVLayer(t, uvOn, note, collected) {
  if (!uvOn) return;
  const px = intPlayer.x, py = intPlayer.y - 40;
  ctx.save();
  ctx.fillStyle = "rgba(20,10,0,0.78)";
  ctx.beginPath(); ctx.rect(0, 0, 1280, 760);
  for (let k = 0; k < 4; k++) ctx.arc(px, py, 150 - k * 18, 0, Math.PI * 2, true);
  ctx.fill("evenodd");
  ctx.fillStyle = "rgba(255,180,80,0.18)";
  ctx.beginPath(); ctx.arc(px, py, 150, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
  if (!note) return;
  const d = Math.hypot(intPlayer.x - note.x, intPlayer.y - note.y);
  const a = collected ? 0.25 : Math.max(0, 1 - d / 210);
  if (a <= 0) return;
  ctx.save();
  ctx.globalAlpha = a;
  ctx.shadowColor = "#ff9a2a"; ctx.shadowBlur = 10;
  ctx.fillStyle = "#ffe3a3";
  ctx.font = "italic bold 22px 'Comic Sans MS', 'Segoe Print', cursive";
  ctx.textAlign = "center";
  ctx.fillText(collected ? "✔ Notiz in der Tasche" : "Wer profitiert?", note.x, note.y - 70);
  if (!collected) {
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText("[E] Geheimtinte lesen", note.x, note.y - 46);
  }
  ctx.restore();
}

// ===================== Fahnen der Kriegskarte (1792–1802, stark vereinfacht) =====================
const CW_FLAGS = {
  FR: ["Frankreich", "Frankreich", 1792],
  AT: ["Österreich", "Koalition", 1792], PR: ["Preußen", "Koalition", 1792], GB: ["Großbritannien", "Koalition", 1793],
  NL: ["Niederlande", "Koalition", 1793], ES: ["Spanien", "Koalition", 1793], SA: ["Sardinien", "Koalition", 1792],
  NA: ["Neapel", "Koalition", 1793], PT: ["Portugal", "Koalition", 1793], RU: ["Russland", "Koalition", 1798],
  OT: ["Osmanisches Reich", "Koalition", 1798]
};
function drawFlag(g, code, x, y, w, h) {
  const R = (xx, yy, ww, hh, c) => { g.fillStyle = c; g.fillRect(Math.round(x + xx), Math.round(y + yy), Math.max(1, Math.round(ww)), Math.max(1, Math.round(hh))); };
  const hs = cols => cols.forEach((c, i) => R(0, i * h / cols.length, w, h / cols.length + 1, c));
  const vs = cols => cols.forEach((c, i) => R(i * w / cols.length, 0, w / cols.length + 1, h, c));
  const nordic = (bg, outer, inner) => {
    R(0, 0, w, h, bg);
    const cx = w * 0.32, cy = h * 0.5;
    if (outer) { R(cx - h * 0.16, 0, h * 0.32, h, outer); R(0, cy - h * 0.16, w, h * 0.32, outer); }
    R(cx - h * 0.09, 0, h * 0.18, h, inner); R(0, cy - h * 0.09, w, h * 0.18, inner);
  };
  const star = (cx, cy, r, c) => { g.save(); g.fillStyle = c; g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; g.lineTo(x + cx + Math.cos(a) * rr, y + cy + Math.sin(a) * rr); } g.closePath(); g.fill(); g.restore(); };
  const union = (ww, hh) => {
    R(0, 0, ww, hh, "#1f3a7a");
    g.save(); g.beginPath(); g.rect(x, y, ww, hh); g.clip(); g.lineCap = "butt";
    g.strokeStyle = "#fff"; g.lineWidth = hh * 0.22; g.beginPath(); g.moveTo(x, y); g.lineTo(x + ww, y + hh); g.moveTo(x + ww, y); g.lineTo(x, y + hh); g.stroke();
    g.strokeStyle = "#c8102e"; g.lineWidth = hh * 0.08; g.stroke();
    g.restore();
    R(ww * 0.42, 0, ww * 0.16, hh, "#fff"); R(0, hh * 0.38, ww, hh * 0.24, "#fff");
    R(ww * 0.45, 0, ww * 0.10, hh, "#c8102e"); R(0, hh * 0.42, ww, hh * 0.16, "#c8102e");
  };
  switch (code) {
    case "US":
      for (let i = 0; i < 13; i++) R(0, i * h / 13, w, h / 13 + 1, i % 2 ? "#f4f1ea" : "#b22234");
      R(0, 0, w * 0.4, h * 7 / 13, "#1f3a7a");
      for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) R(w * 0.04 + i * w * 0.09, h * 0.07 + j * h * 0.16, 1.5, 1.5, "#fff");
      break;
    case "GB": union(w, h); break;
    case "AT": hs(["#c8102e", "#f4f1ea", "#c8102e"]); break;
    case "PR": hs(["#111", "#f4f1ea"]); break;
    case "ES": hs(["#c60b1e", "#ffc400", "#ffc400", "#c60b1e"]); break;
    case "SA": R(0, 0, w, h, "#c8102e"); R(w * 0.42, 0, w * 0.16, h, "#f4f1ea"); R(0, h * 0.4, w, h * 0.2, "#f4f1ea"); break;
    case "NA": R(0, 0, w, h, "#f4f1ea"); R(w * 0.4, h * 0.25, w * 0.2, h * 0.5, "#c9a640"); break;
    case "RU": hs(["#f4f1ea", "#0039a6", "#d52b1e"]); break;
    case "OT": R(0, 0, w, h, "#c8102e"); g.save(); g.fillStyle = "#fff"; g.beginPath(); g.arc(x + w * 0.45, y + h / 2, h * 0.28, 0, Math.PI * 2); g.fill(); g.fillStyle = "#c8102e"; g.beginPath(); g.arc(x + w * 0.52, y + h / 2, h * 0.23, 0, Math.PI * 2); g.fill(); g.restore(); break;
    case "CA": R(0, 0, w, h, "#c8102e"); union(w * 0.5, h * 0.5); R(w * 0.66, h * 0.32, w * 0.16, h * 0.36, "#e8dcc0"); break;
    case "FR": vs(["#1f3a9a", "#f4f1ea", "#d22630"]); break;
    case "IT": vs(["#009246", "#f4f1ea", "#ce2b37"]); break;
    case "BE": vs(["#111", "#fdda24", "#ef3340"]); break;
    case "RO": vs(["#002b7f", "#fcd116", "#ce1126"]); R(w * 0.42, h * 0.35, w * 0.16, h * 0.3, "#6a8f3a"); break;
    case "NL": hs(["#f08a24", "#f4f1ea", "#21468b"]); break;
    case "LU": hs(["#ed2939", "#f4f1ea", "#00a1de"]); break;
    case "HU": hs(["#cd2a3e", "#f4f1ea", "#436f4d"]); break;
    case "BG": hs(["#f4f1ea", "#00966e", "#d62612"]); R(w * 0.08, h * 0.12, w * 0.14, h * 0.4, "#c9a640"); break;
    case "PL": hs(["#f4f1ea", "#dc143c"]); break;
    case "DE": hs(["#111", "#dd0000", "#ffce00"]); break;
    case "DD": hs(["#111", "#dd0000", "#ffce00"]); g.save(); g.strokeStyle = "#ffce00"; g.lineWidth = Math.max(1, h * 0.08); g.beginPath(); g.arc(x + w / 2, y + h / 2, h * 0.22, 0, Math.PI * 2); g.stroke(); g.restore(); R(w / 2 - 1, h * 0.32, 2, h * 0.36, "#111"); break;
    case "CS": hs(["#f4f1ea", "#d7141a"]); g.save(); g.fillStyle = "#11457e"; g.beginPath(); g.moveTo(x, y); g.lineTo(x + w * 0.5, y + h / 2); g.lineTo(x, y + h); g.closePath(); g.fill(); g.restore(); break;
    case "DK": nordic("#c8102e", null, "#f4f1ea"); break;
    case "NO": nordic("#ba0c2f", "#f4f1ea", "#00205b"); break;
    case "IS": nordic("#02529c", "#f4f1ea", "#dc1e35"); break;
    case "GR": R(0, 0, w, h, "#0d5eaf"); R(w * 0.42, 0, w * 0.16, h, "#f4f1ea"); R(0, h * 0.38, w, h * 0.24, "#f4f1ea"); break;
    case "TR": R(0, 0, w, h, "#e30a17"); g.save(); g.fillStyle = "#fff"; g.beginPath(); g.arc(x + w * 0.38, y + h / 2, h * 0.25, 0, Math.PI * 2); g.fill(); g.fillStyle = "#e30a17"; g.beginPath(); g.arc(x + w * 0.43, y + h / 2, h * 0.2, 0, Math.PI * 2); g.fill(); g.restore(); star(w * 0.6, h / 2, h * 0.11, "#fff"); break;
    case "PT": R(0, 0, w, h, "#f4f1ea"); R(w * 0.3, h * 0.2, w * 0.4, h * 0.6, "#1f3a9a"); g.save(); g.fillStyle = "#ffcc00"; g.beginPath(); g.arc(x + w * 0.4, y + h / 2, h * 0.22, 0, Math.PI * 2); g.fill(); g.restore(); break;
    case "AL": R(0, 0, w, h, "#e41e20"); g.save(); g.fillStyle = "#111"; g.beginPath(); g.ellipse(x + w / 2, y + h * 0.58, w * 0.16, h * 0.26, 0, 0, Math.PI * 2); g.fill(); g.restore(); star(w / 2, h * 0.18, h * 0.1, "#ffd200"); break;
    case "SU": R(0, 0, w, h, "#cc0000"); star(w * 0.18, h * 0.2, h * 0.09, "#ffd700"); R(w * 0.12, h * 0.34, w * 0.12, h * 0.06, "#ffd700"); R(w * 0.16, h * 0.3, w * 0.04, h * 0.18, "#ffd700"); break;
    default: R(0, 0, w, h, "#999");
  }
  g.strokeStyle = "rgba(0,0,0,.45)"; g.lineWidth = 1; g.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
}

// ===================== Lernbilder (selbst gezeichnet, keine historischen Karikaturen) =====================
// KI-erzeugte Lernbilder (Gemini, 2026). Fehlt eine Datei, wird die alte Zeichnung genutzt.
const CW_LERNBILD_SRC = { washington: "bilder/lernbild-paris.webp", moskau: "bilder/lernbild-versailles.webp" };
const CW_LERNBILD = {};
Object.keys(CW_LERNBILD_SRC).forEach(k => { const im = new Image(); im.src = CW_LERNBILD_SRC[k]; CW_LERNBILD[k] = im; });
// Zeichnet das Lernbild; ist das Bild noch nicht geladen, wird nach dem Laden onReady aufgerufen.
function drawLernbildReady(g, which, W, H, onReady) {
  const im = CW_LERNBILD[which];
  if (im && !im.complete && onReady) im.addEventListener("load", onReady, { once: true });
  drawLernbild(g, which, W, H);
}
function drawLernbild(g, which, W, H) {
  const im = CW_LERNBILD[which];
  if (im && im.complete && im.naturalWidth) {
    g.save();
    g.imageSmoothingEnabled = true;
    g.drawImage(im, 0, 0, W, H);
    // eigene Fußleiste über die im Bild eingebrannte legen
    const bh = Math.round(H * 0.095);
    g.fillStyle = "#1c2230"; g.fillRect(0, H - bh, W, bh);
    g.fillStyle = "#f3e9cf"; g.font = "bold " + Math.round(bh * 0.42) + "px 'Segoe UI', sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
    g.fillText("Lernbild (2026), KI-erzeugt – keine historische Quelle", W / 2, H - bh / 2);
    g.restore();
    return;
  }
  g.save();
  g.clearRect(0, 0, W, H);
  const sx = W / 480, sy = H / 300;
  g.scale(sx, sy);
  const rect = (x, y, w, h, c) => { g.fillStyle = c; g.fillRect(x, y, w, h); };
  const circ = (x, y, r, c) => { g.fillStyle = c; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); };
  const missile = (x, y, s, ang) => {
    g.save(); g.translate(x, y); g.rotate(ang || 0);
    rect(-3 * s, -16 * s, 6 * s, 22 * s, "#c9ccd2");
    g.fillStyle = "#c0392b"; g.beginPath(); g.moveTo(-3 * s, -16 * s); g.lineTo(0, -24 * s); g.lineTo(3 * s, -16 * s); g.fill();
    rect(-5 * s, 2 * s, 10 * s, 4 * s, "#7f8c8d");
    g.restore();
  };
  const bear = (x, y, s) => {
    circ(x, y, 26 * s, "#6b4226"); circ(x, y - 30 * s, 17 * s, "#6b4226");
    circ(x - 12 * s, y - 44 * s, 6 * s, "#6b4226"); circ(x + 12 * s, y - 44 * s, 6 * s, "#6b4226");
    circ(x, y - 26 * s, 7 * s, "#a0704a"); circ(x - 6 * s, y - 34 * s, 2 * s, "#111"); circ(x + 6 * s, y - 34 * s, 2 * s, "#111"); circ(x, y - 27 * s, 2.5 * s, "#111");
  };
  const person = (x, y, suit) => {
    circ(x, y - 46, 9, "#e2ab80"); rect(x - 9, y - 58, 18, 6, "#2a2a2a");
    rect(x - 11, y - 36, 22, 30, suit); rect(x - 2, y - 36, 4, 14, "#8a2424");
    rect(x - 10, y - 6, 8, 26, "#2c3542"); rect(x + 2, y - 6, 8, 26, "#2c3542");
  };
  if (which === "washington") {
    rect(0, 0, 480, 300, "#cfe6f5");
    rect(0, 170, 480, 130, "#4f8fc9");
    for (let i = 0; i < 12; i++) rect(150 + i * 26, 205 + (i % 2) * 4, 18, 2, "#9cc6ea");
    rect(0, 120, 150, 180, "#efe7d6"); rect(0, 116, 150, 8, "#8b6b45");
    for (let i = 0; i < 7; i++) rect(8 + i * 20, 170, 4, 60, "#8b6b45");
    rect(0, 168, 150, 5, "#8b6b45");
    person(70, 160, "#4a5566");
    rect(84, 112, 22, 10, "#222"); circ(108, 117, 6, "#333");
    rect(20, 200, 60, 6, "#6b4a2a"); rect(30, 206, 6, 30, "#6b4a2a"); rect(66, 206, 6, 30, "#6b4a2a");
    circ(50, 194, 9, "#e02b20"); rect(46, 182, 8, 4, "#444");
    rect(92, 210, 54, 26, "#f4f1e6"); g.fillStyle = "#222"; g.font = "bold 9px sans-serif"; g.fillText("JEDER START =", 95, 221); g.fillText("ANGRIFF DER UdSSR", 95, 232);
    for (let i = 0; i < 6; i++) { const x = 190 + i * 34, y = 180 + (i % 2) * 8; rect(x, y, 26, 8, "#5d6670"); rect(x + 8, y - 6, 8, 6, "#5d6670"); if (i < 5) rect(x + 26, y + 3, 8, 2, "#2c2c2c"); }
    g.fillStyle = "#e8c86a"; g.beginPath(); g.ellipse(400, 200, 70, 22, 0, 0, Math.PI * 2); g.fill();
    rect(396, 140, 6, 58, "#7a5230"); circ(386, 138, 14, "#3f8f3a"); circ(410, 136, 14, "#3f8f3a"); circ(398, 128, 12, "#4fa548");
    bear(440, 196, 0.8);
    missile(360, 196, 0.9); missile(375, 192, 0.9); missile(420, 186, 0.9);
    rect(300, 250, 90, 18, "#f4f1e6"); g.fillStyle = "#222"; g.font = "bold 11px sans-serif"; g.fillText("90 MEILEN", 312, 263);
  } else if (which === "moskau") {
    rect(0, 0, 480, 300, "#dfe8ef");
    rect(0, 200, 480, 100, "#f4f7fa");
    g.fillStyle = "#cfd8df"; g.beginPath(); g.moveTo(120, 210); g.quadraticCurveTo(220, 40, 320, 210); g.fill();
    g.fillStyle = "#3a3f45"; g.beginPath(); g.ellipse(220, 190, 46, 34, 0, Math.PI, 0); g.fill();
    bear(220, 205, 1);
    const fence = [[110, 230], [140, 252], [180, 262], [260, 262], [300, 252], [330, 230], [330, 180], [110, 180]];
    fence.forEach(([x, y], i) => missile(x, y, 1, Math.atan2(205 - y, 220 - x) + Math.PI / 2));
    rect(268, 270, 58, 14, "#f4f1e6"); g.fillStyle = "#222"; g.font = "bold 10px sans-serif"; g.fillText("TÜRKEI", 274, 281);
    rect(66, 160, 58, 14, "#f4f1e6"); g.fillStyle = "#222"; g.fillText("ITALIEN", 70, 171);
    person(318, 290, "#4a5566"); person(352, 290, "#6b6a3b");
    rect(380, 170, 100, 60, "#5c9bd1"); g.fillStyle = "#e8c86a"; g.beginPath(); g.ellipse(440, 215, 30, 10, 0, 0, Math.PI * 2); g.fill();
    rect(438, 186, 4, 28, "#7a5230"); circ(440, 184, 9, "#3f8f3a");
    g.strokeStyle = "#6b4226"; g.lineWidth = 9; g.lineCap = "round"; g.beginPath(); g.moveTo(240, 190); g.quadraticCurveTo(360, 120, 432, 168); g.stroke();
    circ(436, 170, 9, "#6b4226");
    g.strokeStyle = "#a8803f"; g.lineWidth = 4; g.beginPath(); g.moveTo(196, 196); g.lineTo(20, 120); g.stroke();
    circ(105, 156, 11, "#a8803f"); circ(100, 152, 5, "#7d5d2a");
    g.fillStyle = "#4a3a24"; g.beginPath(); g.moveTo(10, 110); g.lineTo(34, 96); g.lineTo(30, 124); g.fill(); circ(20, 98, 6, "#f4f1ea");
  }
  g.restore();
  g.save();
  g.fillStyle = "rgba(0,0,0,.55)"; g.fillRect(0, H - 18, W, 18);
  g.fillStyle = "#fff"; g.font = "bold " + Math.round(11 * Math.min(sx, 1.4)) + "px sans-serif";
  g.fillText("Lernbild (2026), selbst gezeichnet – keine historische Karikatur", 8, H - 5);
  g.restore();
}
