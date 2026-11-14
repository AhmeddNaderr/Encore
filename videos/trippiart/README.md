# Trippi · Spot Dispatch

An unofficial Encore Studio offer film for [Trippi (@trippiart)](https://x.com/trippiart). It shows collab management and KOL management for their free mint on Robinhood, with every partner and KOL paid in WL/GTD spots and $0 cash. The style follows Trippi's own CCTV post (green security-terminal boot, REC timestamp feeds, rainy Exit B stairs and speech bubbles) and uses Trippi's art, lore and colours.

## Downloads

- [Main video — 53 seconds, 1080×1080, 60fps, 53.8 MB](https://github.com/AhmeddNaderr/Encore/raw/refs/heads/main/videos/trippiart/Trippi-Spot-Dispatch-Encore.mp4)
- [Web copy for X — 53 seconds, 1080×1080, 60fps, 21.3 MB](https://github.com/AhmeddNaderr/Encore/raw/refs/heads/main/videos/trippiart/Trippi-Spot-Dispatch-Encore-web.mp4)
- [Poster frame](Trippi-Spot-Dispatch-poster.jpg)
- [Source package — film code, cut-out art, fonts and licences, score script, cue list and render scripts](https://github.com/AhmeddNaderr/Encore/raw/refs/heads/main/videos/trippiart/Trippi-Spot-Dispatch-sources.zip)

Both MP4s contain H.264 video (BT.709), stereo AAC audio normalised to −14 LUFS, and faststart metadata. All 3,180 frames were decoded without errors.

## Story beats

| Time | Scene |
| --- | --- |
| 0:00–0:05 | Trippi Transit Control boots up: spot vault 300, cash budget $0, collab and KOL lines offline. Encore logs in and gets ACCESS GRANTED. |
| 0:05–0:13 | CAM 09 · Platform 09. The Trippi train pulls in. Mushroom: "Free mint. 1,999 of us. And nobody outside town knows we exist." Honey: "We've got spots. We've got zero budget." Cone: "Bro... spots ARE the budget." |
| 0:13–0:31 | **Spot Dispatch**, the game. A Trippi transit map with a full HUD: spot vault, cash spent, reach, WL applications, a quest tracker, a dispatch log, a hotbar of spot stamps (the cash slot is locked) and a minimap. **01 Collab management**: trains carry GTD spots to eight partner communities, and the Partner 03 deal card is stamped "PAID IN SPOTS". **02 KOL management**: twelve KOLs on a ring line get WL spots, with a sample KOL post that is tracked live. Ends on "CASH SPENT: $0". |
| 0:31–0:39 | CAM 03 · Exit B. A crowd with WL/GTD tickets comes down the stairs in the rain. "Partner crews. KOL followers. All paid in spots." / "And we spent... nothing?" |
| 0:39–0:46 | The offer as a Trippi Transit ticket: Encore × Trippi, collab management plus KOL management, partners paid in WL/GTD spots, cash $0. Closes on "COLLECT THE ODD. We'll bring the crowd. You keep the cash." |
| 0:46–0:53 | Encore end card: "Collab + KOL management. Paid in spots, not cash." Book a call. |

## How it was made

The film is a single deterministic canvas timeline (`film/film.js`), rendered frame by frame in headless Chromium in four parallel chunks. The art comes from Trippi's X profile and trippi.fun: the logo, train, bench, cone, streetlight, postmark stamps, FCFS pass and banner. The mushroom and honey-bucket characters were cut from their site art. Fonts are Geist, Geist Mono, Doto, Poppins and VT323, all under the OFL, with licences in the source package.

The sound is original. The 96 BPM lo-fi beat (in A minor) and every effect (CRT keys, train rumble and brakes, rain, UI blips, coin dings, stamp hits, the end chime) are synthesised from oscillators and seeded noise in `audio.py`, timed to the film's own cue list (`events.json`). No third-party music or samples are used.

## Review status and credits

This is a review cut. All partners and KOLs are unnamed placeholders, and every number on screen (reach, applications, crowd count, post metrics) is labelled sample data.

Original character and world art: [Trippi / @trippiart](https://x.com/trippiart), [trippi.fun](https://trippi.fun).

Unofficial concept by Encore Studio. No affiliation with or endorsement by Trippi is claimed. Trippi's art and branding belong to their respective owners. No social post, DM or project contact was made.
