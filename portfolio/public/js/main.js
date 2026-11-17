// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Theme toggle (dark / light) ----------
const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");

function currentTheme() {
  return (
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}

function updateThemeIcon() {
  themeBtn.textContent = currentTheme() === "dark" ? "☀️" : "🌙";
}

themeBtn.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateThemeIcon();
});
updateThemeIcon();

// ---------- Mobile menu ----------
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Close the menu after tapping a link
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// ---------- Contact form (no redirect) ----------
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

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