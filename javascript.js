document.addEventListener("DOMContentLoaded", function () {
  /*=================== toggle icon navbar ===================*/
  let menuIcon = document.querySelector("#hamburger-menu");
  let navbar = document.querySelector(".navbar-nav");

  menuIcon.onclick = () => {
    navbar.classList.toggle("active");
  };
});

/*=================== ScrollReveal animations ===================*/
ScrollReveal().reveal(".hero .content, .about .content, .menu .content, .contact .content", {
  origin: "top",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".about .about-img, .menu .menu-card, .contact form", {
  origin: "bottom",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".hero h1, .about .about-img", {
  origin: "left",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".hero p, .about .content p", {
  origin: "right",
  distance: "80px",
  duration: 2000,
  delay: 200,
});