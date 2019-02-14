import React from 'react';

const SignUp = props => {
  return(
    <div>
      <form>
        <div className='login__input--container'>
          <i class="fas fa-user"></i>
          <input type='text'
                 placholder='username'
                 name='username'
                 required
                 />
        </div>

        <div className='login__input--container'>
          <i class="fas fa-lock"></i>
          <input type='text'
                 placholder='password'
                 name='password'
                 required
                 />
        </div>

        <div>
          <input type='checkbox' /> <span>Remember Me</span>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignUp;
