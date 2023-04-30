function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed-custom");
  $("body").addClass("overflow-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".wrapper").removeClass("position-fixed-custom");
  $("body").removeClass("overflow-fixed");
}

$(document).ready(function () {
  $(".cd-shadow-layer").click(function () {
    closeNav();
  });

  $(window).scroll(function () {
    var sticky = $(".header-div"),
      scroll = $(window).scrollTop();

    if (scroll >= 190) {
      sticky.addClass("header-sticky");
    } else {
      sticky.removeClass("header-sticky");
    }
  });
});

jQuery(window).on("load resize orientationchange", function () {
  var header_height = jQuery(".header-div").outerHeight();
  var footer_height = jQuery("footer").outerHeight();
  var window_height = jQuery(window).outerHeight();
  var tot_height = window_height - footer_height;

  jQuery(".main-middle-area").css("min-height", tot_height);

  var header_height2 = jQuery(".header-white-div").outerHeight();
  jQuery(".main-middle-area").css("padding-top", header_height2);

  /* Mentee mentor listing */
  var menteeMentorListBxHeight = jQuery(".my-card-bx-with-btn-dv .mm-button-btm-div").outerHeight();
  jQuery(".my-card-bx-with-btn-dv .my-card-bx-body-in").css("padding-bottom", menteeMentorListBxHeight);
  /* End of Mentee mentor listing */
});

/* Slider */
var menu = [];
jQuery(".swiper-home-banner").each(function (index) {
  menu.push(jQuery(this).find(".slide-bg-image").attr("data-text"));
});
var interleaveOffset = 0.5;

var swiper = new Swiper(".swiper-home-banner", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  parallax: true,
  loop: true,
  loopFillGroupWithBlank: false,
  watchSlidesProgress: true,
  effect: "fade",
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  /*
  navigation: {
    nextEl: ".swiper-nextHomeBanner01",
    prevEl: ".swiper-prevHomeBanner01",
  },*/
  on: {
    slideChangeTransitionStart: function () {
      /* animeLetter(); */
    },

    /* For bg image */
    progress: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        /* swiper.slides[i].querySelector(".slide-bg-image").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)"; */
      }
    },

    touchStart: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },

    setTransition: function (speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-bg-image").style.transition =
          speed + "ms";
      }
    },
    /* End of bg image */
  },
});

var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function (indx) {
  if ($(this).attr("data-background")) {
    $(this).css("background-image", "url(" + $(this).data("background") + ")");
  }
});

$("section, div").each(function (indx) {
  if ($(this).attr("data-background")) {
    $(this).css("background-image", "url(" + $(this).data("background") + ")");
  }
});

/* Our Partners */
new Swiper(".swiper-our-partners", {
  loop: false,
  loopFillGroupWithBlank: false,
  watchSlidesProgress: true,
  speed: 3000,
  slidesPerView: 2,
  paginationClickable: false,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".nextOurPartners01",
    prevEl: ".prevOurPartners01",
  },
  breakpoints: {
    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 1000,
    },
    1: {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 1000,
    },
  },
});
/* End of slider */

/* Dashboard */
new Swiper(".slider-dashboard", {
  loop: false,
  speed: 3000,
  slidesPerView: 3,
  paginationClickable: false,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".btn-next-m01",
    prevEl: ".btn-prev-m01",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      speed: 1000,
    },
    1: {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 1000,
    },
  },
});

$('.slider-dashboard').each(function (index, element) {
  var swiperContainer = $(element).children('.swiper-container').get(0);
  var nextEl = $(element).children('.swiper-button-next').get(0);
  var prevEl = $(element).children('.swiper-button-prev').get(0);

  new Swiper(swiperContainer, {
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl,
    },
  });
});
/* End of Dashboard */

/* Range slider*/
$("#js-range-slider").ionRangeSlider({
  min: 0,
  max: 100,
  from: 30,
});

/* End of Range slider*/

/* niceScroll */

