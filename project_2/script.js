"use strict";

const addpage = function () {
  if (document.querySelector(".wow").classList.contains("hidden")) {
    document.querySelector(".wow").classList.remove("hidden");
  }
};

const removepage = function () {
  if (!document.querySelector(".wow").classList.contains("hidden")) {
    document.querySelector(".wow").classList.add("hidden");
  }
};

const buttons = document.querySelectorAll(".openme");

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i].addEventListener("click", addpage));
}

document.querySelector(".clickmecross").addEventListener("click", removepage);
document.querySelector(".clickmeback").addEventListener("click", removepage);

document.addEventListener("keydown", function (clickedkey) {
  if (clickedkey.key === "Escape") {
    removepage();
  }
});
