import React from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, setAuth, verifyUser } from '../actions';

import jwt from 'jsonwebtoken';
import { dispatch } from 'rxjs/internal/observable/pairs';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userVal: '',
      passVal: '',
      passDisplay: '',
      nameVal:'chris',
      remember: false,
      register: false,
      isValid: true,
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

    /* Check if backspace was pressed and if the input was for password */
    if(e.nativeEvent.inputType === 'deleteContentBackward' && e.target.name === 'passVal') {
      /* get current value and remove last character */
      const value = e.target.value;
      const resultVal = value.slice(0, -1);

      /* get current display and remove last character */
      const display = this.state.passDisplay;
      const resultDis = display.slice(0, -1)

      this.setState({
        passVal: resultVal,
        passDisplay: resultDis
      })

    /* Check if input was for password */
    } else if(e.target.name === 'passVal') {
      /* Create hidden password display */

      let newVal = this.state.passVal;
      const display = [];

      /* get current value and remove hidden characters */
      const value = e.target.value
      newVal += value.substr(value.length - 1);

      /* create hidden character for every character in newVal */
      for(let i = 0; i < newVal.length; i++) {
        display.push('*')
      }

      const displayStr = display.join('')

      this.setState({
        passVal: newVal,
        passDisplay: displayStr
      })

    } else {

      this.setState({
        [e.target.name]: e.target.value
      });

    }
  }

  /* Login Authentication */
  login = e => {
    e.preventDefault();
    console.log('LOGIN')
    const endpoint =  'https://guidr-back-end.herokuapp.com/users/login'; /*'http://localhost:7070/users/login'*/
    const userInfo = {
        username: this.state.userVal,
        password: this.state.passVal
    }
  
    axios.post(endpoint, userInfo)
         .then(res => {
           localStorage.setItem('jwtToken', res.data.token);
           localStorage.setItem('user', userInfo);
          
           const token = localStorage.getItem('jwtToken');
          
           console.log(this.props)
           this.props.setAuth(token);

           const id = res.data.user.id;
           
           console.log('PRE GET USER');
           this.props.getUser(id)

           console.log('POST GET USER');
           if(token) {
             console.log('SUCCESS')
             this.props.history.push('/portfolio');
           } else {
             this.props.history.push('/access-denied');
           }
         })
         .catch(err => { 
            this.setState(prevState => ({
              isValid: !prevState.isValid,
            }));
          })
  }

  /* Registration of new user */
  registration = e => {
    e.preventDefault();

    const endpoint =   'https://guidr-back-end.herokuapp.com/users/registration' /*'http://localhost:7070/users/registration';*/
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
          <div className='login__form--head'>
            <h1>{ register ? 'Sign Up' : 'Log In'}</h1>
          </div>

          <form onSubmit={!register?this.login:this.registration}>
            { register ? <div className='login__input--container'>
                          <i className="fas fa-user"></i>
                          <input type='text'
                                placeholder='full name'
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
                     value={ !register ? this.state.passDisplay : this.state.passVal }
                     />
            </div>

            <div>
              <input onClick={this.toggleRemember} type='checkbox' /> <span>Remember Me</span>
            </div>

            {/* Determine if the LogIn or SignUp button is rendered */}
            { register ? <button type='submit'>Create Account</button> : <button type='submit'>Log In</button>}
            { !this.state.isValid ? <p>There Was An Error. Please Try Again.</p> : null }
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

export default connect(mstp, { getUser, setAuth, verifyUser })(withRouter(Login));
