import React from 'react';

const TripCard = props => {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>

      <img src={props.img} alt={props.name} />
    </div>
  );
}

export default TripCard;
