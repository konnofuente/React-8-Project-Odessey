import React, {useState} from "react";
import {Movie, tempWatchedData} from "../../types/Movies";
import {ErrorMessage, ListBox, Loader, MovieListTile, WatchedSummary,} from "../../components";
import {WatchedList} from "../../components/WatchedList";

export interface MainProps {
    prop?: string;
    movies: Movie[];
    isLoading: Boolean;
    error: Boolean;
}

export function Main({prop = "default value", movies, isLoading, error}: MainProps) {

    const [watched, setWatched] = useState(tempWatchedData);

    return (
        <main className="main">
            <ListBox>
                {isLoading && <Loader></Loader>}
                {error && movies.length === 0 && <ErrorMessage/>}
                {!error && !isLoading &&
                    <MovieListTile movies={movies}></MovieListTile>
                }

            </ListBox>

            <ListBox>
                <WatchedSummary watched={watched}></WatchedSummary>
                <WatchedList watched={watched}></WatchedList>
            </ListBox>
        </main>
    );
}
