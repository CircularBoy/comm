import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import api from '../api';
import reducers from './reducers';
import rootSaga from './saga';

const enhancers = [];
const middlewares = [];

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

/* ------------- Dev-tools Middleware ------------- */
// const devToolsMiddleware = composeWithDevTools({});
// middlewares.push(devToolsMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, composeWithDevTools(...enhancers));

// Start sagas
// console.log('stor:', api);
sagaMiddleware.run(() => rootSaga(api));
export default store;
