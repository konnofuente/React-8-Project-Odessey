import {api} from "../api";
import {Movie} from '../types/Movies';
import {API_CONFIG} from "../config/apiConfig";
import {MovieDetail} from "../types/MovieDetail";


interface ApiResponse {
    Search: Movie[];

}

export async function fetchMovie(searchTerm: string): Promise<Movie[]> {
    if (searchTerm == '') {
        searchTerm = 'all';
    }
    const response = await api.get<ApiResponse>(API_CONFIG.endPoints.searchMovie(searchTerm.toString()));
    return response.Search;
}

export async function fetchMovieDetail(id: string): Promise<MovieDetail> {

    return await api.get<MovieDetail>(API_CONFIG.endPoints.getMovieById(id));


}