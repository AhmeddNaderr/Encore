# VERY SMART: quality report

**Status: both final MP4s are exported and technically validated. The strict gate (every score 8+, art and motion 9+) is NOT claimed as passed.** Scores below are self-assessed after loop 2, with evidence. The independent reviewer scored loop 1 (v1). Loop 2 addressed its top problems, but no second cold review was run.

| # | Criterion | Score | Evidence |
|---|---|---|---|
| 1 | Art fidelity | 8 | Every character and logo is official pixels: the PFP hero, 17 polaroid portraits, the banner wordmark and tagline, the Drool News anchor. See [side_by_side.png](side_by_side.png) (MP4 4.8 s, 15.0 s, 38.3 s against the official sources). Pupils are preserved (4.8 s). Eyes Pop Out follows the official trait (15.0 s), but it's a vector effect with a sliver of eye-white at the sockets. The portraits are upscaled from about 190 px sources, so they're slightly soft. Not a 9. |
| 2 | Originality | 8 | Cross-eyed aiming, where you steer one eye and the other wanders, plus "wrong maths is smart", the drool rope as health, and Eyes Pop Out as the power mode. Swap in another collection's art and the rules stop making sense. |
| 3 | Hook | 7 | Opens mid-game: Eyes Pop Out at 0.42 s with four pops in 0.9 s, the brand tag from frame 0, and no logo intro. It's still busy, and no cold audience test was run. |
| 4 | Clarity (15 s, sound off) | 8 | The 15 s cut runs: rule caption with eye labels (2.0–4.6) → readable solved sum and TOO NORMAL (4.6–6.6) → SPLAT / RUN OVER (6.6–8.1) → Eyes Pop Out (8.1) → board → result → end card. |
| 5 | Motion | 8 | Native 60 fps; 2520/900 frames decoded; 0 identical adjacent frames (framemd5). Uses squash, bob, tilt, drool spring, shake and hit-pause. The aim lacks ease-in and the HUD jumps at montage cuts, so motion is not a 9. |
| 6 | Polish | 8 | Original music and 21 synthesized SFX on real events, the brand fonts (Permanent Marker, Patrick Hand), chalkboard world, taped polaroids, Drool News homage. No placeholder boxes. |
| 7 | Text | 8 | Spelling checked; captions now sit in free bands. Small HUD and footer microtext is secondary. |
| 8 | Lore respect | 9 | Uses 2+3=6, 1+1=11, "wen moon?", cross-eyed, drool, Eyes Pop Out (rarest trait), Top Droolers, Drool Points, Drool News, STAY DROOL. No auction, price, WL or allocation claims. |
| 9 | Pitch elements | 8 | Sample WL leaderboard climbing to #3 with the take's real score (25–29 s); "Bots can like a post. They can't do 2+3=6."; result card → X mock-up (29–35 s); Encore end card matching the supplied reference (39.4–42 s). |
| 10 | Founder test | 7 (provisional) | Faithful art and in-jokes are strengths. Not reviewed by the founder; a repost is not asserted. |

**Gate: NOT FULLY PASSED.** The weak scores are hook 7, founder 7, and art and motion each 8 against the required 9. These are stated honestly, as the brief permits after review loops. Don't label this approved or AAA.

## Technical checks
- **Engine:** 9/9 (`prototype/engine-checks.cjs`). Covers crossing geometry, perfect pop, too-normal penalty, miss, Eyes Pop Out trigger, splat, round end, deterministic replay (take A = 67,800) and that every pop comes from a real tap.
- **Browser:** 16/16 (`tools/checks.cjs`, landscape and portrait). Covers assets, brand fonts loaded, canvas size, real keyboard and pointer input, gameplay render, a full 60 s round to the result screen, Share on X copying text with no navigation, the leaderboard, no JS errors and no external requests.
- **Final MP4s:** main is 42.000 s, 1920×1080, 2520 frames; the X cut is 15.000 s, 1080×1920, 900 frames. Both are H.264 yuv420p BT.709 at 60 fps with 48 kHz stereo AAC at 256 kb/s and faststart. Full decode passes. Hashes are in `video/final-validation.json`.
- **Audio:** −16.1 LUFS integrated; true peak −1.3/−1.4 dBTP in the WAV masters.

## Delivery boundary
The user authorized research, downloads and GitHub delivery to AhmeddNaderr/Encore, as in previous sessions. No social post, DM or project contact was made. `DM-description.txt` is a proposal only.
