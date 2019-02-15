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

  render() {
    return (
      <form>
        <h2>Add Another Trip?</h2>

        <label>Name:</label>
        <input type='text' placeholder='Name' />

        <label>Name:</label>
        <input type='text' placeholder='type' />

        <label>Name:</label>
        <input type='text' placeholder='Duration' />

        <label>Name:</label>
        <input type='text' placeholder='MM / DD / YYYY' />

        <div>
          <input type='checkbox' />
          <span>Private</span>
        </div>

        <label>Description:</label>
        <input type='textarea' placeholder='Description' />
      </form>
    )
  }
}


export default TripForm;
