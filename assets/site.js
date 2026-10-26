/* Baut Kopfzeile, Brotkrumen, Kacheln und Fußzeile aus data/inhalte.js */
(function () {
  const D = window.INHALTE;

  const ICONS = {
    buch: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/><path d="M8 7h7"/>',
    saeule: '<path d="M3 21h18"/><path d="M4 7h16"/><path d="M12 3 4 7"/><path d="m12 3 8 4"/><path d="M6 7v11"/><path d="M10 7v11"/><path d="M14 7v11"/><path d="M18 7v11"/><path d="M4 18h16"/>',
    kerze: '<path d="M9 10h6v11H9z"/><path d="M12 7c-1.5-1.5-1-3 0-4 1 1 1.5 2.5 0 4z"/><path d="M12 7v3"/>',
    waage: '<path d="M12 3v18"/><path d="M7 21h10"/><path d="M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0z"/><path d="m19 7-3 6a3 3 0 0 0 6 0z"/>',
    wuerfel: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01"/><path d="M16 8h.01"/><path d="M12 12h.01"/><path d="M8 16h.01"/><path d="M16 16h.01"/>',
    ordner: '<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    seite: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 16h6"/>'
  };

  function icon(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.seite}</svg>`;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function datumDe(iso) {
    const [j, m, t] = iso.split('-');
    return `${Number(t)}.${Number(m)}.${j}`;
  }

  const fachVonBereich = id => (D.bereiche.find(b => b.id === id) || {}).fach;

  let wurzel = '';

  function kopf(aktivesFach) {
    return `
      <header class="kopf"><div class="wrap">
        <a class="marke" href="${wurzel}index.html">${icon('buch')}
          <span><strong>${esc(D.titel)}</strong><small>${esc(D.untertitel)}</small></span></a>
        <nav class="nav">${D.faecher.map(f =>
          `<a href="${wurzel}${f.ordner}/index.html" class="${f.id === aktivesFach ? 'aktiv' : ''}">${esc(f.name)}</a>`).join('')}
        </nav>
      </div></header>`;
  }

  function krumen(teile) {
    return `<div class="krumen"><div class="wrap">${teile.map((t, i) =>
      i < teile.length - 1 ? `<a href="${t.href}">${esc(t.name)}</a><span class="sep">›</span>` : `<strong>${esc(t.name)}</strong>`
    ).join('')}</div></div>`;
  }

  function fuss() {
    return `<footer class="fuss"><div class="wrap">
      <span>${esc(D.titel)} · Unterrichtsmaterial · ${new Date().getFullYear()}</span>
      <a href="${wurzel}index.html">Startseite</a>
    </div></footer>
    <div class="qr-fenster" id="qrFenster" onclick="if (event.target === this) Seite.qrZu()">
      <div class="qr-box">
        <button class="zu" onclick="Seite.qrZu()" aria-label="Schließen">×</button>
        <h2 id="qrTitel"></h2>
        <img id="qrBild" alt="QR-Code">
        <div class="url" id="qrUrl"></div>
      </div>
    </div>`;
  }

  function fachKachel(f) {
    const anzahl = D.materialien.filter(m => m.status === 'aktiv' && fachVonBereich(m.bereich) === f.id).length;
    return `<li class="kachel">
      <div class="icon">${icon(f.icon)}</div>
      <h3>${esc(f.name)}</h3>
      <p class="kurz">${esc(f.kurz)}</p>
      <p class="unterzeile">${anzahl === 1 ? '1 Material' : `${anzahl} Materialien`}</p>
      <div class="aktionen"><a class="oeffnen" href="${wurzel}${f.ordner}/index.html">Öffnen →</a></div>
    </li>`;
  }

  function materialKachel(m) {
    const bereich = D.bereiche.find(b => b.id === m.bereich) || {};
    const fach = D.faecher.find(f => f.id === bereich.fach) || {};
    const geplant = m.status !== 'aktiv';
    return `<li class="kachel ${geplant ? 'geplant' : ''}">
      <div class="icon">${icon('seite')}</div>
      <p class="unterzeile">${esc(fach.name || '')}${bereich.name ? ' · ' + esc(bereich.name) : ''}</p>
      <h3>${esc(m.name)}</h3>
      <p class="kurz">${esc(m.kurz)}</p>
      ${m.merkmale ? `<div class="merkmale">${m.merkmale.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}
      <div class="aktionen">${geplant ? '<span class="unterzeile">in Vorbereitung</span>' : `
        <a class="oeffnen" href="${wurzel}${m.pfad}">Öffnen →</a>
        <button class="qr" onclick="Seite.qr('${m.id}')">📱 QR-Code</button>`}
      </div>
    </li>`;
  }

  function liste(items, fn, leerText) {
    return items.length ? `<ul class="kacheln">${items.map(fn).join('')}</ul>` : `<p class="leer">${leerText}</p>`;
  }

  function trefferFilter(q) {
    q = q.trim().toLowerCase();
    return m => !q || [m.name, m.kurz, (m.merkmale || []).join(' '),
      (D.bereiche.find(b => b.id === m.bereich) || {}).name].join(' ').toLowerCase().includes(q);
  }

  const Seite = {
    start() {
      wurzel = '';
      document.body.insertAdjacentHTML('afterbegin', kopf('') + krumen([{ name: 'Startseite' }]));
      const neueste = D.materialien.filter(m => m.status === 'aktiv')
        .sort((a, b) => b.datum.localeCompare(a.datum));
      document.getElementById('inhalt').innerHTML = `<div class="wrap">
        <p class="augenbraue">Startseite</p>
        <h1>${esc(D.titel)}</h1>
        <p class="lead">Interaktive Materialien für den Unterricht. Wähle ein Fach oder öffne ein Material direkt. Über „QR-Code“ gibst du ein Material am Beamer an die Klasse.</p>
        <input type="search" class="suche" id="suche" placeholder="🔍 Material suchen, z. B. „1848“ oder „Besatzung“">
        <div id="sucheErgebnis"></div>
        <div id="startBloecke">
          <h2>Fächer</h2>
          ${liste(D.faecher, fachKachel, '')}
          <h2>Zuletzt veröffentlicht</h2>
          ${liste(neueste.slice(0, 8), materialKachel, 'Noch keine Materialien.')}
        </div>
      </div>`;
      document.body.insertAdjacentHTML('beforeend', fuss());

      document.getElementById('suche').addEventListener('input', e => {
        const q = e.target.value;
        document.getElementById('startBloecke').style.display = q.trim() ? 'none' : '';
        document.getElementById('sucheErgebnis').innerHTML = q.trim()
          ? `<h2>Suchergebnisse</h2>${liste(D.materialien.filter(trefferFilter(q)), materialKachel, 'Nichts gefunden.')}`
          : '';
      });
    },

    fach(id) {
      wurzel = '../';
      const f = D.faecher.find(x => x.id === id);
      document.title = `${f.name} · ${D.titel}`;
      document.body.insertAdjacentHTML('afterbegin',
        kopf(id) + krumen([{ name: 'Startseite', href: '../index.html' }, { name: f.name }]));
      const bereiche = D.bereiche.filter(b => b.fach === id);
      document.getElementById('inhalt').innerHTML = `<div class="wrap">
        <p class="augenbraue">Fach</p>
        <h1>${esc(f.name)}</h1>
        <p class="lead">${esc(f.kurz)}</p>
        ${bereiche.length ? bereiche.map(b => `
          <h2>${esc(b.name)}</h2>
          ${b.kurz ? `<p class="lead" style="margin:-0.4rem 0 1rem;font-size:0.95rem">${esc(b.kurz)}</p>` : ''}
          ${liste(D.materialien.filter(m => m.bereich === b.id), materialKachel, 'Noch keine Materialien.')}
        `).join('') : '<h2>Themen</h2><p class="leer">Für dieses Fach sind noch keine Materialien veröffentlicht.</p>'}
      </div>`;
      document.body.insertAdjacentHTML('beforeend', fuss());
    },

    qr(id) {
      const m = D.materialien.find(x => x.id === id);
      const url = new URL(wurzel + m.pfad, window.location.href).href;
      document.getElementById('qrTitel').innerText = m.name;
      document.getElementById('qrBild').src =
        `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=10&data=${encodeURIComponent(url)}`;
      document.getElementById('qrUrl').innerText = url;
      document.getElementById('qrFenster').classList.add('offen');
    },

    qrZu() {
      const el = document.getElementById('qrFenster');
      if (el) el.classList.remove('offen');
    }
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') Seite.qrZu();
  });

  window.Seite = Seite;
})();
