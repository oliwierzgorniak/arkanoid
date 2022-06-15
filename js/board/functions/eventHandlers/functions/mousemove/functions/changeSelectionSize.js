import BoardData from "../../../../../../data/boardData/BoardData.js";

function changeSelectionSize(e) {
  const y = e.pageY;
  const x = e.pageX;

  let selection = document.querySelector("#selection");
  const xSize = x - BoardData.selectionPosition.x;
  const ySize = y - BoardData.selectionPosition.y;

  setPositionProps(ySize, xSize);

  selection.style.height = `${Math.abs(ySize)}px`;
  selection.style.width = `${Math.abs(xSize)}px`;
}

function setPositionProps(ySize, xSize) {
  let selection = document.querySelector("#selection");

  if (ySize < 0) {
    selection.style.top = "unset";
    selection.style.bottom = `${
      window.innerHeight - BoardData.selectionPosition.y
    }px`;
  } else {
    selection.style.bottom = "unset";
    selection.style.top = `${BoardData.selectionPosition.y}px`;
  }

  if (xSize < 0) {
    selection.style.left = "unset";
    selection.style.right = `${
      window.innerWidth - BoardData.selectionPosition.x
    }px`;
  } else {
    selection.style.right = "unset";
    selection.style.left = `${BoardData.selectionPosition.x}px`;
  }
}

export default changeSelectionSize;
