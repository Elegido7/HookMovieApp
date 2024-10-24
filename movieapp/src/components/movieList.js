import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ movies, filter }) => {
  return (
    <div className="movie-list">
      {movies
        .filter((movie) => {
          return (
            movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
            movie.rating >= filter.rating
          );
        })
        .map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
