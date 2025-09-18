// Minimal site JS: mobile nav + smooth scroll + accessibility helpers
(function () {
  "use strict";

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const expanded = siteNav.getAttribute("data-open") === "true";
      siteNav.setAttribute("data-open", !expanded);
      siteNav.style.display = expanded ? "none" : "flex";
    });

    // ensure initial state on small screens
    if (window.innerWidth < 900) {
      siteNav.style.display = "none";
      siteNav.setAttribute("data-open", "false");
    }
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // update focus for accessibility
        el.setAttribute("tabindex", "-1");
        el.focus();
      }
    });
  });

  // Lightweight performance hint: add rel=preconnect to popular domains if needed (deferred)
})();
