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

  handleChange = e => {
    if(e.target.value === '' && this.state.tripSearch.length > 0) {
      this.props.searchTrip(user[0].trips);
      return;
    }

    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSearch = e => {
    const term = this.state.tripSearch.length > 0 ? this.state.tripSearch : this.state.userSearch


    const filtered = this.state.tripSearch.length > 0 ?
                      this.props.trips.filter(trip => trip.name.toLowerCase().includes(term.toLowerCase()))
                      : user.filter(user => user.username.toLowerCase().includes(term.toLowerCase()));

    this.state.tripSearch.length > 0 ? this.props.searchTrip(filtered)
                                     : this.props.searchUsers(filtered);
  }

  render() {
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
    user: state.appReducer.user
  }
}

export default connect(mstp, { searchTrip, searchUsers })(Search);
