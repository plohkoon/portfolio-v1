import React, {useState} from 'react';

import './togglehex.css';

function ToggleHex(props) {
  const [hovered, setHovered] = useState(false);
  return (
    //eslint-ignore-next-line
    <a
      className={hovered ? 'hexagon togglehexagon active' : 'hexagon togglehexagon'}
      onClick={props.toggleList}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={"plus" + (hovered ? " active" : "") + (props.closed ? "" : " opened")}>
        <div />
        <div />
      </div>
    </a>
  )
}

export default ToggleHex;