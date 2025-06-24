import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MovieListing = () => {
  const dispatch = useDispatch();
 
 const [selectedYear, setSelectedYear] = useState("");
  const movies = useSelector((state) => state.movies.movies);

  const filterByYear = (year) => {
    setSelectedYear(year);
    if (year) {
      const filtered = movies.filter((movie) => movie.Year === year);
      dispatch(filterMovies(filtered)); // Dispatch filtered movies to Redux store
    } else {
      dispatch(filterMovies(movies)); // Reset filter when no year is selected
    }
  };
  return (
    <>
    <div className='flex flex-col-reverse '>
       <div className='flex flex-col items-center justify-center md:flex md:flex-row flex-wrap gap-4'>
      {movies && movies.Search && movies.Search.length > 0 ? (
        movies.Search.map((movie) => (
          <div key={movie.imdbID} >
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <img className='rounded-xl' 
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder-image.png"} 
              alt={`Poster of ${movie.Title}`} 
            />
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
      </div>
      <div>
        <h1 className='text-3xl'>FILTER MOVIES</h1>
        <select onChange={(e) => dispatch(filterMoviesByYear(e.target.value))}>
  <option value="">All Years</option>
  <option value="2010">2010</option>
  <option value="2020">2020</option>
  <option value="2024">2024</option>
</select>
      </div>
    </div>
   
    </>
  );
};

export default MovieListing;
