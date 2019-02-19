import React from 'react';

const RoutePage = props => {
  console.log(props)

  const handleUser = () => {
    props.handleUser();
  }

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
