class Sirena {
  constructor() {
    this.x = random(width);         
    this.y = random(-200, -50);     
    this.velocidad = random(2, 4);  
    this.tam = 80;         
    this.tocada = false;
  }
  mostrar() {
    image(imgSirena, this.x, this.y, this.tam, this.tam);
  }
  
  caen() {
    this.y += this.velocidad;

    if (this.y > height + 50) { //vuelve desde arriba
      this.y = random(-200, -100);
      this.x = random(width);
      this.velocidad = random(2, 4);
    }
  }}
