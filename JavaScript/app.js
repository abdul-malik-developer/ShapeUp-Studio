let menu = document.querySelector("#mobile-menu");
let menuLinks = document.querySelector(".navbar__menu");
let navLogo = document.querySelector(".navbar__logo");
let body = document.querySelector("body");

// Display Mobil Menu

const mobilMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active-body");
};

menu.addEventListener("click", mobilMenu);

// Når man trykker på menu = #mobil-menu, så kjøres function mobilMenu som aktiverer diverse classer.

// Animations

gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero", {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});

gsap.from(".animate-services", {
  duration: 0.6,
  opacity: 0,
  x: -150,
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".animate-services",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});

gsap.from(".animate-img", {
  duration: 1.2,
  opacity: 0,
  x: -200,
  scrollTrigger: {
    trigger: ".animate-img",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});

gsap.from(".animate-membership", {
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".animate-membership",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from(".animate-card", {
    duration: 1,
    opacity: 0,
    y: 150,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".animate-card",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });
  
