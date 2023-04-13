"use strict";


$(".burger").click(function (event) {
    $(".burger, .menu").toggleClass("active");
    $("body").toggleClass("lock")
})

// $(".menu").click(function () {
//     $(".burger, .menu").removeClass("active");
//     $("body").removeClass("lock")
// })