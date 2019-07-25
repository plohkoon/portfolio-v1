import React, {useState, useEffect } from 'react';

import './repocard.css';

function RepoCard(props) {
  const [lang, setLang] = useState([]);
  useEffect(() => {
    fetch(props.data.languages_url)
      .then(res => res.json())
      .then(data => Object.keys(data))
      .then(data => setLang(data));
  }, [props.data.languages_url]);
  return (
    <a className="hexagon" href={props.data.html_url}>
      <h1>{props.data.name.toUpperCase()}</h1>
      <p>{props.data.description}</p>
    </a>
  )
}

export default RepoCard;
