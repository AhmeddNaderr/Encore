# Reborn by Dawn — audio sources

## Original music
**"Night Shift at the Mortuary"**: an original instrumental made for this concept trailer. 120 BPM, D minor, resolving to D major when dawn breaks. Harpsichord ostinato, pizzicato, choir, strings, celesta motif, church organ, music box (1/1 spiral), tubular bells, timpani and kit. No third-party song, loop or stock recording is used. The score is generated note by note in `audio/compose_score.py` (MIDI in `audio/score-*.mid`), with hits locked to the engine's game events in `audio/trailer-events.json`.

**Instruments:** GeneralUser GS (S. Christian Collins), rendered with FluidSynth. License: "You may use GeneralUser GS without restriction for your own music creation, private or commercial." (https://www.schristiancollins.com/generaluser, license copied to `audio/source/GeneralUser-LICENSE.txt`). Credit is optional.

## Original sound effects
All effects are synthesized from oscillators and seeded noise in `audio/mix_audio.py`; no samples are used. They include the soul catch chime, Mort's whoosh, grave thud with pentatonic rise chimes (one note per girl), the pop chime, the "paperwork error" wah-wah with stamp and coffee splash, the bonus sparkle cascade with bat flutter, the spiral swell and gong, UI ticks, the rank-up chime, the stamp, likes and transitions.

## Masters
| File | Duration | Integrated | True peak |
|---|---|---|---|
| main mix | 45.000 s | −16 LUFS | ≤ −1.4 dBTP |
| 15 s mix | 15.000 s | −16 LUFS | ≤ −1.5 dBTP |
48 kHz stereo, AAC 256 kb/s in the MP4s.
