import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import * as API from '../services/moviesApi';
import { PREV, NEXT, MOVIES } from '../helpers/constants';
import Preloader from '../components/Preloader';
import Button from '../components/Button';
import scrollToTop from '../helpers/scrollToTop';
const MoviesList = lazy(() =>
  import('../components/MoviesList' /* webpackChunkName: "Movies-list"*/),
);
export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const searchURL = new URLSearchParams(location.search).get('query') ?? '';
  const currentPage = new URLSearchParams(location.search).get('page') ?? 1;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(currentPage);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const isFirstRender = useRef(true);
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
  useEffect(() => {
    if (searchURL === '') return;
    setQuery(searchURL);
  }, [searchURL]);
  const handleButtonClick = (event, value) => {
    const { name } = event.currentTarget;
    if (name === PREV && page > 1) {
      setPage(state => state - 1);
    }
    if (name === NEXT && page !== totalPages) {
      setPage(state => state + 1);
    }
    location.state = { page: value };
    scrollToTop();
  };
  const pushToHistory = query => {
    history.push({ ...location, search: `query=${query}` });
  };
  const handleFormSubmit = input => {
    if (query === input) return;
    setQuery(input);
    pushToHistory(input);
  };
  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />
      <Suspense fallback={<Preloader />}>
        <MoviesList movies={movies} url={`${MOVIES}/`} />
        {movies.length > 1 && (
          <div className="ButtonWrapper">
            <Button
              type="button"
              name={PREV}
              onClick={handleButtonClick}
              className="Button"
              content="Previous"
              disabled={!(page > 1)}
            />
            <Button
              type="button"
              name={NEXT}
              onClick={handleButtonClick}
              className="Button"
              content="Next"
              disabled={!(page !== totalPages)}
            />
          </div>
        )}
      </Suspense>
    </div>
  );
}
