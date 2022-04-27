import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    isLogged: false
  },
  reducers: {
    setUserState: (state, action) => {
      state.isLogged = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUserState } = counterSlice.actions;

export default counterSlice.reducer;
