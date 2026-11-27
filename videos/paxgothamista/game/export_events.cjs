const F = require('./src/film2.js'); const T = F.takes(), L = F.shots(T); const out = {};
for (const mode of ['main', 'short']) {
  const list = mode === 'short' ? L.SHORT : L.MAIN, cues = [];
  for (const sh of list) {
    const d = sh.e - sh.s;
    if (sh.type === 'game' || sh.type === 'title') {
      const take = T[sh.take], t0 = take.frames[0].t;
      for (const e of take.events) { const lt = e.t - t0 - sh.from; if (lt < 0 || lt >= d) continue;
        if (['catch', 'deliver', 'rise', 'pop', 'slash', 'botkill', 'hit', 'steal', 'coffee', 'convert', 'fullhouse', 'special', 'mass', 'dawn', 'botspawn', 'lost'].includes(e.type)) cues.push({ t: +(sh.s + lt).toFixed(4), type: e.type, g: e.g ?? null, quiet: sh.type === 'title' }); }
      for (const [a] of sh.caps || []) cues.push({ t: a, type: 'caption' });
      if (sh.type === 'title') cues.push({ t: sh.s, type: 'title' });
    }
    const sm = mode === 'short';
    if (sh.type === 'board') { cues.push({ t: sh.s, type: 'board' }); for (let i = 0; i < 10; i++) cues.push({ t: +(sh.s + .15 + i * .04).toFixed(3), type: 'row', i }); for (let i = 0; i < 9; i++) cues.push({ t: +(sh.s + (sm ? .3 + i * .12 : .6 + i * .27)).toFixed(3), type: 'tick', i }); cues.push({ t: sh.s + (sm ? 1.35 : 3.1), type: 'rankup' }); cues.push({ t: sh.s + (sm ? .55 : 1.6), type: 'bots' }); }
    if (sh.type === 'result') { cues.push({ t: sh.s, type: 'card' }); cues.push({ t: sh.s + (sm ? .05 : .45), type: 'stamp' }); if (!sm) { cues.push({ t: sh.s + 2.45, type: 'click' }); cues.push({ t: sh.s + 2.75, type: 'whoosh' }); } }
    if (sh.type === 'post') { cues.push({ t: sh.s, type: 'post' }); for (let i = 0; i < 6; i++) cues.push({ t: +(sh.s + .5 + i * .3).toFixed(3), type: 'like', i }); }
    if (sh.type === 'gamecard') cues.push({ t: sh.s, type: 'gamecard' });
    if (sh.type === 'encore') cues.push({ t: sh.s, type: 'encore' });
    if (['board', 'result', 'game'].includes(sh.type) && list.indexOf(sh) > 0) cues.push({ t: sh.s, type: 'cut' });
  }
  cues.sort((a, b) => a.t - b.t); out[mode] = { duration: list[list.length - 1].e, cues };
}
require('fs').writeFileSync('../audio/trailer-events-3d.json', JSON.stringify(out, null, 1));
for (const m of ['main', 'short']) { const c = {}; out[m].cues.forEach(q => c[q.type] = (c[q.type] || 0) + 1); console.log(m, JSON.stringify(c)); }
console.log(out.main.cues.filter(c => ['fullhouse', 'special', 'mass', 'dawn', 'hit', 'steal', 'title'].includes(c.type)).map(c => c.type + '@' + c.t).join(' '));
