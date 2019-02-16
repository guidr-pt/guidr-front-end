import React from 'react';

import { connect } from 'react-redux';
import { editTrip } from '../../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class TripModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      edit: false,
      name: '',
      description: '',
      duration: '',
      date: '',
      private: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      edit: false
    }));
  }

  getPrivate = e => {
    this.setState({ private: e.target.checked})
  }

  editMode = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  }

  saveEdit = e => {
    const update = {
      name: this.state.name,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      private: this.state.private,
    }


    this.props.editTrip(update);
    this.setState({
      modal: true,
      edit: false,
      name: '',
      description: '',
      duration: '',
      date: '',
      private: false,
    })
  }

  handleChange = e => {
    this.setState({
       ...this.state,
       [e.target.name]: e.target.value
     });
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    const trip = this.props.trip;
    const editMode = this.state.edit;
    const checkBoxPrivate = <div>
                              <input type='checkbox' onClick={this.getPrivate}/> Private
                            </div>

    return (
      <div className='modal-container'>
        <Button color="danger" onClick={this.toggle}>View</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>

          <ModalHeader>{ trip.name }</ModalHeader>

          <ModalBody>
            <div className='modal-info'>
              <img src={trip.img} alt={trip.name} id='modal-image'/>

              <div>
                { editMode ? <input placeholder={trip.name}
                                    name='name'
                                    type='text'
                                    onChange={this.handleChange}
                                    value={this.state.name}/>

                           : <h2>{trip.name}</h2> }


                { editMode ? <textarea name='description'
                                       placeholder='Description '
                                       onChange={this.handleChange}
                                       value={this.state.description}></textarea >

                            : <p>{trip.description}</p> }

                { editMode ? checkBoxPrivate : <p>{trip.private === true ? 'Private' : 'Professional'}</p> }
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


export default connect(null, { editTrip })(TripModal);
