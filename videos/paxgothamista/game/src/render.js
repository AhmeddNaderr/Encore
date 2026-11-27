// REBORN BY DAWN — gameplay renderer. Pure function of (snapshot, events, t). Works with any Canvas2D.
'use strict';
const E = require('./engine.js');
const { GRAVES, DEPTH, RISE_DUR, LEAVE_DUR, FALL_DUR } = E;

const PAL = { ink: '#120c26', plum: '#1b1233', panel: 'rgba(20,12,40,0.78)', line: 'rgba(183,156,255,0.42)', lav: '#c9b8ff', gold: '#f6d860', pink: '#f04a9e',
  white: '#fbf8ff', stoneDark: '#2b2550', stoneHi: '#e7e4f5', navy: '#1c2663', red: '#ff3d6e' };
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, k) => a + (b - a) * k;
const easeOut = x => 1 - Math.pow(1 - clamp(x), 3);
const easeIn = x => clamp(x) * clamp(x);
const easeOutBack = x => { x = clamp(x); const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const easeOutElastic = x => { x = clamp(x); if (x === 0 || x === 1) return x; return Math.pow(2, -10 * x) * Math.sin((x * 10 - .75) * (2 * Math.PI) / 3) + 1; };
function hash(a, b = 0) { let h = (Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263)) >>> 0; h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; }
function mix(hexA_, hexB, k) { const a = parseInt(hexA_.slice(1), 16), b = parseInt(hexB.slice(1), 16); const r = Math.round(lerp(a >> 16 & 255, b >> 16 & 255, k)), g = Math.round(lerp(a >> 8 & 255, b >> 8 & 255, k)), bl = Math.round(lerp(a & 255, b & 255, k)); return '#' + ((1 << 24) + (r << 16) + (g << 8) + bl).toString(16).slice(1); }

// ---------- emblems ----------
function emblemPath(ctx, type, s) {
  ctx.beginPath();
  if (type === 'heart') {
    ctx.moveTo(0, s * .42); ctx.bezierCurveTo(-s * .62, 0, -s * .55, -s * .5, -s * .25, -s * .48); ctx.bezierCurveTo(-s * .08, -s * .47, 0, -s * .32, 0, -s * .22);
    ctx.bezierCurveTo(0, -s * .32, s * .08, -s * .47, s * .25, -s * .48); ctx.bezierCurveTo(s * .55, -s * .5, s * .62, 0, 0, s * .42); ctx.closePath();
  } else if (type === 'horns') {
    for (const d of [-1, 1]) {
      ctx.moveTo(d * s * .5, s * .34); ctx.bezierCurveTo(d * s * .62, -s * .05, d * s * .5, -s * .36, d * s * .16, -s * .52);
      ctx.bezierCurveTo(d * s * .3, -s * .3, d * s * .3, -s * .02, d * s * .1, s * .34); ctx.closePath();
    }
  } else if (type === 'crown') {
    const xs = [-.46, -.23, 0, .23, .46], hs = [.24, .4, .54, .4, .24];
    ctx.moveTo(-s * .5, s * .38); ctx.lineTo(-s * .5, s * .14);
    xs.forEach((x, i) => { ctx.lineTo(s * (x - .085), s * .14); ctx.lineTo(s * x, -s * hs[i]); ctx.lineTo(s * (x + .085), s * .14); });
    ctx.lineTo(s * .5, s * .14); ctx.lineTo(s * .5, s * .38); ctx.closePath();
  } else if (type === 'rose') {
    ctx.moveTo(-s * .36, -s * .2); ctx.bezierCurveTo(-s * .36, s * .12, -s * .16, s * .2, 0, s * .2); ctx.bezierCurveTo(s * .16, s * .2, s * .36, s * .12, s * .36, -s * .2);
    ctx.quadraticCurveTo(s * .3, -s * .5, s * .14, -s * .3); ctx.quadraticCurveTo(s * .05, -s * .58, -s * .07, -s * .32); ctx.quadraticCurveTo(-s * .3, -s * .52, -s * .36, -s * .2); ctx.closePath();
    ctx.moveTo(-s * .05, s * .18); ctx.lineTo(s * .05, s * .18); ctx.lineTo(s * .045, s * .56); ctx.lineTo(-s * .045, s * .56); ctx.closePath();
    ctx.moveTo(s * .04, s * .34); ctx.quadraticCurveTo(s * .34, s * .2, s * .42, s * .36); ctx.quadraticCurveTo(s * .24, s * .46, s * .04, s * .41); ctx.closePath();
    ctx.moveTo(-s * .04, s * .28); ctx.lineTo(-s * .2, s * .24); ctx.lineTo(-s * .04, s * .36); ctx.closePath();
    ctx.moveTo(-s * .04, s * .44); ctx.lineTo(-s * .18, s * .44); ctx.lineTo(-s * .04, s * .51); ctx.closePath();
  } else if (type === 'halo') {
    ctx.ellipse(0, -s * .3, s * .34, s * .12, 0, 0, Math.PI * 2); ctx.ellipse(0, -s * .3, s * .22, s * .055, 0, 0, Math.PI * 2, true);
    for (const d of [-1, 1]) {
      ctx.moveTo(d * s * .06, s * .02); ctx.bezierCurveTo(d * s * .25, -s * .12, d * s * .5, -s * .05, d * s * .55, s * .05);
      ctx.bezierCurveTo(d * s * .45, s * .1, d * s * .5, s * .18, d * s * .4, s * .22); ctx.bezierCurveTo(d * s * .38, s * .3, d * s * .2, s * .36, d * s * .06, s * .26); ctx.closePath();
    }
  }
}
function drawEmblem(ctx, type, x, y, s, fill, stroke, lw = 3) {
  ctx.save(); ctx.translate(x, y); emblemPath(ctx, type, s);
  if (stroke) { ctx.lineJoin = 'round'; ctx.lineWidth = lw; ctx.strokeStyle = stroke; ctx.stroke(); }
  ctx.fillStyle = fill; ctx.fill('evenodd');
  if (type === 'rose') { ctx.strokeStyle = stroke || '#0008'; ctx.lineWidth = Math.max(1.2, s * .05); ctx.beginPath(); ctx.moveTo(-s * .2, -s * .12); ctx.quadraticCurveTo(0, s * .06, s * .2, -s * .12); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-s * .06, -s * .26); ctx.quadraticCurveTo(s * .02, -s * .12, s * .1, -s * .24); ctx.stroke(); }
  ctx.restore();
}

