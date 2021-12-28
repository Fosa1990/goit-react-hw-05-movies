import { useState, useEffect, lazy, Suspense } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as API from '../services/moviesApi';
import { PREV, NEXT, MOVIES } from '../helpers/constants';
import Preloader from '../components/Preloader';
const MoviesList = lazy(() =>
  import('../components/MoviesList' /* webpackChunkName: "Movies-list"*/),
);
const HandlePageSwitch = lazy(() =>
  import(
    '../components/HandlePageSwitch' /* webpackChunkName: "Handle-page-switch"*/
  ),
);
export default function HomePage() {
  const history = useHistory();
  const location = useLocation();
  const currentPage = new URLSearchParams(location.search).get('page') ?? 1;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(currentPage);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    API.fetchTrendingMoviesByPage(page).then(data => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
  }, [page]);
  const pushToHistory = value => {
    history.push({ ...location, search: `page=${value}` });
  };
  const handleButtonClick = event => {
    const { name } = event.currentTarget;
    if (name === PREV && page > 1) {
      setPage(state => state - 1);
      pushToHistory(Number(page) - 1);
    }
    if (name === NEXT && page !== totalPages) {
      setPage(state => state + 1);
      pushToHistory(Number(page) + 1);
    }
  };
  return (
    <div>
      <Suspense fallback={<Preloader />}>
        <MoviesList movies={movies} url={`${MOVIES}/`} />
        {movies.length > 1 && (
          <HandlePageSwitch
            onClick={handleButtonClick}
            page={page}
            totalPages={totalPages}
          />
        )}
      </Suspense>
    </div>
  );
}
