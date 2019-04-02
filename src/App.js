import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Components/Travel'
import Travels from './Components/Travels'


import './Components/Travel.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            C'est la puissance !!
          </p>
        </header>
        <Travels />
        <Travels  />
      </div>
    );
  }
}

export default App;
