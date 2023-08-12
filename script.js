// Defining Variables
const canvas = document.querySelector(".canvas");
const color_btn = document.getElementById("color_btn");
const color_picker = document.getElementById("color_picker");
const rainbow_btn = document.getElementById("rainbow_btn");
const grad_btn = document.getElementById("grad_btn");
const eraser_btn = document.getElementById("eraser_btn");
const clear_btn = document.getElementById("clear_btn");
const range_picker = document.getElementById("range_picker");
const leftbutttons = document.querySelectorAll(".left_menu .toggle_btn");
const grid_size_display = document.querySelector("#range_selector p");
const border_btn = document.getElementById("toggle_border");
const eraser_var = "hsl(0, 0%, 85%)";
let temp;
let active_button = color_btn;
let color_var = color_picker.value;
let grad_var;
let grad_numvar = [];
let grid_size = range_picker.value;
let border_var = 0;

//// Utility Functions

// Function for grid event listeners
function start_grid_listener() {
  grid.forEach((element) => {
    element.addEventListener("mouseover", () => {
      change_active_mode(element, active_button.id);
    });
  });
}
// Random color for Rainbow button
function GenRandomClr() {
  temp = Math.floor(Math.random() * 359);
  temp = "hsl(" + temp + ", 75%, 60%)";
  return temp;
}
// Gradient colors
function GradFunction(element) {
  grad_var = window.getComputedStyle(element).getPropertyValue(
    "background-color",
  );
  grad_var = (grad_var.slice(4).slice(0, -1)).split(", ");
  grad_numvar = [];
  grad_var.forEach((element) => {
    grad_numvar.push(parseFloat(element) - (0.2 * parseFloat(element)));
  });
  return ("rgb(" + grad_numvar[0] + ", " + grad_numvar[1] + ", " +
    grad_numvar[2] + ")");
}
// Create Grid Function
function createGrid(grid_size) {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  for (let index = 0; index < grid_size * grid_size; index++) {
    let newDiv = document.createElement("div");
    canvas.appendChild(newDiv);
  }
  canvas.style.setProperty(
    "grid-template-columns",
    `repeat(${grid_size}, 1fr)`,
  );
  grid = document.querySelectorAll(".canvas div");
  grid_size_display.textContent = `Grid size: ${grid_size} x ${grid_size}`;
  checkboderders(border_var);
  start_grid_listener();
}
// Function call for initial grid creation
createGrid(grid_size);

// Function for border toggle
function checkboderders(border_var) {
  if (border_var) {
    toggle_border.setAttribute("class", "active_btn");
    grid.forEach((element) => {
      element.style.setProperty("border", "1px solid hsl(170, 4%, 71%)");
    });
    border_var = 1;
  } else {
    toggle_border.removeAttribute("class");
    grid.forEach((element) => {
      element.style.setProperty("border", "none");
    });
  }
}
// Function for changing active button/mode
function change_active_mode(element, active_button) {
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

//// Event Listeners

leftbutttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    active_button.removeAttribute("class");
    active_button = btn;
    active_button.setAttribute("class", "active_btn");
  });
});

toggle_border.addEventListener("click", () => {
  if (border_var) {
    border_var = 0;
  } else {
    border_var = 1;
  }
  checkboderders(border_var);
});

clear_btn.addEventListener("click", () => {
  grid.forEach((element) => {
    element.style.setProperty("background-color", eraser_var);
  });
});

color_picker.addEventListener("input", () => {
  color_var = color_picker.value;
});

range_picker.addEventListener("input", () => {
  grid_size = range_picker.value;
  console.log(grid_size);
  createGrid(grid_size);
});
