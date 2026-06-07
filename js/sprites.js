/* ============ SVG sprites & backgrounds ============
   Every sprite/background can be overridden by dropping a PNG into:
     assets/sprites/<key>.png   (e.g. assets/sprites/ibai.png)
     assets/bg/<key>.png        (e.g. assets/bg/witness.png)
   If the file exists it is used; otherwise the built-in SVG renders. */

// ---------- generic bust builder ----------
function bust(opts) {
  const o = Object.assign({
    skin: "#f1c9a5", outfit: "#444", outfit2: "#666", hair: "",
    extraBack: "", extraFront: "", mouthColor: "#7c3b2d",
    eyeColor: "#222", browTilt: 0, hunch: false
  }, opts);

  const bodyY = o.hunch ? 30 : 0;
  return `
  <svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0,${bodyY})">
      ${o.extraBack}
      <!-- torso -->
      <path d="M40 380 Q45 280 95 258 L130 245 L170 245 L205 258 Q255 280 260 380 Z" fill="${o.outfit}"/>
      <path d="M118 245 L150 300 L182 245 L170 240 L130 240 Z" fill="${o.outfit2}"/>
      <!-- neck -->
      <rect x="132" y="210" width="36" height="44" rx="12" fill="${o.skin}"/>
      <!-- head -->
      <ellipse cx="150" cy="155" rx="58" ry="66" fill="${o.skin}"/>
      <!-- ears -->
      <ellipse cx="92" cy="160" rx="9" ry="14" fill="${o.skin}"/>
      <ellipse cx="208" cy="160" rx="9" ry="14" fill="${o.skin}"/>
      <!-- eyes -->
      <ellipse cx="128" cy="158" rx="6.5" ry="8" fill="${o.eyeColor}"/>
      <ellipse cx="172" cy="158" rx="6.5" ry="8" fill="${o.eyeColor}"/>
      <!-- brows -->
      <rect x="114" y="138" width="28" height="6" rx="3" fill="#222" transform="rotate(${o.browTilt} 128 141)"/>
      <rect x="158" y="138" width="28" height="6" rx="3" fill="#222" transform="rotate(${-o.browTilt} 172 141)"/>
      <!-- nose -->
      <path d="M150 165 L144 186 L156 186 Z" fill="rgba(0,0,0,.12)"/>
      <!-- mouth (animated while talking) -->
      <ellipse class="mouth" cx="150" cy="203" rx="14" ry="6" fill="${o.mouthColor}"/>
      ${o.hair}
      ${o.extraFront}
    </g>
  </svg>`;
}

