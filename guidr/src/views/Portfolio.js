import React from 'react';
import Profile from '../components/PortfolioComp/Profile';

import { connect } from 'react-redux';
import { getUser } from '../actions';


class Portfolio extends React.Component {
  authenticate = () => {
    const token = localStorage.getItem('jwtToken');

    if(token) {
      this.props.history.push('/portfolio')
    } else {
      this.props.history.push('/access-denied');
    }
  }

  componentDidMount(){
    this.authenticate();
    this.props.getUser()
  }

  render() {
    return (
      <div className='portfolio'>
        <Profile />
      </div>
    );
  }
}

export default connect(null, { getUser })(Portfolio);
