import React from 'react';
import styles from './WatchedSummary.css';
import { average } from '../../utils/Average';
import { WatchedMovies } from '../../types/Movies';

export interface WatchedSummaryProps {
  prop?: string;
  watched:WatchedMovies[]
}

export function WatchedSummary({watched}: WatchedSummaryProps) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  
  return (

  <div>
    <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
              </p>
            </div>
          </div>
  </div>
  )
}
