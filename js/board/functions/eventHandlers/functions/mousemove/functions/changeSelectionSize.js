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

  saveCorners();
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

function saveCorners() {
  BoardData.selectionCorners = [];

  const selection = document.querySelector("#selection");

  const corner1 = { y: selection.offsetTop, x: selection.offsetLeft };
  BoardData.selectionCorners.push(corner1);

  const corner2 = {
    y: selection.offsetTop,
    x: selection.offsetLeft + selection.offsetWidth,
  };
  BoardData.selectionCorners.push(corner2);

  const corner3 = {
    y: selection.offsetTop + selection.offsetHeight,
    x: selection.offsetLeft + selection.offsetWidth,
  };
  BoardData.selectionCorners.push(corner3);

  const corner4 = {
    y: selection.offsetTop + selection.offsetHeight,
    x: selection.offsetLeft,
  };
  BoardData.selectionCorners.push(corner4);
}

export default changeSelectionSize;
