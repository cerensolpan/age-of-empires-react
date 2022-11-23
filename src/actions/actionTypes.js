export const REQUEST_UNITLIST_DATA = "REQUEST_UNITLIST_DATA";
export const REQUEST_UNIT_DATA = "REQUEST_UNIT_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const REQUESTED_UNITLIST = "REQUESTED_UNITLIST";
export const REQUESTED_UNITLIST_SUCCEEDED = "REQUESTED_UNITLIST_SUCCEEDED";
export const REQUESTED_UNITLIST_FAILED = "REQUESTED_UNITLIST_FAILED";
export const REQUESTED_UNIT = "REQUESTED_UNIT";
export const REQUESTED_UNIT_SUCCEEDED = "REQUESTED_UNIT_SUCCEEDED";
export const REQUESTED_UNIT_FAILED = "REQUESTED_UNIT_FAILED";

export const requestUnitListData = (filters) => ({
  type: REQUEST_UNITLIST_DATA,
  filters,
});

export const requestUnitData = (id) => ({
  type: REQUEST_UNIT_DATA,
  id,
});

export const requestedUnitList = () => {
  return { type: "REQUESTED_UNITLIST" };
};

export const requestedUnitListSuccess = (data) => {
  return { type: "REQUESTED_UNITLIST_SUCCEEDED", data };
};

export const requestedUnitListError = (error) => {
  return { type: "REQUESTED_UNITLIST_FAILED", error };
};

export const requestedUnit = () => {
  return { type: "REQUESTED_UNIT" };
};

export const requestedUnitSuccess = (data) => {
  return { type: "REQUESTED_UNIT_SUCCEEDED", data };
};

export const requestedUnitError = (error) => {
  return { type: "REQUESTED_UNIT_FAILED", error };
};

export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });
