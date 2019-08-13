import React from 'react';

import './langtile.css';

const csslogo = require('./csslogo.png');
const jslogo = require('./jslogo.png');
const htmllogo = require('./htmllogo.png');
const dartlogo = require('./dart.svg');
const objclogo = require('./objclogo.png');
const javalogo = require('./javalogo.png');

function LangTile(props) {
  switch (props.lang) {
    case 'JavaScript':
      return (
        <div className="Javascript lang">
          <img src={jslogo} alt="javascript logo"/>
          <h6>JavaScript</h6>
        </div>
      )
    case 'HTML':
      return (
        <div className="HTML lang">
          <img src={htmllogo} alt="html logo"/>
          <h6>HTML</h6>
        </div>
      )
    case 'CSS':
      return (
        <div className="CSS lang">
          <img src={csslogo} alt="css logo"/>
          <h6>CSS</h6>
        </div>
      )
    case 'Dart':
      return (
        <div className="DART lang">
          <img src={dartlogo} alt="dart logo"/>
          <h6>DART</h6>
        </div>
      )
    case 'Objective-C':
      return (
        <div className="OBJC lang">
          <img src={objclogo} alt="objective c logo"/>
          <h6>OBJECTIVE C</h6>
        </div>
      )
    case 'Java':
      return (
        <div className="JAVA lang">
          <img src={javalogo} alt="java logo"/>
          <h6>JAVA</h6>
        </div>
      )
    default:
      return (
        <div className='lang'>
          <h6>{props.lang.toUpperCase()}</h6>
        </div>
      );
  }
}

export default LangTile;