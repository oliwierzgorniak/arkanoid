import BoardData from "../../../../data/boardData/BoardData.js";

function mouseup(e) {
  if (!BoardData.isSelectionActive) return;

  const blocks = document.querySelectorAll("[data-current]");
  blocks.forEach((block) => block.removeAttribute("data-current"));
  BoardData.isSelectionActive = false;
  BoardData.selectionResizeTime = undefined;
  BoardData.selectionPosition = undefined;
  BoardData.currentSelectionBlocks = [];

  const selection = document.querySelector("#selection");
  selection?.remove();
}

export default mouseup;
