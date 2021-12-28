import { PropTypes } from 'prop-types';
import { BASE_SRC } from '../../helpers/constants';
import './Cast.css';
export default function Cast({ cast }) {
  return (
    <div className="cast">
      {cast.length >= 1 ? (
        cast.map(actor => (
          <div key={actor.id} className="actor">
            <div className="image-container">
              <img src={BASE_SRC + actor.profile_path} alt={actor.name} />
            </div>
            <h3 className="actor-title">{actor.name}</h3>
            <span className="actor-role">Character: {actor.character}</span>
          </div>
        ))
      ) : (
        <p className="no-info">There's no info about casts this movie yet.</p>
      )}
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ),
};
