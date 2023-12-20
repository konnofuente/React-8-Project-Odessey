import React, { useState } from "react";
import { tempMovieData, tempWatchedData } from "../../types/Movies";

import styles from "./Main.css";
import { average } from "../../utils/Average";
import {
  ListBox,
  MovieListTile,
  StarRatings,
  WatchedSummary,
} from "../../components";
import { WatchedList } from "../../components/WatchedList";

export interface MainProps {
  prop?: string;
}

export function Main({ prop = "default value" }: MainProps) {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <main className="main">
      <ListBox>
        <MovieListTile movies={movies}></MovieListTile>
        <StarRatings></StarRatings>
      </ListBox>
      
      <ListBox>
        <WatchedSummary watched={watched}></WatchedSummary>
        <WatchedList watched={watched}></WatchedList>
      </ListBox>
    </main>
  );
}
