# Asset overrides

Everything renders with built-in SVG art out of the box. To swap in real images
(e.g. Ace Attorney sprites from court-records.net, or your party's character art),
just drop PNGs here with these exact names — the engine auto-detects them:

## Sprites — `assets/sprites/<key>.png`
| file | character |
|---|---|
| `judge.png` | The Judge |
| `defense.png` | Defense attorney (the record's author) |
| `strahd.png` | Prosecutor S. von Zarovich |
| `ibai.png` | Ibai (bard) |
| `ashborn.png` | Ashborn |
| `ireena.png` | Ireena |
| `irina.png` | Irina (cleric) |
| `magda.png` | Magda, Franz's wife |
| `morgantha.png` | Morgantha (night hag) |
| `trygve.png` | cardboard-Trygve |

Recommended: transparent background, roughly 3:4 portrait (e.g. 600×760).

## Backgrounds — `assets/bg/<key>.png`
| file | scene |
|---|---|
| `judge.png` | judge's bench |
| `witness.png` | witness stand |
| `defense.png` | defense bench |
| `prosecution.png` | prosecution bench |

Recommended: 4:3 (e.g. 1280×960).

## Evidence — `assets/evidence/<id>.png`
| file | item |
|---|---|
| `ev01.png` | Evidence Item 01 — sketch of Fyodor |
| `ev02.png` | Evidence Item 02 — sketch of Myrtle |

Recommended: square (e.g. 512×512).
