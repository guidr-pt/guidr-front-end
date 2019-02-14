import React from 'react';

const TripCard = props => {
  return(
    <div className='tripgrid__card'>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default TripCard;
