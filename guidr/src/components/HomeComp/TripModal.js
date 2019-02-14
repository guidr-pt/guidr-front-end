import React from 'react';

import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class TripModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    const trip = this.props.trip;

    return (
      <div className='modal-container'>
        <Button color="danger" onClick={this.toggle}>View</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <div>
              <h2>{trip.name}</h2>
              <h3>{trip.description}</h3>
              <img src={trip.img} alt={trip.name}/>
              <h5>{trip.type}</h5>

              <div>
                <input type='checkbox' /> {String(trip.private)}
              </div>

              <p>{trip.duration}</p>
              <p>{trip.date}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default TripModal;
