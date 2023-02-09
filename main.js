/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Hole.js
class Holes {
  constructor(element) {
    this.element = element;
  }
  getHole() {
    const delHole = this.element.querySelector(".hole_has-mole");
    delHole.classList.toggle("hole_has-mole");
    let id = this.randomId(Number(delHole.id));
    const activHole = document.getElementById(`${id}`);
    activHole.classList.add("hole_has-mole");
  }
  randomId(id) {
    let randomIndex = 1;
    while (id === randomIndex) {
      randomIndex = Math.floor(1 + Math.random() * 16);
    }
    return randomIndex;
  }
}
;// CONCATENATED MODULE: ./src/js/statusGame.js

class Game {
  constructor(element) {
    this.element = element;
  }
  startGame() {
    const hole = new Holes(document.querySelector(".hole-game"));
    const dead = document.querySelector(".dead");
    const lost = document.querySelector(".lost");
    const holes = document.querySelectorAll(".hole");
    const stop = document.querySelector(".stop");
    holes.forEach(field => {
      field.onclick = () => {
        if (field.className.includes("hole_has-mole")) {
          field.classList.add("hole_molot");
          dead.textContent++;
          stop.onclick = () => {
            clearInterval(timerId);
            alert(`Вы оглушии ${dead.textContent++} гоблинов!`);
            return dead.textContent = 0, lost.textContent = 0;
          };
        } else {
          field.classList.add("hole_lost");
          lost.textContent++;
          if (Number(lost.textContent) === 5) {
            alert(`Вы проиграли! ${lost.textContent++} - промахов!`);
            return dead.textContent = 0, lost.textContent = 0;
          }
        }
      };
    });
    let timerId = setInterval(() => {
      holes.forEach(field => {
        if (field.className.includes("hole_molot")) {
          field.classList.remove("hole_molot");
        } else if (field.className.includes("hole_lost")) {
          field.classList.remove("hole_lost");
        }
      });
      hole.getHole();
    }, 900);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const start = document.querySelector(".start");
const newGame = new Game(document.querySelector(".hole-game"));
start.addEventListener("click", newGame.startGame);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;