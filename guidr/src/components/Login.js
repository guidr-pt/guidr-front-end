import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const pathname = this.props.location.pathname.toLowerCase();

    return(
      <div>
        <div className='login__form--container'>
          <div className='login__form--head'></div>

          <form>
            <div className='login__input--container'>
              <i className="fas fa-user"></i>
              <input type='text'
                     placeholder='username'
                     name='username'
                     />
            </div>

            <div className='login__input--container'>
              <i className="fas fa-lock"></i>
              <input type='text'
                     placeholder='password'
                     name='password'
                     />
            </div>

            <div>
              <input type='checkbox' /> <span>Remember Me</span>
            </div>

            { pathname === '/welcome/signup' ? <button>Create Account</button> : <button>Log In</button>}
          </form>
        </div>


        { pathname === '/welcome/signup' ? <p> Have An Account?
                                              <Link to='/welcome'>
                                                Log In
                                              </Link>
                                            </p>

                                            : <p> Need An Account?
                                                  <Link to='/welcome/signup'>
                                                    Create One
                                                  </Link>
                                              </p> }

      </div>
    );
  }
}

export default Login;
