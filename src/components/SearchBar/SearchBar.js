import React from 'react';
import PropTypes from 'prop-types';
import design from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      value={value}
      type="text"
      placeholder="Enter any keywords to search"
      className={design.input}
      onChange={onChange}
    />
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBar;
