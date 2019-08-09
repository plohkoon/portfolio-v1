import React, {useState, useEffect} from 'react';
import './projects.css';

import RepoCard from '../RepoCard/RepoCard.js';
import ToggleHex from '../ToggleHex/ToggleHex.js';

function Projects() {
  let [repos, setRepos] = useState(null);
  let [ready, setReady] = useState(false);
  const max = 4;

  let [shortList, setShortList] = useState(true);

  const toggleList = () => {
    setShortList(!shortList);
  }

  useEffect(() => {
    if(repos) {
      setReady(true);
    }
  }, [repos]);

  useEffect(() => {
    fetch('https://api.github.com/users/plohkoon/repos')
      .then(res => res.json())
      .then(data => data.sort((repoA, repoB) => {
        const dateA = new Date(repoA.pushed_at);
        const dateB = new Date(repoB.pushed_at);
        return dateA <= dateB
      }))
      .then(data => {
        setRepos(data)
      });
  }, []);

  /*const renderCards = () => {
    let cards = [];
    for(let i = 0; shortList ? (i < max) : (i < repos.length); i++) {
      cards.push(
        <RepoCard data={repos[i]} key={repos[i].id} display={!(shortList && i > max)}/>
      );
    }
    return cards;
  }*/

  if(ready && Array.isArray(repos)) {
    return (
      <div className="reposDiv">
        {
          //renderCards()
          repos.map((item, index) => {
            return(
              <RepoCard data={item} key={item.id} display={!(shortList && index > max)} />
            )
          })
        }
        <ToggleHex toggleList={toggleList} closed={shortList}/>
      </div>
    )
  }
  else {
    return (<p>Loading</p>)
  }

}

export default Projects;
