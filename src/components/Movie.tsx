import React from 'react';
import { MovieProps } from '@/interface/MovieProps';
import { Link } from 'react-router-dom';

const Movie = ({movie}: {movie: MovieProps}) => {
  const poster = movie.Poster === 'N/A' ? 'No Image' : movie.Poster;

  return (
    <div className="movie">
      <div>
        <nav>
          <Link to={`/search/${movie.imdbID}`} state={{ movie: movie }}>{movie.Title}</Link>
        </nav>
        <div>
          <img
            width="200"
            alt={`${movie.Title}`}
            src={poster}
          />
        </div>
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};

export default Movie;
