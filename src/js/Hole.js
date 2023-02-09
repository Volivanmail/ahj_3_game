export class Holes {
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
