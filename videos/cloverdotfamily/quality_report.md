# Same Roots — final quality report

Status: both final MP4s exported and technically validated. This report does **not** claim the strict master-prompt quality gate has passed.

## Evidence and five review loops

1. Initial exact-art build: source fidelity strong; timing instruction ambiguous and landscape footer covered names.
2. Replaced spatial instruction with timing instruction, added LIT/UNLIT/TAP NOW states and enlarged the game-critical light. Fixed the light's portrait-reaction hold so it no longer restarted its outward route.
3. Used deliberate circular portrait crops, a four-leaf progress indicator built from the official favicon geometry, a bigger common bloom, four return streaks and visible personality feedback. Preserved original face/costume pixels.
4. Lifted the Rain Walker badge clear of the HUD. Captured three real engine-driven takes; all 480 frames of the eight-second review clip decode, with no identical adjacent whole-frame pairs. Two additional 24-frame windows are unique frame by frame.
5. Reviewed both edits: moved rule text away from faces, removed an unsupported arrow glyph, cleaned menu backgrounds, replaced overlapping rank-row motion with a readable score/rank tally, and improved logo contrast without changing its shape. Full cuts and audio are exported separately from the prototype review clip.

Independent review is retained in `review_notes.md`. Source/frame comparisons are in `art/side_by_side.png`; actual canonical source files are in `art/raw/`.

## Strict scoring

Scores are judgements tied to observed evidence, not a statement of founder approval. A provisional score does not pass a gate.

| Requirement | Score | Evidence / limit |
|---|---:|---|
| Art fidelity | 9 | Opened three full gameplay frames against three original portraits in `art/side_by_side.png`; independent reviewer9. Same four lobes, pale leaf, veins, half-lidded eyes, headphones, raincoat, glasses and paper folds. Exact original Valley. Final main0–3 /short2–5.5 keep this art. |
| Originality | 7 | `concepts.md` explicitly scores the familiar timing foundation7. Mandatory different-family visits, shared light, common bloom and curiosity effects add identity, but this is still a radial timing game. This does not meet the final8 threshold. |
| Hook | 7 | Main0–3 /short0–2 begin mid-game with a four-friend bloom at0.905 and no opening title/logo. Exact art and a visible payoff are present, but the action remains restrained; independent review scored the hook7. No cold audience thumb-stop test was run. |
| Clarity | 8 | Independent revised prototype review8; TAP NOW at source0.250 and LIT/UNLIT states opened. Short2–5.5 carries the six-word timing rule;5.5–7.7 shows a real miss/recovery. |
| Motion | 8 provisional | Export targets native60fps with deterministic per-frame motion; engine contact timing and light hold fixed, 48/48 CRC windows unique, eight-second sequence480 frames decode without duplicate adjacent whole frames. Continuous full-speed perceptual review is unavailable through the tools, so a9 is unverified. Cut-out acting is deliberately restrained. |
| Polish | 8 | Independent revised prototype review8. Locally packaged Nunito/Lora, clean portrait frames, event-synced original music/effects, sample leaderboard, readable result and post preview. No source-art substitution. |
| Text | 8 | Opened main/short UI and end-card frames; unsupported arrow glyph removed. Actual names and supplied Encore tagline/contact text are correctly typed. Final00:28 caption collision was corrected and reopened from the decoded MP4; independent reviewer confirmed readability. Tiny trait/source captions are secondary, not essential phone instructions. |
| Lore respect | 9 | Research URLs opened and logged. Same roots/different stories, guiding lights, official names and personalities retained. New mechanical effects are explicitly concept design. No mint-date, allocation or financial promises are made. |
| Pitch elements | 8 | Main25–29 sample WL leaderboard;29–32 actual earned result;32–35 X post mock-up;38–42 Encore end card. Short9–15 condenses them. Bots copy is adapted to a player challenge, not an unsupported claim of bot resistance. No message was sent. |
| Founder test | 7 provisional | Founder has not reviewed it. Faithful original art is a strength; the modest timing mechanic and diagram-like playfield may be less exciting than a more ambitious bespoke game. No repost likelihood is asserted as fact. |

**Strict gate: NOT FULLY PASSED.** Art fidelity meets9, but originality/hook/founder confidence remain7 and perceptual motion9/founder reaction are not verified. Deliver after the five review loops with these weaknesses stated, as the supplied brief permits. Do not label this AAA, founder-approved, or bot-proof.

## Technical checks

- Engine:9 meaningful checks, including timing miss, repeat reset, four-unique bloom, personality effects, timeout, deterministic seeded replay and actual-tap autoplay.
- Browser:7 smoke checks, including real Space/pointer input, canvas dimensions, loaded fonts, deterministic frame equality and no JS/asset errors.
- Prototype review capture:1920×1080,60fps,480 frames/8 seconds; takesB/C retain different seeded success and real mistake/recovery.
- Forced-software live browser:58.07fps average,16.7ms median frame interval,16.8ms p95. Offline export is60fps; do not confuse rendering throughput with encoded playback cadence.
- Music masters:main42.000s at−18.00LUFS/−1.82dBTP;short15.000s at−18.00LUFS/−2.81dBTP;48kHz stereo24-bit WAV, no clipping, clean fades.
- Final MP4s: main42.000s /1920×1080 /2520frames /29,092,704bytes; short15.000s /1080×1920 /900frames /10,026,780bytes. Both60fps H.264/yuv420p, limitedBT709, AAC stereo48kHz and faststart; full video+audio decode passed. Exact hashes and checks are in `video/final-validation.json`.
- Interactive result controls:8 checks per orientation (16 total), including real leaderboard navigation, exact clipboard content, no outbound action and restart with cleared score/state.
- The main25–29 caption section and opening decorative-trait cleanup were re-rendered and spliced at exact frame boundaries, preserving original audio. Both corrected files passed full validation again. Historical source/decode evidence is retained as `final-validation-v1.json`.

## Delivery boundary

The earlier GitHub cancellation was superseded by the user’s explicit request to upload these files to AhmeddNaderr/Encore and provide download links. Artifact delivery to that repository is authorized. No social post, DM, account connection or project contact is authorized or performed.
