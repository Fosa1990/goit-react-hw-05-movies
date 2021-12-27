import { useState } from 'react';
import { PropTypes } from 'prop-types';
import './Reviews.css';
export default function Reviews({ reviews }) {
  const [showMore, setShowMore] = useState(true);
  const getContent = content => {
    return content.length > 600 ? content.slice(0, 600) + '...' : content;
  };
  const toggleShowMore = () => {
    setShowMore(state => !state);
  };
  return (
    <div className="reviews">
      {reviews.length > 1 ? (
        reviews.map(review => (
          <div key={review.id}>
            <h3 className="author">Author: {review.author}</h3>
            <p className={`content content-${review.id}`}>
              {showMore ? getContent(review.content) : review.content}
              {review.content.length > 600 && (
                <span
                  className="show-more"
                  data-id={review.id}
                  onClick={toggleShowMore}
                >
                  {showMore ? ' show more' : ' show less'}
                </span>
              )}
            </p>
          </div>
        ))
      ) : (
        <p className="no-info">There's no reviews about this movie.</p>
      )}
    </div>
  );
}
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};
