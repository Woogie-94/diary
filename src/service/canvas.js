class Canvas {
  constructor(canvas) {
    this.canvas = canvas.current;
    this.context = this.canvas.getContext("2d");
    this.context.lineWidth = 1; // 기본 굵기 2
    this.context.strokeStyle = "blue"; // 기본 색상 #000
    this.startX = 0;
    this.startY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.drawing = false;
  }
}

export default Canvas;
