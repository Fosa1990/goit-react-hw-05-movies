import PropTypes from 'prop-types';
import './NotFound.css';
const defaultMessage = '404 Oops, something were wrong';
function NotFound({ text }) {
  return <h1 className="not-found-title">{text ? text : defaultMessage}</h1>;
}
NotFound.propTypes = {
  text: PropTypes.string,
};
export default NotFound;
