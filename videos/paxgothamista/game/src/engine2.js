// REBORN BY DAWN v2 — interactive engine.
// You fly Mort the Intern. Catch falling souls (carry up to 3), fly over the matching grave to raise her.
// Each girl you raise grants her power. Bot souls hunt you and steal souls: spin the scythe to banish them.
// Coffees are lives; catch falling cups to refill. All five risen = The Gothly Departed. Shift ends at dawn.
'use strict';
const GRAVES = [
  { id: 'morticia', name: 'Morticia Belladonna', stone: 'A', color: '#F37079', glow: '#ff5f72', emblem: 'horns', girl: 'girl_1', face: 'face_nft_01',
    power: 'Drop Dead Gorgeous', powerDesc: 'SCORE ×2', zone: { x: 400, y: 450, r: 150 }, impact: { x: 400, y: 380 }, rise: { x: 398, base: 860, h: 800, ground: 650 }, depth: 22 },
  { id: 'vera', name: 'Vera Locks', stone: 'B', color: '#FFD2F3', glow: '#ff9fdc', emblem: 'heart', girl: 'girl_3', face: 'face_nft_06',
    power: 'Heartstrings', powerDesc: 'SOUL MAGNET', zone: { x: 778, y: 470, r: 140 }, impact: { x: 778, y: 395 }, rise: { x: 782, base: 720, h: 660, ground: 560 }, depth: 24 },
  { id: 'rowena', name: 'Rowena Inkgrave', stone: 'C', color: '#B79CFF', glow: '#a77dff', emblem: 'crown', girl: 'girl_5', face: 'face_nft_02',
    power: 'Bad Influence', powerDesc: 'BOTS TURN INTO SOULS', zone: { x: 870, y: 760, r: 160 }, impact: { x: 870, y: 705 }, rise: { x: 985, base: 965, h: 700, ground: 872 }, depth: 20 },
  { id: 'odette', name: 'Odette Noir', stone: 'D', color: '#8899E7', glow: '#7f93ff', emblem: 'rose', girl: 'girl_4', face: 'face_nft_03',
    power: 'Thorn Veil', powerDesc: 'THORNS SHRED BOTS', zone: { x: 1255, y: 560, r: 150 }, impact: { x: 1255, y: 485 }, rise: { x: 1262, base: 880, h: 760, ground: 700 }, depth: 22.5 },
  { id: 'falon', name: 'Falon St Clair', stone: 'E', color: '#8ED4E8', glow: '#7fe3ff', emblem: 'halo', girl: 'girl_2', face: 'face_nft_05',
    power: 'Halo Hour', powerDesc: 'TIME SLOWS', zone: { x: 1540, y: 700, r: 155 }, impact: { x: 1540, y: 620 }, rise: { x: 1545, base: 965, h: 800, ground: 830 }, depth: 20.5 },
];
const DEPTH = [1, 0, 3, 2, 4];
const RARE = 5;
const C = { RISE: .55, LEAVE: .75, DIVE: .28, STAY: 4.2, POWER: 5, CATCH_R: 78, MAXC: 3, SLASH_R: 185, SLASH_T: .24, SLASH_CD: .5, BOT_R: 58, INVULN: 1.3, GROUND: 960, MAXV: 1050, ACC: 5200, COMBO_T: 2.3, THORN_R: 115, INFL_R: 230, FH_CD: 9 };

