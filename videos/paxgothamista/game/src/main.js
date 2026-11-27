import * as THREE from 'three';
import { createScene } from './scene3d.js';
const E = require('./engine2.js');
const R = require('./render.js');
const SC = require('./screens.js');
const O = require('./overlay2.js');
const FILM = require('./film2.js');

const IMAGES = ['plate', 'plate_n', 'cemetery', 'mort', 'mort_n', 'mug', 'bella_900', 'wordmark', 'mortuary', 'orbituary', 'encore_logo',
  'girl_1', 'girl_2', 'girl_3', 'girl_4', 'girl_5', 'girl_1_n', 'girl_2_n', 'girl_3_n', 'girl_4_n', 'girl_5_n',
  'face_nft_01', 'face_nft_02', 'face_nft_03', 'face_nft_04', 'face_nft_05', 'face_nft_06', 'face_bella',
  'stone_A', 'stone_B', 'stone_C', 'stone_D', 'stone_E', 'stone_A_n', 'stone_B_n', 'stone_C_n', 'stone_D_n', 'stone_E_n'];
const EXT = { plate: 'jpg', plate_n: 'jpg', cemetery: 'jpg' };
const FONTS = [['Montserrat', 'montserrat-latin-600-normal', '600'], ['Montserrat', 'montserrat-latin-700-normal', '700'], ['Montserrat', 'montserrat-latin-800-normal', '800'], ['Montserrat', 'montserrat-latin-900-normal', '900'], ['Montserrat', 'montserrat-latin-500-normal', '500'],
  ['Montserrat Italic', 'montserrat-latin-600-italic', '600'], ['Fraktur', 'unifrakturmaguntia-latin-400-normal', '400'], ['Inter', 'inter-latin-400-normal', '400'], ['Inter', 'inter-latin-500-normal', '500'], ['Inter', 'inter-latin-700-normal', '700'],
  ['Silkscreen', 'silkscreen-latin-400-normal', '400'], ['JBMono', 'jetbrains-mono-latin-400-normal', '400']];
const base = (window.REBORN_BASE || '.');
const url = p => (window.REBORN_INLINE && window.REBORN_INLINE[p]) || `${base}/${p}`;
async function loadAll() {
  await Promise.all(FONTS.map(async ([fam, file, w]) => { const f = new FontFace(fam, `url(${url(`fonts/${file}.ttf`)})`, { weight: w }); await f.load(); document.fonts.add(f); }));
  const A = {}; await Promise.all(IMAGES.map(k => new Promise((res, rej) => { const im = new Image(); im.onload = () => { A[k] = im; res(); }; im.onerror = () => rej(new Error('missing ' + k)); im.src = url(`assets/${k}.${EXT[k] || 'png'}`); })));
  A.bella = A.bella_900; A.encore = A.encore_logo; A.cemetery = A.cemetery || A.plate; return A;
}
const mkCanvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };

async function boot() {
  const A = await loadAll(); const S = R.buildSprites(A, mkCanvas);
  const params = new URLSearchParams(location.search), capture = params.get('capture'), portrait = capture === 'short';
  const W = portrait ? 1080 : 1920, H = portrait ? 1920 : 1080;
  const gl = document.getElementById('gl'), ui = document.getElementById('ui'); gl.width = ui.width = W; gl.height = ui.height = H;
  const renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: true, preserveDrawingBuffer: !!capture, powerPreference: 'high-performance' });
  renderer.setPixelRatio(1); renderer.setSize(W, H, false); renderer.localClippingEnabled = true; renderer.toneMapping = THREE.NoToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
  const sc3 = createScene(renderer, A, S, W, H); const ctx = ui.getContext('2d');
  const env = { A, S, sc3, ctx, W, H, renderer };
  if (capture) { window.CAPTURE = FILM.makeCapture(env, capture, O, SC); document.body.classList.add('capture'); window.READY = true; return; }
  startGame(env);
}

