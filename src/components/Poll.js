import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Poll extends Component {

  render() {
    const { question, author, id } = this.props;
    return (
      <div className="card">
        <div className="card-header bg-light">
          <p className="font-weight-bold">{author.name} asks:</p>
        </div>
        <div className="card-body">
          <p className="font-weight-bold">Would you rather</p>
          <p>...{question.optionOne.text.slice(0, 14)}...</p>
          <Link to={`/poll/${id}`}>
            <button
              className="btn btn-block btn-outline-success"
            >
              View Poll
            </button>
          </Link>
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
