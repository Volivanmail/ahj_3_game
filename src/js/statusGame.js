import { Holes } from "./Hole";

export class Game {
  constructor(element) {
    this.element = element;
  }

  startGame() {
    const hole = new Holes(document.querySelector(".hole-game"));
    const dead = document.querySelector(".dead");
    const lost = document.querySelector(".lost");
    const holes = document.querySelectorAll(".hole");
    const stop = document.querySelector(".stop");

    holes.forEach((field) => {
      field.onclick = () => {
        if (field.className.includes("hole_has-mole")) {
          field.classList.add("hole_molot");
          dead.textContent++;
          stop.onclick = () => {
            clearInterval(timerId);
            alert(`Вы оглушии ${dead.textContent++} гоблинов!`);
            return (dead.textContent = 0), (lost.textContent = 0);
          };
        } else {
          field.classList.add("hole_lost");
          lost.textContent++;
          if (Number(lost.textContent) === 5) {
            alert(`Вы проиграли! ${lost.textContent++} - промахов!`);
            return (dead.textContent = 0), (lost.textContent = 0);
          }
        }
      };
    });

    let timerId = setInterval(() => {
      holes.forEach((field) => {
        if (field.className.includes("hole_molot")) {
          field.classList.remove("hole_molot");
        } else if (field.className.includes("hole_lost")) {
          field.classList.remove("hole_lost");
        }
      });
      hole.getHole();
    }, 800);
  }
}
