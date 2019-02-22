import React from 'react';
import TripCard from './TripCard';

const TripGrid = props =>{
    return(
      <div className='grid'>
      {/* Create a TripCard for each trip associated with user */}
      {  props.trips.map(item => <TripCard trip={item}
                                           key={Math.random()} />)  }
      </div>
    );
}

export default TripGrid;
