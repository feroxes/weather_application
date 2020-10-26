import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setCity from '../../actions/searchResult';

import './searchScreen.scss';
import cities from 'cities.json';

export const SearchScreen = ({ setSlideIndex }) => {
  const [searchField, setSearchField] = useState('');
  const [autocompleteResult, setAutocompleteResult] = useState([]);

  const dayTime = useSelector(state => state.background.dayTime);

  const dispatch = useDispatch();

  useEffect(() => {
    const result = [];
    cities.forEach(item => {
      if (item.name.toLowerCase().includes(searchField) && result.length < 10) result.push(item);
    });
    setAutocompleteResult(result);
  }, [searchField]);

  const handleOnCityClick = item => {
    dispatch(setCity(item));
    setSearchField('');
    setSlideIndex(1);
  };

  return (
    <div className={`blur-background blur-background-${dayTime}`}>
      <div className="search-screen-wrapper">
        <h2 className="search-screen-header">Search city</h2>
        <input
          placeholder="Enter your city..."
          className="search-field"
          value={searchField}
          onChange={e => setSearchField(e.target.value.toLowerCase())}
          type="text"
          name="search-field"
        />
        <div className="autocomplete-dropdown">
          {autocompleteResult.length && searchField.length
            ? autocompleteResult.map((item, index) => {
                const { name, country } = item;
                return (
                  <div
                    key={index}
                    className="autocomplete-item"
                    onClick={() => handleOnCityClick(item)}
                    onTouchStart={() => handleOnCityClick(item)}
                  >
                    {name}, {country}
                  </div>
                );
              })
            : ''}
        </div>
      </div>
      <a
        className="powered"
        href="https://darksky.net/poweredby/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Dark Sky
      </a>
    </div>
  );
};
