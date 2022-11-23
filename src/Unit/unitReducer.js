import {
  REQUESTED_UNIT,
  REQUESTED_UNIT_SUCCEEDED,
  REQUESTED_UNIT_FAILED,
} from "../actions/actionTypes";

const initialState = { unit:{}, loading: false, error: false };

// eslint-disable-next-line
export default (state = initialState, { type, data }) => {
 
  switch (type) {
      case REQUESTED_UNIT:
        return {
          unit:{},
          loading: true,
          error: false,
        };
      case REQUESTED_UNIT_SUCCEEDED:
        return {
          unit: data,
          loading: false,
          error: false,
        };
      case REQUESTED_UNIT_FAILED:
        return {
          unit:{},
          loading: false,
          error: true,
        };
    default:
      return state;
  }
};