const SPRITES = {
  judge: () => bust({
    skin: "#e8bd92", outfit: "#3a2a1a", outfit2: "#26190e", browTilt: 8,
    hair: `<path d="M96 130 Q150 70 204 130 L204 110 Q150 55 96 110 Z" fill="#cfc6ba"/>`,
    extraFront: `
      <path d="M104 175 Q150 305 196 175 Q196 230 150 252 Q104 230 104 175 Z" fill="#d9d2c6"/>
      <ellipse class="mouth" cx="150" cy="203" rx="13" ry="5" fill="#6e3a2c"/>
      <rect x="112" y="128" width="32" height="9" rx="4" fill="#d9d2c6"/>
      <rect x="156" y="128" width="32" height="9" rx="4" fill="#d9d2c6"/>`
  }),

  defense: () => bust({
    skin: "#f1c9a5", outfit: "#1c2f6e", outfit2: "#fff", browTilt: -6,
    hair: `<path d="M92 140 Q90 80 150 78 Q212 80 208 140 L214 96 L196 104 Q205 70 168 66 Q200 50 150 52 Q100 50 132 66 Q95 70 104 104 L86 96 Z" fill="#1b1b22"/>`,
    extraFront: `<path d="M142 248 L150 300 L158 248 L150 252 Z" fill="#b01e28"/>
      <rect x="143" y="246" width="14" height="10" rx="2" fill="#b01e28"/>`
  }),

  strahd: () => bust({
    skin: "#e6e0da", outfit: "#15090c", outfit2: "#7e1220", browTilt: 14, eyeColor: "#8c1220",
    extraBack: `<path d="M30 380 Q40 230 110 235 L150 250 L190 235 Q260 230 270 380 Z" fill="#42060f"/>
      <path d="M95 250 L70 215 L112 240 Z" fill="#15090c"/>
      <path d="M205 250 L230 215 L188 240 Z" fill="#15090c"/>`,
    hair: `<path d="M92 150 Q86 70 150 66 Q214 70 208 150 Q210 96 178 92 Q196 76 150 80 Q104 76 122 92 Q90 96 92 150 Z M150 92 L142 116 L150 110 L158 116 Z" fill="#101014"/>`,
    extraFront: `<path d="M140 196 L144 206 L148 196 Z" fill="#fff"/>
      <path d="M152 196 L156 206 L160 196 Z" fill="#fff"/>`
  }),

  ibai: () => bust({
    skin: "#d9a36f", outfit: "#5a2a8c", outfit2: "#e9c46a", browTilt: -10,
    extraBack: `<rect x="196" y="180" width="16" height="190" rx="8" transform="rotate(24 204 270)" fill="#8a5a2b"/>
      <ellipse cx="246" cy="352" rx="34" ry="44" transform="rotate(24 246 352)" fill="#a96f37"/>`,
    hair: `<path d="M94 150 Q92 78 150 74 Q208 78 206 150 Q206 104 150 100 Q94 104 94 150 Z" fill="#2c1b10"/>
      <path d="M84 118 Q86 84 126 74 L240 60 Q260 58 252 76 Q244 92 206 96 Q220 110 196 112 L110 116 Q84 118 84 118 Z" fill="#7b3fbf"/>
      <path d="M236 64 Q280 20 270 70 Q264 92 244 92 Z" fill="#e9c46a"/>`,
    extraFront: `<ellipse class="mouth" cx="150" cy="203" rx="16" ry="8" fill="#7c3b2d"/>`
  }),

  ashborn: () => bust({
    skin: "#e8bd92", outfit: "#6f7884", outfit2: "#454c57", browTilt: 6,
    hair: `<path d="M92 148 Q90 76 150 72 Q210 76 208 148 Q208 100 150 96 Q92 100 92 148 Z" fill="#3a2c1d"/>`,
    extraBack: `<ellipse cx="78" cy="268" rx="34" ry="26" fill="#8a939f"/>
      <ellipse cx="222" cy="268" rx="34" ry="26" fill="#8a939f"/>`,
    extraFront: `<path d="M120 252 L180 252 L172 268 L128 268 Z" fill="#cfd6de"/>`
  }),

  ireena: () => bust({
    skin: "#f4d2b3", outfit: "#7e1220", outfit2: "#e8d9c2", browTilt: -4,
    hair: `<path d="M90 160 Q84 70 150 68 Q216 70 210 160 Q216 230 196 268 L188 180 Q190 102 150 100 Q110 102 112 180 L104 268 Q84 230 90 160 Z" fill="#a13a1e"/>`
  }),

  irina: () => bust({
    skin: "#f1c9a5", outfit: "#ece5d3", outfit2: "#c9a23c", browTilt: 0,
    hair: `<path d="M150 60 Q230 70 224 170 Q222 220 206 246 L198 168 Q200 96 150 94 Q100 96 102 168 L94 246 Q78 220 76 170 Q70 70 150 60 Z" fill="#ece5d3"/>
      <path d="M108 132 Q150 92 192 132 Q150 116 108 132 Z" fill="#e2b84e"/>`,
    extraFront: `<circle cx="150" cy="282" r="16" fill="none" stroke="#c9a23c" stroke-width="5"/>
      <circle cx="150" cy="282" r="5" fill="#c9a23c"/>`
  }),

  magda: () => bust({
    skin: "#e3b285", outfit: "#6e4f3a", outfit2: "#caa472", browTilt: 10,
    hair: `<path d="M88 150 Q84 72 150 66 Q216 72 212 150 L218 188 Q224 116 196 88 Q230 96 212 64 Q180 40 150 46 Q120 40 88 64 Q70 96 104 88 Q76 116 82 188 Z" fill="#c75b39"/>
      <path d="M120 232 Q150 244 180 232 L186 268 Q150 282 114 268 Z" fill="#c75b39"/>`,
    extraFront: `<path d="M116 178 Q124 184 132 178" stroke="rgba(0,0,0,.25)" stroke-width="3" fill="none"/>
      <path d="M168 178 Q176 184 184 178" stroke="rgba(0,0,0,.25)" stroke-width="3" fill="none"/>`
  }),

  morgantha: () => bust({
    skin: "#8aa06a", outfit: "#2c2330", outfit2: "#4a3a52", browTilt: 18, eyeColor: "#d8c12c",
    mouthColor: "#3c2330", hunch: true,
    hair: `<path d="M86 150 Q70 50 150 58 Q230 50 214 150 Q230 240 208 290 L196 170 Q204 92 150 90 Q96 92 104 170 L92 290 Q70 240 86 150 Z" fill="#d9d4ce"/>`,
    extraFront: `
      <path d="M150 158 L132 200 L156 196 Z" fill="#75895a"/>
      <circle cx="138" cy="194" r="3.5" fill="#5d7045"/>
      <ellipse class="mouth" cx="150" cy="212" rx="17" ry="7" fill="#3c2330"/>
      <path d="M138 208 L142 218 L146 208 Z" fill="#e8e3c9"/>
      <path d="M158 208 L162 218 L166 208 Z" fill="#e8e3c9"/>`
  }),

  trygve: () => `
  <svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="60" width="160" height="300" rx="6" fill="#c89a5f" stroke="#8a6534" stroke-width="6"/>
    <rect x="86" y="80" width="128" height="260" fill="none" stroke="#a87f44" stroke-width="3" stroke-dasharray="10 8"/>
    <circle cx="125" cy="170" r="9" fill="#4a3214"/>
    <circle cx="175" cy="170" r="9" fill="#4a3214"/>
    <ellipse class="mouth" cx="150" cy="220" rx="20" ry="5" fill="#4a3214"/>
    <text x="150" y="320" text-anchor="middle" font-size="22" font-weight="bold" fill="#6b4a1d" font-family="sans-serif">TRYGVE</text>
  </svg>`
};

