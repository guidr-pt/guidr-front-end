import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Register from './views/Register';
import Home from './views/Home';
import Portfolio from './views/Portfolio';

import { Route } from 'react-router-dom';


import './css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path='/welcome' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
      </div>
    );
  }
}

export default App;
