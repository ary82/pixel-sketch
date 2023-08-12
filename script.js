const canvas = document.querySelector(".canvas");
const color_btn = document.getElementById("color_btn");
const color_picker = document.getElementById("color_picker");
const rainbow_btn = document.getElementById("rainbow_btn");
const grad_btn = document.getElementById("grad_btn");
const eraser_btn = document.getElementById("eraser_btn");
const clear_btn = document.getElementById("clear_btn");
const leftbutttons = document.querySelectorAll(".left_menu .toggle_btn");
const root = document.querySelector(":root");
let temp = "";
const eraser_var = getComputedStyle(root).getPropertyValue("--text-clr");
let active_button = color_btn;
let color_var = color_picker.value;

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

// Main Function
function main_function(element, active_button) {
  if (active_button === "color_btn") {
    element.style.setProperty("background-color", color_var);
  } else if (active_button === "eraser_btn") {
    element.style.setProperty("background-color", eraser_var);
  } else if (active_button === "rainbow_btn") {
    element.style.setProperty("background-color", GenRandomClr());
  }
}

// Event Listeners
grid.forEach((element) => {
  element.addEventListener("mouseover", () => {
    main_function(element, active_button.id);
    // Do Something
  });
});

leftbutttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    active_button.removeAttribute("class");
    active_button = btn;
    active_button.setAttribute("class", "active_btn");
  });
});

clear_btn.addEventListener("click", () => {
  grid.forEach((element) => {
    element.style.setProperty("background-color", eraser_var);
  });
});

color_picker.addEventListener("input", () => {
  color_var = color_picker.value;
});
