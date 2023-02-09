import { Game } from "./statusGame";

const start = document.querySelector(".start");
const newGame = new Game(document.querySelector(".hole-game"));

start.addEventListener("click", newGame.startGame);
