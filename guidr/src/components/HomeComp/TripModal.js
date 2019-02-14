import React from 'react';

import { connect } from 'react-redux';

const TripModal = props => {
    const trip = props.trip;

    return(
      <div>
        <h2>{trip.name}</h2>
        <h3>{trip.description}</h3>
        <img src={trip.img} alt={trip.name}/>
        <h5>{trip.type}</h5>

        <div>
          <input type='checkbox' /> {String(trip.private)}
        </div>

        <p>{trip.duration}</p>
        <p>{trip.date}</p>
      </div>
    );
}

const mstp = state => {
  console.log(state)
  return {
    ...state,
    trip: state.appReducer.activeTrip
  }
}

export default connect(mstp, {})(TripModal);
