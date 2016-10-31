import React from 'react';

const Home = props => (
    <div className="reelSearch">
      <input
        type="text"
        className="searchBar"
        placeholder="Search for a movie..."
      />
      <div className="buttonContainer">
        <button
          className="query"
        >
          Search
        </button>
      </div>
    </div>
)

export default Home;
