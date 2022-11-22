import {
  REQUESTED_UNITLIST,
  REQUESTED_UNITLIST_SUCCEEDED,
  REQUESTED_UNITLIST_FAILED,
} from "../actions/actionTypes";

const initialState = { units: [], loading: false, error: false};

// eslint-disable-next-line
export default (state = initialState, { type, data }) => {
 
  switch (type) {
    case REQUESTED_UNITLIST:
      return {
        units:[],
        loading: true,
        error: false,
      };
    case REQUESTED_UNITLIST_SUCCEEDED:
      return {
        units: data,
        loading: false,
        error: false,
      };
    case REQUESTED_UNITLIST_FAILED:
      return {
        units: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
