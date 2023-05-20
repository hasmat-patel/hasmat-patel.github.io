$(".owl-carousel-banner").owlCarousel({
  loop: true,
  smartSpeed: 2000,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  dots: true,
  nav: false,
  responsiveClass: true,
  navText: [
    "<i class='fe fe-chevron-left'></i>",
    "<i class='fe fe-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    768: {
      items: 1,
      dots: true,
    },

    1000: {
      items: 1,
      dots: true,
    },
    1025: {
      items: 1,
      dots: true,
    },
  },
});

$(".owl-carousel-shop").owlCarousel({
  loop: true,
  smartSpeed: 2000,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  responsiveClass: true,
  navText: [
    "<i class='fe fe-chevron-left'></i>",
    "<i class='fe fe-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
    },
    1025: {
      items: 3,
      nav: true,
    },
  },
});

$(".owl-carousel-gallery").owlCarousel({
  loop: true,
  margin: 10,
  smartSpeed: 2000,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  responsiveClass: true,
  navText: [
    "<i class='fe fe-chevron-left'></i>",
    "<i class='fe fe-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
    },
    1025: {
      items: 1,
      nav: true,
    },
  },
});
