// Lucia Gomez y Milagros Mariano
// com1
//https://youtu.be/naoPxPv9w1o
let inicioImagen0 = 0;
let imagen = [];
let indice = 0; 
let posXBoton, posYBoton, tamBoton;
let posXBoton2, posYBoton2;
let frag = ["Un barco cruza el mar cubierto de niebla. Johnny mira curioso desde cubierta","Un marinero cuenta la leyenda de la sirena que atrae a los navegantes", "La neblina se espesa y se oye un canto lejano","Johnny entra al camarote","Johnny al bajar con el resto, el capitan asegura que todo es imagincaion","El canto sigue sonando afuera, como si lo buscara a el","Johnny siente la tentacion de salir otra vez","Decide quedarse adentro","Sube de nuevo a cubierta","Johnny se queda escuchando","En cubierta, la figura de una mujer aparece entre la bruma","Tiene el cabello flotando como algas y canta mirandolo fijo","Extiende su mano hacia Johnny","Johnny resiste y se esconde","El barco avanza, la niebla se disipa y la sirena desaparece","Johnny llega sano y salvo al puerto. Recuerda el canto, pero sabe que eligio vivir","Johnny la sigue","Johnny toma la mano de la sirena y desaparece en la bruma","Los marineros solo oyen un grito ahogado. Johnny nunca regresa"]
let fondo,especial,pantalla;
let sirenasonando, fondosonando;


function preload() {
  for (let i = 0; i <= 19; i++) {
    imagen[i] = loadImage('data/imagen' +i+ '.jpeg');
  }
  fondo = loadSound('data/oceano.mp3');
  especial = loadSound('data/sirena.mp3');
}

function setup() {
  createCanvas(640, 480);
  tamBoton = 50;
  posXBoton = width / 6;
  posYBoton = height - height / 6;
  posXBoton2 = width - width / 3;
  posYBoton2 = height - height / 6;
  textSize(14);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  image(imagen[indice], 0, 0);
  
  if (!fondosonando) {
    fondo.amp(0.3);
    fondo.loop();
    fondosonando = true;
  }
  
  if (indice === 3) {
    if (!sirenasonando) {
      especial.amp(0.5);
      especial.play();
      sirenasonando = true; 
    }
  }
  
  if (indice === 0) {
    if (frameCount - inicioImagen0 > 180) { 
      indice = 1;
    } 
  fill(0); 
  textSize(24); 
  text("Ray Bradbury", width / 2, height - 60); 
  textSize(14);
  }
  
  if(indice === 1){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[0], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  
  if(indice === 2){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[1], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  
 if(indice === 3){
  fill(255); 
  textSize(15);
  textAlign(CENTER, CENTER);
  text(frag[2], width / 2, height - 120);
  fill(0);
  dibujarBoton(posXBoton, posYBoton, "Va al camarote");
  dibujarBoton(posXBoton2, posYBoton2, "Se queda escuchando");
  }
  
 if(indice === 4){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[3], width / 2, height - 120);
  dibujarBoton(posXBoton, posYBoton, "Volver");
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
   if(indice === 5){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[4], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  if(indice === 6){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[5], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  if(indice === 7){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[6], width / 2, height - 120);
  dibujarBoton(posXBoton, posYBoton, "Se queda dentro");
  dibujarBoton(posXBoton2, posYBoton2, "Va a cubierta");
  }
  if(indice === 8){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[7], width / 2, height - 120);
  dibujarBoton(posXBoton, posYBoton, "Volver");
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  if(indice === 9){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[8], width / 2, height - 120);
  dibujarBoton(posXBoton, posYBoton, "Volver");
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  if(indice === 10){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[9], width / 2, height - 120);
  dibujarBoton(posXBoton, posYBoton, "Volver");
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  if(indice === 11){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[10], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
   if(indice === 12){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[11], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
   if(indice === 13){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[12], width / 2, height - 120);
  dibujarBoton(posXBoton, posYBoton, "Se esconde");
  dibujarBoton(posXBoton2, posYBoton2, "La sigue");
  }
   if(indice === 14){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[13], width / 2, height - 120);
  dibujarBoton(posXBoton, posYBoton, "Volver");
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  if(indice === 15){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[14], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  if(indice === 16){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[15], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Reiniciar");
  }
  if(indice === 17){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[16], width / 2, height - 120);
  dibujarBoton(posXBoton, posYBoton, "Volver");
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  } 
  if(indice === 18){
  fill(255); 
  textSize(17);
  textAlign(CENTER, CENTER);
  text(frag[15], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Siguiente");
  }
  if(indice === 19){
  fill(255); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text(frag[18], width / 2, height - 120);
  dibujarBoton(posXBoton2, posYBoton2, "Reiniciar");
  }
}

function dibujarBoton(x, y, texto) {
  fill(255);
  rect(x, y, tamBoton * 3, tamBoton, 15);
  fill(0);
  textAlign(CENTER, CENTER); 
  text(texto, x + (tamBoton * 3) / 2, y + tamBoton / 2);
}

function click(x, y) { //con retorno
 return mouseX > x && mouseX < x + 150 && mouseY > y && mouseY < y + 50;
}

function mousePressed() {
  //bifurcación (img 3)
  if (indice === 3) {
    if (click(posXBoton, posYBoton)) indice = 4;  //cam A
    else if (click(posXBoton2, posYBoton2)) indice = 10; //cam B
  } 
 else if (indice === 4 || indice === 14 ) {
     if (click(posXBoton, posYBoton) && indice > 0) indice--;
     else if (click(posXBoton2, posYBoton2)) indice++;
  } 
  else if (indice === 8) {
     if (click(posXBoton, posYBoton)) indice--;
     else if (click(posXBoton2, posYBoton2)) indice=15;
  } 
   else if (indice === 9) {
     if (click(posXBoton, posYBoton)) indice = 7;
     else if (click(posXBoton2, posYBoton2)) indice=11;
  } 
   else if (indice === 10) {
     if (click(posXBoton, posYBoton)) indice = 3;
     else if (click(posXBoton2, posYBoton2)) indice++;
  } 
   else if (indice === 14) {
     if (click(posXBoton, posYBoton)) indice = 13;
     else if (click(posXBoton2, posYBoton2)) indice++;
  } 
   else if (indice === 17) {
     if (click(posXBoton, posYBoton)) indice = 13;
     else if (click(posXBoton2, posYBoton2)) indice++;
  } 
  //bifurcación (img 7)
  else if (indice === 7) {
    if (click(posXBoton, posYBoton)) indice = 8;  
    else if (click(posXBoton2, posYBoton2)) indice = 9; 
  } 
  //bifurcación (img 13)
  else if (indice === 13) {
    if (click(posXBoton, posYBoton)) indice = 14;  
    else if (click(posXBoton2, posYBoton2)) indice = 17; 
  } 
  //final
  else if (indice === 16 || indice === 19) {
    if (click(posXBoton2, posYBoton2)) {
    indice = 0;
    inicioImagen0 = frameCount;
    } 
  } 
  else {
    if (click(posXBoton2, posYBoton2)) indice++;
  } 
} 

function keyPressed() {
  if (fondosonando) {
    fondo.stop();
    fondosonando = false;
  }
}
  function mouseClicked() {
  if (sirenasonando) {
    especial.stop();
    sirenasonando = false; 
} }
