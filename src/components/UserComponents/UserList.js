import React from 'react';
import UserCard from './UserCard';
import { connect } from 'react-redux';

const UserList = props => {
    return(
        <div className='user-grid'>
            {  props.users.map(item => <UserCard user={item}
                                                 key={Math.random()} />)  }
        </div>
    );
}

const mstp = state => {
    return {
        users: state.appReducer.filteredUsers[0] ? state.appReducer.filteredUsers : state.appReducer.allUsers
    }
}

export default connect(mstp, {})(UserList);