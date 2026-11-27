// REBORN BY DAWN — Three.js 2.5D diorama built from the official Pax Gothamista art.
// Layers: depth-warped background plate, five engraved tombstones, girls rising between them, Mort, souls, bots.
// All 2D art is lit live (generated normal maps): souls light the stones as they pass, graves underlight the girls.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
const E = require('./engine2.js');
const R = require('./render.js');
const { GRAVES, DEPTH, C } = E;

export const FOV = 30, TAN = Math.tan(FOV / 2 * Math.PI / 180);
export const u = d => 2 * d * TAN / 1080;
export const wp = (px, py, d, v = new THREE.Vector3()) => v.set((px - 960) * u(d), (540 - py) * u(d), -d);
const PLAY_D = 17, FG_D = 12.5;
const STONE_D = { A: 22, B: 24, C: 20, D: 22.5, E: 20.5 };
const STONE_BOX = R.STONE_BOX;
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v)), lerp = (a, b, k) => a + (b - a) * k;
const easeOut = x => 1 - Math.pow(1 - clamp(x), 3), easeIn = x => clamp(x) * clamp(x);
const easeOutBack = x => { x = clamp(x); const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const hash = R.hash;
function plateDepth(px, py) { const s = clamp((py - 300) / 780); return 19.6 + 50.4 * Math.pow(1 - s, 1.6); } // smooth (C1) so derivative-based normal mapping has no seam

function tex(img, srgb = true) { const t = img instanceof THREE.Texture ? img : (img.getContext ? new THREE.CanvasTexture(img) : new THREE.Texture(img)); t.needsUpdate = true; if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }
function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function glowTex(color = '#ffffff', size = 128, hard = 0) { const c = canvas(size, size), x = c.getContext('2d'), g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2); g.addColorStop(0, color); g.addColorStop(.15 + hard, color + 'aa'); g.addColorStop(.45, color + '30'); g.addColorStop(1, color + '00'); x.fillStyle = g; x.fillRect(0, 0, size, size); return tex(c); }

