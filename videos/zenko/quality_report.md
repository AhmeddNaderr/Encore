# ZENKO: PANEL CUT — quality report

These scores are self-review judgements tied to frames I opened. They are not founder approval. I could not watch the video at full speed; motion was judged from per-frame stills, 2 fps contact sheets of the decoded MP4 and automated checks.

| Requirement | Score | Evidence / limits |
|---|---:|---|
| Art fidelity | 9 | Every character pixel comes from Zenko's own full-resolution posts: banner Shonen, Shojo, Nero, the katana and scythe portraits, the official greyscale manga page, the TCG card frame and the card backs. Faces are never redrawn; portraits only get background removal (flood fill stopped by their ink outline) or cropping into panels. The page reveal (main 26.6 s, poster) reads as a Zenko manga page. The anomalies are original sprites in the sampled Resonance palette (`#F4575E` and ink) with Nero's amber slit eye. |
| Originality | 9 | The mechanic of cutting a manga page into panels to trap anomalies that become cards needs all three Zenko pillars: manga, TCG and the Kurokawa rift. The wall-building core has genre ancestors (area-capture games), but the panel, gutter, seal and card loop and the "your page" result are specific to Zenko. |
| Hook | 8 | Main 0–3 s opens mid-run on a camera punch-in: a swipe, a Resonance line racing an anomaly, a slow-motion near miss, then the seal impact, 封 stamp and card flip. No logo first. Not tested on a cold audience. |
| Clarity | 8 | Captions carry the rules with sound off: "CUT A PANEL", "TRAP ONE", "DON'T GET TOUCHED", "EVERY SEAL IS A CARD". The 15 s cut repeats them under the page. The break at 9.65 s shows the fail state. |
| Motion | 8 (provisional) | Deterministic 60 fps simulation with slow-motion interpolated between frames; 2640/2640 and 900/900 frames decode. Freeze detection flagged legible holds, so slow camera pushes were added to every motion-graphics scene. Squash, stretch and acting are limited because the official art is used as cut-outs rather than redrawn. |
| Polish | 8 | Katakana SFX (ザシュッ, バキッ, ゴゴゴ, シュッ, ドンッ), inverted impact frames, screen shake, hit-pause, speed lines, ink splats, holo sheen on cards, official card frame and back, no audio by request. |
| Text | 8 | All copy was typed in the edit, none is generated. Names are spelled as in Zenko's lore article (Kurokawa, Resonance, Shonen, Shojo, Nero). Kana and the kanji 封 render in Dela Gothic One. |
| Lore respect | 9 | Kurokawa rift, Resonance, vanguard / catalyst / anomaly roles, "Nerooooo." and the bubble-gum kunai come from their posts. The Shojo label for the kunai character is inferred, as the only female character shown. The katana and scythe characters are not given archetype labels. No mint, date or allocation claims are made. |
| Pitch elements | 9 | Sample WL leaderboard (27.9 s), "Bots can like a post. They can't draw the line.", result card into an X post mock-up (32.1 s), Zenko title (35.9 s), current-brand Encore end card with slogan and CTA (38.3 s). |
| Founder test | 8 (provisional) | Their real art fills the final page and the cards use their own TCG frame, which are strong reasons to share it. The founder has not seen it. |

**Strict gate (every score 8+, art and motion 9+):** art passes at 9. Motion stays at a provisional 8 because full-speed perceptual review wasn't possible here. I'm reporting that honestly rather than claiming a pass.

## Technical
- Main: 1920×1080, 60 fps, 44.000 s, H.264 High yuv420p BT.709, faststart, no audio.
- Vertical: 1080×1920, 60 fps, 15.000 s, same codecs.
- Audio: none. Both delivered files are silent with no audio stream; captions carry every rule.
