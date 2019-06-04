import React, {useState, useEffect, useRef} from 'react';

import './repocard.css';

function RepoCard(props) {
  //initializes values for dimensions of div
  const [middle, setMiddle] = useState();
  const [dim, setDim] = useState();
  //sets the rotation to be applied to div
  const [rot, setRot] = useState({"x": 0, "y": 0});
  const cardDiv = useRef();
  //handler for mousemove
  const onMouseMove = e => {
    let divBound = e.target.getBoundingClientRect();
    //extracts coords from events
    let x = e.clientX - divBound.left,
        y = e.clientY - divBound.top;
    //calculates the x and y rotation in turns
    let rotation = {
      "x": (x-middle.x)/(dim.x/2),
      "y": (y-middle.y)/(dim.y/2)
    }
    //sets the state
    setRot(rotation);
  }
  //resets rotation when Mouse leaves
  const onMouseLeave = e => {
    setRot({"x": 0, "y": 0});
  }
  //gets the size of the card
  useEffect(() => {
    let height=cardDiv.current.offsetHeight,
        width=cardDiv.current.offsetWidth;
    setMiddle({"x": width/2, "y": height/2});
    setDim({"x": width, "y": height})
  }, [])
  //renders the repo card
  return (
    <div
      className="repo"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={cardDiv}
      style={{
        transform: `rotate3d(${rot.y}, ${-1*rot.x}, 0, 0.025turn)`
      }}
    >
      <h1>{props.data.name.toUpperCase()}</h1>
      <p>{props.data.description}</p>
    </div>
  )
}

export default RepoCard;
