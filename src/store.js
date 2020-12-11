import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { watchLoadData } from './saga/sagas.js';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(watchLoadData);
  return store;
};
