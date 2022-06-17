import BoardData from "../../../../data/boardData/BoardData.js";

function click(e) {
  let block = e.target;
  const y = block.dataset.y;
  const x = block.dataset.x;

  BoardData.lastBoards.push(BoardData.blocks);
  const index = BoardData.moveIndex;
  BoardData.moveIndex = index ? index + 1 : 0;

  handleSelectedBlocks(block);
}

function handleSelectedBlocks(block) {
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
    block.style.border = BoardData.blockBorders[0];
    block.style.filter = BoardData.blockFilters[0];
  } else {
    BoardData.selectedBlocks.push(block);
    block.style.border = BoardData.blockBorders[1];
    block.style.filter = BoardData.blockFilters[1];
  }
}

export default click;
