import axios from 'axios';

const apiFetch = {
  transformQuery: (title) => {
    let query = title;
    query = query.trim().toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    return query;
  },

  fetchMovie: (title) => {
    const query = apiFetch.transformQuery(title);

    axios.get(`/movie/${query}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default apiFetch;
