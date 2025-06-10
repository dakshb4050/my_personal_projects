"use strict";

let randnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector(".khamoshi").textContent = randnum;
// console.log(randnum);

let temp1 = document.querySelector(".score").textContent; // score
let temp2 = document.querySelector(".hscore").textContent; // heighscore

// document.querySelector(".hitenter").addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       check.click();
//     }
//   });

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    check.click();
  }
});

let iscomplete = false;

document.querySelector("#check").addEventListener("click", function () {
  const currguess = Number(document.querySelector("#num").value);
  console.log(currguess);
  if (iscomplete) {
    document.querySelector(".prot").textContent = `Plese Restart Game 🫠`;
  } else {
    if (document.querySelector("#num").value.trim() == "") {
      document.querySelector(".prot").textContent = `Plese Enter number 😊`;
    } else if (temp1 <= 1) {
      iscomplete = true;
      document.querySelector(".prot").textContent = "You Lost The Game 😭";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".back").style.backgroundColor = "#7f1d1d";
      document.querySelector(".khamoshi").textContent = randnum;
      document.querySelector(".khamoshi").style.width='120px';
      document.querySelector(".khamoshi").style.height='120px';
    } else if (currguess < 1 || currguess > 20) {
      document.querySelector(".prot").textContent = `Put number in Range 😒`;
    } else {
      if (currguess == randnum) {
        iscomplete = true;
        document.querySelector(".prot").textContent = `🎖️ You 🏆 Won 🎖️`;
        document.querySelector(".back").style.backgroundColor = "#064e3b";
        document.querySelector(".khamoshi").textContent = randnum;
        document.querySelector(".khamoshi").style.width='120px';
        document.querySelector(".khamoshi").style.height='120px';
        if (temp1 > temp2) {
          temp2 = document.querySelector(".hscore").textContent = temp1;
        }
        console.log(document.querySelector(".hscore").textContent);
      } else {
        if (currguess > randnum) {
          document.querySelector(".prot").textContent = `Heigh Number 📈`;
        } else if (currguess < randnum) {
          document.querySelector(".prot").textContent = "Low NUmber 📉";
        }
        temp1--;
        document.querySelector(".score").textContent = temp1;
      }
    }
  }
  document.querySelector("#num").value = "";
});

document.querySelector("#butt").addEventListener("click", function () {
  document.querySelector(".prot").textContent = `Let's Start GUessing...`;
  document.querySelector(".score").textContent = 20;
  temp1 = 20;
  randnum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".khamoshi").textContent = randnum;
  document.querySelector(".back").style.backgroundColor = "#000000";
  document.querySelector(".khamoshi").textContent = "?";
  iscomplete = false;
  document.querySelector(".khamoshi").style.width='100px';
  document.querySelector(".khamoshi").style.height='100px';
});
