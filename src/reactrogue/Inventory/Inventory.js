import React from 'react';
import './Inventory.css';

const inventory = props => {
  return (
    <div className="inventory">
      <h2 className="inventory__heading">Inventory</h2>
      <ul className="inventory__ul">
        {props.inventory.map((item, index) => {
          return (
            <li key={index} className="inventory__li">
              {item.attributes.name}
              <button
                className="inventory__deletebutton"
                onClick={props.handleDrop.bind(this, item)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default inventory;
