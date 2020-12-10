import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCity } from '../../actions/app';

import { BlurBackground } from '../../assets/styles/App.js';
import cities from 'cities.json';
import {
  AutocompleteDropdown,
  AutocompleteItem,
  Powered,
  SearchField,
  SearchScreenHeader,
  SearchScreenWrapper
} from './styled.js';

export const SearchScreen = ({ setSlideIndex }) => {
  const [searchField, setSearchField] = useState('');
  const [autocompleteResult, setAutocompleteResult] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const result = [];
    cities.forEach(item => {
      if (item.name.toLowerCase().includes(searchField) && result.length < 10) result.push(item);
    });
    setAutocompleteResult(result);
  }, [searchField]);

  const handleOnCityClick = item => {
    dispatch(setSelectedCity(item));
    setSearchField('');
    setSlideIndex(1);
  };

  return (
    <BlurBackground>
      <SearchScreenWrapper>
        <SearchScreenHeader>Search city</SearchScreenHeader>
        <SearchField
          placeholder="Enter your city..."
          value={searchField}
          onChange={e => setSearchField(e.target.value.toLowerCase())}
          type="text"
          name="search-field"
        />
        <AutocompleteDropdown>
          {autocompleteResult.length && searchField.length
            ? autocompleteResult.map((item, index) => {
                const { name, country } = item;
                return (
                  <AutocompleteItem
                    key={index}
                    onClick={() => handleOnCityClick(item)}
                    onTouchStart={() => handleOnCityClick(item)}
                  >
                    {name}, {country}
                  </AutocompleteItem>
                );
              })
            : ''}
        </AutocompleteDropdown>
      </SearchScreenWrapper>
      <Powered href="https://darksky.net/poweredby/" target="_blank" rel="noopener noreferrer">
        Powered by Dark Sky
      </Powered>
    </BlurBackground>
  );
};
