import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Redirect to poll/:id');
  }

  render() {
    const { question, author } = this.props;
    return (
      <div className="card">
        <div className="card-header bg-light">
          <p className="font-weight-bold">{author.name} asks:</p>
        </div>
        <div className="card-body">
          <p className="font-weight-bold">Would you rather</p>
          <p>...{question.optionOne.text.slice(0, 14)}...</p>
          <button
            className="btn btn-block btn-outline-success"
            onClick={this.handleSubmit}
          >
            View Poll
          </button>
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
