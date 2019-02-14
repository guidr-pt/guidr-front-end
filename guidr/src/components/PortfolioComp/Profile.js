import React from 'react';

import { connect } from 'react-redux';

const Profile = props => {
  return(
    <div>
      <h2>{props.user.title}</h2>
      <h3>{props.user.tagline}</h3>

      <p>{props.user.age}</p>
      <p>{props.user.timeAsGuide}</p>
    </div>
  );
}

const mstp = state => {
  return {
    user: state.appReducer.user
  }
}

export default connect(mstp, {})(Profile);
