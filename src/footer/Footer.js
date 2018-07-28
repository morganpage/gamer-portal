import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <button className="footer__btn">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </button>
        <button className="footer__btn">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default footer;
