import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Components/Travel'

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
        <Travel destination="Oslo" country="Norvège" photo="https://images.dreamlines.fr/qOjFgq1uquSVJL7PzM2867WCoGw=/580x340/smart/filters:quality(80)/fr/files/cruises/areas/fjords-norvege-1-347077.jpg"  distance="pas loin"/>
        <Travel destination="Osaka" country="Tokyo" photo="https://image.jimcdn.com/app/cms/image/transf/none/path/s964f114e2cc6ce72/backgroundarea/i3ea80fe8de84dc8c/version/1534778620/image.jpg" distance="un peu plus loin" />
      </div>
    );
  }
}

export default App;
