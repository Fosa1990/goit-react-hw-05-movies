import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import Appbar from './components/Appbar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { MOVIES } from './helpers/constants';
export default function App() {
  return (
    <Container>
      <Appbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={`/${MOVIES}`}>
          <MoviesPage />
        </Route>
        <Route path={`/${MOVIES}/:movieId`}>
          <MovieDetailsPage />
        </Route>
        <Route path="/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}
