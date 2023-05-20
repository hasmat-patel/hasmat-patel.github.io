/* Set navigation */

function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed");
  $("body").addClass("overflow-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".wrapper").removeClass("position-fixed");
  $("body").removeClass("overflow-fixed");
} 


$(document).ready(function(){ 

  $(".cd-shadow-layer").click(function(){
    closeNav(); 
  });

  $('[data-toggle="tooltip"]').tooltip();

  /* Dropdown hover */
  const $dropdown = $(".nav .dropdown");
  const $dropdownToggle = $(".nav .dropdown-toggle");
  const $dropdownMenu = $(".nav .dropdown-menu");
  const showClass = "show";
  
  $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function() {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });
  /* End of Dropdown hover */

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        
        $('.return-to-top').addClass("display_show");    
    } else {
        $('.return-to-top').removeClass("display_show");   
    }
  });

  $('#back-to-top').click(function() {    
    $('body,html').animate({
        scrollTop : 0                       
    }, 300);
  });

  $(window).scroll(function(){
    var sticky = $('.header-div'),
        scroll = $(window).scrollTop();
  
      if (scroll >= 200) sticky.addClass('header-bgcolor');
      else sticky.removeClass('header-bgcolor');

  });

 
  /*

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
  */

});