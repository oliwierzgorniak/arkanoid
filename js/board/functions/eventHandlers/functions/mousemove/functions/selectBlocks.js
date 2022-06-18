import BoardData from "../../../../../../data/boardData/BoardData.js";
import click from "../../click.js";

function highlightBlocks() {
  const [corner, width, height] = getSelectionInfo();

  // logic

  // const yInc =
  //   Math.floor(height / BoardData.blockHeight) === 0 ||
  //   Math.floor(height / BoardData.blockHeight) === 1
  //     ? height
  //     : height / Math.floor(height / BoardData.blockHeight);
  // const xInc =
  //   Math.floor(height / BoardData.blockHeight) === 0 ||
  //   Math.floor(height / BoardData.blockHeight) === 1
  //     ? width
  //     : width / Math.floor(width / BoardData.blockWidth);

  const yOffset = BoardData.blockHeight * 0.05;
  const xOffset = BoardData.blockWidth * 0.05;
  const xInc = BoardData.blockWidth * 0.4;
  const yInc = BoardData.blockHeight * 0.4;

  for (let y = corner.y; y <= corner.y + height + yOffset; y += yInc) {
    for (let x = corner.x; x <= corner.x + width + xOffset; x += xInc) {
      const elements = document.elementsFromPoint(x, y);
      const block = elements.find((block) => block.hasAttribute("data-block"));
      click(block);
    }
  }

  // visual
}

function getSelectionInfo() {
  const selection = document.querySelector("#selection");
  const sPos = selection.getBoundingClientRect();

  const corner = { x: sPos.x, y: sPos.y };
  const selectionWidth = sPos.width;
  const selectionHeight = sPos.height;
  return [corner, selectionWidth, selectionHeight];

  let corners = [];
  const corner1 = { x: sPos.x + sPos.width, y: sPos.y };
  corners.push(corner1);

  const corner2 = { x: sPos.x + sPos.width, y: sPos.y + sPos.height };
  corners.push(corner2);

  const corner3 = { x: sPos.x, y: sPos.y + sPos.height };
  corners.push(corner3);

  return corners;
}

function selectBlock(block) {}

export default highlightBlocks;
