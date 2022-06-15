import BoardData from "../../../../data/boardData/BoardData.js";

function click(e) {
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
}

export default click;
