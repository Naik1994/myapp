import React from 'react';

const SearchRobots = ({ searchfilter, SearchChange }) => {
  return (
    <div className = "pa2">
      <input
        className = "ba b--dark-green bg-lightest-blue pa3"
        type = "search"
        placeholder = "search robots"
        onChange = { SearchChange }
      />
    </div>
  );
}

export default SearchRobots;
