import axios from 'axios';

/* LogIn */
export const VERIFY_USER = 'VERIFY_USER';

/* Set Authorization for Login */ 
export const setAuth = token => {
  if(token && localStorage.getItem('user')) {
    axios.defaults.headers.common['Authorization'] = `${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

/* Verify User by Token */
export const verifyUser = user => {
  return {
    type: VERIFY_USER,
    payload: user
  }
}