import React from 'react';

import { Link } from 'react-router-dom';

const AccessDenied = props => {
  return(
    <div>
      <h1>Access Denied</h1>
      <h2>Please, Login to Continue</h2>
      <Link to='/'>LOGIN</Link>
    </div>
  );
}

export default AccessDenied;
