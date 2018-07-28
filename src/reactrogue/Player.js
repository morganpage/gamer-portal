class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    //this.char = '@';
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  nextposition(dx, dy) {
    return { x: this.x + dx, y: this.y + dy };
  }

  render(context) {
    context.fillStyle = '#FF0000';
    context.fillRect(
      this.x * this.size,
      this.y * this.size,
      this.size,
      this.size
    );
  }
}

export default Player;
