import React from 'react';

import { connect } from 'react-redux';
import { editTrip, deleteTrip, getUserTrips } from '../../actions';
import { Button, Form, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import { badges } from '../../badges';


class TripModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      edit: false,
      title: '',
      description: '',
      type: '',
      duration: '',
      private: false,
      image: 'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?cs=srgb&dl=adventure-backpack-climb-868097.jpg&fm=jpg'
    };
  }

  /* Open and Close Modal */
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      edit: false
    }));
  }

  /* Get Status of Private/Professional Checkbox */
  getPrivate = e => {
    this.setState({ private: e.target.checked})
  }

  /* Enter Edit View revealing Form Inputs */
  editMode = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  }

  /* Update Trip based on Form Input in Edit mode */
  saveEdit = e => {
    const update = {
      title: this.state.title || this.props.trip.title,
      description: this.state.description || this.props.trip.description,
      duration: this.state.duration || this.props.trip.duration,
      date: this.state.date || this.props.trip.date,
      private: this.state.private || this.props.trip.private,
      type: this.state.type || this.props.trip.type,
      image: this.state.image || this.props.trip.image
    }

    const id = this.props.trip.id;
    const username = this.props.user.username;

    this.props.editTrip(update, id, username);
    this.setState({
      modal: true,
      edit: false,
      title: '',
      description: '',
      type: '',
      duration: '',
      private: false,
      image: ''
    })
  }

  /* Delete TRip Based on Id */
  deleteTripHandler = e => {
    const id = this.props.trip.id;
    const username = this.props.user.username;

    this.props.deleteTrip(id, username);
  }

  /* Update State based on Form Inputs */
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

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    const trip = this.props.trip;
    const editMode = this.state.edit;

    const checkBoxPrivate = <div>
                              <input type='checkbox' onClick={this.getPrivate}/> Private
                            </div>

    const dropDownTypes = <div>
                            <label>Type:</label>
                            <select name="type"
                                    onChange={this.handleDropdown}>
                              <option value="hiking">Hiking</option>
                              <option value="biking">Biking</option>
                              <option value="rafting">Rafting</option>
                              <option value="backpacking">Backpacking</option>
                            </select>
                          </div>
    const imageUrl = trip.image === null ? this.state.image : trip.image
    return (

      /*
          Modal Contains Elements render in one of two views (display/edit)
          The format for these are

          { editMode(bool) ? <input/> : <display element> }
      */
      
      <div className='modal-container'>
        <Button color="danger" onClick={this.toggle}>View</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>

          <ModalHeader className='pseudoLabel'>
            { trip.title }
            {this.props.trip.username === this.props.user.username ? <Button onClick={this.deleteTripHandler}>Delete</Button> : null }
          </ModalHeader>

          <ModalBody>
            <div className='modal-info'>
              <div className='imageUploader'>
              <img src={imageUrl} alt={trip.title} id='modal-image'/>
                           
              { editMode ? <div className='linkInput'> 
                             <p>Please paste an image link for your trip</p>
                             <Label>Link</Label>
                             <Input name='image'onChange={this.handleChange}type='link'/>
                           </div>
                           : <p>Trip Image</p>
              }
              </div>
              <div>
                { editMode ? <div>
                                <Label>Title:</Label>
                                <Input placeholder={trip.title}
                                    name='title'
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.title}/>
                             </div>

                           : <h2>{trip.title}</h2> }


                { editMode ? <div>
                                <Label>Description</Label> 
                                <textarea name='description'
                                          placeholder={trip.description}
                                          onChange={this.handleChange}
                                          value={this.state.description}></textarea>
                             </div>

                            : <p>{trip.description}</p> }

                { editMode ? checkBoxPrivate : <p>{trip.private === true ? 'Private' : 'Professional'}</p> }
                { editMode ? dropDownTypes : <Badge color={badges[this.props.trip.type]}>test badge</Badge> }
              </div>


            </div>
          </ModalBody>
          <ModalFooter>
            <div>
              { editMode ? <div>
                              <Label>Duration:</Label>
                              <Input placeholder={trip.duration}
                                  name='duration'
                                  type='text'
                                  onChange={this.handleChange}
                                  value={this.state.duration}/>
                           </div>
                          : <p>{trip.duration}</p> }

              { editMode ? <div>
                              <Label>Date:</Label>
                              <Input placeholder={trip.date}
                                  name='date'
                                  type='text'
                                  onChange={this.handleChange}
                                  value={this.state.date}/>
                           </div>

                          : <p>{trip.date}</p> }
            </div>

            <div>
              {/* If User is owner of trip, render button */}
              {this.props.trip.username === this.props.user.username ? /* If edit mode is active render save btn else render edit btn*/
                                                                      editMode ? <Button color="primary" onClick={this.saveEdit}>Save</Button>
                                                                              : <Button color="primary" onClick={this.editMode}>Edit</Button>
                                                                      : null }

              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mstp = state => {
  return {
    user: state.appReducer.user
  }
}


export default connect(mstp, { editTrip, deleteTrip, getUserTrips })(TripModal);
