import BuilderSelector from "../../data/BuilderSelector.js";
import BoardData from "../../data/boardData/BoardData.js";

function click(e) {
  let block = e.target;
  // https://www.tutorialspoint.com/How-to-copy-the-content-of-one-HTML5-Canvas-to-another-Canvas-locally

  BoardData.selectedBlocks.forEach((blockElement) => {
    let ctx = blockElement.getContext("2d");
    ctx.drawImage(block, 0, 0);
  });
}

function addCanvasToBlock() {}

export default click;
