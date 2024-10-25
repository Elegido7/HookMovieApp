import React, { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import AddMovieForm from './components/addMovieForm';
import moviesData from './components/movieData';
import MovieList from './components/movieList';

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
