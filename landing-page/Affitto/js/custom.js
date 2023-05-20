(function($) {

	"use strict"

	$('#back-to-top').on("click", function() {
		// When arrow is clicked
		$('body,html').animate({
			scrollTop : 0 // Scroll to top of body
		},800);
		return false;
	});
	
	$("#btn-quote-scroll").click(function() {
      $('html, body').animate({
      scrollTop: $("#talk_sales_team").offset().top
     }, 3000);
     return false;
    });
	
	
	$(".link_scroll").click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - 90
		}, 2000);
	});

	
	
	//$('.navbar-nav li a').on("click", function() {
		// When arrow is clicked
		//$('body,html').animate({
		//	scrollTop : 0 // Scroll to top of body
		//},800);
		//return false;
	//});
	
//	$('.down-arrow').on("click", function() {
//		// When arrow is clicked
	//	$('body,html').animate({
	//		offset:-62 // Scroll to top of body
	//	},800);
	//	return false;
	//});
	
	//$(".down-arrow").localScroll({
//		target:"body",duration:1500,offset:-62,easing:"easeInOutExpo";
//	});

	
	
})(jQuery);
// Select all links with hashes
$('a.down-arrow[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-130
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('.header-div').addClass('fixed-header');
    }
    else {
       $('.header-div').removeClass('fixed-header');
    }
	
	
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 


