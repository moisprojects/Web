let icon_menu = document.getElementById("menu_icon");
let menu = document.getElementsByClassName("menu")[0];
icon_menu.addEventListener("click",function() {
   "use strict";
   menu.classList.toggle("extend");
});


let btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click",function() {
   document.body.classList.toggle("dark");
   this.classList.toggle("active");
   if (document.body.classList.contains("dark"))
      localStorage.setItem("dark-mode","on");
   else
      localStorage.setItem("dark-mode","off");
});


if (localStorage.getItem("dark-mode")==="on") {
   document.body.classList.add("dark");
   btnSwitch.classList.add("active");
} else {
   document.body.classList.remove("dark");
   btnSwitch.classList.remove("active");
}

/*
var anima = document.getElementsByClassName("animo")[0];
var trans = 0;
setInterval(function() {
   trans-=20;
   if (trans<-80) trans = 0;
   anima.style.transform = "translateX("+trans+"%)";
},3500);*/

$("#animo div:last").insertBefore("#animo div:first");
$("#animo").css("margin-left","-"+100+"%");


$(document).ready(animar);

function animar() {
	let myInterval = setInterval(function() {
		$("#animo").animate({marginLeft: "-"+200+"%"},700,function() {
         $("#animo div:first").insertAfter("#animo div:last");
         $("#animo").css("margin-left","-"+100+"%");
		});
	},4000);
}


let inputSearch = document.searchF.input_search;

inputSearch.addEventListener("submit",function() {
  if (inputSearch.value.length==0) return false;
  else return true;
});

