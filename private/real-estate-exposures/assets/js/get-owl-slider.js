$(document).ready(function () {
  /* Owl Slider */

  $(".owl-slider-card").owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: false,
    navText: [
      '<span class="span-roundcircle left-roundcircle"><i class="icon icon-59"></i></span>',
      '<span class="span-roundcircle right-roundcircle"><i class="icon icon-60"></i></span>',
    ],
    dots: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1000,
    items: 1,
    singleItem: true,
    autoplay: true,
  });

  $(".testimonial-slider").owlCarousel({
    nav: false,
    mouseDrag: true,
    dots: true,
    stagePadding: 20,
    margin: 0,
    smartSpeed: 1000,
    loop: true,
    singleItem: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 20,
        autoplayTimeout: 3000,
      },
      600: {
        items: 1,
        stagePadding: 0,
        margin: 20,
      },
      1025: {
        items: 1.5,
        stagePadding: 0,
        margin: 20,
      },
      1366: {
        items: 2.1,
        margin: 20,
      },
      1600: {
        items: 2,
        margin: 20,
      },
    },
  });

  // var x = $(".testimonial-slider-div .heading-dv").position();
  // $(".tst-slider-row").css({ width: x.left, left: x.left });

  /* End of Owl Slider */
});

$(".photo-gallery-slider").owlCarousel({
  nav: true,
  navText: [
    '<span class="span-roundcircle left-roundcircle"><i class="icon icon-15"></i></span>',
    '<span class="span-roundcircle right-roundcircle"><i class="icon icon-16"></i></span>',
  ],
  mouseDrag: true,
  dots: true,
  margin: 0,
  smartSpeed: 1000,
  center: false,
  loop: true,
  singleItem: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
      margin: 20,
      autoplayTimeout: 3000,
    },
    600: {
      items: 2,
      margin: 20,
    },
    1025: {
      items: 3,
      margin: 20,
    },
    1600: {
      items: 4,
      margin: 40,
    },
  },
});

$(".squad-image-slider").owlCarousel({
  nav: true,
  navText: [
    '<span class="span-roundcircle left-roundcircle"><i class="icon icon-15"></i></span>',
    '<span class="span-roundcircle right-roundcircle"><i class="icon icon-16"></i></span>',
  ],
  mouseDrag: true,
  dots: true,
  margin: 0,
  smartSpeed: 1000,
  loop: false,
  singleItem: true,
  autoPlay: true,
  stopOnHover: true,
  responsive: {
    0: {
      items: 1,
      margin: 20,
      autoplayTimeout: 3000,
    },
    600: {
      items: 2,
      margin: 20,
    },
    1024: {
      items: 3,
      margin: 20,
    },
    1025: {
      items: 4,
      margin: 15,
    },
    1366: {
      items: 4,
      margin: 20,
    },
    1600: {
      items: 4,
      margin: 25,
    },
  },
});

$(".photo-services-slider").owlCarousel({
  nav: true,
  navText: [
    '<span class="span-roundcircle left-roundcircle"><i class="icon icon-15"></i></span>',
    '<span class="span-roundcircle right-roundcircle"><i class="icon icon-16"></i></span>',
  ],
  mouseDrag: true,
  dots: false,
  margin: 0,
  smartSpeed: 1000,
  center: false,
  loop: true,
  singleItem: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
      margin: 20,
      autoplayTimeout: 3000,
    },
    600: {
      items: 1,
      margin: 20,
    },
    1025: {
      items: 1,
      margin: 20,
    },
    1600: {
      items: 1,
      margin: 40,
    },
  },
});

$(".photo-virtual-staging-slider").owlCarousel({
  nav: false,
  navText: [
    '<span class="span-roundcircle left-roundcircle"><i class="icon icon-15"></i></span>',
    '<span class="span-roundcircle right-roundcircle"><i class="icon icon-16"></i></span>',
  ],
  mouseDrag: true,
  dots: false,
  margin: 0,
  smartSpeed: 1000,
  center: true,
  loop: true,
  singleItem: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1.2,
      margin: 2,
      autoplayTimeout: 3000,
    },
    600: {
      items: 1.2,
      margin: 0,
    },
    1025: {
      items: 1.2,
      margin: 0,
    },
    1600: {
      items: 1.3,
      margin: 5,
    },
  },
});

$(".photo-style-furniture-slider").owlCarousel({
  nav: true,
  navText: [
    '<span class="span-roundcircle left-roundcircle"><i class="icon icon-59"></i></span>',
    '<span class="span-roundcircle right-roundcircle"><i class="icon icon-60"></i></span>',
  ],
  mouseDrag: true,
  dots: false,
  margin: 0,
  smartSpeed: 1000,
  center: false,
  loop: true,
  singleItem: true,
  autoplay: true,
  items: 1,
});

$(".pht-profile-slider-owl").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    '<span class="span-roundcircle left-roundcircle"><i class="icon icon-59"></i></span>',
    '<span class="span-roundcircle right-roundcircle"><i class="icon icon-60"></i></span>',
  ],
  dots: true,
  stagePadding: 0,
  margin: 0,
  smartSpeed: 2000,
  singleItem: true,
  autoplay: true,
  responsiveRefreshRate: 200,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1025: { items: 3 },
    1365: { items: 4 },
  },
});
