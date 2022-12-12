import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ageOfEmpires from "../age-of-empires-units.json"

const initialState = {
  units: [],
  status: "idle",
  error: null,
};

export const fetchUnitList = createAsyncThunk("unitList/fetchUnitList", async (filters) => {
  try {
    let response = ageOfEmpires.units;
    Object.keys(filters).forEach((key) => {
      // Age filter
      if (filters[key].value !== "All" && key === "age") {
        response = response.filter((unit) => {
          return unit.age === filters.age.value;
        });
      }

      //Cost Filter
      if (filters[key].isActive && key !== "age")
        // eslint-disable-next-line
        response = response.filter((unit) => {
          if (unit.cost && unit.cost[key]) {
            return unit.cost[key] <= filters[key].value;
          }
        });
    });
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
});

const unitListSlice = createSlice({
  name: "units",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUnitList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUnitList.fullfilled, (state, action) => {
        state.status = "fullfilled";
        state.units= action.payload;
      })
      .addCase(fetchUnitList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    })
  },
});
    
export const getUnitsStatus = (state) => state.units.status;
export const getUnitsError = (state) => state.units.error;
export const unitListSelector = (state) =>state.units

export default unitListSlice.reducer;
