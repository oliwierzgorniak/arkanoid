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

  handleSelectedBlocksArr(block);

  block.style.border = BoardData.blockBorders[state];
}

function handleSelectedBlocksArr(block) {
  const isBlockSlected = !!BoardData.selectedBlocks.find(
    (selectedBlock) =>
      selectedBlock.dataset.x === block.dataset.x &&
      selectedBlock.dataset.y === block.dataset.y
  );

  if (isBlockSlected) {
    BoardData.selectedBlocks = BoardData.selectedBlocks.filter(
      (selectedBlock) =>
        !(
          selectedBlock.dataset.x === block.dataset.x &&
          selectedBlock.dataset.y === block.dataset.y
        )
    );
  } else {
    BoardData.selectedBlocks.push(block);
  }
}

export default click;
