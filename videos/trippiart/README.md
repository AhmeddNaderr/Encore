# Trippi · Last Train Town

An unofficial Encore Studio game concept for [Trippi (@trippiart)](https://x.com/trippiart). Trippi Town lives on the last train of the night: a cosy cutaway builder where every carriage is a business, the oddballs ride with you, and the goal is to make the 23:09 to Platform 09.

## Downloads

- [Main video — 46 seconds, 1080×1080, 60fps, 45.9 MB](https://github.com/AhmeddNaderr/Encore/raw/refs/heads/main/videos/trippiart/Trippi-Last-Train-Town-Encore.mp4)
- [Web copy for X — 46 seconds, 1080×1080, 60fps, 17.8 MB](https://github.com/AhmeddNaderr/Encore/raw/refs/heads/main/videos/trippiart/Trippi-Last-Train-Town-Encore-web.mp4)
- [Poster frame](Trippi-Last-Train-Town-poster.jpg)
- [Source package — game film code, cut-out art, fonts and licences, score script, cue list and render scripts](https://github.com/AhmeddNaderr/Encore/raw/refs/heads/main/videos/trippiart/Trippi-Last-Train-Town-sources.zip)

Both MP4s contain H.264 video (BT.709), stereo AAC audio normalised to −14 LUFS, and faststart metadata. All 2,760 frames were decoded without errors.

## The game

- **Your town is a train.** A dollhouse cutaway of a night train rolling across Trippi's graffiti city on an elevated line. The cars are the Graffiti Studio (Mushroom painting the Trippi piece), the Honey Bar (Honey behind the counter), the Arcade (Wolf on the cabinets), the Last Stop Lounge (Axolotl dancing by the record player) and the Line 01 cab (Cone driving).
- **Gather → spend → build.** Tap the cars to collect paint, honey and tickets, which fly into the counters. Spend 300 paint and 200 honey to build the **Pet Daycare**: scaffolding, sparks, Cone as foreman in a hard hat, and the car rising into place with Trippi's virtual-pet devices on the walls.
- **Stations.** The train brakes into Rush Hour, the doors chime, and the waiting crowd boards: 64 crew becomes 192.
- **Bot raid.** A like-farming drone drops bots onto the roof. Fight back with crew powers: **Cone Wall** blocks them, **Honey Trap** sticks them, **Spore Bounce** launches them off the train (an x8 combo). "Bots can like a post. They can't board this train."
- **Make the 23:09.** A hero shot of the whole train crossing the river bridge under fireworks.
- **Weekly crew board.** Your crew climbs from #12 to #4. The top 50 crews earn GTD and the next 200 earn WL. Then a shareable run card and "Runs on any phone."

The full HUD is drawn in Trippi's sticker style: resource pills, stamps, the clock, a route bar (Rush Hour → Night Train → Last Stop → Platform 09), quests, a build tray with locked cars, crew-power buttons with cooldowns, a minimap and a tap cursor.

## How it was made

The film is a single deterministic canvas timeline (`game/game.js`), rendered frame by frame in headless Chromium in four parallel chunks. The art comes from Trippi's X profile and trippi.fun: the logo, train, cone, stamps, flower PFP and virtual-pet devices. Mushroom and Honey were cut from their site art, and Axolotl and Wolf were cut from the screens of their virtual-pet NFT art. The background oddballs are drawn in code to match Trippi's bold-outline style. Fonts are Poppins, Geist and Geist Mono, all under the OFL, with licences in the source package.

The sound is original. The 100 BPM beat and every effect are synthesised from oscillators and seeded noise in `audio.py`, timed to the film's own cue list (`events.json`). No third-party music or samples are used.

## Review status and credits

This is a review cut. Leaderboard crews and every number on screen are sample data.

Original character and world art: [Trippi / @trippiart](https://x.com/trippiart), [trippi.fun](https://trippi.fun).

Unofficial concept by Encore Studio. No affiliation with or endorsement by Trippi is claimed. Trippi's art and branding belong to their respective owners. No social post, DM or project contact was made.
