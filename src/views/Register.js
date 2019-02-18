import React from 'react';
import Login from '../components/Login';

import { Route } from 'react-router-dom';

const Register = props => {
  return(
    <div className='login'>
      <Route path='/' component={Login} />
    </div>
  );
}

export default Register;
