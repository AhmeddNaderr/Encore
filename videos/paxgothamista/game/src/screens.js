// Non-gameplay screens for the trailer: title, captions, leaderboard, Orbituary result, X post mock-up, end cards.
'use strict';
const R = require('./render.js');
const { PAL, clamp, lerp, easeOut, easeIn, easeOutBack, sparkle, panel, label, hexA } = R;

function fraktur(ctx, txt, x, y, size, fill = '#fff', stroke = '#140a2a', lw = 0, align = 'center') {
  ctx.font = `${size}px Fraktur`; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
  if (lw) { ctx.lineWidth = lw; ctx.strokeStyle = stroke; ctx.strokeText(txt, x, y); }
  ctx.fillStyle = fill; ctx.fillText(txt, x, y); return ctx.measureText(txt).width;
}
function mont(ctx, txt, x, y, size, color, weight = 800, align = 'center', ls = 0) {
  ctx.font = `${weight} ${size}px Montserrat`; ctx.letterSpacing = ls + 'px'; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillStyle = color; ctx.fillText(txt, x, y); const w = ctx.measureText(txt).width; ctx.letterSpacing = '0px'; return w;
}
function inter(ctx, txt, x, y, size, color, weight = 500, align = 'center') { ctx.font = `${weight} ${size}px Inter, Emoji`; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillStyle = color; ctx.fillText(txt, x, y); return ctx.measureText(txt).width; }
function fadeInOut(lt, dur, fin = .25, fout = .25) { return clamp(lt / fin) * (1 - clamp((lt - dur + fout) / fout)); }

