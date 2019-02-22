import React from 'react';
import TripModal from './TripModal';

const TripCard = props => {
  return(
    <div className='tripgrid__card'>
      <h2>{props.trip.title}</h2>

      <TripModal trip={props.trip} />
    </div>
  );
}

export default TripCard;
