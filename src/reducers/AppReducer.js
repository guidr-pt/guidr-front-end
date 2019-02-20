import {
  LOADING /* X */,
  GET_USER /* X */,
  GET_USERS /* X */,
  EDIT_USER /* X */,
  GET_TRIP /* - */,
  GET_TRIPS /* X */, 
  ADD_TRIP /* X */,
  EDIT_TRIP, 
  SEARCH_TRIPS /* X */,
  SEARCH_USERS /* X */,
  FILTER_TRIPS /* X */
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
        ...state
      }

    case EDIT_TRIP:
      return {
        ...state
      }

    case SEARCH_TRIPS:
      return {
        ...state,
        trips: action.payload
      }

      case SEARCH_USERS:
        console.log('PAYLOAD', action.payload)
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
