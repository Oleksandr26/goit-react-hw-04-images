import { useState, useEffect, useCallback } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImgAPI } from './services/API';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import s from './App.module.css';
import 'modern-normalize/modern-normalize.css';

export function App() {
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [imgRef, setImgRef] = useState({ url: '', alt: '' });

  const fetchImg = useCallback(async (searchTerm, currentPage) => {
    setIsLoading(true);

    try {
      const { hits, total, totalHits } = await ImgAPI.searchImg(
        searchTerm,
        currentPage
      );
      setImg(img => [...img, ...hits]);
      setTotalPages(total / totalHits);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (searchTerm === null && currentPage === 1) return;
    fetchImg(searchTerm, currentPage);
  }, [currentPage, searchTerm, fetchImg, error]);

  const handleSubmit = query => {
    if (!query.trim() || searchTerm === query) return;
    setSearchTerm(query);
    setCurrentPage(1);
    setImg([]);
    // setTotalPages(0);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const openModal = (url, alt) => {
    setImgRef({
      url: url,
      alt: alt,
    });
  };

  const closeModal = useCallback(() => {
    setImgRef({
      url: '',
    });
  }, []);

  // const { url, alt } = imgRef;
  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      <ImageGallery hits={img} onItemClick={openModal} />
      {totalPages >= currentPage && <Button onClick={handleLoadMore} />}
      {imgRef.url && (
        <Modal onClose={closeModal}>
          <img src={imgRef.url} alt={imgRef.alt} />
        </Modal>
      )}
      {isLoading && <Loader />}
    </div>
  );
}
