import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';

import { setForecast } from '../actions/forecast.js';

import { LOAD_DATA } from '../actions/types.js';
import { API_KEY, ENDPOINT, PROXY } from '../config/constants.js';

function fetchData() {
  return axios.get(`${PROXY}${ENDPOINT}${API_KEY}`);
}

function* workerLoadDate() {
  const { data } = yield call(fetchData);
  yield put(setForecast(data.currently));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadDate);
}
