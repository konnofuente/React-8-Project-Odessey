import React from "react";

import styles from "./WatchedListTile.css";
import { WatchedMovies } from "../../types/Movies";

export interface WatchedListTileProps {
  prop?: string;
  movie: WatchedMovies;
}

export function WatchedListTile({
  prop = "default value",
  movie,
}: WatchedListTileProps) {
  return (
    <div className={styles.WatchedListTile}>
      <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </li>
    </div>
  );
}
