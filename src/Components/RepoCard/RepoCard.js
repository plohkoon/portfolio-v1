import React from 'react';

import './repocard.css';

function RepoCard(props) {

  const onMouseMove = e => {
    let coords = {
      "x": e.nativeEvent.offsetX,
      "y": e.nativeEvent.offsetY
    }
    console.log(coords);
  }

  return (
    <div
      className="repo"
      onMouseMove={onMouseMove}
    >
      <h1>{props.data.name.toUpperCase()}</h1>
      <p>{props.data.description}</p>
    </div>
  )
}

export default RepoCard;
