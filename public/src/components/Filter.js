import React from 'react';
import PropTypes from 'prop-types';
export const Filter = ({ filter, searchContact }) => {
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  searchContact: PropTypes.func.isRequired,
};
