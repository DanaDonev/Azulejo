class Population {
  constructor() {
    this.tiles = this.generateTiles();
  }

  generateTiles() {
    let tiles = [];
    for (let i = 0; i < 21; i++) {
      let tile = new Tile();
      tiles.push(tile);
    }
    return tiles;
  }

  draw() {
    const padding = 10;
    const tileSize = 120;
    const frameSize = tileSize + 2 * padding;

    let x = padding;
    let y = padding;

    for (let i = 0; i < this.tiles.length; i++) {
      let tile = this.tiles[i];
      push();
      translate(x, y);
      stroke(0);
      strokeWeight(2);
      rect(0, 0, frameSize, frameSize);
      noStroke();
      translate(padding, padding);
      tile.draw(x, y);
      pop();

      x += frameSize;
      if (x + frameSize > width) {
        x = padding;
        y += frameSize;
      }
    }
  }

  evolve() {
    let newGeneration = new Population();
    let counterElite = 0;

    for (let i = 0; i < 21; i++) {
      if (this.tiles[i].isClicked) {
        newGeneration.tiles[counterElite] = this.tiles[i];
        counterElite++;
      }
    }

    if (counterElite > 1) {
      for (let i = counterElite; i < 21; i++) {
        let index = Math.floor(random(counterElite));
        let index2 = Math.floor(random(counterElite));
        while (index === index2) {
          index2 = Math.floor(random(counterElite));
        }

        let parent1 = newGeneration.tiles[index];
        let parent2 = newGeneration.tiles[index2];
        let child = parent1.onePointCrossover(parent2);

        newGeneration.tiles[i] = child;
      }
    }
    else {
      for (let i = 1; i < 21; i++) {
        newGeneration.tiles[i] = newGeneration.tiles[i].onePointCrossover(newGeneration.tiles[0]);
      }

    }

    for (let i = 14; i < 21; i++) {
      newGeneration.tiles[i].mutate();
    }

    return newGeneration;
  }
}
