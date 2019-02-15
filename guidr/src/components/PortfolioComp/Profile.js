import React from 'react';
import TripGrid from '../HomeComp/TripGrid';

import { connect } from 'react-redux';

import { Button } from 'reactstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    }
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  }

  render() {
    const editMode = this.state.edit;

    return(
      <div className='portfolio-container'>

        <div className='portfolio__profile'>

        <Button color="primary" onClick={this.toggleEdit}> Edit </Button>

          <div className='portfolio__profile__bio'>
            <img src='http://svgur.com/i/65U.svg' alt={this.props.user.name} />

            <div>
              { editMode ? <input placeholder={this.props.user.username} /> : <h1>{this.props.user.username}</h1> }
              { editMode ? <input placeholder={this.props.user.title} /> : <h2>{this.props.user.title}</h2> }
            </div>
          </div>

          <div className='spacer' />
            { editMode ? <input placeholder='tagline' /> : <h3>{this.props.user.tagline}</h3> }
          <div className='spacer' />

          <div className='portfolio__profile__time'>
            { editMode ? <input placeholder='Age' /> : <p>Age: {this.props.user.age}</p> }
            { editMode ? <input placeholder='Time As Guide' /> : <p>Time As Guide: {this.props.user.timeAsGuide}</p> }
          </div>
        </div>

        <TripGrid />
      </div>
    );
  }
}

const mstp = state => {
  return {
    user: state.appReducer.user
  }
}

export default connect(mstp, {})(Profile);
