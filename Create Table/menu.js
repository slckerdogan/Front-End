var menuAc = document.querySelector("#menuAc");
var menu = document.querySelector("#menu");
var kapatBtn = document.querySelector("#kapatBtn");

menuAc.addEventListener("click", function () {
   menu.style.left = "0vw";
});

kapatBtn.addEventListener("click", function () {
   menu.style.left = "-100vw";
});