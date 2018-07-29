import Loot from './Loot';

const lootTable = [
  { name: 'Sword' },
  { name: 'Potion' },
  { name: 'Gold' },
  { name: 'Armor' }
];

class LootSpawner {
  constructor(player, world) {
    this.world = world;
    this.player = player;
  }

  spawn(spawnCount) {
    for (let count = 0; count < spawnCount; count++) {
      let loot = new Loot(
        getRandomInt(this.world.width),
        getRandomInt(this.world.height),
        this.world.tilesize,
        lootTable[getRandomInt(lootTable.length)],
        this.player,
        this.world
      );
      this.world.add(loot);
      this.world.movetospace(loot);
    }
  }

  pickupAll() {
    this.world.entities.map(e => e.action('move'));
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default LootSpawner;
