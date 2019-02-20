import React from 'react';

import { connect } from 'react-redux';
import { searchTrip, searchUsers, user } from '../actions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSearch: '',
      tripSearch: '',
    }
  }

  /* Takes input as its typed and stores in state  */
  handleChange = e => {

    /* Check if user backs completely out of input string */
    if(e.target.value === '' && this.state.tripSearch.length > 0) {

      /* Reset results back to all trips  */
      this.props.searchTrip(user[0].trips);
      return;
    } else if (e.target.value === '' && this.state.userSearch.length > 0) {
      this.props.searchUsers(this.props.allUsers);
      return;
    }

    this.setState({
        [e.target.name]: e.target.value
    });
  }

  /*  Determine which search is being executed, and sends filtered array to appropiate function */
  handleSearch = e => {
    /*
        Fromate for conditionals:
          if tripSearch has value ? return trips value : return users value
     */
    const term = this.state.tripSearch.length > 0 ? this.state.tripSearch : this.state.userSearch
    console.log('term', term)
    console.log(this.props.allUsers[0])
    const filtered = this.state.tripSearch.length > 0 ?
                      /* Data: filter the trips based on names that include the search term */
                      this.props.trips.filter(trip => trip.name.toLowerCase().includes(term.toLowerCase()))
                      /* Data: filter the users based on usersnames that include the search term */
                      : this.props.allUsers.filter(user => user.name.toLowerCase().includes(term.toLowerCase()));

    console.log('filtered', filtered)
    this.state.tripSearch.length > 0 ? this.props.searchTrip(filtered)
                                     : this.props.searchUsers(filtered);
  }

  render() {
    /* Determine where in state to store value */
    const name = this.props.users ? 'userSearch' : 'tripSearch';

    return(
      <div className='search'>
        <input placeholder='Search...'
               name={name}
               type='text'
               onChange={this.handleChange}
               value={this.state.term}
               />

        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

const mstp = state => {
  return {
    trips: state.appReducer.trips,
    allUsers: state.appReducer.allUsers
  }
}

export default connect(mstp, { searchTrip, searchUsers })(Search);
