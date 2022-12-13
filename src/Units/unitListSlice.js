import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ageOfEmpires from "../age-of-empires-units.json"

const initialState = {
  units: [],
  status: "idle",
  error: null,
  isLoading:false
};

const unitListSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    fetchUnitList: (state)=>{
      state.isLoading = true;
    },
    fetchUnitListSuccess : (state,action) =>{
      state.units =action.payload;
      state.isLoading=false;
    },
    fetchUnitListFailure : (state)=>{
      state.isLoading=false;
    }
  }
});
    
export const {fetchUnitList,fetchUnitListSuccess,fetchUnitListFailure} =unitListSlice.actions
export const unitListSelector = (state) =>state.units

export const unitListReducer = unitListSlice.reducer;
