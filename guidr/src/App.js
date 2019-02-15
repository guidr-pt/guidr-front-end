import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Register from './views/Register';
import Home from './views/Home';
import Portfolio from './views/Portfolio';

import { Route, withRouter } from 'react-router-dom';


import './css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={props => <Register {...props}/>} />
        <Route path='/home' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
      </div>
    );
  }
}

export default withRouter(App);
