// HUD + world-anchored text for the interactive game (Canvas2D over the WebGL view).
const R = require('./render.js');
const E = require('./engine2.js');
const { PAL, clamp, lerp, easeOut, easeIn, easeOutBack, panel, label, floatText, sparkle, drawEmblem } = R;
const { GRAVES, C } = E;

function chip(ctx, S, type, x, y, r, a = 1) {
  if (type === E.RARE) { ctx.save(); ctx.globalAlpha = a; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fillStyle = '#f4f1ea'; ctx.fill(); ctx.clip(); ctx.translate(x, y); ctx.fillStyle = '#0b0b0f'; ctx.beginPath(); for (let q = 0; q < 24; q += .1) ctx.lineTo(Math.cos(q) * q * r / 24, Math.sin(q) * q * r / 24); ctx.lineWidth = r * .18; ctx.strokeStyle = '#0b0b0f'; ctx.stroke(); ctx.restore(); ctx.save(); ctx.globalAlpha = a; ctx.lineWidth = 2.5; ctx.strokeStyle = '#e8213c'; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.stroke(); ctx.restore(); return; }
  R.soulChip(ctx, S, type, x, y, r, a);
}
function scoreAt(events, t, base) { let prev = base, cur = base, et = -9; for (const e of events) { if (e.score == null || e.t > t) continue; prev = cur; cur = e.score; et = e.t; } return Math.round(lerp(prev, cur, easeOut((t - et) / .4))); }

