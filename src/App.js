import { Switch, Route, Redirect } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Container from './components/Container';
import Appbar from './components/Appbar';
import Preloader from './components/Preloader';
import { MOVIES, SLUG } from './helpers/constants';
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "Movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "Movie-details-page" */
  ),
);
export default function App() {
  return (
    <>
      <Appbar />
      <Container>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path={`/${MOVIES}`}>
              <MoviesPage />
            </Route>
            <Route path={`/${MOVIES}/:${SLUG}`}>
              <MovieDetailsPage />
            </Route>
            <Route path={`/:${SLUG}`}>
              <MovieDetailsPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
