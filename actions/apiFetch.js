import axios from 'axios';

const apiFetch = {};

apiFetch.fetchMovie = (title) => {
  const query = title;

  axios.get(`/movie/${query}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default apiFetch;
