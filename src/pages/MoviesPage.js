import { useState, useEffect, useRef } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import * as API from '../services/moviesApi';
import { PREV, NEXT } from '../helpers/constants';
export default function MoviesPage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const isFirstRender = useRef(true);
  const [totalPages, setTotalPages] = useState(0);
  console.log('MoviesPage__url: ', url);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    API.fetchMoviesBySearch(page, query).then(data => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
  }, [page, query]);
  const handleButtonClick = event => {
    if (event.currentTarget.name === PREV && page > 1)
      setPage(state => state - 1);
    if (event.currentTarget.name === NEXT && page !== totalPages)
      setPage(state => state + 1);
  };
  const handleFormSubmit = input => {
    if (query === input) return;
    setQuery(input);
  };
  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />
      <ul>
        {movies.map(movie => {
          const movieName = movie.title ? movie.title : movie.name;
          return (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movieName}</Link>
            </li>
          );
        })}
      </ul>
      {movies.length > 1 && (
        <>
          <button type="button" name={PREV} onClick={handleButtonClick}>
            Previos
          </button>
          <button type="button" name={NEXT} onClick={handleButtonClick}>
            Next
          </button>
        </>
      )}
    </div>
  );
}
