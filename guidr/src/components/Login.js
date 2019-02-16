import React from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userVal: '',
      passVal: '',
      nameVal:'chris',
      remember: false,
      register: false
    }
  }

  /* Changes between the Login and Singup views */
  toggleView = () => {
    this.setState(prevState => ({
      register: !prevState.register,
    }));
  }

  /* Toggle the value of remember me in state */
  toggleRemember = e => {
    this.setState({
      remember: e.target.checked
    })
  }

  /* Update State based on Form Inputs */
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /* Login Authentication */
  login = e => {
    e.preventDefault();

    const endpoint =  'http://localhost:7070/user/login';
    const userInfo = {
        username: this.state.userVal,
        password: this.state.passVal
    }

    axios.post(endpoint, userInfo)
         .then(res => {
           localStorage.setItem('jwtToken', res.data.token);
           const token = localStorage.getItem('jwtToken');

           if(token) {
             this.props.history.push('/portfolio')
           } else {
             this.props.history.push('/access-denied');
           }
         })
         .catch(err => { console.log('error:', err) })
  }

  /* Registration of new user */
  registration = e => {
    e.preventDefault();

    const endpoint =  'http://localhost:7070/user/registration';
    const registerInfo = {
      username: this.state.userVal,
      name: this.state.nameVal,
      password: this.state.passVal
    }

    axios.post(endpoint, registerInfo)
          .then(res => {
            this.setState({ register: false })
          })
          .catch(err => console.log('Error: ', err));
  }

  render () {
    const register = this.state.register;

    return(
      <div>
        <div className='login__form--container'>
          <div className='login__form--head'></div>

          <form onSubmit={!register?this.login:this.registration}>
            { register ? <div className='login__input--container'>
                          <i className="fas fa-user"></i>
                          <input type='text'
                                placeholder='name'
                                name='nameVal'
                                onChange={this.changeHandler}
                                value={this.state.name}
                                />
                        </div>
                        : null }

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

            {/* Determine if the LogIn or SignUp button is rendered */}
            { register ? <button>Create Account</button> : <button type='submit'>Log In</button>}
          </form>
        </div>

        {/* Determine if the LogIn or SignUp toggle is rendered */}
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

export default connect(mstp, {})(withRouter(Login));
