import BoardData from "../../../../data/boardData/BoardData.js";

function mouseup(e) {
  if (!BoardData.isSelectionActive) return;
  BoardData.isSelectionActive = false;
  BoardData.selectionResizeTime = undefined;
  BoardData.selectionPosition = undefined;
  const selection = document.querySelector("#selection");
  selection?.remove();
}

export default mouseup;
