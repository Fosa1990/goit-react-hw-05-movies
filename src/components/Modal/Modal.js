import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import IconButton from '../IconButton';
import './Modal.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import { ESCAPE } from '../../helpers/constants';

const modalRoot = document.querySelector('#root-modal');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === ESCAPE) onClose();
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, children]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <div className="Backdrop" onClick={handleBackdropClick}>
      <div className="Modal">
        <IconButton
          onClick={onClose}
          className="CloseModal"
          aria-label="Close Modal Button"
        >
          <CloseIcon width="32" height="32" />
        </IconButton>
        {children}
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