// --- title over gameplay ---
function titleCard(ctx, A, S, lt, dur, W = 1920, H = 1080, portrait = false) {
  const a = fadeInOut(lt, dur, .2, .3);
  ctx.save(); ctx.globalAlpha = a * .72; ctx.fillStyle = '#0c0720'; ctx.fillRect(0, 0, W, H); ctx.restore();
  ctx.save(); ctx.globalAlpha = a; ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = a * .55; ctx.drawImage(S.glow.violet, W / 2 - 800, H * .48 - 330, 1600, 660); ctx.restore();
  ctx.save(); ctx.globalAlpha = a;
  const cy = portrait ? H * .42 : H * .47, k = portrait ? .78 : 1;
  const wm = A.wordmark, ww = 430 * k, wh = ww * wm.height / wm.width; const wy = cy - 250 * k;
  ctx.drawImage(wm, W / 2 - ww / 2, wy - wh / 2 + (1 - easeOut(lt / .5)) * 20, ww, wh);
  const sc = lerp(1.12, 1, easeOutBack(clamp((lt - .08) / .55)));
  ctx.save(); ctx.translate(W / 2, cy); ctx.scale(sc * k, sc * k);
  const tw = fraktur(ctx, 'Reborn by Dawn', 0, 0, 190, '#ffffff', '#150a2c', 22);
  sparkle(ctx, -tw / 2 - 46, -30, 30, lt * 2); sparkle(ctx, tw / 2 + 46, -30, 30, lt * 2 + 1); sparkle(ctx, tw / 2 - 20, -112, 15, lt * 3); sparkle(ctx, -tw / 2 + 60, 92, 12, lt * 3 + 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 2; for (const d of [-1, 1]) { ctx.beginPath(); ctx.moveTo(d * (tw / 2 + 46), 0); ctx.lineTo(d * (tw / 2 + 46), 70); ctx.stroke(); ctx.beginPath(); ctx.arc(d * (tw / 2 + 46), 76, 5, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill(); }
  ctx.restore();
  const sa = clamp((lt - .45) / .35); ctx.globalAlpha = a * sa;
  ctx.font = `600 ${portrait ? 30 : 34}px Montserrat Italic`; ctx.textAlign = 'center'; ctx.fillStyle = '#efe7ff'; ctx.fillText('Buried in one world. Reborn in another.', W / 2, cy + 150 * k);
  mont(ctx, 'A GAME FOR THE GOTHAMISTAS', W / 2, cy + 205 * k, portrait ? 17 : 18, PAL.gold, 800, 'center', 8);
  ctx.restore();
}
// --- caption pill ---
function caption(ctx, txt, lt, dur, W = 1920, y = 996, size = 40, kicker) {
  const a = fadeInOut(lt, dur, .2, .25); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a; const dy = (1 - easeOut(lt / .3)) * 18;
  ctx.font = `800 ${size}px Montserrat`; const w = ctx.measureText(txt).width + 80, h = size * 1.9;
  panel(ctx, W / 2 - w / 2, y - h / 2 + dy, w, h, h / 2, 'rgba(18,10,36,0.88)', 'rgba(246,216,96,0.65)');
  mont(ctx, txt, W / 2, y + dy + 2, size, '#fff', 800, 'center');
  if (kicker) { ctx.font = '800 15px Montserrat'; ctx.letterSpacing = '6px'; const kw = ctx.measureText(kicker).width + 40; ctx.letterSpacing = '0px'; panel(ctx, W / 2 - kw / 2, y - h / 2 - 22 + dy, kw, 32, 16, PAL.pink, null); mont(ctx, kicker, W / 2 + 3, y - h / 2 - 6 + dy, 15, '#fff', 800, 'center', 6); }
  ctx.restore();
}
function bigLine(ctx, l1, l2, lt, dur, x, y, align = 'left', size = 64) {
  const a = fadeInOut(lt, dur, .25, .3); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a * clamp(lt / .25);
  mont(ctx, l1, x, y, size * .62, '#e9e1ff', 700, align);
  const a2 = clamp((lt - .55) / .3); ctx.globalAlpha = a * a2; const sc = lerp(1.08, 1, easeOut((lt - .55) / .4));
  ctx.save(); ctx.translate(x, y + size * 1.25); ctx.scale(sc, sc); fraktur(ctx, l2, 0, 0, size * 1.45, '#ffffff', '#140a2a', 14, align); ctx.restore();
  ctx.restore();
}

function botsLine(ctx, lt, dur, x, y, align, k) {
  const a = fadeInOut(lt, dur, .25, .3); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a * clamp(lt / .25); mont(ctx, 'Bots can like a post.', x, y, 44 * k, '#efe7ff', 700, align);
  const a2 = clamp((lt - .6) / .3), sc = lerp(1.1, 1, easeOut((lt - .6) / .45)); ctx.globalAlpha = a * a2;
  ctx.save(); ctx.translate(x, y + 120 * k); ctx.scale(sc, sc); fraktur(ctx, "They can't", 0, 0, 118 * k, '#ffffff', '#140a2a', 16, align); fraktur(ctx, 'raise the dead.', 0, 118 * k, 118 * k, '#ffffff', '#140a2a', 16, align); ctx.restore();
  const a3 = clamp((lt - 1.3) / .3); ctx.globalAlpha = a * a3; mont(ctx, 'ONLY HOLDERS WHO PLAY CLIMB THE REGISTRY', x, y + 330 * k, 17 * k, '#f6d860', 800, align, 4);
  ctx.restore();
}
function ambient(ctx, S, lt, W, H, n = 22) {
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < n; i++) { const life = 4 + R.hash(i, 21) * 3, ph = ((lt + R.hash(i, 22) * life) % life) / life, x = R.hash(i, 23) * W + Math.sin(lt * .8 + i) * 20, y = H * (1.05 - ph * 1.1), r = 6 + R.hash(i, 24) * 12;
    ctx.globalAlpha = Math.sin(ph * Math.PI) * .5; ctx.drawImage(S.glow[R.GRAVES[i % 5].id], x - r, y - r, r * 2, r * 2); }
  ctx.restore();
}
function driftBg(ctx, S, lt, W, H) { const z = 1.06 + lt * .006, ox = Math.sin(lt * .35) * 18; ctx.drawImage(S.bgBlur, (W - W * z) / 2 + ox, (H - H * z) / 2, W * z, H * z); }
// --- leaderboard ---
function sample(final) { const k = final / 30000; return [36880, 29240, 27410, 25120, 22760, 20940, 18310, 16450, 14080].map(v => Math.round(v * k / 10) * 10); }
function rows(you, final) { const r = sample(final).map((s, i) => ({ name: `holder_${String(i + 1).padStart(2, '0')}`, score: s, you: false, face: i })); r.push({ name: 'holder_you', score: you, you: true, face: 9 }); return r.sort((a, b) => b.score - a.score); }
function leaderboard(ctx, A, S, lt, final, W = 1920, H = 1080, portrait = false, climbDur = 2.6) {
  driftBg(ctx, S, lt, W, H); ctx.save(); ctx.fillStyle = 'rgba(14,8,30,0.62)'; ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation = 'soft-light'; const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, 'rgba(255,111,181,0.7)'); g.addColorStop(1, 'rgba(255,179,107,0.25)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore();
  ambient(ctx, S, lt, W, H);
  const bw = portrait ? 960 : 980, bh = portrait ? 1180 : 940, x = portrait ? (W - bw) / 2 : 110, y = portrait ? 420 : (H - bh) / 2;
  const enter = easeOut(lt / .45); ctx.save(); ctx.globalAlpha = enter; ctx.translate(0, (1 - enter) * 40);
  panel(ctx, x, y, bw, bh, 30, 'rgba(22,12,44,0.93)', 'rgba(246,216,96,0.55)');
  const mo = A.mortuary, mw = 330, mh = mw * mo.height / mo.width; ctx.drawImage(mo, x + bw / 2 - mw / 2, y + 22, mw, mh);
  mont(ctx, 'DEATH REGISTRY · WL LEADERBOARD', x + bw / 2, y + mh + 46, 19, PAL.gold, 800, 'center', 5);
  panel(ctx, x + bw - 140, y + 30, 104, 30, 15, PAL.pink, null); mont(ctx, 'SAMPLE', x + bw - 88, y + 46, 13, '#fff', 900, 'center', 3);
  const climb = easeOut(clamp((lt - (portrait ? .25 : .5)) / climbDur)); const you = Math.round(lerp(final * .45, final, climb));
  const list = rows(you, final), top = y + mh + 92, rh = portrait ? 66 : 62;
  mont(ctx, 'RANK', x + 52, top - 4, 12, 'rgba(201,184,255,0.7)', 800, 'left', 3); mont(ctx, 'GOTHAMISTA', x + 190, top - 4, 12, 'rgba(201,184,255,0.7)', 800, 'left', 3); mont(ctx, 'SCORE', x + bw - 52, top - 4, 12, 'rgba(201,184,255,0.7)', 800, 'right', 3);
  const faces = ['face_nft_01', 'face_nft_02', 'face_nft_03', 'face_nft_04', 'face_nft_05', 'face_nft_06', 'face_nft_04', 'face_nft_02', 'face_nft_06', 'face_nft_05'];
  list.forEach((r, i) => {
    const yy = top + 34 + i * rh, ra = clamp((lt - .15 - i * .04) / .25); ctx.save(); ctx.globalAlpha = enter * ra;
    if (r.you) { const gg = ctx.createLinearGradient(x + 30, 0, x + bw - 30, 0); gg.addColorStop(0, 'rgba(240,74,158,0.95)'); gg.addColorStop(1, 'rgba(139,92,255,0.9)'); panel(ctx, x + 28, yy - rh * .44, bw - 56, rh * .88, 16, gg, '#ffffff');
      const sw = ((lt * .7) % 1.4) / 1.4, sx = x + 28 + (bw - 56) * (sw * 1.4 - .2); ctx.save(); ctx.beginPath(); ctx.roundRect(x + 28, yy - rh * .44, bw - 56, rh * .88, 16); ctx.clip(); const sg = ctx.createLinearGradient(sx - 90, 0, sx + 90, 0); sg.addColorStop(0, 'rgba(255,255,255,0)'); sg.addColorStop(.5, 'rgba(255,255,255,0.35)'); sg.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = sg; ctx.fillRect(sx - 90, yy - rh * .44, 180, rh * .88); ctx.restore(); }
    else if (i % 2 === 0) panel(ctx, x + 28, yy - rh * .44, bw - 56, rh * .88, 14, 'rgba(255,255,255,0.04)', null);
    mont(ctx, String(i + 1).padStart(2, '0'), x + 60, yy, 24, r.you ? '#fff' : (i < 3 ? PAL.gold : '#c9b8ff'), 900, 'left');
    ctx.save(); ctx.beginPath(); ctx.arc(x + 150, yy, 23, 0, Math.PI * 2); ctx.clip(); ctx.drawImage(A[faces[r.face]], x + 127, yy - 23, 46, 46); ctx.restore();
    ctx.beginPath(); ctx.arc(x + 150, yy, 23, 0, Math.PI * 2); ctx.lineWidth = 2; ctx.strokeStyle = r.you ? '#fff' : 'rgba(201,184,255,0.5)'; ctx.stroke();
    mont(ctx, r.name, x + 190, yy, 25, '#fff', r.you ? 900 : 600, 'left');
    if (r.you) { panel(ctx, x + 352, yy - 14, 64, 28, 14, '#ffffff', null); mont(ctx, 'YOU', x + 384, yy + 1, 13, '#c0267a', 900, 'center', 2); }
    mont(ctx, r.score.toLocaleString('en-US'), x + bw - 52, yy, 26, '#fff', 800, 'right');
    ctx.restore();
  });
  const rank = list.findIndex(r => r.you) + 1;
  mont(ctx, `YOUR RANK  #${rank}`, x + bw / 2, y + bh - 34, 16, '#efe7ff', 800, 'center', 4);
  ctx.restore();
  return rank;
}

// --- Orbituary result card (their frame) ---
function resultCard(ctx, A, S, lt, R0, W = 1920, H = 1080, interactive = true) {
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
  const ia = easeOut(lt / .4), sc = lerp(1.04, 1, ia) * (1 + Math.max(0, lt - .4) * .008); ctx.save(); ctx.globalAlpha = ia; ctx.translate(W / 2, H / 2); ctx.scale(sc * W / 1920, sc * W / 1920); ctx.translate(-960, -540);
  ctx.drawImage(A.orbituary, 0, 0, 1920, 1080);
  // Alive dims, Dead gets the stamp
  ctx.save(); ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(690, 575, 160, 80); ctx.restore();
  const st = clamp((lt - .45) / .25);
  if (st > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = st * (.7 + .2 * Math.sin(lt * 5)); ctx.drawImage(S.glow.pink, 1146 - 190, 618 - 120, 380, 240); ctx.restore();
    ctx.save(); ctx.translate(1146, 618); const ss = lerp(1.6, 1, easeIn(st)); ctx.scale(ss, ss); ctx.globalAlpha = st; ctx.strokeStyle = PAL.pink; ctx.lineWidth = 6; ctx.beginPath(); ctx.ellipse(0, 0, 112, 52, -.06, 0, Math.PI * 2); ctx.stroke(); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(0, 0, 122, 60, -.06, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
  // box content
  const ta = clamp((lt - .75) / .3);
  ctx.save(); ctx.globalAlpha = ta;
  mont(ctx, 'HOLDER_YOU  ·  REBORN BY DAWN', 960, 692, 18, PAL.gold, 800, 'center', 5);
  fraktur(ctx, `${R0.reborn} Souls Reborn`, 960, 742, 58, '#ffffff');
  ctx.restore();
  const sa = clamp((lt - 1.05) / .3); ctx.save(); ctx.globalAlpha = sa;
  const chips = [[`SCORE ${R0.score.toLocaleString('en-US')}`], [`BEST STREAK ×${R0.best}`], [`COFFEES LEFT ${R0.coffee}/5`], [`WL RANK #${R0.rank}`]];
  let cx = 960 - 1.5 * 250; chips.forEach(([t], i) => { const x = 960 + (i - 1.5) * 262; panel(ctx, x - 122, 826, 244, 44, 22, 'rgba(25,14,50,0.95)', 'rgba(201,184,255,0.6)'); mont(ctx, t, x, 849, 14, '#fff', 800, 'center', 2); });
  ctx.restore();
  if (interactive) { const ba = clamp((lt - 1.35) / .3), press = lt > 2.45 && lt < 2.7 ? .93 : 1, pulse = 1 + Math.sin(lt * 6) * .02 * (lt < 2.45 ? 1 : 0);
    ctx.save(); ctx.globalAlpha = ba; ctx.translate(960, 935); ctx.scale(press * pulse, press * pulse); panel(ctx, -170, -36, 340, 72, 36, PAL.gold, null); mont(ctx, 'SHARE ON X', 0, 2, 22, '#1b1233', 900, 'center', 4); ctx.restore();
    if (lt > 2.2) { const ca = clamp((lt - 2.2) / .2), px = lerp(1180, 1010, easeOut((lt - 2.2) / .3)), py = lerp(1040, 955, easeOut((lt - 2.2) / .3)); ctx.save(); ctx.globalAlpha = ca * ba;
      if (lt > 2.45) { const r = (lt - 2.45) * 220; ctx.strokeStyle = 'rgba(255,255,255,' + Math.max(0, .8 - (lt - 2.45) * 2) + ')'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(px, py, 22, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fill(); ctx.lineWidth = 3; ctx.strokeStyle = '#1b1233'; ctx.stroke(); ctx.restore(); } }
  ctx.restore();
}
// --- X post mock-up ---
function xPost(ctx, A, S, lt, R0, cardCanvas, W = 1920, H = 1080, portrait = false) {
  driftBg(ctx, S, lt, W, H); ctx.fillStyle = 'rgba(8,5,18,0.78)'; ctx.fillRect(0, 0, W, H); ambient(ctx, S, lt, W, H, 16);
  const pw = portrait ? 960 : 860, ph = portrait ? 980 : 900, x = (W - pw) / 2, y = (H - ph) / 2 + (portrait ? 40 : 0);
  const e = easeOutBack(clamp(lt / .5)); ctx.save(); ctx.translate(W / 2, H / 2); ctx.scale(lerp(.9, 1, e) * (1 + lt * .01), lerp(.9, 1, e) * (1 + lt * .01)); ctx.translate(-W / 2, -H / 2); ctx.globalAlpha = clamp(lt / .25);
  panel(ctx, x, y, pw, ph, 28, '#000000', '#2f3336');
  ctx.save(); ctx.beginPath(); ctx.arc(x + 70, y + 72, 32, 0, Math.PI * 2); ctx.clip(); ctx.drawImage(A.face_nft_04, x + 38, y + 40, 64, 64); ctx.restore();
  inter(ctx, 'holder_you', x + 118, y + 60, 26, '#e7e9ea', 700, 'left'); inter(ctx, '@holder_you · 1m', x + 118, y + 92, 21, '#71767b', 400, 'left');
  inter(ctx, '𝕏', x + pw - 50, y + 64, 30, '#e7e9ea', 700, 'center');
  const lines = [`Got ${R0.reborn} Gothamistas reborn before dawn 🖤`, `Mort survived on ${R0.coffee} coffees. Rank #${R0.rank} on the`, 'Death Registry. Your turn, Gothamista ⚰️', '#PaxGothamista #RestInPax'];
  lines.forEach((l, i) => inter(ctx, l, x + 40, y + 150 + i * 38, 26, i === 3 ? '#1d9bf0' : '#e7e9ea', 400, 'left'));
  const cw = pw - 80, ch = cw * 1080 / 1920, cy = y + 320;
  ctx.save(); ctx.beginPath(); ctx.roundRect(x + 40, cy, cw, ch, 18); ctx.clip(); ctx.drawImage(cardCanvas, x + 40, cy, cw, ch); ctx.restore(); ctx.beginPath(); ctx.roundRect(x + 40, cy, cw, ch, 18); ctx.lineWidth = 1.5; ctx.strokeStyle = '#2f3336'; ctx.stroke();
  const likes = Math.round(lerp(3, 666, easeOut(clamp((lt - .4) / 2.4)))), rts = Math.round(lerp(0, 128, easeOut(clamp((lt - .5) / 2.3))));
  const iy = cy + ch + 46; [['💬', '42'], ['🔁', String(rts)], ['🖤', String(likes)], ['📊', (likes * 31).toLocaleString('en-US')]].forEach(([ic, n], i) => { inter(ctx, ic + '  ' + n, x + 70 + i * (pw - 120) / 4, iy, 22, '#71767b', 500, 'left'); });
  ctx.restore();
  mont(ctx, 'POST PREVIEW · MOCK-UP', W / 2, y + ph + (portrait ? 46 : 34), 13, 'rgba(232,224,255,0.6)', 700, 'center', 4);
}
// --- game end card ---
function gameCard(ctx, A, S, lt, W = 1920, H = 1080, portrait = false) {
  const a = clamp(lt / .3);
  ctx.save(); ctx.globalAlpha = .78 * a; ctx.fillStyle = '#0c0720'; ctx.fillRect(0, 0, W, H); ctx.restore();
  ctx.save(); ctx.globalAlpha = a; const k = portrait ? .8 : 1, cy = portrait ? H * .36 : H * .42;
  const wm = A.wordmark, ww = 560 * k, wh = ww * wm.height / wm.width; ctx.drawImage(wm, W / 2 - ww / 2, cy - 250 * k - wh / 2, ww, wh);
  ctx.save(); ctx.translate(W / 2, cy); const sc = lerp(1.06, 1, easeOut(lt / .6)) * k; ctx.scale(sc, sc); const tw = fraktur(ctx, 'Reborn by Dawn', 0, 0, 170, '#fff', '#150a2c', 20); sparkle(ctx, -tw / 2 - 40, -28, 26, lt * 2); sparkle(ctx, tw / 2 + 40, -28, 26, lt * 2 + 1); ctx.restore();
  mont(ctx, 'A GAME CONCEPT FOR PAX GOTHAMISTA', W / 2, cy + 128 * k, portrait ? 20 : 22, PAL.gold, 800, 'center', 8);
  ctx.font = `600 ${portrait ? 26 : 28}px Montserrat Italic`; ctx.textAlign = 'center'; ctx.fillStyle = '#efe7ff'; ctx.fillText('Welcome to your second life. Try not to waste this one.', W / 2, cy + 186 * k);
  ctx.restore();
}
// --- Encore end card (house style: black, silver mark, slogan) ---
function encoreCard(ctx, A, lt, W = 1920, H = 1080, portrait = false, short = false) {
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
  const f = k => clamp((lt - k) / .35);
  const s = portrait ? W / 1920 * 1.55 : 1, cx = W / 2;
  const base = portrait ? H * .26 : 160;
  if (!portrait) { ctx.save(); ctx.globalAlpha = f(0) * .8; ctx.font = '400 21px JBMono'; ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillStyle = '#8e86a8'; ctx.letterSpacing = '1px'; ctx.fillText('ENCORE STUDIO  /  GAME CONCEPT FILM', 96, 30); ctx.textAlign = 'right'; ctx.fillText('PAX GOTHAMISTA', W - 96, 30); ctx.letterSpacing = '0px'; ctx.restore(); }
  ctx.save(); ctx.globalAlpha = f(0); const lw = 300 * s * (1 + lt * .006), lh = lw * A.encore.height / A.encore.width, ly = base + (1 - easeOut(lt / .5)) * 14; ctx.drawImage(A.encore, cx - lw / 2, ly, lw, lh); ctx.restore();
  for (const st0 of [.9, 2.7]) { const p = (lt - st0) / .8; if (p < 0 || p > 1) continue; if (!encoreCard.tmp) { encoreCard.tmp = R.makeCanvas(A.encore.width, A.encore.height); }
    const tc = encoreCard.tmp, tx = tc.getContext('2d'); tx.globalCompositeOperation = 'source-over'; tx.clearRect(0, 0, tc.width, tc.height); tx.drawImage(A.encore, 0, 0);
    const bx = -tc.width * .4 + p * tc.width * 1.8, g = tx.createLinearGradient(bx - 70, 0, bx + 70, tc.height * .4); g.addColorStop(0, '#000'); g.addColorStop(.5, '#fff'); g.addColorStop(1, '#000'); tx.globalCompositeOperation = 'multiply'; tx.fillStyle = g; tx.fillRect(0, 0, tc.width, tc.height);
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = .55 * Math.sin(p * Math.PI); ctx.drawImage(tc, cx - lw / 2, ly, lw, lh); ctx.restore(); }
  let y = base + lh + 60 * s;
  ctx.save(); ctx.globalAlpha = f(.15); inter(ctx, 'REBORN BY DAWN — a game concept for Pax Gothamista', cx, y, (portrait ? 30 : 38) * (portrait ? 1 : 1), '#ffffff', 500); ctx.restore();
  y += (portrait ? 58 : 60);
  ctx.save(); ctx.globalAlpha = f(.25); ctx.font = `400 ${portrait ? 22 : 24}px JBMono`; ctx.letterSpacing = '9px'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#a7a7a7'; ctx.fillText('BY ENCORE STUDIO', cx, y); ctx.letterSpacing = '0px'; ctx.restore();
  y += (portrait ? 110 : 96);
  ctx.save(); ctx.globalAlpha = f(.4); const sc = lerp(1.04, 1, easeOut((lt - .4) / .5)); ctx.translate(cx, y); ctx.scale(sc, sc);
  if (portrait) { inter(ctx, 'One crew for', 0, -40, 76, '#f4f4f4', 700); inter(ctx, 'your whole launch.', 0, 46, 76, '#f4f4f4', 700); } else inter(ctx, 'One crew for your whole launch.', 0, 0, 72, '#f4f4f4', 700);
  ctx.restore();
  y += portrait ? 200 : 110;
  ctx.save(); ctx.globalAlpha = f(.6);
  if (portrait) { inter(ctx, 'Book a free 30-min call', cx, y, 34, '#f0f0f0', 500); inter(ctx, 'encorestudio.xyz · @EncoreStudiohq', cx, y + 54, 34, '#f0f0f0', 500); y += 54; }
  else inter(ctx, 'Book a free 30-min call · encorestudio.xyz · @EncoreStudiohq', cx, y, 38, '#f0f0f0', 500);
  ctx.restore();
  y += portrait ? 110 : 104;
  ctx.save(); ctx.globalAlpha = f(.75); ctx.strokeStyle = '#2a2a2a'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(cx - (portrait ? 420 : 520), y); ctx.lineTo(cx + (portrait ? 420 : 520), y); ctx.stroke();
  const d1 = 'Unofficial concept by Encore Studio. Not affiliated with or endorsed by Pax Gothamista.', d2 = 'Pax Gothamista characters and art © Pax Gothamista.';
  if (portrait) { inter(ctx, 'Unofficial concept by Encore Studio.', cx, y + 56, 24, '#b5b5b5', 400); inter(ctx, 'Not affiliated with or endorsed by Pax Gothamista.', cx, y + 92, 24, '#b5b5b5', 400); inter(ctx, d2, cx, y + 128, 24, '#b5b5b5', 400); }
  else { inter(ctx, d1, cx, y + 50, 26, '#b5b5b5', 400); inter(ctx, d2, cx, y + 92, 26, '#b5b5b5', 400); }
  ctx.restore();
  // badge
  ctx.save(); ctx.globalAlpha = f(.9); const bx = portrait ? cx - 255 : W - 566, by = portrait ? H - 170 : H - 88; ctx.fillStyle = '#05060d'; ctx.fillRect(bx, by, 510, 52); ctx.strokeStyle = '#3a3f5a'; ctx.lineWidth = 2; ctx.strokeRect(bx, by, 510, 52);
  ctx.fillStyle = '#e8213c'; ctx.fillRect(bx + 14, by + 22, 8, 8); ctx.font = '400 34px Silkscreen'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#f2f2f2'; ctx.fillText('CONCEPT', bx + 32, by + 27); ctx.fillRect(bx + 236, by + 22, 8, 8); ctx.fillText('UNOFFICIAL', bx + 254, by + 27);
  ctx.restore();
}
module.exports = { botsLine, titleCard, caption, bigLine, leaderboard, resultCard, xPost, gameCard, encoreCard, fraktur, mont, rows, fadeInOut };
