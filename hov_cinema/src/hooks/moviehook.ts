import {useEffect, useState} from "react";
import {fetchMovie} from "../services/movieService";
import {Movie} from "../types/Movies";


export const useMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Boolean>(false)
    const [query, setQuery] = useState<string>('')

    useEffect(function () {

        const getMovies = async () => {
            try {
                // console.log(query) TODO remove this later
                
                setIsLoading(true)
                let result: Movie[]
                result = await fetchMovie(query)
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
    }, [query]);

    return {movies, isLoading, error, query, setQuery};

}