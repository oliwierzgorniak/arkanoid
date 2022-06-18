import BoardData from "../../../../data/boardData/BoardData.js";

function click(block) {
  if (block.hasAttribute("data-current")) return;

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

  block.dataset.current = "";
}

export default click;
