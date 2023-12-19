import React, { useState } from "react";
import { tempMovieData, tempWatchedData } from "../../types/Movies";

import styles from "./Main.css";
import { average } from "../../utils/Average";
import { MovieListBox, MovieListTile, WatchedListBox } from "../../components";

export interface MainProps {
  prop?: string;
}

export function Main({ prop = "default value" }: MainProps) {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  // return <div className={styles.Main}>Main {prop}</div>;
  return (
    <main className="main">
      <MovieListBox movies={movies}></MovieListBox>
      <WatchedListBox movies={movies} watched={watched}></WatchedListBox>
    </main>
  );
}
