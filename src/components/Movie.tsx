import React from 'react';
import { MovieProps } from '@/interface/MovieProps';

const Movie = ({movie}: {movie: MovieProps}) => {
  const poster = movie.Poster === 'N/A' ? 'No Image' : movie.Poster;

  return (
    <div className="movie">
      <div>
        <h2>{movie.Title}</h2>
        <div>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </div>
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};

export default Movie;
