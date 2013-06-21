$(document).ready(function(){

    $(".btnInfo").click(function() {
        $('.btnInfo, #info').toggleClass("active");
    });

    $(".btnNav").click(function() {
        $('.btnNav, #menu, nav').toggleClass("active");
    });


    /** Navigation **/
    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'fast');
    }

    $("a.menuItem").click(function() {
        /*scrollToAnchor('anchorVentilator');*/
        $('.btnNav, #menu, nav').toggleClass("active");
    });

});

$(window).on('load scroll resize' ,function () {
    $(".items header").each(function () {
        if($(this).inSight(-50)) {
            $(this).addClass('dim');
        }
        else $(this).removeClass('dim');
    });
});


$(function() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();

        var navHeight = $('nav').outerHeight(true);
        var element = $($(this).attr('href'));

        $('body').scrollTop(element.offset().top - navHeight);
    });
});

