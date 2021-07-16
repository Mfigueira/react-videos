import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchVideo(this.state.query);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label htmlFor="video">Video Search</label>
            <input
              type="text"
              id="video"
              value={this.state.query}
              onChange={e => this.setState({ query: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
