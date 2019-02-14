import React from 'react';
import TripGrid from '../components/HomeComp/TripGrid';
import TripModal from '../components/HomeComp/TripModal';

import { connect } from 'react-redux';
import { getTrips, getTrip } from '../actions';

class Home extends React.Component {
  componentDidMount(){
    this.props.getTrips();
    this.props.getTrip();
  }

  render() {
    return(
      <div>
        <h2>Home</h2>
        <TripGrid />
        <TripModal />
      </div>
    );
  }
}

export default connect(null, { getTrips, getTrip })(Home);
