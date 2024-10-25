import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={`https://${movie.posterURL}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
