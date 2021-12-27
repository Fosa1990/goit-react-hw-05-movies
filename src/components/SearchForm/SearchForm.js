import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button';
import { ToastContainer, toast } from 'react-toastify';
import { warningOptions } from '../../helpers/toastyOptions';
import 'react-toastify/dist/ReactToastify.css';
import './SearchForm.css';
export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleFormInput = event => setQuery(event.target.value);
  const onFormSubmit = event => {
    event.preventDefault();
    if (!query) {
      toast.warning('Input some text!', warningOptions);
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <>
      <form onSubmit={onFormSubmit} className="search-form">
        <input
          type="text"
          value={query}
          name="form-input"
          onChange={handleFormInput}
          className="form-input"
        />
        <ToastContainer />
        <Button
          type="submit"
          name="searchButton"
          content="Search"
          disabled={false}
          className="Button"
        />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        draggablePercent={60}
      />
    </>
  );
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
