import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducer from './reducers/productReducer';
import submitReducer from './reducers/submitReducer';
import rootSaga, { watcherSaga } from './sagas/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const allReducer = combineReducers({ products: productReducer, submitReducer });
const store = createStore(allReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
