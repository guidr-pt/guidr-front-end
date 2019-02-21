import React from 'react';
import UserModal from './UserModal';
import { connect } from 'react-redux';

const UserCard = props => {
  return(
    <div className='tripgrid__card'>
      <h2>{props.user.name}</h2>

      <UserModal user={props.user} />
    </div>
  );
}



export default UserCard;
