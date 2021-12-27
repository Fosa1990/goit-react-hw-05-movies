import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import * as API from '../services/moviesApi';
import Reviews from '../components/Reviews';
export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    API.fetchMovieReviews(movieId).then(data => setReviews(data.results));
    return () => setReviews([]);
  }, [movieId]);
  return <Reviews reviews={reviews} />;
}
