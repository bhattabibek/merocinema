import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
  filteredMovies :{}
};

export const moviesSlice = createSlice({
  name: 'movies',

  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
      state.filteredMovies = action.payload;
    },
    filterMovies:(state,action) =>{
      state.filteredMovies = action.payload;
    },
    resetFilters:(state)=>{
state.filteredMovies = state.movies;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies,resetFilters,filterMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
