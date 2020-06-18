import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
  render() {
    const { question, author } = this.props;
    return (
      <div className="card w-50">
        <div className="card-header bg-light">
          <p className="font-weight-bold">{author.name} asks:</p>
        </div>
        <div className="card-body">
          <p>Question info here</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const author = users[question.author];

  return {
    question,
    author,
  };
}

export default connect(mapStateToProps)(Poll);
