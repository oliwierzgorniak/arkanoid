import BoardData from "../../../../data/boardData/BoardData.js";

function keydown(e) {
  if (e.code !== "Delete") return;

  BoardData.selectedBlocks.forEach((blockElement) => {
    blockElement.style.border = BoardData.blockBorders[0];
    blockElement.style.filter = BoardData.blockFilters[0];

    let ctx = blockElement.getContext("2d");
    const canvasHeight = blockElement.height;
    const canvasWidth = blockElement.width;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  });
  BoardData.selectedBlocks = [];
}

export default keydown;
