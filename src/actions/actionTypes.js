export const REQUEST_UNITLIST_DATA = "REQUEST_UNITLIST_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const REQUESTED_UNITLIST = "REQUESTED_UNITLIST";
export const REQUESTED_UNITLIST_SUCCEEDED = "REQUESTED_UNITLIST_SUCCEEDED";
export const REQUESTED_UNITLIST_FAILED = "REQUESTED_UNITLIST_FAILED";

export const requestUnitListData = (filters) => ({
  type: REQUEST_UNITLIST_DATA,
  filters,
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


export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });
