import React from 'react';
import logo from './logo.svg';
import './App.css';

import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Projects />
    </div>
  )

}
/*
disabling warning because I like to keep the default react generation but
the render engine gets annoyed that its unused
*/
//eslint-disable-next-line
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
