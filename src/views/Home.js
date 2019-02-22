import React from 'react';
import HomeSearch from '../components/HomeComp/HomeSearch.js'
import Loader from '../components/Loader';

import { connect } from 'react-redux';
import { getTrips, getAllUsers } from '../actions';

class Home extends React.Component {
  /* Ensure user is signed in by checking token, alternate route if denied */
  authenticate = () => {
    const token = localStorage.getItem('jwtToken');

    if(token) {
      this.props.history.push('/home')
    } else {
      this.props.history.push('/access-denied');
    }
  }

  componentDidMount(){
    this.authenticate();

    /* Get User Data on Load */
    this.props.getTrips();
    this.props.getAllUsers();
  }

  render() {
    return(
      <div className='home'>
        { this.props.loading ? <Loader/> : <HomeSearch /> }
      </div>
    );
  }
}

const mstp = state => {
  return {
    ...state,
    loading: state.appReducer.loading
  }
}

export default connect(mstp, { getTrips, getAllUsers })(Home);
