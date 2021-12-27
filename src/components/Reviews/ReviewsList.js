import { PropTypes } from 'prop-types';
import ReviewItem from '../ReviewItem';
import './ReviewsList.css';
export default function ReviewsList({ reviews }) {
  return (
    <div className="reviews">
      {reviews.length > 1 ? (
        reviews.map(review => <ReviewItem review={review} key={review.id} />)
      ) : (
        <p className="no-info">There's no reviews about this movie.</p>
      )}
    </div>
  );
}
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
