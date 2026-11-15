# VERY SMART: audio sources

## Music: original
**"2+3=6 (Very Smart)"** is an original instrumental written for this concept trailer: 96 BPM, swung 8ths, F major, I–vi–IV–V. The lead "kazoo" motif rises C–D–E and then jumps to A, the musical "two, plus, three… SIX!". Every note is synthesized in `audio/compose.py` from sine, saw and FM oscillators plus seeded noise:

- kick, snare, clap, hats
- upright-style plucked bass
- FM marimba off-beats
- kazoo lead (formant-filtered saw)
- bell sparkles
- brass stabs for the Drool News sting
- detuned-saw pad for the ending

No samples, loops, sound banks or third-party recordings are used, so no external licence or attribution applies.

## Sound effects: original
All synthesized in `audio/compose.py`; rendered stems are in `audio/sfx/`:

| File | Use |
|---|---|
| perfect / good | Bubble pop plus chime (smart answer) |
| poppop | Pop during Eyes Pop Out |
| gold | "wen moon?" bonus pop with arpeggio |
| normal | Comedic honk for a "TOO NORMAL" hit |
| miss / tap | Chalk taps |
| spawn / escape | Bubble appears or floats away |
| eyespop / popend | Spring BOING and the eyes returning |
| splat | Drool hits the desk |
| whoosh, tick, rank, cap, card, stamp, notify, ding, soft | Motion-graphics UI |

## Event alignment
`audio/cues.cjs` re-simulates each edited take with the same engine and driver. It maps every real tap, pop, miss, Eyes Pop Out and splat inside a shot's source interval to trailer time (`shot.t0 + event.t − shot.src`) and writes `audio/trailer-events.json`. It adds UI cues for the motion-graphics shots.

## Master
A limiter, then two-pass linear `loudnorm`, then 48 kHz, 24-bit WAV:

| File | Duration | Integrated | True peak |
|---|---|---|---|
| `audio/droolies-main-mix.wav` | 42.000 s | −16.1 LUFS | −1.3 dBTP |
| `audio/droolies-short-mix.wav` | 15.000 s | −16.0 LUFS | −1.4 dBTP |

The videos carry these mixes as AAC 256 kb/s.

To reproduce: `node audio/cues.cjs`, then `python audio/compose.py`, then the master commands in `tools/master_audio.sh`.
