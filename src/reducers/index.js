import { combineReducers } from 'redux';

import forecast from './forecast';
import app from './app.js';

export default combineReducers({ forecast, app });
