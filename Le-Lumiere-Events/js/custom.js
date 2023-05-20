
$(document).ready(function(){
 
  new WOW().init(

  );
  
 
 });
 
/* Set navigation */

function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");

  // document.getElementById("mySidenav").style.width = "80%";
  // document.getElementById("nav-res").style.opacity = "1";
  // document.getElementById("cd-shadow-layer").style.display = "block";
  
}

function closeNav() {
  // document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("nav-res").style.opacity = "0";
  // document.getElementById("cd-shadow-layer").style.display = "none";  

  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
} 

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


$(document).ready(function(){ 
  $(".cd-shadow-layer").click(function(){
    closeNav(); 
  });
});

/* end of navigation */


$('#owl-carousel1').owlCarousel({
  loop:true,
  margin: 0,
  nav:false,
  dots: false,
  // animateIn: 'fadeIn',
  // animateOut: 'fadeOut',
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:8
      }
  }
})

$('#owl-carousel2').owlCarousel({
  loop:true,
  margin: 0,
  nav:false,
  dots: false,
  // animateIn: 'fadeIn',
  // animateOut: 'fadeOut',
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:8
      }
  }
})


$('#owl-testimonial').owlCarousel({
  loop:true,
  margin: 10,
  nav:true,
  navText: ['<span class="span-roundcircle left-roundcircle"><img src="images/icon/left-arrow.png" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="images/icon/right-arrow.png" class="right_arrow_icon" alt="arrow" /></span>'],
  dots: false,
  // animateIn: 'fadeIn',
  // animateOut: 'fadeOut',
  smartSpeed:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})
$('.owl-carousel').owlCarousel({
  loop:true,
  margin: 10,
  nav:true,
  navText: ['<span class="span-roundcircle left-roundcircle"><img src="images/icon/left-arrow.svg" class="left_arrow_icon" alt="arrow" /></span>','<span class="span-roundcircle right-roundcircle"><img src="images/icon/right-arrow.svg" class="right_arrow_icon" alt="arrow" /></span>'],
  dots: false,
  // animateIn: 'fadeIn',
  // animateOut: 'fadeOut',
  smartSpeed:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})






$(document).ready(function(){
	
 

  $("#toggle-read").click(function() {
    var elem = $("#toggle-read").text();
    if (elem == "Read More...") {
      $("#toggle-read").text("Read Less");
      $("#text_hide_show").show();
    } else {
      $("#toggle-read").text("Read More...");
      $("#text_hide_show").hide();
    }
  });

  // ===== Scroll to Top ==== 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });

 
});


$(window).scroll(function(){
  var sticky = $('.header-div'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});




// $(window).scroll(function(){
//   var sticky = $('.slide-bar-mobile'),
//       scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');
// });


(function($) {
  var $window = $(window),
      $html = $('.sidebar');

  function resize() {
      if ($window.width() < 514) {
          return $html.addClass('slide-bar-mobile');
      }

      $html.removeClass('slide-bar-mobile');
  }

  $window
      .resize(resize)
      .trigger('resize');
})(jQuery);


$('a').click(function() {
  $('.btn-collapse').addClass("collapsed");
  $('.collapse').removeClass("show");
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body ').animate({
        scrollTop: $(hash).offset().top - 100
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)

        // window.location.hash = hash;
      });
    } // End if
  });
});
