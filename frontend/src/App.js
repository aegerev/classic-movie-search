import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import MoviesList from './components/movies-list';
import Movie from './components/movie';
import Login from './components/login';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App(){
  return(
    <div className="App">
      <header className="App-header">
        <p>
         Watch all your favorite friends on Y12!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn English with Me!
        </a>
      </header>
    </div>
  )
}

//------------------------------------------------------------------------------------------------------------------
function AppOld() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
    </div>
  );
}

export default App;
