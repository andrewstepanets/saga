import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

import { incrementSaga } from './app.saga';

const sagaMiddleware = createSagaMiddleware();

const middwares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middwares));

sagaMiddleware.run(incrementSaga);

export default store;
