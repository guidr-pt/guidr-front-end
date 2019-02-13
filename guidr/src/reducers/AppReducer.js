import {
  GET_USER,
  GET_TRIP,
  GET_TRIPS,
} from '../actions';

const initialState = {
  user: {},
  activeTrip: {},
  trips: [],
  recentTrips: []
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
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

    default:
      return state;
  }
}
