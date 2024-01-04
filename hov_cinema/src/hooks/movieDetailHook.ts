import {MovieDetail} from "../types/MovieDetail";
import {fetchMovieDetail} from "../services/movieService";
import {useEffect, useState} from "react";

export const useMovieDetail = (id: string) => {
    const [movieDetail, setMovieDetail] = useState<MovieDetail>();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [error, setError] = useState<Boolean>(false)
    // const [query, setQuery] = useState<string>('')


    useEffect(() => {

        const getMovieDetail = async () => {

            try {

                setIsLoading(true)
                let result: MovieDetail = await fetchMovieDetail(id)
                setMovieDetail(result)

            } catch (e) {

            } finally {
                setIsLoading(false)

            }
        }

        getMovieDetail()

    }, [id]);


    return {movieDetail, isLoading}
}