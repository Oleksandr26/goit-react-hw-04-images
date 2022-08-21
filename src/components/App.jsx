import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImgAPI } from './services/API';

// import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import 'modern-normalize/modern-normalize.css';

export class App extends Component {
  state = {
    img: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    searchTerm: '',
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
    });
  };

  async fetchImg(searchTerm, currentPage) {
    try {
      this.setState({ isLoading: true });
      const { total, totalHits, hits } = await ImgAPI.searchImg(
        searchTerm,
        currentPage
      );

      this.setState(({ img }) => ({
        img: [...img, ...hits],
        currentPage: total / totalHits,
      }));
    } catch (err) {
      this.setState({ error: err.message });
      console.log(err);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const { img, isLoading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}>
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
        </Searchbar>
        <ImageGallery hits={img} />

        {/* <Button /> */}
      </div>
    );
  }
}
