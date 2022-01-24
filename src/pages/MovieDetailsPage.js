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
import NotFound from '../components/NotFound';
import Modal from '../components/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles/MovieDetailsPage.css';
const CastView = lazy(() =>
  import('./CastPage' /* webpackChunkName: "cast-subview"*/),
);
const Reviews = lazy(() =>
  import('./ReviewsPage' /* webpackChunkName: "reviews-subview"*/),
);
const Trailer = lazy(() =>
  import('../components/Trailer' /* webpackChunkName: "trailer"*/),
);
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [modal, setModal] = useState(false);
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
  function toggleModal() {
    setModal(state => !state);
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
        <Button
          name="trailer"
          type="button"
          data-id={movieId}
          onClick={toggleModal}
          content="trailer"
          className="Button"
          disabled={false}
        />
      </div>
      {movie ? (
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
      ) : (
        <NotFound text="Sorry, page not found :(" />
      )}
      {modal && (
        <Modal onClose={toggleModal}>
          <Suspense fallback={<Spinner />}>
            <Trailer id={movieId} />
          </Suspense>
        </Modal>
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
