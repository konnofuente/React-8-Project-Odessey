import React, { useState } from 'react';
import { MovieListTile } from '../MovieListTile';
import { Movie } from '../../types/Movies';

export interface MovieListBoxProps {
  prop?: string;
  movies:Movie[]
}

export function MovieListBox({prop = 'default value',movies}: MovieListBoxProps) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen1((open) => !open)}
    >
      {isOpen1 ? "–" : "+"}
    </button>
    {isOpen1 && (
      <ul className="list">
        {movies?.map((movie) => (
          <MovieListTile movie={movie} key={movie.Title}></MovieListTile>
        ))}
      </ul>
    )}
  </div>
  );
}
