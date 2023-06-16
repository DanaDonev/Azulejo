class Shape {
  constructor(type, number, radius, distance, colorr) {
    this.type = type.toLowerCase();
    this.number = number;
    this.radius = radius;
    this.distance = distance;
    this.colorr = colorr;
    this.radius2 = int(random(20));
  }
  

  draw() {
    fill(this.colorr);
    switch (this.type) {
      case 'lines':
        polarLines(this.number, this.radius, this.distance);
        break;
      case 'triangles':
        polarTriangles(this.number, this.radius, this.distance);
        break;
      case 'squares':
        polarSquares(this.number, this.radius, this.distance);
        break;
      case 'pentagons':
        polarPentagons(this.number, this.radius, this.distance);
        break;
      case 'hexagons':
        polarHexagons(this.number, this.radius, this.distance);
        break;
      case 'heptagons':
        polarHeptagons(this.number, this.radius, this.distance);
        break;
      case 'octagons':
        polarOctagons(this.number, this.radius, this.distance);
        break;
      case 'ellipses':
        polarEllipses(this.number, this.radius, this.radius2, this.distance);
        break;
      default:
        print('Error: Invalid shape.');
        break;
    }
  }


  drawCanvas(canvas) {
    canvas.push();
    canvas.fill(this.colorr);
    switch (this.type) {
      case 'lines':
        canvas.polarLines(this.number, this.radius, this.distance);
        break;
      case 'triangles':
        canvas.polarTriangles(this.number, this.radius, this.distance);
        break;
      case 'squares':
        canvas.polarSquares(this.number, this.radius, this.distance);
        break;
      case 'pentagons':
        canvas.polarPentagons(this.number, this.radius, this.distance);
        break;
      case 'hexagons':
        canvas.polarHexagons(this.number, this.radius, this.distance);
        break;
      case 'heptagons':
        canvas.polarHeptagons(this.number, this.radius, this.distance);
        break;
      case 'octagons':
        canvas.polarOctagons(this.number, this.radius, this.distance);
        break;
      case 'ellipses':
        canvas.polarEllipses(this.number, this.radius, this.radius2, this.distance);
        break;
      default:
        print('Error: Invalid shape.');
        break;
    }
    canvas.pop();
  }
}
