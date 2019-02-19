import React from 'react';

const RoutePage = props => {
  console.log(props)

  /* Go To User Search */
  const handleUser = () => {
    props.handleUser();
  }

  /* Go To Trip Search */
  const handleTrips = () => {
    props.handleTrips();
  }

  return(
    <div>
      <div>
        <button onClick={handleUser}>USERS</button>
        <button onClick={handleTrips}>TRIPS</button>
      </div>
    </div>
  );
}

export default RoutePage;
