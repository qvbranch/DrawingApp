const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
ctx.lineWidth = 2;

// // 그림판 프로토타입

// const colors = [
//   "#55efc4",
//   "#81ecec",
//   "#74b9ff",
//   "#a29bfe",
//   "#ffeaa7",
//   "#fab1a0",
//   "#ff7675",
//   "#fd79a8",
// ];

// const colors2 = [
//   "#574b90",
//   "#f8a5c2",
//   "#3dc1d3",
//   "#e66767",
//   "#303952",
//   "#f19066",
//   "#f5cd79",
//   "#546de5",
//   "#e15f41",
//   "#c44569",
// ];
// const onClick = (canvas, event) => {
//   ctx.beginPath();
//   ctx.moveTo(event.offsetX, event.offsetY);

//   const color = colors[Math.floor(Math.random() * colors.length)]; // 무작위로 색상 가져오고 올림(floor)해주기
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// };

// canvas.addEventListener("mousedown", (e) => {
//   onClick(canvas, e);
// });

let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
  isPainting = true;
}

function onMouseUp() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
