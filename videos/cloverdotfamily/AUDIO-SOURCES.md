# Clover / SAME ROOTS audio sources

## Original music

**“Little Lights, Same Roots”** — original instrumental composition created for this concept trailer. No third-party song, loop or stock recording is used. The 72 BPM, 3/4 cue uses warm harp, quiet piano, celesta, flute and restrained sustained strings in G major. There are no vocals, combat percussion or aggressive trailer impacts.

- `audio/music-42s.wav`: 42.000 s, stereo, PCM16 / 48 kHz. First music stem, before event-aligned effects.
- `audio/music-15s.wav`: 15.000 s, stereo, PCM16 / 48 kHz. Separately arranged short edit, before event-aligned effects.
- `audio/compose_score.py`: reproducible musical arrangement and original effect synthesis.
- `audio/composition-events.json`: exact score note events.

The music itself was created for the user’s project; there is no external composition attribution requirement. The virtual instrument sound bank is the one external audio dependency and has the following official license.

## Virtual instruments and verified permission

**GeneralUser GS v2.0.3**, S. Christian Collins, rendered with FluidSynth.

- Official author page: https://www.schristiancollins.com/generaluser
- Official linked repository: https://github.com/mrbumpy409/GeneralUser-GS
- Exact license: https://github.com/mrbumpy409/GeneralUser-GS/blob/main/documentation/LICENSE.txt
- Raw official license: https://raw.githubusercontent.com/mrbumpy409/GeneralUser-GS/main/documentation/LICENSE.txt
- Local evidence: `audio/source/GeneralUser-LICENSE.txt`, `GeneralUser-README.md`, `generaluser-repository.json` and `GeneralUser-GS.sf2`.
- License text: “You may use GeneralUser GS without restriction for your own music creation, private or commercial.” It also explicitly allows full use of the contained samples in music production. This is the GeneralUser custom license, **not** CC0 or CC BY. Its sample provenance statement is retained unedited in the local license.
- Suggested credit: “Original concept score: Little Lights, Same Roots. Instruments: GeneralUser GS by S. Christian Collins — https://www.schristiancollins.com/generaluser.” Instrument credit is optional under the stated license.

Official Incompetech and Scott Buckley pages could not be verified from this environment (HTTP 503 / 406); neither composer’s music is used.

## Original effects

All effects are synthesized from oscillators and seeded noise in `audio/compose_score.py`; no third-party samples are used. These effects were created for this project and require no external sound-effect attribution.

| File | Purpose |
|---|---|
| `audio/sfx/tap-soft.wav` | Soft plucked hit, light input acknowledgement |
| `audio/sfx/tap-warm.wav` | Lower alternate tap for sequence variety |
| `audio/sfx/firefly-pass.wav` | Airy two-note success / guiding-light pass |
| `audio/sfx/clover-bloom.wav` | Gentle G-add9 magical bloom and tail |
| `audio/sfx/ui-leaf.wav` | Very quiet paper / leaf interface movement |
| `audio/sfx/ui-open.wav` | Quiet two-tone opening acknowledgement |

Effects are PCM16 / 48 kHz mono. The mix keeps feedback light enough for the welcoming, curious storybook tone. No dialogue, minted-reward promise or financial claim is included.

## First stem technical check

FFmpeg measured the first 42 s music stem at **−24.48 LUFS integrated / −7.96 dBTP**; 15 s at **−24.67 LUFS / −7.89 dBTP**. Headroom is reserved for event effects and final trailer mastering. Final mix measurements and event placements will be appended after the trailer timeline is locked.

Official sound bank source snapshot: `684543d5e5efaef08d02be50dcda8d552478fa60`. Pinned license: https://github.com/mrbumpy409/GeneralUser-GS/blob/684543d5e5efaef08d02be50dcda8d552478fa60/documentation/LICENSE.txt . Download and output hashes are recorded locally.

## Locked trailer mixes

`audio/trailer-events.json` maps every selected engine tap, arrival, bloom and miss through `prototype/edit.json`, using `shot.start + event.time - shot.source`. Only events in each half-open source interval are included. The main mix contains **59 engine cues + 6 UI cues**; the short contains **23 engine cues + 4 UI cues**. Each mix includes one selected miss cue. The opening bloom at **0.905 s** receives a slightly stronger, still gentle magical accent.

| Final deliverable | Duration | Integrated loudness | True peak |
|---|---:|---:|---:|
| `audio/clover-main-mix.wav` | 42.000 s | −18.00 LUFS | −1.82 dBTP |
| `audio/clover-15s-mix.wav` | 15.000 s | −18.00 LUFS | −2.81 dBTP |
| `audio/clover-main-mix.m4a` | 42.000 s | −18.00 LUFS | −1.82 dBTP |
| `audio/clover-15s-mix.m4a` | 15.000 s | −18.00 LUFS | −2.82 dBTP |

Final WAVs are stereo, 24-bit PCM at 48 kHz; AAC alternatives use 256 kb/s. The complete music/effects sum fades over the final 0.85 s, including the shortened end-card bloom tail. Both WAVs end at a zero sample. The source score stays continuous through picture cuts and dips subtly under bloom accents. Final files were measured again after mastering and encoding; details and hashes are in `audio/final-audio-verification.json`.

Reproduce: `python audio/map_trailer_events.py` then `python audio/mix_audio.py audio/trailer-events.json`. Event mapping and original music/effects scripts are retained. No posting or upload was performed.
