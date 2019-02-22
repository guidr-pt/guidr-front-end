/* Search And Filter */
export const SEARCH_TRIPS = 'SEARCH_TRIPS';
export const SEARCH_USERS = 'SEARCH_USERS';
export const FILTER_TRIPS = 'FILTER_TRIPS';


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
  