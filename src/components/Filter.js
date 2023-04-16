import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filterContact } from '../Redax/contactSlice';
import { useDispatch } from 'react-redux';
import { getFilter } from 'Redax/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const searchContact = evt => {
    dispatch(filterContact(evt.target.value.toLowerCase()));
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