function drawHUD2(ctx, A, S, snap, events, L = {}) {
  const W = L.w || 1920, sc = L.scale || 1, t = snap.t; ctx.save(); ctx.scale(sc, sc); const Wd = W / sc;
  // carry panel
  const rx = L.regX ?? 40, ry = L.regY ?? 32; panel(ctx, rx, ry, 360, 118);
  label(ctx, 'CARRYING', rx + 22, ry + 26, 15, PAL.gold, 'left', 3.5); label(ctx, `BOTS BANISHED ${snap.banished}`, rx + 338, ry + 26, 11, 'rgba(201,184,255,0.8)', 'right', 2, 700);
  const carried = snap.carried.map(id => snap.souls.find(s => s.id === id)).filter(Boolean);
  for (let i = 0; i < C.MAXC; i++) {
    const x = rx + 52 + i * 74, y = ry + 76, s = carried[i];
    if (s) { const cAge = t - (s.catchT || 0), b = 1 + Math.max(0, 1 - cAge / .25) * .3; ctx.save(); ctx.translate(x, y); ctx.scale(b, b); chip(ctx, S, s.type, 0, 0, 26); ctx.restore(); }
    else { ctx.save(); ctx.setLineDash([5, 6]); ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(201,184,255,0.45)'; ctx.beginPath(); ctx.arc(x, y, 24, 0, 7); ctx.stroke(); ctx.restore(); }
  }
  label(ctx, `${carried.length}/${C.MAXC}`, rx + 300, ry + 78, 22, '#fff', 'center', 1, 900);
  // dawn meter
  const dw = 520, dx = Wd / 2 - dw / 2, dy = L.dawnY ?? 48, p = clamp((t - snap.t0) / snap.shift), left = Math.max(0, snap.t0 + snap.shift - t), urgent = left < 10 && !snap.over;
  panel(ctx, dx - 70, dy - 26, dw + 140, 74);
  label(ctx, snap.over ? 'DAWN — SHIFT COMPLETE' : `DAWN IN 0:${String(Math.ceil(left)).padStart(2, '0')}`, Wd / 2, dy - 3, 15, urgent ? '#ffb36b' : PAL.white, 'center', 4);
  ctx.beginPath(); ctx.roundRect(dx, dy + 18, dw, 12, 6); ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fill();
  const gg = ctx.createLinearGradient(dx, 0, dx + dw, 0); gg.addColorStop(0, '#5b4bff'); gg.addColorStop(.6, PAL.pink); gg.addColorStop(1, '#ffc46b');
  ctx.beginPath(); ctx.roundRect(dx, dy + 18, Math.max(12, dw * p), 12, 6); ctx.fillStyle = gg; ctx.fill();
  ctx.beginPath(); ctx.arc(dx - 34, dy + 12, 15, 0, 7); ctx.fillStyle = '#dfe9ff'; ctx.fill(); ctx.beginPath(); ctx.arc(dx - 27, dy + 7, 13, 0, 7); ctx.fillStyle = '#1b1233'; ctx.fill();
  ctx.save(); ctx.translate(dx + dw + 34, dy + 12); ctx.fillStyle = '#ffc46b'; for (let i = 0; i < 8; i++) { ctx.rotate(Math.PI / 4); ctx.fillRect(-2, -21, 4, 7); } ctx.beginPath(); ctx.arc(0, 0, 11, 0, 7); ctx.fill(); ctx.restore();
  // score + combo
  const sx = Wd - (L.scoreR ?? 40); panel(ctx, sx - 330, 32, 330, 118);
  label(ctx, 'SCORE', sx - 22, 58, 15, PAL.gold, 'right', 3.5);
  ctx.font = '900 54px Montserrat'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillStyle = snap.powers.morticia > t ? '#ffd27a' : '#fff'; ctx.fillText(scoreAt(events, t, L.baseScore || 0).toLocaleString('en-US'), sx - 22, 104);
  if (snap.combo > 1) { const lastInc = [...events].reverse().find(e => e.t <= t && e.combo), bump = lastInc ? Math.max(0, 1 - (t - lastInc.t) / .25) : 0;
    ctx.save(); ctx.translate(sx - 246, 58); ctx.scale(1 + bump * .25, 1 + bump * .25); panel(ctx, -62, -16, 124, 32, 16, PAL.pink, null); label(ctx, `COMBO ×${snap.mult}`, 0, 1, 12, '#fff', 'center', 1.5, 900); ctx.restore(); }
  // coffee
  const cx = L.cofX ?? 40, cy = L.cofY ?? 960; panel(ctx, cx, cy, 392, 92);
  label(ctx, "MORT'S COFFEE", cx + 22, cy + 22, 13, PAL.gold, 'left', 3);
  const spill = [...events].reverse().find(e => e.type === 'hit' && e.t <= t && t - e.t < .9), refill = [...events].reverse().find(e => e.type === 'coffee' && e.t <= t && t - e.t < .5);
  for (let i = 0; i < 5; i++) {
    const full = i < snap.coffee, x = cx + 30 + i * 70, y = cy + 34; ctx.save(); ctx.globalAlpha = full ? 1 : .22;
    if (spill && i === spill.coffee) { const d = (t - spill.t) / .9; ctx.globalAlpha = 1 - d * .78; ctx.translate(x + 28, y + 50); ctx.rotate(Math.min(1, d * 3) * .9); ctx.translate(-x - 28, -y - 50); }
    if (refill && i === refill.coffee - 1) { const d = (t - refill.t) / .5; ctx.translate(x + 26, y + 30); ctx.scale(1 + (1 - d) * .4, 1 + (1 - d) * .4); ctx.translate(-x - 26, -y - 30); }
    ctx.drawImage(A.mug, x - 4, y - 4, 58, 62); ctx.restore();
  }
  // active powers
  const act = GRAVES.map((g, i) => ({ g, i, left: snap.powers[g.id] - t })).filter(o => o.left > 0);
  const pw = 200, px0 = Wd / 2 - act.length * pw / 2 + pw / 2, py = L.powY ?? 1000;
  act.forEach((o, k) => {
    const x = px0 + k * pw, born = C.POWER - o.left, pop = easeOutBack(clamp(born / .35)), a = clamp(o.left / .3);
    ctx.save(); ctx.globalAlpha = a; ctx.translate(x, py); ctx.scale(pop, pop);
    panel(ctx, -96, -34, 192, 68, 34, 'rgba(18,10,36,0.86)', R.hexA(o.g.color, .8));
    ctx.save(); ctx.beginPath(); ctx.arc(-62, 0, 25, 0, 7); ctx.clip(); ctx.drawImage(A[o.g.face], -87, -25, 50, 50); ctx.restore();
    ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.beginPath(); ctx.arc(-62, 0, 29, 0, 7); ctx.stroke();
    ctx.strokeStyle = o.g.color; ctx.beginPath(); ctx.arc(-62, 0, 29, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (o.left / C.POWER)); ctx.stroke();
    ctx.font = '21px Fraktur'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#fff'; ctx.fillText(o.g.power, -28, -8, 120);
    label(ctx, o.g.powerDesc.length > 14 ? o.g.powerDesc.replace('BOTS TURN INTO SOULS', 'BOTS → SOULS').replace('THORNS SHRED BOTS', 'SHREDS BOTS') : o.g.powerDesc, -28, 16, 9, o.g.color, 'left', 1.2, 800); ctx.restore();
  });
  if (L.encoreTag !== false) label(ctx, 'CONCEPT BY ENCORE STUDIO', Wd - 40, (L.tagY ?? 1050), 12, 'rgba(232,224,255,0.62)', 'right', 3, 700);
  ctx.restore();
}

function powerBanner(ctx, g, x, y, age) {
  const dur = 1.7; if (age < 0 || age > dur) return;
  const a = clamp(age / .15) * (1 - easeIn(clamp((age - dur + .35) / .35))), sc = easeOutBack(clamp(age / .25));
  ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc); ctx.globalAlpha = a; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '800 16px Montserrat'; ctx.letterSpacing = '6px'; ctx.lineWidth = 6; ctx.strokeStyle = '#150b2c'; ctx.strokeText('REBORN', 0, -50); ctx.fillStyle = g.color; ctx.fillText('REBORN', 0, -50); ctx.letterSpacing = '0px';
  ctx.font = '56px Fraktur'; ctx.lineJoin = 'round'; ctx.lineWidth = 10; ctx.strokeText(g.name, 0, -2); ctx.fillStyle = '#fff'; ctx.fillText(g.name, 0, -2);
  const w = ctx.measureText(g.name).width; sparkle(ctx, -w / 2 - 24, -10, 12, age * 4); sparkle(ctx, w / 2 + 24, -10, 12, age * 4 + 1);
  ctx.font = '900 19px Montserrat'; ctx.letterSpacing = '3px'; const pt = `POWER · ${g.power.toUpperCase()}`; const pw = ctx.measureText(pt).width + 36;
  panel(ctx, -pw / 2, 30, pw, 36, 18, R.hexA(g.color, .92), null); ctx.fillStyle = '#1b1233'; ctx.fillText(pt, 0, 49); ctx.letterSpacing = '0px';
  ctx.restore();
}

