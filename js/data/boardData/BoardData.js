import constant from "./data/Constatnt.js";
import dynamic from "./data/Dynamic.js";

class BoardData {}
let boardData = new BoardData();
Object.assign(boardData, constant, dynamic);

export default boardData;
