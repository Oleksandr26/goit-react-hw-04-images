import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

// import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import 'modern-normalize/modern-normalize.css';

export class App extends Component {
  state = {
    id: '',
    webformatURL: '',
    largeImageURL: '',
  };

  // handleNameChange = e => {
  //   this.setState({
  //     name: e.currentTarget.value.toLowerCase(),
  //   });
  // };

  handleSubmit = event => {
    console.log('event: ', event);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
        {/* <Button /> */}
      </div>
    );
  }
}
