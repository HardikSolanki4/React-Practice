import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Something Went Wrong');
      }
      const data = await response.json();
      const transformedMovie = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      });
      setMovies(transformedMovie);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let movieContent = <p>Found No Movie.</p>;

  if (error) {
    movieContent = <p>{error}</p>;
  }

  if (movies.length > 0) {
    movieContent = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    movieContent = <p>Loading</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No Movie</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
        {movieContent}
      </section>
    </React.Fragment>
  );
}

export default App;
