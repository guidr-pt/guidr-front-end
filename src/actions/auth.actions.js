import axios from 'axios';

/* LogIn */
export const VERIFY_USER = 'VERIFY_USER';

/* Set Authorization Header for Axios Calls */ 
export const setAuth = token => {
  token && localStorage.getItem('user') ? axios.defaults.headers.common['Authorization'] = `${token}` 
                                        : delete axios.defaults.headers.common['Authorization']
}

/* Verify User by Token */
export const verifyUser = user => {
  return {
    type: VERIFY_USER,
    payload: user
  }
}