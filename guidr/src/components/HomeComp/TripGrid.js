import React from 'react';
import TripCard from './TripCard';

import { connect } from 'react-redux';
import { getTrips } from '../../actions';


class TripGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getTrips();
  }

  render() {
    return(
      <div>
      {  this.props.trips.map(item => <TripCard name={item.name}
                                                desc={item.description}
                                                dur={item.duration}
                                                img={item.img} />)  }
      </div>
    );
  }
}

const mstp = state => {
  return {
    trips: state.appReducer.trips
  }
}

export default connect(mstp, { getTrips })(TripGrid);
