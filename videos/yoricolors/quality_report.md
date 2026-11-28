# YORI: COLOR CUT — quality report

Status: both final MP4s and the playable HTML were exported and technically validated. This report does **not** claim that the strict master-prompt gate passed (see the scoring).

## Evidence
- **Gate A (art):** `art/side_by_side.png` puts three game frames next to the official frames they come from: WL f180 (ONE), WL f215 (WAVE), GTD f160 (masked peace). Faces, eyes, eye bags, hands, the mask, the cord and the outline weight are pixel-identical. Only the flat background colour changes.
- Reference board: `art/reference_board.png`. Palette: `art/palette-sampled.json`.
- Frames opened from the decoded final MP4s:
  - main cut: 0:00.0, 0:04.5, 0:08.4, 0:10.4, 0:12.5, 0:15.8, 0:19.5, 0:20.4, 0:22.9, 0:26.4, 0:27.6, 0:28.6, 0:29.6, 0:31.0, 0:33.0, 0:35.5, 0:36.6, 0:38.4, 0:40.0, 0:41.5
  - 15 s cut: 0:00.3, 1.2, 2.6, 4.2, 5.0, 6.4, 7.2, 8.4, 9.6, 10.6, 12.0, 14.2

## Review loops (5)
1. **Prototype stills.** Judgements were re-centred under the ring. Shards changed to paper white plus the brand colours, because same-colour shards vanished on matching stages. The rival now reaches only when it throws a bait (it used to show a blurry hand 40% of the time). COLORS LIE got its own dark-teal night stage. Portrait button labels were clipped and are now fixed; the portrait combo moved off the eye. The title layout was rebuilt, and the post disclaimer collision fixed.
2. **Cut-ins.** The MASK OFF band now exits fully and no longer overlaps the COLORS LIE stamp (the stamp now waits 0.6 s). The palm-slam overlay hid a note during play, so it is now a trailer transition only. Portrait title tips were made legible.
3. **First full trailer.** `freezedetect` flagged 0.85–3.7 s static holds on the leaderboard, result, post and end card. Fixes: an animated rank climb (#11 → #3), push-ins, a shimmer sweep, drifting confetti and ticking counters. The leaderboard caption was covering rows 8–9; the list now sits left and the punchline right (portrait: below the list). The COLORS LIE stamp was moved clear of the combo. True peak went from −0.8 to −1.5 dBTP.
4. **Art QA.** The masked-peace sprite had a stray black sliver: the shirt had been keyed out against a dark vignette. Background now grows only through purple hue, and every fever shot was recaptured.
5. **Final pass.** The playable results and leaderboard screens were re-laid out for desktop and phone (buttons never overlap data). Narrow rows fall back to "YOU". Both exports were fully re-validated.

## Strict scoring (1–10)
| # | Requirement | Score | Evidence / limit |
|---|---|---:|---|
| 1 | Art fidelity | **9** | `side_by_side.png`; main 0:00, 0:04.5, 0:15.8, 0:22.9. Every character pixel is official. Small keyed-edge nicks remain on motion-blurred hand edges of the masked frames; they sit on a purple stage that matches the source. |
| 2 | Originality | **7** | The base loop is a familiar rhythm-reading format. YORI-only identity: every hit is a colour-cut shot in their edit style, the moves are their gestures, the blue variant throws bait, MASK ON comes from the GTD video, and COLORS LIE comes from "More than colors". Below the 8 bar. |
| 3 | Hook | **8** | Main and 15 s both open on frame 0 mid-fever: masked YORI, ×8, 65 combo, PERFECT, a card shattering. No logo or title. Untested with a cold audience. |
| 4 | Clarity (15 s, sound off) | **8** | 1.9–3.7 s "Read the move. Hit the beat." while stickers reach the ring and the matching buttons flash. 3.8–5.6 s the COLORS LIE stamp explains itself. The bait rule is stated only in the main cut (7.6 s); in the 15 s cut the blue ✕ cards go unexplained. |
| 5 | Motion quality | **8, provisional** | Native 60 fps deterministic render. 0 identical adjacent frames (2,520 and 900). No freeze longer than 0.35 s; the longest near-static run is 0.25 s (end-card push-in). Continuous full-speed playback could not be watched with these tools, so 9 is unverified. |
| 6 | Polish | **8** | Colour-cut wipe, card shatter, shock rings, camera punch, embers, speed lines, official cut-ins, 200 event-synced SFX (main). YORI-site type (Fredoka/Nunito). The result card copies their WL card. Limits: edge nicks; the lane covers the hair top in landscape. |
| 7 | Text | **9** | Every caption, stamp, card and end-card line was read in decoded frames: correct spelling, no generated text, captions large on phone. Secondary button labels are small in landscape on phones. |
| 8 | Lore respect | **8** | Only YORI's own gestures, colours, tagline, wordmark and site look are used. No invented lore, mint or price claims. The 色より → "More than colors" reading matches their tagline. Casting the blue variant as the rival is a gameplay role, not lore. |
| 9 | Pitch elements | **9** | Main 28.1–31.9 sample WL leaderboard with climb. The bots line is adapted to "Anyone can like a post. Can you read the move?" (no unsupported bot-proof claim). 31.9–35.6 result card. 35.6–37.5 post mock-up labelled "NOTHING IS POSTED". 37.5–42 "A game concept by Encore Studio" end card. |
| 10 | Founder test | **8, provisional** | Their exact art animates in their own colour-cut editing language, and the game plays like their videos. The mechanic is a familiar format. The founder has not seen it; this is an editorial estimate. |

**Strict gate: NOT FULLY PASSED.** Originality is 7 (below 8) and the motion 9 is unverified by continuous playback. The files are delivered after five review loops with these limits stated. Do not label this founder-approved or bot-proof.

## Technical checks
- **Engine (deterministic capture run):** 229 notes; 212 perfect, 7 good, 9 dodged, 1 baited (scripted for the fail shot); 317,580 points, max combo 180, rank S (98.3%).
- **Live smoke test** (`tools/smoke.cjs`): 9/9 at 1280×720 and 9/9 at a 390×844 phone viewport, with no JS errors. It covers the title screen, Space to start, a running WebAudio clock, six key presses timed through the real `keydown` path (6/6 PERFECT, |Δt| ≤ 7 ms), demo mode, results, the leaderboard toggle, and replay resetting the score.
- **Main MP4:** 1920×1080, 60 fps, 2,520 frames, 42.000 s, H.264 High yuv420p, BT.709 limited range, AAC 48 kHz stereo 256 kb/s, faststart. −14.6 LUFS integrated, −1.5 dBTP. Full decode is clean. 52.0 MB.
- **15 s MP4:** 1080×1920, 60 fps, 900 frames, 15.000 s, same codecs. −14.5 LUFS, −1.0 dBTP. Full decode is clean. 14.8 MB.
- Validation JSON is next to each MP4 in `video/`.

## Delivery boundary
Files go only to AhmeddNaderr/Encore. No social post, DM, account connection or project contact was made. The leaderboard is sample data and the post is a mock-up. "Share" in the game only copies text.
