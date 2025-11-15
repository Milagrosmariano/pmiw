class Barco {
  constructor() {
    this.x = width / 2;     
    this.y = height - 110;  
    this.ancho = 140;       
    this.alto = 100;
  }
  
  mostrar() {
    image(imgBarco, this.x, this.y, this.ancho, this.alto);
  }

  moverTeclas() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    if (this.x < 0) {  //no se pasa del size
      this.x = 0;
    }
    if (this.x + this.ancho > width) {
      this.x = width - this.ancho;
    }
  }
}
