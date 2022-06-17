import mousedown from "./functions/mousedown.js";
import mousemove from "./functions/mousemove/mousemove.js";
import mouseup from "./functions/mouseup.js";
import click from "./functions/click.js";
import keydown from "./functions/keydown.js";

class BoardEventHandlers {
  mousedown = mousedown;
  mousemove = mousemove;
  mouseup = mouseup;
  click = click;
  keydown = keydown;
}
let boardEventHandlers = new BoardEventHandlers();

export default boardEventHandlers;
