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

  handleBlockClick = (e) => {
    let block = e.target;
    const y = block.dataset.y;
    const x = block.dataset.x;

    BoardData.lastBoards.push(BoardData.blocks);
    const index = BoardData.moveIndex;
    BoardData.moveIndex = index ? index + 1 : 0;
    const state = BoardData.blocks[y][x] === 0 ? 1 : 0;
    BoardData.blocks[y][x] = state;

    // visual change
    block.style.border = BoardData.blockBorders[state];
  };
}

export default Board;
