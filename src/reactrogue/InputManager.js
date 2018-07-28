const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  A: 65,
  D: 68,
  W: 87,
  S: 83,
  SPACE: 32,
  ENTER: 13
};

class InputManager {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  broadcast(action, data) {
    this.observers.forEach(subscriber => subscriber(action, data));
  }

  handleKeys(e) {
    e.preventDefault();
    let keys = this.pressedKeys;

    switch (e.keyCode) {
      case KEY.LEFT:
      case KEY.A:
        this.broadcast('move', { x: -1, y: 0 });
        break;
      case KEY.RIGHT:
      case KEY.D:
        this.broadcast('move', { x: 1, y: 0 });
        break;
      case KEY.UP:
      case KEY.W:
        this.broadcast('move', { x: 0, y: -1 });
        break;
      case KEY.DOWN:
      case KEY.S:
        this.broadcast('move', { x: 0, y: 1 });
        break;
      case KEY.SPACE:
        break;
      case KEY.ENTER:
        break;
      default:
        break;
    }

    this.pressedKeys = keys;
  }

  bindKeys() {
    document.addEventListener('keydown', this.handleKeys.bind(this));
  }
  unbindKeys() {
    document.removeEventListener('keydown', this.handleKeys.bind(this));
  }
}

export default InputManager;
