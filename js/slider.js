"use strict";

$(document).ready(function () {
    $('.slider__inner').slick({
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='../images/prev.svg'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='../images/next.svg'>",
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }]
    });
    

});



