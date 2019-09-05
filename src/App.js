import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import setDayTime from './actions/background';
import { setForecast } from './actions/forecast';
import { setCurrentWeather } from './actions/forecast';

import Background from './containers/Background';
import ScreenWrapper from './components/ScreenWrapper';

import SearchScreen from './containers/SearchScreen';
import MainScreen from './containers/MainScreen';
import DetailsScreen from './containers/DetailsScreen';

import Carousel from 'nuka-carousel';

import './assets/scss/index.scss';

class App extends Component {
  async componentDidMount() {
    const { onSetDayTime, onSetCurrentWeather, onSetForecast } = this.props;

    onSetDayTime();
    const API_KEY = '34e9e8865eb515573550395b2b961dff';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const ENDPOINT = 'https://api.darksky.net/forecast/';

    const forecast = await axios.get(`${proxy}${ENDPOINT}${API_KEY}/50.450, 30.5234?units=si`);

    onSetCurrentWeather(forecast.data.currently);
    onSetForecast(forecast.data.daily.data);
  }
  render() {
    const { dayTime } = this.props.background;
    const { forecast, currentWeather } = this.props.forecast;
    return (
      <>
        {currentWeather ? (
          <div className="App">
            <Background dayTime={dayTime} />
            <ScreenWrapper dayTime={dayTime}>
              <Carousel
                className="carousel"
                slideIndex={1}
                renderCenterLeftControls={() => <button style={{ display: 'none' }} />}
                renderCenterRightControls={() => <button style={{ display: 'none' }} />}
              >
                <SearchScreen dayTime={dayTime} />
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
