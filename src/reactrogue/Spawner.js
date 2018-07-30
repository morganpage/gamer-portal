import Loot from './Loot';
import Monster from './Monster';

const lootTable = [
  { name: 'Sword' },
  { name: 'Potion' },
  { name: 'Gold' },
  { name: 'Armor' }
];

const monsterTable = [
  { name: 'Ogre' },
  { name: 'Kobold' },
  { name: 'Slime' },
  { name: 'Dragon' }
];

class Spawner {
  constructor(player, world) {
    this.world = world;
    this.player = player;
  }

  spawn(spawnCount, createEntity) {
    for (let count = 0; count < spawnCount; count++) {
      let entity = createEntity();
      this.world.add(entity);
      this.world.movetospace(entity);
    }
  }

  spawnLoot(spawnCount) {
    this.spawn(spawnCount, () => {
      return new Loot(
        getRandomInt(this.world.width - 1),
        getRandomInt(this.world.height - 1),
        this.world.tilesize,
        lootTable[getRandomInt(lootTable.length)],
        this.player,
        this.world
      );
    });
  }

  spawnMonster(spawnCount) {
    this.spawn(spawnCount, () => {
      return new Monster(
        getRandomInt(this.world.width - 1),
        getRandomInt(this.world.height - 1),
        this.world.tilesize,
        monsterTable[getRandomInt(lootTable.length)],
        this.player,
        this.world
      );
    });
  }

  // pickupAll() {
  //   this.world.entities.map(e => e.action('move'));
  // }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;