// ---------- backgrounds ----------
function courtroomWall(tone) {
  return `
    <rect width="800" height="600" fill="${tone}"/>
    <g opacity=".35">
      ${Array.from({length: 10}, (_, i) => `<rect x="${i * 80}" y="0" width="4" height="600" fill="rgba(0,0,0,.5)"/>`).join("")}
    </g>
    <rect y="0" width="800" height="90" fill="rgba(0,0,0,.28)"/>
    <rect y="86" width="800" height="10" fill="rgba(255,220,150,.25)"/>`;
}

const BGS = {
  judge: `<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    ${courtroomWall("#6b4a2f")}
    <rect x="0" y="330" width="800" height="270" fill="#4a3018"/>
    <rect x="0" y="318" width="800" height="16" fill="#2e1d0d"/>
    <rect x="0" y="334" width="800" height="14" fill="#8a6534"/>
    <circle cx="400" cy="445" r="78" fill="#3a2611" stroke="#caa45a" stroke-width="6"/>
    <path d="M400 395 L414 430 L452 430 L422 452 L434 490 L400 466 L366 490 L378 452 L348 430 L386 430 Z" fill="#caa45a"/>
  </svg>`,

  witness: `<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    ${courtroomWall("#7a5638")}
    <rect x="60" y="120" width="140" height="220" rx="8" fill="rgba(40,24,10,.5)"/>
    <rect x="600" y="120" width="140" height="220" rx="8" fill="rgba(40,24,10,.5)"/>
    <rect x="0" y="400" width="800" height="200" fill="#553a1e"/>
    <rect x="0" y="388" width="800" height="16" fill="#2e1d0d"/>
    <rect x="0" y="404" width="800" height="12" fill="#9a7440"/>
    <rect x="250" y="420" width="300" height="180" rx="6" fill="#3f2a12" stroke="#9a7440" stroke-width="5"/>
  </svg>`,

  defense: `<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    ${courtroomWall("#5c4630")}
    <rect x="0" y="410" width="800" height="190" fill="#27355c"/>
    <rect x="0" y="396" width="800" height="18" fill="#16203c"/>
    <rect x="0" y="414" width="800" height="10" fill="#5a6da8"/>
  </svg>`,

  prosecution: `<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    ${courtroomWall("#5c3030")}
    <rect x="0" y="410" width="800" height="190" fill="#56131b"/>
    <rect x="0" y="396" width="800" height="18" fill="#330810"/>
    <rect x="0" y="414" width="800" height="10" fill="#a04450"/>
  </svg>`
};

// ---------- evidence images ----------
const EVIDENCE_IMAGES = {
  ev01: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#fffdf4"/>
    <g stroke="#5a4a36" stroke-width="3" fill="none" stroke-linecap="round">
      <ellipse cx="100" cy="85" rx="42" ry="48"/>
      <path d="M62 70 Q70 38 100 40 Q130 38 138 70 Q126 52 100 54 Q74 52 62 70"/>
      <circle cx="84" cy="86" r="4" fill="#5a4a36"/>
      <circle cx="116" cy="86" r="4" fill="#5a4a36"/>
      <path d="M88 112 Q100 120 112 112"/>
      <path d="M70 130 Q60 170 66 195 M130 130 Q140 170 134 195"/>
      <path d="M72 140 Q100 156 128 140"/>
    </g>
    <text x="100" y="188" text-anchor="middle" font-size="13" fill="#7a6648" font-family="serif" font-style="italic">a young boy</text>
  </svg>`,

  ev02: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#fffdf4"/>
    <g stroke="#5a4a36" stroke-width="3" fill="none" stroke-linecap="round">
      <ellipse cx="100" cy="85" rx="40" ry="46"/>
      <path d="M64 64 Q72 34 100 36 Q128 34 136 64 Q146 100 140 150 M64 64 Q54 100 60 150"/>
      <circle cx="86" cy="86" r="4" fill="#5a4a36"/>
      <circle cx="114" cy="86" r="4" fill="#5a4a36"/>
      <path d="M90 110 Q100 117 110 110"/>
      <path d="M74 134 Q64 170 70 195 M126 134 Q136 170 130 195"/>
      <path d="M76 142 Q100 156 124 142"/>
    </g>
    <text x="100" y="188" text-anchor="middle" font-size="13" fill="#7a6648" font-family="serif" font-style="italic">a young girl</text>
  </svg>`
};