// ---------- prebuilt sprites ----------
let makeCanvas = null;
function buildSprites(A, createCanvas) {
  makeCanvas = createCanvas; module.exports.makeCanvas = createCanvas;
  const S = { glow: {}, stones: {} };
  const glow = (color, size = 256, hard = 0) => {
    const c = createCanvas(size, size), x = c.getContext('2d'), g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, hexA(color, 1)); g.addColorStop(.18 + hard, hexA(color, .55)); g.addColorStop(.5, hexA(color, .16)); g.addColorStop(1, hexA(color, 0));
    x.fillStyle = g; x.fillRect(0, 0, size, size); return c;
  };
  for (const gr of GRAVES) S.glow[gr.id] = glow(gr.glow);
  S.glow.white = glow('#ffffff'); S.glow.warm = glow('#ffcf8a'); S.glow.moon = glow('#cfe6ff'); S.glow.pink = glow('#ff4fae'); S.glow.violet = glow('#8b5cff'); S.glow.gold = glow('#f6d860');
  // Mort with a soft lavender rim so he reads against dark hair
  { const sz = 300, pad = 14, m = createCanvas(sz + pad * 2, sz + pad * 2), mx = m.getContext('2d'), sil = createCanvas(sz, sz), sx = sil.getContext('2d');
    sx.drawImage(A.mort, 0, 0, sz, sz); sx.globalCompositeOperation = 'source-in'; sx.fillStyle = '#d9ccff'; sx.fillRect(0, 0, sz, sz);
    for (let a = 0; a < 16; a++) { const r = 4.5; mx.globalAlpha = .9; mx.drawImage(sil, pad + Math.cos(a / 16 * Math.PI * 2) * r, pad + Math.sin(a / 16 * Math.PI * 2) * r); }
    mx.globalAlpha = 1; mx.drawImage(A.mort, pad, pad, sz, sz); S.mort = m; S.mortPad = pad / sz; }
  // vignette
  const v = createCanvas(1920, 1080), vx = v.getContext('2d'), vg = vx.createRadialGradient(960, 560, 380, 960, 560, 1150);
  vg.addColorStop(0, 'rgba(6,4,20,0)'); vg.addColorStop(.7, 'rgba(6,4,20,0.22)'); vg.addColorStop(1, 'rgba(6,4,20,0.7)'); vx.fillStyle = vg; vx.fillRect(0, 0, 1920, 1080); S.vignette = v;
  // grain
  const n = createCanvas(512, 512), nx = n.getContext('2d'), id = nx.createImageData(512, 512); const R = E.rng(99);
  for (let i = 0; i < id.data.length; i += 4) { const k = 110 + R() * 40 | 0; id.data[i] = id.data[i + 1] = id.data[i + 2] = k; id.data[i + 3] = 255; }
  nx.putImageData(id, 0, 0); S.grain = n;
  // blurred background variants
  const bb = createCanvas(1920, 1080), bx = bb.getContext('2d'); bx.filter = 'blur(10px)'; bx.drawImage(A.cemetery, -20, -20, 1960, 1104); bx.filter = 'none'; S.bgBlur = bb;
  // engraved stones
  for (const [gi, gr] of GRAVES.entries()) S.stones[gr.stone] = engraveStone(A, createCanvas, gi);
  // spiral (Bella Saw background motif) drawn procedurally
  S.spiral = (() => { const c = createCanvas(1400, 1400), x = c.getContext('2d'); x.fillStyle = '#f4f1ea'; x.fillRect(0, 0, 1400, 1400); x.translate(700, 700); x.fillStyle = '#0b0b0f'; x.beginPath();
    for (let a = 0; a < Math.PI * 2 * 9; a += .02) { const r = 8 + a * 12.5; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); } for (let a = Math.PI * 2 * 9; a > 0; a -= .02) { const r = 8 + a * 12.5 + 38; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); } x.closePath(); x.fill(); return c; })();
  return S;
}
const STONE_BOX = { A: [198, 350], B: [605, 366], C: [629, 680], D: [1071, 464], E: [1331, 602] };
const ENGRAVE = {
  A: { cam: [436, 636, 60, 74], crest: [434, 548, 50], n1: [462, 752, 38, 'Morticia'], n2: [466, 790, 24, 'Belladonna'], rot: .045 },
  B: { cam: [797, 548, 50, 62], crest: [797, 474, 34], n1: [799, 652, 38, 'Vera Locks'], rot: 0 },
  C: { cam: [726, 846, 40, 47], crest: [1062, 846, 36], n1: [906, 838, 32, 'Rowena Inkgrave'], n2: [906, 878, 17, 'REST IN PAX', 'caps'], rot: -.01 },
  D: { cam: [1338, 596, 46, 56], crest: [1338, 522, 32], n1: [1325, 822, 32, 'Odette Noir'], rot: .03 },
  E: { cam: [1515, 800, 52, 60], crest: [1408, 800, 34], n1: [1505, 880, 29, 'Falon St Clair'], rot: 0 },
};
function engraveStone(A, createCanvas, gi) {
  const gr = GRAVES[gi], img = A['stone_' + gr.stone], [ox, oy] = STONE_BOX[gr.stone], e = ENGRAVE[gr.stone];
  const c = createCanvas(img.width, img.height), x = c.getContext('2d'); x.drawImage(img, 0, 0);
  x.globalCompositeOperation = 'source-atop'; x.translate(-ox, -oy);
  const [cx, cy, rx, ry] = e.cam;
  x.save(); x.translate(cx, cy); x.rotate(e.rot); x.translate(-cx, -cy);
  // carved recess shadow + bevel highlight
  x.beginPath(); x.ellipse(cx + 2, cy + 3, rx + 10, ry + 10, 0, 0, Math.PI * 2); x.fillStyle = 'rgba(232,229,246,0.55)'; x.fill();
  x.beginPath(); x.ellipse(cx - 1, cy - 1, rx + 10, ry + 10, 0, 0, Math.PI * 2); x.fillStyle = '#2a2450'; x.fill();
  x.beginPath(); x.ellipse(cx, cy, rx + 5, ry + 5, 0, 0, Math.PI * 2); x.fillStyle = gr.color; x.fill();
  x.save(); x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); x.clip(); const f = A[gr.face], s = Math.max(rx, ry) * 2.15; x.drawImage(f, cx - s / 2, cy - s / 2 + ry * .06, s, s);
  const vg = x.createRadialGradient(cx, cy, ry * .5, cx, cy, ry * 1.1); vg.addColorStop(0, 'rgba(20,10,40,0)'); vg.addColorStop(1, 'rgba(20,10,40,0.45)'); x.fillStyle = vg; x.fillRect(cx - rx, cy - ry, rx * 2, ry * 2); x.restore();
  x.lineWidth = 2; x.strokeStyle = 'rgba(255,255,255,0.55)'; x.beginPath(); x.ellipse(cx, cy, rx + 1, ry + 1, 0, Math.PI * 1.1, Math.PI * 1.75); x.stroke();
  // crest emblem
  const [ex, ey, es] = e.crest; drawEmblem(x, gr.emblem, ex + 1.5, ey + 2, es, 'rgba(235,232,248,0.6)'); drawEmblem(x, gr.emblem, ex, ey, es, gr.color, '#231d45', 3.5);
  // carved names
  const carve = (txt, tx, ty, size, caps) => {
    x.font = caps ? `800 ${size}px Montserrat` : `${size}px Fraktur`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.letterSpacing = caps ? '4px' : '0px';
    x.fillStyle = 'rgba(240,238,250,0.55)'; x.fillText(txt, tx + 1.2, ty + 1.8); x.fillStyle = '#2a2450'; x.fillText(txt, tx, ty); x.letterSpacing = '0px';
  };
  carve(e.n1[3], e.n1[0], e.n1[1], e.n1[2], e.n1[4] === 'caps'); if (e.n2) carve(e.n2[3], e.n2[0], e.n2[1], e.n2[2], e.n2[4] === 'caps');
  x.restore();
  return c;
}

