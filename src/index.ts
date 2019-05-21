import "./index.css";

const eTime: HTMLSpanElement = document.getElementById("eTime");
const scanLate: HTMLSpanElement = document.getElementById("scanLate");

let lastExecTime: number = 0;
let isDragging: boolean = false;
let count: number = 0;
let prevEvent: PointerEvent;

const handlePointerDown = (e: PointerEvent) => {
  isDragging = true;
  lastExecTime = performance.now();
};

const handlePointerMove = (e: PointerEvent) => {
  if (isDragging) {
    const elapsedTime = performance.now() - lastExecTime;
    eTime.textContent = elapsedTime.toString();
    scanLate.textContent = getScanLate(elapsedTime).toString();
    lastExecTime = performance.now();
  }
};

const handlePointerUp = (e: PointerEvent) => {
  isDragging = false;
  //lastExecTime = performance.now();
};

const getScanLate = (time: number): number => {
  return Math.floor(1000 / time);
};

// document.body.addEventListener("pointerdown", handlePointerDown);
// document.body.addEventListener("pointermove", handlePointerMove);
// document.body.addEventListener("pointerup", handlePointerUp);

document.body.addEventListener("touchstart", handlePointerDown);
document.body.addEventListener("touchmove", handlePointerMove);
document.body.addEventListener("touchend", handlePointerUp);
