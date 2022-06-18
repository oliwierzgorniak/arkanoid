import BoardData from "../../../../../data/boardData/BoardData.js";
import changeSelectionSize from "./functions/changeSelectionSize.js";
import selectBlocks from "./functions/selectBlocks.js";

function mousemove(e) {
  if (!e.ctrlKey || !BoardData.isSelectionActive) return;

  // limiting function
  let time = BoardData.selectionResizeTime;
  if (time && Date.now() - time < 10) return;
  BoardData.selectionResizeTime = Date.now();

  changeSelectionSize(e);
  selectBlocks();
}

export default mousemove;