// ---------- souls ----------
function soulPos(snap, s, t) {
  if (s.state === 'incoming') {
    const h = E.handPos(snap, t), p = easeOut((t - s.spawnT) / (s.arriveT - s.spawnT)), cx = lerp(s.sx, h.x, .25), cy = Math.min(s.sy, h.y) - 120;
    const q = 1 - p; return { x: q * q * s.sx + 2 * q * p * cx + p * p * h.x, y: q * q * s.sy + 2 * q * p * cy + p * p * h.y, a: 1 };
  }
  if (s.state === 'held') return Object.assign(E.handPos(snap, t), { a: 1 });
  const imp = GRAVES[s.target ?? s.type]?.impact;
  if (s.state === 'falling' || s.state === 'done') { const p = easeIn((t - s.dropT) / FALL_DUR); return { x: lerp(s.dx, imp.x, p) + Math.sin(p * Math.PI) * 30, y: lerp(s.dy, imp.y, p), a: s.state === 'done' ? 0 : 1 }; }
  if (s.state === 'bounce') { const p = clamp((t - s.impactT) / 1.0), d = (s.id % 2 ? 1 : -1); return { x: imp.x + d * 220 * p, y: imp.y - 260 * p + 300 * p * p, a: 1 - p }; }
  if (s.state === 'lost') { const p = clamp((t - s.lostT) / 1.3); return { x: s.dx + Math.sin(p * 9) * 40 * p, y: s.dy - 380 * p, a: 1 - p }; }
  return { x: 0, y: 0, a: 0 };
}
function drawSoul(ctx, S, snap, s, t, scale = 1) {
  const gr = GRAVES[s.type], p = soulPos(snap, s, t); if (p.a <= 0.01) return;
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  for (let k = 9; k >= 1; k--) { const q = soulPos(snap, s, t - k * 0.022); if (q.a <= 0) continue; const r = (58 - k * 4.2) * scale; ctx.globalAlpha = p.a * (0.30 - k * 0.026); ctx.drawImage(S.glow[gr.id], q.x - r, q.y - r, r * 2, r * 2); }
  const pulse = 1 + Math.sin(t * 9 + s.id) * .05;
  ctx.globalAlpha = p.a * .75; let r = 120 * scale * pulse; ctx.drawImage(S.glow[gr.id], p.x - r, p.y - r, r * 2, r * 2);
  ctx.globalAlpha = p.a * .45; r = 60 * scale; ctx.drawImage(S.glow.white, p.x - r, p.y - r, r * 2, r * 2);
  ctx.restore();
  ctx.save(); ctx.globalAlpha = p.a;
  const R = 31 * scale * pulse, g = ctx.createRadialGradient(p.x - R * .3, p.y - R * .35, R * .1, p.x, p.y, R);
  g.addColorStop(0, '#ffffff'); g.addColorStop(.35, mix(gr.color, '#ffffff', .35)); g.addColorStop(1, mix(gr.color, '#3a1f6b', .35));
  ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); ctx.lineWidth = 2.5 * scale; ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.stroke();
  drawEmblem(ctx, gr.emblem, p.x, p.y + 1, 34 * scale, '#ffffff', '#1d1238', 3.2 * scale);
  ctx.restore();
}

