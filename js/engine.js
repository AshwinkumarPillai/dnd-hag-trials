/* ============ ENGINE ============ */
(() => {
  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);
  const stage = $("stage"), bgEl = $("bg"), spriteLayer = $("sprite-layer");
  const dialogue = $("dialogue"), nameplate = $("nameplate"), textEl = $("text");
  const qchip = $("qchip"), advance = $("advance");
  const bannerEl = $("banner"), bannerText = $("banner-text");
  const objectionEl = $("objection"), objectionText = $("objection-text");
  const evPopup = $("evidence-popup");
  const verdictEl = $("verdict"), verdictTarget = $("verdict-target"), verdictWord = $("verdict-word");
  const recordModal = $("record-modal"), recEvidence = $("rec-evidence"), recChapters = $("rec-chapters");
  const titleScreen = $("title-screen");

  // ---------- sound (synthesized, no assets needed) ----------
  let audioCtx = null, muted = false;
  function ctx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }
  function beep(freq, dur, type = "square", vol = 0.045, when = 0) {
    if (muted) return;
    try {
      const c = ctx(), o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.setValueAtTime(vol, c.currentTime + when);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + when + dur);
      o.connect(g).connect(c.destination);
      o.start(c.currentTime + when); o.stop(c.currentTime + when + dur);
    } catch (e) {}
  }
  function noise(dur, vol = 0.25) {
    if (muted) return;
    try {
      const c = ctx(), len = c.sampleRate * dur;
      const buf = c.createBuffer(1, len, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
      const src = c.createBufferSource(); src.buffer = buf;
      const g = c.createGain(); g.gain.value = vol;
      const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 700;
      src.connect(f).connect(g).connect(c.destination); src.start();
    } catch (e) {}
  }
  const sfx = {
    blip: (who) => beep(who === "judge" ? 260 : who === "morgantha" ? 190 : who === "strahd" ? 220 : 440, 0.04),
    objection: () => { noise(0.35, 0.35); beep(90, 0.3, "sawtooth", 0.12); },
    gavel: () => { noise(0.15, 0.3); beep(120, 0.12, "sine", 0.15); },
    evidence: () => { beep(660, 0.1, "triangle", 0.08); beep(880, 0.12, "triangle", 0.08, 0.09); beep(1100, 0.16, "triangle", 0.08, 0.18); },
    guilty: () => { noise(0.5, 0.4); beep(70, 0.5, "sawtooth", 0.15); },
    notguilty: () => { [523, 659, 784, 1046].forEach((f, i) => beep(f, 0.22, "triangle", 0.09, i * 0.1)); }
  };

  // ---------- build pages (auto-paginate long text) ----------
  const LIMIT = 240;
  function paginate(text) {
    if (text.length <= LIMIT) return [text];
    const parts = text.match(/[^.!?…]+(?:[.!?…]+["')\]]*)?\s*/g) || [text];
    const out = []; let cur = "";
    for (const p of parts) {
      if (cur && (cur + p).length > LIMIT) { out.push(cur.trim()); cur = p; }
      else cur += p;
    }
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  const pages = [], chapters = [];
  SCRIPT.forEach((s) => {
    if (s.chapter) chapters.push({ title: s.chapter, index: pages.length });
    if (s.text) {
      const chunks = paginate(s.text);
      chunks.forEach((t, i) => pages.push(Object.assign({}, s, { text: t, fx: i === 0 ? s.fx : null, banner: i === 0 ? s.banner : null })));
    } else {
      pages.push(s);
    }
  });

  // ---------- state ----------
  let idx = -1;            // current page
  let typing = null;       // typewriter interval
  let busy = false;        // overlay showing (banner/objection auto-phase)
  let started = false;

  // ---------- asset overrides (PNG drop-in) ----------
  const assetCache = {};
  function tryAsset(path, onYes, onNo) {
    if (assetCache[path] !== undefined) return assetCache[path] ? onYes() : onNo();
    const img = new Image();
    img.onload = () => { assetCache[path] = true; onYes(); };
    img.onerror = () => { assetCache[path] = false; onNo(); };
    img.src = path;
  }

  function setBackground(pos) {
    const key = pos || "judge";
    tryAsset(`assets/bg/${key}.png`,
      () => { bgEl.innerHTML = `<img src="assets/bg/${key}.png" alt="">`; },
      () => { bgEl.innerHTML = BGS[key] || BGS.judge; });
  }

  function setSprite(who) {
    if (!who) { spriteLayer.innerHTML = ""; return; }
    tryAsset(`assets/sprites/${who}.png`,
      () => { spriteLayer.innerHTML = `<div class="sprite" id="cur-sprite"><img src="assets/sprites/${who}.png" alt="${who}"></div>`; },
      () => {
        const fn = SPRITES[who];
        spriteLayer.innerHTML = `<div class="sprite" id="cur-sprite">${fn ? fn() : ""}</div>`;
      });
  }

  // ---------- typewriter ----------
  function typeText(page, done) {
    clearInterval(typing);
    textEl.className = page.green ? "green" : "";
    textEl.textContent = "";
    advance.classList.add("hidden");
    const chars = [...page.text];
    let i = 0;
    const sprite = () => document.getElementById("cur-sprite");
    if (sprite()) sprite().classList.add("talking");
    typing = setInterval(() => {
      if (i >= chars.length) {
        clearInterval(typing); typing = null;
        if (sprite()) sprite().classList.remove("talking");
        advance.classList.remove("hidden");
        if (done) done();
        return;
      }
      textEl.textContent += chars[i];
      if (i % 2 === 0 && chars[i] !== " ") sfx.blip(page.who);
      i++;
    }, 18);
  }
  function finishTyping(page) {
    clearInterval(typing); typing = null;
    textEl.textContent = page.text;
    const sprite = document.getElementById("cur-sprite");
    if (sprite) sprite.classList.remove("talking");
    advance.classList.remove("hidden");
  }

  // ---------- evidence record ----------
  function collectedEvidence() {
    const out = [];
    for (let i = 0; i <= idx && i < pages.length; i++) if (pages[i].evidence) out.push(pages[i].evidence);
    return out;
  }

  // ---------- render a page ----------
  function show(i) {
    idx = i;
    const page = pages[idx];
    if (!page) return;

    // reset overlays
    bannerEl.classList.add("hidden");
    objectionEl.classList.add("hidden");
    evPopup.classList.add("hidden");
    verdictEl.classList.add("hidden");
    dialogue.classList.add("hidden");
    busy = false;

    if (page.banner) {
      busy = true;
      bannerText.textContent = page.banner;
      bannerEl.classList.remove("hidden");
      sfx.gavel();
      setTimeout(() => { busy = false; }, 400);
      return;
    }

    if (page.evidence) {
      busy = true;
      $("ev-title").textContent = page.evidence.title;
      $("ev-desc").textContent = page.evidence.desc;
      const id = page.evidence.id;
      tryAsset(`assets/evidence/${id}.png`,
        () => { $("ev-img").innerHTML = `<img src="assets/evidence/${id}.png" alt="">`; },
        () => { $("ev-img").innerHTML = EVIDENCE_IMAGES[id] || ""; });
      evPopup.classList.remove("hidden");
      sfx.evidence();
      setTimeout(() => { busy = false; }, 350);
      return;
    }

    if (page.verdict) {
      busy = true;
      verdictTarget.textContent = page.verdict.target;
      verdictWord.textContent = page.verdict.word;
      verdictWord.className = page.verdict.type || "neutral";
      verdictEl.classList.remove("hidden");
      stage.classList.remove("shake"); void stage.offsetWidth; stage.classList.add("shake");
      if (page.verdict.type === "notguilty") { sfx.notguilty(); confetti(); }
      else if (page.verdict.type === "guilty") sfx.guilty();
      else sfx.gavel();
      setTimeout(() => { busy = false; }, 450);
      return;
    }

    // dialogue page
    const renderDialogue = () => {
      setBackground(page.pos);
      setSprite(page.who);
      nameplate.textContent = page.name || "";
      if (page.q) { qchip.textContent = page.q; qchip.classList.remove("hidden"); }
      else qchip.classList.add("hidden");
      dialogue.classList.remove("hidden");
      typeText(page);
    };

    if (page.fx === "objection") {
      busy = true;
      setBackground(page.pos);
      setSprite(page.who);
      objectionText.textContent = "OBJECTION!";
      objectionEl.classList.remove("hidden");
      stage.classList.remove("shake"); void stage.offsetWidth; stage.classList.add("shake");
      sfx.objection();
      setTimeout(() => {
        objectionEl.classList.add("hidden");
        busy = false;
        renderDialogue();
      }, 1000);
      return;
    }

    renderDialogue();
  }

  // ---------- confetti for NOT GUILTY ----------
  function confetti() {
    const colors = ["#ffd23e", "#fff", "#7ec8ff", "#ff8a00", "#5dff5d"];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "%";
      c.style.background = colors[i % colors.length];
      c.style.animationDuration = 2.2 + Math.random() * 2.5 + "s";
      c.style.animationDelay = Math.random() * 0.8 + "s";
      stage.appendChild(c);
      setTimeout(() => c.remove(), 6000);
    }
  }

  // ---------- advancing ----------
  function next() {
    if (!started || busy) return;
    const page = pages[idx];
    if (typing) { finishTyping(page); return; }
    if (idx + 1 < pages.length) show(idx + 1);
  }

  // ---------- court record ----------
  function openRecord() {
    const evs = collectedEvidence();
    recEvidence.innerHTML = evs.length
      ? evs.map((e) => `<div class="rec-ev">${EVIDENCE_IMAGES[e.id] || ""}<div class="rec-ev-name">${e.title}</div></div>`).join("")
      : `<div class="rec-empty">No evidence presented yet.</div>`;
    recChapters.innerHTML = "";
    chapters.forEach((ch) => {
      const b = document.createElement("button");
      b.textContent = ch.title;
      b.onclick = (ev) => { ev.stopPropagation(); recordModal.classList.add("hidden"); show(ch.index); };
      recChapters.appendChild(b);
    });
    recordModal.classList.remove("hidden");
  }

  // ---------- input ----------
  $("btn-record").addEventListener("click", (e) => { e.stopPropagation(); if (started) openRecord(); });
  $("btn-close-record").addEventListener("click", (e) => { e.stopPropagation(); recordModal.classList.add("hidden"); });
  recordModal.addEventListener("click", (e) => { if (e.target === recordModal) recordModal.classList.add("hidden"); e.stopPropagation(); });
  $("btn-mute").addEventListener("click", (e) => {
    e.stopPropagation();
    muted = !muted;
    $("btn-mute").textContent = muted ? "🔇" : "🔊";
  });

  stage.addEventListener("click", () => {
    if (!started) {
      started = true;
      titleScreen.classList.add("hidden");
      sfx.gavel();
      show(0);
      return;
    }
    if (!recordModal.classList.contains("hidden")) return;
    next();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (!started) { started = true; titleScreen.classList.add("hidden"); sfx.gavel(); show(0); return; }
      if (recordModal.classList.contains("hidden")) next();
    } else if (e.key === "r" || e.key === "R") {
      if (started) recordModal.classList.contains("hidden") ? openRecord() : recordModal.classList.add("hidden");
    } else if (e.key === "m" || e.key === "M") {
      $("btn-mute").click();
    } else if (e.key === "Escape") {
      recordModal.classList.add("hidden");
    }
  });
})();
