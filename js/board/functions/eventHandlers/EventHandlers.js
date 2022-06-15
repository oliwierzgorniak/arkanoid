import mousedown from "./functions/mousedown.js";
import mousemove from "./functions/mousemove/mousemove.js";
import mouseup from "./functions/mouseup.js";
import click from "./functions/click.js";

class EventHandlers {
  mousedown = mousedown;
  mousemove = mousemove;
  mouseup = mouseup;
  click = click;
}
let eventHandlers = new EventHandlers();

export default eventHandlers;
