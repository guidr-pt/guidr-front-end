import React from 'react';
import TripGrid from '../components/HomeComp/TripGrid';

import { connect } from 'react-redux';
import { getTrips, getTrip } from '../actions';

class Home extends React.Component {
  authenticate = () => {
    const token = localStorage.getItem('jwtToken');

    if(token) {
      this.props.history.push('/home')
    } else {
      this.props.history.push('/access-denied');
    }
  }

  componentDidMount(){
    this.authenticate();
    this.props.getTrips();
    this.props.getTrip();
  }

  render() {
    return(
      <div className='home'>
        <TripGrid />
      </div>
    );
  }
}

export default connect(null, { getTrips, getTrip })(Home);
