/* right-sticky */

// $(window).resize(function(){

//     if ($('body').width() > 1025) {  
//         alert("hello");
//     }     

// });


$(window).scroll(function() {
    var winHeight = $(this).height();
    var scrollTop = $(this).scrollTop();

    // var sticky = $('#right-side-box'),
    // scroll = $(window).scrollTop();
    
    $(".main-content-div").each(function(index){ 
        var elemHeight = $(this).height();
        var elementTop = $(this).position().top - 500; 

        if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight)
           $(".main-content-div").eq(index).addClass("active");
        else
           $(".main-content-div").eq(index).removeClass("active");

    });
});

$(window).scroll(function(){
    var sticky = $('#right-side-box-main'),
    scroll = $(window).scrollTop() - 750;

    if (scroll >= 376 && $("#right-side-box-main").height() <= $("#left-side-div").height()) sticky.addClass('active');
    else sticky.removeClass('active');
});     

$('#white-collapse1').on('hidden.bs.collapse', function () {
    console.log("hello");
    $("#right-side-box-main").height();
    var height = $("#right-side-box-main").height();
    $("#left-side-div").height(height);
    

})

/* End of right-sticky */

// $(function(){

//     var explore = $('#left-side-div').css("height");
//     // console.log(explore);

//     $( window ).on("resize", function() {
//        explore = $('#left-side-div').css("height");
//     //    console.log(explore);
//     });

// });