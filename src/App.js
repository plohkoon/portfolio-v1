import React from 'react';
import logo from './logo.svg';
import './App.css';

import Projects from './Components/Projects';

function App() {
  return (
    <Projects />
  )

}

const ReactDefault = () => {
  const numb = [1,2,3,4]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {numb.map(item => {
        return (<div key={item} className="temp">
          {item}
        </div>)
      })}
    </div>
  )
}

export default App;
