class Constant {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.highlightColor = "rgb(207, 42, 42)";
    this.blockBorders = [
      "1px solid rgb(255, 255, 255)",
      `1px solid ${this.highlightColor}`,
    ];
  }
}

const constant = new Constant();
export default constant;
