import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Register from './views/Register';
import Home from './views/Home';
import Portfolio from './views/Portfolio';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Navigation />
        <Register />
        <Home />
        <Portfolio />
      </div>
    );
  }
}

export default App;
