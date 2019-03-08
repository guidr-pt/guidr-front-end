import React from 'react';
import TripGrid from '../TripComponents/TripGrid';

import { connect } from 'react-redux';
import { editUser, getUserTrips } from '../../actions';

import { Button, Label, Input } from 'reactstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      title: '',
      tagline: '',
      age: '',
      image: ''
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
     ...this.props.user,
     "title": this.state.title === '' ? this.props.user.title : this.state.title,
     "tagline": this.state.tagline === '' ? this.props.user.tagline : this.state.tagline,
     "age": this.state.age === '' ? this.props.user.age : this.state.age,
     "profileImage": this.props.user.profileImage === null ? this.props.user.profileImage || "https://www.demilked.com/magazine/wp-content/uploads/2018/03/5aaa1cc087975-funny-weird-wtf-stock-photos-54-5a3a3e128ba2b__700.jpg" : this.state.image,
   }

   console.log(update.profileImage)

   this.props.editUser(update)
   this.setState({
     edit: false,
     title: '',
     tagline: '',
     age: '',
     timeAsGuide: ''
   })
 }

 componentDidMount() {
   const username = this.props.username;

   this.props.getUserTrips(username);
 }

  render() {
    /* Condition for Render Type */
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
            <img src={this.props.user.profileImage} alt={this.props.user.name} />

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
            { editMode ? 
                <div className='imageUploader'>
                  <img src={this.state.image} alt='avatar'/>
                  <p>Paste an image link for your avatar</p>
                  <div className='linkInput'>
                    <Label>Link</Label>
                    <Input name='image'onChange={this.handleChange}type='link'/>
                  </div>
                </div>  : null }
                      

            <p>Time As Guide: {this.props.user.timeAsGuide}</p>
          </div>
        </div>

        { this.props.userTrips ? <TripGrid trips={this.props.userTrips} /> : null }
      </div>
    );
  }
}

const mstp = state => {
  return {
    ...state.appReducer,
    user: state.appReducer.user,
    userTrips: state.appReducer.userTrips
  }
}

export default connect(mstp, { editUser, getUserTrips })(Profile);

