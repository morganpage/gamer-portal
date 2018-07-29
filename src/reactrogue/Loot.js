import Entity from './Entity';

class Loot extends Entity {
  constructor(x, y, size, attributes, player, world) {
    super(x, y, size);
    this.attributes = attributes;
    this.player = player;
    this.world = world;
  }

  action(verb) {
    if (verb === 'move') {
      //pickup
      this.player.add(this);
      this.world.remove(this);
    }
    if (verb === 'drop') {
      this.player.drop(this);
      this.y = this.player.y - 1;
      this.x = this.player.x - 1;
      this.world.movetospace(this);
      this.world.add(this);
    }
  }

  render(context) {
    context.fillStyle = '#F3FF35'; //Yellow
    super.render(context);
  }
}

export default Loot;
