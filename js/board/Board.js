"use strict";

import BoardData from "../data/boardData/BoardData.js";

class Board {
  constructor() {
    this.addBoard();
  }

  addBoard() {
    let boardElement = document.querySelector("#board");

    for (let y = 0; y < BoardData.height; y++) {
      for (let x = 0; x < BoardData.width; x++) {
        let blockElement = document.createElement("div");
        blockElement.dataset.block = "";
        blockElement.dataset.x = x;
        blockElement.dataset.y = y;
        blockElement.classList.add("block");

        boardElement.append(blockElement);
      }
    }
  }
}

export default Board;
