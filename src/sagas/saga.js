import { takeLatest, put, call } from "redux-saga/effects";
import {loginUser} from "../async_calls";

function* loginASync(action) {
  try {
    let resp = yield call(loginUser, action.payload);
    if (resp.message == "Success") {
      yield put({ type: "LOGIN_ASYNC", payload: resp.userdetails });
    } else {
      yield put({ type: "LOGOUT", payload: false });
    }
  } catch (err) {
    console.log("error", err);
  }
}

export function* watchLogin() {
  yield takeLatest("LOGIN", loginASync);
}
