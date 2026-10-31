// Kleiner QR-Code-Erzeuger (Byte-Modus, Fehlerkorrektur M, Versionen 1–13), läuft ganz im Browser.
// QR.dataUrl(text, pixelProModul) liefert ein PNG als data:-Adresse – kein fremder Dienst nötig.
var QR = (function () {
  var EXP = new Array(512), LOG = new Array(256), x = 1, i;
  for (i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 0x100) x ^= 0x11D; }
  for (i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  function gmul(a, b) { return a && b ? EXP[LOG[a] + LOG[b]] : 0; }
  function rsGen(n) {
    var g = [1];
    for (var i = 0; i < n; i++) {
      g = [0].concat(g);
      for (var j = 0; j < g.length - 1; j++) g[j] ^= gmul(g[j + 1], EXP[i]);
    }
    return g.reverse();
  }
  function rsEnc(data, n) {
    var g = rsGen(n), res = data.concat(new Array(n).fill(0));
    for (var i = 0; i < data.length; i++) {
      var c = res[i];
      if (c) for (var j = 0; j < g.length; j++) res[i + j] ^= gmul(g[j], c);
    }
    return res.slice(data.length);
  }
  var ECC = {1:[10,[[1,16]]],2:[16,[[1,28]]],3:[26,[[1,44]]],4:[18,[[2,32]]],5:[24,[[2,43]]],6:[16,[[4,27]]],
    7:[18,[[4,31]]],8:[22,[[2,38],[2,39]]],9:[22,[[3,36],[2,37]]],10:[26,[[4,43],[1,44]]],11:[30,[[1,50],[4,51]]],
    12:[22,[[6,36],[2,37]]],13:[22,[[8,37],[1,38]]]};
  var ALIGN = {1:[],2:[6,18],3:[6,22],4:[6,26],5:[6,30],6:[6,34],7:[6,22,38],8:[6,24,42],9:[6,26,46],
    10:[6,28,50],11:[6,30,54],12:[6,32,58],13:[6,34,62]};
  function cap(v) { return ECC[v][1].reduce(function (s, g) { return s + g[0] * g[1]; }, 0); }
  function lenbits(v) { return v <= 9 ? 8 : 16; }
  function utf8(t) { return Array.from(new TextEncoder().encode(t)); }
  function pick(n) {
    for (var v = 1; v <= 13; v++) if (Math.ceil((4 + lenbits(v) + 8 * n) / 8) <= cap(v)) return v;
    throw new Error('Text zu lang');
  }
  function encode(bytes, v) {
    var bits = [];
    function put(val, n) { for (var i = n - 1; i >= 0; i--) bits.push((val >> i) & 1); }
    put(4, 4); put(bytes.length, lenbits(v));
    bytes.forEach(function (b) { put(b, 8); });
    put(0, Math.min(4, cap(v) * 8 - bits.length));
    while (bits.length % 8) bits.push(0);
    var cw = [];
    for (var i = 0; i < bits.length; i += 8) cw.push(parseInt(bits.slice(i, i + 8).join(''), 2));
    var pad = [0xEC, 0x11], k = 0;
    while (cw.length < cap(v)) cw.push(pad[k++ % 2]);
    return cw;
  }
  function interleave(cw, v) {
    var ecn = ECC[v][0], blocks = [], ecs = [], pos = 0;
    ECC[v][1].forEach(function (g) {
      for (var b = 0; b < g[0]; b++) { var blk = cw.slice(pos, pos + g[1]); pos += g[1]; blocks.push(blk); ecs.push(rsEnc(blk, ecn)); }
    });
    var out = [], max = Math.max.apply(null, blocks.map(function (b) { return b.length; }));
    for (var i = 0; i < max; i++) blocks.forEach(function (b) { if (i < b.length) out.push(b[i]); });
    for (i = 0; i < ecn; i++) ecs.forEach(function (e) { out.push(e[i]); });
    return out;
  }
  function matrix(v) {
    var size = 17 + 4 * v, m = [], r, c, i, j;
    for (r = 0; r < size; r++) m.push(new Array(size).fill(null));
    function finder(r0, c0) {
      for (var i = -1; i < 8; i++) for (var j = -1; j < 8; j++) {
        var rr = r0 + i, cc = c0 + j;
        if (rr < 0 || cc < 0 || rr >= size || cc >= size) continue;
        var inside = i >= 0 && i <= 6 && j >= 0 && j <= 6;
        m[rr][cc] = inside && (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4)) ? 1 : 0;
      }
    }
    finder(0, 0); finder(0, size - 7); finder(size - 7, 0);
    for (i = 8; i < size - 8; i++) { m[6][i] = i % 2 ? 0 : 1; m[i][6] = i % 2 ? 0 : 1; }
    ALIGN[v].forEach(function (a) { ALIGN[v].forEach(function (b) {
      if ((a === 6 && b === 6) || (a === 6 && b === size - 7) || (a === size - 7 && b === 6)) return;
      for (var i = -2; i <= 2; i++) for (var j = -2; j <= 2; j++) m[a + i][b + j] = Math.max(Math.abs(i), Math.abs(j)) !== 1 ? 1 : 0;
    }); });
    m[size - 8][8] = 1;
    for (i = 0; i < 9; i++) { if (m[8][i] === null) m[8][i] = 'F'; if (m[i][8] === null) m[i][8] = 'F'; }
    for (i = 0; i < 8; i++) { if (m[8][size - 1 - i] === null) m[8][size - 1 - i] = 'F'; if (m[size - 1 - i][8] === null) m[size - 1 - i][8] = 'F'; }
    if (v >= 7) for (i = 0; i < 6; i++) for (j = 0; j < 3; j++) { m[size - 11 + j][i] = 'V'; m[i][size - 11 + j] = 'V'; }
    var fixed = m.map(function (row) { return row.map(function (x) { return x !== null; }); });
    return [m, size, fixed];
  }
  function place(m, size, cw) {
    var bits = [];
    cw.forEach(function (b) { for (var i = 7; i >= 0; i--) bits.push((b >> i) & 1); });
    var idx = 0, up = true, col = size - 1;
    while (col > 0) {
      if (col === 6) col--;
      for (var k = 0; k < size; k++) {
        var r = up ? size - 1 - k : k;
        [col, col - 1].forEach(function (c) { if (m[r][c] === null) { m[r][c] = idx < bits.length ? bits[idx] : 0; idx++; } });
      }
      up = !up; col -= 2;
    }
  }
  var MASKS = [function (r, c) { return (r + c) % 2 === 0; }, function (r) { return r % 2 === 0; },
    function (r, c) { return c % 3 === 0; }, function (r, c) { return (r + c) % 3 === 0; },
    function (r, c) { return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0; },
    function (r, c) { return (r * c) % 2 + (r * c) % 3 === 0; },
    function (r, c) { return ((r * c) % 2 + (r * c) % 3) % 2 === 0; },
    function (r, c) { return ((r + c) % 2 + (r * c) % 3) % 2 === 0; }];
  function fmtBits(mask) {
    var data = mask, v = data << 10, g = 0x537;
    for (var i = 4; i >= 0; i--) if (v & (1 << (i + 10))) v ^= g << i;
    return ((data << 10) | v) ^ 0x5412;
  }
  function verBits(v) {
    var val = v << 12, g = 0x1F25;
    for (var i = 5; i >= 0; i--) if (val & (1 << (i + 12))) val ^= g << i;
    return (v << 12) | val;
  }
  function penalty(g, size) {
    var p = 0, lines = g.slice(), r, c;
    for (c = 0; c < size; c++) lines.push(g.map(function (row) { return row[c]; }));
    lines.forEach(function (line) {
      var run = 1;
      for (var i = 1; i < line.length; i++) {
        if (line[i] === line[i - 1]) run++; else { if (run >= 5) p += 3 + run - 5; run = 1; }
      }
      if (run >= 5) p += 3 + run - 5;
    });
    for (r = 0; r < size - 1; r++) for (c = 0; c < size - 1; c++) {
      var s = g[r][c] + g[r][c + 1] + g[r + 1][c] + g[r + 1][c + 1];
      if (s === 0 || s === 4) p += 3;
    }
    var dark = 0; g.forEach(function (row) { row.forEach(function (x) { dark += x; }); });
    p += 10 * Math.floor(Math.abs(Math.floor(dark * 100 / (size * size)) - 50) / 5);
    return p;
  }
  function make(text) {
    var bytes = utf8(text), v = pick(bytes.length), cw = interleave(encode(bytes, v), v);
    var res = matrix(v), base = res[0], size = res[1], fixed = res[2];
    place(base, size, cw);
    var best = null, bestP = null;
    MASKS.forEach(function (f, mi) {
      var g = [], r, c, i;
      for (r = 0; r < size; r++) { g.push([]); for (c = 0; c < size; c++) {
        var val = base[r][c];
        g[r].push(fixed[r][c] ? (val === 'F' || val === 'V' ? 0 : val) : (f(r, c) ? val ^ 1 : val));
      } }
      var fb = fmtBits(mi);
      for (i = 0; i < 15; i++) {
        var b = (fb >> i) & 1;
        if (i < 6) g[i][8] = b; else if (i === 6) g[7][8] = b; else if (i === 7) g[8][8] = b;
        else if (i === 8) g[8][7] = b; else g[8][14 - i] = b;
        if (i < 8) g[8][size - 1 - i] = b; else g[size - 15 + i][8] = b;
      }
      g[size - 8][8] = 1;
      if (v >= 7) { var vb = verBits(v); for (i = 0; i < 18; i++) {
        var bb = (vb >> i) & 1; g[size - 11 + i % 3][Math.floor(i / 3)] = bb; g[Math.floor(i / 3)][size - 11 + i % 3] = bb; } }
      var p = penalty(g, size);
      if (bestP === null || p < bestP) { best = g; bestP = p; }
    });
    return best;
  }
  function dataUrl(text, box) {
    box = box || 8;
    var g = make(text), size = g.length, border = 4, n = (size + 2 * border) * box;
    var cv = document.createElement('canvas'); cv.width = cv.height = n;
    var ctx = cv.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, n, n); ctx.fillStyle = '#000';
    for (var r = 0; r < size; r++) for (var c = 0; c < size; c++)
      if (g[r][c]) ctx.fillRect((c + border) * box, (r + border) * box, box, box);
    return cv.toDataURL('image/png');
  }
  return { make: make, dataUrl: dataUrl };
})();
