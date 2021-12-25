import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/moviesApi';
import { BASE_SRC } from '../helpers/constants';
import './styles/Cast.css';
export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    API.fetchMovieCredits(movieId).then(data => {
      const filtredData = data.cast.filter(actor => actor.popularity > 4);
      setCast(filtredData);
    });
    return () => setCast([]);
  }, [movieId]);
  console.log('Cast__cast:', cast);
  return (
    <div className="cast">
      {cast.length >= 1 ? (
        cast.map(actor => (
          <div key={actor.id} className="actor">
            <div className="image-container">
              <img src={BASE_SRC + actor.profile_path} alt={actor.name} />
            </div>
            <h3>{actor.name}</h3>
            <span>Character: {actor.character}</span>
          </div>
        ))
      ) : (
        <p className="no-info">There's no info about casts this movie yet.</p>
      )}
    </div>
  );
}
