import React, {useState} from "react";
import {tempWatchedData} from "../../types/Movies";
import {ListBox, MovieListTile, WatchedSummary,} from "../../components";
import {WatchedList} from "../../components/WatchedList";
import {useMovie} from "../../hooks/moviehook";

export interface MainProps {
    prop?: string;
}

export function Main({prop = "default value"}: MainProps) {
    const movies = useMovie()
    // const [movies, setMovies] = useState(tempMovieData);
    const [watched, setWatched] = useState(tempWatchedData);

    return (
        <main className="main">
            <ListBox>
                <MovieListTile movies={movies}></MovieListTile>
            </ListBox>

            <ListBox>
                <WatchedSummary watched={watched}></WatchedSummary>
                <WatchedList watched={watched}></WatchedList>
            </ListBox>
        </main>
    );
}
