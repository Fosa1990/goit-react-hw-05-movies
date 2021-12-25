import { useState, useEffect, useRef } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import * as API from '../services/moviesApi';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const isFirstRender = useRef(true);
  let totalPages = useRef(0);

  useEffect(() => {
    API.fetchTrendingMovies().then(data => {
      setMovies(data.results);
      totalPages.current = data.total_pages;
      console.log('HomePage__data.results: ', data.results);
    });
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    API.fetchTrendingMoviesByPage(page).then(data => setMovies(data.results));
  }, [page]);

  const handleButtonClick = event => {
    if (event.currentTarget.name === 'prev' && page > 1) {
      setPage(state => state - 1);
    }
    if (event.currentTarget.name === 'next' && page !== totalPages) {
      setPage(state => state + 1);
    }
  };

  console.log('HomePage__url: ', url);
  console.log('HomePage__movies', movies);

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" name="prev" onClick={handleButtonClick}>
        Previous
      </button>
      <button type="button" name="next" onClick={handleButtonClick}>
        Next
      </button>
    </div>
  );
}
