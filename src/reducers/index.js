import { combineReducers } from 'redux';

import background from './background';
import forecast from './forecast';
import searchResult from './searchResult';

export default combineReducers({
  background,
  forecast,
  searchResult
});
