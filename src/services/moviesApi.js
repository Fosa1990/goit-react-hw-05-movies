import axios from 'axios';
export const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f6f92051b45422d9426f457ad6610127';
async function fetchWithErrorhandling(url = '', config = {}) {
  const response = await axios.get(url, config);
  return response.status === 200
    ? response.data
    : Promise.reject(new Error('Not found'));
}
export function fetchTrendingMovies() {
  console.log('fetchTrendingMovies');
  return fetchWithErrorhandling(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}`,
  );
}
export function fetchTrendingMoviesByPage(page) {
  console.log('fetchTrendingMoviesByPage');
  return fetchWithErrorhandling(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}&page=${page}`,
  );
}
export function fetchMoviesBySearch(page, query) {
  console.log('fetchMoviesBySearch');
  return fetchWithErrorhandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=false`,
  );
}
export function fetchMovieDetails(id) {
  console.log('fetchMovieDetails');
  return fetchWithErrorhandling(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
}
export function fetchMovieCredits(id) {
  console.log('fetchMovieCredits');
  return fetchWithErrorhandling(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
  );
}
export function fetchMovieReviews(id) {
  console.log('fetchMovieReviews');
  return fetchWithErrorhandling(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
  );
}
