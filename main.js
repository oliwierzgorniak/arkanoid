"use strict";
import Board from "./js/board/Board.js";
import BlocksSelector from "./js/blockSelector/BlocksSelector.js";

import BoardEventHandlers from "./js/board/functions/eventHandlers/BoardEventHandlers.js";
import selectorBlockClick from "./js/blockSelector/functions/click.js";

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
  block.addEventListener("click", BoardEventHandlers.click);
});

// handling block click
const selectorBlocks = document.querySelectorAll("[data-selector-block]");
selectorBlocks.forEach((block) => {
  block.addEventListener("click", selectorBlockClick);
});

// handling select
const boardElement = document.querySelector("#board");
boardElement.addEventListener("mousedown", BoardEventHandlers.mousedown);
boardElement.addEventListener("mousemove", BoardEventHandlers.mousemove);

// handling deleting block
addEventListener("keydown", BoardEventHandlers.keydown);
