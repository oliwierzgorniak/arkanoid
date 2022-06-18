import BoardData from "../../../../data/boardData/BoardData.js";

function mousedown(e) {
  if (!e.ctrlKey) return;

  BoardData.isSelectionActive = true;

  let selection = document.createElement("div");
  selection.id = "selection";
  const y = e.pageY;
  const x = e.pageX;
  selection.style.top = `${y}px`;
  selection.style.left = `${x}px`;

  BoardData.selectionPosition = { x: x, y: y };

  let board = document.querySelector("#board");
  board.append(selection);
}

export default mousedown;
