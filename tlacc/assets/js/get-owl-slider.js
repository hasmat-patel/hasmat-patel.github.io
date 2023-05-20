$('#owl-sponsors').owlCarousel({
    loop:true,
    nav:false,
    navText: ['<span class="span-roundcircle left-roundcircle"><i class="left-arrow"></span>','<span class="span-roundcircle right-roundcircle"><i class="right-arrow"></span>'],
    dots: false,
    stagePadding: 0,
    margin:0,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:2000,
    responsive:{
        0:{
            items:2,
            dots: true,
            nav:false,
            mouseDrag: true,
            loop:true,
        },
        600:{
            items:3
        },
        1200:{
            items:4
        }
   }
});