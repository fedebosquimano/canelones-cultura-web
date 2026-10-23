/* Canelones Cultura · comportamiento de la portada
   Lee window.CULTURA (js/datos.js) y arma titular,
   tarjetas, muro de localidades, agenda, red de centros, convocatoria, cifras y formulario.
   No hace falta editar este archivo para cargar contenido. */
(function () {
  'use strict';
  var D = window.CULTURA || {};
  var TIPOS = {
    escena: 'Escena',
    centro: 'Centros culturales',
    fiesta: 'Fiesta y música',
    conv: 'Convocatorias y formación',
    memoria: 'Memoria'
  };
  var TIPOS_ESP = { centro: 'Centro cultural', espacio: 'Espacio cultural', biblioteca: 'Biblioteca' };
  var MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'dic'];
  var DIA = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  var $ = function (id) { return document.getElementById(id); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pd(iso) { var p = String(iso || '').split('-'); return new Date(+p[0], (+p[1] || 1) - 1, +p[2] || 1); }
  /* DEMO: la fecha queda fija en el 21 de octubre de 2026 para mostrar la web sin cambios.
     Para que vuelva a seguir el calendario real, poner FECHA_FIJA = null. */
  var FECHA_FIJA = '2026-10-21';
  function hoy() { if (FECHA_FIJA) return pd(FECHA_FIJA); var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function url(u) { return /^https?:\/\//.test(u || '') ? u : ''; }

  /* «sáb 24 oct · 20 h» */
  function fechaCorta(e) {
    var a = pd(e.fecha), b = e.fechaFin ? pd(e.fechaFin) : null;
    var s = DIA[a.getDay()] + ' ' + a.getDate() + ' ' + MES[a.getMonth()];
    if (b && b > a) s += ' al ' + DIA[b.getDay()] + ' ' + b.getDate() + ' ' + MES[b.getMonth()];
    return s + (e.hora ? ' · ' + e.hora : '');
  }
  function fechaGrande(e) {
    var a = pd(e.fecha), b = e.fechaFin ? pd(e.fechaFin) : null;
    if (b && b > a) {
      return { big: a.getDate() + '–' + b.getDate(), small: DIA[a.getDay()] + ' a ' + DIA[b.getDay()] + ' · ' + MES[b.getMonth()] + (e.hora ? ' · ' + e.hora : '') };
    }
    return { big: String(a.getDate()).padStart(2, '0'), small: DIA[a.getDay()] + ' · ' + MES[a.getMonth()] + (e.hora ? ' · ' + e.hora : '') };
  }
  function mapsUrl() {
    var q = [].slice.call(arguments).filter(Boolean).join(', ') + ', Canelones, Uruguay';
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  }
  function calendario(e) {
    var a = pd(e.fecha), b = addDays(e.fechaFin ? pd(e.fechaFin) : a, 1);
    var f = function (d) { return iso(d).replace(/-/g, ''); };
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=' + encodeURIComponent(e.titulo) +
      '&dates=' + f(a) + '/' + f(b) +
      '&details=' + encodeURIComponent((e.hora ? e.hora + ' · ' : '') + 'Agenda de Canelones Cultura') +
      '&location=' + encodeURIComponent([e.lugar, e.localidad].filter(Boolean).join(', '));
  }
  /* Instagram del lugar, para actividades sin posteo propio. */
  function igLugar(lugar) {
    var c = (D.cuentas || []).filter(function (x) { return String(lugar || '').indexOf(x.clave) > -1; })[0];
    return c ? c.instagram : '';
  }
  function telHref(t) {
    var d = String(t || '').split(/[\/,]|int\./)[0].replace(/\D/g, '');
    if (d.length === 9 && d.charAt(0) === '0') d = d.slice(1);
    return d.length === 8 ? 'tel:+598' + d : '';
  }

  /* ---------- Animación de entrada ----------
     Todo está visible en reposo. Solo lo que queda debajo del pliegue al cargar se
     "arma" (estado inicial) y entra al aparecer en pantalla. Sin movimiento reducido. */
  var io = null;
  if (!reduce && 'IntersectionObserver' in window) {
    io = new IntersectionObserver(function (list) {
      list.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        en.target.classList.remove('arm');
        en.target.classList.add('in');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  }
  function arm(root) {
    if (!io) return;
    [].forEach.call((root || document).querySelectorAll('.rv, .rollhost'), function (el) {
      if (el.classList.contains('in') || el.classList.contains('arm')) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      el.classList.add('arm');
      io.observe(el);
    });
  }
  /* Número que entra como slide: cada dígito sube desde el 0 hasta su valor, escalonado. */
  function rollHTML(text) {
    text = String(text);
    return '<span class="sr">' + esc(text) + '</span><span class="roll" aria-hidden="true">' +
      text.split('').map(function (ch, i) {
        if (/\d/.test(ch)) {
          var s = '';
          for (var k = 0; k < 10; k++) s += '<i>' + k + '</i>';
          return '<span class="w"><span class="strip" style="--d:' + ch + ';--i:' + i + '">' + s + '</span></span>';
        }
        return '<span class="w"><span class="strip" style="--d:0;--i:' + i + '"><i>' + esc(ch === ' ' ? ' ' : ch) + '</i></span></span>';
      }).join('') + '</span>';
  }

  /* ---------- Datos: solo filas completas y no vencidas ---------- */
  var T = hoy();
  var events = (D.agenda || []).filter(function (e) {
    return e.fecha && e.titulo && e.lugar && e.localidad && e.tipo && e.estado !== 'baja' &&
      pd(e.fechaFin || e.fecha) >= T;
  }).sort(function (a, b) { return a.fecha < b.fecha ? -1 : a.fecha > b.fecha ? 1 : 0; });
  var LOCS = (D.localidades || []).map(function (l) { return typeof l === 'string' ? { n: l } : l; });
  var LOCN = LOCS.map(function (l) { return l.n; });

  /* ---------- Menú ---------- */
  var menu = $('menu'), ob = $('openMenu'), top = document.querySelector('.top'), menuT = null;
  menu.querySelectorAll('.menu-list li').forEach(function (li, k) { li.style.setProperty('--k', k); });
  function isOpen() { return menu.classList.contains('open'); }
  function openM() {
    var t0 = top.getBoundingClientRect().top;
    if (t0 > 1) window.scrollTo({ top: window.scrollY + t0, behavior: 'instant' });
    var r = ob.getBoundingClientRect(), t = top.getBoundingClientRect();
    menu.style.setProperty('--ox', (r.left + r.width / 2) + 'px');
    menu.style.setProperty('--oy', (r.top + r.height / 2) + 'px');
    menu.style.setProperty('--mt', Math.round(t.bottom + 8) + 'px');
    clearTimeout(menuT);
    menu.hidden = false; void menu.offsetWidth;
    menu.classList.add('open'); top.classList.add('open');
    ob.setAttribute('aria-expanded', 'true'); ob.setAttribute('aria-label', 'Cerrar menú');
    document.body.style.overflow = 'hidden';
  }
  function closeM(focus) {
    menu.classList.remove('open'); top.classList.remove('open');
    ob.setAttribute('aria-expanded', 'false'); ob.setAttribute('aria-label', 'Abrir menú');
    document.body.style.overflow = '';
    menuT = setTimeout(function () { menu.hidden = true; }, reduce ? 0 : 750);
    if (focus) ob.focus();
  }
  ob.addEventListener('click', function () { if (isOpen()) closeM(false); else openM(); });
  menu.addEventListener('click', function (ev) { if (ev.target.closest('a')) closeM(false); });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && isOpen()) closeM(true);
    if (ev.key === 'Tab' && isOpen()) {
      var links = menu.querySelectorAll('a'), first = ob, last = links[links.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Titular rotativo ---------- */
  var heroItems = [], hi = 0, timer = null;
  var locEl = $('heroLoc'), txt = $('heroTxt'), hdot = $('heroDot'), live = $('heroLive'), pb = $('pauseLoc');
  var paused = reduce;
  (function () {
    var seen = {};
    events.forEach(function (e) {
      if (LOCN.indexOf(e.localidad) > -1 && !seen[e.localidad] && heroItems.length < 6) { seen[e.localidad] = 1; heroItems.push(e); }
    });
  })();
  function paint(e, announce) {
    locEl.textContent = e.localidad;
    txt.innerHTML = '<a href="#agenda" data-loc="' + esc(e.localidad) + '">' + esc(fechaCorta(e)) + ' · ' + esc(e.titulo) + '</a>';
    hdot.className = 'dot ' + e.tipo;
    if (announce) live.textContent = 'La cultura se vive en ' + e.localidad + '. ' + fechaCorta(e) + ', ' + e.titulo + '.';
  }
  function show(n, announce) {
    if (!heroItems.length) return;
    hi = (n + heroItems.length) % heroItems.length;
    var e = heroItems[hi];
    if (reduce) { paint(e, announce); return; }
    locEl.classList.add('out');
    setTimeout(function () { paint(e, announce); locEl.classList.remove('out'); }, 300);
  }
  function loop() {
    clearInterval(timer);
    if (!paused && heroItems.length > 1) timer = setInterval(function () { show(hi + 1, false); }, 4000);
  }
  function setPause(p) { paused = p; pb.setAttribute('aria-pressed', String(p)); pb.textContent = p ? 'Seguir' : 'Pausa'; loop(); }
  if (heroItems.length) { paint(heroItems[0], false); setPause(paused); }
  else { txt.textContent = 'La agenda de las próximas semanas se está cargando desde los centros.'; $('heroCtl').hidden = true; }
  $('nextLoc').addEventListener('click', function () { show(hi + 1, true); loop(); });
  $('prevLoc').addEventListener('click', function () { show(hi - 1, true); loop(); });
  pb.addEventListener('click', function () { setPause(!paused); });
  txt.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-loc]');
    if (a) { ev.preventDefault(); setFilter({ loc: a.getAttribute('data-loc'), periodo: 'todas', tipo: '', q: '' }); }
  });

  /* ---------- Franja de contacto ---------- */
  var ICO = {"instagram": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.3\" cy=\"6.7\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/>", "facebook": "<path d=\"M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z\"/>", "x": "<path d=\"M4 4l16 16M20 4L4 20\"/>", "telefono": "<path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z\"/>", "direccion": "<path d=\"M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/>", "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 7l9 6 9-6\"/>"};
  var NOM = { instagram: 'Instagram', facebook: 'Facebook', x: 'X', telefono: 'Teléfono', direccion: 'Dirección', mail: 'Correo' };
  $('contactoList').innerHTML = (D.contacto || []).map(function (c) {
    var ext = /^https?:/.test(c.enlace || '');
    return '<li><a href="' + esc(c.enlace) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + ' aria-label="' + esc(NOM[c.tipo] + ': ' + c.dato) + '">' +
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICO[c.tipo] || '') + '</svg>' +
      '<span>' + esc(c.dato) + '</span></a></li>';
  }).join('');

  /* ---------- Tarjetas ---------- */
  function picture(f) {
    if (!f || !f.src) return '';
    return '<picture><source type="image/webp" srcset="' + esc(f.src) + '-480.webp 480w, ' + esc(f.src) + '-960.webp 960w" sizes="(min-width:1000px) 25vw, 50vw">' +
      '<img src="' + esc(f.src) + '-960.jpg" srcset="' + esc(f.src) + '-480.jpg 480w, ' + esc(f.src) + '-960.jpg 960w" sizes="(min-width:1000px) 25vw, 50vw" alt="' + esc(f.alt || '') + '" loading="lazy" decoding="async"></picture>';
  }
  function card(o, i) {
    var dark = (o.tipo === 'centro' || o.tipo === 'memoria') ? ' on-dark' : '';
    var ph = o.foto
      ? '<div class="ph foto">' + picture(o.foto) + '<span class="kind tagpill">' + esc(TIPOS[o.tipo] || '') + '</span></div>'
      : '<div class="ph" aria-hidden="true"><span class="kind tagpill">' + esc(TIPOS[o.tipo] || '') + '</span><span class="prog">' + esc(TIPOS[o.tipo] || '') + '</span></div>';
    var link = url(o.href);
    return '<article class="card rv ' + esc(o.tipo) + dark + '" style="--i:' + i + '">' + ph +
      '<h3>' + (link ? '<a href="' + esc(link) + '" target="_blank" rel="noopener">' + esc(o.titulo) + '</a>' : esc(o.titulo)) + '</h3>' +
      '<div class="meta"><span class="dot"></span><span>' + esc(o.meta) + '</span></div>' +
      (o.texto ? '<p>' + esc(o.texto) + '</p>' : '') +
      (o.acts ? '<div class="acts">' + o.acts + '</div>' : '') +
      (o.foto && o.foto.credito ? '<span class="cred">Foto: ' + esc(o.foto.credito) + '</span>' : '') +
      '</article>';
  }
  /* Lo que viene: cuatro paneles que barren de costado con el scroll (como the1.amsterdam).
     Cada panel nuevo entra desde la derecha y tapa al anterior, que queda como una franja con su número cortado. */
  var sweepEl = $('nextCards'), track = $('sweepTrack');
  var nx = events.slice(0, 4);
  if (nx.length) {
    sweepEl.innerHTML = nx.map(function (e, i) {
      var f = pd(e.fecha), ig = url(e.instagram), igl = ig ? '' : igLugar(e.lugar);
      return '<article class="pn c' + i + '" style="--i:' + i + '">' +
        '<button class="pn-tab" type="button" aria-label="Ver: ' + esc(fechaCorta(e) + ', ' + e.titulo) + '"></button>' +
        '<span class="pn-n" aria-hidden="true">' + f.getDate() + '</span>' +
        '<div class="pn-body" tabindex="-1"><p class="pn-tags"><span class="tagpill">' + esc(TIPOS[e.tipo] || '') + '</span></p>' +
        '<h3>' + (ig ? '<a href="' + esc(ig) + '" target="_blank" rel="noopener">' + esc(e.titulo) + '</a>' : esc(e.titulo)) + '</h3>' +
        '<p class="meta">' + esc(e.localidad + ' · ' + fechaCorta(e)) + '</p>' +
        '<p>' + esc(e.lugar) + '</p>' +
        '<div class="acts"><a class="btn-s" href="' + esc(mapsUrl(e.lugar, e.localidad)) + '" target="_blank" rel="noopener">Cómo llegar</a>' +
        (ig ? '<a class="btn-s" href="' + esc(ig) + '" target="_blank" rel="noopener">Ver en Instagram</a>'
          : igl ? '<a class="btn-s" href="' + esc(igl) + '" target="_blank" rel="noopener">Instagram del lugar</a>' : '') +
        (i < nx.length - 1 ? '<button class="pn-next" type="button">Siguiente actividad</button>' : '') + '</div></div></article>';
    }).join('');
    var pns = [].slice.call(sweepEl.querySelectorAll('.pn')), N = pns.length, HH = 70, STEP = 500, raf = 0;
    document.documentElement.classList.add('js-sweep');
    var medir = function () {
      HH = Math.round(document.querySelector('.top').getBoundingClientRect().height);
      document.documentElement.style.setProperty('--hh', HH + 'px');
      STEP = Math.round(window.innerHeight * 0.6);
      var movil = window.innerWidth <= 899;
      pns.forEach(function (p) {
        /* En pantallas chicas el número va arriba y el texto abajo: el número se achica para no montarse con el texto. */
        if (movil) {
          var bd = p.querySelector('.pn-body'), libre = sweepEl.offsetHeight - parseFloat(getComputedStyle(bd).bottom) - bd.offsetHeight - 56 - 14;
          p.style.setProperty('--dh', Math.max(libre, 90) + 'px');
        } else p.style.removeProperty('--dh');
        p.style.setProperty('--nw', p.querySelector('.pn-n').offsetWidth + 'px');
      });
      track.style.height = (sweepEl.offsetHeight + (N - 1) * STEP) + 'px';
    };
    var pintar = function () {
      raf = 0;
      var sc = Math.min(Math.max(HH - track.getBoundingClientRect().top, 0), (N - 1) * STEP), act = 0;
      pns.forEach(function (p, i) {
        if (!i) return;
        var q = Math.min(Math.max(sc / STEP - (i - 1), 0), 1), t = 1 - q * q * (3 - 2 * q);
        p.style.setProperty('--t', t.toFixed(4));
        p.classList.toggle('away', t >= 0.999);
        if (t <= 0.02) act = i;
      });
      pns.forEach(function (p, i) { p.classList.toggle('on', i === act); });
    };
    var pedir = function () { if (!raf) raf = requestAnimationFrame(pintar); };
    var ir = function (k) {
      window.scrollTo({ top: track.getBoundingClientRect().top + window.scrollY - HH + k * STEP + 1, behavior: reduce ? 'auto' : 'smooth' });
    };
    pns.forEach(function (p, i) {
      p.querySelector('.pn-tab').addEventListener('click', function () { ir(i); });
      var nb = p.querySelector('.pn-next');
      if (nb) nb.addEventListener('click', function () { ir(i + 1); setTimeout(function () { pns[i + 1].querySelector('.pn-body').focus({ preventScroll: true }); }, 700); });
    });
    medir(); pintar();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { medir(); pedir(); });
    window.addEventListener('scroll', pedir, { passive: true });
    window.addEventListener('resize', function () { medir(); pedir(); });
    window.addEventListener('load', function () { medir(); pedir(); });
  }
  var cr = (D.cronicas || []).slice(0, 4);
  if (cr.length) {
    $('cronicas').innerHTML = cr.map(function (c, i) {
      var f = pd(c.fecha);
      return card({
        tipo: c.tipo, titulo: c.titulo, texto: c.texto, foto: c.foto, href: c.url,
        meta: (c.localidad ? c.localidad + ' · ' : '') + DIA[f.getDay()] + ' ' + f.getDate() + ' ' + MES[f.getMonth()],
        acts: url(c.url) ? '<a class="btn-s" href="' + esc(c.url) + '" target="_blank" rel="noopener">Ver en Instagram</a>' : ''
      }, i);
    }).join('');
  }

  var gt = $('gente');
  if (gt && (D.gente || []).length) {
    gt.innerHTML = D.gente.map(function (g, i) {
      return '<li class="rv ' + esc(g.tipo) + '" style="--i:' + i + '"><div class="gf">' + picture(g) + '</div>' +
        '<span class="tagpill">' + esc(g.etiqueta) + '</span>' + (g.credito ? '<span class="cred">Foto: ' + esc(g.credito) + '</span>' : '') + '</li>';
    }).join('');
  } else if (gt) gt.hidden = true;

  /* ---------- Filtros de agenda ---------- */
  var state = { periodo: 'todas', loc: '', tipo: '', q: '' }, shown = 8, first = true;
  var selLoc = $('fLoc'), selTipo = $('fTipo'), inpQ = $('fQ');
  var locsConAct = LOCN.filter(function (n) { return events.some(function (e) { return e.localidad === n; }); });
  selLoc.innerHTML = '<option value="">Todas las localidades</option>' + locsConAct.map(function (n) { return '<option>' + esc(n) + '</option>'; }).join('') +
    (events.some(function (e) { return e.localidad === 'Todo el departamento'; }) ? '<option>Todo el departamento</option>' : '');
  selTipo.innerHTML = '<option value="">Todos los programas</option>' + Object.keys(TIPOS).map(function (k) { return '<option value="' + k + '">' + TIPOS[k] + '</option>'; }).join('');

  function rango(p) {
    if (p === 'hoy') return [T, T];
    if (p === 'finde') {
      var dow = T.getDay();
      var vie = dow === 0 ? addDays(T, -2) : dow === 6 ? addDays(T, -1) : addDays(T, 5 - dow);
      return [vie < T ? T : vie, addDays(vie, 2)];
    }
    if (p === 'mes') return [T, new Date(T.getFullYear(), T.getMonth() + 1, 0)];
    return null;
  }
  function matches(e) {
    var r = rango(state.periodo);
    if (r) { var a = pd(e.fecha), b = pd(e.fechaFin || e.fecha); if (b < r[0] || a > r[1]) return false; }
    if (state.loc && e.localidad !== state.loc) return false;
    if (state.tipo && e.tipo !== state.tipo) return false;
    if (state.q && norm(e.titulo + ' ' + e.lugar + ' ' + e.localidad + ' ' + (e.etiqueta || '')).indexOf(norm(state.q)) === -1) return false;
    return true;
  }

  var list = $('agendaList'), note = $('filterNote'), more = $('moreBtn');
  function renderAgenda() {
    var rows = events.filter(matches);
    if (!rows.length) {
      list.innerHTML = '<li class="empty">No hay actividades con esos filtros. Probá con otra fecha o con todas las localidades.</li>';
    } else {
      list.innerHTML = rows.slice(0, shown).map(function (e) {
        var d = fechaGrande(e);
        var extra = [e.entrada, e.publico].filter(Boolean).join(' · ');
        var ig = url(e.instagram);
        return '<li class="row">' +
          '<div class="date' + (first ? ' rv' : '') + '">' + esc(d.big) + '<small>' + esc(d.small) + '</small></div>' +
          '<div class="t"><h3>' + (ig ? '<a href="' + esc(ig) + '" target="_blank" rel="noopener">' + esc(e.titulo) + '</a>' : esc(e.titulo)) + '</h3><p>' + esc(e.lugar) + (extra ? '<br>' + esc(extra) : '') +
            (e.estado === 'cambio' ? '<br><b>Cambio reciente: revisá fecha y hora.</b>' : '') + '</p>' +
            '<div class="acts"><a class="btn-s" href="' + esc(mapsUrl(e.lugar, e.localidad)) + '" target="_blank" rel="noopener">Cómo llegar</a>' +
            '<a class="btn-s" href="' + esc(calendario(e)) + '" target="_blank" rel="noopener">Agregar al calendario</a>' +
            (ig ? '<a class="btn-s" href="' + esc(ig) + '" target="_blank" rel="noopener">Ver en Instagram</a>'
              : igLugar(e.lugar) ? '<a class="btn-s" href="' + esc(igLugar(e.lugar)) + '" target="_blank" rel="noopener">Instagram del lugar</a>' : '') + '</div></div>' +
          '<div class="where"><span class="dot ' + esc(e.tipo) + '"></span>' + esc(e.localidad) + '</div>' +
          '<div class="tag"><span class="tagpill">' + esc(e.etiqueta || TIPOS[e.tipo]) + '</span></div>' +
          '</li>';
      }).join('');
    }
    if (first) { arm(list); first = false; }
    more.hidden = rows.length <= shown;
    var bits = [];
    if (state.loc) bits.push(state.loc);
    if (state.tipo) bits.push(TIPOS[state.tipo]);
    note.textContent = rows.length + (rows.length === 1 ? ' actividad' : ' actividades') + (bits.length ? ' · ' + bits.join(' · ') : '');
    [].forEach.call(document.querySelectorAll('[data-periodo]'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-periodo') === state.periodo)); });
    selLoc.value = state.loc; selTipo.value = state.tipo;
    markMap();
  }
  function setFilter(o, scroll) {
    for (var k in o) state[k] = o[k];
    if ('q' in o) inpQ.value = o.q;
    shown = 8; renderAgenda();
    if (scroll !== false) $('agenda').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }
  [].forEach.call(document.querySelectorAll('[data-periodo]'), function (b) {
    b.addEventListener('click', function () { setFilter({ periodo: b.getAttribute('data-periodo') }, false); });
  });
  selLoc.addEventListener('change', function () { setFilter({ loc: selLoc.value }, false); });
  selTipo.addEventListener('change', function () { setFilter({ tipo: selTipo.value }, false); });
  inpQ.addEventListener('input', function () { setFilter({ q: inpQ.value.trim() }, false); });
  $('clearBtn').addEventListener('click', function () { setFilter({ periodo: 'todas', loc: '', tipo: '', q: '' }, false); });
  more.addEventListener('click', function () { shown += 8; renderAgenda(); });
  [].forEach.call(document.querySelectorAll('[data-finde]'), function (a) {
    a.addEventListener('click', function () { setFilter({ periodo: 'finde', loc: '', tipo: '', q: '' }, false); });
  });
  [].forEach.call(document.querySelectorAll('[data-q]'), function (a) {
    a.addEventListener('click', function () { setFilter({ periodo: 'todas', loc: '', tipo: '', q: a.getAttribute('data-q') }, false); });
  });

  /* ---------- Muro de localidades ---------- */
  var lit = {};
  events.forEach(function (e) { if (!lit[e.localidad]) lit[e.localidad] = e.tipo; });
  var wall = $('wall');
  wall.innerHTML = LOCS.map(function (l, i) {
    var kk = lit[l.n];
    if (!kk) return '<li style="--i:' + i + '"><span class="loc">' + esc(l.n) + '</span></li>';
    return '<li style="--i:' + i + '"><button class="loc on" type="button" data-l="' + esc(l.n) + '" aria-pressed="false"><span class="dot ' + kk + '"></span>' + esc(l.n) +
      '<span class="sr">, ' + TIPOS[kk] + '. Ver su agenda</span></button></li>';
  }).join('');
  wall.classList.add('rollhost');
  function markMap() {
    [].forEach.call(document.querySelectorAll('[data-l]'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-l') === state.loc)); });
  }
  $('mapa').addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-l]'); if (!b) return;
    var n = b.getAttribute('data-l');
    setFilter({ loc: state.loc === n ? '' : n, periodo: 'todas', tipo: '', q: '' });
  });
  var nLocs = Object.keys(lit).filter(function (n) { return LOCN.indexOf(n) > -1; }).length;

  /* ---------- Red de centros culturales, espacios y bibliotecas ---------- */
  var ESP = D.espacios || [], fTipoEsp = '', fLocEsp = '';
  var rLoc = $('rLoc');
  var locEsp = [];
  ESP.forEach(function (e) { if (locEsp.indexOf(e.localidad) === -1) locEsp.push(e.localidad); });
  locEsp.sort(function (a, b) { return a.localeCompare(b, 'es'); });
  rLoc.innerHTML = '<option value="">Todas las localidades</option>' + locEsp.map(function (n) { return '<option>' + esc(n) + '</option>'; }).join('');
  var redOpen = false;
  var redMore = $('redMore');
  /* Cuántos mostrar plegado: tres filas, según las columnas que entran. */
  function redCols() {
    var t = getComputedStyle($('redList')).gridTemplateColumns;
    return t && t !== 'none' ? t.split(' ').length : 1;
  }
  function renderRed() {
    var rows = ESP.filter(function (e) { return (!fTipoEsp || e.tipo === fTipoEsp) && (!fLocEsp || e.localidad === fLocEsp); });
    var cols = redCols(), limit = cols === 1 ? 4 : cols * 3;
    var vis = redOpen ? rows : rows.slice(0, limit);
    $('redList').innerHTML = vis.length ? vis.map(function (e) {
      var th = telHref(e.telefono), ig = url(e.instagram);
      return '<li class="ent"><div class="en-h"><h3>' + esc(e.nombre) + '</h3><span class="tagpill">' + esc(TIPOS_ESP[e.tipo]) + '</span></div>' +
        '<p class="en-loc">' + esc(e.localidad) + '</p>' +
        '<p class="en-dir">' + (e.direccion ? esc(e.direccion) : '<span class="falta">Dirección por confirmar</span>') + '</p>' +
        '<p class="en-tel">' + (e.telefono ? (th ? '<a href="' + th + '">' + esc(e.telefono) + '</a>' : esc(e.telefono)) : '<span class="falta">Teléfono por confirmar</span>') + '</p>' +
        '<div class="acts"><a class="btn-s" href="' + esc(mapsUrl(e.nombre, e.direccion, e.localidad)) + '" target="_blank" rel="noopener">Cómo llegar</a>' +
        (ig ? '<a class="btn-s" href="' + esc(ig) + '" target="_blank" rel="noopener">Instagram</a>' : '') + '</div></li>';
    }).join('') : '<li class="empty-red">No hay lugares con ese filtro.</li>';
    $('redNote').textContent = (redOpen || rows.length <= limit ? rows.length : 'Mostrando ' + vis.length + ' de ' + rows.length) + (rows.length === 1 ? ' lugar' : ' lugares');
    redMore.hidden = rows.length <= limit;
    redMore.setAttribute('aria-expanded', String(redOpen));
    $('redMoreTxt').textContent = redOpen ? 'Ver menos' : 'Ver los ' + rows.length;
    [].forEach.call(document.querySelectorAll('[data-rt]'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-rt') === fTipoEsp)); });
  }
  [].forEach.call(document.querySelectorAll('[data-rt]'), function (b) {
    b.addEventListener('click', function () { fTipoEsp = b.getAttribute('data-rt'); renderRed(); });
  });
  rLoc.addEventListener('change', function () { fLocEsp = rLoc.value; renderRed(); });
  redMore.addEventListener('click', function () {
    redOpen = !redOpen; renderRed();
    if (!redOpen) $('red').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  });
  var rz = 0;
  window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(renderRed, 150); });
  renderRed();

  /* ---------- Convocatoria ---------- */
  var C = D.convocatoria;
  if (C) {
    var dias = Math.round((pd(C.cierre) - T) / 864e5);
    var st = dias < 0 ? 'Cerrada' : dias <= 7 ? (dias === 0 ? 'Abierta · cierra hoy' : 'Abierta · últimos ' + (dias + 1) + ' días') : 'Abierta';
    $('convState').textContent = st + ' · ' + C.programa;
    $('convTitle').textContent = C.titulo;
    $('convFacts').innerHTML = C.fechas.map(function (f) { return '<li><span>' + esc(f[0]) + '</span><span>' + esc(f[1]) + '</span></li>'; }).join('');
    $('convQ').textContent = C.pregunta;
    var cl = $('convLink'); cl.textContent = dias < 0 ? 'Ver resultados' : C.boton; cl.href = C.link;
  }

  /* ---------- Memoria ---------- */
  $('memoList').innerHTML = (D.memoria || []).map(function (m) { return '<li><b>' + esc(m[0]) + '</b><span>' + esc(m[1]) + '</span></li>'; }).join('');

  /* ---------- Cifras: solo las que tienen fuente ---------- */
  var nCentros = ESP.filter(function (e) { return e.tipo === 'centro'; }).length;
  function cifraN(c) {
    return c.n === 'auto' ? nLocs : c.n === 'auto-act' ? events.length : c.n === 'auto-red' ? ESP.length : c.n === 'auto-centros' ? nCentros : c.n;
  }
  function cifraFmt(n) { return String(n).replace(/^\d{4,}/, function (d) { return d.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }); }
  $('cifras').innerHTML = (D.cifras || []).filter(function (c) { return c.validada !== false; }).map(function (c, i) {
    return '<div class="cifra" style="--i:' + (i % 4) + '">' + (c.area ? '<span class="tagpill area">' + esc(c.area) + '</span>' : '') +
      '<span class="n rollhost">' + rollHTML(cifraFmt(cifraN(c))) + '</span>' + esc(c.texto) +
      '<span class="src">' + (url(c.enlace) ? '<a href="' + esc(c.enlace) + '" target="_blank" rel="noopener">' + esc(c.fuente) + '</a>' : esc(c.fuente)) + '</span></div>';
  }).join('');
  if (D.actualizado) $('actualizado').textContent = 'Actualizado al ' + D.actualizado + '.';

  /* ---------- Formulario de pedidos ---------- */
  var F = D.formulario || {}, form = $('pedido'), fst = $('fSt');
  function say(msg, err) { fst.textContent = msg; fst.className = err ? 'err' : ''; }
  function fieldErr(id, msg) { var el = $(id), e = $(id + 'E'); if (e) e.textContent = msg || ''; el.setAttribute('aria-invalid', msg ? 'true' : 'false'); return !msg; }
  if (form) {
    if (F.oficial) { var of = $('fOficial'); of.hidden = false; of.querySelector('a').href = F.oficial; }
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if ($('fTrampa').value) return;
      var nombre = $('fNombre').value.trim(), mail = $('fMail').value.trim(), tipo = $('fPedido').value, msg = $('fMsg').value.trim();
      var ok = true;
      ok = fieldErr('fNombre', nombre ? '' : 'Escribí tu nombre.') && ok;
      ok = fieldErr('fMail', /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail) ? '' : 'Escribí un correo válido, por ejemplo nombre@correo.com.') && ok;
      ok = fieldErr('fPedido', tipo ? '' : 'Elegí qué necesitás.') && ok;
      ok = fieldErr('fMsg', msg.length >= 10 ? '' : 'Contanos un poco más: qué, cuándo y dónde.') && ok;
      if (!$('fOk').checked) { $('fOkE').textContent = 'Necesitamos que aceptes para poder responderte.'; ok = false; } else { $('fOkE').textContent = ''; }
      if (!ok) { say('Revisá los campos marcados.', true); var bad = form.querySelector('[aria-invalid="true"]'); if (bad) bad.focus(); return; }
      var data = { nombre: nombre, correo: mail, organizacion: $('fOrg').value.trim(), pedido: tipo, fecha: $('fFecha').value, mensaje: msg };
      var asunto = 'Pedido a Comunicación Cultural: ' + tipo;
      var cuerpo = 'Nombre: ' + nombre + '\nCorreo: ' + mail + '\nOrganización o área: ' + (data.organizacion || '-') + '\nFecha del evento: ' + (data.fecha || '-') + '\n\n' + msg;
      if (F.endpoint) {
        say('Enviando…');
        fetch(F.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
          .then(function (r) { if (!r.ok) throw new Error(r.status); say('Recibimos tu pedido. Te respondemos al correo que dejaste.'); form.reset(); })
          .catch(function () { say('No pudimos enviar el pedido. Probá de nuevo o escribinos a ' + F.correo + '.', true); });
        return;
      }
      /* Sin servicio de envío: se arma el correo y se muestra el texto para copiarlo. */
      $('fCopia').hidden = false; $('fCopiaTxt').value = 'Para: ' + F.correo + '\nAsunto: ' + asunto + '\n\n' + cuerpo;
      say('Armamos tu pedido. Si tu programa de correo no se abrió, copiá el texto de abajo y mandalo a ' + F.correo + '. Todavía no se envió nada.');
      window.location.href = 'mailto:' + F.correo + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
    });
    $('fCopiar').addEventListener('click', function () {
      var t = $('fCopiaTxt'); t.select();
      var done = function () { say('Texto copiado. Pegalo en un correo a ' + F.correo + '.'); };
      try { navigator.clipboard.writeText(t.value).then(done, function () { document.execCommand('copy'); done(); }); } catch (e) { try { document.execCommand('copy'); done(); } catch (e2) { say('Seleccioná el texto y copialo con Ctrl+C.', true); } }
    });
    $('fCorreoTxt').textContent = F.correo || '';
  }

  renderAgenda();
  arm(document);
})();
