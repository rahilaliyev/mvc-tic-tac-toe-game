/** @format */

export default class View {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.statusText = document.querySelector("#statusText");
    this.restartBtn = document.querySelector("#restartBtn");
    this.statusText = document.querySelector("#statusText");
  }

  //mətnin dəyişməsi üçün funksiya
  updateStatusText(text) {
    this.statusText.textContent = text;
  }

  listenClickingCell(callback) {
    this.cells.forEach(cell => cell.addEventListener("click", callback));
  }

  listeningRestart(callback) {
    this.restartBtn.addEventListener("click", () => {
      callback();
      this.cells.forEach(cell => (cell.textContent = ""));
      this.updateStatusText("O növbədədir");
    });
  }
}
