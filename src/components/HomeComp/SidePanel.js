import React from 'react';
import Search from '../Search';

import { connect } from 'react-redux';
import { filterTrips, user } from '../../actions';

const SidePanel = props => {
  const filters = ['Clear', 'Alphabetical', 'Duration', 'Date', ];

  const filterHandler = e => {
    const type = e.target.innerText.toLowerCase();
    const trips = [ ...props.trips ];

    switch(type) {
      case 'clear':
        return props.filterTrips(user[0].trips);

      case 'duration':
        trips.sort((a,b) => {
          const c = a[type].split(' ')[0];
          const d = b[type].split(' ')[0];
        return d - c;
        });
        break;

      case 'alphabetical':
        trips.sort((a,b) => {
          return ('' + a.name).localeCompare(b.name);
        })
        break;

      case 'date':
        trips.sort((a,b) => {
          let dateArr1 = a.date.split('/');
          let dateArr2 = b.date.split('/');

          dateArr1 = dateArr1.map(date => Number(date))
          dateArr2 = dateArr2.map(date => Number(date))

          console.log(dateArr1[2], dateArr2[2])

          if(dateArr1[2] === dateArr2[2] && dateArr1[1] === dateArr2[1]) {
            return dateArr1[0] - dateArr2[0];
          } else if(dateArr1[2] === dateArr2[2]) {
            return dateArr1[1] - dateArr2[1];
          } else {
            return dateArr1[2] - dateArr2[2];
          }
        })
        break;

      default:
        return;
    }

    props.trips[0] === trips[0] ? props.filterTrips(trips.reverse()) : props.filterTrips(trips);
  }

  return(
    <div className='side-panel'>
      <div className='side-panel__title'>
        <h1>Side Panel</h1>
      </div>

      <Search />

      <div className='side-panel__btn--container'>
        {
          filters.map(item => <button key={Math.random()}
                                      onClick={filterHandler}
                                      className='side-panel__btn'> {item} </button>)
        }
      </div>
    </div>
  );
}

const mstp = state => {
  return {
    trips: state.appReducer.trips
  }
}

export default connect(mstp, { filterTrips })(SidePanel);
