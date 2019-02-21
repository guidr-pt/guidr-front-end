import React from 'react';

import { connect } from 'react-redux';
import { editTrip, deleteTrip, getUserTrips } from '../../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';


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
      type: this.state.type || this.props.trip.type
    }

    const id = this.props.trip.id;

    this.props.editTrip(update, id);
    this.setState({
      modal: true,
      edit: false,
      title: '',
      description: '',
      type: '',
      duration: '',
      private: false,
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
                              <option value="camping">Camping</option>
                              <option value="rafting">Rafting</option>
                              <option value="backpacking">Backpacking</option>
                            </select>
                          </div>

    return (

      /*
          Modal Contains Elements render in one of two views (display/edit)
          The format for these are

          { editMode(bool) ? <input/> : <display element> }
      */

      <div className='modal-container'>
        <Button color="danger" onClick={this.toggle}>View</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>

          <ModalHeader>
            { trip.title }
            {this.props.trip.username === this.props.user.username ? <span onClick={this.deleteTripHandler}>&times;</span> : null }
          </ModalHeader>

          <ModalBody>
            <div className='modal-info'>
              <img src={trip.img} alt={trip.title} id='modal-image'/>

              <div>
                { editMode ? <input placeholder={trip.title}
                                    name='title'
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.title}/>

                           : <h2>{trip.title}</h2> }


                { editMode ? <textarea name='description'
                                       placeholder='Description '
                                       onChange={this.handleChange}
                                       value={this.state.description}></textarea >

                            : <p>{trip.description}</p> }

                { editMode ? checkBoxPrivate : <p>{trip.private === true ? 'Private' : 'Professional'}</p> }
                { editMode ? dropDownTypes : <Badge color={this.props.type === 'hiking' ? 'success' : 'primary'}>test badge</Badge> }
              </div>


            </div>
          </ModalBody>
          <ModalFooter>
            <div>
              { editMode ? <input placeholder={trip.duration}
                                  name='duration'
                                  type='text'
                                  onChange={this.handleChange}
                                  value={this.state.duration}/>

                          : <p>{trip.duration}</p> }

              { editMode ? <input placeholder={trip.date}
                                  name='date'
                                  type='text'
                                  onChange={this.handleChange}
                                  value={this.state.date}/>

                          : <p>{trip.date}</p> }
            </div>

            <div>
              { editMode ? <Button color="primary" onClick={this.saveEdit}>Save</Button>
                         : <Button color="primary" onClick={this.editMode}>Edit</Button>}

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
