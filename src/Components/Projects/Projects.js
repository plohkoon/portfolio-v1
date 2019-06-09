import React, {useState, useEffect} from 'react';
import './projects.css';

import RepoCard from '../RepoCard/RepoCard.js';

function Projects() {
  let [repos, setRepos] = useState(null);
  let [ready, setReady] = useState(false);

  useEffect(() => {
    if(repos) {
      setReady(true);
    }
  }, [repos]);

  useEffect(() => {
    fetch('https://api.github.com/users/plohkoon/repos')
      .then(res => res.json())
      .then(data => {
        setRepos(data)
      });
  }, []);

  if(ready && Array.isArray(repos)) {
    return (
      <div className="reposDiv">
        {
          repos.map(item => {
            return(
              <RepoCard data={item} key={item.id}/>
            )
          })
        }
      </div>
    )
  }
  else {
    return (<p>Loading</p>)
  }

}

export default Projects;
