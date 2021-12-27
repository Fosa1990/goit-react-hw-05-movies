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
import MovieItem from '../components/MovieItem';
import { MOVIES, CAST, REVIEWS } from '../helpers/constants';
import Spinner from '../components/Spinner';
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
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const refLocation = useRef(location);
  const history = useHistory();
  useEffect(() => {
    API.fetchMovieDetails(movieId).then(setMovie);
    return () => setMovie(null);
  }, [movieId]);
  function goBack() {
    // window.history.back();
    if (refLocation.current.state) {
      const { pathname, search } = refLocation.current.state.from;
      history.push(search ? pathname + search : pathname);
    } else {
      const path = refLocation.current.pathname.includes('movies')
        ? `/${MOVIES}`
        : '/';
      history.push(path);
    }
  }
  return (
    <>
      {movie && (
        <>
          <div className="button-box">
            <button type="button" onClick={goBack} className="go-back">
              Back
            </button>
          </div>
          <MovieItem movie={movie} />
        </>
      )}
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
