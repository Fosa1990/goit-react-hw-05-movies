import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import * as API from '../services/moviesApi';
import './styles/Reviews.css';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    API.fetchMovieReviews(movieId).then(data => setReviews(data.results));
    return () => setReviews([]);
  }, [movieId]);
  return (
    <div className="reviews">
      {reviews.length > 1 ? (
        reviews.map(review => (
          <div key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p className="no-info">There's no reviews about this movie.</p>
      )}
    </div>
  );
}
