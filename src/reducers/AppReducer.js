import {
  LOADING,
  
  /* User Actions */
  GET_USER,
  GET_USERS,
  EDIT_USER,

  /* Trip Actions */
  GET_TRIP,
  GET_TRIPS, 
  ADD_TRIP,
  EDIT_TRIP,
  DELETE_TRIP, 

  /* Search and Filter */
  SEARCH_TRIPS,
  SEARCH_USERS,
  FILTER_TRIPS
} from '../actions';

const initialState = {
  loading: false,
  allUsers: [],
  filteredUsers: [],
  user: {},
  userTrips: [],
  trips: [],
  recentTrips: [],
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING: 
      return {
        ...state,
        loading: true
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }

    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
        loading: false
      }

    case EDIT_USER:
    console.log('REDUCER FIRED', action.payload)
      return {
        ...state,
        user: action.payload,
        loading: false
      }

    case GET_TRIP:
      return {
        ...state,
        userTrips: action.payload,
        loading: false
      }

    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload,
        recentTrips: action.payload.slice(Math.max(action.payload.length - 5, 1)),
        loading: false,
      }

    case ADD_TRIP:
      return {
        ...state,
        loading: false
      }

    case EDIT_TRIP:
      return {
        ...state,
        loading: false
      }

    case  DELETE_TRIP:
      return {
        ...state,
        loading: false,
      }

    case SEARCH_TRIPS:
      return {
        ...state,
        trips: action.payload
      }

      case SEARCH_USERS:
        return {
          ...state,
          filteredUsers: action.payload
        }

      case FILTER_TRIPS:
        console.log(action.payload)
        return {
          ...state,
          trips: action.payload
        }

    default:
      return state;
  }
}
