export function ImageGalleryItem({
  webformatURL,
  // largeImageURL,
  tags,
  // onImageClick,
}) {
  return (
    <li
    // className={s.galleryItem}
    // onClick={() => onImageClick(largeImageURL, tags)}
    >
      <img
        // className={s.image}
        width="350"
        src={webformatURL}
        alt={tags}
        loading="lazy"
      />
    </li>
  );
}
