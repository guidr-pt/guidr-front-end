import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = props => {
  return(
    <div className='navigation'>
      <NavLink to='/Home' className="normal" activeClassName="active">Home</NavLink>
      <NavLink to='/Portfolio' className="normal" activeClassName="active">Portfolio</NavLink>
      <NavLink to='/welcome' className="normal" activeClassName="active">Log Out</NavLink>
    </div>
  );
}

export default Navigation;
