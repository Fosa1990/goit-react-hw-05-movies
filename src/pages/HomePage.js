import { useState, useEffect, useRef } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import * as API from '../services/moviesApi';
import { PREV, NEXT } from '../helpers/constants';
export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const isFirstRender = useRef(true);
  console.log('HomePage__url', url);
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
  const handleButtonClick = event => {
    if (event.currentTarget.name === PREV && page > 1) {
      setPage(state => state - 1);
    }
    if (event.currentTarget.name === NEXT && page !== totalPages) {
      setPage(state => state + 1);
    }
  };
  return (
    <div>
      <ul>
        {movies.map(movie => {
          const movieName = movie.title ? movie.title : movie.name;
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movieName}</Link>
            </li>
          );
        })}
      </ul>
      <>
        <button
          type="button"
          name={PREV}
          onClick={handleButtonClick}
          className="Button"
        >
          Previous
        </button>
        <button
          type="button"
          name={NEXT}
          onClick={handleButtonClick}
          className="Button"
        >
          Next
        </button>
      </>
    </div>
  );
}
