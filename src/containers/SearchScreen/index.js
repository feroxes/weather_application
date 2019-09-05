import React from 'react';
import './searchScreen.scss';

function SearchScreen({ dayTime }) {
  return (
    <div className={`blur-background blur-background-${dayTime}`}>
      <div className="search-screen-wrapper">
        <h2 className="search-screen-header">Search city</h2>
        <input
          type="text"
          name="search-field"
          className="search-field"
          placeholder="Enter your city..."
        />
      </div>
    </div>
  );
}

export default SearchScreen;
