$(document).ready(function () {
  $("#openmenu").click(function () {
    $("#mySidenav2").addClass("width-menu");
    $("#cd-shadow-layer").css("display", "flex");
    $("body").css("position", "relative");
    $("body").css("overflow", "hidden");
    $("body").css("height", "100vh");
    // $(".position-fixed-overlay").addClass("position-show");
    $(".closebtn2").css("position", "fixed");
  });

  $(".closemenu").click(function () {
    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
  });

  $("#opensearch").click(function () {
    $("#myOverlay").css("display", "block");
  });

  $("#closesearch").click(function () {
    $("#myOverlay").css("display", "none");
  });
});

var headertopoption = $(window);
var headTop = $(".navbar-dark");

headertopoption.on("scroll", function () {
  if (headertopoption.scrollTop() > 100) {
    headTop.addClass("fixed-top slideInDown animated");
  } else {
    headTop.removeClass("fixed-top slideInDown animated");
  }
});

// wow

$(document).ready(function () {
  var wow = new WOW({
    mobile: false,
  }).init();

  /// smooth scroll

  $("a.smoth-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 70,
        },
        1500
      );
    e.preventDefault();
  });

  // menu click

  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".nav-link").click(function () {
    $(".navbar-collapse").removeClass("show");

    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
  });

  // readmore

  $("#toggle-read").click(function () {
    var elem = $("#toggle-read").text();
    if (elem === "Read More...") {
      $("#toggle-read").text("Read Less");
      $("#text_hide_show").show();
    } else {
      $("#toggle-read").text("Read More...");
      $("#text_hide_show").hide();
    }
  });

  // our service

  $(".nav-toggle").click(function () {
    $(".nav-toggle").removeClass("active");
    $(".nav-toggle").parent().removeClass("active");
    $(this).addClass("active");
    $(this).parent().addClass("active");
  });
});
