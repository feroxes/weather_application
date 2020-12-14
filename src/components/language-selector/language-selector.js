import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLsv } from '../../custom-hooks/useLsv.js';

import { setActiveLanguage } from '../../actions/app.js';

import { LanguageSelectorStyled } from './styled.js';

export const LanguageSelector = () => {
  const supportedLanguages = useSelector(state => state.app.supportedLanguages);
  const dispatch = useDispatch();

  const handleLanguageChange = e => {
    dispatch(setActiveLanguage(e.target.value));
  };

  return (
    <LanguageSelectorStyled name="languageSelector" onChange={handleLanguageChange}>
      {supportedLanguages.map((language, key) => {
        return (
          <option value={language.code} key={key}>
            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
            {useLsv(language.name)}
          </option>
        );
      })}
    </LanguageSelectorStyled>
  );
};
