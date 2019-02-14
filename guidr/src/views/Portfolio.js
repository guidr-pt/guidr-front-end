import React from 'react';
import Profile from '../components/PortfolioComp/Profile';
import TripForm from '../components/PortfolioComp/TripForm';

import { connect } from 'react-redux';
import { getUser } from '../actions';


class Portfolio extends React.Component {
  componentDidMount(){
    this.props.getUser()
  }

  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <Profile />
        <TripForm />
      </div>
    );
  }
}

export default connect(null, { getUser })(Portfolio);
