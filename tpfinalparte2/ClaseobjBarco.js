class Barco {
constructor(){
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
  }
}
