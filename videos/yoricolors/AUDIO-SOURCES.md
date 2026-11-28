# YORI: COLOR CUT — audio sources

## Original music
**"Color Cut"**, an original instrumental written for this concept. 128 BPM, E minor, on a 4-bar Em–C–D–B loop. Trap and pop drums meet Japanese colour: koto-style plucked strings, taiko, a breathy flute and an 808 bass. The drop hook uses a 3-3-2 "tresillo" rhythm, and the game's note chart is charted on the same rhythm.

Every sound is synthesised in `tools/compose.py` from oscillators and seeded noise:
- koto: Karplus–Strong string, tuned exactly by resampling
- 808: sine with a pitch drop, saturation and monophonic choke
- kick, clap, snare and hats: shaped noise and tones
- lead: additive detuned saws with a pluck filter
- pad: detuned saws
- reverb: Freeverb-style comb and allpass network
- master: sidechain ducking, soft saturation, BS.1770 loudness normalisation and a look-ahead limiter

No samples, loops, sound banks or third-party recordings are used, so there is no external music licence or attribution requirement.

| File | Use |
|---|---|
| `audio/song.wav` | Full game track, 85.5 s (44 bars plus tail), −14.5 LUFS |
| `audio/results-loop.wav` | Seamless 4-bar loop for the title and results screens |
| `audio/sfx/*.wav` | 16 effects: hit_one, hit_wave, perfect, bait, pat, dodge, miss, mask_on, mask_off, colors_lie, combo, click, whoosh, stamp, tick, rank_up |
| `video/main-mix.wav`, `video/short-mix.wav` | Trailer mixes |

## Trailer mixes
The trailer score is re-rendered from the composition for the trailer's own bar sequence. Every cut is on a bar line and each shot keeps its harmonic position, so there are no audio splices. Gameplay effects come from the captured run's event log: each hit, perfect, bait, dodge, MASK ON/OFF and COLORS LIE event is mapped as `shot.start + (event.t − shot.source_start)`. The placed list is in `video/*-sfx-events.json`. Both mixes are mastered to −14.5 LUFS integrated with a −1.3 dBFS sample-peak ceiling. Measured values are in the validation JSON next to each MP4.

Reproduce: `python3 tools/compose.py song|loop|sfx`, then `python3 tools/mix_trailer.py trailer/main.json build/cap-main`.
