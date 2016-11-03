import React, { Component } from 'react';
import Question from './question';

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      type: '',
      count: 1
    };
    this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <Question question={props.question} questionType={props.type} />
    );
  }
}

// genre preferences
// actor/actress preferences
// director/producer preferences

export default Preferences;
