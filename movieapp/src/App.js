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
      <p className="addFilter">
        <span id="filter">
          <h2>Filter the movie</h2>
          <Filter filter={filter} setFilter={setFilter} />
        </span>
        <span id="add">
          <h2>Add a movie of your choice</h2>
          <AddMovieForm addMovie={addMovie} />
        </span>
      </p>
      <div>
        <h1>Movie Collection</h1>
        <MovieList movies={movies} filter={filter} />
      </div>
    </div>
  );
};

export default App;
