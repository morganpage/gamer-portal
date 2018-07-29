import Entity from './Entity';

class Player extends Entity {
  inventory = [];
  observers = [];

  add(item) {
    this.inventory.push(item);
    this.broadcast();
  }

  drop(item) {
    this.inventory = this.inventory.filter(i => i !== item);
    this.broadcast();
  }
  // drop(index) {
  //   this.inventory.splice(0, 1);
  //   this.broadcast();
  // }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  nextposition(dx, dy) {
    return { x: this.x + dx, y: this.y + dy };
  }

  render(context) {
    context.fillStyle = '#eee';
    context.textBaseline = 'hanging';
    context.font = '16px Helvetica';
    context.fillText('@', this.x * this.size, this.y * this.size + 1);
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  broadcast() {
    this.observers.forEach(subscriber => subscriber());
  }
}

export default Player;
