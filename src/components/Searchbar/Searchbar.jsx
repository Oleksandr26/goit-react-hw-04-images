import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handledInputChange = e => {
    this.setState({
      value: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <BsSearch size="15px" />
          </button>

          <input
            onChange={this.handledInputChange}
            value={this.state.value}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
