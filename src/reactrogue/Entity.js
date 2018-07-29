class Entity {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
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

export default Entity;
