import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export default store;
