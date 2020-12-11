import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';

import { setForecast } from '../actions/forecast.js';
import { setAppState } from '../actions/app.js';

import { LOAD_DATA } from '../actions/types.js';
import { API_KEY, APP_STATES, ENDPOINT, PROXY } from '../config/constants.js';
import mock_data from '../mock-data.json';

function fetchData(params) {
  const { lat, lng } = params;
  return mock_data;
  // return axios.get(`${PROXY}${ENDPOINT}${API_KEY}/${lat},${lng}?units=si`);
}

function* workerLoadDate(action) {
  yield put(setAppState(APP_STATES.LoadingData));

  const forecast = yield call(() => fetchData(action.payload));
  const { currently, daily } = forecast;
  // const { currently, daily } = forecast.data;

  yield put(setForecast({ currentWeather: currently, forecast: daily.data }));

  yield put(setAppState(APP_STATES.Active));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadDate);
}
