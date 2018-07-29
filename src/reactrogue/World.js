import ROT from 'rot-js';

class World {
  constructor(context, width, height, tilesize) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.tilesize = tilesize;
    this.entities = [];

    var world = new Array(this.width);
    for (let i = 0; i < this.width; i++) {
      world[i] = new Array(this.height);
      for (let j = 0; j < this.height; j++) {
        world[i][j] = 1; //Fill with walls
      }
    }
    this.worldmap = world;
    this.createMap();
  }

  wayclear(tile) {
    return this.worldmap[tile.x][tile.y] === 0;
  }

  createMap() {
    var map = new ROT.Map.Cellular(this.width, this.height, {
      connected: true
    });
    map.randomize(0.5);
    var userCallback = (x, y, value) => {
      if (x === 0 || y === 0 || x === this.width - 1 || y === this.height - 1)
        //Leave walls around edges intact
        return;
      this.worldmap[x][y] = value === 0 ? 1 : 0; //Create walls(1) where cell is 0
    };
    for (let i = 0; i < 1; i++) map.create();
    map.create(userCallback);
    map.connect(
      userCallback,
      1
    );
  }

  getEntity(tile) {
    return this.entities.find(
      entity => entity.x === tile.x && entity.y === tile.y
    );
  }

  add(entity) {
    this.entities.push(entity);
  }

  remove(entity) {
    this.entities = this.entities.filter(e => e !== entity);
    this.render();
  }

  movetospace(entity) {
    for (let x = entity.x; x < this.width; x++) {
      for (let y = entity.y; y < this.height; y++) {
        if (this.worldmap[x][y] === 0 && !this.getEntity({ x, y })) {
          entity.x = x;
          entity.y = y;
          return;
        }
      }
    }
  }

  drawWall(x, y) {
    this.context.fillStyle = '#000';
    this.context.fillRect(
      x * this.tilesize,
      y * this.tilesize,
      this.tilesize,
      this.tilesize
    );
  }

  render() {
    this.context.clearRect(
      0,
      0,
      this.width * this.tilesize,
      this.height * this.tilesize
    );

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (this.worldmap[x][y] === 1) this.drawWall(x, y);
      }
    }

    this.entities.forEach(entity => {
      entity.render(this.context);
    });
  }
}

export default World;
