# Reborn by Dawn — playable Three.js game

An unofficial Encore Studio game concept for Pax Gothamista, built from their official art.

## Play
- **Quickest:** open `RebornByDawn-play.html` (one self-contained file) in Chrome, Edge, Firefox or Safari.
- **Folder build:** serve the `game/public/` folder with any static server, then open it, for example:
  - `npx serve game/public`
  - or `python3 -m http.server -d game/public 8080`, then visit http://localhost:8080

## How to play
| | |
|---|---|
| **Fly** | Move Mort the Intern with the mouse, a finger (drag) or WASD / arrow keys |
| **Catch** | Fly into falling souls; Mort carries up to three in a glowing chain |
| **Raise** | Fly over the grave with the matching emblem; she rises reborn and grants her power |
| **Banish** | Click, tap or press Space to spin the scythe at grey "like-bots" before they steal your souls |
| **Survive** | Bots that touch Mort spill a coffee (5 lives); catch falling coffee cups to refill |
| **Bonus** | All five girls up at once = The Gothly Departed (+5,000, all bots banished); the rare spiral soul raises the 1/1 Bella Saw (+6,666) |

**Powers** (one per girl, about 5 s each):
- Morticia, *Drop Dead Gorgeous*: score ×2
- Vera, *Heartstrings*: soul magnet
- Odette, *Thorn Veil*: a thorn ring shreds bots
- Falon, *Halo Hour*: time slows for everything but Mort
- Rowena, *Bad Influence*: bots turn into souls

The shift lasts 60 seconds, until dawn. Then your Orbituary card appears with a sample WL leaderboard and a copyable result. M toggles sound.

## Under the hood
- **2.5D diorama in Three.js r170.** The official cemetery is a depth-warped background plate, and its five blank tombstones are cut out onto their own planes. The girls rise on planes between them and are clipped at the ground line.
- **Live lighting on 2D art.** Normal maps are generated from the official PNGs. Every soul carries a coloured point light, rising girls are underlit by their grave, and there is moonlight plus a warm dawn key.
- **Post-processing.** Unreal bloom, moon god rays, chromatic aberration on hits, a night→dawn grade, vignette and grain.
- **Effects.** GPU particle bursts and debris, drifting fog, bats, clouds, lightning, a scythe crescent, power auras and a shockwave.
- **Engine.** `src/engine2.js` is a deterministic fixed-step simulation. The same code drives the playable game, the attract-mode autopilot and the trailer capture.
- **Build.** `npm install && node build.mjs`. Trailer frames: `node capture.cjs main video 0 2700 out.mp4`.

Unofficial concept by Encore Studio. Not affiliated with or endorsed by Pax Gothamista. Pax Gothamista characters and art © Pax Gothamista.
