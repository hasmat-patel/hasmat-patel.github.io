$('#product_box').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    margin:0,
    nav:false,
    dots:false,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3
        },
        1000:{
            items:4,
        },
        1024:{
            items:5
        }
    }

});

$('#new-arrivals-slider').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    margin:15,
    dots:false,
    nav: true,
    navText: ['<span class="span-roundcircle left-roundcircle"><i class="flaticon-back left_icon custom_icon"></i></span>','<span class="span-roundcircle right-roundcircle"><i class="flaticon-next right_icon custom_icon"></i></span>'],
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3
        },
        1000:{
            items:4,
        }
    }
});

$('#testimonials-slider').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    margin:15,
    dots:true,
    nav: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1
        },
        1000:{
            items:1,
        }
    }
});

