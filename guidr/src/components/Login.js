import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userVal: '',
      passVal: '',
      remember: false,
      register: false
    }
  }

  toggleView = () => {
    this.setState(prevState => ({
      register: !prevState.register,
    }));
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

  componentDidMount() {

  }

  render () {
    const register = this.state.register;

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

            { register ? <button>Create Account</button> : <button>Log In</button>}
          </form>
        </div>


        { register ? <p> Have An Account?
                          <span onClick={this.toggleView}>
                            Log In
                          </span>
                        </p>

                        : <p> Need An Account?
                              <span onClick={this.toggleView}>
                                Create One
                              </span>
                          </p> }

      </div>
    );
  }
}

const mstp = state => {
  return {
    ...state
  }
}

export default connect(mstp, {})(Login);
