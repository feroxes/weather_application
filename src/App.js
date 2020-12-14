import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Carousel from 'nuka-carousel';

import { loadData } from './actions/forecast';
import { initApp } from './actions/app.js';

import { Background } from './containers/background/background.js';
import { SearchScreen } from './containers/search-screen/search-screen.js';
import { MainScreen } from './containers/main-screen/main-screen.js';
import { DetailsScreen } from './containers/details-screen/details-screen.js';
import { ScreenWrapper } from './components/screen-wrapper/screen-wrapper.js';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner.js';

import { APP_STATES, IMAGES } from './config/constants.js';
import { getDayTime, getNavigatorLanguage } from './helper/helper.js';

import GlobalStyle from './assets/styles/GlobalStyle.js';
import { Themes } from './assets/styles/Themes.js';
import { AppStyled, EagleStyled } from './assets/styles/App.js';
import { LanguageSelector } from './components/language-selector/language-selector.js';

const CarouselStyled = styled(Carousel)`
  height: 100% !important;
`;

export const App = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const selectedCity = useSelector(state => state.app.selectedCity);
  const appState = useSelector(state => state.app.appState);
  const dayTime = useSelector(state => state.app.dayTime);

  const eagleRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp({ dayTime: getDayTime(), activeLanguage: getNavigatorLanguage() }));
  }, [dispatch]);

  useEffect(() => {
    const { lat, lng } = selectedCity;
    dispatch(loadData({ lat, lng }));
    setTimeout(justFly, 30000);
  }, [dispatch, selectedCity]);

  const justFly = () => {
    const { innerWidth } = window;
    const { style } = eagleRef.current;
    style.right = '-50px';
    const flying = setInterval(() => {
      style.right = parseFloat(style.right) + 0.3 + 'px';
      if (parseFloat(style.right) > innerWidth + 100) clearInterval(flying);
    }, 1);
  };

  return (
    <>
      <ThemeProvider theme={Themes[dayTime]}>
        <GlobalStyle />
        <AppStyled>
          <LanguageSelector />
          <Background>
            {appState === APP_STATES.Active ? (
              <ScreenWrapper>
                <CarouselStyled
                  slideIndex={slideIndex}
                  afterSlide={item => setSlideIndex(item)}
                  renderCenterLeftControls={() => <button style={{ display: 'none' }} />}
                  renderCenterRightControls={() => <button style={{ display: 'none' }} />}
                >
                  <SearchScreen setSlideIndex={setSlideIndex} />
                  <MainScreen />
                  <DetailsScreen />
                </CarouselStyled>
              </ScreenWrapper>
            ) : (
              <LoadingSpinner />
            )}
          </Background>
          <EagleStyled ref={eagleRef} src={IMAGES.eagle} alt="EagleStyled" />
        </AppStyled>
      </ThemeProvider>
    </>
  );
};
