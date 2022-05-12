import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("http://localhost:4000/users");
  const formattedResponce = await response.json();
  return formattedResponce;
});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoding: false,
    currentUser: []
  },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoding = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoding = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoding = false;
    }
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = [...action.payload];
    }
  }
});

// Action creators are generated for each case reducer function
export const { setCurrentUser } = gallerySlice.actions;

export default gallerySlice.reducer;
