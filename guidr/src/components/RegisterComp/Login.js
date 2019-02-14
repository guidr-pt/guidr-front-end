import React from 'react';

const Login = props => {
  return(
    <div className='login'>
      <div className='login__form--container'>
        <div className='login__form--head'></div>

        <form>
          <div className='login__input--container'>
            <i class="fas fa-user"></i>
            <input type='text'
                   placholder='username'
                   name='username'
                   />
          </div>

          <div className='login__input--container'>
            <i class="fas fa-lock"></i>
            <input type='text'
                   placholder='password'
                   name='password'
                   />
          </div>

          <div>
            <input type='checkbox' /> <span>Remember Me</span>
          </div>

          <button>Sign In</button>
        </form>
      </div>

      <p>Need Account? Create One</p>

    </div>
  );
}

export default Login;
