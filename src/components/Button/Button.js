import PropTypes from 'prop-types';
import './Button.css';
export default function Button({ content, name, type, onClick, disabled }) {
  return (
    <button
      type={type}
      name={name}
      onClick={onClick}
      disabled={disabled}
      className="Button"
    >
      {content}
    </button>
  );
}
Button.defaultProps = {
  type: 'button',
  onClick: () => null,
};
Button.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
