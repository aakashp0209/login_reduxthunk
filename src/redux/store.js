import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./userdetails";

export default configureStore({
  reducer: {
    gallery: galleryReducer
  }
});
