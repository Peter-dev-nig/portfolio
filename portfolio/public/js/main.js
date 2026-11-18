// ---------- Icons (SVG sprite, used with <use href="#icon-name">) ----------
const STROKE = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

document.body.insertAdjacentHTML(
  "afterbegin",
  `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <symbol id="icon-github" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></symbol>
  <symbol id="icon-linkedin" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></symbol>
  <symbol id="icon-instagram" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></symbol>
  <symbol id="icon-mail" viewBox="0 0 24 24"><g ${STROKE}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></g></symbol>
  <symbol id="icon-external" viewBox="0 0 24 24"><g ${STROKE}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></g></symbol>
  <symbol id="icon-sun" viewBox="0 0 24 24"><g ${STROKE}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></g></symbol>
  <symbol id="icon-moon" viewBox="0 0 24 24"><g ${STROKE}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></g></symbol>
  <symbol id="icon-menu" viewBox="0 0 24 24"><g ${STROKE}><path d="M4 6h16M4 12h16M4 18h16"/></g></symbol>
  <symbol id="icon-close" viewBox="0 0 24 24"><g ${STROKE}><path d="M18 6 6 18M6 6l12 12"/></g></symbol>
  <symbol id="icon-phone" viewBox="0 0 24 24"><g ${STROKE}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></g></symbol>
  <symbol id="icon-globe" viewBox="0 0 24 24"><g ${STROKE}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></g></symbol>
  <symbol id="icon-desktop" viewBox="0 0 24 24"><g ${STROKE}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></g></symbol>
  <symbol id="icon-window" viewBox="0 0 24 24"><g ${STROKE}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M6.5 6.5h.01M9.5 6.5h.01"/></g></symbol>
  <symbol id="icon-layout" viewBox="0 0 24 24"><g ${STROKE}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></g></symbol>
  <symbol id="icon-search" viewBox="0 0 24 24"><g ${STROKE}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></g></symbol>
  <symbol id="icon-copy" viewBox="0 0 24 24"><g ${STROKE}><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></g></symbol>
  <symbol id="icon-arrow" viewBox="0 0 24 24"><g ${STROKE}><path d="M5 12h14M13 6l6 6-6 6"/></g></symbol>
  <symbol id="icon-tool" viewBox="0 0 24 24"><g ${STROKE}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></g></symbol>
</svg>`
);

function iconMarkup(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#icon-${name}"/></svg>`;
}

// ---------- Footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Theme toggle (dark / light) ----------
const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");

function currentTheme() {
  return (
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}

function updateThemeButton() {
  if (!themeBtn) return;
  const dark = currentTheme() === "dark";
  // Show the icon for the mode you would switch to
  themeBtn.innerHTML = iconMarkup(dark ? "sun" : "moon");
  themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    updateThemeButton();
  });
  updateThemeButton();
}

// ---------- Mobile menu ----------
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.innerHTML = iconMarkup("menu");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuBtn.innerHTML = iconMarkup(open ? "close" : "menu");
  });
}

// ---------- Contact form (no redirect) ----------
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (form && statusEl) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.textContent = "Sending...";
    statusEl.className = "";
    statusEl.textContent = "";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      statusEl.textContent = "Thanks! I'll reply soon.";
      statusEl.className = "success";
    } catch (err) {
      statusEl.textContent = "Something went wrong. Please try again or email me directly.";
      statusEl.className = "error";
    } finally {
      btn.disabled = false;
      btn.textContent = "Send message";
    }
  });
}


// ---------- Card spotlight: the glow follows the cursor ----------
if (window.matchMedia("(hover: hover)").matches) {
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest && e.target.closest(".card, .project");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  }, { passive: true });
}

