import React from 'react';

const Question = props => (
  <div>
    <h3>{props.question}</h3>
    <form className="preference-field">
      <input
        type="text"
        className={props.questionType}
        placeholder="Username"
        value={this.state.username}
        onChange={this.handleChange}
      />
    </form>
  </div>
)

export default Question;
