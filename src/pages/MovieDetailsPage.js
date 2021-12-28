import { useEffect, useState, lazy, Suspense, useRef } from 'react';
import {
  Route,
  useParams,
  useRouteMatch,
  NavLink,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as API from '../services/moviesApi';
import { MOVIES, CAST, REVIEWS } from '../helpers/constants';
import MovieItem from '../components/MovieItem';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles/MovieDetailsPage.css';
const CastView = lazy(() =>
  import('./CastPage' /* webpackChunkName: "cast-subview"*/),
);
const Reviews = lazy(() =>
  import('./ReviewsPage' /* webpackChunkName: "reviews-subview"*/),
);
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const locationRef = useRef(location);
  const history = useHistory();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  useEffect(() => {
    API.fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log('error on catch MovieDetailsPage: ', error));
    return () => setMovie(null);
  }, [movieId]);
  function goBack() {
    // window.history.back();
    if (locationRef.current.state) {
      const { pathname, search } = locationRef.current.state.from;
      history.push(search ? pathname + search : pathname);
    } else {
      const path = locationRef.current.pathname.includes(MOVIES)
        ? `/${MOVIES}`
        : '/';
      history.push(path);
    }
  }
  return (
    <>
      <div className="button-box">
        <Button
          name="goBack"
          type="button"
          onClick={goBack}
          content="Back"
          className="Button"
          disabled={false}
        />
      </div>
      {movie && (
        <>
          <MovieItem movie={movie} />
          <div className="details-box">
            <NavLink
              to={`${url}/${CAST}`}
              className="movie-link"
              activeClassName="movie-link-active"
            >
              Cast
            </NavLink>
            <NavLink
              to={`${url}/${REVIEWS}`}
              className="movie-link"
              activeClassName="movie-link-active"
            >
              Reviews
            </NavLink>
          </div>
        </>
      )}
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${path}/${CAST}`}>
          <CastView />
        </Route>
        <Route exact path={`${path}/${REVIEWS}`}>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
}
