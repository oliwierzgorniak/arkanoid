import BoardData from "./Constatnt.js";

class Dynamic {
  constructor() {
    this.lastBoards = [];
    this.moveIndex;
    this.blocks = this.initializeBlocksArray(BoardData.height, BoardData.width);
    this.isSelectionActive = false;
    this.selectionPosition;
    this.selectionResizeTime1;
    this.selectionResizeTime2;
  }

  initializeBlocksArray(height, width) {
    let blocksArr = [];

    for (let y = 0; y < height; y++) {
      const arr = Array(width).fill(0);
      blocksArr.push(arr);
    }

    return blocksArr;
  }
}

const dynamic = new Dynamic();
export default dynamic;
