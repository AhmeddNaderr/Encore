# Spacerz Starcall

An unofficial pixel-art arcade shooter by Encore Studio, made for the [@SpacerzNFT](https://x.com/SpacerzNFT) community. It is a playable browser game, not a video.

Open `index.html` in any modern browser to play. It is one self-contained file, with no build step and no image or audio assets.

## The game

- Pick one of 150 procedurally generated Spacerz (#001 to #150), each with its own suit, visor, helmet, pack and emblem. Five are Legendary 1/1s.
- Fly a twin-stick arena shooter through sectors. Each sector has four waves, then a gatekeeper boss (The Warden and the Comet Serpent alternate), then a warp to the next sector.
- Level up from shards and choose one of three mods: 15 stacking upgrades, including split barrels, ricochet, homing missiles, orbiting moons and arc lightning.
- Dash through enemies, and drop a Nova Well (a black hole that eats bullets and then detonates).
- Collect gold star tickets and chain kills for combo multipliers. Your hi-score is saved in the browser.

## Controls

| Action | Keyboard / mouse | Touch |
| --- | --- | --- |
| Fly | WASD or arrow keys | Drag on the left side of the screen |
| Aim | Mouse (fires automatically) | Automatic |
| Dash | Space or Shift | DASH button |
| Nova Well | E or right-click | NOVA button |
| Pause | Esc or P | Pause button |
| Mute | M | Sound button |

## How it's made

Everything is drawn to a low-resolution buffer. Each frame is then locked to a fixed 16-colour palette with 4x4 ordered (Bayer) dithering and upscaled with nearest-neighbour sampling, so sprites, lighting and explosions all read as hand-pixelled art. The music and sound effects are synthesized live with the Web Audio API.

Unofficial fan concept by Encore Studio. Not affiliated with or endorsed by Spacerz. Spacerz and its original artwork belong to their respective owners.
