import { useState } from 'react';
import './SearchForm.css';
export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleFormInput = event => setQuery(event.target.value);
  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={onFormSubmit} className="search-form">
      <input
        type="text"
        value={query}
        name="form-input"
        onChange={handleFormInput}
        className="form-input"
      />
      <button type="submit" className="Button">
        Search
      </button>
    </form>
  );
}
