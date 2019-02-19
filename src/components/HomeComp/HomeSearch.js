import React from 'react';
import TripGrid from './TripGrid';
import UserList from './UserList';
import RoutePage from './RoutePage';
import SidePanel from './SidePanel';

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: false,
      trips: false,
      option: true
    }
  }

  selectUsers = () => {
    this.setState({
      users: true,
      option: false
    })
  }

  selectTrips = () => {
    this.setState({
      trips: true,
      option: false
    })
  }

  render() {

    let display = '';

    if(this.state.option) {
      display = <RoutePage handleUser={this.selectUsers} handleTrips={this.selectTrips}/>
    } else if(this.state.trips) {
      display = <TripGrid />
    } else {
      display = <UserList />
    }

    return(
      <div className='home-search'>
        <SidePanel />
        {display}
      </div>
    );
  }
}

export default HomeSearch;
