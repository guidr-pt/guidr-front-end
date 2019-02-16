import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSearch: '',
      tripSearch: '',
    }
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
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

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
