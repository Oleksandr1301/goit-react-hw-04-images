import PropTypes from 'prop-types';

import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';
import {GalleryList} from './imageGallery.styled';


export const ImageGallery = ({ images, onClickImage }) => {
  return (
    <GalleryList >
      {images.map(({ webformatURL, largeImageURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClickImage={onClickImage}
        />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  onClickImage: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
