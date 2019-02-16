import React from 'react';
import Profile from '../components/PortfolioComp/Profile';

class Portfolio extends React.Component {
  authenticate = () => {
    const token = localStorage.getItem('jwtToken');

    if(token) {
      this.props.history.push('/portfolio')
    } else {
      this.props.history.push('/access-denied');
    }
  }

  componentDidMount(){
    this.authenticate();
  }

  render() {
    return (
      <div className='portfolio'>
        <Profile />
      </div>
    );
  }
}

export default Portfolio;
