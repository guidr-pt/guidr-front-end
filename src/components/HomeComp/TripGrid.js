import React from 'react';
import TripCard from './TripCard';

import { connect } from 'react-redux';

const TripGrid = props =>{
    return(
      <div className='grid'>
      {/* Create a TripCard for each trip associated with user */}
      {  props.trips.map(item => <TripCard trip={item}
                                           key={Math.random()} />)  }
      </div>
    );
}

const mstp = state => {
  return {
    /* User's trips from Redux Store */
    trips: state.appReducer.trips
  }
}

export default connect(mstp, {})(TripGrid);
