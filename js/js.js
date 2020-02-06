var d = new Date();
var n = d.getFullYear();
document.getElementById("copyrightdate").innerHTML = n;

let fitClass = $(".fit")

var fitTextHeight = fitClass.css("height");
var fitLineHeight = fitClass.css("line-height");

console.log(fitTextHeight)

// var vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);


document.documentElement.style.setProperty('--fitTextHeight', fitTextHeight)
document.documentElement.style.setProperty('--fitLineHeight', fitLineHeight)

// var fitClasses = document.getElementsByClassName("fit");

// for(var i = 0; i < fitClasses.length; i++) {
//	fitClasses[i].style.lineHeight = (fitLineHeight);
//}

//console.log(fitClasses[1].style.lineHeight);
