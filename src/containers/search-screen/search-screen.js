import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cities from 'cities.json';

import { setSelectedCity } from '../../actions/app';

import { Lsv } from '../../Lsv.js';
import { getLsv } from '../../helper/helper.js';

import { BlurBackgroundStyled } from '../../assets/styles/App.js';
import {
  AutocompleteDropdownStyled,
  AutocompleteItemStyled,
  PoweredStyled,
  SearchFieldStyled,
  SearchScreenHeaderStyled,
  SearchScreenWrapper
} from './styled.js';

export const SearchScreen = ({ setSlideIndex }) => {
  const [searchField, setSearchFieldStyled] = useState('');
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
    setSearchFieldStyled('');
    setSlideIndex(1);
  };

  return (
    <BlurBackgroundStyled>
      <SearchScreenWrapper>
        <SearchScreenHeaderStyled>{getLsv(Lsv.searchScreen.header)}</SearchScreenHeaderStyled>
        <SearchFieldStyled
          placeholder={getLsv(Lsv.searchScreen.enterCity)}
          value={searchField}
          onChange={e => setSearchFieldStyled(e.target.value.toLowerCase())}
          type="text"
          name="search-field"
        />
        <AutocompleteDropdownStyled>
          {autocompleteResult.length && searchField.length
            ? autocompleteResult.map((item, index) => {
                const { name, country } = item;
                return (
                  <AutocompleteItemStyled
                    key={index}
                    onClick={() => handleOnCityClick(item)}
                    onTouchStart={() => handleOnCityClick(item)}
                  >
                    {name}, {country}
                  </AutocompleteItemStyled>
                );
              })
            : ''}
        </AutocompleteDropdownStyled>
      </SearchScreenWrapper>
      <PoweredStyled
        href="https://darksky.net/poweredby/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {getLsv(Lsv.searchScreen.poweredBy)}
      </PoweredStyled>
    </BlurBackgroundStyled>
  );
};
