import axios from 'axios';

const userActions = {
  createUser: (user) => {
    axios.post('/join', JSON.stringify(user))
      .then((res) => {
        if (res.data === null) console.log('Error reaching server.');
        else console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getUser: (user) => {
    axios.post('/login', JSON.stringify(user))
      .then((res) => {
        if (res.data === null) console.log('Error reaching server.');
        else console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default userActions;
