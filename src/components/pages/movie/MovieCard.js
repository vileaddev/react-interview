import { useEffect, useState } from 'react';
import { movies$ } from '../../../movies.js';

function MovieCard() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movies$.then((data) => setMovies(data));
  });

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h1>
              <strong>{movie.title}</strong>
            </h1>
            <strong>{movie.category}</strong>
            <div>
              <p>{movie.likes}</p>
              <p>{movie.dislikes}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCard;
