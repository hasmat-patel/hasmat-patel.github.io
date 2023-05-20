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


$(document).ready(function(){ 

  $(".cd-shadow-layer").click(function(){
    closeNav(); 
  });

});

/* end of navigation */



$(window).scroll(function(){
  var sticky = $('.header-div'),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed_top');
    else sticky.removeClass('fixed_top');

  });



