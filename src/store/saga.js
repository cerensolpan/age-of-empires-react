import { call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_UNITLIST_DATA,
  requestedUnitList,
  requestedUnitListSuccess,
  requestedUnitListError,
} from "../actions/actionTypes";
import { fetchUnitList } from "../api";

function* fetchUnits(params) {
  try {
    yield put(requestedUnitList());
    const response = yield call(fetchUnitList, params.filters);
    yield put(requestedUnitListSuccess(response));

  } catch (e) {
    console.log(e);
    yield put(requestedUnitListError(e));
  }
}

export default function* watcherSaga() {
  yield takeLatest(REQUEST_UNITLIST_DATA, fetchUnits);
}
