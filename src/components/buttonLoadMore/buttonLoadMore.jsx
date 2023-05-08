import PropTypes from 'prop-types';
import { ButtonLoadMore } from './buttonLoadMore.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onNextPage: PropTypes.func,
};
