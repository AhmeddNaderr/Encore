# Reborn by Dawn (3D) — quality report

Status: playable Three.js build and two trailer cuts captured from it. These are self-review scores with evidence. Nobody at the project and no audience has reviewed them, so the strict gate is **not** claimed as passed.

## What changed from v1
- v1 was a 2D canvas animatic of a tap-to-file mechanic.
- v2 is a real, playable WebGL game. You steer Mort, catch and chain souls, deliver them to graves, banish bots with a scythe spin, use five personality powers, survive on coffee lives, and race the dawn.
- The trailer is captured frame-exactly from that build. Its autopilot plays deterministic takes.

## Evidence
- **Art fidelity.** Every character, tombstone, logo and background pixel is official Pax Gothamista art (v1 `art/side_by_side.jpg` still applies). In 3D the art is placed on layered planes and lit with generated normal maps. Faces, outfits and logos are untouched.
- **Engine checks** (`src/engine2.js`, 120 Hz fixed step). 60-second autopilot runs across 4 seeds: 88–93 deliveries, 13–19 scythe kills, 3 full-graveyard bonuses, and powers triggered 23–28 times. The trailer take hits every beat from the real rules: a soul stolen by a bot at 12.3 s, the collab wave at 26.0 s, the Bella Saw 1/1 at 34.8 s, the all-five finale at 43.0 s and dawn at 45.0 s.
- **Visual QA.** Stills were reviewed at each beat. A horizontal seam was found and fixed: fog sprites were depth-clipped against the depth-warped plate, so atmospheric layers now skip the depth test. A frame-difference scan of the decoded MP4s follows in the technical section.
- **Playability.** A headless playtest from the folder build and from the single file (`file://`) loads the title screen and starts a run with mouse movement and clicks, with no page errors. Only software WebGL (SwiftShader) was available here, so real-GPU frame rate is unmeasured. The scene is light: about 40 textured planes, ≤ 6 point lights, half-resolution bloom.

## Scores
| Requirement | Score | Evidence / limit |
|---|---:|---|
| Art fidelity | 9 | Official art on every layer; lit, never redrawn. Limit: the tombstone cut-outs come from colour segmentation, so thorn vines partly hide Odette's engraving. |
| Originality | 9 | Every mechanic comes from their lore: personality graves; the bio line as the core action; one power per girl, taken from her own site description; bots as the "bots can't raise the dead" pitch made playable; coffee lives; the Death/Mass Death Registry; the horror 1/1. |
| Hook | 8 | 0–3 s: Mort carries two souls across the graveyard. ALL FIVE RISEN / The Gothly Departed lands at 1.3 s and wipes the bots. |
| Clarity | 8 | Captions: "Fly Mort. Catch the falling souls." / "Bring each soul to her grave." / "Bots steal souls. Spin the scythe." / "Every girl you raise grants her power." HUD shows the carry chain, combo, coffee and active powers with timers. |
| Motion | 8 (provisional) | Native 60 fps, deterministic, with parallax camera moves, squash and stretch, scythe spin and particles. Not reviewed in real time here. |
| Polish | 9 | Dynamic lights on 2D art, bloom, god rays, grade, lightning, power auras, results/leaderboard flow, original SFX and score. |
| Text | 9 | All names and power descriptions are checked; the Encore slogan and CTA match the reference card. |
| Lore respect | 9 | Every line is quoted from paxgothamista.xyz or @Pax_Gothamista. No mint or chain claims; the WL is a sample. |
| Pitch elements | 9 | WL leaderboard, the bots line, the Orbituary result, Share on X, the X mock-up, the game card and the Encore end card. |
| Founder test | 8 (provisional) | It is their cemetery and their girls, now a real playable game with their inside jokes as mechanics. Not founder-reviewed. |

## Known limits
- `@Pax_Gothamistan` does not exist; the concept targets `@Pax_Gothamista`.
- The audio was auditioned only by spectrogram and loudness, not by ear.
- There is no hosted URL; the game ships as files (single HTML and folder).
