// model.js
// Implémenter ici les 4 classes du modèle.
// model.js

class Form {
    constructor(color, thickness) {
      this.color = color;
      this.thickness = thickness;
    }
  }
  
  class Rectangle extends Form {
    constructor(initX, initY, finalX, finalY, color, thickness) {
      super(color, thickness);
      this.initX = initX;
      this.initY = initY;
      this.finalX = finalX;
      this.finalY = finalY;
    }
  }
  
  class Line extends Form {
    constructor(initX, initY, finalX, finalY, color, thickness) {
      super(color, thickness);
      this.initX = initX;
      this.initY = initY;
      this.finalX = finalX;
      this.finalY = finalY;
    }
  }
  
  class Drawing {
    constructor() {
      this.forms = [];
    }
  
    addForm(form) {
      this.forms.push(form);
    }
  
    getForms() {
      return this.forms;
    }
  }
  
// Ajout des fonctions paint aux prototypes

Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.rect(this.initX, this.initY, this.finalX - this.initX, this.finalY - this.initY);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.initX, this.initY);
    ctx.lineTo(this.finalX, this.finalY);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // Set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(elt) {
    elt.paint(ctx);
    });
};