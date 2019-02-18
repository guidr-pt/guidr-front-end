import React from 'react';
import TripGrid from '../components/HomeComp/TripGrid';
import SidePanel from '../components/HomeComp/SidePanel';

class Home extends React.Component {
  /* Ensure user is signed in by checking token, alternate route if denied */
  authenticate = () => {
    const token = localStorage.getItem('jwtToken');

    if(token) {
      this.props.history.push('/home')
    } else {
      this.props.history.push('/access-denied');
    }
  }

  componentDidMount(){
    this.authenticate();
  }

  render() {
    return(
      <div className='home'>
        <SidePanel />
        <TripGrid />
      </div>
    );
  }
}

export default Home;
