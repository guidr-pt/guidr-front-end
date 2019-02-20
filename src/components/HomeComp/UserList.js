import React from 'react';
import TripCard from './TripCard';

const UserList = props => {
    console.log(props)
    return(
        <div>
            {  props.users.map(item => <TripCard trip={item}
                                    key={Math.random()} />)  }
        </div>
    );
}

export default UserList;