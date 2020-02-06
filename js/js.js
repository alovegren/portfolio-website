var d = new Date();
var n = d.getFullYear();
document.getElementById("copyrightdate").innerHTML = n;

let fitClass = $(".fit")

var fitTextHeight = fitClass.css("height");
var fitLineHeight = fitClass.css("line-height");

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

var missySigVertical = 10 + (512/154);
console.log((((100 - missySigVertical - parseFloat(fitTextHeight))/2)vh));


//  = (100 - missySigVertical - fitTextHeight)/2;