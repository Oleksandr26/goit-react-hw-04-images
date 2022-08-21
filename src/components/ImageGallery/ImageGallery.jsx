import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ hits, onItemClick }) {
  console.log('hits: ', hits);
  const elements = hits.map(element => (
    <ImageGalleryItem
      key={element.id}
      {...element}
      onImageClick={onItemClick}
    />
  ));
  return <ul>{elements}</ul>;
}
