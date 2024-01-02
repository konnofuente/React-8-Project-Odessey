import {useEffect, useState} from "react";
import {fetchMovie} from "../services/movieService";
import {Movie} from "../types/Movies";


export const useMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Boolean>(false)

    useEffect(function () {

        const getMovies = async () => {
            try {
                setIsLoading(true)
                let result: Movie[]
                result = await fetchMovie()
                setMovies(result)

            } catch (e) {
                console.log(e)
                setError(true)
                setIsLoading(false)
            } finally {
                setIsLoading(false)
            }
        }
        getMovies()
    }, []);

    return {movies, isLoading, error};

}