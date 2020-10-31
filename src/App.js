import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { setForecast, setCurrentWeather, loadData } from './actions/forecast';
import { initApp } from './actions/app.js';

import { Background } from './containers/Background';
import { SearchScreen } from './containers/SearchScreen';
import { MainScreen } from './containers/MainScreen';
import { DetailsScreen } from './containers/DetailsScreen';
import { ScreenWrapper } from './components/ScreenWrapper';
import Carousel from 'nuka-carousel';

import './assets/scss/index.scss';

import { API_KEY, ENDPOINT, PROXY, KYIV_LAT, KYIV_LNG } from './config/constants.js';

export const App = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const selectedCity = useSelector(state => state.searchResult.selectedCity);
  const currentWeather = useSelector(state => state.forecast.currentWeather);

  const eagleRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const date = new Date();
    const dayTime = date.getHours() >= 17 || date.getHours() <= 4 ? 'night' : 'day';
    dispatch(initApp(dayTime));
  }, [dispatch]);

  useEffect(() => {
    getForecast();
    setTimeout(justFly, 30000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  const justFly = () => {
    const { innerWidth } = window;
    eagleRef.current.style.right = '-50px';
    const flying = setInterval(() => {
      eagleRef.current.style.right = parseFloat(eagleRef.current.style.right) + 0.3 + 'px';
      if (parseFloat(eagleRef.current.style.right) > innerWidth + 100) clearInterval(flying);
    }, 1);
  };

  const getForecast = async () => {
    const { lat, lng } = getCityCoordinates();
    const forecast = await axios.get(`${PROXY}${ENDPOINT}${API_KEY}/${lat}, ${lng}?units=si`);
    const { currently, daily } = forecast.data;

    dispatch(setCurrentWeather({ ...currently }));
    dispatch(setForecast(daily.data));
  };

  const getCityCoordinates = () => {
    if (selectedCity)
      return {
        lat: selectedCity.lat,
        lng: selectedCity.lng
      };
    else return { lat: KYIV_LAT, lng: KYIV_LNG };
  };

  const click = () => {
    dispatch(loadData());
  };

  return (
    <>
      <button onClick={click}>click</button>
      {currentWeather ? (
        <div className="App">
          <img
            ref={eagleRef}
            className="eagle"
            src={require('./assets/images/screen/eagle.gif')}
            alt="Eagle"
          />
          <Background />
          <ScreenWrapper>
            <Carousel
              className="carousel"
              slideIndex={slideIndex}
              afterSlide={item => setSlideIndex(item)}
              renderCenterLeftControls={() => <button style={{ display: 'none' }} />}
              renderCenterRightControls={() => <button style={{ display: 'none' }} />}
            >
              <SearchScreen setSlideIndex={setSlideIndex} />
              <MainScreen />
              <DetailsScreen />
            </Carousel>
          </ScreenWrapper>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  );
};
