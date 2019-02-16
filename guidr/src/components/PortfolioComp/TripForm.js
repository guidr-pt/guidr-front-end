import React from 'react';

import { connect } from 'react-redux';
import { addTrip } from '../../actions';

class TripForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      img: '',
      private: false,
      type: '',
      duration: '',
      date: ''
    }
  }

  /* Update State based on Form Inputs */
  handleChange = e => {
  this.setState({
     ...this.state,
     [e.target.name]: e.target.value
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

  this.props.addTrip(this.state);
}

componentDidMount() {
  this.authenticate();
}

  render() {
    return (
      <div className='trip-form__container'>
        <form onSubmit={this.addTripHandler}>
          <h2>Add Another Trip?</h2>

          <div className='textbox'>
            <label>Name:</label>
            <input type='text'
                   name='name'
                   placeholder='Grand Falls'
                   onChange={this.handleChange}
                   value={this.state.Name} />
          </div>

          <div className='textbox'>
            <label>Type:</label>
            <input type='text'
                   name='type'
                   placeholder='type'
                   onChange={this.handleChange}
                   value={this.state.type} />
          </div>

          <div className='textbox'>
            <label>Duration:</label>
            <input type='text'
                   name='duration'
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


export default connect(null, { addTrip })(TripForm);
