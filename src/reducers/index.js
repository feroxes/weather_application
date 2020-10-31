import { combineReducers } from 'redux';

import forecast from './forecast';
import searchResult from './searchResult';
import app from './app.js';

export default combineReducers({
  forecast,
  searchResult,
  app
});
