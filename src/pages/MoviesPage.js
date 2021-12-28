import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import * as API from '../services/moviesApi';
import { PREV, NEXT, MOVIES } from '../helpers/constants';
import Preloader from '../components/Preloader';
import { errorOptions, infoOptions } from '../helpers/toastyOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MoviesList = lazy(() =>
  import('../components/MoviesList' /* webpackChunkName: "Movies-list"*/),
);
const HandlePageSwitch = lazy(() =>
  import(
    '../components/HandlePageSwitch' /* webpackChunkName: "Handle-page-switch"*/
  ),
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
    API.fetchMoviesBySearch(page, query)
      .then(data => {
        const { results, total_pages } = data;
        if (!results) {
          toast.error('No such results!', errorOptions);
          return;
        }
        if (results.length > 1) toast.info('Enjoy!', infoOptions);
        setMovies(results);
        setTotalPages(total_pages);
      })
      .catch(error => {
        toast.error(`No images by "${query}"!`, errorOptions);
        console.log('error on catch: ', error);
      });
  }, [page, query]);
  useEffect(() => {
    if (searchURL === '') return;
    setQuery(searchURL);
  }, [searchURL]);
  const pushToHistory = (query, value) => {
    history.push({
      ...location,
      search: `query=${query}&page=${value}`,
    });
  };
  const handleButtonClick = event => {
    const { name } = event.currentTarget;
    if (name === PREV && page > 1) {
      setPage(state => Number(state) - 1);
      pushToHistory(query, Number(page) - 1);
    }
    if (name === NEXT && page !== totalPages) {
      setPage(state => Number(state) + 1);
      pushToHistory(query, Number(page) + 1);
    }
  };
  const handleFormSubmit = input => {
    if (query === input) return;
    setQuery(input);
    pushToHistory(input, page);
  };
  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        draggablePercent={60}
      />
    </div>
  );
}
