import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ImgBox } from './modal.styled';

export const Modal = ({ onModalClose, largeImageURL }) => {
  const handleKeyDown = e => {
    if (e.key === 'Escape' || e.currentTarget === e.target) {
      return onModalClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <Backdrop onClick={handleKeyDown}>
      <ImgBox>
        <img src={largeImageURL} alt="" />
      </ImgBox>
    </Backdrop>
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};
