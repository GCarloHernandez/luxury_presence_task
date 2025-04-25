document.addEventListener("DOMContentLoaded", function () {
  // SPLIDE SETUP
  var main = new Splide("#main-slider", {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: true,
    cover: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
  });

  var thumbnails = new Splide("#thumbnail-slider", {
    rewind: true,
    fixedWidth: 140,
    fixedHeight: 100,
    isNavigation: true,
    focus: "start",
    pagination: false,
    cover: true,
    arrows: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints: {
      640: {
        fixedWidth: 66,
        fixedHeight: 38,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();

  // HAMBURGER MENU
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navDiv = document.querySelector('.nav-links-div');

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navDiv.classList.toggle('active'); 
  });
  
  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!navDiv.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      navDiv.classList.remove('active');
    }
  });
  
  // Ensure the menu is closed on page load for mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      navDiv.classList.remove('active');  // Remove active class when window width > 900px
      navDiv.style.display = 'flex';  // Ensure it is displayed normally
    } else {
      navDiv.style.display = 'none';  // Ensure the nav is hidden if less than 900px
    }
  });
  // AOS INIT
  AOS.init({
    duration: 500,
    once: false,
  });
});