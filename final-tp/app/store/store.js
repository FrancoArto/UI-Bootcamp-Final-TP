import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import AppReducer from '../reducers/index'; //Import the reducer
import rootSaga from '../sagas/index';
import reactotron from '../reactotronConfig'

const sagaMonitor = reactotron.createSagaMonitor()


const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

export default reactotron.createStore(AppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
