import React, { Component } from 'react';

import Navigation from './components/Navigation';
import TripForm from './components/PortfolioComp/TripForm';
import Register from './views/Register';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import AccessDenied from './views/AccessDenied';

import { Route, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getTrips, getTrip, getUser } from './actions';

import './css/index.css';

class App extends Component {
  componentDidMount() {
    this.props.getTrips();
    this.props.getTrip();
    this.props.getUser()
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={props => <Register {...props}/>} />
        <Route path='/home' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/add-trip' component={TripForm} />
        <Route path='/access-denied' component={AccessDenied} />
      </div>
    );
  }
}

export default withRouter(connect(null, { getTrips, getTrip, getUser })(App));
