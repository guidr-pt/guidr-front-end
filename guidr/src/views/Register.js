import React from 'react';
import SignUp from '../components/RegisterComp/SignUp';
import Login from '../components/RegisterComp/Login';

const Register = props => {
  return(
    <div>
      <h2>Register</h2>
      <SignUp />
      <Login />
    </div>
  );
}

export default Register;
