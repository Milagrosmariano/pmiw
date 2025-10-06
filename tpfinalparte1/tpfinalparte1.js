let imagen = [];
let indice = 0; 
let posXBoton, posYBoton, tamBoton;
let posXBoton2, posYBoton2;

function preload() {
  for (let i = 0; i <= 20; i++) {
    imagen[i] = loadImage('data/imagen' +i+ '.jpeg');
  }
}

function setup() {
  createCanvas(640, 480);
  tamBoton = 50;
  posXBoton = width / 6;
  posYBoton = height - height / 4;
  posXBoton2 = width - width / 3;
  posYBoton2 = height - height / 4;
  textSize(14);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  image(imagen[indice], 0, 0);

  //si estamos en la img 3, aparecen opciones A y B
  if (indice === 3) {
    dibujarBoton(posXBoton, posYBoton, "Va al camarote");
    dibujarBoton(posXBoton2, posYBoton2, "Se queda escuchando");
    } 
    //Img 7 (bifurcación) 
  else if (indice === 7) {
    dibujarBoton(posXBoton, posYBoton, "Se queda dentro");
    dibujarBoton(posXBoton2, posYBoton2, "Va a cubierta");}
  //Img 7 (bifurcación)
  else if (indice === 13) {
    dibujarBoton(posXBoton, posYBoton, "Se esconde");
    dibujarBoton(posXBoton2, posYBoton2, "La sigue");}
  //img 16 (Primer final)
  else if (indice === 16) {
    dibujarBoton(posXBoton, posYBoton, "Reiniciar");
    dibujarBoton(posXBoton2, posYBoton2, "Créditos");
    fill(255);
    text("Fin!", width/2, height/4);
    }
  //img 19 (Segundo final)
  else if (indice === 19) {
    dibujarBoton(posXBoton, posYBoton, "Reiniciar");
    dibujarBoton(posXBoton2, posYBoton2, "Créditos");
    fill(255);
    text("Fin!", width/2, height/4);
    }
  //img 20 (creditos)
  else if (indice === 20) {
    dibujarBoton(posXBoton, posYBoton, "Reiniciar");
    }
  //si estamos en las demas, volver y sig
  else {
    if (indice > 0) dibujarBoton(posXBoton, posYBoton, "Volver");
    if (indice < imagen.length - 1) dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
}

function dibujarBoton(x, y, texto) {
  fill(255);
  rect(x, y, tamBoton * 3, tamBoton, 15);
  fill(0);
  textAlign(CENTER, CENTER); 
  text(texto, x + (tamBoton * 3) / 2, y + tamBoton / 2);
}

function mousePressed() {
  //bifurcación (img 3)
  if (indice === 3) {
    if (click(posXBoton, posYBoton)) indice = 4;  //cam A
    else if (click(posXBoton2, posYBoton2)) indice = 10; //cam B
  } 
  //bifurcación (img 7)
  else if (indice === 7) {
    if (click(posXBoton, posYBoton)) indice = 8;  
    else if (click(posXBoton2, posYBoton2)) indice = 11; 
  } 
  //bifurcación (img 13)
  else if (indice === 13) {
    if (click(posXBoton, posYBoton)) indice = 14;  
    else if (click(posXBoton2, posYBoton2)) indice = 17; 
  } 
  //finales
  else if (indice === 16 || indice === 19) {
    if (click(posXBoton, posYBoton)) indice = 0;  //inicio
    else if (click(posXBoton2, posYBoton2)) indice = 20; //creditos
  }
  //creditos
  else if (indice === 20) {
    if (click(posXBoton, posYBoton)) indice = 0;
  }
  //en el resto
  else {
    if (click(posXBoton, posYBoton) && indice > 0) indice--;
    else if (click(posXBoton2, posYBoton2) && indice < imagen.length - 1) indice++;
  }
}

function click(x, y) { //con retorno
  return mouseX > x && mouseX < x + tamBoton * 2 && mouseY > y && mouseY < y + tamBoton;
}
