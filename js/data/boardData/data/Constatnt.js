class Constant {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.blockHeight = 40;
    this.blockWidth = 80;
    this.highlightColor = "rgb(207, 42, 42)";
    this.blockBorders = [
      "1px solid rgb(255, 255, 255)",
      `1px solid ${this.highlightColor}`,
    ];
    this.blockFilters = ["none", "brightness(0.7)"];
  }
}

const constant = new Constant();
export default constant;
