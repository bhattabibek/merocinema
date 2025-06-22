import React, { useState, useEffect } from 'react';
import MovieListing from "../movielisting/MovieListing";
import Movieapi from '../../common/api/Movieapi';
import { API_KEY } from "../../common/api/movieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/moviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [movieText, setMovieText] = useState("avengers");
  const [searchTerm, setSearchTerm] = useState("avengers");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Movieapi.get(`?apikey=${API_KEY}&s=${movieText}&type=movie`);
        dispatch(addMovies(response.data));  // dispatch full response object
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (movieText.trim() !== "") {
      fetchMovies();
    }
  }, [dispatch, movieText]);

  const handleSearch = (e) => {
    e.preventDefault();
    setMovieText(searchTerm);
  };

  return (
    <>
      <div>Home</div>
      <form onSubmit={handleSearch}>
        <input 
          type='text' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder='Search Movies Here' 
        />
        <button type='submit'>Search</button>
      </form>
      <MovieListing />
    </>
  );
};

export default Home;
