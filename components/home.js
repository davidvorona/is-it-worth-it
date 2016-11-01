import React, { Component } from 'react';
import apiFetch from '../actions/apiFetch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleQuery() {
    apiFetch.fetchMovie(this.state.value);
  }

  render() {
    return (
      <div className="reelSearch">
        <input
          type="text"
          className="searchBar"
          placeholder="Search for a movie..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="buttonContainer">
          <button
            className="query"
            onClick={this.handleQuery}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
