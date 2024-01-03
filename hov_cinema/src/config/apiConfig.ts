export const API_CONFIG = {
    baseUrl: "http://www.omdbapi.com/",
    apiKey: "6ad9df21",
    endPoints: {
        searchMovie: (searchTerm: string) => `${API_CONFIG.baseUrl}?apikey=${API_CONFIG.apiKey}&s=${encodeURIComponent(searchTerm)}`,
        getMovieById: (id: string) => `${API_CONFIG.baseUrl}?apikey=${API_CONFIG.apiKey}&i=${id}`,
    }
}