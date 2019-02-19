import axios from 'axios';


/* Dummy data to be deleted*/
export const user = [
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
        name: 'Colorado',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '24 days',
        date: '11/12/1992'
      },
      {
        name: 'Washington',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '4 days',
        date: '10/09/1989'
      },
      {
        name: 'California',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '23 days',
        date: '02/17/2016'
      },
      {
        name: 'New Hampshire',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '62 days',
        date: '04/21/2016'
      },
      {
        name: 'New York',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '12 days',
        date: '09/10/2015'
      },
      {
        name: 'New Zealand',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '2 days',
        date: '07/25/1977'
      },
      {
        name: 'Canada',
        description: 'I went on a trip!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r1TFvgJ5ieoJKUjFfMg7mHzIXFJtwPvICrb_W21UQZtyqFOd',
        private: false,
        type: 'type',
        duration: '9 days',
        date: '05/24/1999'
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
export const SEARCH_TRIPS = 'SEARCH_TRIPS';
export const SEARCH_USERS = 'SEARCH_USERS';
export const FILTER_TRIPS = 'FILTER_TRIPS';


/*   Action Calls and Creators for multiple reducers   */

export const LOADING = 'LOADING';

/*   Get current user data   */

export const getAllUsers = () => dispatch => {
    dispatch({ type: LOADING });

}

export const getUser = id => dispatch => {
  dispatch({ type: LOADING });

  axios.get(`http://localhost:7070/users/${id}`)
       .then(res => {
         dispatch({ type: GET_USER, payload: res.data[0] })
        })
       .catch(err => console.log(err));
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

  const id = update.id;

  axios.put(`http://localhost:7070/users/${id}`, update)
       .then(res => dispatch({ type: EDIT_USER, payload: update }))
       .catch(err => console.log(err));

}

export const searchTrip = filteredArr => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: SEARCH_TRIPS, payload: filteredArr })
}

export const searchUsers = filteredArr => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: SEARCH_USERS, payload: filteredArr })
}

export const filterTrips = filterArr => dispatch => {
  dispatch({ type: LOADING });

  dispatch({ type: FILTER_TRIPS, payload: filterArr });
}
