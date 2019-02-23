import React from 'react';
import UserModal from './UserModal';

const UserCard = props => {
  return(
    <div className='user-grid__card'>
      <div className='user-grid__card__banner'>
        <h2>{props.user.name}</h2>
      </div>
      
      <div>
        <img src={props.user.profileImage} alt={props.user.name} />
      </div>

      <UserModal user={props.user} />
    </div>
  );
}



export default UserCard;
