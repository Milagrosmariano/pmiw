class Juego {
constructor(){
this.estado = 0;
this.vidas = 3;
this.tiempo = 10;
this.tiempoEmpieza = 0;
this.barco = new Barco();
}

mostrar() {
    if (this.estado === 0) {
      image(imgInicio, 0, 0, width, height);
      fill(0);
      textSize(40);
      text("El último canto", width / 2 , height / 2 - 140);
      textSize(20);
      text("Logra que el barco no toque ninguna sirena", width / 2 , height / 2 + 110);
      this.dibujarBoton(width / 2 - 75, height / 2 + 160, 150, 60, "Siguiente");
    }

    if (this.estado === 1) {
      image(imgOceano, 0, 0, width, height);
      this.barco.mostrar();
      this.barco.moverTeclas();
    }
  }
  
  dibujarBoton(x, y, ancho, alto, texto) {
    fill(255);
    rect(x, y, ancho, alto);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(texto, x + ancho / 2, y + alto / 2);
  }
  click() {
    let x = width / 2 - 75;
    let y = height / 2 + 160;
    let ancho = 150;
    let alto = 60;
    if (this.estado === 0 && mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
      this.estado = 1;
    }
  }
}