$(window).on('load resize orientationchange', function () {
  $(".scroll-call").niceScroll({
    cursorcolor: "#D6D6D6",
    cursoropacitymin: 1,
    cursoropacitymax: 1,
    cursorwidth: "6px",
    cursorborder: "1px solid #D6D6D6",
    cursorborderradius: "5px",
  });

  $("textarea.form-control").niceScroll({
    cursorcolor: "#662d91",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorwidth: "4px",
    cursorborder: "1px solid #662d91",
    cursorborderradius: "10px",
    railpadding: { top: 15, right: 3, left: 0, bottom: 15 },
  });

  $(".scroll-call-hoverShow").niceScroll({
    cursorcolor: "#D6D6D6",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorwidth: "6px",
    cursorborder: "1px solid #D6D6D6",
    cursorborderradius: "5px",
  });

  $(".chat-bx-scroll").niceScroll({
    cursorcolor: "#D6D6D6",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorwidth: "6px",
    cursorborder: "1px solid #D6D6D6",
    cursorborderradius: "5px",
  });

  /* $(".scroll-call-hoverShow").getNiceScroll()[0].show().onResize(); */
});
/* End of niceScroll */

/* Back to top */
(function () {
  var backTop = document.getElementsByClassName("js-cd-top")[0],
    offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 200,
    scrolling = false;

  if (backTop) {
    //update back to top visibility on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkBackToTop, 250)
          : window.requestAnimationFrame(checkBackToTop);
      }
    });

    //smooth scroll to top
    backTop.addEventListener("click", function (event) {
      event.preventDefault();
      !window.requestAnimationFrame
        ? window.scrollTo(0, 0)
        : Util.scrollTo(0, scrollDuration);
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    windowTop > offset
      ? Util.addClass(backTop, "cd-top--is-visible")
      : Util.removeClass(backTop, "cd-top--is-visible cd-top--fade-out");
    windowTop > offsetOpacity && Util.addClass(backTop, "cd-top--fade-out");
    scrolling = false;
  }
})();
/* End of Back to top */

/* Password */
for (let i = 1; i < 10; i++) {
  $("#show_password" + i).on("click", function () {
    var passwordField2 = $("#password" + i);
    var passwordFieldType2 = passwordField2.attr("type");

    if (passwordField2.val() != "") {
      if (passwordFieldType2 == "password") {
        passwordField2.attr("type", "html");
        $(this).html('<i class="icon icon-8 password-hide"></i>');
      } else {
        passwordField2.attr("type", "password");
        $(this).html('<i class="icon icon-9 password-view"></i>');
      }
    }
  });
}
/* End of Password */

$(".form-group .form-control")
  .focus(function () {
    $(this).parent().addClass("focus");
  })
  .blur(function () {
    $(this).parent().removeClass("focus");
  });

/* File */
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
/* End of File */

/* File Upload */
var readURL = function (input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(".profile-pic").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
};

$(".file-upload").on("change", function () {
  readURL(this);
});

$(".upload-button").on("click", function () {
  $(".file-upload").click();
});
/* End of File Upload */

/* Sign up option */
$(".organization-radio").click(function () {
  $("#organization_view_card").addClass("active");
  $("#mentor_view_card").removeClass("active");
});

$(".mentor-radio").click(function () {
  $("#organization_view_card").removeClass("active");
  $("#mentor_view_card").addClass("active");
});
/* End of Sign up option */

/* Video player */
$("#videobtn").click(function () {
  var myModalEl = document.getElementById('videoModal');
  myModalEl.addEventListener('shown.bs.modal', function (event) {
    let player = document.getElementById("video-mentor-dt");
    player.play();
  });

  myModalEl.addEventListener('hide.bs.modal', function (event) {
    let player = document.getElementById("video-mentor-dt");
    player.pause();
  });

});
/* End of Video player */

/* Mentee book session 1 to 1 */
$("#mentee-book-session #book-1to1-type-radio").click(function () {
  $("#bookSession1To1").addClass("active");
  $("#bookSessionManyTo1").removeClass("active");
});

$("#mentee-book-session #book-manyto1-type-radio").click(function () {
  $("#bookSession1To1").removeClass("active");
  $("#bookSessionManyTo1").addClass("active");
});
/* End of mentee book session 1 to 1 */

