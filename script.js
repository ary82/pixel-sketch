const canvas = document.querySelector(".canvas");
const color_btn = document.getElementById("color_btn");
const rainbow_btn = document.getElementById("rainbow_btn");
const grad_btn = document.getElementById("grad_btn");
const eraser_btn = document.getElementById("eraser_btn");
const clear_btn = document.getElementById("clear_btn");
const leftbutttons = document.querySelectorAll(".left_menu button");
const root = document.querySelector(":root");
let temp = "";
let color_var = getComputedStyle(root).getPropertyValue("--canvas-clr");
const eraser_var = getComputedStyle(root).getPropertyValue("--text-clr");
let active_button = "color";

for (let index = 0; index < 1024; index++) {
  var newDiv = document.createElement("div");
  canvas.appendChild(newDiv);
}
const grid = document.querySelectorAll(".canvas div");

// Utility Functions
function GenRandomClr() {
  temp = Math.floor(Math.random() * 359);
  temp = "hsl(" + temp + ", 75%, 60%)";
  return temp;
}
function clearbuttons() {
  leftbutttons.forEach((element) => {
    element.removeAttribute("class");
  });
}

