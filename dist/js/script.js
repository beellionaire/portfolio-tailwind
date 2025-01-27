// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");


hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu && e.target) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function() {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = 'dark'
  } else {
    html.classList.remove("dark");
    localStorage.theme = 'light'
  }
})


// Toggle Based Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}