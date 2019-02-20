import React from 'react';

import TripGrid from './TripGrid';
import UserList from './UserList';
import RoutePage from './RoutePage';
import SidePanel from './SidePanel';

import { connect } from 'react-redux';
import { getUserTrips } from '../../actions';

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: false,
      trips: false,
      option: true
    }
  }

  /* Go To User Search */
  selectUsers = () => {
    this.setState({
      users: true,
      option: false
    })
  }

  /* Go To Trip Search */  
  selectTrips = () => {
    this.setState({
      trips: true,
      option: false
    })
  }

  render() {
    let display = '';
    let panel = '';
    console.log('DISPLAY', this.props.filteredUsers)
    const displayUsers = this.props.filteredUsers.length > 0 ?  this.props.filteredUsers : this.props.allUsers

    console.log(this.props.userTrips)
    /* State Based Render */
    if(this.state.option) {
      display = <RoutePage handleUser={this.selectUsers} handleTrips={this.selectTrips}/>
    } else if(this.state.trips) {
      display = <TripGrid trips={this.props.trips} />
      panel = <SidePanel />
    } else {
      display = <UserList users={displayUsers}/>
      panel = <SidePanel users />
    }

    return(
      <div className='home-search'>
        {panel}
        {display}
      </div>
    );
  }
}

const mstp = state => {
  return { 
    trips: state.appReducer.trips, 
    allUsers: state.appReducer.allUsers,
    filteredUsers: state.appReducer.filteredUsers,
    user: state.appReducer.user,
  }
}

export default connect(mstp, { getUserTrips })(HomeSearch);
