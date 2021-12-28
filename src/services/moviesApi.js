import axios from 'axios';
export const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f6f92051b45422d9426f457ad6610127';
async function fetchWithErrorhandling(url = '', config = {}) {
  if (config.hasQuery) {
    const response = await axios.get(url, config);
    return response.status === 200 && response.data.results.length !== 0
      ? response.data
      : Promise.reject(new Error(console.log('Not found by query')));
  }
  const response = await axios.get(url, config);
  return response.status === 200
    ? response.data
    : Promise.reject(new Error(console.log('Not found')));
}
export function fetchTrendingMovies() {
  return fetchWithErrorhandling(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}`,
  );
}
export function fetchTrendingMoviesByPage(page) {
  return fetchWithErrorhandling(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}&page=${page}`,
  );
}
export function fetchMoviesBySearch(page, query) {
  return fetchWithErrorhandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=false`,
    { hasQuery: true },
  );
}
export function fetchMovieDetails(id) {
  return fetchWithErrorhandling(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
}
export function fetchMovieCredits(id) {
  return fetchWithErrorhandling(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
  );
}
export function fetchMovieReviews(id) {
  return fetchWithErrorhandling(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
  );
}
