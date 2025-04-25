document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-slider", {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
    autoplay: true, // 👈 Enable autoplay
    interval: 3000, // 👈 3 seconds per slide (optional)
    pauseOnHover: true, // 👈 Pause on mouse hover (optional)
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
});
