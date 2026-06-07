# ⚖️ The Hag Trials — Turnabout Bonegrinder

An **Ace Attorney–style courtroom presentation** of a D&D (Curse of Strahd) legal brief:
*the party v. the night hag coven of Old Bonegrinder*, argued under Barovian law.

Ibai, Ashborn, cardboard-Trygve, Irina, and Ireena — *"the party"*
Morgantha, Offelia, and Belladonna — *"the hags"*

> I'm not a lawyer, S. von Z.; please don't sue me; none of this is legal advice.

## ▶ Play

No build step, no dependencies. Just open `index.html` in a browser
(or serve the folder: `python3 -m http.server` → http://localhost:8000).

**Controls:** Click / Space / Enter to advance (click once to skip typing) · `R` Court Record · `M` mute

## Features

- Full case from the original record (`Clone of THE RECORD.md`) — every testimony,
  statute, and diss-track grievance, verbatim
- Typewriter dialogue with per-character voice blips (synthesized WebAudio, no sound files)
- Cross-examination green text with the record's question IDs (IB-01, FW-07, ...)
- **OBJECTION!** bubbles with screen shake for the hearsay & leading-question objections
- Evidence popups (Items 01 & 02) collected into a Court Record with chapter jumps
- Verdict stamps — confetti for NOT GUILTY, and Trygve's `NOT INVOLVED (WAS CARDBOARD)`
- All art is built-in SVG; drop PNGs into `assets/` to override any sprite,
  background, or evidence image (see `assets/README.md`)

## Structure

```
index.html        page shell
css/style.css     all courtroom UI styling
js/data.js        the case script (211 scenes) — edit this to tweak dialogue
js/engine.js      typewriter, advancing, overlays, sound, court record
js/sprites.js     SVG character busts, backgrounds, evidence sketches
assets/           optional PNG overrides (see assets/README.md)
```
