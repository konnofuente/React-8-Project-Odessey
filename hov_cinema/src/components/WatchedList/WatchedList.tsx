import React from "react";
import { WatchedMovies } from "../../types/Movies";
import { WatchedListTile } from "../WatchedListTile";

export interface WatchedListProps {
  prop?: string;
  watched:WatchedMovies[]
}

export function WatchedList({
  prop = "default value",
  watched
}: WatchedListProps) {
  return (
    <div >
      <ul className="list">
        {watched.map((movie) => (
          <WatchedListTile movie={movie} key={movie.Title}></WatchedListTile>
          
        ))}
      </ul>
    </div>
  );
}
