import React, { Component } from 'react';
import Register from './views/Register';
import Home from './views/Home';
import Navigation from './components/Navigation';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Navigation />
        <Register />
        <Home />
      </div>
    );
  }
}

export default App;
