import React from 'react';
import { useSelector } from 'react-redux';

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <>
    <div className='flex flex-col items-center justify-center md:flex flex-row flex-wrap gap-4'>
      {movies && movies.Search && movies.Search.length > 0 ? (
        movies.Search.map((movie) => (
          <div key={movie.imdbID} >
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <img 
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder-image.png"} 
              alt={`Poster of ${movie.Title}`} 
            />
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
      </div>
    </>
  );
};

export default MovieListing;
