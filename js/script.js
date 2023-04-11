"use strict";

// if (window.matchMedia("(min-width: 1220px)").matches) {
//     numOfSlides = 2
// }

$('.slider__inner').slick({
    infinite: true,
    draggable: true,
    variableWidth: true,
    dots: true,
    arrows: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/prev.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/next.svg'>",
    slidesToShow: 3,
    slidesToScroll: 3,
    // mobileFirst:true,
    // responsive: [{
    //     breakpoint: 1335,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         centerMode: false
    //     }
    // }]
});

