(function(){
  const html = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const dot = document.getElementById("dot");
  const menuBtn = document.getElementById("menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  // Skeleton hide
  window.addEventListener("load", () => {
    const skeleton = document.getElementById("skeleton-layer");
    const content = document.getElementById("content");
    if (skeleton) skeleton.style.display = "none";
    if (content) content.classList.remove("hidden");
  });

  // Saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    if (dot) dot.classList.add("translate-x-6");
  }

  // Toggle theme (guard for pages without the toggle)
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      html.classList.toggle("dark");
      if (dot) dot.classList.toggle("translate-x-6");
      localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
    });
  }

  // Mobile nav
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isHidden = mobileNav.classList.contains("hidden");
      mobileNav.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", String(isHidden));
    });
  }

  // FAQs accordion (no-op on pages without .faq-btn)
  document.querySelectorAll(".faq-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      if (content) content.classList.toggle("hidden");
      const arrow = btn.querySelector("span:last-child");
      if (arrow) arrow.classList.toggle("rotate-180");
    });
  });
})();