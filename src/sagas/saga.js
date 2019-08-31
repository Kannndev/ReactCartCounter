import { takeEvery, put, delay, all } from "redux-saga/effects";

function* valueUpAsync(action) {
  yield delay(1000);
  yield put({ type: "VALUE_UP", payload: action.payload });
}

function* resetAsync(action) {
  yield delay(1000);
  yield put({ type: "RESET" });
}

function* watchValueUp() {
  yield takeEvery("VALUE_UP_SAGA", valueUpAsync); // the action we send is automatically passed
}

function* watchReset() {
  yield takeEvery("RESET_SAGA", resetAsync);
}

//Single entry point to start all sagas otherwise we need to export each saga and pass as param in run
export default function* rootSaga() {
  yield all([watchValueUp(), watchReset()]);
}
