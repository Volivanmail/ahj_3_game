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

    holes.forEach((hole) => {
      hole.onclick = () => {
        if (hole.className.includes("hole_has-mole")) {
          dead.textContent++;
          stop.onclick = () => {
            clearInterval(timerId);
            alert(`Вы оглушии ${dead.textContent++} гоблинов!`);
            return (dead.textContent = 0), (lost.textContent = 0);
          };
        } else {
          lost.textContent++;
          if (Number(lost.textContent) === 5) {
            alert(`Вы проиграли! ${lost.textContent++} - промахов!`);
            return (dead.textContent = 0), (lost.textContent = 0);
          }
        }
      };
    });

    let timerId = setInterval(() => {
      hole.getHole();
    }, 1000);
  }
}
