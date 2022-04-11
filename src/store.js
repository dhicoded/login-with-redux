import reducer from "./reducers";
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchLogin } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLogin);
export default store;