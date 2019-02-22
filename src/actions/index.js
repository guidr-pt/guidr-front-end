import axios from 'axios';


/* Users */
export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';
export const EDIT_USER = 'EDIT_USER';
/* Trips */
export const GET_TRIP = 'GET_TRIP';
export const GET_TRIPS = 'GET_TRIPS';
export const EDIT_TRIP = 'EDIT_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';
export const ADD_TRIP = 'ADD_TRIP';
/* Search And Filter */
export const SEARCH_TRIPS = 'SEARCH_TRIPS';
export const SEARCH_USERS = 'SEARCH_USERS';
export const FILTER_TRIPS = 'FILTER_TRIPS';
/* Multi-use */
export const LOADING = 'LOADING';
/* LogIn */
export const VERIFY_USER = 'VERIFY_USER';

const token = localStorage.getItem('jwtToken');
const reqOptions = {
  headers: {
    Authorization: token
  }
}


/*   Get all user data   */
export const getAllUsers = () => dispatch => {
    dispatch({ type: LOADING });

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
export const editUser = update => dispatch => {
  dispatch({ type: LOADING });

  const id = update.id;
  update.profileImage = 'test';

  axios.put(`https://guidr-back-end.herokuapp.com/users/${id}`, update, reqOptions)
       .then(res => dispatch({ type: EDIT_USER, payload: update }))
       .catch(err => console.log(err));

}

/*   Get user trips  */
export const getUserTrips = username => dispatch => {
    axios.get(`https://guidr-back-end.herokuapp.com/trips/${username}`, reqOptions)
         .then(res => dispatch({ type: GET_TRIP, payload: res.data }))
         .catch(err => console.log(err))   
}

/*   Get all trips   */
export const getTrips = clearSearch => dispatch => {
  clearSearch ? console.log('continue') : dispatch({ type: LOADING });

  axios.get(`https://guidr-back-end.herokuapp.com/trips`, reqOptions)
       .then(res => dispatch({ type: GET_TRIPS, payload: res.data }))
       .catch(err => console.log(err))
}

/*  Post New Trip from Form */
export const addTrip = newTrip => dispatch => {
  dispatch({ type: LOADING });
 
  axios.post(`https://guidr-back-end.herokuapp.com/trips`, newTrip, reqOptions,)
       .then( res => {
         dispatch({ type: ADD_TRIP })
         
         /* Update All Trips after Addition */
          axios.get(`https://guidr-back-end.herokuapp.com/trips`, reqOptions)
            .then(res => dispatch({ type: GET_TRIPS, payload: res.data }))
            .catch(err => console.log(err))
        })
       .catch(err => console.log(err));
}

/*  Edit Trip from Modal */
export const editTrip = (update,id, username) => dispatch => {
  dispatch({ type: LOADING });
  axios.put(`https://guidr-back-end.herokuapp.com/trips/${id}`, update, reqOptions)
       .then(res => {
          /* Update User Trips after Deletion */
          axios.get(`https://guidr-back-end.herokuapp.com/trips/${username}`, reqOptions)
          .then(res => dispatch({ type: GET_TRIP, payload: res.data }))
          .catch(err => console.log(err))   

          /* Update All Trips after Deletion */
          axios.get(`https://guidr-back-end.herokuapp.com/trips`, reqOptions)
              .then(res => dispatch({ type: GET_TRIPS, payload: res.data }))
              .catch(err => console.log(err))  
       })
       .catch(err => console.log(err))

  dispatch({ type: EDIT_TRIP, payload: update })
}

/* Delete Trip from Modal */
export const deleteTrip = (id, username) => dispatch => {
  axios.delete(`https://guidr-back-end.herokuapp.com/trips/${id}`, reqOptions)
       .then(res => {
         /* Update User Trips after Deletion */
          axios.get(`https://guidr-back-end.herokuapp.com/trips/${username}`, reqOptions)
              .then(res => dispatch({ type: GET_TRIP, payload: res.data }))
              .catch(err => console.log(err))   

          /* Update All Trips after Deletion */
          axios.get(`https://guidr-back-end.herokuapp.com/trips`, reqOptions)
              .then(res => dispatch({ type: GET_TRIPS, payload: res.data }))
              .catch(err => console.log(err))  
       })
       .catch(err => console.log(err));
}

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

/* Search For Trips By User Selection */
export const searchTrip = filteredArr => dispatch => {
  dispatch({ type: SEARCH_TRIPS, payload: filteredArr })
}

/* Search For User */
export const searchUsers = filteredArr => dispatch => {
  dispatch({ type: SEARCH_USERS, payload: filteredArr })
}

/* Filter Trips By User Selection */
export const filterTrips = filterArr => dispatch => {
  dispatch({ type: FILTER_TRIPS, payload: filterArr });
}
