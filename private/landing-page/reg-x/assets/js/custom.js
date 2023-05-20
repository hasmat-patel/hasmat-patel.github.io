/* Set navigation */

function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".wrapper").removeClass("position-fixed");
} 


$(document).ready(function(){ 

  $(".cd-shadow-layer").click(function(){
    closeNav(); 
  });

  Waves.attach('.btn', ['waves-effect']);

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        
        $('.return-to-top').addClass("display_show");    
    } else {
        $('.return-to-top').removeClass("display_show");   
    }
  });

  $('.return-to-top').click(function() {    
    $('body,html').animate({
        scrollTop : 0                       
    }, 1000);
  });


  'use strict';
  
  var c, currentScrollTop = 0,
   navbar = $('.header-div');
 
   
    $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();
    
    currentScrollTop = a;
    
    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
      navbar.removeClass("header-bgcolor");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
      navbar.addClass("header-bgcolor");
    }
    c = currentScrollTop;

    if (a <= 150) navbar.removeClass('header-bgcolor');
    
  });
  

  /* accordian */
  
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
  
  /* End of accordian */

  /* read more */

  $('.moreless-button').click(function() {
    // $('.moretext').slideToggle();
    $('.moretext').toggleClass("moretext-show");
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });


  /* end of read more */

});


/* end of navigation */