import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  onImageClick,
}) {
  return (
    <li
      className={s.galleryItem}
      onClick={() => onImageClick(largeImageURL, tags)}
    >
      <img
        className={s.image}
        width="350"
        src={webformatURL}
        alt={tags}
        loading="lazy"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