function rng(seed) { let s = (seed >>> 0) || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

function newGame(cfg = {}) {
  const g = {
    t: cfg.t0 || 0, shift: cfg.shift || 60, cfg, R: rng(cfg.seed || 1), idc: 1,
    mort: { x: cfg.mortX ?? 960, y: cfg.mortY ?? 300, vx: 0, vy: 0, slashT: -9, hitT: -9, trail: [] },
    souls: [], bots: [], cups: [], carried: [],
    graves: GRAVES.map(() => ({ state: 'empty', riseT: -9, endT: -9, leaveT: -9, pops: [], fh: false })),
    powers: { morticia: -9, vera: -9, rowena: -9, odette: -9, falon: -9 },
    score: cfg.score || 0, combo: cfg.combo || 0, lastDeliver: -9, best: cfg.combo || 0, reborn: cfg.reborn || 0, banished: 0, coffee: cfg.coffee ?? 5,
    spawns: (cfg.spawns || []).slice().sort((a, b) => a.t - b.t), gen: cfg.endless ? { next: (cfg.t0 || 0) + .4, botNext: (cfg.t0 || 0) + 7, cupNext: (cfg.t0 || 0) + 18, massNext: (cfg.t0 || 0) + 24, rareNext: (cfg.t0 || 0) + 30 } : null,
    events: [], over: false, fullHouseT: -9, lastMass: -9,
  };
  (cfg.preset || []).forEach(p => { const gr = g.graves[p.g]; gr.state = 'risen'; gr.riseT = g.t - (p.age || 1); gr.endT = g.t + p.remaining; if (p.power !== false) g.powers[GRAVES[p.g].id] = g.t + (p.power ?? 3); });
  (cfg.carry || []).forEach(type => { const s = mkSoul(g, type, g.mort.x, g.mort.y); s.state = 'carried'; s.catchT = g.t - 1; g.carried.push(s.id); });
  (cfg.presetSouls || []).forEach(p => mkSoul(g, p.type, p.x, p.y, p));
  (cfg.presetBots || []).forEach(p => mkBot(g, p.x, p.y));
  return g;
}
function ev(g, type, d) { const e = Object.assign({ type, t: g.t, id: g.idc++ }, d || {}); g.events.push(e); return e; }
function mkSoul(g, type, x, y, o = {}) {
  const s = { id: g.idc++, type, x, y, x0: x, vy: o.vy || (70 + g.R() * 55), sway: 30 + g.R() * 40, ph: g.R() * 6.28, f: .8 + g.R() * .8, state: 'fall', spawnT: g.t, trail: [], mass: !!o.mass };
  g.souls.push(s); return s;
}
function mkBot(g, x, y, o = {}) { const sp = o.speed || (150 + g.R() * 70), dx = g.mort.x - x, dy = g.mort.y - y, d = Math.hypot(dx, dy) || 1; const b = { id: g.idc++, x, y, vx: dx / d * sp * .8, vy: dy / d * sp * .8, speed: sp, state: 'hunt', spawnT: g.t, ph: g.R() * 6.28, trail: [] }; g.bots.push(b); return b; }
function powerOn(g, id) { return g.powers[id] > g.t; }
function isUp(gr, t) { return (gr.state === 'rising' || gr.state === 'risen') && t < gr.endT; }
function mult(g) { return Math.min(8, 1 + Math.floor(g.combo / 2)) * (powerOn(g, 'morticia') ? 2 : 1); }

function spawnTick(g) {
  while (g.spawns.length && g.spawns[0].t <= g.t) {
    const s = g.spawns.shift();
    if (s.kind === 'soul' || s.kind === 'rare') { if (s.mass && g.t - g.lastMass > 4) ev(g, 'mass', {}); if (s.mass) g.lastMass = g.t; const sx = s.near != null ? clamp(g.mort.x + s.near, 120, 1800) : s.x ?? (240 + g.R() * 1440), sy = s.near != null ? clamp(g.mort.y + (s.ny || -160), 60, 700) : s.y ?? -60; const so = mkSoul(g, s.kind === 'rare' ? RARE : s.type, sx, sy, s); ev(g, 'spawn', { soul: so.id, st: so.type }); }
    if (s.kind === 'bot' && s.ahead) { const m = g.mort, v = Math.hypot(m.vx, m.vy) || 1; const b = mkBot(g, m.x + m.vx / v * s.ahead, m.y + m.vy / v * s.ahead, s); ev(g, 'botspawn', { bot: b.id }); continue; }
    if (s.kind === 'bot') { const bx = s.near != null ? g.mort.x + s.near : s.x ?? (g.R() < .5 ? -60 : 1980), by = s.near != null ? g.mort.y + (s.ny || 0) : s.y ?? (120 + g.R() * 400); const b = mkBot(g, bx, by, s); ev(g, 'botspawn', { bot: b.id }); }
    if (s.kind === 'cup') { g.cups.push({ id: g.idc++, x: s.x ?? (300 + g.R() * 1300), y: -60, vy: 95, state: 'fall', spawnT: g.t }); }
  }
  const G = g.gen; if (!G || g.over) return;
  const p = clamp((g.t - (g.cfg.t0 || 0)) / g.shift, 0, 1);
  if (g.t >= G.next) { const s = mkSoul(g, Math.floor(g.R() * 5), 240 + g.R() * 1440, -60); s.vy *= 1 + p * .6; G.next = g.t + lerp(1.15, .55, p) * (.7 + g.R() * .6); }
  if (g.t >= G.botNext) { const n = 1 + (p > .3 ? 1 : 0) + (p > .65 ? 1 : 0); for (let i = 0; i < n; i++) mkBot(g, g.R() < .5 ? -60 : 1980, 100 + g.R() * 500, { speed: 175 + p * 120 }); ev(g, 'botspawn', {}); G.botNext = g.t + lerp(4.6, 2.2, p); }
  if (g.t >= G.cupNext) { g.cups.push({ id: g.idc++, x: 300 + g.R() * 1300, y: -60, vy: 95, state: 'fall', spawnT: g.t }); G.cupNext = g.t + 15 + g.R() * 6; }
  if (g.t >= G.massNext) { ev(g, 'mass', {}); for (let i = 0; i < 7; i++) { const s = mkSoul(g, Math.floor(g.R() * 5), 200 + i * 240 + g.R() * 60, -60 - i * 40); s.mass = true; } G.massNext = g.t + 22; }
  if (g.t >= G.rareNext) { mkSoul(g, RARE, 400 + g.R() * 1100, -60); G.rareNext = g.t + 26; }
}
const lerp = (a, b, k) => a + (b - a) * k;

function deliver(g, s, gi) {
  s.state = 'dive'; s.diveT = g.t; s.dx = s.x; s.dy = s.y; s.target = gi; s.impactT = g.t + C.DIVE;
}
function impact(g, s) {
  const gi = s.target, gr = g.graves[gi]; s.state = 'done';
  g.combo = (g.t - g.lastDeliver < C.COMBO_T) ? g.combo + 1 : 1; g.lastDeliver = g.t; g.best = Math.max(g.best, g.combo); g.reborn++;
  if (s.type === RARE) { const d = 6666; g.score += d; ev(g, 'special', { g: gi, delta: d, score: g.score }); return; }
  const delta = 100 * mult(g); g.score += delta;
  const wasUp = gr.state === 'rising' || gr.state === 'risen';
  if (wasUp) { gr.pops.push(g.t); gr.endT = Math.max(gr.endT, g.t + C.STAY); ev(g, 'pop', { g: gi, delta, mult: mult(g), combo: g.combo, score: g.score }); }
  else { gr.state = 'rising'; gr.riseT = g.t; gr.pops = []; gr.endT = g.t + C.RISE + C.STAY; ev(g, 'rise', { g: gi, delta, mult: mult(g), combo: g.combo, score: g.score }); }
  if (!wasUp) { const pid = GRAVES[gi].id, had = powerOn(g, pid); g.powers[pid] = Math.max(g.powers[pid], g.t + C.POWER); if (!had) ev(g, 'power', { g: gi }); }
  if (g.graves.every(x => isUp(x, g.t + .001)) && g.t - g.fullHouseT > C.FH_CD) {
    g.fullHouseT = g.t; g.score += 5000; ev(g, 'fullhouse', { delta: 5000, score: g.score });
    g.graves.forEach(x => { x.endT = g.t + (g.cfg.fhHold || 2.6); x.fh = true; });
    for (const b of g.bots) if (b.state === 'hunt') { b.state = 'dead'; b.deadT = g.t; b.by = 'fullhouse'; g.banished++; ev(g, 'botkill', { bot: b.id, x: b.x, y: b.y, by: 'fullhouse' }); }
    for (const k in g.powers) g.powers[k] = Math.max(g.powers[k], g.t + 3);
  }
}

// ---- autopilot (used for attract mode and trailer takes) ----
function ai(g) {
  const m = g.mort, P = { x: m.x, y: m.y, slash: false };
  const hunting = g.bots.filter(b => b.state === 'hunt' && b.x > -40 && b.x < 1960);
  const near = hunting.map(b => ({ b, d: dist(b, m) })).sort((a, b) => a.d - b.d)[0];
  const blind = (g.cfg.aiBlind || []).some(([a, b]) => g.t >= a && g.t < b);
  if (!blind && near && near.d < C.SLASH_R * (g.cfg.aiReach || .8) && g.t - m.slashT > C.SLASH_CD) P.slash = true;
  const carried = g.carried.map(id => g.souls.find(s => s.id === id)).filter(Boolean);
  const free = g.souls.filter(s => s.state === 'fall' && s.y > 40 && s.y < C.GROUND - 20);
  const rankSoul = s => { const d = dist(s, m), urgency = (C.GROUND - s.y) / Math.max(40, s.vy); const ownGrave = carried.some(c => c.type === s.type) ? -120 : 0; return d + (urgency < 3 ? -200 : 0) + ownGrave + (s.type === RARE ? -400 : 0); };
  let target = null;
  const bestFree = free.slice().sort((a, b) => rankSoul(a) - rankSoul(b))[0];
  if (carried.length && (carried.length >= C.MAXC || !bestFree || dist(bestFree, m) > 520)) {
    // nearest grave that matches any carried soul (rare soul: any grave)
    let best = null;
    for (const c of carried) for (let gi = 0; gi < 5; gi++) { if (c.type !== RARE && c.type !== gi) continue; const z = GRAVES[gi].zone, d = dist(z, m); if (!best || d < best.d) best = { d, z }; }
    if (best) target = { x: best.z.x, y: best.z.y };
  }
  if (!target && bestFree) { const lead = clamp(dist(bestFree, m) / 900, 0, .8); target = { x: bestFree.x, y: bestFree.y + bestFree.vy * lead }; }
  const cup = g.cups.find(c => c.state === 'fall' && g.coffee < 5); if (cup && (!target || dist(cup, m) < 360)) target = { x: cup.x, y: cup.y + 60 };
  if (!target) target = { x: 960 + Math.sin(g.t * .7) * 280, y: 300 + Math.sin(g.t * 1.1) * 60 };
  // dodge a bot that is too close while the scythe is cooling down
  if (!blind && near && near.d < 120 && g.t - m.slashT < C.SLASH_CD) { target = { x: m.x + (m.x - near.b.x) * 2, y: m.y + (m.y - near.b.y) * 2 }; }
  if (!blind && near && near.d < 330 && g.t - m.slashT > C.SLASH_CD * .8) target = { x: lerp(target.x, near.b.x, .55), y: lerp(target.y, near.b.y, .55) };
  P.x = target.x; P.y = target.y; return P;
}

function step(g, dt, input) {
  g.t += dt; const t = g.t;
  if (g.over) { stepWorld(g, dt, t, true); return; }
  spawnTick(g);
  const m = g.mort, I = input || (g.cfg.autoplay ? ai(g) : null);
  // Mort steering (critically damped seek toward the target point)
  if (I) {
    const tx = clamp(I.x, 80, 1840), ty = clamp(I.y, 90, 900), dx = tx - m.x, dy = ty - m.y;
    const k = 14, desVx = dx * 5.2, desVy = dy * 5.2;
    m.vx += (desVx - m.vx) * Math.min(1, k * dt); m.vy += (desVy - m.vy) * Math.min(1, k * dt);
    const sp = Math.hypot(m.vx, m.vy); if (sp > C.MAXV) { m.vx *= C.MAXV / sp; m.vy *= C.MAXV / sp; }
    if (I.slash && t - m.slashT > C.SLASH_CD) { m.slashT = t; ev(g, 'slash', { x: m.x, y: m.y }); }
  }
  m.x += m.vx * dt; m.y += m.vy * dt; m.x = clamp(m.x, 60, 1860); m.y = clamp(m.y, 70, 920);
  pushTrail(m, t);
  stepWorld(g, dt, t, false);
  if (t >= (g.cfg.t0 || 0) + g.shift) { g.over = true; ev(g, 'dawn', { score: g.score }); }
}
function pushTrail(o, t) { const tr = o.trail; if (!tr.length || t - tr[tr.length - 1].t >= 1 / 30) { tr.push({ x: o.x, y: o.y, t }); if (tr.length > 36) tr.shift(); } }
function trailAt(o, t, ago) { const tr = o.trail; const want = t - ago; for (let i = tr.length - 1; i >= 0; i--) if (tr[i].t <= want) return tr[i]; return tr[0] || o; }

function stepWorld(g, dt, t, frozen) {
  const m = g.mort, slow = powerOn(g, 'falon') ? .45 : 1, wdt = dt * slow;
  const slashing = t - m.slashT < C.SLASH_T;
  // souls
  for (const s of g.souls) {
    if (s.state === 'fall') {
      s.y += s.vy * wdt; s.x = s.x0 + Math.sin((t - s.spawnT) * s.f + s.ph) * s.sway;
      if (!frozen && powerOn(g, 'vera')) { const d = dist(s, m); if (d < 420) { const k = (1 - d / 420) * 520 * dt; s.x0 += (m.x - s.x) / d * k; s.y += (m.y - s.y) / d * k; } }
      pushTrail(s, t);
      if (!frozen && g.carried.length < C.MAXC && dist(s, m) < C.CATCH_R) { s.state = 'carried'; s.catchT = t; g.carried.push(s.id); ev(g, 'catch', { soul: s.id, st: s.type, n: g.carried.length }); }
      else if (s.y > C.GROUND) { s.state = 'lost'; s.lostT = t; if (!frozen) { g.combo = 0; ev(g, 'lost', { soul: s.id, x: s.x }); } }
    } else if (s.state === 'carried') {
      const i = g.carried.indexOf(s.id), p = trailAt(m, t, .1 + i * .11); s.x += (p.x + Math.sin(t * 6 + i) * 10 - s.x) * Math.min(1, 18 * dt); s.y += (p.y + 30 + Math.cos(t * 5 + i) * 8 - s.y) * Math.min(1, 18 * dt); pushTrail(s, t);
    } else if (s.state === 'dive') {
      const imp = GRAVES[s.target].impact, k = clamp((t - s.diveT) / C.DIVE, 0, 1), e = k * k; s.x = lerp(s.dx, imp.x, e) + Math.sin(k * Math.PI) * 40; s.y = lerp(s.dy, imp.y, e) - Math.sin(k * Math.PI) * 60; pushTrail(s, t);
      if (t >= s.impactT) impact(g, s);
    }
  }
  // deliveries: flying through a grave's zone sends every matching carried soul home
  if (!frozen) for (let gi = 0; gi < 5; gi++) {
    const z = GRAVES[gi].zone; if (dist(z, m) > z.r) continue;
    for (const id of g.carried.slice()) { const s = g.souls.find(x => x.id === id); if (!s) continue; if (s.type === gi || s.type === RARE) { g.carried.splice(g.carried.indexOf(id), 1); deliver(g, s, gi); ev(g, 'deliver', { soul: s.id, g: gi, st: s.type }); } }
  }
  // bots
  for (const b of g.bots) {
    if (b.state !== 'hunt') continue;
    const lastId = g.carried[g.carried.length - 1], ls = lastId && g.souls.find(x => x.id === lastId), tgt = ls || m, dx = tgt.x - b.x, dy = tgt.y - b.y, d0 = Math.hypot(dx, dy) || 1;
    const d = Math.hypot(m.x - b.x, m.y - b.y) || 1;
    const wob = Math.sin((t - b.spawnT) * 3 + b.ph) * 60;
    b.vx += ((dx / d0) * b.speed - b.vx + (-dy / d0) * wob) * Math.min(1, 2.4 * wdt); b.vy += ((dy / d0) * b.speed - b.vy + (dx / d0) * wob) * Math.min(1, 2.4 * wdt);
    b.x += b.vx * wdt; b.y += b.vy * wdt; pushTrail(b, t);
    if (frozen) continue;
    if (powerOn(g, 'rowena') && d < C.INFL_R) { b.state = 'converted'; b.deadT = t; const s = mkSoul(g, Math.floor(g.R() * 5), b.x, b.y, { vy: 60 }); ev(g, 'convert', { bot: b.id, soul: s.id, x: b.x, y: b.y }); continue; }
    if (powerOn(g, 'odette') && d < C.THORN_R) { b.state = 'dead'; b.deadT = t; b.by = 'thorns'; g.banished++; g.score += 50 * mult(g); ev(g, 'botkill', { bot: b.id, x: b.x, y: b.y, by: 'thorns', delta: 50 * mult(g), score: g.score }); continue; }
    if (slashing && d < C.SLASH_R) { b.state = 'dead'; b.deadT = t; b.by = 'scythe'; g.banished++; g.score += 50 * mult(g); ev(g, 'botkill', { bot: b.id, x: b.x, y: b.y, by: 'scythe', delta: 50 * mult(g), score: g.score }); continue; }
    if (ls && Math.hypot(ls.x - b.x, ls.y - b.y) < 48 && t - m.hitT > C.INVULN * .5) { g.carried.pop(); ls.state = 'stolen'; ls.lostT = t; g.combo = 0; b.state = 'fled'; b.deadT = t; m.hitT = t - C.INVULN * .5; ev(g, 'steal', { bot: b.id, x: ls.x, y: ls.y }); continue; }
    if (d < C.BOT_R && t - m.hitT > C.INVULN) {
      m.hitT = t; g.coffee = Math.max(0, g.coffee - 1); g.combo = 0; m.vx += -dx / d * 900; m.vy += -dy / d * 900;
      const stolenId = g.carried.pop(); if (stolenId) { const s = g.souls.find(x => x.id === stolenId); s.state = 'stolen'; s.lostT = t; }
      b.state = 'fled'; b.deadT = t; ev(g, 'hit', { bot: b.id, x: m.x, y: m.y, coffee: g.coffee, stolen: !!stolenId });
      if (g.coffee === 0) { g.over = true; ev(g, 'passout', { score: g.score }); }
    }
  }
  for (const c of g.cups) { if (c.state !== 'fall') continue; c.y += c.vy * wdt; if (!frozen && dist(c, m) < 80) { c.state = 'got'; c.gotT = t; g.coffee = Math.min(5, g.coffee + 1); ev(g, 'coffee', { x: c.x, y: c.y, coffee: g.coffee }); } else if (c.y > C.GROUND + 40) c.state = 'gone'; }
  // graves
  g.graves.forEach((gr, i) => {
    if (gr.state === 'rising' && t >= gr.riseT + C.RISE) gr.state = 'risen';
    if ((gr.state === 'risen' || gr.state === 'rising') && t >= gr.endT) { gr.state = 'leaving'; gr.leaveT = t; ev(g, 'leave', { g: i, fh: gr.fh }); }
    if (gr.state === 'leaving' && t >= gr.leaveT + C.LEAVE) { gr.state = 'empty'; gr.fh = false; }
  });
  // cleanup
  g.souls = g.souls.filter(s => !((s.state === 'done' && t - s.impactT > .5) || ((s.state === 'lost' || s.state === 'stolen') && t - s.lostT > 1.2)));
  g.bots = g.bots.filter(b => b.state === 'hunt' ? (b.x > -400 && b.x < 2320 && b.y > -400 && b.y < 1500) : t - b.deadT < 1.0);
  g.cups = g.cups.filter(c => c.state === 'fall' || (c.state === 'got' && t - c.gotT < .8));
}

function snapshot(g) {
  const cp = o => Object.assign({}, o, { trail: o.trail ? o.trail.slice(-12) : undefined });
  return { t: g.t, t0: g.cfg.t0 || 0, shift: g.shift, mort: cp(g.mort), souls: g.souls.map(cp), bots: g.bots.map(cp), cups: g.cups.map(c => Object.assign({}, c)), carried: g.carried.slice(),
    graves: g.graves.map(x => ({ state: x.state, riseT: x.riseT, endT: x.endT, leaveT: x.leaveT, pops: x.pops.slice(), fh: x.fh })), powers: Object.assign({}, g.powers),
    score: g.score, combo: g.combo, best: g.best, reborn: g.reborn, banished: g.banished, coffee: g.coffee, over: g.over, mult: mult(g) };
}
function runTake(cfg, seconds, fps = 60) {
  const g = newGame(Object.assign({ autoplay: true }, cfg)), frames = [snapshot(g)], sub = 2;
  for (let f = 1; f <= Math.round(seconds * fps); f++) { for (let k = 0; k < sub; k++) step(g, 1 / (fps * sub)); frames.push(snapshot(g)); }
  return { frames, events: g.events, game: g, fps };
}
const api = { GRAVES, DEPTH, RARE, C, newGame, step, snapshot, runTake, ai, isUp, powerOn: (s, id) => s.powers[id] > s.t, rng, trailAt };
if (typeof module !== 'undefined') module.exports = api; else globalThis.RebornEngine2 = api;
