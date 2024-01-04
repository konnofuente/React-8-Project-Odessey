import React from 'react';
import {useMovieDetail} from "../../hooks/movieDetailHook";
import {Loader} from "../Loader";
import {StarRatings} from "../StarRatings";

export interface MovieDetailsProps {
    id: string;
    onCloseMovieDetails: () => void
}


export function MovieDetails({id = 'no id selected', onCloseMovieDetails}: MovieDetailsProps) {
    const {movieDetail, isLoading} = useMovieDetail(id)


    return <div className="details">
        {isLoading ? (
            <Loader/>
        ) : (
            <>
                <header>
                    <button className="btn-back" onClick={() => {
                        onCloseMovieDetails()
                    }}>
                        &larr;
                    </button>
                    <img src={movieDetail?.Poster} alt={`Poster of ${movieDetail?.Title} movie`}/>
                    <div className="details-overview">
                        <h2>{movieDetail?.Title}</h2>
                        <p>
                            {movieDetail?.Year} &bull; {movieDetail?.Runtime}
                        </p>
                        <p>{movieDetail?.Genre}</p>
                        <p>
                            <span>⭐️</span>
                            {7.1} IMDb rating
                        </p>
                    </div>
                </header>
                <section>
                    {/*<div className="rating">*/}
                    {/*    {!isWatched ? (*/}
                    <div className='rating'>

                        <StarRatings maxRating={10}></StarRatings>
                    </div>
                    {/*            {userRating > 0 && (*/}
                    {/*                <button className="btn-add" onClick={handleAdd}>*/}
                    {/*                    + Add to list*/}
                    {/*                </button>*/}
                    {/*            )}*/}
                    {/*        </>*/}
                    {/*    ) : (*/}
                    {/*        <p>*/}
                    {/*            You rated with movie {watchedUserRating} <span>⭐️</span>*/}
                    {/*        </p>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                    <p>
                        <em>{movieDetail?.Plot}</em>
                    </p>
                    <p>Starring {movieDetail?.Actor}</p>
                    <p>Directed by {movieDetail?.Director}</p>
                </section>
            </>
        )}
    </div>

        ;
}
