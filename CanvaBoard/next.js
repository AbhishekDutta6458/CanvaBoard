
// Set canvas dimensions
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 200;

// Get 2D drawing context
const ctx = canvas.getContext('2d');

// Set initial brush properties
let brushSize = brushSizeInput.value;
let brushColor = brushColorInput.value;
let isDrawing = false;

// Handle brush size change
brushSizeInput.addEventListener('input', () => {
  brushSize = brushSizeInput.value;
});

// Handle brush color change
brushColorInput.addEventListener('change', () => {
  brushColor = brushColorInput.value;
});

// Handle clear canvas button click
clearCanvasButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Handle mouse events
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mouseup', handleMouseUp);

// Handle mouse down event
function handleMouseDown(event) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Handle mouse move event
function handleMouseMove(event) {
  if (isDrawing) {
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.stroke();
  }
}

// Handle mouse up event
function handleMouseUp() {
  isDrawing = false;
  ctx.closePath();
}