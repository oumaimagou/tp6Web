
// interaction.js

class DnD {
  constructor() {
    this.initialX = 0;
    this.initialY = 0;
    this.finalX = 0;
    this.finalY = 0;
    this.dragging = false; // To track if drag is in progress

    // Bind this to each method
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
  }

  mouseDownHandler(evt) {
    const { x, y } = getMousePosition(canvas, evt);
    this.initialX = x;
    this.initialY = y;
    this.dragging = true;
    console.log(`Start: ${x}, ${y}`);
  }

  mouseMoveHandler(evt) {
    if (this.dragging) {
      const { x, y } = getMousePosition(canvas, evt);
      console.log(`Moving: ${x}, ${y}`);
    }
  }

  mouseUpHandler(evt) {
    if (this.dragging) {
      const { x, y } = getMousePosition(canvas, evt);
      this.finalX = x;
      this.finalY = y;
      this.dragging = false;
      console.log(`Stop: ${x}, ${y}`);
    }
  }
}

// Helper function to get mouse position
function getMousePosition(canvas, evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

// Assume canvas initialization code is here
// Example: let canvas = document.getElementById('myCanvas');

let dnd = new DnD();
canvas.addEventListener('mousedown', dnd.mouseDownHandler);
canvas.addEventListener('mousemove', dnd.mouseMoveHandler);
canvas.addEventListener('mouseup', dnd.mouseUpHandler);



