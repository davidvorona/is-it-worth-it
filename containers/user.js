import React, { Component } from 'react';
import NewUser from '../components/newUser';
import ExistingUser from '../components/existingUser';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { type: '' };
  }

  render() {
    return (
      <div>
        <NewUser />
        <ExistingUser />
      </div>
    );
  }
}

export default SignIn;
