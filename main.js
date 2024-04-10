
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////
// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//rec.paint(ctx);
//var ligne = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

let drawing = new Drawing();
let rect = new Rectangle(10, 10, 60, 60, 'red', 2);
let line = new Line(70, 70, 100, 100, 'blue', 1);
drawing.addForm(rect);
drawing.addForm(line);

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
drawing.paint(ctx, canvas); // Cette ligne va dessiner le contenu de votre dessin sur le canvas
