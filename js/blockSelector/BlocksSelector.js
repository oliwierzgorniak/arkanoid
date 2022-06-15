"use strict";
import BoardData from "../data/boardData/BoardData.js";

class BlocksSelector {
  constructor() {
    this.selectedColor;

    this.fillBlocks();
  }

  fillBlocks = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
    const image = new Image();
    image.addEventListener("load", () => {
      this.drawImageToBlock(image);
    });
    image.src = "../blocks.jpg";
  };

  drawImageToBlock = (image) => {
    let blockElements = document.querySelectorAll("#blocks-selector .block");

    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 5; x++) {
        let block = blockElements[y * 5 + x];
        block.setAttribute("height", BoardData.blockHeight);
        block.setAttribute("width", BoardData.blockWidth);

        let ctx = blockElements[y * 5 + x].getContext("2d");
        ctx.drawImage(
          image,
          x * 10,
          y * 7,
          8,
          5,
          0,
          0,
          BoardData.blockWidth,
          BoardData.blockHeight
        );
      }
    }
  };
}

export default BlocksSelector;
