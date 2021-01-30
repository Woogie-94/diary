import React, { createRef, useEffect } from "react";
import styles from "./canvas.module.css";

const Canvas = ({ useRef, id }) => {
  let canvas;
  let canvasRef = useRef;

  let pos = {
    drawble: false,
    X: -1,
    Y: -1,
  };
  let ctx;

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousedown", initDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", finishDraw);
    canvas.addEventListener("mouseout", finishDraw);
  }, []);

  function initDraw(e) {
    ctx.beginPath();
    pos = { drawble: true, ...getPositin(e) };
    ctx.moveTo(pos.X, pos.Y);
  }

  function draw(e) {
    if (pos.drawble) {
      pos = { ...pos, ...getPositin(e) };
      ctx.lineTo(pos.X, pos.Y);
      ctx.stroke();
    }
  }
  function finishDraw() {
    pos = { drawble: false, X: -1, Y: -1 };
  }

  function getPositin(e) {
    return { X: e.offsetX, Y: e.offsetY };
  }

  ///////////////////////////////
  // lineWidth, strokeStyle, startX,Y currentX,Y, drawing
  //   let [contexts, setContexts] = useState();
  //   let [lineWidth, setLineWidth] = useState(2);
  //   let [strokeStyle, setStrokeStyle] = useState("blue");
  //   let startX;
  //   let startY;
  //   let currentX;
  //   let currentY;
  //   let drawing = false;

  //   useEffect(() => {
  //     const canvas = useRef.current;
  //     const context = canvas.getContext("2d");

  //     context.lineWidth = 2;
  //     context.strokeStyle = "blue";

  //     canvas.addEventListener("mousedown", down);
  //     canvas.addEventListener("mousemove", move);
  //     canvas.addEventListener("mouseup", up);
  //     canvas.addEventListener("mouseout", out);
  //   }, []);

  //   function draw(curX, curY) {
  //     const canvas = useRef.current;
  //     const context = canvas.getContext("2d");

  //     context.beginPath();
  //     context.moveTo(startX, startY);
  //     context.lineTo(curX, curY);
  //     context.stroke();
  //   }
  //   function down(e) {
  //     startX = e.offsetX;
  //     startY = e.offsetY;
  //     drawing = !drawing;
  //   }

  //   function up(e) {
  //     drawing = !drawing;
  //   }
  //   function move(e) {
  //     if (!drawing) return; // 마우스가 눌러지지 않았으면 리턴

  //     currentX = e.offsetX;
  //     currentY = e.offsetY;
  //     console.log(currentX);
  //     draw(currentX, currentY);
  //     startX = currentX;
  //     startY = currentY;
  //   }
  //   function out(e) {
  //     drawing = !drawing;
  //   }
  return <canvas ref={useRef} className={id} width="960" height="600" />;
};

export default Canvas;
