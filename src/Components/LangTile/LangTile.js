import React from 'react';

import './langtile.css';

const csslogo = require('./csslogo.png');
const jslogo = require('./jslogo.png');
const htmllogo = require('./htmllogo.png');

function LangTile(props) {
  switch (props.lang) {
    case 'JavaScript':
      return (
        <div className="Javascript lang">
          <img src={jslogo} />
          <h6>JavaScript</h6>
        </div>
      )
      break;
    case 'HTML':
      return (
        <div className="HTML lang">
          <img src={htmllogo} />
          <h6>HTML</h6>
        </div>
      )
      break;
    case 'CSS':
      return (
        <div className="CSS lang">
          <img src={csslogo} />
          <h6>CSS</h6>
        </div>
      )
      break;
    default:
      break;
  }
}

export default LangTile;