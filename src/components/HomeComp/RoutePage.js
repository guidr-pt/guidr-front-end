import React from 'react';
import { Link } from 'react-router-dom';

const RoutePage = props => {
  return(
    <div>
      <div>
        <Link to='/home/search'>Search</Link>
      </div>
    </div>
  );
}

export default RoutePage;
