let population;

function setup() {
  createCanvas(1000, 500);

  population = new Population();
  population.draw();
}

function mouseClicked() {
  if (mouseX >= 10 && mouseX < 990 && mouseY >= 10 && mouseY < 570) {
    const tileSize = 120;
    const padding = 10;

    const col = int((mouseX - padding) / (tileSize + 2 * padding));
    const row = int((mouseY - padding) / (tileSize + 2 * padding));


    const tileIndex = col + row * 7;

    if (tileIndex >= 0 && tileIndex < population.tiles.length) {
      const clickedTile = population.tiles[tileIndex];

      if (clickedTile.isClicked) {
        clickedTile.isClicked = false;
        clickedTile.color = color(237, 237, 225);
      }
      else {
        clickedTile.isClicked = true;
        clickedTile.color = color(207, 207, 200);
      }

      population.draw();
    }

  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    population = population.evolve();
    population.draw();
  }
  if (keyCode === 115 || keyCode === 83) {
    for (let i = 0; i < 21; i++) {
      if (population.tiles[i].isClicked) {
        let img = population.tiles[i].createImage();
        img.save('tile.png');
      }
    }
  }
  if (keyCode === 70 || keyCode === 102) {
    let finalTiles = [];
    let img;
    for (let i = 0; i < 21; i++) {
      if (population.tiles[i].isClicked) {
        img = population.tiles[i].createImage();
        finalTiles.push(img);
      }
    }

    let final = createGraphics(500, 500);
    for (let i = 0; i < 20; i++) {
      let index = Math.floor(random(finalTiles.length));
      for (let j = 0; j < 20; j++) {
        let x = i * 25;
        let y = j * 25;

        final.image(finalTiles[index], y, x, 25, 25);
      }
    }
    final.save('final.png');
  }
}