// ---------- background ----------
function drawBackground(ctx, A, S, t, dawn) {
  ctx.drawImage(A.cemetery, 0, 0, 1920, 1081);
  ctx.save(); ctx.globalCompositeOperation = 'screen';
  ctx.globalAlpha = (.28 + .06 * Math.sin(t * 1.3)) * (1 - dawn * .85); ctx.drawImage(S.glow.moon, 1342 - 260, 180 - 260, 520, 520);
  for (const [wx, wy, ph] of [[532, 272, 0], [607, 272, 2.1]]) { ctx.globalAlpha = .35 + .15 * Math.sin(t * 7 + ph) * Math.sin(t * 3.1 + ph); ctx.drawImage(S.glow.warm, wx - 70, wy - 70, 140, 140); }
  ctx.restore();
  // dawn grade: warm horizon, pink sky, rising sun glow behind the hills
  if (dawn > 0.001) {
    ctx.save(); const k = dawn * dawn;
    ctx.globalCompositeOperation = 'multiply'; let g = ctx.createLinearGradient(0, 0, 0, 700); g.addColorStop(0, hexA('#ffb3d9', .45 * k)); g.addColorStop(1, hexA('#ffd2b0', .2 * k)); ctx.fillStyle = g; ctx.fillRect(0, 0, 1920, 700);
    ctx.globalCompositeOperation = 'screen'; g = ctx.createLinearGradient(0, 150, 0, 640); g.addColorStop(0, hexA('#ff5fa8', 0)); g.addColorStop(.7, hexA('#ff7a6b', .38 * k)); g.addColorStop(1, hexA('#ffb35c', .12 * k)); ctx.fillStyle = g; ctx.fillRect(0, 0, 1920, 680);
    ctx.globalAlpha = .8 * k; ctx.drawImage(S.glow.warm, 1500 - 520, 520 - 300, 1040, 600); ctx.globalAlpha = .45 * k; ctx.drawImage(S.glow.pink, 300 - 500, 480 - 260, 1000, 520);
    ctx.restore();
  }
}
function drawAmbient(ctx, S, t, dawn, front) {
  ctx.save();
  if (!front) {
    // bats crossing the sky
    for (let i = 0; i < 6; i++) {
      const sp = 120 + hash(i, 1) * 140, span = 2400, x = ((t * sp + hash(i, 2) * span) % span) - 240, y = 70 + hash(i, 3) * 260 + Math.sin(t * 1.7 + i) * 18, s = 14 + hash(i, 4) * 14;
      drawBat(ctx, x, y, s, t * (9 + hash(i, 5) * 4) + i, 'rgba(12,10,36,0.9)');
    }
    // soul motes rising
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 26; i++) { const sp = 18 + hash(i, 7) * 30, life = 9 + hash(i, 8) * 6, ph = ((t + hash(i, 9) * life) % life) / life; const x = 120 + hash(i, 10) * 1680 + Math.sin(t * .7 + i) * 30, y = 1020 - ph * (600 + sp * 4); ctx.globalAlpha = Math.sin(ph * Math.PI) * .55; const r = 7 + hash(i, 11) * 9; ctx.drawImage(S.glow[GRAVES[i % 5].id], x - r, y - r, r * 2, r * 2); }
  } else {
    ctx.globalCompositeOperation = 'screen';
    for (let i = 0; i < 4; i++) { const x = ((t * (22 + i * 9) + i * 640) % 2600) - 340, y = 900 + i * 40 + Math.sin(t * .4 + i) * 12; ctx.globalAlpha = .10 + dawn * .05; const g = ctx.createRadialGradient(x, y, 10, x, y, 420); g.addColorStop(0, '#9aa0ff'); g.addColorStop(1, 'rgba(154,160,255,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(x, y, 520, 90, 0, 0, Math.PI * 2); ctx.fill(); }
  }
  ctx.restore();
}
function drawBat(ctx, x, y, s, ph, col) {
  const f = Math.sin(ph) * .9;
  ctx.save(); ctx.translate(x, y); ctx.fillStyle = col; ctx.beginPath();
  ctx.moveTo(0, -s * .15);
  ctx.quadraticCurveTo(-s * .6, -s * (.5 + f * .6), -s * 1.4, -s * (.1 + f * .7)); ctx.quadraticCurveTo(-s * 1.0, s * .05, -s * .95, s * .25); ctx.quadraticCurveTo(-s * .6, s * .05, -s * .45, s * .3); ctx.quadraticCurveTo(-s * .25, s * .1, 0, s * .35);
  ctx.quadraticCurveTo(s * .25, s * .1, s * .45, s * .3); ctx.quadraticCurveTo(s * .6, s * .05, s * .95, s * .25); ctx.quadraticCurveTo(s * 1.0, s * .05, s * 1.4, -s * (.1 + f * .7)); ctx.quadraticCurveTo(s * .6, -s * (.5 + f * .6), 0, -s * .15);
  ctx.fill(); ctx.beginPath(); ctx.arc(0, -s * .12, s * .2, 0, Math.PI * 2); ctx.fill(); ctx.restore();
}

// ---------- girls ----------
function girlState(gr, t) {
  if (gr.state === 'empty' && !(t < gr.leaveT + LEAVE_DUR && gr.leaveT > -9)) return null;
  let rise = 1, alpha = 1, lift = 0, pop = 0, light = 0;
  if (gr.state === 'rising' || gr.state === 'risen') { rise = clamp((t - gr.riseT) / RISE_DUR); light = 1 - clamp((t - gr.riseT - .2) / .9) * .65; }
  if (gr.state === 'leaving') { const p = clamp((t - gr.leaveT) / LEAVE_DUR); alpha = 1 - easeIn(p); lift = (gr.fh ? 160 : 60) * easeIn(p); light = .4 + p * .8; }
  if (gr.state === 'empty') return null;
  for (const tp of gr.pops) { const d = t - tp; if (d >= 0 && d < .45) pop = Math.max(pop, Math.sin(d / .45 * Math.PI) * (1 - d / .45)); if (d >= 0 && d < .6) light = Math.max(light, .9 - d); }
  return { rise, alpha, lift, pop, light };
}
function drawGirl(ctx, A, S, gi, st, t) {
  const g = GRAVES[gi], img = A[g.girl], h = g.rise.h, w = h * img.width / img.height, base = g.rise.base;
  const head = base - h, hidden = g.rise.ground - head + 30;
  const r = easeOutBack(st.rise), yOff = (1 - r) * hidden - st.lift;
  const breath = Math.sin(t * 2.4 + gi * 1.7), sx = 1 + (1 - st.rise) * -.07 + st.pop * .05, sy = 1 + Math.sin(st.rise * Math.PI) * .07 + breath * .006 + st.pop * .04;
  // light column behind
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = clamp(st.alpha * (.35 + st.light * .6));
  ctx.drawImage(S.glow[g.id], g.rise.x - 260, head + 80 + yOff * .3 - 120, 520, 620);
  ctx.restore();
  ctx.save(); ctx.beginPath(); ctx.rect(0, -400, 1920, g.rise.ground + 400); ctx.clip();
  ctx.globalAlpha = st.alpha; ctx.translate(g.rise.x, base + yOff); ctx.rotate(Math.sin(t * 1.3 + gi) * .008); ctx.scale(sx, sy);
  ctx.drawImage(img, -w / 2, -h, w, h);
  if (st.light > .05) { ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = st.alpha * st.light * .32; ctx.drawImage(img, -w / 2, -h, w, h); }
  ctx.restore();
}

// ---------- FX from events ----------
function burst(ctx, S, x, y, color, id, age, n = 26, power = 1) {
  if (age < 0 || age > 1.4) return;
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  const ring = easeOut(age / .5); ctx.globalAlpha = (1 - ring) * .9; ctx.strokeStyle = color; ctx.lineWidth = 10 * (1 - ring) + 1; ctx.beginPath(); ctx.ellipse(x, y, 30 + ring * 190 * power, 12 + ring * 70 * power, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = clamp(1 - age / .35) * .9; const fr = 160 * power; ctx.drawImage(S.glow.white, x - fr, y - fr, fr * 2, fr * 2);
  for (let i = 0; i < n; i++) {
    const a = -Math.PI * (.05 + .9 * hash(id, i)), sp = (260 + hash(id, i + 50) * 520) * power, life = .7 + hash(id, i + 90) * .6; if (age > life) continue;
    const px = x + Math.cos(a) * sp * age, py = y + Math.sin(a) * sp * age + 620 * age * age, r = (6 + hash(id, i + 130) * 10) * (1 - age / life);
    ctx.globalAlpha = 1 - age / life; ctx.drawImage(i % 3 ? S.glow[GRAVES[id % 5].id] : S.glow.white, px - r * 2, py - r * 2, r * 4, r * 4);
  }
  ctx.restore();
  // dirt chunks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    const a = -Math.PI * (.15 + .7 * hash(id, i + 300)), sp = 240 + hash(id, i + 320) * 300, life = .8; if (age > life) continue;
    const px = x + Math.cos(a) * sp * age, py = y + 10 + Math.sin(a) * sp * age + 1300 * age * age, s = 5 + hash(id, i + 340) * 7;
    ctx.globalAlpha = 1 - age / life; ctx.fillStyle = i % 2 ? '#2a2046' : '#4a3a6a'; ctx.save(); ctx.translate(px, py); ctx.rotate(age * 9 + i); ctx.fillRect(-s / 2, -s / 2, s, s * .8); ctx.restore();
  }
  ctx.restore();
}
function floatText(ctx, txt, x, y, age, opts = {}) {
  const dur = opts.dur || 1.0; if (age < 0 || age > dur) return;
  const p = age / dur, sc = easeOutBack(clamp(age / .18)) * (opts.size || 1);
  ctx.save(); ctx.translate(x, y - 70 * easeOut(p)); ctx.scale(sc, sc); ctx.globalAlpha = 1 - easeIn(clamp((p - .6) / .4));
  ctx.font = opts.font || '900 46px Montserrat'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.letterSpacing = opts.ls || '0px';
  ctx.lineJoin = 'round'; ctx.lineWidth = opts.lw || 9; ctx.strokeStyle = opts.stroke || '#160c2e'; ctx.strokeText(txt, 0, 0); ctx.fillStyle = opts.fill || '#fff'; ctx.fillText(txt, 0, 0); ctx.letterSpacing = '0px';
  ctx.restore();
}
function stamp(ctx, txt, x, y, age, rot = -.12) {
  if (age < 0 || age > 1.3) return;
  const sc = (age < .12 ? lerp(1.9, 1, easeIn(age / .12)) : 1) * .78, a = 1 - easeIn(clamp((age - .9) / .4));
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(sc, sc); ctx.globalAlpha = a;
  ctx.font = '900 40px Montserrat'; ctx.letterSpacing = '3px'; const w = ctx.measureText(txt).width + 50;
  ctx.fillStyle = 'rgba(30,6,20,0.55)'; ctx.fillRect(-w / 2, -40, w, 80);
  ctx.strokeStyle = PAL.red; ctx.lineWidth = 5; ctx.strokeRect(-w / 2, -40, w, 80); ctx.lineWidth = 2; ctx.strokeRect(-w / 2 + 8, -32, w - 16, 64);
  ctx.fillStyle = PAL.red; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(txt, 0, 2); ctx.letterSpacing = '0px'; ctx.restore();
}
function nameBanner(ctx, gi, x, y, age, small) {
  const dur = small ? 1.2 : 1.6; if (age < 0 || age > dur) return;
  const g = GRAVES[gi], a = clamp(age / .15) * (1 - easeIn(clamp((age - dur + .35) / .35))), sc = easeOutBack(clamp(age / .25));
  ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc); ctx.globalAlpha = a; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '800 17px Montserrat'; ctx.letterSpacing = '6px'; ctx.lineWidth = 6; ctx.strokeStyle = '#150b2c'; ctx.strokeText('REBORN', 0, -44); ctx.fillStyle = g.color; ctx.fillText('REBORN', 0, -44); ctx.letterSpacing = '0px';
  ctx.font = '58px Fraktur'; ctx.lineJoin = 'round'; ctx.lineWidth = 10; ctx.strokeStyle = '#150b2c'; ctx.strokeText(g.name, 0, 4); ctx.fillStyle = '#ffffff'; ctx.fillText(g.name, 0, 4);
  sparkle(ctx, -ctx.measureText(g.name).width / 2 - 26, -6, 13, age * 4); sparkle(ctx, ctx.measureText(g.name).width / 2 + 26, -6, 13, age * 4 + 1);
  ctx.restore();
}
function sparkle(ctx, x, y, s, ph = 0, col = '#ffffff') {
  const k = .75 + .25 * Math.sin(ph * 3); s *= k; ctx.save(); ctx.translate(x, y); ctx.fillStyle = col; ctx.beginPath();
  ctx.moveTo(0, -s); ctx.quadraticCurveTo(s * .12, -s * .12, s, 0); ctx.quadraticCurveTo(s * .12, s * .12, 0, s); ctx.quadraticCurveTo(-s * .12, s * .12, -s, 0); ctx.quadraticCurveTo(-s * .12, -s * .12, 0, -s); ctx.fill(); ctx.restore();
}

