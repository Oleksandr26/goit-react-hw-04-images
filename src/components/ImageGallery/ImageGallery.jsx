import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export function ImageGallery({ hits, onItemClick }) {
  return (
    <ul className={s.imageGallery}>
      {hits.map(hit => (
        <ImageGalleryItem key={hit.id} {...hit} onImageClick={onItemClick} />
      ))}
    </ul>
  );
}
