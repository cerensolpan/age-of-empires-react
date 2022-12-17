import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: {},
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
      state.unit =action.payload;
      state.isLoading=false;
    },
    fetchUnitDetailFailure : (state)=>{
      state.isLoading=false;
    }
  }
});
    
export const {fetchUnitDetail,fetchUnitDetailSuccess,fetchUnitDetailFailure} =unitDetailSlice.actions
export const unitDetailSelector = (state) =>state.unit

export const unitDetailReducer = unitDetailSlice.reducer;
