import React from 'react';
import TripModal from './TripModal';

const TripCard = props => {
  return(
    <div className='tripgrid__card'>
      <h2>{props.trip.name}</h2>
      <p>{props.trip.description}</p>

      <TripModal trip={props.trip} />
    </div>
  );
}

export default TripCard;
