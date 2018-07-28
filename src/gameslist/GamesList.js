import React from 'react';
import './GamesList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess, faTimes, faAt } from '@fortawesome/free-solid-svg-icons';

const gameslist = () => {
  return (
    <div className="gameslist">
      <h2 className="gameslist__title">Games</h2>
      <ul className="gameslist__ul">
        <li className="gameslist__li">
          <FontAwesomeIcon icon={faTimes} fixedWidth size="2x" />
          <h3 className="gameslist__gametitle">Tic Tac Toe</h3>
        </li>
        <li className="gameslist__li">
          <FontAwesomeIcon icon={faAt} fixedWidth size="2x" />
          <h3 className="gameslist__gametitle">React Rogue</h3>
        </li>
        <li className="gameslist__li">
          <FontAwesomeIcon icon={faChess} fixedWidth size="2x" />
          <h3 className="gameslist__gametitle">Chess</h3>
        </li>
      </ul>
    </div>
  );
};

export default gameslist;
