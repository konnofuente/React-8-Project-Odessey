import React from 'react';
import {Movie} from '../../types/Movies';

type MovieListTileProps = {
    movies: Movie[];
    setSelectedId: React.Dispatch<React.SetStateAction<string>>
}


export function MovieListTile({movies, setSelectedId}: MovieListTileProps) {


    return (
        <ul className="list">
            {movies?.map((movie) => (
                <li
                    onClick={() => setSelectedId(movie.imdbID)}
                    key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`}/>
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
