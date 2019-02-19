import {
  GET_USER,
  EDIT_USER,
  GET_TRIP,
  GET_TRIPS,
  ADD_TRIP,
  EDIT_TRIP,
  SEARCH_TRIPS,
  SEARCH_USERS,
  FILTER_TRIPS
} from '../actions';

const initialState = {
  user: {},
  activeTrip: {},
  trips: [],
  recentTrips: [],
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }

      case EDIT_USER:
        return {
          ...state
        }


    case GET_TRIP:
      return {
        ...state,
        activeTrip: action.payload
      }

    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload,
        recentTrips: action.payload.slice(Math.max(action.payload.length - 5, 1))
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
        return {
          ...state,
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
