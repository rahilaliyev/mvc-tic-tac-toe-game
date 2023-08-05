/** @format */

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  //oyunu işə salmaq üçün funksiya
  init() {
    this.model.running = true;
    this.view.listenClickingCell(this.cellClicked.bind(this));
    this.view.listeningRestart(this.restartGame.bind(this));
  }

  //hüceyrəyə kliklənəndə işə düşməli olan funksiya
  cellClicked(e) {
    //hüceyrənin indexini tapmaq
    const cellIndex = e.target.getAttribute("index");

    //seçilmiş hüceyrənin boş olub olmadığını və ya oyunun bitib bitmədiyini yoxlayıram hər klikdə
    if (this.model.options[cellIndex] !== "" || !this.model.running) {
      return;
    }

    //modeldəki optiona əlavə edirəm
    this.model.options[cellIndex] = this.model.currentPlayer;
    //htmlə əlavə edirəm
    this.view.cells[cellIndex].textContent = this.model.currentPlayer;
    //qalib olub olmadığını yoxlayıram
    this.checkWinner();
  }

  //qalibin müəyyənləşməsi üçün funksiya
  checkWinner() {
    //əgər qalib varsa
    if (this.model.checkWinner()) {
      this.model.running = false;
      this.view.updateStatusText(`${this.model.currentPlayer} uddu!`);
    } else if (!this.model.options.includes("")) {
      // bütün xanalar dolub, amma qalib müəyyənləşməyibsə
      this.model.running = false;
      this.view.updateStatusText(`Heç-heçə!`);
    } else {
      // qalib yoxdursa
      this.model.changePlayer();
      this.view.updateStatusText(`${this.model.currentPlayer} növbədədir`);
    }
  }

  //oyunu yenidən başlamaq üçün funksiya
  restartGame() {
    this.model.restartGame();
  }
}
