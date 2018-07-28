import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faGamepad} size="2x" inverse />
      <h1>The Gamer Portal</h1>
      <button className="header__btn">LOGIN</button>
    </div>
  );
};

export default header;
