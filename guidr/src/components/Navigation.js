import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = props => {
  return(
    <div>
      <a to='/Home'>Home</a>
      <a to='/Portfolio'>Portfolio</a>
    </div>
  );
}

export default Navigation;
