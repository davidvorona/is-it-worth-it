import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  // look into this, two button components that return a click event that fires chooseUserType in SignIn
  chooseUserType(type) {
    if (type === "new") this.props.children.NewUser;
    else return this.props.children.ExistingUser;
  }

  handleChange(event) {
    if (event.target.className === 'firstName') this.setState({ firstName: event.target.value });
    else if (event.target.className === 'lastName') this.setState({ lastName: event.target.value });
    else if (event.target.className === 'username') this.setState({ username: event.target.value });
    else if (event.target.className === 'password') this.setState({ password: event.target.value });
  }

  handleQuery(event) {
    event.preventDefault();
    console.log('Account parameters:', this.state);
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        React.cloneElement(child, {
          handleChange: this.handleChange,
          handleQuery: this.handleQuery
        });
      }
    );
    console.log(this.props.children);
    console.log(childrenWithProps);
    console.log(React.Children);
    return (
      <div>
        <br />
        <IndexLink activeClassName="active" to="/user">Login</IndexLink>&nbsp;
        <Link activeClassName="active" to="/user/create">Create Account</Link>&nbsp;
        <h1>Welcome to ReelTalk!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default SignIn;

// handleChange={this.handleChange} handleQuery={this.handleQuery} userInfo={this.state}
