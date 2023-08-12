const canvas = document.querySelector(".canvas");
const color_btn = document.getElementById("color_btn");
const color_picker = document.getElementById("color_picker");
const rainbow_btn = document.getElementById("rainbow_btn");
const grad_btn = document.getElementById("grad_btn");
const eraser_btn = document.getElementById("eraser_btn");
const clear_btn = document.getElementById("clear_btn");
const leftbutttons = document.querySelectorAll(".left_menu .toggle_btn");
const root = document.querySelector(":root");
let temp;
const eraser_var = getComputedStyle(root).getPropertyValue("--text-clr");
let active_button = color_btn;
let color_var = color_picker.value;
let grad_var;
let grad_numvar = [];

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
function GradFunction(element) {
  grad_var = window.getComputedStyle(element).getPropertyValue(
    "background-color",
  );
  grad_var = (grad_var.slice(4).slice(0, -1)).split(", ");
  grad_numvar = [];
  grad_var.forEach((element) => {
    grad_numvar.push(parseFloat(element) - (0.1 * parseFloat(element)));
  });
  return ("rgb(" + grad_numvar[0] + ", " + grad_numvar[1] + ", " +
    grad_numvar[2] + ")");
}

// Main Function
function main_function(element, active_button) {
  if (active_button === "color_btn") {
    element.style.setProperty("background-color", color_var);
  } else if (active_button === "eraser_btn") {
    element.style.setProperty("background-color", eraser_var);
  } else if (active_button === "rainbow_btn") {
    element.style.setProperty("background-color", GenRandomClr());
  } else if (active_button === "grad_btn") {
    element.style.setProperty("background-color", GradFunction(element));
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
