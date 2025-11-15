//Lucia Gomez y Milagros Mariano
//Com1
//https://www.youtube.com/watch?v=QpzDsEq1c0A
let imgInicio, imgBarco, imgOceano, imgSirena;
let sonido;
let elUltimoCanto;

function preload(){
imgInicio = loadImage('data/inicio.jpeg');
imgOceano = loadImage('data/oceano.jpg');
imgBarco = loadImage('data/barco.png');
imgSirena = loadImage('data/sirena.png');
sonido = loadSound('data/canto.mp3')
}

function setup() {
createCanvas(640,480);
elUltimoCanto = new Juego();
}


function draw() {
background(400);
elUltimoCanto.mostrar();
elUltimoCanto.chocar();
}

function mousePressed() {
elUltimoCanto.click();
}

 
