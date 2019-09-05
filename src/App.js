import React, { Component } from 'react';
import { connect } from 'react-redux';
import setDayTime from './actions/background';

import Background from './containers/Background';
import ScreenWrapper from './components/ScreenWrapper';

import SearchScreen from './containers/SearchScreen';
import MainScreen from './containers/MainScreen';
import DetailsScreen from './containers/DetailsScreen';

import Carousel from 'nuka-carousel';
import './assets/scss/index.scss';

class App extends Component {
  componentDidMount() {
    this.props.onSetDayTime();
  }
  render() {
    const { dayTime } = this.props.background;

    return (
      <>
        {dayTime ? (
          <div className="App">
            <Background dayTime={dayTime} />
            <ScreenWrapper dayTime={dayTime}>
              <Carousel
                className="carousel"
                slideIndex={1}
                renderCenterLeftControls={() => <button style={{ display: 'none' }} />}
                renderCenterRightControls={() => <button style={{ display: 'none' }} />}
              >
                <SearchScreen />
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
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return { onSetDayTime: () => dispatch(setDayTime()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
