import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export function ImageGallery({ hits, onItemClick }) {
  return (
    <ul className={s.imageGallery}>
      {hits.map(hit => (
        <ImageGalleryItem key={hit.id} {...hit} onImageClick={onItemClick} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape()),
  onItemClick: PropTypes.func,
};
