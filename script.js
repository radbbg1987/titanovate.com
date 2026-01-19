// Theme toggle
const themeBtn = document.querySelector("[data-toggle-theme]");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("titanovate_theme", next);
  });

  const saved = localStorage.getItem("titanovate_theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
}

// Accordion (Pricing FAQ)
document.querySelectorAll(".accordion-header").forEach(h => {
  h.addEventListener("click", () => h.parentElement.classList.toggle("active"));
});

// Risk helper referenced by risk.html
function showTierResult(score) {
  const el = document.getElementById("tierResult");
  if (!el) return;

  let tier = "Tier 1 — Steady";
  if (score >= 66) tier = "Tier 3 — Advanced";
  else if (score >= 33) tier = "Tier 2 — Accelerated";
  el.textContent = `Result: ${tier}`;
}
