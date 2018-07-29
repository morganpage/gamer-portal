import React from 'react';
import './Inventory.css';

const inventory = () => {
  return (
    <div className="inventory">
      <h2 className="inventory__heading">Inventory</h2>
      <ul className="inventory__ul">
        <li className="inventory__li">
          Sword<button>x</button>
        </li>
        <li className="inventory__li">
          10 Gold<button>x</button>
        </li>
      </ul>
    </div>
  );
};

export default inventory;
