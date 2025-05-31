"use strict";

let currplayer = 1;
let currsc1 = 0;
let sc1 = 0;
let currsc2 = 0;
let sc2 = 0;
let temp1 = 0;
let temp2 = 0;
let isended=false;

document.getElementById("sc-1").textContent = 0;
document.getElementById("sc-2").textContent = 0;

const movetop1 = function () {
  currplayer--;
  document.querySelector(".p2").classList.remove("fade");
  document.querySelector(".p1").classList.add("fade");
};

const movetop2 = function () {
  currplayer++;
  document.querySelector(".p1").classList.remove("fade");
  document.querySelector(".p2").classList.add("fade");
};

const winreset = function () {
  isended=true;
  sc1 = temp1;
  sc2 = temp2;
  currsc1 = 0;
  currsc2 = 0;
  document.getElementById("sc-1").textContent = sc1;
  document.getElementById("sc-2").textContent = sc2;
  document.getElementById("currscp1").textContent = currsc1;
  document.getElementById("currscp2").textContent = currsc2;
};

const addscore = function () {
  if (currplayer === 1) {
    sc1 += currsc1;
    currsc1 = 0;
    movetop2();
  } else {
    sc2 += currsc2;
    currsc2 = 0;
    movetop1();
  }
  document.getElementById("sc-1").textContent = sc1;
  document.getElementById("sc-2").textContent = sc2;
  document.getElementById("currscp1").textContent = currsc1;
  document.getElementById("currscp2").textContent = currsc2;
};

document.getElementById("roll").addEventListener("click", function () {
  const rolled = Math.trunc(Math.random() * 6) + 1;
  console.log(rolled);
  document.getElementById("die-image").src = `./images/dice-${rolled}.png`;
  if (rolled !== 1) {
    if (currplayer === 1) {
      currsc1 += rolled;
    } else {
      currsc2 += rolled;
    }
  } else {
    if (currplayer === 1) {
      currsc1 = 0;
      movetop2();
    } else {
      currsc2 = 0;
      movetop1();
    }
  }
  document.getElementById("currscp1").textContent = currsc1;
  document.getElementById("currscp2").textContent = currsc2;
  temp1 = sc1 + currsc1;
  temp2 = sc2 + currsc2;
  if (currplayer === 1) {
    if (temp1 >= 100) {
      document.getElementById("die-image").classList.add("hidden");
      document.getElementById("win1").classList.remove("hidden");
      winreset();
    }
  } else {
    if (temp2 >= 100) {
      document.getElementById("die-image").classList.add("hidden");
      document.getElementById("win2").classList.remove("hidden");
      winreset();
    }
  }
});

document.getElementById("hold").addEventListener("click", addscore);

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    addscore();
  }
});

document.getElementById('rematch').addEventListener('click', function () {
  document.getElementById("die-image").classList.remove("hidden");

  document.getElementById("win1").classList.add("hidden");
  document.getElementById("win2").classList.add("hidden");

  document.getElementById("die-image").src = `./images/start.png`;

  currplayer = 1;
  currsc1 = 0;
  sc1 = 0;
  currsc2 = 0;
  sc2 = 0;
  temp1 = 0;
  temp2 = 0;

  document.getElementById("sc-1").textContent = sc1;
  document.getElementById("sc-2").textContent = sc2;
  document.getElementById("currscp1").textContent = currsc1;
  document.getElementById("currscp2").textContent = currsc2;

  document.querySelector(".p1").classList.add("fade");
  document.querySelector(".p2").classList.remove("fade");
});

