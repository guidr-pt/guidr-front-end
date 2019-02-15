import React from 'react';

class TripForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      img: '',
      private: false,
      type: '',
      duration: '',
      date: ''
    }
  }

  handleChange = e => {
  this.setState({
     ...this.state,
     [e.target.name]: e.target.value
   });
}

  render() {
    return (
      <form>
        <h2>Add Another Trip?</h2>

        <label>Name:</label>
        <input type='text'
               name='name'
               placeholder='Grand Falls'
               onChange={this.handleChange}
               value={this.state.Name} />

        <label>Type:</label>
        <input type='text'
               name='type'
               placeholder='type'
               onChange={this.handleChange}
               value={this.state.type} />

        <label>Duration:</label>
        <input type='text'
               name='duration'
               placeholder='XX Days'
               onChange={this.handleChange}
               value={this.state.duration} />

        <label>Date:</label>
        <input type='text'
               name='date'
               placeholder='MM / DD / YYYY'
               onChange={this.handleChange}
               value={this.state.date}/>

        <div>
          <input type='checkbox'
                 name='private'
                 onChange={this.handleChange}
                 value={this.state.date} />

          <span>Private</span>
        </div>

        <label>Description:</label>
        <textarea name='description'
                  onChange={this.handleChange}
                  value={this.state.description} />
      </form>
    )
  }
}


export default TripForm;
