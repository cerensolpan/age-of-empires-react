import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import ageOfEmpires from "../age-of-empires-units.json"
import {fetchUnitListSuccess} from "../Units/unitListSlice"
import {fetchUnitDetailSuccess} from "../Unit/unitDetailSlice"


function* fetchUnits(filters) {
  try {
    let response = ageOfEmpires.units;
    Object.keys(filters.payload).forEach((key) => {
      // Age filter
      if (filters.payload[key].value !== "All" && key === "age") {
        response = response.filter((unit) => {
          return unit.age === filters.payload.age.value;
        });
      }

      //Cost Filter
      if (filters.payload[key].isActive && key !== "age")
        // eslint-disable-next-line
        response = response.filter((unit) => {
          if (unit.cost && unit.cost[key]) {
            return unit.cost[key] <= filters.payload[key].value;
          }
        });
      });
    yield put(fetchUnitListSuccess(response))
  } catch (e) {

  }
}

function* fetchUnitDetail(id) {
  try {
    let response;
    response = ageOfEmpires.units.find((unit) => unit.id === id.payload);
    yield put(fetchUnitDetailSuccess(response))
  } catch (e) {
    console.log(e);
    return e;
  }
}

export default function* watcherSaga() {
  //unitListSlice => name: units, reducer name 
  yield takeEvery('units/fetchUnitList', fetchUnits);
  yield takeEvery('unit/fetchUnitDetail', fetchUnitDetail);
}
