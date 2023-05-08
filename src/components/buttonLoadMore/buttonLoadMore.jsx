
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './buttonLoadMore.styled';


export class Button extends Component {
  render() {
    return (
      <ButtonLoadMore
        type="button"
        
        onClick={this.props.onNextPage}
      >
        Load more
      </ButtonLoadMore>
    );
  }
}

Button.propTypes = {
  onNextPage: PropTypes.func,
};