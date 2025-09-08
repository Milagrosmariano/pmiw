//Milagros Mariano
//com1
//https://youtu.be/2BozSZj_bGU

let cubos;
let colorblanco, colornegro, colorgris;

function preload() {
cubos = loadImage('data/32.jpg');
}
function setup() {
  createCanvas(800, 400);
  colorblanco = color(255);
  colornegro  = color(0);
  colorgris   = color(130);
}

function draw() {
  background(87, 207, 224);
  noStroke();

  push();
  translate(400, -20);
  for (let fila = 0; fila < 7; fila++) {
    for (let colum = 0; colum < 6; colum++) {
      let x = colum * 78;
      let y = fila * 64;

      if (impar(fila)) {
        x += 39;
      }

      if (x - 39 >= -400) {
        cubo(x, y, 39, 24, 68, 49);
      }
    }
  }
  pop();

 image(cubos, 0, 0, 400, 400);
}

function cubo(x, y, ancho, alto1, alto2, prof) {
  push();
  translate(x, y);

  fill(colorblanco); 
  quad(0, -alto1, ancho, 0, 0, alto1, -ancho, 0);

  fill(colornegro); 
  quad(ancho, 0, 0, alto1, 0, alto2, ancho, prof);

  fill(colorgris); 
  quad(-ancho, 0, 0, alto1, 0, alto2, -ancho, prof);

  pop();
}

function impar(n) {
  if (n % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  colorblanco = color(random(255), random(255), random(255));
  colornegro  = color(random(255), random(255), random(255));
  colorgris   = color(random(255), random(255), random(255));
}

function keyPressed() {
  if (key === 'm' || key === 'M') {
    colorblanco = color(255);
    colornegro  = color(0);
    colorgris   = color(130);
  }
}
