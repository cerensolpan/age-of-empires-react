import { call, put, takeLatest } from "redux-saga/effects";

import {
  REQUEST_UNITLIST_DATA,
  REQUEST_UNIT_DATA,
  requestedUnitList,
  requestedUnitListSuccess,
  requestedUnitListError,
  requestedUnitSuccess,
  requestedUnitError,
  requestedUnit,
} from "../actions/actionTypes";
import { fetchUnitList, fetchUnit } from "../api";

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

function* fetchUnitDetail(params) {
  try {
    yield put(requestedUnit());
    const response = yield call(fetchUnit, params.id);
    yield put(requestedUnitSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(requestedUnitError(e));
  }
}

export default function* watcherSaga() {
  yield takeLatest(REQUEST_UNITLIST_DATA, fetchUnits);
  yield takeLatest(REQUEST_UNIT_DATA, fetchUnitDetail);
}
