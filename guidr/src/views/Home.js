import React from 'react';
import TripGrid from '../components/HomeComp/TripGrid';
import TripModal from '../components/HomeComp/TripModal';

const Home = props => {
  return(
    <div>
      <h2>Home</h2>
      <TripGrid />
      <TripModal />
    </div>
  );
}

export default Home;
