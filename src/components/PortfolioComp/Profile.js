import React from 'react';
import TripGrid from '../HomeComp/TripGrid';

import { connect } from 'react-redux';
import { editUser } from '../../actions';

import { Button } from 'reactstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      title: '',
      tagline: '',
      age: '',
      timeAsGuide: ''
    }
  }

  /* Enter Edit View revealing Form Inputs */
  toggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  }

  /* Update State based on Form Inputs */
  handleChange = e => {
  this.setState({
     ...this.state,
     [e.target.name]: e.target.value
   });
 }

/* Update User based on Form Input in Edit mode */
 saveEdit = () => {
   const update = {
     title: this.state.title,
     tagline: this.state.tagline,
     age: this.state.age,
     timeAsGuide: this.state.timeAsGuide
   }

   this.props.editUser(update)
   this.setState({
     edit: false,
     title: '',
     tagline: '',
     age: '',
     timeAsGuide: ''
   })
 }

  render() {
    const editMode = this.state.edit;

    return(

      /*
          Modal Contains Elements render in one of two views (display/edit)
          The format for these are

          { editMode(bool) ? <input/> : <display element> }
      */

      <div className='portfolio-container'>
        <div className='portfolio__profile'>


        <Button color="primary" onClick={this.toggleEdit}> {this.state.edit ? 'Close' : 'Edit'} </Button>

        { this.state.edit ? <Button color="primary" onClick={this.saveEdit}> Save </Button> : null }


          <div className='portfolio__profile__bio'>
            <img src='http://svgur.com/i/65U.svg' alt={this.props.user.name} />

            <div>
              <h1>{this.props.user.username}</h1>
              { editMode ? <input placeholder='New Title'
                                  name='title'
                                  onChange={this.handleChange}
                                  value={this.state.title}/>

                          : <h2>{this.props.user.title}</h2> }
            </div>
          </div>

          <div className='spacer' />
            { editMode ? <input placeholder='New Tagline'
                                name='tagline'
                                onChange={this.handleChange}
                                value={this.state.tagline}/>

                          : <h3>{this.props.user.tagline}</h3> }
          <div className='spacer' />

          <div className='portfolio__profile__time'>
            { editMode ? <input placeholder='Age'
                                name='age'
                                onChange={this.handleChange}
                                value={this.state.age}/>

                        : <p>Age: {this.props.user.age}</p> }

            { editMode ? <input placeholder='Time As Guide'
                                name='timeAsGuide'
                                onChange={this.handleChange}
                                value={this.state.timeAsGuide}/>

                        : <p>Time As Guide: {this.props.user.timeAsGuide}</p> }
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

export default connect(mstp, { editUser })(Profile);