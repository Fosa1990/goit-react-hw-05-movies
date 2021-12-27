import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/moviesApi';
import Cast from '../components/Cast';
export default function CastPage() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    API.fetchMovieCredits(movieId).then(data => {
      const filtredData = data.cast.filter(actor => actor.popularity > 4);
      setCast(filtredData);
    });
    return () => setCast([]);
  }, [movieId]);
  return <Cast cast={cast} />;
}
