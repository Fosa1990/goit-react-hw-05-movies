import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as API from '../services/moviesApi';
import { PREV, NEXT, MOVIES } from '../helpers/constants';
import Preloader from '../components/Preloader';
import scrollToTop from '../helpers/scrollToTop';
const MoviesList = lazy(() =>
  import('../components/MoviesList' /* webpackChunkName: "Movies-list"*/),
);
const HandlePageSwitch = lazy(() =>
  import(
    '../components/HandlePageSwitch' /* webpackChunkName: "Handle-page-switch"*/
  ),
);
export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    API.fetchTrendingMovies().then(data => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
  }, [totalPages]);
  useEffect(() => {
    API.fetchTrendingMoviesByPage(page).then(data => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
  }, [page]);
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
