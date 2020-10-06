import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import setDayTime from './actions/background';
import { setForecast, setCurrentWeather } from './actions/forecast';

import Background from './containers/Background';
import SearchScreen from './containers/SearchScreen';
import MainScreen from './containers/MainScreen';
import DetailsScreen from './containers/DetailsScreen';

import ScreenWrapper from './components/ScreenWrapper';
import Carousel from 'nuka-carousel';

import './assets/scss/index.scss';

import { API_KEY, ENDPOINT, PROXY, KYIV_LAT, KYIV_LNG } from './config/constants.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
    };
  }

  componentDidMount() {
    this.getForecast();
    setTimeout(this.justFly, 30000);
  }

  justFly = () => {
    const { innerWidth } = window;
    this.eagle.style.right = '-50px';
    const flying = setInterval(() => {
      this.eagle.style.right = parseFloat(this.eagle.style.right) + 0.3 + 'px';
      if (parseFloat(this.eagle.style.right) > innerWidth + 100) clearInterval(flying);
    }, 1);
  };

  getForecast = async () => {
    const { onSetDayTime, onSetCurrentWeather, onSetForecast, searchResult } = this.props;
    onSetDayTime();
    const { lat, lng } = this.getCityCoordinates();

    const forecast = await axios.get(`${PROXY}${ENDPOINT}${API_KEY}/${lat}, ${lng}?units=si`);
    onSetCurrentWeather({ ...forecast.data.currently, ...searchResult.selectedCity });
    onSetForecast(forecast.data.daily.data);
  };

  getCityCoordinates = () => {
    const { selectedCity } = this.props.searchResult;
    if (selectedCity) {
      return {
        lat: selectedCity.lat,
        lng: selectedCity.lng
      };
    } else {
      return { lat: KYIV_LAT, lng: KYIV_LNG };
    }
  };

  setScreen = slideIndex => {
    this.setState({ slideIndex });
  };

  render() {
    const { dayTime } = this.props.background;
    const { forecast, currentWeather } = this.props.forecast;
    const { slideIndex } = this.state;
    return (
      <>
        {currentWeather ? (
          <div className="App">
            <img
              ref={item => (this.eagle = item)}
              className="eagle"
              src={require('./assets/images/screen/eagle.gif')}
              alt="Eagle"
            />
            <Background dayTime={dayTime} />
            <ScreenWrapper dayTime={dayTime}>
              <Carousel
                className="carousel"
                slideIndex={slideIndex}
                afterSlide={item => this.setState({ slideIndex: item })}
                renderCenterLeftControls={() => <button style={{ display: 'none' }} />}
                renderCenterRightControls={() => <button style={{ display: 'none' }} />}
              >
                <SearchScreen
                  dayTime={dayTime}
                  getForecast={this.getForecast}
                  setScreen={this.setScreen}
                />
                <MainScreen currentWeather={currentWeather} forecast={forecast} />
                <DetailsScreen dayTime={dayTime} currentWeather={currentWeather} />
              </Carousel>
            </ScreenWrapper>
          </div>
        ) : (
          'Loading...'
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    onSetDayTime: () => dispatch(setDayTime()),
    onSetForecast: data => dispatch(setForecast(data)),
    onSetCurrentWeather: data => dispatch(setCurrentWeather(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
