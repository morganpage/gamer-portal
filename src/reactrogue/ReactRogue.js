import React from 'react';
import './ReactRogue.css';
import Player from './Player';
import World from './World';
import InputManager from './InputManager';
import Inventory from './Inventory/Inventory';
import LootSpawner from './LootSpawner';

const WORLD_WIDTH = 40;
const WORLD_HEIGHT = 40;
const TILESIZE = 16;

class ReactRogue extends React.Component {
  constructor() {
    super();
    this.inputManager = new InputManager();
    this.state = {
      player: { inventory: [] }
    };
  }

  handlePlayerUpdate = () => {
    let player = { ...this.player };
    this.setState({ player });
  };

  startGame() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    let world = new World(context, WORLD_WIDTH, WORLD_HEIGHT, TILESIZE);
    let player = new Player(3, 3, TILESIZE);
    this.world = world;
    this.player = player;
    this.player.subscribe(this.handlePlayerUpdate);
    this.world.add(this.player);
    this.world.movetospace(this.player);
    let lootSpawner = new LootSpawner(player, world);
    lootSpawner.spawn(10);
    this.world.render();
    lootSpawner.pickupAll();
  }

  handleInput = (action, data) => {
    if (action === 'move') {
      let nextPlayerPos = this.player.nextposition(data.x, data.y);
      let entity = this.world.getEntity(nextPlayerPos);
      if (entity) {
        entity.action('move');
      } else if (this.world.wayclear(nextPlayerPos))
        this.player.move(data.x, data.y);
    }

    this.world.render();
  };

  handleDrop = item => {
    console.log('handleDrop:' + item.attributes.name);
    //this.player.drop(item);
    item.action('drop');
    this.world.render();
  };

  componentDidMount() {
    this.startGame();
  }

  componentWillMount() {
    this.inputManager.bindKeys();
    this.inputManager.subscribe(this.handleInput);
  }
  componentWillUnmount() {
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
        <Inventory
          inventory={this.state.player.inventory}
          handleDrop={this.handleDrop}
        />
      </div>
    );
  }
}

export default ReactRogue;
