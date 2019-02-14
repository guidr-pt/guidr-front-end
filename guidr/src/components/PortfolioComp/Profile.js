import React from 'react';
import TripGrid from '../HomeComp/TripGrid';

import { connect } from 'react-redux';

const Profile = props => {
  console.log(props)
  return(
    <div className='portfolio-container'>

      <div className='portfolio__profile'>
        <div className='portfolio__profile__bio'>
          <img src='http://svgur.com/i/65U.svg' alt={props.user.name} />

          <div>
            <h1>{props.user.username}</h1>
            <h2>{props.user.title}</h2>
          </div>
        </div>

        <spacer></spacer>
          <h3>{props.user.tagline}</h3>
        <spacer></spacer>

        <div className='portfolio__profile__time'>
          <p>Age: {props.user.age}</p>
          <p>Time As Guide: {props.user.timeAsGuide}</p>
        </div>
      </div>

      <TripGrid />
    </div>
  );
}

const mstp = state => {
  return {
    user: state.appReducer.user
  }
}

export default connect(mstp, {})(Profile);
