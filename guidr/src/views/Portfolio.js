import React from 'react';
import Profile from '../components/PortfolioComp/Profile';
import TripForm from '../components/PortfolioComp/TripForm';

const Portfolio = props => {
  return (
    <div>
      <h2>Portfolio</h2>
      <Profile />
      <TripForm />
    </div>
  );
}

export default Portfolio;
