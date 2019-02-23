import React from 'react';

const RoutePage = props => {
  return(
    <div className='route-page'>
      <div className='route-page__cont'>
         <h1>Choose Your Search</h1>
         {/* Go To Trip Search */}
        <button onClick={props.handleUser}>USERS</button>
        {/* Go To User Search */}
        <button onClick={props.handleTrips}>TRIPS</button>
      </div>
    </div>
  );
}

export default RoutePage;
