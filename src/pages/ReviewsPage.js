import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import * as API from '../services/moviesApi';
import Reviews from '../components/Reviews';
export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  useEffect(() => {
    API.fetchMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(error => console.log('error on catch ReviewsPage: ', error));
    return () => setReviews([]);
  }, [movieId]);
  return <Reviews reviews={reviews} />;
}
