/* Landing page: letters react to the cursor, plus a spotlight and parallax.
   The drop animation itself is pure CSS (css/landing.css). */
(function () {
  "use strict";
  var page = document.querySelector(".landing-page");
  var word = document.querySelector(".wordmark");
  if (!page || !word) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var chars = [].slice.call(word.querySelectorAll(".ch"));
  var last = chars[chars.length - 1];
  var n = chars.length;

  var cur = [], shown = [], centers = [];
  for (var i = 0; i < n; i++) { cur.push(0); shown.push(0); centers.push({ x: 0, y: 0 }); }

  var mx = 0, my = 0, pointerActive = false;
  var ready = false, radius = 200;
  var sweepStart = 0, sweeping = false;
  var raf = 0, touchTimer = 0;

  function measure() {
    for (var i = 0; i < n; i++) {
      var r = chars[i].getBoundingClientRect();
      centers[i].x = r.left + r.width / 2;
      centers[i].y = r.top + r.height / 2;
    }
    radius = parseFloat(getComputedStyle(word).fontSize) * 1.7;
  }

  function start() { if (!raf) raf = requestAnimationFrame(frame); }

  function frame(t) {
    raf = 0;
    var moving = false;
    var sweepPos = -99;
    if (sweeping) {
      var k = (t - sweepStart) / 1200;
      if (k >= 1) sweeping = false; else sweepPos = -2 + k * (n + 4);
    }
    for (var i = 0; i < n; i++) {
      var target = 0;
      if (ready && pointerActive) {
        var dx = mx - centers[i].x, dy = my - centers[i].y;
        var f = 1 - Math.sqrt(dx * dx + dy * dy) / radius;
        if (f > 0) target = f * f * (3 - 2 * f);
      }
      if (sweeping) {
        var s = 1 - Math.abs(i - sweepPos) / 3;
        if (s > 0) target = Math.max(target, s * s * 0.85);
      }
      cur[i] += (target - cur[i]) * 0.18;
      if (Math.abs(target - cur[i]) < 0.003) cur[i] = target; else moving = true;
      if (Math.abs(cur[i] - shown[i]) > 0.002) {
        shown[i] = cur[i];
        chars[i].style.setProperty("--p", cur[i].toFixed(3));
      }
    }
    if (moving || sweeping) start();
  }

  function onReady() {
    measure();
    ready = true;
    sweeping = true;
    sweepStart = performance.now();
    start();
  }

  function waitForIntro() {
    ready = false;
    function done(e) {
      if (e.target !== last) return;
      last.removeEventListener("animationend", done);
      onReady();
    }
    last.addEventListener("animationend", done);
  }

  /* Pointer: spotlight, parallax and letter proximity */
  function setPointer(e) {
    mx = e.clientX; my = e.clientY;
    pointerActive = true;
    page.classList.add("pointer-on");
    page.style.setProperty("--px", ((mx / window.innerWidth - 0.5) * 2).toFixed(3));
    page.style.setProperty("--py", ((my / window.innerHeight - 0.5) * 2).toFixed(3));
    var spot = page.querySelector(".landing-spot");
    spot.style.setProperty("--mx", mx + "px");
    spot.style.setProperty("--my", my + "px");
    start();
  }
  function clearPointer() {
    pointerActive = false;
    page.classList.remove("pointer-on");
    page.style.setProperty("--px", 0);
    page.style.setProperty("--py", 0);
    start();
  }

  window.addEventListener("pointermove", function (e) {
    clearTimeout(touchTimer);
    setPointer(e);
  }, { passive: true });
  window.addEventListener("pointerdown", function (e) {
    clearTimeout(touchTimer);
    setPointer(e);
  }, { passive: true });
  window.addEventListener("pointerup", function (e) {
    if (e.pointerType !== "mouse") touchTimer = setTimeout(clearPointer, 500);
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", clearPointer);
  window.addEventListener("blur", clearPointer);

  window.addEventListener("resize", function () { if (ready) measure(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { if (ready) measure(); });
  }

  /* Click or tap the name to replay the intro */
  word.addEventListener("click", function () {
    if (!ready) return;
    ready = false; sweeping = false;
    for (var i = 0; i < n; i++) { cur[i] = 0; shown[i] = 0; chars[i].style.removeProperty("--p"); }
    page.classList.add("stop");
    void page.offsetWidth;
    page.classList.remove("stop");
    waitForIntro();
  });

  waitForIntro();
})();
