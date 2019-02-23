import axios from 'axios';

/* Authentication and Authorization */
const token = localStorage.getItem('jwtToken');
const reqOptions = {
  headers: {
    Authorization: token
  }
}

/* Multi-use */
export const LOADING = 'LOADING';

/* Users */
export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';
export const EDIT_USER = 'EDIT_USER';


/*   Get all user data   */
export const getAllUsers = () => dispatch => {
    dispatch({ type: LOADING });
    console.log('getUesers: ', reqOptions)
    axios.get(`https://guidr-back-end.herokuapp.com/users`, reqOptions)
         .then(res => dispatch({ type: GET_USERS, payload: res.data}))
         .catch(err => console.log(err));
}

/*   Get current user data   */
export const getUser = id => dispatch => {
  dispatch({ type: LOADING });
  
  axios.get(`https://guidr-back-end.herokuapp.com/users/${id}`, reqOptions)
       .then(res => { dispatch({ type: GET_USER, payload: res.data[0] }) })
       .catch(err => console.log(err));
}

/* Edit User from Profile */
export const editUser = (update) => dispatch => {
  dispatch({ type: LOADING });

  const id = update.id;
  update.profileImage = 'test';

  axios.put(`https://guidr-back-end.herokuapp.com/users/${id}`, update, reqOptions )
       .then(res =>{ 
         console.log(res)
         console.log(update);
         dispatch({ type: EDIT_USER, payload: update }) 
        })
       .catch(err => console.log(err));
}