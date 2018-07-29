import React from 'react';
import './ReactRogue.css';
import Player from './Player';
import World from './World';
import InputManager from './InputManager';
import Inventory from './Inventory/Inventory';

const WORLD_WIDTH = 40;
const WORLD_HEIGHT = 40;
const TILESIZE = 16;

class ReactRogue extends React.Component {
  constructor() {
    super();
    this.inputManager = new InputManager();
    // this.state = {
    //   inputManager: new InputManager(),
    //   world: {
    //     width: 40,
    //     height: 40,
    //     tilesize: 16
    //   },
    //   player: { x: 32, y: 64 }
    // };
  }

  startGame() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    let world = new World(context, WORLD_WIDTH, WORLD_HEIGHT, TILESIZE);
    let player = new Player(3, 3, TILESIZE);
    this.world = world;
    this.player = player;

    this.world.add(this.player);
    this.world.movetospace(this.player);
    this.world.render();
  }

  handleInput = (action, data) => {
    console.log('handle -' + action + data);
    // if (
    //   action === 'move' &&
    //   this.world.wayclear(this.player.nextposition(data.x, data.y))
    // )
    //   this.player.move(data.x, data.y);
    if (action === 'move') {
      let nextPlayerPos = this.player.nextposition(data.x, data.y);
      let entity = this.world.getEntity(nextPlayerPos);
      if (entity) entity.action();
      else if (this.world.wayclear(nextPlayerPos))
        this.player.move(data.x, data.y);
    }

    this.world.render();
  };

  // handleKeyDown = e => {
  //   e.preventDefault();
  //   console.log('KeyDown');
  //   this.player.move(1, 0);
  //   this.world.render();
  //   //let player = { ...this.state.player };
  //   //player.x += 32;
  //   //this.setState({ player });
  //   //this.renderCanvas();
  // };

  componentDidMount() {
    this.startGame();
  }

  componentWillMount() {
    //document.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.inputManager.bindKeys();
    this.inputManager.subscribe(this.handleInput);
  }
  componentWillUnmount() {
    //document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    this.inputManager.unbindKeys();
    this.inputManager.unsubscribe(this.handleInput);
  }
  render() {
    return (
      <div className="reactrogue">
        <canvas
          id="myCanvas"
          ref="canvas"
          className="reactrogue__canvas"
          width={WORLD_WIDTH * TILESIZE}
          height={WORLD_WIDTH * TILESIZE}
        />
        <Inventory />
      </div>
    );
  }
}

export default ReactRogue;
