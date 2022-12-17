import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: [],
  status: "idle",
  error: null,
  isLoading:false
};

const unitDetailSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    fetchUnitDetail: (state)=>{
      state.isLoading = true;
    },
    fetchUnitDetailSuccess : (state,action) =>{
      state.units =action.payload;
      state.isLoading=false;
    },
    fetchUnitDetailFailure : (state)=>{
      state.isLoading=false;
    }
  }
});
    
export const {fetchUnitDetail,fetchUnitDetailSuccess,fetchUnitDetailFailure} =unitDetailSlice.actions
export const unitSelector = (state) =>state.unit

export const unitReducer = unitDetailSlice.reducer;