// ---------- Command menu (Ctrl+K or Cmd+K, "/", or the search button) ----------
(function () {
  const nav = document.getElementById("nav-links");
  const actionsBar = document.querySelector(".nav-actions");
  if (!nav || !actionsBar) return;

  const mail = document.querySelector('a[href^="mailto:"]');
  const address = mail ? mail.getAttribute("href").replace("mailto:", "") : "";

  // The extra options that open up under "Go to Contact"
  function contactOptions() {
    const kids = [];
    if (mail) {
      kids.push({ label: "Send an email", hint: address, icon: "mail", run: () => { location.href = mail.href; } });
      kids.push({ label: "Copy email address", hint: "Copy", icon: "copy", keepOpen: true, run: (it, li) => {
        const done = () => { li.querySelector(".cmd-hint").textContent = "Copied"; setTimeout(close, 700); };
        try { navigator.clipboard.writeText(address).then(done, done); } catch (e) { done(); }
      } });
    }
    const seen = new Set();
    document.querySelectorAll(".social a[aria-label]").forEach((a) => {
      const name = a.getAttribute("aria-label");
      if (name === "Email" || seen.has(name)) return;
      seen.add(name);
      kids.push({ label: "Open " + name, hint: "New tab", icon: name.toLowerCase(), run: () => window.open(a.href, "_blank", "noopener") });
    });
    return kids;
  }

  function buildItems() {
    const out = [];
    nav.querySelectorAll("a").forEach((a, n) => {
      const it = { id: "page-" + n, label: "Go to " + a.textContent.trim(), hint: "Page", icon: "arrow", run: () => { location.href = a.href; } };
      if (/contact/i.test(a.getAttribute("href") || "")) it.children = contactOptions();
      out.push(it);
    });
    const dark = (root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
    out.push({ id: "theme", label: dark ? "Switch to light mode" : "Switch to dark mode", hint: "Theme", icon: dark ? "sun" : "moon", run: () => themeBtn && themeBtn.click() });
    return out;
  }

  const overlay = document.createElement("div");
  overlay.className = "cmd";
  overlay.innerHTML =
    '<div class="cmd-panel" role="dialog" aria-modal="true" aria-label="Command menu">' +
    '<input class="cmd-input" type="text" placeholder="Type a command or search…" aria-label="Search commands" aria-controls="cmd-list" autocomplete="off" spellcheck="false" />' +
    '<ul class="cmd-list" id="cmd-list" role="listbox"></ul>' +
    '<div class="cmd-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> to move</span><span><kbd>→</kbd> for options</span><span><kbd>Enter</kbd> to select</span><span><kbd>Esc</kbd> to close</span></div>' +
    "</div>";
  document.body.appendChild(overlay);
  const input = overlay.querySelector(".cmd-input");
  const list = overlay.querySelector(".cmd-list");

  let items = [], rows = [], active = 0, expanded = null, lastFocus = null, collapseTimer = 0;

  const matches = (it, q) => it.label.toLowerCase().includes(q) || it.hint.toLowerCase().includes(q);

  function computeRows() {
    const q = input.value.trim().toLowerCase();
    rows = [];
    items.forEach((it) => {
      const kids = it.children || [];
      if (q) {
        if (matches(it, q)) rows.push({ it: it, depth: 0 });
        kids.forEach((k) => { if (matches(k, q)) rows.push({ it: k, depth: 0 }); });
      } else {
        rows.push({ it: it, depth: 0 });
        if (kids.length && expanded === it.id) kids.forEach((k) => rows.push({ it: k, depth: 1, parent: it }));
      }
    });
  }

  function render(keep) {
    computeRows();
    if (keep) { const at = rows.findIndex((r) => r.it === keep); if (at >= 0) active = at; }
    active = Math.min(active, Math.max(rows.length - 1, 0));
    list.innerHTML = "";
    if (!rows.length) { list.innerHTML = '<li class="cmd-empty">No results. Try "projects" or "github".</li>'; return; }
    const searching = !!input.value.trim();
    rows.forEach((r, i) => {
      const li = document.createElement("li");
      li.className = "cmd-item" + (r.depth ? " sub" : ""); li.id = "cmd-" + i; li.setAttribute("role", "option");
      li.setAttribute("aria-selected", String(i === active));
      li.innerHTML = iconMarkup(r.it.icon) + "<span></span><span class=\"cmd-hint\"></span>";
      li.children[1].textContent = r.it.label;
      li.querySelector(".cmd-hint").textContent = r.it.hint;
      if (r.it.children && !searching) {
        const b = document.createElement("button");
        b.type = "button"; b.className = "cmd-chev"; b.tabIndex = -1;
        b.setAttribute("aria-label", "Show contact options"); b.setAttribute("aria-expanded", String(expanded === r.it.id));
        b.innerHTML = iconMarkup("arrow");
        b.addEventListener("click", (e) => {
          e.stopPropagation();
          expanded = expanded === r.it.id ? null : r.it.id;
          render(r.it);
        });
        li.appendChild(b);
      }
      li.addEventListener("click", () => choose(i));
      li.addEventListener("pointermove", () => {
        if (active !== i) { active = i; mark(); }
        if (searching) return;
        // Hovering "Go to Contact" opens its options; hovering a different page closes them
        const target = r.depth ? r.parent.id : (r.it.children ? r.it.id : null);
        clearTimeout(collapseTimer);
        if (target === expanded) return;
        if (target) { expanded = target; render(r.it); }
        else if (expanded) collapseTimer = setTimeout(() => { expanded = null; render(r.it); }, 180);
      });
      list.appendChild(li);
    });
    input.setAttribute("aria-activedescendant", "cmd-" + active);
  }

  function mark() {
    [].forEach.call(list.children, (li, i) => li.setAttribute("aria-selected", String(i === active)));
    input.setAttribute("aria-activedescendant", "cmd-" + active);
    const el = list.children[active]; if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
  }
  function choose(i) {
    const r = rows[i]; if (!r) return;
    if (!r.it.keepOpen) close();
    r.it.run(r.it, list.children[i]);
  }
  function open() {
    items = buildItems(); input.value = ""; active = 0; expanded = null; render();
    lastFocus = document.activeElement;
    overlay.classList.add("open");
    input.focus();
  }
  function close() {
    clearTimeout(collapseTimer);
    overlay.classList.remove("open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  const isOpen = () => overlay.classList.contains("open");

  input.addEventListener("input", () => { active = 0; render(); });
  overlay.addEventListener("pointerdown", (e) => { if (e.target === overlay) close(); });
  overlay.addEventListener("keydown", (e) => {
    const r = rows[active];
    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); if (rows.length) { active = (active + 1) % rows.length; mark(); } }
    else if (e.key === "ArrowUp") { e.preventDefault(); if (rows.length) { active = (active - 1 + rows.length) % rows.length; mark(); } }
    else if (e.key === "ArrowRight" && r && r.it.children && !input.value.trim()) {
      e.preventDefault();
      if (expanded !== r.it.id) { expanded = r.it.id; render(r.it); }
      else if (rows[active + 1]) { active += 1; mark(); }
    }
    else if (e.key === "ArrowLeft" && r && !input.value.trim() && expanded) {
      if (r.depth) { e.preventDefault(); const parent = r.parent; expanded = null; render(parent); }
      else if (r.it.id === expanded) { e.preventDefault(); expanded = null; render(r.it); }
    }
    else if (e.key === "Enter") { e.preventDefault(); choose(active); }
    else if (e.key === "Tab") { e.preventDefault(); }
  });
  document.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && k === "k") { e.preventDefault(); isOpen() ? close() : open(); }
    else if (k === "/" && !isOpen() && !/^(input|textarea|select)$/i.test((e.target.tagName || ""))) { e.preventDefault(); open(); }
  });

  const btn = document.createElement("button");
  btn.type = "button"; btn.id = "cmd-btn"; btn.className = "icon-btn";
  btn.setAttribute("aria-label", "Open command menu"); btn.title = "Command menu (Ctrl K)";
  btn.innerHTML = iconMarkup("search");
  btn.addEventListener("click", open);
  actionsBar.insertBefore(btn, actionsBar.firstChild);
})();

// ---------- Scroll progress bar ----------
(function () {
  if (document.querySelector(".landing-page")) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const bar = document.createElement("div");
  bar.className = "progress"; bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty("--p", max > 0 ? Math.min(window.scrollY / max, 1).toFixed(4) : 0);
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// ---------- Scroll reveal (only for things below the fold) ----------
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const targets = document.querySelectorAll("main .section-head, main .card, main .project, main .cta");
  if (!targets.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("in");
      io.unobserve(el);
      setTimeout(() => { el.classList.remove("reveal", "in"); el.style.removeProperty("--rd"); }, 1100);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.setProperty("--rd", Math.min(Math.max(idx, 0), 5) * 0.08 + "s");
    el.classList.add("reveal");
    io.observe(el);
  });
})();