function drawWorldText(ctx, sc3, snap, events, opts = {}) {
  const t = snap.t, P = (px, py, d) => sc3.project(px, py, d);
  for (const e of events) {
    const age = t - e.t; if (age < 0 || age > 2) continue;
    if (e.type === 'rise' || e.type === 'pop') {
      const g = GRAVES[e.g], d = sc3.STONE_D[g.stone], p = P(g.impact.x, g.impact.y - 70, d);
      floatText(ctx, '+' + e.delta, p.x, p.y, age, { fill: g.color, dur: .95 });
      if (e.mult > 1) floatText(ctx, '×' + e.mult, p.x + 92, p.y - 42, age - .05, { fill: PAL.gold, size: .7, dur: .85 });
      if (e.type === 'rise' && opts.names !== false && !events.some(f => f.type === 'fullhouse' && Math.abs(f.t - e.t) < .06)) { const q = P(clamp(g.rise.x, 420, 1500), Math.max(250, g.rise.base - g.rise.h * .62), d + .8); powerBanner(ctx, g, q.x, q.y, age - .25); }
    }
    if (e.type === 'botkill' && e.by !== 'fullhouse') { const p = P(e.x, e.y - 40, sc3.PLAY_D); floatText(ctx, e.by === 'thorns' ? 'SHREDDED' : 'BANISHED', p.x, p.y, age, { fill: '#9ff3ff', size: .62, dur: .8 }); if (e.delta) floatText(ctx, '+' + e.delta, p.x, p.y + 40, age - .05, { fill: '#fff', size: .55, dur: .7 }); }
    if (e.type === 'convert') { const p = P(e.x, e.y - 40, sc3.PLAY_D); floatText(ctx, 'BAD INFLUENCE!', p.x, p.y, age, { fill: GRAVES[2].color, size: .62, dur: .9 }); }
    if (e.type === 'hit') { const p = P(e.x, e.y - 80, sc3.PLAY_D); R.floatText(ctx, e.stolen ? 'SOUL STOLEN!' : 'OUCH!', p.x, p.y, age, { fill: '#ff6b8e', size: .9, dur: 1.1 }); floatText(ctx, '−1 COFFEE', p.x, p.y + 52, age - .1, { fill: '#ffd1e3', size: .55, dur: 1 }); }
    if (e.type === 'steal') { const p = P(e.x, e.y - 50, sc3.PLAY_D); floatText(ctx, 'STOLEN!', p.x, p.y, age, { fill: '#ff6b8e', size: .75, dur: 1 }); }
    if (e.type === 'coffee') { const p = P(e.x, e.y - 50, sc3.PLAY_D); floatText(ctx, '+1 COFFEE', p.x, p.y, age, { fill: '#ffcf8a', size: .7, dur: .9 }); }
    if (e.type === 'lost') { const p = P(e.x, 900, sc3.PLAY_D); floatText(ctx, 'LOST SOUL', p.x, p.y, age, { fill: '#c9b8ff', size: .55, dur: .9 }); }
    if (e.type === 'catch' && opts.catchText) { const p = P(snap.mort.x, snap.mort.y - 120, sc3.PLAY_D); floatText(ctx, `${e.n}/3`, p.x, p.y, age, { fill: '#fff', size: .5, dur: .5 }); }
  }
}
function drawPassout(ctx, events, t, W, H) {
  const e = events.find(x => x.type === 'passout'); if (!e) return; const age = t - e.t; if (age < 0) return;
  const a = clamp(age / .4); ctx.save(); ctx.globalAlpha = a * .55; ctx.fillStyle = '#0a0518'; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = a; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '800 22px Montserrat'; ctx.letterSpacing = '10px'; ctx.fillStyle = '#ffb3c8'; ctx.fillText('OUT OF COFFEE', W / 2, H * .42 - 80); ctx.letterSpacing = '0px';
  ctx.font = '120px Fraktur'; ctx.lineWidth = 16; ctx.strokeStyle = '#140a2a'; ctx.strokeText('Mort Passed Out', W / 2, H * .45); ctx.fillStyle = '#fff'; ctx.fillText('Mort Passed Out', W / 2, H * .45); ctx.restore();
}
module.exports = { drawHUD2, drawWorldText, drawPassout, chip, scoreAt };
