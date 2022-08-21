import { Component } from 'react';

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
      <header
      // className={s.searchbar}
      >
        <form className="form" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            // className={s.buttonIcon}
          >
            Search
          </button>

          <input
            onChange={this.handledInputChange}
            value={this.state.value}
            // className={s.input}
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
