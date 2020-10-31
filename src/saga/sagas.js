import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';

import { setForecast } from '../actions/forecast.js';

import { LOAD_DATA } from '../actions/types.js';
import { API_KEY, ENDPOINT, PROXY } from '../config/constants.js';

function fetchData(params) {
  const { lat, lng } = params;
  return axios.get(`${PROXY}${ENDPOINT}${API_KEY}/${lat},${lng}?units=si`);
}

function* workerLoadDate(action) {
  const forecast = yield call(() => fetchData(action.payload));
  const { currently, daily } = forecast.data;

  yield put(setForecast({ currentWeather: currently, forecast: daily.data }));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadDate);
}
