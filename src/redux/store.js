import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export {store, persistor};
