"use strict";
import Board from "./js/board/Board.js";
import BlocksSelector from "./js/BlocksSelector.js";

// handlers
// import mousedown from "./js/board/functions/eventHandlers/functions/mousedown.js";
// import mousemove from "./js/board/functions/eventHandlers/functions/mousemove.js";

import EventHandlers from "./js/board/functions/eventHandlers/EventHandlers.js";

// handling board builder button click
const boardBuilderButton = document.querySelector("#board-builder-button");
boardBuilderButton.addEventListener("click", handleBoardBuidlerButtonClick);
function handleBoardBuidlerButtonClick() {
  const menuSection = document.querySelector("#menu-section");
  menuSection.style.display = "none";
  const builderSection = document.querySelector("#builder-section");
  builderSection.style.display = "flex";
}

// Board and block selector
const board = new Board();
const blocksSelector = new BlocksSelector();

// handling block click
const blockElements = document.querySelectorAll("[data-block]");
blockElements.forEach((block) => {
  block.addEventListener("click", (e) =>
    board.handleBlockClick(e, blocksSelector.selectedColor)
  );
});

// handling select
const boardElement = document.querySelector("#board");
boardElement.addEventListener("mousedown", EventHandlers.mousedown);
boardElement.addEventListener("mousemove", EventHandlers.mousemove);
boardElement.addEventListener("mouseup", EventHandlers.mouseup);
