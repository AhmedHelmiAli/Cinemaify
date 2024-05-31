import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../interfaces/MovieInterface";

interface MoviesState {
  value: Movie[];
}

const initialState: MoviesState = {
  value: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
