import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImgAPI } from './services/API';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import s from './App.module.css';
import 'modern-normalize/modern-normalize.css';

export class App extends Component {
  state = {
    img: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    searchTerm: null,
    totalPages: 0,
  };

  componentDidUpdate(_, prevState) {
    const { searchTerm, currentPage } = this.state;

    if (
      prevState.searchTerm !== searchTerm ||
      prevState.currentPage !== currentPage
    ) {
      this.fetchImg(searchTerm, currentPage);
    }
    if (currentPage > 1) {
      window.scrollBy({
        top: window.innerHeight - 140,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = query => {
    if (!query.trim() || this.state.searchTerm === query) return;
    this.setState({
      searchTerm: query,
      currentPage: 1,
      img: [],
      totalPages: 0,
    });
  };

  fetchImg = async (searchTerm, currentPage) => {
    this.setState({
      isLoading: true,
    });

    try {
      const { hits, total, totalHits } = await ImgAPI.searchImg(
        searchTerm,
        currentPage
      );
      this.setState(({ img }) => ({
        img: [...img, ...hits],
        totalPages: total / totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  openModal = (url, alt) => {
    this.setState({
      url: url,
      alt: alt,
    });
  };

  closeModal = () => {
    this.setState({
      url: '',
    });
  };

  render() {
    const { img, totalPages, currentPage, isLoading, url, alt } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery hits={img} onItemClick={this.openModal} />
        {totalPages >= currentPage && <Button onClick={this.handleLoadMore} />}
        {url && (
          <Modal onClose={this.closeModal}>
            <img src={url} alt={alt} />
          </Modal>
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
