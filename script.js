const links = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

const link = document.querySelectorAll("div ul li a");
const currentPag = window.location.pathname.split("/").pop();

link.forEach(link => {
    if (link.getAttribute("href") === currentPag) {
        link.classList.add("active");
    }
});

// Collapse/expand behavior for the right-side nav
const menuToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

function collapseNav() {
    document.body.classList.add('nav-collapsed');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    if (nav) nav.setAttribute('aria-hidden', 'true');
}

function expandNav() {
    document.body.classList.remove('nav-collapsed');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    if (nav) nav.setAttribute('aria-hidden', 'false');
}

// Start with nav collapsed (don't open automatically)
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('nav-collapsed');
    if (nav) nav.setAttribute('aria-hidden', 'true');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
});

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (document.body.classList.contains('nav-collapsed')) expandNav();
        else collapseNav();
    });
}

// Close on Escape (collapse the nav)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.body.classList.contains('nav-collapsed')) {
        collapseNav();
    }
});

// Collapse when clicking outside the nav
document.addEventListener('click', (e) => {
    if (document.body.classList.contains('nav-collapsed')) return; // already collapsed
    const target = e.target;
    if (nav && nav.contains(target)) return; // click inside nav
    if (menuToggle && menuToggle.contains(target)) return; // click on toggle
    collapseNav();
});

// Collapse after following a nav link (optional UX)
document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', () => {
        collapseNav();
    });
});