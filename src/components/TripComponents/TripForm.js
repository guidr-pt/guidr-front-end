import React from 'react';
import { Button, Form, Label, Input } from 'reactstrap';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import { connect } from 'react-redux';
import { addTrip } from '../../actions';


class TripForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "username": JSON.parse(localStorage.getItem('user')).username,
      "duration": '',
      "title": '',
      "description": '',
      "private": false,
      "type": 'hiking',
      "date": new Date(),
      "image": 'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?cs=srgb&dl=adventure-backpack-climb-868097.jpg&fm=jpg'  
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

handleDate = e => {
  const date = new Date(e)
 
  this.setState({ date: date, start: e })
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
  delete newTrip.start;
  console.log(newTrip)
  this.props.addTrip(newTrip);
  
}

componentDidMount() {
  /* Ensure User is Logged In*/
  this.authenticate();
  console.log(JSON.parse(localStorage.getItem('user')).username)
}

  render() {
    return (
      <div className='trip-form__container'>
        <Form onSubmit={this.addTripHandler}>
          <h2>Add Another Trip?</h2>

          <div className='textbox'>
            <Label>Title:</Label>
            <Input type='text'
                   name='title'
                   placeholder='Title'
                   onChange={this.handleChange}
                   value={this.state.title} />
          </div>
       <div className='middleSegment'>   
         <div className='typeAndTimes'>
            <div className='textbox'>
              <Label>Type:</Label>
                <select name="type"
                    onChange={this.handleDropdown}>
                   <option value="hiking">Hiking</option>
                   <option value="biking">Biking</option>
                   <option value="rafting">Rafting</option>
                   <option value="backpacking">Backpacking</option>
                </select>
            </div>
            <div className='dateContainer'>
              <div className='textbox duration'>
                 <Label>Duration:</Label>
                 <Input name='duration'
                     placeholder='XX Days'
                     onChange={this.handleChange}
                     value={this.state.duration} />
              </div>
              <div id='date-picker'>
                <Label>Date:</Label>
                <DatePicker
                    selected={this.state.date}
                    onChange={this.handleDate}
                 />
              </div>
            </div>
          </div>
          <div className='imageUploader'>
            <img src={this.state.image} alt='avatar'/>
            <p>Please paste an image link for your trip</p>
            <div className='linkInput'>
              <Label>Link</Label>
              <Input name='image'onChange={this.handleChange}type='link'/>
            </div>
          </div>
        </div> 
          

          <div className='btnbox'>
            <Button onClick={this.privateSelect} className='selected buttons'>Professional</Button>

            <Button className='buttons'onClick={this.privateSelect}>Private</Button>
          </div>

          <div className='description'>
            <Label>Description:</Label>
            <textarea 
              className='textarea'
              name='description'
              onChange={this.handleChange}
              value={this.state.description} />
          </div>


          <Button className='submit'type='submit'>Add Trip</Button>
        </Form>
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
