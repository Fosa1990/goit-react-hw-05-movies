import PropTypes from 'prop-types';
import './Button.css';
export default function Button({ content, name, type, handleClick, disabled }) {
  return (
    <button
      type={type}
      name={name}
      onClick={handleClick}
      disabled={disabled}
      className="Button"
    >
      {content}
    </button>
  );
}
Button.defaultProps = {
  type: 'button',
  handleClick: () => null,
  disabled: false,
};
Button.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
