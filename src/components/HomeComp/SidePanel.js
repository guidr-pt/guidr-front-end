import React from 'react';
import Search from '../Search';

import { connect } from 'react-redux';
import { filterTrips, getTrips } from '../../actions';

const SidePanel = props => {
  /* Filters to Be Mapped to Buttons */
  const filters = ['Clear', 'Alphabetical', 'Duration', 'Date', ];
  /* Search Bar to be rendered */
  const searchbar = props.users ? <Search users /> : <Search />

  /* Handle Filter Selection, Sort based on Case */
  const filterHandler = e => {
    e.preventDefault();

    const type = e.target.innerText.toLowerCase();
    let trips = [ ...props.trips ];
    console.log(trips)

    switch(type) {
      /* Return to default order */
      case 'clear':
        return props.getTrips(true);

      /* Sort By Duration - Longest First */
      case 'duration':
        trips.sort((a,b) => {
          const c = a[type].split(' ')[0];
          const d = b[type].split(' ')[0];
        return d - c;
        });
        break;

      /* Sort Alphabetically */
      case 'alphabetical':
        trips.sort((a,b) => {
          return ('' + a.title).localeCompare(b.title);
        })

        break;

      /* Sort By Date - Newest First */
      case 'date':
        const datedTrips = trips.filter(trip =>  trip.date);
        const noDateTrips = trips.filter(trip =>  !trip.date);
        console.log(noDateTrips)
        console.log(datedTrips)

        datedTrips.sort((a,b) => {
          return a.date.slice(11) - b.date.slice(11);
        })

        trips=datedTrips.concat(noDateTrips);
        break;

      default:
        return;
    }

    /* If new order matches old order, reverse  */
    props.trips[0] === trips[0] ? props.filterTrips(trips.reverse()) : props.filterTrips(trips);
  }
  

  return(
    <div className='side-panel'>
      <div className='side-panel__title'>
        <h1>Search For {props.users ? 'Users' : 'Trips'}</h1>
      </div>

      {searchbar}

      <div className='side-panel__btn--container'>
        {/* Create Filter Buttons */}
        { !props.users ? filters.map(item => <button key={Math.random()}
                                                     onClick={filterHandler}
                                                     className='side-panel__btn'> {item} </button>)
                            : null       
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

export default connect(mstp, { filterTrips, getTrips })(SidePanel);
