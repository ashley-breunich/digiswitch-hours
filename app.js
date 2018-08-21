'use strict';

let total = 0;

$("#questions").hide();
$("#begin").on("click", function() {
    $("#begin").hide();
    $("#questions").show();
})