// Handy-Check: startet Seiten auf Handy-Größen, macht Screenshots und meldet Probleme.
// Aufruf: node tools/handy-check.js euroquest/index.html brdquest/index.html
const { chromium, devices } = require('playwright');
const path = require('path'), fs = require('fs');
const geraete = [
  ['iPhone SE', devices['iPhone SE']], ['iPhone 14', devices['iPhone 14']],
  ['Pixel 7', devices['Pixel 7']], ['iPhone 14 quer', devices['iPhone 14 landscape']],
];
const out = path.join(__dirname, '..', 'handy-check-ergebnis'); fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch(); let fehler = 0;
  for (const seite of process.argv.slice(2)) {
    const url = 'file://' + path.resolve(seite);
    for (const [name, dev] of geraete) {
      const ctx = await browser.newContext(dev); const p = await ctx.newPage();
      const js = []; p.on('pageerror', e => js.push(e.message));
      await p.goto(url); await p.waitForTimeout(800);
      const shot = n => p.screenshot({ path: path.join(out, `${path.dirname(seite)}_${name.replace(/ /g,'-')}_${n}.png`) });
      await shot('1-start');
      const befund = await p.evaluate(() => {
        const r = [], W = innerWidth, H = innerHeight;
        if (document.documentElement.scrollWidth > W + 1) r.push(`Seite breiter als Bildschirm (${document.documentElement.scrollWidth}px > ${W}px)`);
        for (const el of document.querySelectorAll('button,.pb,a,select')) {
          const b = el.getBoundingClientRect(), s = getComputedStyle(el);
          if (!b.width || s.display === 'none' || s.visibility === 'hidden') continue;
          if ((b.width < 36 || b.height < 36) && el.offsetParent) r.push(`Klein zum Tippen (${Math.round(b.width)}×${Math.round(b.height)}): "${(el.textContent||'').trim().slice(0,30)}"`);
        }
        const c = document.querySelector('canvas');
        if (c) { const b = c.getBoundingClientRect(); if (b.height < H * 0.25) r.push(`Spielfeld nur ${Math.round(b.height)}px hoch (${Math.round(b.height/H*100)} % des Bildschirms)`); }
        const pad = document.getElementById('pad');
        if (pad) { const b = pad.getBoundingClientRect(); if (b.bottom > H + 1) r.push(`Steuerkreuz ragt unten aus dem Bildschirm (${Math.round(b.bottom)}px > ${H}px)`); }
        return r;
      });
      // Intro wegtippen und Steuerung testen
      const intro = await p.$('#qiOverlay');
      if (intro && await intro.isVisible()) { for (let i = 0; i < 8 && await intro.isVisible(); i++) { await p.tap('#qiNext'); await p.waitForTimeout(150); } await shot('2-intro-zu'); }
      else befund.push('Kein Infotext beim Start sichtbar');
      const pb = await p.$('.pb[data-dx="1"]');
      if (pb) { await pb.tap(); await pb.tap(); await p.waitForTimeout(300); await shot('3-nach-tippen'); }
      js.forEach(m => befund.push('JS-Fehler: ' + m));
      console.log(`\n${seite} · ${name} (${dev.viewport.width}×${dev.viewport.height})`);
      if (!befund.length) console.log('  ✔ keine Probleme gefunden');
      [...new Set(befund)].forEach(b => { fehler++; console.log('  ✘ ' + b); });
      await ctx.close();
    }
  }
  await browser.close(); console.log(`\n${fehler} Befunde. Screenshots: handy-check-ergebnis/`);
})();
