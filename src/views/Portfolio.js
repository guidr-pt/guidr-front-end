import React from 'react';
import Profile from '../components/PortfolioComp/Profile';
import Loader from '../components/Loader';

import { connect } from 'react-redux';
import { getUserTrips } from '../actions';

class Portfolio extends React.Component {
  /* Ensure user is signed in by checking token, alternate route if denied */
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
  }

  render() {
    return (
      <div className='portfolio'>
        { !this.props.loading && this.props.user.username ? <Profile username={this.props.user.username} /> : <Loader /> }
      </div>
    );
  }
}

const mstp = state => {
  return {
    ...state,
    user: state.appReducer.user,
    loading: state.appReducer.loading,
  }
}

export default connect(mstp, { getUserTrips })(Portfolio);
