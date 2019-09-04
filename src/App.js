import React, { Component } from 'react';
import { connect } from 'react-redux';
import setDayTime from './actions/background';
import Background from './containers/Background';
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
