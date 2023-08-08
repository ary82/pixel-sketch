const canvas = document.querySelector(".canvas");
const color_btn = document.getElementById("color_btn");
const rainbow_btn = document.getElementById("rainbow_btn");
const grad_btn = document.getElementById("grad_btn");
const eraser_btn = document.getElementById("eraser_btn");
const clear_btn = document.getElementById("clear_btn");
const leftbutttons = document.querySelectorAll(".left_menu button");

for (let index = 0; index < 1024; index++) {
  var newDiv = document.createElement("div");
  canvas.appendChild(newDiv);
}

const grid = document.querySelectorAll(".canvas");

function clearbuttons() {
  leftbutttons.forEach((element) => {
    element.removeAttribute("class")
  })
}

grid.forEach((element) => {
  element.addEventListener("mouseover", () => {
    console.log("works");
  });
});

leftbutttons.forEach((element) => {
  element.addEventListener("click", () => {
    clearbuttons()
    element.setAttribute("class", "active_btn");
  });
});

