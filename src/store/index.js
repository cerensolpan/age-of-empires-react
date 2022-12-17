import { combineReducers }from "redux";

import { unitListReducer } from "../Units/unitListSlice"
import { unitDetailReducer } from "../Unit/unitDetailSlice";


export default combineReducers({
    unitListReducer,
    unitDetailReducer
});