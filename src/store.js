import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchLoadData } from './saga/sagas.js';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchLoadData);
  return store;
};
