import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class TripModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      edit: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      edit: false
    }));
  }

  editMode = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    const trip = this.props.trip;
    const editMode = this.state.edit;
    const checkBoxPrivate = <div>
                              <input type='checkbox' /> {String(trip.private)}
                            </div>
    console.log(editMode)

    return (
      <div className='modal-container'>
        <Button color="danger" onClick={this.toggle}>View</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>

          <ModalHeader>{ editMode ? <input placeholder={trip.name}/> : trip.name }</ModalHeader>

          <ModalBody>
            <div className='modal-info'>
              <img src={trip.img} alt={trip.name} id='modal-image'/>

              <div>
                { editMode ? <input placeholder={trip.name}/> : <h2>{trip.name}</h2> }
                { editMode ? <input placeholder={trip.name}/> : <p>{trip.description}</p> }

                { editMode ? checkBoxPrivate : <p>{String(trip.private)}</p> }
              </div>


            </div>
          </ModalBody>
          <ModalFooter>
            <div>
              { editMode ? <input placeholder={trip.name}/> : <p>{trip.duration}</p> }
              { editMode ? <input placeholder={trip.name}/> : <p>{trip.date}</p> }
            </div>

            <div>
              <Button color="primary" onClick={this.editMode}>{ editMode ? 'Save' : 'Edit'}</Button>
              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default TripModal;
