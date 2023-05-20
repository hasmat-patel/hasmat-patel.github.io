$(document).ready(function () {
  $("#product-slider-owl").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<i class='fe fe-chevron-left'></i>",
      "<i class='fe fe-chevron-right'></i>",
    ],
    items: 1,
    margin: 0,
    stagePadding: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    scrollPerPage: true,
    vertical: true,
    themeClass: "owl-theme",
    baseClass: "owl-carousel",
    itemClass: "owl-item owl-item-product",
    dotClass: "owl-dot owl-dot-product",
    dotsClass: "owl-dots",
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        touchDrag: false,
      },
      768: {
        items: 1,
        touchDrag: false,
        mouseDrag: false,
      },
      1025: {
        items: 1,
        nav: true,
      },
    },
  });

  dotcount = 1;

  jQuery(".owl-dot-product").each(function () {
    jQuery(this).addClass("dotnumber" + dotcount);
    jQuery(this).attr("data-info", dotcount);
    dotcount = dotcount + 1;
  });

  slidecount = 1;

  jQuery(".owl-item-product")
    .not(".cloned")
    .each(function () {
      jQuery(this).addClass("slidenumber" + slidecount);
      slidecount = slidecount + 1;
    });

  jQuery(".owl-dot-product").each(function () {
    grab = jQuery(this).data("info");
    slidegrab = jQuery(".slidenumber" + grab + " img").attr("src");
    jQuery(this).css("background-image", "url(" + slidegrab + ")");
  });

  $(".owl-carousel-product .owl-dots").niceScroll({
    cursorborder: "",
    cursorcolor: "#0281c2",
    boxzoom: false,
  });

  $(".zoom-image").zoom({ on: "click" });
});
