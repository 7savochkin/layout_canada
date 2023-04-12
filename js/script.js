"use strict";

// if (window.matchMedia("(min-width: 1220px)").matches) {
//     numOfSlides = 2
// }
$(document).ready(function () {
    $('.slider__inner').slick({
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='../images/prev.svg'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='../images/next.svg'>",
        slidesToShow: 3,
        slidesToScroll: 3,
        // variableWidth: true,
        // respondTo: true,
        // adaptiveHeight: true,
        responsive: [{
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                // variableWidth: true,
            }
        },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    // variableWidth: true,
                }
            }]
    });
    
    $(".burger").click(function (event) {
        // if(event.target.className.includes('burger')){
        //
        // }
        $(".burger, .menu").toggleClass("active");
        $("body").toggleClass("lock")
    })
});
