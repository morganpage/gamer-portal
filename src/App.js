import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import TicTacToe from './tictactoe/TicTacToe';
import ReactRogue from './reactrogue/ReactRogue';
import GamesList from './gameslist/GamesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <aside className="App__sidebar">
          <GamesList />
        </aside>
        <div className="App__main">
          <ReactRogue />
        </div>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
