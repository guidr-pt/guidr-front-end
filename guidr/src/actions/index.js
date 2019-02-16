import axios from 'axios';


/* Dummy data to be deleted*/
const user = [
    {
    loggedIn: false,
    username: 'username1',
    password: 'password',
    title: 'title',
    tagline: 'tagline: a short description of the type of guide they are',
    age: 25,
    timeAsGuide: 8,
    trips: [
      {
        name: 'trip name',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '24 days',
        date: 'MM/DD/YYYY'
      },
      {
        name: 'trip name',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '4 days',
        date: 'MM/DD/YYYY'
      },
      {
        name: 'trip name',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '23 days',
        date: 'MM/DD/YYYY'
      },
      {
        name: 'trip name',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '62 days',
        date: 'MM/DD/YYYY'
      },
      {
        name: 'trip name',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '12 days',
        date: 'MM/DD/YYYY'
      },
      {
        name: 'trip name',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '2 days',
        date: 'MM/DD/YYYY'
      },
      {
        name: 'trip name',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '9 days',
        date: 'MM/DD/YYYY'
      },
    ]
  },

  {
  loggedIn: false,
  username: 'username2',
  password: 'password',
  title: 'title',
  tagline: 'tagline: a short description of the type of guide they are',
  age: 25,
  timeAsGuide: 8,
  trips: [
    {
      name: 'trip name',
      description: 'I went on a trip!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
      private: false,
      type: 'type',
      duration: '24 days',
      date: 'MM/DD/YYYY'
    },
    {
      name: 'trip name',
      description: 'I went on a trip!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
      private: false,
      type: 'type',
      duration: '4 days',
      date: 'MM/DD/YYYY'
    },
    {
      name: 'trip name',
      description: 'I went on a trip!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
      private: false,
      type: 'type',
      duration: '23 days',
      date: 'MM/DD/YYYY'
    },
    {
      name: 'trip name',
      description: 'I went on a trip!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
      private: false,
      type: 'type',
      duration: '62 days',
      date: 'MM/DD/YYYY'
    },
    {
      name: 'trip name',
      description: 'I went on a trip!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
      private: false,
      type: 'type',
      duration: '12 days',
      date: 'MM/DD/YYYY'
    },
    {
      name: 'trip name',
      description: 'I went on a trip!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
      private: false,
      type: 'type',
      duration: '2 days',
      date: 'MM/DD/YYYY'
    },
    {
      name: 'trip name',
      description: 'I went on a trip!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
      private: false,
      type: 'type',
      duration: '9 days',
      date: 'MM/DD/YYYY'
    },
  ]
},
]
/*   Action Calls and Creators for App Reducer   */

export const GET_USER = 'GET_USER';
export const EDIT_USER = 'EDIT_USER';
export const GET_TRIP = 'GET_TRIP';
export const GET_TRIPS = 'GET_TRIPS';
export const EDIT_TRIP = 'EDIT_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';
export const ADD_TRIP = 'ADD_TRIP';


/*   Action Calls and Creators for multiple reducers   */

export const LOADING = 'LOADING';

/*   Get current user data   */

export const getUser = () => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: GET_USER, payload: user[0] })
}

/*   Get user selected trip   */

export const getTrip = () => dispatch => {
    dispatch({ type: LOADING });

    dispatch({ type: GET_TRIP, payload: user[0].trips[0] })
}

/*   Get all user trips   */

export const getTrips = () => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: GET_TRIPS, payload: user[0].trips })
}

/*  Post New Trip from Form */

export const addTrip = newTrip => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: ADD_TRIP, payload: newTrip });
}

/*  Edit Trip from Modal */

export const editTrip = update => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: EDIT_TRIP, payload: update })
}

/* Edit User from Profile */

export const editUser = update => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: EDIT_USER, payload: update })
}
