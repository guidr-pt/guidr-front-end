import React from 'react';

import logo from '../img/guidr-2-logo.png';
import { NavLink, withRouter } from 'react-router-dom';


class Navigation extends React.Component {
  /* removes token to deny access until another login is completed */
  signout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    this.props.history.push('/');
  }

  render() {
    return(
      <div className='navigation-container'>
        <div>
          <img src={logo} alt='logo' />
        </div>
        
        <div className='navigation'>
          <NavLink to='/Home' className="normal" activeClassName="active">Home</NavLink>
          <NavLink to='/Portfolio' className="normal" activeClassName="active">Portfolio</NavLink>
          <NavLink to='/add-trip' className="normal" activeClassName="active">Add Trip</NavLink>
          <button onClick={this.signout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
