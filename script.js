const canvas = document.querySelector(".canvas");
const color_btn = document.getElementById("color_btn");
const rainbow_btn = document.getElementById("rainbow_btn");
const grad_btn = document.getElementById("grad_btn");
const eraser_btn = document.getElementById("eraser_btn");
const clear_btn = document.getElementById("clear_btn");
const leftbutttons = document.querySelectorAll(".left_menu button");
const root = document.querySelector(":root");
let temp = "";
const color_var = getComputedStyle(root).getPropertyValue("--canvas-clr");
const eraser_var = getComputedStyle(root).getPropertyValue("--text-clr");

for (let index = 0; index < 1024; index++) {
  var newDiv = document.createElement("div");
  canvas.appendChild(newDiv);
}
const grid = document.querySelectorAll(".canvas div");

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
grid.forEach((element) => {
  element.addEventListener("mouseover", () => {
    console.log("works");
    element.setAttribute("class", "painted_canvas");
  });
});

leftbutttons.forEach((element) => {
  element.addEventListener("click", () => {
    clearbuttons();
    element.setAttribute("class", "active_btn");
    if (element === color_btn) {
      grid.forEach((element) => {
        element.addEventListener("mouseover", () => {
          console.log("works");
          element.style.setProperty("background-color", color_var);
        });
      });
    } else if (element === rainbow_btn) {
      grid.forEach((element) => {
        element.addEventListener("mouseover", () => {
          console.log("works");
          element.style.setProperty("background-color", GenRandomClr());
        });
      });
    } else if (element === eraser_btn) {
      grid.forEach((element) => {
        element.addEventListener("mouseover", () => {
          console.log("works");
          element.style.setProperty("background-color", eraser_var);
        });
      });
    } else if (element === clear_btn) {
      element.removeAttribute("class");
      color_btn.setAttribute("class", "active_btn");
      grid.forEach((element) => {
        element.style.setProperty("background-color", eraser_var);
      });
      grid.forEach((element) => {
        element.addEventListener("mouseover", () => {
          console.log("works");
          element.style.setProperty("background-color", color_var);
        });
      });
    }
  });
});
