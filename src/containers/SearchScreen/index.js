import React from 'react';
import './searchScreen.scss';

function SearchScreen() {
  return (
    <div className="blur-background">
      <div className="search-screen-wrapper">
        <h2 className="search-screen-header">Search city</h2>
        <input type="text" name="search-field" className="search-field" placeholder='Enter your city...'/>
      </div>
    </div>
  );
}

export default SearchScreen;
