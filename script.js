$(document).ready(function() {
    
    function scrollToFixedDiv() {
        var offsetTop = $( ".data" ).offset().top;
        var overallHeight = $(document).scrollTop();
        var mainDocoffsetTop = $( ".data" ).next().offset().top;
        var scrollFitBoxHeight = $('.scroll-mix-mid').outerHeight();
        var mainDocoffsetTop = mainDocoffsetTop - scrollFitBoxHeight;
        $(".scroll-mix-mid").css({"position": "absolute", "top": offsetTop, "display": "block"});
        if(overallHeight >= offsetTop){
            $(".scroll-mix-mid").css({"position": "fixed", "top": "10px", "display": "block"});
            if(overallHeight >= mainDocoffsetTop) {
                $(".scroll-mix-mid").css({"position": "absolute", "top": mainDocoffsetTop, "display": "block"});
            }
        } else {
            $(".scroll-mix-mid").css({"position": "absolute", "top": offsetTop, "display": "block"});
        }
    }

    $(window).scroll(function() {
        return scrollToFixedDiv();
    });
    $(window).on('load', function() {
        return scrollToFixedDiv();
    });
});