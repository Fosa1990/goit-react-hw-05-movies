import { useEffect, useState } from 'react';
import { Route, useParams, useRouteMatch, NavLink } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import * as API from '../services/moviesApi';
import MovieItem from '../components/MovieItem';
import './styles/MovieDetailsPage.css';
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  useEffect(() => {
    API.fetchMovieDetails(movieId).then(setMovie);
    return () => setMovie(null);
  }, [movieId]);
  function goBack() {
    window.history.back();
  }
  console.log('MovieDetailsPage__url: ', url);
  console.log('MovieDetailsPage__movie: ', movie);
  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={goBack} className="Button">
            Back
          </button>
          <MovieItem movie={movie} />
        </>
      )}
      <NavLink
        to={`${url}/cast`}
        className="movie-link"
        activeClassName="movie-link-active"
      >
        Cast
      </NavLink>
      <NavLink
        to={`${url}/reviews`}
        className="movie-link"
        activeClassName="movie-link-active"
      >
        Reviews
      </NavLink>
      <Route path={`${path}/cast`} exact>
        <Cast />
      </Route>
      <Route path={`${path}/reviews`} exact>
        <Reviews />
      </Route>
    </>
  );
}
