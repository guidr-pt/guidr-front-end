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


/*   Get all user data   */
export const getAllUsers = () => dispatch => {
    dispatch({ type: LOADING });

    axios.get(`https://guidr-back-end.herokuapp.com/users`)
         .then(res => dispatch({ type: GET_USERS, payload: res.data}))
         .catch(err => console.log(err));
}

/*   Get current user data   */
export const getUser = id => dispatch => {
  dispatch({ type: LOADING });
  
  axios.get(`https://guidr-back-end.herokuapp.com/users/${id}`)
       .then(res => { dispatch({ type: GET_USER, payload: res.data[0] }) })
       .catch(err => console.log(err));
}

/* Edit User from Profile */
export const editUser = update => dispatch => {
  dispatch({ type: LOADING });

  const id = update.id;

  axios.put(`https://guidr-back-end.herokuapp.com/users/${id}`, update)
       .then(res => dispatch({ type: EDIT_USER, payload: update }))
       .catch(err => console.log(err));

}

/*   Get user selected trip   */
export const getUserTrips = username => dispatch => {
    axios.get(`https://guidr-back-end.herokuapp.com/trips/${username}`)
         .then(res => dispatch({ type: GET_TRIP, payload: res.data }))
         .catch(err => console.log(err))   
}

/*   Get all user trips   */
export const getTrips = clearSearch => dispatch => {
  clearSearch ? console.log('continue') : dispatch({ type: LOADING });

  axios.get(`https://guidr-back-end.herokuapp.com/trips`)
       .then(res => dispatch({ type: GET_TRIPS, payload: res.data }))
       .catch(err => console.log(err))

  /* dispatch({ type: GET_TRIPS, payload: user[0].trips }) */
}

/*  Post New Trip from Form */
export const addTrip = newTrip => dispatch => {
  dispatch({ type: LOADING });
 
  axios.post(`https://guidr-back-end.herokuapp.com/trips`,newTrip)
       .then(dispatch({ type: ADD_TRIP }))
       .catch(err => console.log(err));

  
}

/*  Edit Trip from Modal */
export const editTrip = update => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: EDIT_TRIP, payload: update })
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
