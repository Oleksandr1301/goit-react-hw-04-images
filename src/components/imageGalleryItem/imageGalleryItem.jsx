import PropTypes from 'prop-types';
import {GalleryItem, ImageItem} from './imageGalleryItem.styled'


const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImage,
}) => {
  return (
    <>
      <GalleryItem >
        <ImageItem
          onClick={() => onClickImage(largeImageURL)}
          
          src={webformatURL}
          alt={tags}
          largeimage={largeImageURL}
        />
      </GalleryItem>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClickImage: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;