// ---------- full frame ----------
function drawWorld(ctx, A, S, take, f, t, opts = {}) {
  const snap = take.frames[Math.max(0, Math.min(take.frames.length - 1, f))], events = take.events, tg = snap.t;
  const dawn = opts.dawn != null ? opts.dawn : clamp((tg / snap.shift - .45) / .55);
  drawBackground(ctx, A, S, tg, dawn);
  drawAmbient(ctx, S, tg, dawn, false);
  const shake = {}; // per-grave shake from errors
  for (const e of events) if (e.type === 'error' && tg - e.t >= 0 && tg - e.t < .45) { const d = tg - e.t; shake[e.g] = Math.sin(d * 70) * 9 * (1 - d / .45); }
  // graves back-to-front
  for (const gi of DEPTH) {
    const g = GRAVES[gi], st = girlState(snap.graves[gi], tg);
    if (st) drawGirl(ctx, A, S, gi, st, tg);
    const [ox, oy] = STONE_BOX[g.stone]; const sk = shake[gi] || 0;
    ctx.drawImage(S.stones[g.stone], ox + sk, oy);
    const gs = snap.graves[gi], up = E.isUp(gs, tg) || gs.state === 'leaving';
    if (up || (st && st.light > .1)) { // cameo glow
      const e = ENGRAVE[g.stone]; ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = .55 + .2 * Math.sin(tg * 5); const rr = e.cam[3] * 2.6; ctx.drawImage(S.glow[g.id], e.cam[0] - rr + sk, e.cam[1] - rr, rr * 2, rr * 2); ctx.restore();
    }
  }
  drawAmbient(ctx, S, tg, dawn, true);
  // event FX in world space
  for (const e of events) {
    const age = tg - e.t; if (age < 0 || age > 2.4) continue;
    if (e.type === 'rise' || e.type === 'pop') {
      const g = GRAVES[e.g]; burst(ctx, S, g.impact.x, g.impact.y + 10, g.glow, e.id, age, e.type === 'rise' ? 26 : 14, e.type === 'rise' ? 1 : .7);
      floatText(ctx, '+' + e.delta, g.impact.x, g.impact.y - 70, age, { fill: g.color, dur: .95 });
      if (e.mult > 1) floatText(ctx, '×' + e.mult, g.impact.x + 92, g.impact.y - 112, age - .05, { fill: PAL.gold, size: .7, dur: .85 });
      if (e.type === 'rise' && opts.names !== false) { const hy = Math.max(230, g.rise.base - g.rise.h * .6); nameBanner(ctx, e.g, clamp(g.rise.x, 400, 1520), hy, age - .25, opts.names === 'small'); }
    }
    if (e.type === 'error') { const g = GRAVES[e.g]; stamp(ctx, 'PAPERWORK ERROR', g.impact.x, g.impact.y + 60, age); floatText(ctx, 'WRONG GRAVE', g.impact.x, g.impact.y - 30, age - .1, { fill: '#ffd1e3', size: .6, dur: 1.1 }); }
    if (e.type === 'lost') floatText(ctx, 'LOST SOUL', 960, 300, age, { fill: '#ffd1e3', size: .8 });
  }
  // souls + Mort
  for (const s of snap.souls) if (s.state !== 'held') drawSoul(ctx, S, snap, s, tg);
  drawMort(ctx, A, S, snap, events, tg);
  for (const s of snap.souls) if (s.state === 'held') drawSoul(ctx, S, snap, s, tg);
  return { snap, dawn };
}
function drawMort(ctx, A, S, snap, events, t) {
  const p = E.mortPos(snap, t), a = E.mortPos(snap, t - .02), b = E.mortPos(snap, t + .02), vx = (b.x - a.x) / .04, vy = (b.y - a.y) / .04;
  let squash = 0; for (const e of events) if (e.type === 'drop' && t - e.t >= 0 && t - e.t < .3) squash = Math.sin((t - e.t) / .3 * Math.PI) * (1 - (t - e.t) / .3);
  const lean = clamp(vx / 4200, -.28, .28), sz = 270;
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = .35; ctx.drawImage(S.glow.violet, p.x - 210, p.y - 190, 420, 420); ctx.restore();
  ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(lean); ctx.scale(1 + squash * .12 - Math.abs(vy) / 30000, 1 - squash * .14 + Math.abs(vy) / 30000);
  const ps = sz * (1 + 2 * S.mortPad); ctx.drawImage(S.mort, -ps / 2, -ps / 2, ps, ps); ctx.restore();
}

