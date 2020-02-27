import { takeEvery } from "redux-saga/effects";
import * as Types from "../actions/types";

const rootsaga = function* rootsaga(params) {
  yield takeEvery(Types.ADD_MESSAGE, action => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default rootsaga;
