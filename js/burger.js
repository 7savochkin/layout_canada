"use strict";


$(".burger").click(function (event) {
    $(".burger, .menu").toggleClass("active");
    $("body").toggleClass("lock")
})