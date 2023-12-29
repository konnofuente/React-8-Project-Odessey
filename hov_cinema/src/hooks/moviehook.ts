import {useEffect, useState} from "react";
import {fetchMovie} from "../services/movieService";
import {Movie} from "../types/Movies";


export const useMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(function () {

        const getMovies = async () => {
            try {
                let result: Movie[]
                result = await fetchMovie()
                setMovies(result)

            } catch (e) {
                console.log(e)
            }
        }
        getMovies()
    }, []);

    return movies;

}