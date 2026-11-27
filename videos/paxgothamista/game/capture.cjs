// node capture.cjs <main|short> stills t1,t2,...   |   node capture.cjs <main|short> video <startFrame> <endFrame> <out.mp4>
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const { spawn } = require('child_process'); const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, 'public'); const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.ttf': 'font/ttf', '.mp3': 'audio/mpeg' };
function serve() { return new Promise(r => { const s = http.createServer((q, res) => { const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0])); fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' }); res.end(d); }); }).listen(0, () => r(s)); }); }
(async () => {
  const [mode, kind, ...rest] = process.argv.slice(2); const W = mode === 'short' ? 1080 : 1920, H = mode === 'short' ? 1920 : 1080;
  const srv = await serve(); const port = srv.address().port;
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--disable-gpu-vsync'] });
  const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  p.on('console', m => { if (m.type() === 'error') console.error('PAGE', m.text()); }); p.on('pageerror', e => console.error('PAGEERR', e.message));
  await p.goto(`http://127.0.0.1:${port}/index.html?capture=${mode}`); await p.waitForFunction(() => window.READY === true, null, { timeout: 120000 });
  await p.addStyleTag({ content: `#stage{place-items:start}#wrap{width:${W}px!important;height:${H}px!important;aspect-ratio:auto}` });
  const shot = async t => { await p.evaluate(t => window.CAPTURE.frame(t), t); return p.screenshot({ type: 'jpeg', quality: 93, clip: { x: 0, y: 0, width: W, height: H } }); };
  if (kind === 'stills') { const out = path.join(__dirname, '..', 'review', '3d_' + mode); fs.mkdirSync(out, { recursive: true });
    for (const t of rest[0].split(',').map(Number)) { const t0 = Date.now(); fs.writeFileSync(path.join(out, `t${t.toFixed(2)}.jpg`), await shot(t)); console.log(t, Date.now() - t0, 'ms'); } }
  else { const [a, z, outF] = rest; const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', '60', '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '14', '-pix_fmt', 'yuv420p', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-colorspace', 'bt709', outF], { stdio: ['pipe', 'inherit', 'inherit'] });
    const t0 = Date.now(); for (let f = +a; f < +z; f++) { const buf = await shot(f / 60); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); if ((f - a) % 60 === 0) console.error(`[${mode} ${a}-${z}] ${f} ${((Date.now() - t0) / 1000).toFixed(0)}s`); }
    ff.stdin.end(); await new Promise(r => ff.on('close', r)); console.error('done', outF); }
  await b.close(); srv.close();
})().catch(e => { console.error(e); process.exit(1); });
