import { combineReducers } from 'redux';

import background from './background';
import forecast from './forecast';

export default combineReducers({
  background,
  forecast
});
