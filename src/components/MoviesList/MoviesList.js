import { PropTypes } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { BASE_SRC } from '../../helpers/constants';
import './MoviesList.css';
import notFoundImage from '../../images/No-Image-Placeholder.svg';
export default function MoviesList({ movies, url }) {
  const location = useLocation();
  return (
    <ul className="movies">
      {movies.map(movie => {
        let movieName = movie.title ? movie.title : movie.name;
        if (movieName.length > 60) {
          movieName = movieName.slice(0, 60) + '...';
        }
        const imageUrl = movie.poster_path
          ? `${BASE_SRC}` + movie.poster_path
          : notFoundImage;
        return (
          <li key={movie.id} className="movie-item">
            <Link
              to={{
                pathname: `${url}${movie.id}`,
                state: {
                  from: location,
                },
              }}
              className="movie-link"
            >
              <span className="movie-image-wrapper">
                <img src={imageUrl} alt={movieName} className="movie-image" />
              </span>
              <p className="movie-name">{movieName}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
MoviesList.propTypes = {
  url: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ),
};
