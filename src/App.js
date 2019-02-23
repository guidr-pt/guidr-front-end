import React, { Component } from 'react';

/* Custom Components */
import Navigation from './components/Navigation';
import { PrivateRoute } from './components/PrivateRoute';
import TripForm from './components/TripComponents/TripForm';

import Register from './views/Register';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import AccessDenied from './views/AccessDenied';

/* React Router */
import { Route, withRouter } from 'react-router-dom';

/* Compiled CSS file */
import './css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={props => <Register {...props}/>} />
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/portfolio' component={Portfolio} />
        <PrivateRoute path='/add-trip' component={TripForm} />
        <Route path='/access-denied' component={AccessDenied} />
      </div>
    );
  }
}

/* Accessing props from React Router and the Redux Store via withRouter and connect */
export default withRouter(App);
