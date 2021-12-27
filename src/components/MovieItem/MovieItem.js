import { PropTypes } from 'prop-types';
import { BASE_SRC } from '../../helpers/constants';
import imageNotFound from '../../images/No-Image-Placeholder.svg';
import './MovieItem.css';
export default function MovieItem({ movie }) {
  const { poster_path, title, vote_average, overview, genres } = movie;
  const date = getMovieDate(movie);
  function getMovieDate(movie) {
    let data;
    if (movie.release_date) data = movie.release_date.slice(0, 4);
    if (movie.first_air_date) data = movie.first_air_date.slice(0, 4);
    return data;
  }
  return (
    <div className="movie-item-wrapper">
      <div className="movie-item-image-wrapper">
        <img
          src={poster_path ? BASE_SRC + poster_path : imageNotFound}
          alt={title}
          className="movie-item-image"
          loading="lazy"
        />
      </div>
      <ul className="description">
        <li>
          <h2 className="movie-item-title">
            {title} ({date})
          </h2>
        </li>
        <li>
          <p>IMDB rating : {vote_average}/10</p>
        </li>
        <li>
          <h3>Overview :</h3>
          <p className="overview">{overview}</p>
        </li>
        <li>
          <h3>Genres :</h3>
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
