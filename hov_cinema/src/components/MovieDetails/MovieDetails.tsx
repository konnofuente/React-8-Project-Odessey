import React from 'react';
import {useMovieDetail} from "../../hooks/movieDetailHook";

export interface MovieDetailsProps {
    id: string;
}


export function MovieDetails({id = 'no id selected'}: MovieDetailsProps) {
    const {movieDetail} = useMovieDetail(id)


    return <div className="movie-card">
        <img src={movieDetail?.Poster} alt={movieDetail?.Title} className="movie-poster"/>
        <div className="movie-info">
            <h2>{movieDetail?.Title}</h2>
            <p>{movieDetail?.Year}</p>
            <p>{movieDetail?.Genre}</p>
            <p>
          <span role="img" aria-label="rating">
            ⭐
          </span>
                {7.5} IMDb rating
            </p>
            <div className="movie-rating">
                {/* Assume a function renderStars() returns the stars based on the rating */}
            </div>
            <p className="movie-description">description</p>
            <p>Starring {movieDetail?.Runtime}</p>
            <p>Directed by {movieDetail?.Director}</p>
        </div>

    </div>;
}
