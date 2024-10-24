import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import moviesData from './moviesData';

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie Collection</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <MovieList movies={movies} filter={filter} />
      <AddMovieForm addMovie={addMovie} />
    </div>
  );
};

export default App;
