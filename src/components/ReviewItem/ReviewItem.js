import PropTypes from 'prop-types';
import { useState } from 'react';
export default function ReviewItem({ review }) {
  const [showMore, setShowMore] = useState(true);
  const getContent = content => {
    return content.length > 600 ? content.slice(0, 600) + '...' : content;
  };
  const toggleShowMore = () => {
    setShowMore(state => !state);
  };
  const { id, author, content } = review;
  return (
    <div key={id}>
      <h3 className="author">Author: {author}</h3>
      <p className={`content content-${id}`}>
        {showMore ? getContent(content) : content}
        {content.length > 600 && (
          <span className="show-more" data-id={id} onClick={toggleShowMore}>
            {showMore ? ' show more' : ' show less'}
          </span>
        )}
      </p>
    </div>
  );
}
ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string.isRequired,
  }),
};
