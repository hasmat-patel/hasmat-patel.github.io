$(document).ready(function(){ 
    
    /* tab scroll */

    var scrollEnabled = true;
    var $tabs;
    var scrollEnabled;
    $(function () {

        if (scrollEnabled) {
            $tabs = $('#nav-scroll-container')
                .scrollTabs({
                scrollOptions: {
                    customNavNext: '#n',
                    customNavPrev: '#p',
                    customNavFirst: '#f',
                    customNavLast: '#l',
                    easing: 'swing',
                    enableDebug: false,
                    closable: false,
                    showFirstLastArrows: false,
                    selectTabAfterScroll: true
                }
            });
        }
        else {
            $tabs = $('#nav-scroll-container').tabs();
        }

    });

    /* End of tab scroll */

});