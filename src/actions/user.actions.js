import axios from 'axios';

/* Authentication and Authorization */
const token = localStorage.getItem('jwtToken');
axios.defaults.headers.common['Authorization'] = token;

/* Multi-use */
export const LOADING = 'LOADING';

/* Users */
export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';
export const EDIT_USER = 'EDIT_USER';


/*   Get all user data   */
export const getAllUsers = () => dispatch => {
    dispatch({ type: LOADING });
    axios.get(`https://guidr-back-end.herokuapp.com/users`, )
         .then(res => dispatch({ type: GET_USERS, payload: res.data}))
         .catch(err => console.log(err));
}

/*   Get current user data   */
export const getUser = id => dispatch => {
  dispatch({ type: LOADING });
  
  axios.get(`https://guidr-back-end.herokuapp.com/users/${id}`, )
       .then(res => { dispatch({ type: GET_USER, payload: res.data[0] }) })
       .catch(err => console.log(err));
}

/* Edit User from Profile */
export const editUser = (update, id) => dispatch => {
  dispatch({ type: LOADING });

  update.profileImage = 'test';
  delete update.timeAsGuide;
  console.log('UPDATE', update)
  axios.put(`https://guidr-back-end.herokuapp.com/users/${id}`, update)
       .then(res =>{ 
         console.log(update);
         dispatch({ type: EDIT_USER, payload: update }) 
        })
       .catch(err => console.log(err));
}