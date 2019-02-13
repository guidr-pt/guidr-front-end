import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = props => {
  return(
    <div>
      <NavLink to='/Home'>Home</NavLink>
      <NavLink to='/Portfolio'>Portfolio</NavLink>
    </div>
  );
}

export default Navigation;
