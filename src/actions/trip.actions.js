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

/* Trips */
export const GET_TRIP = 'GET_TRIP';
export const GET_TRIPS = 'GET_TRIPS';
export const EDIT_TRIP = 'EDIT_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';
export const ADD_TRIP = 'ADD_TRIP';

/*   Get user trips  */
export const getUserTrips = username => dispatch => {
    axios.get(`https://guidr-back-end.herokuapp.com/trips/${username}`, reqOptions)
         .then(res => dispatch({ type: GET_TRIP, payload: res.data }))
         .catch(err => console.log(err))   
}

/*   Get all trips   */
export const getTrips = clearSearch => dispatch => {
  clearSearch ? console.log('') : dispatch({ type: LOADING });

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
export const editTrip = (update, id, username) => dispatch => {
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