import React from 'react';

import styles from './MovieListTile.css';
import { Movie } from '../../types/Movies';

type MovieListTileProps={
  movies:Movie[]
}


export function MovieListTile({movies}:MovieListTileProps) {
  return (
    <ul className="list">
        {movies?.map((movie) => (
    <li key={movie.imdbID}>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{movie.Year}</span>
      </p>
    </div>
  </li>
        ))}
      </ul>
  );
}
