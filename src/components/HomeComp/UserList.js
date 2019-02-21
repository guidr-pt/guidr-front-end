import React from 'react';
import UserCard from './UserCard';
import { connect } from 'react-redux';

const UserList = props => {
    return(
        <div>
            {  props.users.map(item => <UserCard user={item}
                                                 key={Math.random()} />)  }
        </div>
    );
}

const mstp = state => {
    return {
        users: state.appReducer.allUsers
    }
}

export default connect(mstp, {})(UserList);