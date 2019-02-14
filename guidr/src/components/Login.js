import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userVal: '',
      passVal: '',
      remember: false
    }
  }

  toggleRemember = e => {
    this.setState({
      remember: e.target.checked
    })
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  pageReset = () => {
    this.setState({
      userVal: '',
      passVal: '',
      remember: false
    })
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
                     name='userVal'
                     onChange={this.changeHandler}
                     value={this.state.userVal}
                     />
            </div>

            <div className='login__input--container'>
              <i className="fas fa-lock"></i>
              <input type='text'
                     placeholder='password'
                     name='passVal'
                     onChange={this.changeHandler}
                     value={this.state.passVal}
                     />
            </div>

            <div>
              <input onClick={this.toggleRemember} type='checkbox' /> <span>Remember Me</span>
            </div>

            { pathname === '/welcome/signup' ? <button>Create Account</button> : <button>Log In</button>}
          </form>
        </div>


        { pathname === '/welcome/signup' ? <p> Have An Account?
                                              <Link onClick={this.pageReset} to='/welcome'>
                                                Log In
                                              </Link>
                                            </p>

                                            : <p> Need An Account?
                                                  <Link onClick={this.pageReset} to='/welcome/signup'>
                                                    Create One
                                                  </Link>
                                              </p> }

      </div>
    );
  }
}

export default Login;
