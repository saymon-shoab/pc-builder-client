import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productPcp: [],
};

export const pcbuilderSlice = createSlice({
  name: "pcbuilder",
  initialState,
  reducers: {
    addPcp: (state, action) => {
      state.productPcp.push(action.payload);
    },
    removePcp: (state, action) => {
      state.productPcp = state.productPcp.filter(
        (pcp) => pcp.productPcp !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPcp, removePcp } = pcbuilderSlice.actions;

export default pcbuilderSlice.reducer;
