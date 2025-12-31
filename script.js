// Highlight active nav links
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("a").forEach(a => {
  if (a.getAttribute("href") === currentPage) {
    a.classList.add("active");
  }
});

// Desktop-only nav collapse behavior and general menu handling
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector("nav");

  // Ensure menu starts closed
  document.body.classList.remove("menu-open");

  function isDesktop() {
    return window.matchMedia('(min-width: 1025px)').matches;
  }

  // Toggle menu when three-dot button is clicked (both mobile and desktop)
  if (menuButton) {
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      document.body.classList.toggle("menu-open");
    });
  }

  // Collapse nav when clicking outside — desktop only
  document.addEventListener("click", (e) => {
    if (!isDesktop()) return;
    if (!document.body.classList.contains("menu-open")) return;
    if (nav && nav.contains(e.target)) return;
    if (menuButton && menuButton.contains(e.target)) return;
    document.body.classList.remove("menu-open");
  });

  // Close after clicking a link (keeps mobile behavior intact)
  document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
    });
  });

  // Close on Escape key (desktop only)
  document.addEventListener("keydown", (e) => {
    if (isDesktop() && e.key === "Escape") {
      document.body.classList.remove("menu-open");
    }
  });
});

// (Duplicate desktop handlers removed — handled inside DOMContentLoaded above)
