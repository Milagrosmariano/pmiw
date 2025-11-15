class Juego {
  constructor() {
    this.estado = 0;
    this.vidas = 3;
    this.tiempo = 10;
    this.tiempoEmpieza = 0;
    this.choques = 0;
    this.barco = new Barco();
    this.sirenas = [];
    this.contador = new Contador(20);

    for (let i = 0; i < 5; i++) {
      this.sirenas[i] = new Sirena();
    }
  }

  mostrar() {
    if (this.estado === 0) {
      image(imgInicio, 0, 0, width, height);
      fill(0);
      textAlign(CENTER);
      textSize(40);
      text("El último canto", width / 2, height / 2 - 140);
      textSize(20);
      text("- Mueve el barco con las flechas ← →", width / 2, height / 2 - 70);
      text("- Esquiva las sirenas que caen", width / 2, height / 2 - 20);
      text("- Si te tocan 3 veces, pierdes", width / 2, height / 2 + 30);
      text("- Sobrevive hasta que acabe el tiempo para ganar", width / 2, height / 2 + 80);
      this.dibujarBoton(width / 2 - 75, height / 2 + 160, 150, 60, "Siguiente");
    }

    else if (this.estado === 1) {
      image(imgOceano, 0, 0, width, height);
      for (let i = 0; i < this.sirenas.length; i++) {
        this.sirenas[i].caen();
        this.sirenas[i].mostrar();
      }

      this.barco.mostrar();
      this.barco.moverTeclas();
      this.chocar();
      
      let termino = this.contador.mostrar(); //contador

      if (termino && this.estado === 1) {
        this.estado = 3; // gano si termino el tiempo
      }
    }

    else if (this.estado === 2) {
      background(255, 0, 0);
      fill(255);
      textAlign(CENTER);
      textSize(50);
      text("¡PERDISTE!", width / 2, height / 2 - 60);
      this.dibujarBoton(width / 2 - 160, height / 2 + 60, 150, 60, "Reiniciar");
      this.dibujarBoton(width / 2 + 10, height / 2 + 60, 150, 60, "Créditos");
      sonido.stop();
    }

    else if (this.estado === 3) {
      background(0, 200, 0);
      fill(255);
      textAlign(CENTER);
      textSize(50);
      text("¡GANASTE!", width / 2, height / 2 - 60);
      this.dibujarBoton(width / 2 - 160, height / 2 + 60, 150, 60, "Reiniciar");
      this.dibujarBoton(width / 2 + 10, height / 2 + 60, 150, 60, "Créditos");
      sonido.stop();
    }

    else if (this.estado === 5) {
      background(240);
      fill(0);
      textAlign(CENTER);
      textSize(35);
      text("Créditos", width / 2, 100);
      textSize(20);
      text("Desarrollado por Lucía Gómez y Milagros Mariano", width / 2, height / 2 - 20);
      text("Comisión 1 - Programación para Medios Interactivos (PMIW)", width / 2, height / 2 + 20);
      this.dibujarBoton(width / 2 - 75, height / 2 + 120, 150, 60, "Volver");
    }
  }

  dibujarBoton(x, y, ancho, alto, texto) {
    noStroke(); 
    if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) { //mouse color
      fill(0, 155, 255); 
    } else {
      fill(255); 
    }
    rect(x, y, ancho, alto, 15);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(23);
    text(texto, x + ancho / 2, y + alto / 2);
  }

  click() {
  let ancho = 150;
  let alto = 60;
  
  if (this.estado === 0 && //bot siguiente
    mouseX > width / 2 - 75 && mouseX < width / 2 + 75 &&
    mouseY > height / 2 + 160 && mouseY < height / 2 + 220) {

    this.estado = 1;
    this.choques = 0;
    this.contador = new Contador(20);

    if (!sonido.isPlaying()) {
      sonido.loop(); 
    }
  }

 if (this.estado === 2 || this.estado === 3) {
    if (mouseX > width / 2 - 160 && mouseX < width / 2 - 10 && //bot reiniciar
        mouseY > height / 2 + 60 && mouseY < height / 2 + 120) {

      this.estado = 0;
      this.choques = 0;
      this.contador = new Contador(20);

      this.barco = new Barco(); //reinicio barcoysiren
      this.sirenas = [];
      for (let i = 0; i < 5; i++) {
        this.sirenas[i] = new Sirena();
      }
      return; 
    }
    if (mouseX > width / 2 + 10 && mouseX < width / 2 + 160 && //bot creditos
        mouseY > height / 2 + 60 && mouseY < height / 2 + 120) {

      this.estado = 5;
      return;
    }
  }
  if (this.estado === 5 && //bot volver de creditos
      mouseX > width / 2 - 75 && mouseX < width / 2 + 75 &&
      mouseY > height / 2 + 120 && mouseY < height / 2 + 180) {

    this.estado = 0;
  }
}


  chocar() {
    if (this.estado !== 1) return;

    let huboChoque = false;

    for (let i = 0; i < this.sirenas.length; i++) {
      let distancia = dist(
        this.barco.x + this.barco.ancho / 3,
        this.barco.y + this.barco.alto / 3,
        this.sirenas[i].x,
        this.sirenas[i].y
      );

      if (distancia < this.barco.ancho / 2) {
        huboChoque = true;

        if (!this.sirenas[i].tocada) {
          this.choques++;
          this.sirenas[i].tocada = true;
        }
      } else {
        this.sirenas[i].tocada = false;
      }
    }

    if (huboChoque) {
      let vibraX = random(-3, 3);
      let vibraY = random(-3, 3);
      image(imgBarco, this.barco.x + vibraX, this.barco.y + vibraY, this.barco.ancho, this.barco.alto);
    }

    if (this.choques >= 3) {
      this.estado = 2;
    }
  }
}


class Contador {
  constructor(duracionSegundos) {
    this.duracion = duracionSegundos;
    this.inicio = frameCount;
  }

  mostrar() {
    let tiempoPasado = (frameCount - this.inicio) / 60;
    let tiempoRestante = this.duracion - tiempoPasado;

    fill(0);
    textSize(25);
    text("Tiempo: " + floor(tiempoRestante), 70, 25);

    if (tiempoRestante <= 0) {
      return true;
    } else {
      return false;
    }
  }
}
