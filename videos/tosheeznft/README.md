# Tosheez · Nobody Knows

An unofficial Encore Studio game concept for [Tosheez](https://x.com/TosheezNFT), built entirely from Tosheez's own hand-drawn trait art.

> *Nobody knows who he is. Everybody knows how he looks.*

## The game

Satoshi is back after more than a decade away. The space has mutated, so he hides inside a crowd of 7,021 Tosheez who all share his face. Trends sweep through the crowd ("Hard hats are in."). The **Satoshi Hunter** sends a magnifying glass after whoever is off-trend. You tap Satoshi's **HAT / EYES / FIT** slots to swap traits and blend in before the glass reaches him.

- **Rule:** Match the crowd. Stay hidden.
- **Escalation:** multi-trait trends, faster hunters, fake-out trends ("JK. Leather is in."), a second hunter.
- **Secret trait:** golden ₿ traits trigger **SPLIT**: Satoshi copies his look onto several Tosheez, and the hunter can't tell which one is him (from the lore: *"Satoshi split his digital footprint into thousands of styles"*).
- **Score:** trends survived, streak multiplier, WL leaderboard and a shareable result card.

## Downloads

- [Main film: 44 s, 1920×1080, 60 fps, 42.2 MB](Tosheez-Nobody-Knows.mp4)
- [Source package (62.9 MB): trailer engine, extracted trait layers, art pipeline, score and research](Tosheez-Nobody-Knows-sources.zip)

The MP4 contains H.264 video and stereo AAC audio (48 kHz, about −16.7 LUFS), with faststart. The exact frame count (2,640) and a full audio/video decode were verified. Checksums are in `SHA256SUMS`.

## Film structure

| Time | Shot |
|---|---|
| 0–3.5 s | Hook: mid-game. "Crowns are in." The hunter closes in and Satoshi swaps to a crown just in time. |
| 3.5–5.5 s | "Last seen in 2011." → "Satoshi returns." (their own copy) |
| 5.5–8 s | Pull back from Satoshi into a mosaic of hundreds of Tosheez: "Nobody knows who he is. / Everybody knows how he looks." |
| 8–10 s | Title: Tosheez · *Nobody knows.* |
| 10–22 s | Gameplay: rule, double trend, fake-out, secret SPLIT |
| 22–24 s | Two hunters, one late tap: **FOUND.** |
| 24–28 s | WL leaderboard (sample data): "Bots can like a post. They can't hide in plain sight." |
| 28–32 s | Result card → X post mock-up (nothing was posted) |
| 32–36 s | "7,021 looks. Nobody knows which one is him." The hunter's glass irises to black. |
| 36–44 s | Encore end card in the new Encore Brand Kit: chrome lockup, the crew, *Every launch deserves an encore.*, Book a call |

## How the art was made

No AI image generation was used. All 1769 px Tosheez portraits share one layer canvas, so after registering each public portrait to it (template matching on the face), every trait was separated by differencing against a reconstructed clean base face. The result is 34 real trait layers: 8 hats, 7 eyewear, 12 outfits, 3 hair colours, wings, bubblegum and kazoo. The crowd recombines those layers, so every Tosheez on screen is drawn from their own trait art, not a redraw.

Gameplay footage is rendered by a deterministic canvas engine: trend waves, hunter timing and match checks are real rule evaluations, driven by a scripted skilled player. This is a concept film, not a released playable game.

## Sources and credits

- Character art, trait art, wordmark and lore lines: [Tosheez / @TosheezNFT](https://x.com/TosheezNFT) public posts (Nov 2026), plus portraits posted by @HomerCarbone. Source URLs are listed in the source package (`research/sources.csv`).
- Fonts: Inter Tight and JetBrains Mono for the game UI; Geist, Geist Mono and Doto for the Encore end card. All are under the SIL Open Font License, with licences included.
- Music: an original score (a 120 BPM swung spy-jazz caper in D minor) written for this film. It is played by sampled instruments from [GeneralUser GS v2.0.3](https://github.com/mrbumpy409/GeneralUser-GS) by S. Christian Collins (free for commercial use), rendered with FluidSynth. Sound effects are woodblock, vibraphone, celeste and pizzicato from the same bank, plus a synthesized camera shutter and air whooshes. Nothing is AI-generated.
- Encore lockup, crew art, palette, Geist type and slogan: from the Encore Brand Kit (November 2026).

Unofficial concept by Encore Studio. Not affiliated with or endorsed by Tosheez. Tosheez characters and art © Tosheez. The leaderboard uses sample handles, and the X post is a mock-up. No social post, DM or project contact was made.
