import React, { Component } from 'react';

/* Custom Components */
import Navigation from './components/Navigation';
import TripForm from './components/PortfolioComp/TripForm';

import Register from './views/Register';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import AccessDenied from './views/AccessDenied';

/* React Router */
import { Route, withRouter } from 'react-router-dom';

/* Redux */
import { connect } from 'react-redux';
import { getTrips, getTrip, getAllUsers } from './actions';

/* Compiled CSS file */
import './css/index.css';

class App extends Component {
  componentDidMount() {
    /* Get User Data on Load */
    this.props.getTrips();
    this.props.getTrip();
    this.props.getAllUsers();
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

/* Accessing props from React Router and the Redux Store via withRouter and connect */
export default withRouter(connect(null, { getTrips, getTrip, getAllUsers })(App));