// ---------- HUD ----------
function scoreAt(events, t, base) { let prev = base, cur = base, et = -9; for (const e of events) { if (e.score == null || e.t > t) continue; prev = cur; cur = e.score; et = e.t; } const k = easeOut((t - et) / .4); return Math.round(lerp(prev, cur, k)); }
function panel(ctx, x, y, w, h, r = 18, fill = PAL.panel, stroke = PAL.line) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fillStyle = fill; ctx.fill(); if (stroke) { ctx.lineWidth = 1.5; ctx.strokeStyle = stroke; ctx.stroke(); } }
function label(ctx, txt, x, y, size, color, align = 'left', ls = 3, weight = 800) { ctx.font = `${weight} ${size}px Montserrat`; ctx.letterSpacing = ls + 'px'; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillStyle = color; ctx.fillText(txt, x, y); ctx.letterSpacing = '0px'; }
function soulChip(ctx, S, type, x, y, r, a = 1) {
  const g = GRAVES[type]; ctx.save(); ctx.globalAlpha = a; ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = a * .5; ctx.drawImage(S.glow[g.id], x - r * 2.2, y - r * 2.2, r * 4.4, r * 4.4); ctx.restore();
  ctx.save(); ctx.globalAlpha = a; const gg = ctx.createRadialGradient(x - r * .3, y - r * .35, r * .1, x, y, r); gg.addColorStop(0, '#fff'); gg.addColorStop(.4, mix(g.color, '#ffffff', .3)); gg.addColorStop(1, mix(g.color, '#3a1f6b', .3));
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = gg; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = '#fff'; ctx.stroke(); drawEmblem(ctx, g.emblem, x, y + 1, r * 1.1, '#fff', '#1d1238', 2.4); ctx.restore();
}
function drawHUD(ctx, A, S, take, snap, t, L = {}) {
  const ev = take.events, W = L.w || 1920, sc = L.scale || 1;
  ctx.save(); ctx.scale(sc, sc); const Wd = W / sc;
  // registry
  const rx = L.regX ?? 40, ry = L.regY ?? 32; panel(ctx, rx, ry, 360, 118);
  label(ctx, 'DEATH REGISTRY', rx + 22, ry + 26, 15, PAL.gold, 'left', 3.5);
  label(ctx, 'NEXT SOULS', rx + 338, ry + 26, 11, 'rgba(201,184,255,0.75)', 'right', 2, 700);
  const held = snap.souls.find(s => s.state === 'held' || s.state === 'incoming');
  const list = (held ? [held.type] : []).concat(snap.queue).slice(0, 5);
  list.forEach((ty, i) => soulChip(ctx, S, ty, rx + 48 + i * 64, ry + 76, i === 0 ? 27 : 21, i === 0 ? 1 : .8));
  if (held) { ctx.save(); ctx.strokeStyle = PAL.gold; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(rx + 48, ry + 76, 33, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
  // dawn meter
  const dw = 520, dx = Wd / 2 - dw / 2, dy = L.dawnY ?? 48, p = clamp(snap.t / snap.shift);
  panel(ctx, dx - 70, dy - 26, dw + 140, 74);
  const left = Math.max(0, snap.shift - snap.t), urgent = left < 10 && !snap.over;
  label(ctx, snap.over ? 'DAWN — SHIFT COMPLETE' : `DAWN IN 0:${String(Math.ceil(left)).padStart(2, '0')}`, Wd / 2, dy - 3, 15, urgent ? '#ffb36b' : PAL.white, 'center', 4);
  ctx.beginPath(); ctx.roundRect(dx, dy + 18, dw, 12, 6); ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fill();
  const gg = ctx.createLinearGradient(dx, 0, dx + dw, 0); gg.addColorStop(0, '#5b4bff'); gg.addColorStop(.6, PAL.pink); gg.addColorStop(1, '#ffc46b');
  ctx.beginPath(); ctx.roundRect(dx, dy + 18, Math.max(12, dw * p), 12, 6); ctx.fillStyle = gg; ctx.fill();
  // moon & sun icons
  ctx.beginPath(); ctx.arc(dx - 34, dy + 12, 15, 0, Math.PI * 2); ctx.fillStyle = '#dfe9ff'; ctx.fill(); ctx.beginPath(); ctx.arc(dx - 27, dy + 7, 13, 0, Math.PI * 2); ctx.fillStyle = '#1b1233'; ctx.fill();
  ctx.save(); ctx.translate(dx + dw + 34, dy + 12); ctx.fillStyle = '#ffc46b'; for (let i = 0; i < 8; i++) { ctx.rotate(Math.PI / 4); ctx.fillRect(-2, -21, 4, 7); } ctx.beginPath(); ctx.arc(0, 0, 11, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  // score
  const sx = Wd - (L.scoreR ?? 40); panel(ctx, sx - 330, 32, 330, 118);
  label(ctx, 'SCORE', sx - 22, 58, 15, PAL.gold, 'right', 3.5);
  const shown = scoreAt(ev, snap.t, take.frames[0].score);
  ctx.font = '900 54px Montserrat'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#fff'; ctx.fillText(shown.toLocaleString('en-US'), sx - 22, 104);
  if (snap.streak > 1) { const lastInc = [...ev].reverse().find(e => e.t <= snap.t && e.streak), bump = lastInc ? Math.max(0, 1 - (snap.t - lastInc.t) / .25) : 0;
    ctx.save(); ctx.translate(sx - 252, 58); ctx.scale(1 + bump * .25, 1 + bump * .25); panel(ctx, -56, -16, 112, 32, 16, PAL.pink, null); label(ctx, `STREAK ×${snap.streak}`, 0, 1, 12, '#fff', 'center', 1.5, 900); ctx.restore(); }
  // coffee
  const cx = L.cofX ?? 40, cy = L.cofY ?? 960; panel(ctx, cx, cy, 392, 92);
  label(ctx, "MORT'S COFFEE", cx + 22, cy + 22, 13, PAL.gold, 'left', 3);
  const spill = [...ev].reverse().find(e => (e.type === 'error' || e.type === 'lost') && e.t <= snap.t && snap.t - e.t < .9);
  for (let i = 0; i < 5; i++) {
    const full = i < snap.coffee, x = cx + 30 + i * 70, y = cy + 34; ctx.save(); ctx.globalAlpha = full ? 1 : .22;
    if (spill && i === spill.coffee) { const d = (snap.t - spill.t) / .9; ctx.globalAlpha = 1 - d * .78; ctx.translate(x + 28, y + 50); ctx.rotate(Math.min(1, d * 3) * .9); ctx.translate(-x - 28, -y - 50);
      ctx.save(); ctx.globalAlpha = 1 - d; ctx.fillStyle = '#6b3b22'; for (let k = 0; k < 6; k++) { const a = -1.2 + k * .35, s2 = d * 70; ctx.beginPath(); ctx.arc(x + 50 + Math.cos(a) * s2, y + 30 + Math.sin(a) * s2 + d * d * 60, 5 - d * 3, 0, Math.PI * 2); ctx.fill(); } ctx.restore(); }
    ctx.drawImage(A.mug, x - 4, y - 4, 58, 62); ctx.restore();
  }
  if (L.encoreTag !== false) label(ctx, 'CONCEPT BY ENCORE STUDIO', Wd - 40, (L.tagY ?? 1050), 12, 'rgba(232,224,255,0.62)', 'right', 3, 700);
  ctx.restore();
}

// ---------- big moments (screen space) ----------
function drawMoments(ctx, A, S, take, snap, t, W = 1920, H = 1080) {
  for (const e of take.events) {
    const age = snap.t - e.t; if (age < 0) continue;
    if (e.type === 'fullhouse' && age < 2.2) {
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = clamp(1 - age / .18) * .14; ctx.fillStyle = '#ffe6f6'; ctx.fillRect(0, 0, W, H); ctx.restore();
      const a = clamp(age / .12) * (1 - easeIn(clamp((age - 1.75) / .45))), sc = lerp(1.35, 1, easeOutElastic(clamp(age / .7)));
      ctx.save(); ctx.translate(W / 2, H * .43); ctx.scale(sc, sc); ctx.globalAlpha = a;
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = a * .7; ctx.drawImage(S.glow.pink, -700, -260, 1400, 520); ctx.restore();
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = '800 22px Montserrat'; ctx.letterSpacing = '10px'; ctx.lineWidth = 7; ctx.strokeStyle = '#140a2a'; ctx.strokeText('ALL FIVE RISEN', 0, -112); ctx.fillStyle = PAL.gold; ctx.fillText('ALL FIVE RISEN', 0, -112); ctx.letterSpacing = '0px';
      ctx.font = '132px Fraktur'; ctx.lineJoin = 'round'; ctx.lineWidth = 18; ctx.strokeStyle = '#140a2a'; ctx.strokeText('The Gothly Departed', 0, 0); ctx.fillStyle = '#fff'; ctx.fillText('The Gothly Departed', 0, 0);
      const tw = ctx.measureText('The Gothly Departed').width; sparkle(ctx, -tw / 2 - 40, -20, 24, age * 3); sparkle(ctx, tw / 2 + 40, -20, 24, age * 3 + 1); sparkle(ctx, tw / 2 + 10, -70, 12, age * 4);
      ctx.font = '900 34px Montserrat'; ctx.lineWidth = 8; ctx.strokeText('+5,000', 0, 98); ctx.fillStyle = PAL.pink; ctx.fillText('+5,000', 0, 98);
      ctx.restore();
    }
    if (e.type === 'special' && age < 2.6) {
      const inA = easeOut(age / .28), out = easeIn(clamp((age - 2.15) / .45)), a = inA * (1 - out);
      ctx.save(); ctx.globalAlpha = a * .92; ctx.translate(W / 2, H / 2); ctx.rotate(age * 2.2); const ss = Math.max(W, H) * 1.5 * (0.6 + .4 * inA); ctx.drawImage(S.spiral, -ss / 2, -ss / 2, ss, ss); ctx.restore();
      const rr = 250 * easeOutBack(clamp((age - .12) / .45)) * (1 - out * .3);
      if (rr > 1) { ctx.save(); ctx.globalAlpha = 1 - out; ctx.beginPath(); ctx.arc(W / 2, H * .46, rr + 12, 0, Math.PI * 2); ctx.fillStyle = '#0b0b0f'; ctx.fill(); ctx.beginPath(); ctx.arc(W / 2, H * .46, rr, 0, Math.PI * 2); ctx.clip(); ctx.drawImage(A.bella, W / 2 - rr * 1.25, H * .46 - rr * 1.15, rr * 2.5, rr * 2.5); ctx.restore();
        ctx.save(); ctx.globalAlpha = 1 - out; ctx.lineWidth = 8; ctx.strokeStyle = '#e8213c'; ctx.beginPath(); ctx.arc(W / 2, H * .46, rr + 8, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
      const ta = clamp((age - .35) / .2) * (1 - out);
      ctx.save(); ctx.globalAlpha = ta; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      panel(ctx, W / 2 - 330, H * .46 + 262, 660, 132, 22, 'rgba(10,8,14,0.9)', '#e8213c');
      ctx.font = '900 22px Montserrat'; ctx.letterSpacing = '8px'; ctx.fillStyle = '#ff4060'; ctx.fillText('1/1 HORROR RISEN', W / 2, H * .46 + 296); ctx.letterSpacing = '0px';
      ctx.font = '64px Fraktur'; ctx.fillStyle = '#fff'; ctx.fillText('Bella Saw', W / 2 - 70, H * .46 + 350); ctx.font = '900 36px Montserrat'; ctx.fillStyle = PAL.gold; ctx.fillText('+6,666', W / 2 + 190, H * .46 + 352);
      ctx.restore();
    }
    if (e.type === 'mass' && age < 1.9) {
      const a = clamp(age / .15) * (1 - easeIn(clamp((age - 1.45) / .45))), sx = lerp(-1, 0, easeOut(age / .35)) + lerp(0, 1, easeIn(clamp((age - 1.5) / .4)));
      ctx.save(); ctx.globalAlpha = a; ctx.translate(W / 2 + sx * 300, H * .27); ctx.rotate(-.04);
      panel(ctx, -470, -62, 940, 124, 22, 'rgba(18,10,36,0.92)', PAL.gold);
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '800 17px Montserrat'; ctx.letterSpacing = '8px'; ctx.fillStyle = PAL.pink; ctx.fillText('COLLAB WAVE INCOMING', 0, -30); ctx.letterSpacing = '0px';
      ctx.font = '68px Fraktur'; ctx.fillStyle = '#fff'; ctx.fillText('Mass Death Registry', 0, 18); ctx.restore();
    }
    if (e.type === 'dawn' && age < 99) {
      const a = clamp((age - .3) / .3);
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = clamp(1 - age / .6) * .4; ctx.fillStyle = '#ffd9a8'; ctx.fillRect(0, 0, W, H); ctx.restore();
      ctx.save(); ctx.globalAlpha = a; ctx.translate(W / 2, H * .5); const sc = lerp(1.25, 1, easeOutBack(clamp((age - .3) / .5))); ctx.scale(sc, sc); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = '800 22px Montserrat'; ctx.letterSpacing = '10px'; ctx.lineWidth = 7; ctx.strokeStyle = '#2a0f2a'; ctx.strokeText('THE SUN IS UP', 0, -80); ctx.fillStyle = '#ffd38a'; ctx.fillText('THE SUN IS UP', 0, -80); ctx.letterSpacing = '0px';
      ctx.font = '120px Fraktur'; ctx.lineWidth = 16; ctx.strokeText('Shift Complete', 0, 10); ctx.fillStyle = '#fff'; ctx.fillText('Shift Complete', 0, 10); ctx.restore();
    }
  }
}

function drawPost(ctx, S, W, H, t) {
  ctx.drawImage(S.vignette, 0, 0, W, H);
  ctx.save(); ctx.globalCompositeOperation = 'overlay'; ctx.globalAlpha = .07; const ox = -(hash(Math.floor(t * 60), 3) * 400 | 0), oy = -(hash(Math.floor(t * 60), 4) * 400 | 0);
  for (let y = oy; y < H; y += 512) for (let x = ox; x < W; x += 512) ctx.drawImage(S.grain, x, y); ctx.restore();
}

module.exports = { PAL, GRAVES, buildSprites, drawWorld, drawHUD, drawMoments, drawPost, drawEmblem, drawBat, sparkle, panel, label, soulChip, floatText, hexA, mix, clamp, lerp, easeOut, easeIn, easeOutBack, easeOutElastic, hash, STONE_BOX, ENGRAVE };
