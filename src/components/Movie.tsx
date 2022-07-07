import React from 'react';
import { MovieProps } from '@/interface/MovieProps';
import lo from 'lodash';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({movie}: {movie: MovieProps}) => {
  const poster = movie.Poster === 'N/A' ? 'No Image' : movie.Poster;

  return (
    <div className="movie">
      { lo.isEmpty(movie)
        ? <div>Movies not found</div>
        : (
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
        )
      }
    </div>
  );
};

export default Movie;
