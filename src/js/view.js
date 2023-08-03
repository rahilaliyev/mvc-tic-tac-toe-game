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
}
