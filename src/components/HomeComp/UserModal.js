import React from 'react';

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class UserModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false,
        }
    }

    toggle = () => {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    render() {
        return(
            <div>
                <Button color="danger" onClick={this.toggle}>View</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >

                    <ModalHeader>
                    { this.props.user.username }
                    </ModalHeader>

                    <ModalBody>
                    <div className='modal-info'>
                        <img src={this.props.user.img} alt={this.props.user.username} id='modal-image'/>
                        <h1>{this.props.user.name}</h1>
                    </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default UserModal;