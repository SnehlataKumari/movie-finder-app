import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./theme";

const store = configureStore({
  reducer: combineReducers({
    theme: themeSlice.reducer,
  }),
});

export default store;
