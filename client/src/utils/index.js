import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userslice"
import productSlideReducer from "./productSlide";

export const store = configureStore({
  reducer: {
    user : userSliceReducer,
    product : productSlideReducer
    
  },
});