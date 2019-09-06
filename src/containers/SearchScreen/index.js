import React, { Component } from 'react';
import { connect } from 'react-redux';
import setCity from '../../actions/searchResult';

import './searchScreen.scss';
import cities from 'cities.json';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { searchField: '', selectedCity: [], autocompleteResult: [] };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value.toLowerCase() }, () => this.citySearch());
  };

  citySearch = () => {
    const { searchField } = this.state;
    let autocompleteResult = [];
    cities.forEach(item => {
      if (item.name.toLowerCase().includes(searchField) && autocompleteResult.length < 10)
        autocompleteResult.push(item);
    });
    this.setState({ autocompleteResult });
  };

  handleOnCityClick = item => {
    const { onSetCity, getForecast, setScreen } = this.props;
    this.setState({ selectedCity: item, searchField: '' }, () => {
      getForecast();
    });
    onSetCity(item);
    setScreen(1);
  };

  render() {
    const { dayTime } = this.props;
    const { autocompleteResult, searchField } = this.state;
    return (
      <div className={`blur-background blur-background-${dayTime}`}>
        <div className="search-screen-wrapper">
          <h2 className="search-screen-header">Search city</h2>
          <input
            placeholder="Enter your city..."
            className="search-field"
            value={this.state.searchField}
            onChange={this.handleChange}
            type="text"
            name="search-field"
          />
          <div className="autocomplete-dropdown">
            {autocompleteResult.length && searchField.length
              ? autocompleteResult.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="autocomplete-item"
                      onClick={() => this.handleOnCityClick(item)}
                    >
                      {item.name}, {item.country}
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
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    onSetCity: data => dispatch(setCity(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
