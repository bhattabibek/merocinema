import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
