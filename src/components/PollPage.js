import React, { Component } from "react";
import { connect } from "react-redux";
import PollResult from "./PollResult";
import { handleSavePollAnswer } from "../actions/shared";

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

    const { question } = this.props;
    this.props.dispatch(handleSavePollAnswer(question.id, this.state.answer));
  };

  render() {
    const { user, question, author } = this.props;
    const { answer } = this.state;

    const userAnswered = Object.keys(user.answers).includes(question.id);

    const votes =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    return (
      <div className="container d-flex justify-content-around mt-2">
        <div className="card w-50">
          <div className="card-header bg-light">
            <p className="font-weight-bold mb-0">{author.name} asks:</p>
          </div>
          <div className="card-body">
            {userAnswered ? (
              <div>
                <h3 className="font-weight-bold">Results:</h3>
                <PollResult
                  question={question.optionOne}
                  totalVotes={votes}
                  answered={answer === "optionOne"}
                />
                <PollResult
                  question={question.optionTwo}
                  totalVotes={votes}
                  answered={answer === "optionTwo"}
                />
              </div>
            ) : (
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <img
                    src={author.avatarURL}
                    className="rounded img-fluid"
                    alt={`Avatar of ${author.name}`}
                  />
                </div>
                <div className="flex-grow-1 ml-5">
                  <h4 className="font-weight-bold">Would you rather...</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="d-block">
                      <input
                        type="radio"
                        name="options"
                        value="optionOne"
                        checked={answer === "optionOne"}
                        onChange={this.handleChange}
                      />
                      <span className="ml-2">{question.optionOne.text}</span>
                    </div>
                    <div className="d-block mb-2">
                      <input
                        type="radio"
                        name="options"
                        value="optionTwo"
                        checked={answer === "optionTwo"}
                        onChange={this.handleChange}
                      />
                      <span className="ml-2">{question.optionTwo.text}</span>
                    </div>
                    <button className="btn btn-success btn-block">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
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
