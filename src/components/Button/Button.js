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