// ---------------- interactive game ----------------
function startGame(env) {
  const { A, S, sc3, ctx, W, H } = env; const ui = document.getElementById('ui');
  let mode = 'title', g = E.newGame({ seed: 77, endless: true, shift: 9999, autoplay: true }), acc = 0, last = performance.now(), overAt = 0, input = { x: 960, y: 320, slash: false, keys: {} }, showBoard = false;
  const $ = id => document.getElementById(id);
  const audio = makeAudio();
  function newRun() { g = E.newGame({ seed: (Math.random() * 1e9) | 0, endless: true, shift: 60, mortX: 960, mortY: 320 }); input.x = 960; input.y = 320; mode = 'play'; acc = 0; showBoard = false; $('title').hidden = true; $('results').hidden = true; audio.start(); }
  $('play').onclick = () => { newRun(); };
  $('again').onclick = () => newRun();
  $('board').onclick = () => { showBoard = !showBoard; $('board').textContent = showBoard ? 'Orbituary' : 'Leaderboard'; };
  $('share').onclick = async () => { const s = g.score; const txt = `I raised ${g.reborn} Gothamistas before dawn in REBORN BY DAWN 🖤 Score ${s.toLocaleString('en-US')} · ${g.banished} bots banished. #PaxGothamista #RestInPax`; try { await navigator.clipboard.writeText(txt); $('share').textContent = 'Copied!'; } catch { $('share').textContent = 'Copy failed'; } setTimeout(() => $('share').textContent = 'Copy result', 1500); };
  // input
  const toDesign = e => { const r = ui.getBoundingClientRect(); return { sx: (e.clientX - r.left) / r.width * W, sy: (e.clientY - r.top) / r.height * H }; };
  let down = null;
  ui.addEventListener('pointermove', e => { if (mode !== 'play') return; const { sx, sy } = toDesign(e); const p = sc3.screenToPlay(sx, sy); if (p) { input.x = p.x; input.y = p.y; } });
  ui.addEventListener('pointerdown', e => { if (mode !== 'play') return; const d = toDesign(e); down = { ...d, t: performance.now(), type: e.pointerType }; const p = sc3.screenToPlay(d.sx, d.sy); if (p) { input.x = p.x; input.y = p.y; } if (e.pointerType === 'mouse') input.slash = true; });
  ui.addEventListener('pointerup', e => { if (mode !== 'play' || !down) return; if (down.type !== 'mouse' && performance.now() - down.t < 220) input.slash = true; down = null; });
  addEventListener('keydown', e => { input.keys[e.code] = true; if (e.code === 'Space') { e.preventDefault(); if (mode === 'play') input.slash = true; else if (mode === 'title') newRun(); } if (e.code === 'KeyM') audio.toggle(); });
  addEventListener('keyup', e => { input.keys[e.code] = false; });
  function frame(now) {
    const dt = Math.min(.05, (now - last) / 1000); last = now; acc += dt;
    while (acc >= 1 / 120) {
      acc -= 1 / 120;
      let I = null;
      if (mode === 'play') { const k = input.keys, vx = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0), vy = (k.KeyS || k.ArrowDown ? 1 : 0) - (k.KeyW || k.ArrowUp ? 1 : 0); if (vx || vy) { input.x = g.mort.x + vx * 260; input.y = g.mort.y + vy * 260; } I = { x: input.x, y: input.y, slash: input.slash }; input.slash = false; }
      const n0 = g.events.length; E.step(g, 1 / 120, I); for (let i = n0; i < g.events.length; i++) audio.sfx(g.events[i]);
    }
    if (mode === 'play' && g.over && !overAt) { overAt = now; }
    if (mode === 'play' && overAt && now - overAt > 2600) { mode = 'over'; overAt = 0; $('results').hidden = false; audio.stop(); }
    const snap = E.snapshot(g); sc3.update(snap, g.events, snap.t, {}); sc3.render();
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, H);
    if (mode === 'play') {
      O.drawWorldText(ctx, sc3, snap, g.events, {}); R.drawMoments(ctx, A, S, { events: g.events }, snap, snap.t, W, H); O.drawHUD2(ctx, A, S, snap, g.events); O.drawPassout(ctx, g.events, snap.t, W, H);
    } else if (mode === 'over') {
      const rank = SC.rows(g.score, Math.max(g.score, 40000)).findIndex(r => r.you) + 1, RES = { score: g.score, reborn: g.reborn, best: g.best, coffee: g.coffee, rank };
      if (showBoard) SC.leaderboard(ctx, A, S, 5, g.score, W, H, false); else SC.resultCard(ctx, A, S, 4, RES, W, H, false);
    } else { O.drawWorldText(ctx, sc3, snap, g.events, { names: false }); }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// ---------------- audio (Web Audio, original synthesized SFX + score loop) ----------------
function makeAudio() {
  let ac = null, buf = {}, music = null, on = true, gain = null;
  const files = ['music-loop', 'catch', 'rise', 'pop', 'slash', 'botkill', 'hit', 'coffee', 'fullhouse', 'special', 'mass', 'dawn', 'convert', 'steal'];
  async function init() { if (ac) return; ac = new (window.AudioContext || window.webkitAudioContext)(); gain = ac.createGain(); gain.connect(ac.destination);
    await Promise.all(files.map(async f => { try { const r = await fetch(url(`audio/${f}.mp3`)); buf[f] = await ac.decodeAudioData(await r.arrayBuffer()); } catch (e) { } })); }
  function play(name, vol = 1, rate = 1) { if (!ac || !on || !buf[name]) return; const s = ac.createBufferSource(); s.buffer = buf[name]; s.playbackRate.value = rate; const gn = ac.createGain(); gn.gain.value = vol; s.connect(gn).connect(gain); s.start(); return s; }
  return {
    async start() { await init(); if (music) music.stop(); music = play('music-loop', .55); if (music) music.loop = true; },
    stop() { if (music) { music.stop(); music = null; } play('dawn', .8); },
    toggle() { on = !on; if (gain) gain.gain.value = on ? 1 : 0; },
    sfx(e) { const map = { catch: ['catch', .5], rise: ['rise', .9], pop: ['pop', .7], slash: ['slash', .6], botkill: ['botkill', .7], hit: ['hit', .9], steal: ['steal', .8], coffee: ['coffee', .8], fullhouse: ['fullhouse', 1], special: ['special', 1], mass: ['mass', .8], convert: ['convert', .7] }[e.type]; if (map) play(map[0], map[1], e.type === 'rise' || e.type === 'pop' ? [1, 1.12, 1.26, 1.33, 1.5][e.g] || 1 : 1); },
  };
}
boot().catch(e => { console.error(e); document.body.insertAdjacentHTML('beforeend', `<pre style="color:#fff">${e.stack}</pre>`); });
