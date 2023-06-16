const shapeTypes = [
  'lines',
  'triangles',
  'squares',
  'pentagons',
  'hexagons',
  'heptagons',
  'octagons',
  'ellipses'
];

class Tile {

  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 120;
    this.color = color(237, 237, 225);
    this.shapes = this.generateRandomShapes();
    this.isClicked = false;
  }

  generateRandomShapes() {
    let shapes = [];

    for (let i = 0; i < 8; i++) {
      const randomType = random(shapeTypes);
      const randomNumber = int(random([4, 4, 6, 8, 12, 16]));
      const randomRadius = random(this.size / 10);
      const randomDistance = random(this.size / 2 - 10);
      const randomColor = random([[243, 207, 122], [49, 96, 187], [77, 144, 222], [85, 172, 114], [25, 51, 131]]);

      let shape = new Shape(randomType, randomNumber, randomRadius, randomDistance, randomColor);
      shapes.push(shape);
    }

    return shapes;
  }

  draw(x, y) {
    this.x = x;
    this.y = y;

    fill(this.color);
    rect(0, 0, this.size, this.size);

    for (let shape of this.shapes) {
      push();
      translate(this.size / 2, this.size / 2);
      if (shape.number === 4 && shape.radius2 > 10) { //i use the radius2 value to decide for the rotation
        rotate(radians(45));
      }
      shape.draw();
      pop();
    }
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  mutate() {
    for (let i = Math.floor(random(8)); i < 8; i++) {
      const randomType = random(shapeTypes);
      const randomNumber = int(random([4, 4, 6, 8, 12, 16]));
      const randomRadius = random(this.size / 10);
      const randomDistance = random(this.size / 2 - 10);
      const randomColor = random([[243, 207, 122], [77, 144, 222], [85, 172, 114], [25, 51, 131]]);

      let shape = new Shape(randomType, randomNumber, randomRadius, randomDistance, randomColor);

      this.shapes[i] = shape;
    }
  }

  onePointCrossover(tile2) {
    let child = new Tile();
    for (let i = 0; i < 8; i++) {
      let thePoint = Math.floor(random(8));
      if (i < thePoint) {
        child.shapes[i] = this.shapes[i];
      }
      else {
        child.shapes[i] = tile2.shapes[i];
      }
    }
    return child;
  }

  createImage() {

    const canvas = createGraphics(this.size + 20, this.size + 20);
    canvas.background(255);

    canvas.translate(10, 10);
    canvas.noStroke();
    canvas.fill(color(237, 237, 225));
    canvas.rect(0, 0, this.size, this.size);
    for (let shape of this.shapes) {
      canvas.push();
      canvas.translate(this.size / 2, this.size / 2);
      shape.drawCanvas(canvas);
      canvas.pop();
    }

    return canvas;
  }

}
