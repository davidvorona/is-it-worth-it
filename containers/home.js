import React, { Component } from 'react';
import movieActions from '../actions/movieActions';

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

  handleQuery(event) {
    event.preventDefault();
    movieActions.fetchMovie(this.state.value);
  }

  render() {
    return (
      <form className="reelSearch">
        <input
          type="text"
          className="searchBar"
          placeholder="Search for a movie..."
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleQuery}
        />
        <button
          className="query"
          onClick={this.handleQuery}
        >
          Search
        </button>
      </form>
    );
  }
}

export default Home;
