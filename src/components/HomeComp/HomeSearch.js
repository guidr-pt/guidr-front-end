import React from 'react';
import TripGrid from './TripGrid';
import SidePanel from './SidePanel';

const HomeSearch = props => {
  return(
    <div className='home-search'>
      <SidePanel />
      <TripGrid />
    </div>
  );
}

export default HomeSearch;