export function createScene(renderer, A, S, W, H) {
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#05061a');
  const camera = new THREE.PerspectiveCamera(FOV, W / H, .1, 300);
  const litMat = (map, nmap, base = .64, opts = {}) => new THREE.MeshLambertMaterial(Object.assign({ map, normalMap: nmap || null, normalScale: new THREE.Vector2(1, 1), emissive: new THREE.Color(1, 1, 1), emissiveMap: map, emissiveIntensity: base, transparent: true, alphaTest: .03, depthWrite: false, side: THREE.FrontSide }, opts));
  const T = {}; const ldr = k => T[k] || (T[k] = tex(A[k]));
  // ---------- background plate (depth-warped grid keeps the composition exact at rest) ----------
  { const gx = 96, gy = 54, geo = new THREE.PlaneGeometry(1, 1, gx, gy), pos = geo.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) { const ix = i % (gx + 1), iy = Math.floor(i / (gx + 1)), px = ix / gx * 1920, py = iy / gy * 1081; wp(px, py, plateDepth(px, py), v); pos.setXYZ(i, v.x, v.y, v.z); }
    geo.computeVertexNormals(); const nrm = geo.attributes.normal; for (let i = 0; i < nrm.count; i++) nrm.setXYZ(i, 0, 0, 1);
    const plate = window.__plate = new THREE.Mesh(geo, litMat(ldr('plate'), tex(A.plate_n, false), .8, { transparent: false, alphaTest: 0, depthWrite: true }));
    plate.material.normalScale.set(.6, .6); plate.renderOrder = 0; scene.add(plate); }
  // moon glow + clouds + lightning live far back
  const glowW = glowTex('#ffffff'), glowMoon = glowTex('#cfe6ff');
  const add = (o, ro) => { o.renderOrder = ro; scene.add(o); return o; };
  const spr = (map, color = '#ffffff', blending = THREE.AdditiveBlending, opacity = 1) => new THREE.Sprite(new THREE.SpriteMaterial({ map, color: new THREE.Color(color), blending, transparent: true, depthWrite: false, depthTest: true, opacity }));
  const moon = add(spr(glowMoon, '#9fc4ff'), 2); wp(1342, 182, 69, moon.position); moon.scale.setScalar(560 * u(69));
  const cloudTex = (() => { const c = canvas(256, 128), x = c.getContext('2d'); for (let i = 0; i < 26; i++) { const g = x.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, 'rgba(70,80,160,0.55)'); g.addColorStop(1, 'rgba(70,80,160,0)'); x.save(); x.translate(30 + hash(i, 1) * 196, 50 + hash(i, 2) * 40); x.scale(28 + hash(i, 3) * 40, 14 + hash(i, 4) * 18); x.fillStyle = g; x.beginPath(); x.arc(0, 0, 1, 0, 7); x.fill(); x.restore(); } return tex(c); })();
  const clouds = [0, 1, 2, 3].map(i => add(spr(cloudTex, '#ffffff', THREE.NormalBlending, .75), 3));
  const boltMat = new THREE.MeshBasicMaterial({ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: new THREE.Color(2.2, 2.2, 3) });
  const bolt = add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), boltMat), 2); bolt.visible = false;
  const boltCanvas = canvas(256, 512); boltMat.map = tex(boltCanvas);
  // ---------- tombstones (engraved by the 2D renderer) ----------
  const stones = {};
  for (const g of GRAVES) {
    const c = S.stones[g.stone], [ox, oy] = STONE_BOX[g.stone], d = STONE_D[g.stone], w = c.width, h = c.height;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w * u(d), h * u(d)), litMat(tex(c), tex(A['stone_' + g.stone + '_n'], false), .76));
    wp(ox + w / 2, oy + h / 2, d, m.position); m.renderOrder = 100 - d * 2; scene.add(m); stones[g.stone] = { m, d, ox, oy, w, h };
  }
  // ---------- girls ----------
  const girls = GRAVES.map((g, gi) => {
    const img = A[g.girl], d = STONE_D[g.stone] + .8, h = g.rise.h, w = h * img.width / img.height;
    const geo = new THREE.PlaneGeometry(w * u(d), h * u(d)); geo.translate(0, h * u(d) / 2, 0);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -(540 - g.rise.ground) * u(d));
    const mat = litMat(tex(img), tex(A[g.girl + '_n'], false), .8, { clippingPlanes: [plane] });
    const mesh = new THREE.Mesh(geo, mat); mesh.renderOrder = 100 - d * 2 + .5; mesh.visible = false; scene.add(mesh);
    const beam = add(spr(glowTex(g.glow, 128), '#ffffff'), 100 - d * 2 + .4); beam.material.opacity = 0;
    return { mesh, mat, d, w, h, beam };
  });
  // ---------- Mort ----------
  const mortMat = litMat(tex(A.mort), tex(A.mort_n, false), .82); const mortSize = 290;
  const mort = new THREE.Mesh(new THREE.PlaneGeometry(mortSize * u(PLAY_D), mortSize * u(PLAY_D)), mortMat); mort.renderOrder = 300; scene.add(mort);
  const mortAura = add(spr(glowTex('#8b5cff'), '#ffffff'), 299); mortAura.material.opacity = .3;
  // slash crescent
  const slashTex = (() => { const c = canvas(256, 256), x = c.getContext('2d'); x.translate(128, 128); for (let i = 0; i < 40; i++) { const a0 = -Math.PI * .1 + i * .045; x.strokeStyle = `rgba(230,215,255,${(i / 40) * .9})`; x.lineWidth = 6 + i * .35; x.beginPath(); x.arc(0, 0, 104, a0, a0 + .05); x.stroke(); } x.strokeStyle = 'rgba(255,255,255,0.9)'; x.lineWidth = 3; x.beginPath(); x.arc(0, 0, 108, Math.PI * .9, Math.PI * 1.95); x.stroke(); return tex(c); })();
  const slash = add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: slashTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: new THREE.Color(1.6, 1.4, 2.2) })), 305); slash.visible = false;
  // power props
  const thorns = [0, 1, 2, 3, 4, 5].map(() => add(spr(tex(emblemCanvas('rose', GRAVES[3].color, 96)), '#ffffff', THREE.NormalBlending), 306));
  const halo = add(spr(tex(emblemCanvas('halo', '#ffe08a', 128)), '#ffffff', THREE.NormalBlending), 306);
  const ringTex = (() => { const c = canvas(256, 256), x = c.getContext('2d'); const g = x.createRadialGradient(128, 128, 90, 128, 128, 128); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(.7, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 256, 256); return tex(c); })();
  const magnetRing = add(spr(ringTex, GRAVES[1].glow), 290), influence = add(spr(ringTex, GRAVES[2].glow), 290), shock = add(spr(ringTex, '#ffd9f2'), 400);
  // ---------- soul / bot / cup visuals (pooled sprites) ----------
  const emb = {}; GRAVES.forEach((g, i) => { emb[i] = tex(soulCanvas(i)); }); emb[E.RARE] = tex(soulCanvas(E.RARE));
  const botTex = tex(botCanvas()), glowBy = GRAVES.map(g => glowTex(g.glow)); glowBy[E.RARE] = glowTex('#ffffff');
  const glowRed = glowTex('#ff3355'), glowCyan = glowTex('#33e1ff'), glowWarm = glowTex('#ffcf8a');
  const pool = (n, make) => { const arr = []; for (let i = 0; i < n; i++) arr.push(make()); return { arr, i: 0, reset() { this.i = 0; }, get() { const o = this.arr[this.i++] || (this.arr.push(make()), this.arr[this.i - 1]); o.visible = true; return o; }, finish() { for (let k = this.i; k < this.arr.length; k++) this.arr[k].visible = false; } }; };
  const P_core = pool(24, () => add(spr(emb[0], '#ffffff', THREE.NormalBlending), 320));
  const P_glow = pool(260, () => add(spr(glowW, '#ffffff'), 318));
  const P_bot = pool(12, () => add(spr(botTex, '#ffffff', THREE.NormalBlending), 321));
  const P_cup = pool(4, () => add(spr(tex(A.mug), '#ffffff', THREE.NormalBlending), 321));
  // lights
  const hemi = new THREE.HemisphereLight(0xa9b4ff, 0x241634, .35); scene.add(hemi);
  const moonLight = new THREE.DirectionalLight(0xbcd6ff, .55); moonLight.position.set(8, 9, 4); moonLight.target.position.set(0, 0, -20); scene.add(moonLight, moonLight.target);
  const dawnLight = new THREE.DirectionalLight(0xffa874, 0); dawnLight.position.set(-9, 1.5, 3); dawnLight.target.position.set(0, 0, -20); scene.add(dawnLight, dawnLight.target);
  const soulLights = [0, 1, 2, 3, 4, 5].map(() => { const l = new THREE.PointLight(0xffffff, 0, 7, 1.6); scene.add(l); return l; });
  const graveLights = GRAVES.map(g => { const l = new THREE.PointLight(new THREE.Color(g.glow), 0, 9, 1.4); scene.add(l); return l; });
  const mortLight = new THREE.PointLight(0x9b7bff, 2, 5, 1.6); scene.add(mortLight);
  // ---------- particles (bursts / motes) ----------
  const NP = 2400, pg = new THREE.BufferGeometry(), pPos = new Float32Array(NP * 3), pCol = new Float32Array(NP * 4), pSize = new Float32Array(NP);
  pg.setAttribute('position', new THREE.BufferAttribute(pPos, 3)); pg.setAttribute('color', new THREE.BufferAttribute(pCol, 4)); pg.setAttribute('size', new THREE.BufferAttribute(pSize, 1));
  const pMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { scale: { value: H / (2 * TAN) } },
    vertexShader: 'attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale; void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize = size*scale/-mv.z; gl_Position=projectionMatrix*mv; }',
    fragmentShader: 'varying vec4 vC; void main(){ vec2 p=gl_PointCoord-.5; float d=length(p); float a=smoothstep(.5,.0,d); a*=a; gl_FragColor=vec4(vC.rgb*a*vC.a, a*vC.a); }' });
  const points = add(new THREE.Points(pg, pMat), 330); points.frustumCulled = false;
  const dg = new THREE.BufferGeometry(), dPos = new Float32Array(600 * 3), dCol = new Float32Array(600 * 4), dSize = new Float32Array(600);
  dg.setAttribute('position', new THREE.BufferAttribute(dPos, 3)); dg.setAttribute('color', new THREE.BufferAttribute(dCol, 4)); dg.setAttribute('size', new THREE.BufferAttribute(dSize, 1));
  const dMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { scale: { value: H / (2 * TAN) } }, vertexShader: pMat.vertexShader,
    fragmentShader: 'varying vec4 vC; void main(){ vec2 p=abs(gl_PointCoord-.5); if(max(p.x,p.y)>.42) discard; gl_FragColor=vec4(vC.rgb, vC.a); }' });
  const debris = add(new THREE.Points(dg, dMat), 329); debris.frustumCulled = false;
  // bats + fog + foreground grass
  const batFrames = [0, 1, 2, 3].map(k => { const c = canvas(128, 64), x = c.getContext('2d'); R.drawBat(x, 64, 34, 40, k / 4 * Math.PI * 2, '#090820'); return tex(c); });
  const bats = [0, 1, 2, 3, 4, 5, 6].map(() => add(spr(batFrames[0], '#ffffff', THREE.NormalBlending), 5));
  const fogTex = (() => { const c = canvas(512, 256), x = c.getContext('2d'); for (let i = 0; i < 40; i++) { const g = x.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, 'rgba(160,165,255,0.16)'); g.addColorStop(1, 'rgba(160,165,255,0)'); x.save(); x.translate(40 + hash(i, 5) * 430, 90 + hash(i, 6) * 80); x.scale(60 + hash(i, 7) * 90, 30 + hash(i, 8) * 40); x.fillStyle = g; x.beginPath(); x.arc(0, 0, 1, 0, 7); x.fill(); x.restore(); }
    // feather every border to zero so the sprite quad never shows an edge
    x.globalCompositeOperation = 'destination-in'; const gx = x.createLinearGradient(0, 0, 512, 0); gx.addColorStop(0, 'rgba(0,0,0,0)'); gx.addColorStop(.22, '#000'); gx.addColorStop(.78, '#000'); gx.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = gx; x.fillRect(0, 0, 512, 256);
    const gy = x.createLinearGradient(0, 0, 0, 256); gy.addColorStop(0, 'rgba(0,0,0,0)'); gy.addColorStop(.3, '#000'); gy.addColorStop(.7, '#000'); gy.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = gy; x.fillRect(0, 0, 512, 256); return tex(c); })();
  const fogs = [0, 1, 2, 3, 4, 5].map(i => add(spr(fogTex, '#ffffff', THREE.NormalBlending, .8), i < 3 ? 4 : 335));
  const grassTex = (() => { const c = canvas(2048, 256), x = c.getContext('2d'); const R0 = E.rng(9); x.fillStyle = '#070a24';
    for (let i = 0; i < 420; i++) { const bx = R0() * 2048, h = 60 + R0() * 190, w = 6 + R0() * 16, lean = (R0() - .5) * 60; x.beginPath(); x.moveTo(bx - w, 256); x.quadraticCurveTo(bx + lean * .4, 256 - h * .6, bx + lean, 256 - h); x.quadraticCurveTo(bx + lean * .4 + w * .3, 256 - h * .5, bx + w, 256); x.fill(); }
    x.fillRect(0, 236, 2048, 20); return tex(c); })();
  const fg = add(new THREE.Mesh(new THREE.PlaneGeometry(2600 * u(FG_D), 190 * u(FG_D)), new THREE.MeshBasicMaterial({ map: grassTex, transparent: true, depthWrite: false, color: new THREE.Color(.9, .9, 1.1) })), 500);
  // ---------- post processing ----------
  const rt = new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, samples: 0 });
  const composer = new EffectComposer(renderer, rt); composer.setSize(W, H);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(W / 2, H / 2), .62, .5, .96); composer.addPass(bloom);
  const grade = new ShaderPass({ uniforms: { tDiffuse: { value: null }, moon: { value: new THREE.Vector2(.7, .83) }, time: { value: 0 }, dawn: { value: 0 }, flash: { value: 0 }, slow: { value: 0 }, ca: { value: .0012 }, rays: { value: .45 }, vig: { value: .38 }, aspect: { value: W / H } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 moon; uniform float time,dawn,flash,slow,ca,rays,vig,aspect; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      void main(){
        vec2 c = vUv-.5; vec2 off = c*ca*(1.+length(c)*2.);
        vec3 col = vec3(texture2D(tDiffuse, vUv+off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv-off).b);
        // moon god rays
        vec2 dlt = (vUv-moon)*(1./22.)*.92; vec2 uv=vUv; float decay=1., ill=0.;
        for(int i=0;i<22;i++){ uv-=dlt; vec3 s=texture2D(tDiffuse, uv).rgb; ill += max(0., dot(s, vec3(.3,.59,.11))-.62)*decay; decay*=.93; }
        col += mix(vec3(.55,.68,1.), vec3(1.,.7,.45), dawn) * ill * rays/22.;
        // grade: cool night, warm dawn, halo-hour slow motion tint
        float l = dot(col, vec3(.3,.59,.11));
        col = mix(col, col*vec3(.97,.97,1.04)+vec3(.004,.0,.012), .6*(1.-dawn));
        col = mix(col, col*vec3(1.1,.96,.86), dawn*.75); col = mix(col, (col-.5)*1.08+.5, dawn*.6);
        col = mix(col, mix(vec3(l), col, .7)*vec3(.95,1.,1.08), slow*.22);
        col += flash*vec3(.4,.4,.52);
        float v = smoothstep(.95, .25, length(c*vec2(aspect*.62, 1.))); col *= mix(1.-vig, 1., v);
        col += (h(vUv*vec2(1920.,1080.)+time)-.5)*.035;
        gl_FragColor = vec4(col, 1.);
      }` });
  composer.addPass(grade); composer.addPass(new OutputPass());

  // atmospheric layers ignore depth (the plate is curved in depth); draw order keeps them behind/in front of the stones
  for (const o of [moon, ...clouds, ...bats, ...fogs, bolt, points, debris, shock]) { o.material.depthTest = false; }
  const state = { lightning: [] };
  window.__dbg = { girls, stones, mortAura, magnetRing, influence, P_glow, fogs, clouds, fg, bats, points, debris, hemi, moonLight, dawnLight, scene, grade, bloom };
  // deterministic lightning schedule
  for (let i = 0; i < 40; i++) state.lightning.push(6 + i * 9.3 + hash(i, 77) * 4);

  function setCamera(cam) {
    camera.aspect = W / H; camera.fov = cam.fov || FOV; camera.updateProjectionMatrix();
    camera.position.set(cam.x || 0, cam.y || 0, cam.z || 0);
    camera.lookAt((cam.lx ?? (cam.x || 0) * .55), (cam.ly ?? (cam.y || 0) * .55), -22); camera.rotateZ(cam.roll || 0);
  }
  function project(px, py, d, out = { x: 0, y: 0 }) { const v = wp(px, py, d); v.project(camera); out.x = (v.x * .5 + .5) * W; out.y = (-v.y * .5 + .5) * H; return out; }
  function screenToPlay(sx, sy) { // pointer -> gameplay plane (px coords)
    const ndc = new THREE.Vector2(sx / W * 2 - 1, -(sy / H) * 2 + 1), ray = new THREE.Raycaster(); ray.setFromCamera(ndc, camera);
    const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), PLAY_D), hit = new THREE.Vector3(); if (!ray.ray.intersectPlane(pl, hit)) return null;
    return { x: hit.x / u(PLAY_D) + 960, y: 540 - hit.y / u(PLAY_D) };
  }
  const tmp = new THREE.Vector3();
  function placeSprite(s, px, py, d, sizePx) { wp(px, py, d, s.position); s.scale.set(sizePx * u(d), sizePx * u(d), 1); }

  function update(snap, events, t, opts = {}) {
    const tg = snap.t, dawn = opts.dawn != null ? opts.dawn : clamp(((tg - snap.t0) / snap.shift - .45) / .55);
    // atmosphere
    hemi.intensity = lerp(.35, .36, dawn); hemi.color.setHSL(lerp(.64, .05, dawn), .55, lerp(.78, .78, dawn)); moonLight.intensity = lerp(.55, .25, dawn); dawnLight.intensity = dawn * dawn * .75;
    moon.material.opacity = (.55 + .08 * Math.sin(tg * 1.3)) * (1 - dawn * .8);
    clouds.forEach((c, i) => { const x = ((tg * (14 + i * 6) + i * 520) % 2400) - 240; placeSprite(c, x, 150 + i * 38 + Math.sin(tg * .2 + i) * 6, 66 - i, 520 + i * 60); c.material.opacity = .55 * (1 - dawn * .5); });
    bats.forEach((b, i) => { const sp = 110 + hash(i, 1) * 150, x = ((tg * sp + hash(i, 2) * 2600) % 2600) - 340, y = 80 + hash(i, 3) * 300 + Math.sin(tg * 1.7 + i) * 20; placeSprite(b, x, y, 40 + hash(i, 4) * 20, 70 + hash(i, 5) * 40); b.material.map = batFrames[Math.floor((tg * (8 + hash(i, 6) * 4) + i) % 4)]; });
    fogs.forEach((f, i) => { const near = i >= 3, x = ((tg * (18 + i * 7) + i * 700) % 2800) - 440, d = near ? 15 + i : 26 + i * 4; placeSprite(f, x, near ? 990 + (i - 3) * 30 : 760 + i * 40, d, near ? 1300 : 1700); f.scale.y *= .5; f.material.opacity = (near ? .2 : .38) * (1 - dawn * .7); });
    // lightning
    let flash = 0; bolt.visible = false;
    for (const lt of state.lightning) { const a = tg - lt; if (a >= 0 && a < .45) { flash = Math.max(flash, (a < .06 ? 1 : a < .12 ? .25 : a < .18 ? .8 : Math.max(0, .5 - a)) * .6); if (a < .3) { bolt.visible = true; if (state.boltId !== lt) { drawBolt(boltCanvas, hash(Math.floor(lt), 9) * 1000); boltMat.map.needsUpdate = true; state.boltId = lt; }
      const bx = 150 + hash(Math.floor(lt), 3) * 1100; wp(bx, 200, 68, bolt.position); bolt.scale.set(260 * u(68), 520 * u(68), 1); boltMat.opacity = a < .06 || (a > .12 && a < .2) ? 1 : .3; } } }
    hemi.intensity += flash * 1.2;
    // girls & graves
    const evs = events;
    for (const gi of DEPTH) {
      const g = GRAVES[gi], gr = snap.graves[gi], G = girls[gi], st = girlState(gr, tg);
      const light = st ? st.light : 0;
      graveLights[gi].intensity = (st ? (st.alpha * (.5 + light * 2.6)) : 0); wp(g.impact.x, g.impact.y + 120, STONE_D[g.stone] - 2.2, graveLights[gi].position);
      if (!st) { G.mesh.visible = false; G.beam.material.opacity = 0; continue; }
      const head = g.rise.base - g.rise.h, hidden = g.rise.ground - head + 30, r = easeOutBack(st.rise), yOff = (1 - r) * hidden - st.lift;
      const breath = Math.sin(tg * 2.4 + gi * 1.7);
      G.mesh.visible = true; wp(g.rise.x, g.rise.base + yOff, G.d, G.mesh.position); G.mesh.position.y = (540 - (g.rise.base + yOff)) * u(G.d);
      G.mesh.scale.set(1 + (1 - st.rise) * -.07 + st.pop * .05, 1 + Math.sin(st.rise * Math.PI) * .07 + breath * .006 + st.pop * .04, 1); G.mesh.rotation.z = Math.sin(tg * 1.3 + gi) * .008;
      G.mat.opacity = st.alpha; G.mat.emissiveIntensity = .8 + light * .22;
      placeSprite(G.beam, g.rise.x, g.rise.ground - 260, G.d + .15, 900); G.beam.scale.y *= 1.5; G.beam.material.opacity = clamp(st.alpha * (.12 + light * .5));
    }
    // Mort
    const M = snap.mort, slashA = (tg - M.slashT) / C.SLASH_T, hitA = (tg - M.hitT);
    const lean = clamp(M.vx / 3800, -.3, .3), spin = slashA >= 0 && slashA < 1 ? easeOut(slashA) * Math.PI * 2 : 0;
    wp(M.x, M.y + Math.sin(tg * 2.3) * 8, PLAY_D, mort.position); mort.rotation.z = -lean - spin;
    const sq = Math.abs(M.vy) / 30000; mort.scale.set(1 - sq + (slashA >= 0 && slashA < 1 ? .12 * Math.sin(slashA * Math.PI) : 0), 1 + sq, 1);
    mortMat.emissiveIntensity = .82 + (hitA >= 0 && hitA < C.INVULN ? (Math.sin(hitA * 40) > 0 ? .6 : 0) : 0);
    mortMat.opacity = hitA >= 0 && hitA < C.INVULN ? (Math.sin(hitA * 40) > 0 ? .45 : 1) : 1;
    placeSprite(mortAura, M.x, M.y, PLAY_D + .2, 520); wp(M.x, M.y, PLAY_D - 1.5, mortLight.position); mortLight.intensity = 1.1;
    slash.visible = slashA >= 0 && slashA < 1.2; if (slash.visible) { wp(M.x, M.y, PLAY_D - .05, slash.position); const s = C.SLASH_R * 2.1 * u(PLAY_D) * (.7 + .4 * easeOut(slashA)); slash.scale.set(s, s, 1); slash.rotation.z = -easeOut(slashA) * Math.PI * 2.6; slash.material.opacity = 1 - clamp((slashA - .6) / .6); }
    // powers
    const on = id => snap.powers[id] > tg, left = id => snap.powers[id] - tg;
    thorns.forEach((th, i) => { th.visible = on('odette'); if (!th.visible) return; const a = tg * 3.2 + i / 6 * Math.PI * 2, f = clamp(left('odette') / .4); placeSprite(th, M.x + Math.cos(a) * C.THORN_R * f, M.y + Math.sin(a) * C.THORN_R * f, PLAY_D - .1, 64); th.material.rotation = a; });
    halo.visible = on('falon'); if (halo.visible) placeSprite(halo, M.x, M.y - 150 + Math.sin(tg * 3) * 6, PLAY_D - .1, 150);
    magnetRing.visible = on('vera'); if (magnetRing.visible) { placeSprite(magnetRing, M.x, M.y, PLAY_D + .1, 840 * (.92 + .08 * Math.sin(tg * 6))); magnetRing.material.opacity = .16; }
    influence.visible = on('rowena'); if (influence.visible) { placeSprite(influence, M.x, M.y, PLAY_D + .1, C.INFL_R * 2.2 * (.95 + .05 * Math.sin(tg * 7))); influence.material.opacity = .3; }
    // souls / bots / cups
    P_core.reset(); P_glow.reset(); P_bot.reset(); P_cup.reset();
    const lightCands = [];
    for (const s of snap.souls) {
      let a = 1, d = PLAY_D; if (s.state === 'lost' || s.state === 'stolen') a = 1 - clamp((tg - s.lostT) / 1.0); if (s.state === 'done') continue;
      if (s.state === 'dive') { const k = clamp((tg - s.diveT) / C.DIVE); d = lerp(PLAY_D, STONE_D[GRAVES[s.target].stone] - .4, k * k); }
      if (a <= .01) continue;
      const tc = s.type === E.RARE ? '#ffffff' : GRAVES[s.type].glow, pulse = 1 + Math.sin(tg * 9 + s.id) * .06, sy = s.state === 'stolen' ? s.y - (tg - s.lostT) * 200 : s.y;
      const tr = s.trail || [];
      for (let k = 0; k < tr.length; k++) { const p = tr[k], age = tg - p.t; if (age > .4) continue; const gs = P_glow.get(); gs.material.map = glowBy[s.type]; placeSprite(gs, p.x, p.y, d + .05, (60 - age * 90) * pulse); gs.material.opacity = a * (.5 - age); gs.material.color.setRGB(1, 1, 1); }
      const g1 = P_glow.get(); g1.material.map = glowBy[s.type]; placeSprite(g1, s.x, sy, d + .02, 230 * pulse); g1.material.opacity = .9 * a; g1.material.color.setRGB(1.3, 1.3, 1.3);
      const g2 = P_glow.get(); g2.material.map = glowW; placeSprite(g2, s.x, sy, d + .01, 110); g2.material.opacity = .6 * a; g2.material.color.setRGB(1.4, 1.4, 1.4);
      const core = P_core.get(); core.material.map = emb[s.type]; placeSprite(core, s.x, sy, d, 78 * pulse); core.material.opacity = a; core.material.rotation = s.type === E.RARE ? tg * 3 : 0;
      lightCands.push({ x: s.x, y: sy, d, c: tc, w: (s.state === 'carried' ? 2 : 1) * a });
    }
    for (const b of snap.bots) {
      const dead = b.state !== 'hunt', a = dead ? 1 - clamp((tg - b.deadT) / .35) : 1; if (a <= .01) continue;
      const jit = hash(Math.floor(tg * 24), b.id) - .5;
      const tr = b.trail || []; for (let k = 0; k < tr.length; k += 2) { const p = tr[k], age = tg - p.t; if (age > .35) continue; const gs = P_glow.get(); gs.material.map = glowRed; placeSprite(gs, p.x, p.y, PLAY_D + .05, 70 - age * 120); gs.material.opacity = a * (.35 - age); gs.material.color.setRGB(1, 1, 1); }
      for (const [gl, dx] of [[glowRed, -5], [glowCyan, 5]]) { const gs = P_glow.get(); gs.material.map = gl; placeSprite(gs, b.x + dx + jit * 10, b.y, PLAY_D + .03, 150); gs.material.opacity = .55 * a; gs.material.color.setRGB(1.2, 1.2, 1.2); }
      const core = P_bot.get(); placeSprite(core, b.x + jit * 6, b.y, PLAY_D, 84 * (dead ? 1 + (1 - a) * .6 : 1)); core.material.opacity = a; core.material.rotation = jit * .15;
      lightCands.push({ x: b.x, y: b.y, d: PLAY_D, c: '#ff3a5a', w: .6 * a });
    }
    for (const c of snap.cups) { const a = c.state === 'got' ? 1 - clamp((tg - c.gotT) / .5) : 1; const cs = P_cup.get(); placeSprite(cs, c.x, c.y - (c.state === 'got' ? (tg - c.gotT) * 120 : 0), PLAY_D, 74); cs.material.opacity = a; cs.material.rotation = Math.sin(tg * 3 + c.id) * .2; const gw = P_glow.get(); gw.material.map = glowWarm; placeSprite(gw, c.x, c.y, PLAY_D + .02, 160); gw.material.opacity = .6 * a; gw.material.color.setRGB(1, 1, 1); }
    P_core.finish(); P_glow.finish(); P_bot.finish(); P_cup.finish();
    lightCands.sort((a, b) => b.w - a.w);
    soulLights.forEach((l, i) => { const c = lightCands[i]; if (!c) { l.intensity = 0; return; } wp(c.x, c.y, c.d - 1.2, l.position); l.color.set(c.c); l.intensity = 2.2 * c.w; });
    // event particles + shock
    fillParticles(snap, evs, tg); shock.visible = false;
    for (const e of evs) { const a = tg - e.t; if (e.type === 'fullhouse' && a >= 0 && a < .9) { shock.visible = true; placeSprite(shock, 960, 560, PLAY_D + 1, 200 + easeOut(a / .9) * 3000); shock.material.opacity = (1 - a / .9) * .35; flash = Math.max(flash, (1 - a / .3) * .22); } }
    // foreground parallax grass
    wp(960, 1080 - 55, FG_D, fg.position); fg.position.x += Math.sin(tg * .6) * .02;
    // camera
    setCamera(opts.camera || defaultCam(snap, tg));
    const ms = new THREE.Vector3(); wp(1342, 182, 69, ms).project(camera); grade.uniforms.moon.value.set(ms.x * .5 + .5, ms.y * .5 + .5);
    grade.uniforms.time.value = (t * 60) % 1000; grade.uniforms.dawn.value = dawn; grade.uniforms.flash.value = flash; grade.uniforms.slow.value = on('falon') ? clamp(left('falon') / .3) : 0;
    let hitCA = 0; for (const e of evs) { const a = tg - e.t; if ((e.type === 'hit' || e.type === 'steal') && a >= 0 && a < .4) hitCA = Math.max(hitCA, 1 - a / .4); if ((e.type === 'fullhouse' || e.type === 'special') && a >= 0 && a < .5) hitCA = Math.max(hitCA, .7 * (1 - a / .5)); }
    grade.uniforms.ca.value = .001 + hitCA * .0035;
    return { dawn, flash };
  }
  function defaultCam(snap, tg) { const M = snap.mort; return { x: (M.x - 960) * u(PLAY_D) * .1, y: (540 - M.y) * u(PLAY_D) * .06 + .05, z: 0 }; }

  function fillParticles(snap, evs, tg) {
    let n = 0, nd = 0; const v = new THREE.Vector3();
    const put = (px, py, d, r, g, b, a, size) => { if (n >= NP) return; wp(px, py, d, v); pPos.set([v.x, v.y, v.z], n * 3); pCol.set([r, g, b, a], n * 4); pSize[n] = size * u(d); n++; };
    const putD = (px, py, d, r, g, b, a, size) => { if (nd >= 600) return; wp(px, py, d, v); dPos.set([v.x, v.y, v.z], nd * 3); dCol.set([r, g, b, a], nd * 4); dSize[nd] = size * u(d); nd++; };
    const col = new THREE.Color();
    for (const e of evs) {
      const a = tg - e.t; if (a < 0 || a > 1.6) continue;
      if (e.type === 'rise' || e.type === 'pop' || e.type === 'special') {
        const g = GRAVES[e.g], d = STONE_D[g.stone] - .5, cnt = e.type === 'pop' ? 26 : 60; col.set(g.glow);
        for (let i = 0; i < cnt; i++) { const ang = -Math.PI * (.05 + .9 * hash(e.id, i)), sp = 260 + hash(e.id, i + 50) * 620, life = .7 + hash(e.id, i + 90) * .7; if (a > life) continue; const k = 1 - a / life;
          const px = g.impact.x + Math.cos(ang) * sp * a, py = g.impact.y + 10 + Math.sin(ang) * sp * a + 640 * a * a; const w = i % 4 === 0; put(px, py, d, w ? 1.6 : col.r * 1.6, w ? 1.6 : col.g * 1.6, w ? 1.6 : col.b * 1.6, k, 16 + hash(e.id, i + 130) * 22); }
        if (e.type !== 'pop') for (let i = 0; i < 26; i++) { const ang = -Math.PI * (.15 + .7 * hash(e.id, i + 300)), sp = 240 + hash(e.id, i + 320) * 330; if (a > .9) continue; putD(g.impact.x + Math.cos(ang) * sp * a, g.impact.y + Math.sin(ang) * sp * a + 1300 * a * a, d, .16, .12, .28, 1 - a / .9, 9 + hash(e.id, i + 340) * 9); }
      }
      if (e.type === 'botkill' || e.type === 'convert') { const conv = e.type === 'convert';
        for (let i = 0; i < 34; i++) { const ang = hash(e.id, i) * Math.PI * 2, sp = 200 + hash(e.id, i + 9) * 520, life = .5 + hash(e.id, i + 19) * .4; if (a > life) continue; const k = 1 - a / life, cy = i % 2;
          if (conv) put(e.x + Math.cos(ang) * sp * a, e.y + Math.sin(ang) * sp * a, PLAY_D, .9, .6, 1.8, k, 18); else putD(e.x + Math.cos(ang) * sp * a, e.y + Math.sin(ang) * sp * a + 300 * a * a, PLAY_D, cy ? .2 : 1, cy ? 1 : .2, cy ? 1 : .55, k, 10 + hash(e.id, i + 29) * 10); }
        if (a < .25) put(e.x, e.y, PLAY_D, 2, 2, 2.4, 1 - a / .25, 260); }
      if (e.type === 'hit' || e.type === 'steal') for (let i = 0; i < 20; i++) { const ang = hash(e.id, i) * Math.PI * 2, sp = 300 + hash(e.id, i + 9) * 300; if (a > .6) continue; put(e.x + Math.cos(ang) * sp * a, e.y + Math.sin(ang) * sp * a, PLAY_D, 1.8, .3, .5, 1 - a / .6, 20); }
      if (e.type === 'coffee') for (let i = 0; i < 18; i++) { const ang = hash(e.id, i) * Math.PI * 2, sp = 160 + hash(e.id, i + 9) * 200; if (a > .7) continue; put(e.x + Math.cos(ang) * sp * a, e.y + Math.sin(ang) * sp * a, PLAY_D, 1.7, 1.2, .6, 1 - a / .7, 18); }
      if (e.type === 'catch') { const s = snap.mort; if (a < .3) for (let i = 0; i < 10; i++) { const ang = i / 10 * Math.PI * 2; put(s.x + Math.cos(ang) * 120 * a / .3, s.y + Math.sin(ang) * 120 * a / .3, PLAY_D, 1.5, 1.5, 1.8, 1 - a / .3, 16); } }
    }
    // ambient soul motes
    for (let i = 0; i < 70; i++) { const life = 8 + hash(i, 8) * 6, ph = ((tg + hash(i, 9) * life) % life) / life; const px = 80 + hash(i, 10) * 1760 + Math.sin(tg * .7 + i) * 30, py = 1040 - ph * 820; col.set(GRAVES[i % 5].glow); put(px, py, 18 + hash(i, 12) * 14, col.r * 1.4, col.g * 1.4, col.b * 1.4, Math.sin(ph * Math.PI) * .7, 10 + hash(i, 11) * 14); }
    // Drop Dead Gorgeous glitter around Mort
    if (snap.powers.morticia > tg) for (let i = 0; i < 24; i++) { const a = tg * 2 + i * 1.7, r = 90 + hash(i, 3) * 80, tw = .5 + .5 * Math.sin(tg * 9 + i); put(snap.mort.x + Math.cos(a) * r, snap.mort.y + Math.sin(a) * r * .7, PLAY_D - .2, 1.8, 1.4, .8, tw, 12); }
    for (let k = n; k < NP; k++) pCol[k * 4 + 3] = 0; for (let k = nd; k < 600; k++) dCol[k * 4 + 3] = 0;
    pg.attributes.position.needsUpdate = pg.attributes.color.needsUpdate = pg.attributes.size.needsUpdate = true; pg.setDrawRange(0, Math.max(n, 1));
    dg.attributes.position.needsUpdate = dg.attributes.color.needsUpdate = dg.attributes.size.needsUpdate = true; dg.setDrawRange(0, Math.max(nd, 1));
  }
  function render() { composer.render(); }
  function resize(w, h) { W = w; H = h; renderer.setSize(w, h, false); composer.setSize(w, h); bloom.resolution.set(w / 2, h / 2); grade.uniforms.aspect.value = w / h; pMat.uniforms.scale.value = dMat.uniforms.scale.value = h / (2 * TAN); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  return { scene, camera, update, render, resize, project, screenToPlay, setCamera, u, wp, PLAY_D, STONE_D, get W() { return W; }, get H() { return H; } };
}

function girlState(gr, t) {
  if (gr.state === 'empty') return null;
  let rise = 1, alpha = 1, lift = 0, pop = 0, light = 0;
  if (gr.state === 'rising' || gr.state === 'risen') { rise = clamp((t - gr.riseT) / C.RISE); light = 1 - clamp((t - gr.riseT - .2) / .9) * .7; }
  if (gr.state === 'leaving') { const p = clamp((t - gr.leaveT) / C.LEAVE); alpha = 1 - easeIn(p); lift = (gr.fh ? 160 : 60) * easeIn(p); light = .4 + p * .8; }
  for (const tp of gr.pops) { const d = t - tp; if (d >= 0 && d < .45) pop = Math.max(pop, Math.sin(d / .45 * Math.PI) * (1 - d / .45)); if (d >= 0 && d < .6) light = Math.max(light, .9 - d); }
  return { rise, alpha, lift, pop, light };
}
function emblemCanvas(type, color, size) { const c = canvas(size, size), x = c.getContext('2d'); R.drawEmblem(x, type, size / 2, size / 2, size * .8, color, '#160c2e', size * .05); return c; }
function soulCanvas(type) {
  const s = 128, c = canvas(s, s), x = c.getContext('2d'), r = 56;
  if (type === E.RARE) { x.save(); x.beginPath(); x.arc(64, 64, r, 0, 7); x.clip(); x.fillStyle = '#f4f1ea'; x.fillRect(0, 0, s, s); x.translate(64, 64); x.fillStyle = '#0b0b0f'; x.beginPath(); for (let a = 0; a < 28; a += .08) x.lineTo(Math.cos(a) * (2 + a * 2.1), Math.sin(a) * (2 + a * 2.1)); for (let a = 28; a > 0; a -= .08) x.lineTo(Math.cos(a) * (8 + a * 2.1), Math.sin(a) * (8 + a * 2.1)); x.fill(); x.restore(); x.lineWidth = 5; x.strokeStyle = '#e8213c'; x.beginPath(); x.arc(64, 64, r, 0, 7); x.stroke(); return c; }
  const g = GRAVES[type], gg = x.createRadialGradient(64 - r * .3, 64 - r * .35, r * .1, 64, 64, r); gg.addColorStop(0, '#ffffff'); gg.addColorStop(.38, R.mix(g.color, '#ffffff', .35)); gg.addColorStop(1, R.mix(g.color, '#3a1f6b', .35));
  x.beginPath(); x.arc(64, 64, r, 0, 7); x.fillStyle = gg; x.fill(); x.lineWidth = 4; x.strokeStyle = 'rgba(255,255,255,0.95)'; x.stroke();
  R.drawEmblem(x, g.emblem, 64, 66, 62, '#ffffff', '#1d1238', 5); return c;
}
function botCanvas() {
  const s = 128, c = canvas(s, s), x = c.getContext('2d'); const r = 54;
  const gg = x.createRadialGradient(54, 50, 6, 64, 64, r); gg.addColorStop(0, '#9aa3b8'); gg.addColorStop(.6, '#4a5068'); gg.addColorStop(1, '#1d2030');
  x.beginPath(); x.arc(64, 64, r, 0, 7); x.fillStyle = gg; x.fill(); x.lineWidth = 4; x.strokeStyle = '#ff3a5a'; x.stroke();
  x.fillStyle = 'rgba(0,0,0,0.25)'; for (let y = 14; y < 118; y += 6) x.fillRect(10, y, 108, 2);
  // pixel heart (a "like")
  const px = [[0, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0]];
  x.fillStyle = '#ff3a5a'; px.forEach((row, j) => row.forEach((v, i) => { if (v) x.fillRect(36 + i * 8, 34 + j * 8, 7, 7); }));
  x.font = '900 20px Montserrat'; x.textAlign = 'center'; x.fillStyle = '#e8ecff'; x.fillText('BOT', 64, 104); return c;
}
function drawBolt(c, seed) {
  const x = c.getContext('2d'); x.clearRect(0, 0, c.width, c.height); const R0 = E.rng(Math.floor(seed) + 1);
  const path = [[128 + (R0() - .5) * 40, 0]]; let px = path[0][0]; for (let y = 24; y <= 512; y += 24) { px += (R0() - .5) * 46; path.push([px, y]); }
  for (const [w, a] of [[16, .12], [7, .35], [2.5, 1]]) { x.strokeStyle = `rgba(220,225,255,${a})`; x.lineWidth = w; x.lineJoin = 'round'; x.beginPath(); path.forEach(([X, Y], i) => i ? x.lineTo(X, Y) : x.moveTo(X, Y)); x.stroke(); }
}
