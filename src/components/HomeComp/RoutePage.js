import React from 'react';

const RoutePage = props => {
  return(
    <div>
      <div>
         {/* Go To Trip Search */}
        <button onClick={props.handleUser}>USERS</button>
        {/* Go To User Search */}
        <button onClick={props.handleTrips}>TRIPS</button>
      </div>
    </div>
  );
}

export default RoutePage;
