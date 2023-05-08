import { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ImgBox } from './modal.styled';


export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === "Escape" || e.currentTarget === e.target) {
      return this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <Backdrop  onClick={this.handleKeyDown}>
        <ImgBox >
          <img src={largeImageURL} alt="" />
        </ImgBox>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};