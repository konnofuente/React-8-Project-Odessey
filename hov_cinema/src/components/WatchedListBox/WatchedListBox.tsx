import React, { useState } from "react";

import styles from "./WatchedListBox.css";
import { Movie, WatchedMovies } from "../../types/Movies";
import { WatchedSummary } from "../WatchedSummary";
import { WatchedList } from "../WatchedList";

export interface WatchedListBoxProps {
  prop?: string;
  watched:WatchedMovies[]
  movies:Movie[]
}

export function WatchedListBox({

  prop = "default value",watched
}: WatchedListBoxProps) {

  const [isOpen2, setIsOpen2] = useState(true)
 
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched}></WatchedSummary>
          <WatchedList watched={watched}></WatchedList>
         
        </>
      )}
    </div>
  );
}
