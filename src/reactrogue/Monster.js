import Entity from './Entity';

class Monster extends Entity {
  constructor(x, y, size, attributes, player, world) {
    super(x, y, size);
    this.attributes = attributes;
    this.player = player;
    this.world = world;
  }

  action(verb) {
    if (verb === 'move') {
      //attack
      console.log('Player attacks monster:' + this.attributes.name);
      // this.player.add(this);
      // this.world.remove(this);
    }
  }

  render(context) {
    context.fillStyle = 'red'; //Yellow
    super.render(context);

    context.fillStyle = 'black';
    context.textBaseline = 'hanging';
    context.font = '16px Helvetica';
    context.fillText(
      this.attributes.name[0].toLowerCase(),
      this.x * this.size + 4,
      this.y * this.size + 3
    );
  }
}

export default Monster;
