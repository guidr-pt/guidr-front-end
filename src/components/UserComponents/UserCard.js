import React from 'react';
import UserModal from './UserModal';

const UserCard = props => {
  return(
    <div className='user-grid__card'>
      <div className='user-grid__card__banner'>
        <h2>{props.user.username}</h2>\
      </div>
      
      <div>
        <h3>{props.user.name}</h3>
      </div>

      <UserModal user={props.user} />
    </div>
  );
}



export default UserCard;
