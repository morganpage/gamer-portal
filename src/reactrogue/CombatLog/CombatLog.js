import React from 'react';
import './CombatLog.css';
const combatlog = () => {
  return (
    <div className="combatlog">
      <h2 className="combatlog__heading">Combat Log</h2>
      <ul className="combatlog__ul">
        <li className="combatlog__li">You attacked a kobol!</li>
      </ul>
    </div>
  );
};

export default combatlog;
