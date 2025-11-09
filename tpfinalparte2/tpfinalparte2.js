//Lucia Gomez y Milagros Mariano
//Com1
let imgInicio, imgBarco, imgOceano, imgSirena;
let elUltimoCanto;


function preload(){
imgInicio = loadImage('data/inicio.jpeg');
imgOceano = loadImage('data/oceano.jpg');
imgBarco = loadImage('data/barco.png');
imgSirena = loadImage('data/sirena.png');
}

function setup() {
createCanvas(640,480);

  elUltimoCanto = new Juego();
}


function draw() {
    background(400);
elUltimoCanto.mostrar();
}

function mousePressed() {
  elUltimoCanto.click();
}

 
