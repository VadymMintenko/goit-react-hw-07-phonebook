import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { getFilter } from 'Redax/selectors';
import { setFilter } from 'Redax/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const searchContact = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase()));
  };

  return (
    <div>
      <label>
        Search
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={searchContact}
        ></input>
      </label>
    </div>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   searchContact: PropTypes.func.isRequired,
// };
