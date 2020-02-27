import { createStore, applyMiddleware } from "redux";
import createSagaMiddelware from "redux-saga";
import reducers from "../reducers";
import rootSaga from "../store/sagas";
import setupSocket from "../../socket";
import username from "../../utils/chance";

const sagaMiddelware = createSagaMiddelware();
const store = createStore(reducers, applyMiddleware(sagaMiddelware));

const socket = setupSocket(store.dispatch, username);
sagaMiddelware.run(rootSaga, { socket, username });
export default store;