function datePikerInline() {
  if ($('.datepickerinline').length) {
    $(".datepickerinline").datepicker({
      dateFormat: "MM dd, yy",
      showOtherMonths: true,
      altField: "#viewDate",
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      onSelect: function () {
        var getValue = $('#viewDate').val();
        $('#viewDateh3').text(getValue);
      }
    });

    // var currentDate = $(".datepickerinline").datepicker("getDate");

    var getValue = $('#viewDate').val();
    $('#viewDateh3').text(getValue);

    $(".timerange-header-div .date-prev").on("click", function () {
      var date = $(".datepickerinline").datepicker('getDate');
      date.setDate(date.getDate() - 1)
      $(".datepickerinline").datepicker("setDate", date);

      var getValue = $('#viewDate').val();
      $('#viewDateh3').text(getValue);
    });

    $(".timerange-header-div .date-next").on("click", function () {
      var date = $(".datepickerinline").datepicker('getDate');
      date.setDate(date.getDate() + 1)
      $(".datepickerinline").datepicker("setDate", date);

      var getValue = $('#viewDate').val();
      $('#viewDateh3').text(getValue);
    });
  }
}

datePikerInline();

/* Dixit */
$(document).ready(function () {
  if ($('[data-bs-toggle="tooltip"]').length) {
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  if ($('.uidatepicker').length) {
    $(".uidatepicker").datepicker({
      showOtherMonths: true,
      minDate: 0,
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    });
  }

  if ($('[data-rateyo-rating]').length) {
    $('[data-rateyo-rating]').rateYo({
      starWidth: "40px",
      spacing: "2px",
      normalFill: "#E3E3E3",
      ratedFill: "#FBB613",
      "starSvg": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2223 23.5335L12.2689 18.2434L5.02347 23.75C5.83746 21.0932 6.46683 18.6982 7.32279 16.3871C7.44764 16.1608 7.52442 15.9112 7.54836 15.6538C7.57229 15.3965 7.54287 15.137 7.4619 14.8915C7.38092 14.6461 7.25013 14.42 7.07776 14.2274C6.90538 14.0348 6.69517 13.8798 6.46016 13.7723C4.52167 12.4296 2.694 10.9409 0.5625 9.31458H9.46773L12.1229 0.807058L12.3814 0.75L15.0667 9.28605H23.9619C23.0254 10.0178 22.3322 10.5666 21.6307 11.1037C20.2629 12.1526 18.9151 13.2285 17.5103 14.2254C17.2453 14.3668 17.0473 14.6076 16.9598 14.895C16.8723 15.1823 16.9025 15.4927 17.0437 15.7577C17.8829 18.292 18.6315 20.8532 19.4153 23.4043L19.2223 23.5335Z" /></svg>'
    });
  }
})

/* Organizations participation tabs */
$(".nav-pills-cst .nav-link.active").parent().addClass("active");

$(".nav-pills-cst .nav-link").on('shown.bs.tab', function () {
  if ($(".nav-pills-cst li .nav-link").hasClass("active")) {
    $(this).parent().addClass("active");
  } else {
    $(this).parent().removeClass("active");
  }
});

$(".nav-pills-cst .nav-link").on('hidden.bs.tab', function () {
  if ($(".nav-pills-cst li .nav-link").hasClass("active")) {
    $(this).parent().removeClass("active");
  } else {
    $(this).parent().addClass("active");
  }
});

/* End of organizations participation tabs */

$("#selectDateTimeModal").on('shown.bs.modal', function () {
  setInterval('datePikerInline', 100);
});

/*-------------- keywords Input-------------*/
$(".keywords-container").each(function () {

  var keywordInput = $(this).find(".keyword-input");
  var keywordsList = $(this).find(".keywords-list");

  // adding keyword
  function addKeyword() {
    var $newKeyword = $("<span class='keyword'><span class='keyword-text'>" + keywordInput.val() + "<input name='keywords[]' value='" + keywordInput.val() + "'/></span><span class='keyword-remove'></span></span>");
    keywordsList.append($newKeyword).trigger('resizeContainer');
    keywordInput.val("");
  }

  // add via enter key
  keywordInput.on('keyup', function (e) {
    if ((e.keyCode == 13) && (keywordInput.val() !== "")) {
      addKeyword();
    }
  });

  // add via button
  $('.keyword-input-button').on('click', function () {
    if ((keywordInput.val() !== "")) {
      addKeyword();
    }
  });

  // removing keyword
  $(document).on("click", ".keyword-remove", function () {
    $(this).parent().addClass('keyword-removed');

    function removeFromMarkup() {
      $(".keyword-removed").remove();
    }
    setTimeout(removeFromMarkup, 500);
    keywordsList.css({ 'height': 'auto' }).height();
  });


  // animating container height
  keywordsList.on('resizeContainer', function () {
    var heightnow = $(this).height();
    var heightfull = $(this).css({ 'max-height': 'auto', 'height': 'auto' }).height();

    $(this).css({ 'height': heightnow }).animate({ 'height': heightfull }, 200);
  });

  $(window).on('resize', function () {
    keywordsList.css({ 'height': 'auto' }).height();
  });

  // Auto Height for keywords that are pre-added
  $(window).on('load', function () {
    var keywordCount = $('.keywords-list').children("span").length;

    // Enables scrollbar if more than 3 items
    if (keywordCount > 0) {
      keywordsList.css({ 'height': 'auto' }).height();
    }
  });
});


/* Page Loader */
(function (loader) {
  window.addEventListener("beforeunload", function (e) {
    //activateLoader();
  });

  window.addEventListener("load", function (e) {
    //deactivateLoader();
  });

  $(window).on("load", function (e) {
    deactivateLoader();
  });
  $.ajaxSetup({
    beforeSend: myFunc,
    complete: myCompleteFunc
  });
  function myFunc()
  {
    activateLoader();
  }
  function myCompleteFunc()
  {
    deactivateLoader();
  }

  function activateLoader() {
    loader.style.display = "block";
    loader.style.opacity = 1;
    loader.style.zIndex = 99999;
    loader.classList.add("loader-active");
  }

  function deactivateLoader() {
    deactivate();
    //setTimeout(function () {
    //  deactivate();
    //}, 2000);

    function deactivate() {
      loader.style.opacity = 0;
      loader.style.display = "none";
      loader.style.zIndex = 9999;
      loader.addEventListener(
        "transitionend",
        function () {
          loader.style.display = "none";
        },
        false
        );
      loader.classList.remove("loader-active");
      loader.classList.add("loader-deactivate");
    }
  }
})(document.querySelector(".preloader"));

function activateLoader2() {
  document.querySelector(".preloader").classList.remove("loader-deactivate");
  document.querySelector(".preloader").style.display = "flex";
  document.querySelector(".preloader").style.opacity = 1;
  document.querySelector(".preloader").style.zIndex = 99999;
  document.querySelector(".preloader").classList.add("loader-active");
}
function deactivateLoader2() {
  document.querySelector(".preloader").classList.remove("loader-active");
  document.querySelector(".preloader").style.opacity = 0;
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".preloader").style.zIndex = 9999;
  document.querySelector(".preloader").classList.add("loader-deactivate");
}

/* End of Page Loader */

/* Chat Box */
$(".chat-user-list-row .chat-user-link-bx").click(function () {
  $("#chatbox-message-view").addClass("active");
  $("header, .cd-top").addClass("d-none-mb-tb");
  $(".messages-section").addClass("active");
  $("body").addClass("chat-active");
});
$("#back_to_user_list").click(function () {
  $("#chatbox-message-view").removeClass("active");
  $("header, .cd-top").removeClass("d-none-mb-tb");
  $(".messages-section").removeClass("active");
  $("body").removeClass("chat-active");
});
/* End of Chat Box */

/* textarea auto height */
/*var div = document.querySelector('.textarea-cht-form-dv');
var ta = document.querySelector('.textarea-cht-form-dv textarea.form-control');

ta.addEventListener('keydown', autosize);

function autosize() {
  setTimeout(function () {
    ta.style.cssText = 'height:0px';
    var height = Math.min(20 * 5, ta.scrollHeight);
    div.style.cssText = 'height:' + height + 'px';
    ta.style.cssText = 'height:' + height + 'px';
  }, 0);
}*/
/* End of textarea auto height */