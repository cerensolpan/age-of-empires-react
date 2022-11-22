import { combineReducers }from "redux";

import unitReducer from "../Unit/unitReducer";
import unitListReducer from "../Units/unitListReducer ";

export default combineReducers({
    unitReducer,
    unitListReducer
});