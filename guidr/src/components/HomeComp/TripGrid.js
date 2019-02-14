import React from 'react';
import TripCard from './TripCard';

import { connect } from 'react-redux';

const TripGrid = props =>{
    return(
      <div className='grid'>
      {  props.trips.map(item => <TripCard trip={item}
                                           key={Math.random()} />)  }
      </div>
    );
}

const mstp = state => {
  return {
    trips: state.appReducer.trips
  }
}

export default connect(mstp, {})(TripGrid);
