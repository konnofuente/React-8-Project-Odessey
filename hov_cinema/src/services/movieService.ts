import {api} from "../api";
import {Movie} from '../types/Movies';
import {API_CONFIG} from "../config/apiConfig";


interface ApiResponse {
    Search: Movie[];
}

export async function fetchMovie(): Promise<Movie[]> {
    const response = await api.get<ApiResponse>(API_CONFIG.endPoints.searchMovie('all'));
    return response.Search;
}