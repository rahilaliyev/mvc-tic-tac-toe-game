/** @format */

export default class Model {
  constructor() {
    this.options = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = "O";
    this.running = false;
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  get isRunning() {
    return this.running;
  }

  set isRunning(value) {
    this.running = value;
  }

  //oyunçunu dəyişmək üçün funksiya
  changePlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  getCellValue(value) {
    return this.options[value];
  }

  //qalibi nəticələrə görə yoxlamaq üçün funksiya
  checkWinner() {
    let roundWon = false;
    for (const condition of this.winConditions) {
      const [cellA, cellB, cellC] = condition.map(index => this.options[index]);

      if (!cellA || !cellB || !cellC) {
        continue;
      }

      if (cellA === cellB && cellB === cellC) {
        roundWon = true;
        break;
      }
    }
    return roundWon;
  }

  //oyunu sıfırdan başlanması üçün funksiya
  restartGame() {
    this.currentPlayer = "O";
    this.options = ["", "", "", "", "", "", "", "", ""];
    this.running = true;
  }

  addOptionValue(index) {
    this.options[index] = this.currentPlayer;
  }
}
