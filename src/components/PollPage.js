import React, { Component } from "react";
import { connect } from "react-redux";
import PollResult from "./PollResult";

class PollPage extends Component {
  state = {
    answer: null,
  };

  handleChange = (e) => {
    this.setState({
      answer: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: dispatch vote
  };

  render() {
    const { user, question, author } = this.props;
    const { answer } = this.state;

    const userAnswered = Object.keys(user.answers).includes(question.id);

    const votes =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    return (
      <div className="card">
        <div className="card-header bg-light">
          <p className="font-weight-bold">{author.name} asks:</p>
        </div>
        <div className="card-body">
          {userAnswered ? (
            <div>
              <h3 className="font-weight-bold">Results:</h3>
              <PollResult question={question.optionOne} totalVotes={votes} />
              <PollResult question={question.optionTwo} totalVotes={votes} />
            </div>
          ) : (
            <div>
              <p className="font-weight-bold">Would you rather...</p>
              <form>
                <input
                  type="radio"
                  name="options"
                  value="optionOne"
                  checked={answer === "optionOne"}
                  onChange={this.handleChange}
                />
                {question.optionOne.text}
                <input
                  type="radio"
                  name="options"
                  value="optionTwo"
                  checked={answer === "optionTwo"}
                  onChange={this.handleChange}
                />
                {question.optionTwo.text}
                <button
                  className="btn btn-success"
                  onSubmit={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  
  const question = questions[id];
  const user = users[authedUser];
  const author = users[question.author];

  return {
    user,
    question,
    author,
  };
}

export default connect(mapStateToProps)(PollPage);
