import React from 'react';

import { connect } from 'react-redux';
import { addTrip } from '../../actions';

class TripForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "username": this.props.user.username,
      "duration": '',
      "title": '',
      "description": '',
      "private": false,
      "type": 'hiking',
    }
  }

/* Update State based on Form Text Inputs */
handleChange = e => {
  this.setState({
     ...this.state,
     [e.target.name]: e.target.value
   });
}

/* Update State based on Form Select Inputs */
handleDropdown = e => {
  this.setState({
     ...this.state,
     type: e.target.value
   });
}

/* Ensure user is signed in by checking token, alternate route if denied */
authenticate = () => {
  const token = localStorage.getItem('jwtToken');

  if(token) {
    this.props.history.push('/add-trip')
  } else {
    this.props.history.push('/access-denied');
  }
}

/* Buttons that determine if trip is private or professional */
privateSelect = e => {
  e.preventDefault();

  const buttons = e.target.parentNode.childNodes;
  buttons.forEach(btn => btn.classList.toggle('selected'));

  e.target.innerText.toLowerCase() === 'private' ? this.setState({ private: true }) : this.setState({ private: false })
}

/* Handler that sends the new trip to the action creator */
addTripHandler = e => {
  e.preventDefault();

  const newTrip = this.state;
  this.props.addTrip(newTrip);
}

componentDidMount() {
  /* Ensure User is Logged In*/
  this.authenticate();
}

  render() {
    return (
      <div className='trip-form__container'>
        <form onSubmit={this.addTripHandler}>
          <h2>Add Another Trip?</h2>

          <div className='textbox'>
            <label>Title:</label>
            <input type='text'
                   name='title'
                   placeholder='Title'
                   onChange={this.handleChange}
                   value={this.state.title} />
          </div>

          <div className='textbox'>
            <label>Type:</label>
            <select name="type"
                    onChange={this.handleDropdown}>
               <option value="hiking">Hiking</option>
               <option value="camping">Camping</option>
               <option value="rafting">Rafting</option>
               <option value="backpacking">Backpacking</option>
             </select>
          </div>

          <div className='textbox'>
            <label>Duration:</label>
            <input name='duration'
                   placeholder='XX Days'
                   onChange={this.handleChange}
                   value={this.state.duration} />
          </div>

          <div className='textbox'>
            <label>Date:</label>
            <input type='text'
                   name='date'
                   placeholder='MM / DD / YYYY'
                   onChange={this.handleChange}
                   value={this.state.date}/>
          </div>

          <div className='btnbox'>
            <button onClick={this.privateSelect} className='selected'>Professional</button>

            <button onClick={this.privateSelect}>Private</button>
          </div>

          <div className='description'>
            <label>Description:</label>
            <textarea name='description'
                      onChange={this.handleChange}
                      value={this.state.description} />
          </div>


          <button type='submit'>Add Trip</button>
        </form>
      </div>
    )
  }
}

const mstp = state => {
  return {
    ...state,
    user: state.appReducer.user
  }
}

export default connect(mstp, { addTrip })(TripForm);