import React, {useState, useEffect } from 'react';

import LangDisplay from '../LangDisplay/LangDisplay.js'

import './repocard.css';

function RepoCard(props) {
  const [lang, setLang] = useState([]);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    fetch(props.data.languages_url)
      .then(res => res.json())
      .then(data => Object.keys(data))
      .then(data => setLang(data));
  }, [props.data.languages_url]);
  if(props.display) {
    return (
      <a
        className={props.display ? "hexagon" : "hexisgone"}
        href={props.data.html_url}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h1>{props.data.name.toUpperCase()}</h1>
        <p>{props.data.description}</p>
        <LangDisplay langs={lang} />
      </a>
    )
  }
  else {
    return (
      <span name={props.data.name + " placeholder"}></span>
    )
  }
  
}

export default RepoCard;
