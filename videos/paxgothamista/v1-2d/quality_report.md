# Reborn by Dawn — quality report

Status: both final MP4s exported and technically validated. Scores are self-review judgements tied to the evidence listed; no founder or audience has seen the film. **The strict gate is not claimed as passed**, because motion and founder reaction could not be verified by real-time viewing or a cold audience.

## Evidence
- `art/side_by_side.jpg`: the official cemetery, Vera Locks, Morticia Belladonna and Mort the Intern next to game frames at 10.6 s, 9.3 s and 0.5 s. Character pixels are identical. Only cut-out transforms (translate, gentle scale/sway) and additive light are applied.
- Frame-difference scan of the decoded MP4s (192×108 grey): no static runs inside any gameplay shot (0–26.8 s main, 0–9.8 s short). Static holds remain only in the end-card text. The leaderboard, result and post screens were given drift, motes and shine to remove the holds the first scan found.
- Engine-driven takes: `film.js` and `main_script.json`. Beats come from the real rules: mistake at 10.1 s, collab wave at 26.1 s, 1/1 at streak 15 (32.9 s), all-five bonus at 42.9 s, dawn at 45.0 s. Final result: 31,216 points, 42 souls reborn, best streak 28, 3 coffees left.

## Scores
| Requirement | Score | Evidence / limit |
|---|---:|---|
| Art fidelity | 9 | Official cast, Mort, cameos, wordmark, Mortuary/Orbituary frames, Bella Saw and cemetery used unaltered (side-by-side). Limit: the tombstone cut-out masks are colour-segmented, so engravings are partly hidden by thorn vines on the Odette stone. |
| Originality | 8 | The matching core is familiar, but every rule comes from their lore: personality graves, the bio line as the action, Mort's fifth coffee as lives, the Death/Mass Death Registry, the 1/1 horror villains and the Orbituary status. Swap test passes. |
| Hook | 8 | 0–3 s is mid-shift: two rises, then ALL FIVE RISEN / The Gothly Departed at 1.6 s. No logo or fade first. Not tested on a cold audience. |
| Clarity | 8 | Soul emblem = grave crest + colour; "Match each soul to her grave." at 5.35 s; error state shown at 13.8 s. The emblems on graves are small on a phone; the 15 s cut uses a larger, tracking camera. |
| Motion | 8 (provisional) | Native 60 fps, deterministic; squash/stretch on rises, anticipation and lean on Mort, screen shake and hit-flash. Real-time perceptual review was not possible here, so 9 is unverified. |
| Polish | 8 | HUD in the site palette and Montserrat, blackletter engravings, bursts, stamps, mass-wave and 1/1 banners, Orbituary result, X mock-up, Encore end card. SFX and score were checked only by spectrogram and loudness, not by ear. |
| Text | 9 | All names match the site roster (Morticia Belladonna, Falon St Clair, Vera Locks, Odette Noir, Rowena Inkgrave, Mort the Intern). The Encore slogan, CTA and disclaimer match the reference card. |
| Lore respect | 9 | Every lore line is quoted from paxgothamista.xyz or @Pax_Gothamista. No mint, chain or price claims; the WL is shown as a sample, matching the site's own rule that submissions never auto-grant WL. |
| Pitch elements | 9 | WL leaderboard (26.8 s), "Bots can like a post. They can't raise the dead." (27.8 s), Orbituary result + Share on X (32 s), X post mock-up (35.1 s), game card (38 s), Encore card (41 s). |
| Founder test | 7–8 (provisional) | Their own cemetery, girls and inside jokes are front and centre; not reviewed by the founder. |

## Known limits
- `@Pax_Gothamistan` (as requested) does not exist on X; the concept targets `@Pax_Gothamista`.
- The audio is original but was not auditioned by a human ear in this environment.
- A playable build is not packaged. The engine (`engine.js`) is environment-agnostic and drives every gameplay shot.

## Technical
- Main: 1920×1080, 60 fps, 2,700 frames, 45.000 s; 720p alternative; 15 s: 1080×1920, 60 fps, 900 frames. H.264 High / yuv420p / BT.709, AAC 256 kb/s 48 kHz stereo, faststart. Full decode passed.
- Loudness: −16 LUFS integrated, true peak ≈ −1.5 dBTP (two-pass loudnorm).
