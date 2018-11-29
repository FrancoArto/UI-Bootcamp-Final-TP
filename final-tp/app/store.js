import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import AppReducer from './reducers/index'; //Import the reducer
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

export default createStore(AppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
