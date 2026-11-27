// Trailer takes (AI-played sessions of the real engine) + shot list + camera choreography + capture API.
const E = require('./engine2.js');
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, k) => a + (b - a) * k, ease = x => { x = clamp(x, 0, 1); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
const U17 = 2 * 17 * Math.tan(15 * Math.PI / 180) / 1080;

function mainSpawns() {
  const S = [], soul = (t, type, x, o = {}) => S.push(Object.assign({ t, kind: 'soul', type, x }, o)), bot = (t, x, y, o = {}) => S.push(Object.assign({ t, kind: 'bot', x, y }, o));
  // act 1: learn the loop (Vera, Morticia, Odette, Falon rise with their powers)
  soul(.3, 1, 700, { vy: 85 }); soul(1.1, 0, 430, { vy: 80 }); soul(1.9, 1, 880, { vy: 90 }); soul(3.2, 3, 1290, { vy: 90 }); soul(4.0, 4, 1560, { vy: 95 }); soul(4.8, 3, 1150, { vy: 95 });
  soul(6.0, 0, 560); soul(6.8, 1, 820); soul(7.6, 4, 1420);
  // act 2: bots arrive
  bot(8.2, 1990, 300); bot(8.4, 1990, 470); soul(8.6, 0, 520); bot(9.5, -70, 260); soul(9.4, 1, 900); soul(10.2, 4, 1380); bot(10.6, 1990, 380); soul(11.0, 0, 640);
  S.push({ t: 11.55, kind: 'bot', near: 300, ny: -80, speed: 560 }); S.push({ t: 11.9, kind: 'bot', ahead: 330, speed: 420 }); soul(12.0, 2, 960); soul(12.9, 3, 1250); S.push({ t: 13.6, kind: 'cup', x: 900 }); soul(13.9, 1, 760);
  const R0 = E.rng(404), cA = [0, 1, 3, 1, 0, 3], cB = [1, 0, 1, 0, 1, 3];
  for (let t = 14.8, i = 0; t < 20; t += .82 + R0() * .25, i++) soul(t, cA[i % cA.length], 300 + R0() * 1300);
  for (let t = 20.2, i = 0; t < 25.6; t += .82 + R0() * .25, i++) soul(t, cB[i % cB.length], 300 + R0() * 1300);
  for (let t = 15.5; t < 25; t += 2.3 + R0() * .8) bot(t, R0() < .5 ? -70 : 1990, 150 + R0() * 450);
  // act 3: collab wave, then the rare 1/1 soul
  [2, 4, 2, 1, 4, 1, 4].forEach((type, i) => soul(26 + i * .12, type, 330 + i * 210, { mass: true, vy: 120 }));
  soul(28.6, 1, 600); soul(29.4, 4, 1200); bot(28.5, 1990, 300); bot(29.8, -70, 350);
  S.push({ t: 31.4, kind: 'rare', x: 1000, vy: 95 });
  const cyc2 = [0, 1, 3, 0, 1, 3, 1, 0];
  for (let t = 33.6, i = 0; t < 40; t += .9 + R0() * .2, i++) soul(t, cyc2[i % cyc2.length], 350 + R0() * 1200);
  for (let t = 33.8; t < 40; t += 2.4 + R0() * .6) bot(t, R0() < .5 ? -70 : 1990, 150 + R0() * 400);
  // finale: all five souls arrive together, then the sun
  [[4, -170], [2, 0], [0, 170]].forEach(([type, nx], i) => S.push({ t: 40.3 + i * .08, kind: 'soul', type, near: nx, ny: -150, vy: 60 }));
  [[1, -150], [3, 150]].forEach(([type, nx], i) => S.push({ t: 41.9 + i * .08, kind: 'soul', type, near: nx, ny: -150, vy: 60 }));
  bot(41, 1990, 250); bot(41.2, -70, 300); bot(41.8, 1990, 450);
  soul(43.6, 1, 800); soul(44.2, 4, 1400);
  return S;
}
function takes() {
  const hook = E.runTake({ seed: 11, shift: 60, t0: 30.4, score: 48210, combo: 9, coffee: 5, mortX: 230, mortY: 300, carry: [2, 4], fhHold: 2.8,
    preset: [{ g: 0, remaining: 4.2, age: 2.2, power: 2.5 }, { g: 1, remaining: 3.9, age: 1.6, power: 3 }, { g: 3, remaining: 4.5, age: 1.0, power: 3.5 }],
    presetBots: [{ x: 1700, y: 300 }, { x: 600, y: 330 }, { x: 1100, y: 860 }],
    spawns: [{ t: 31.0, kind: 'soul', type: 1, x: 780 }, { t: 31.4, kind: 'soul', type: 0, x: 500 }, { t: 32.0, kind: 'bot', x: 1990, y: 380 }, { t: 32.4, kind: 'soul', type: 3, x: 1300 }, { t: 33.2, kind: 'soul', type: 4, x: 1500 }, { t: 33.9, kind: 'soul', type: 1, x: 900 }] }, 7);
  const main = E.runTake({ seed: 5, shift: 45, mortX: 960, mortY: 320, spawns: mainSpawns(), aiBlind: [[11.4, 13.0]] }, 49);
  const tableau = E.runTake({ seed: 2, shift: 45, t0: 45.3, mortX: 1720, mortY: 170, preset: [0, 1, 2, 3, 4].map(g => ({ g, remaining: 99, age: 3, power: false })), spawns: [] }, 4);
  return { hook, main, tableau };
}
const evT = (take, type, n = 0, after = -1) => { const l = take.events.filter(e => e.type === type && e.t - take.frames[0].t > after); return l[n] ? l[n].t - take.frames[0].t : null; };

function shots(T) {
  const m = T.main, hit = evT(m, 'hit') ?? evT(m, 'steal') ?? 12, mass = evT(m, 'mass') ?? 26, sp = evT(m, 'special') ?? 33, fh = evT(m, 'fullhouse', 0, 38) ?? 43;
  const MAIN = [
    { s: 0, e: 3, type: 'game', take: 'hook', from: .2, cam: 'hook' },
    { s: 3, e: 5, type: 'title', take: 'hook', from: 3.2, cam: 'push' },
    { s: 5, e: 12, type: 'game', take: 'main', from: .5, cam: 'establish', caps: [[5.3, 8.6, 'Fly Mort. Catch the falling souls.', 'HOW TO PLAY'], [8.75, 11.9, 'Bring each soul to her grave.']] },
    { s: 12, e: 15, type: 'game', take: 'main', from: hit - 1.9, cam: 'close', caps: [[12.15, 14.95, 'Bots steal souls. Spin the scythe.']] },
    { s: 15, e: 19, type: 'game', take: 'main', from: mass - .4, cam: 'wide', caps: [[15.6, 18.95, 'Every girl you raise grants her power.']] },
    { s: 19, e: 22.5, type: 'game', take: 'main', from: sp - .9, cam: 'punch' },
    { s: 22.5, e: 26.8, type: 'game', take: 'main', from: fh - .8, cam: 'finale' },
    { s: 26.8, e: 32, type: 'board' }, { s: 32, e: 35.1, type: 'result' }, { s: 35.1, e: 38, type: 'post' },
    { s: 38, e: 41, type: 'gamecard', take: 'tableau', from: 0, cam: 'tableau' }, { s: 41, e: 45, type: 'encore' },
  ];
  const SHORT = [
    { s: 0, e: 2.6, type: 'game', take: 'hook', from: .2, cam: 'pfollow' },
    { s: 2.6, e: 6.6, type: 'game', take: 'main', from: 1.6, cam: 'pfollow', caps: [[2.7, 6.55, 'Fly Mort. Bring the souls home.', 'HOW TO PLAY']] },
    { s: 6.6, e: 8.8, type: 'game', take: 'main', from: hit - 1.4, cam: 'pfollow', caps: [[6.65, 8.75, 'Spin the scythe. Banish bots.']] },
    { s: 8.8, e: 10.2, type: 'game', take: 'main', from: fh - .3, cam: 'pfollow' },
    { s: 10.2, e: 12, type: 'board' }, { s: 12, e: 13.1, type: 'result' }, { s: 13.1, e: 15, type: 'encore' },
  ];
  return { MAIN, SHORT };
}

// camera presets (world units; plate is overscanned so small moves never reveal edges)
function camFor(sh, lt, snap, portrait) {
  const d = sh.e - sh.s, k = lt / d, M = snap.mort, tr = M.trail && M.trail.length ? M.trail : [M];
  const ax = tr.reduce((a, p) => a + p.x, 0) / tr.length, ay = tr.reduce((a, p) => a + p.y, 0) / tr.length;
  const mx = (ax - 960) * U17, my = (540 - ay) * U17;
  if (portrait) return { x: clamp(mx * .92, -7.4, 7.4), y: clamp(my * .25, -.6, .6) + .1, z: -.5, fov: 33 };
  switch (sh.cam) {
    case 'hook': return { x: mx * .22 + Math.sin(lt * .7) * .1, y: my * .12 + .1, z: lerp(-2.2, -.6, ease(k)), roll: lerp(.02, 0, k) };
    case 'push': return { x: .1, y: .15, z: lerp(-.4, -1.4, ease(k)) };
    case 'establish': return { x: lerp(-.6, mx * .14, ease(k)), y: lerp(.6, my * .08, ease(k)) + .05, z: lerp(.8, -.4, ease(Math.min(1, k * 1.4))) };
    case 'close': return { x: clamp(mx * .55, -2.6, 2.6), y: clamp(my * .4, -1, 1), z: -3.4 };
    case 'wide': return { x: mx * .1 + Math.sin(lt * .5) * .15, y: my * .06 + .1, z: lerp(.6, 0, ease(k)) };
    case 'punch': return { x: clamp(mx * .45, -2.2, 2.2), y: clamp(my * .3, -.8, .8), z: lerp(-1.2, -3.8, ease(k)) };
    case 'finale': return { x: lerp(clamp(mx * .4, -2, 2), 0, ease(k)), y: lerp(clamp(my * .3, -.8, .8), .5, ease(k)), z: lerp(-2.6, .9, ease(k)), ly: lerp(0, .9, ease(k)) };
    case 'tableau': return { x: Math.sin(lt * .5) * .4, y: .3, z: lerp(.2, -1.2, ease(k)) };
  }
  return { x: mx * .1, y: my * .06, z: 0 };
}

function makeCapture(env, mode, O, SC) {
  const { A, S, sc3, ctx, W, H, renderer } = env, R = require('./render.js'), portrait = mode === 'short';
  const T = takes(), L = shots(T), list = portrait ? L.SHORT : L.MAIN;
  const dawnEv = T.main.events.find(e => e.type === 'dawn'), df = T.main.frames[Math.round((dawnEv.t - T.main.frames[0].t) * 60)];
  const RES = { score: dawnEv.score, reborn: df.reborn, best: df.best, coffee: df.coffee }; RES.rank = SC.rows(RES.score, RES.score).findIndex(r => r.you) + 1;
  const card = document.createElement('canvas'); card.width = 1920; card.height = 1080; SC.resultCard(card.getContext('2d'), A, S, 3, RES, 1920, 1080, false);
  const HUDL = portrait ? { w: W, scale: 1.32, regX: 22, regY: 60, scoreR: 22, dawnY: 232, cofX: (W / 1.32 - 392) / 2, cofY: 1300, powY: 1180, tagY: 1432 } : {};
  function frame(t) {
    const sh = list.find(x => t >= x.s && t < x.e) || list[list.length - 1], lt = t - sh.s;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, H); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    if (sh.type === 'game' || sh.type === 'title' || sh.type === 'gamecard') {
      const take = T[sh.take], f = Math.min(take.frames.length - 1, Math.max(0, Math.round((sh.from + lt) * 60))), snap = take.frames[f];
      sc3.update(snap, take.events, t, { camera: camFor(sh, lt, snap, portrait), dawn: sh.type === 'gamecard' ? 1 : undefined }); sc3.render();
      if (sh.type === 'gamecard') { SC.gameCard(ctx, A, S, lt, W, H, portrait); }
      else {
        O.drawWorldText(ctx, sc3, snap, take.events, { names: sh.type === 'game' });
        if (portrait) { ctx.save(); ctx.translate(W / 2, H * .44); ctx.scale(.56, .56); ctx.translate(-960, -540); R.drawMoments(ctx, A, S, take, snap, snap.t, 1920, 1080); ctx.restore(); }
        else R.drawMoments(ctx, A, S, take, snap, snap.t, W, H);
        O.drawHUD2(ctx, A, S, snap, take.events, Object.assign({ baseScore: take.frames[0].score }, HUDL));
        if (sh.type === 'title') SC.titleCard(ctx, A, S, lt, sh.e - sh.s, W, H, portrait);
        for (const [a, b, txt, kick] of sh.caps || []) if (t >= a && t < b) SC.caption(ctx, txt, t - a, b - a, W, portrait ? 1620 : 900, portrait ? 40 : 40, kick);
      }
    } else {
      renderer.setClearColor(0x000000, 1); renderer.clear();
      if (sh.type === 'board') { SC.leaderboard(ctx, A, S, lt, RES.score, W, H, portrait, portrait ? 1.1 : 2.6); if (!portrait) SC.botsLine(ctx, lt - 1.0, sh.e - sh.s - 1.0, 1150, 400, 'left', 1); else SC.botsLine(ctx, lt - .15, sh.e - sh.s - .15, W / 2, 130, 'center', .78); }
      if (sh.type === 'result') { if (!portrait) { SC.resultCard(ctx, A, S, lt, RES, W, H, true); if (lt > 2.75) { ctx.fillStyle = `rgba(0,0,0,${clamp((lt - 2.75) / .35, 0, 1) * .9})`; ctx.fillRect(0, 0, W, H); } } else { ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H); ctx.save(); ctx.translate(0, (H - 1080 * W / 1920) / 2 - 120); SC.resultCard(ctx, A, S, lt + .6, RES, W, 1080 * W / 1920, false); ctx.restore(); SC.caption(ctx, 'Orbituary status: Dead. You’re in.', lt + .2, sh.e - sh.s + .5, W, 1330, 40); } }
      if (sh.type === 'post') SC.xPost(ctx, A, S, lt, RES, card, W, H, portrait);
      if (sh.type === 'encore') SC.encoreCard(ctx, A, lt, W, H, portrait, portrait);
    }
    const idx = list.indexOf(sh); if (idx > 0 && lt < .1 && ['game', 'board', 'result'].includes(sh.type)) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = (1 - lt / .1) * .25; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H); ctx.restore(); }
    return true;
  }
  return { frame, duration: list[list.length - 1].e, RES, list: list.map(s => ({ s: s.s, e: s.e, type: s.type, take: s.take, from: s.from })) };
}
module.exports = { takes, shots, makeCapture, mainSpawns, evT };
