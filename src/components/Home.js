import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./Poll";

class Home extends Component {
  state = {
    questionSelected: "unanswered",
  };

  handleChange = (e) => {
    this.setState({
      questionSelected: e.target.value,
    });
  };

  render() {
    const { questionSelected } = this.state;
    const { users, questions, authedUser } = this.props;
    const user = users[authedUser];
    const allQuestions = Object.keys(questions);

    const answeredQuestions = Object.keys(user.answers);
    const unAnsweredQuestions = answeredQuestions
      .filter((x) => !allQuestions.includes(x))
      .concat(allQuestions.filter((x) => !answeredQuestions.includes(x)));

    const displayQuestionIds =
      questionSelected === "unanswered"
        ? unAnsweredQuestions
        : answeredQuestions;

    return (
      <div className="container d-flex justify-content-center mt-2">
        <div className="card w-50">
          <div className="card-header bg-light">
            <div className="font-weight-bold mb-0">
              <form className="d-flex justify-content-around">
                <input
                  type="radio"
                  name="questions"
                  value="unanswered"
                  checked={questionSelected === "unanswered"}
                  onChange={this.handleChange}
                />
                Unanswered
                <input
                  type="radio"
                  name="questions"
                  value="answered"
                  checked={questionSelected === "answered"}
                  onChange={this.handleChange}
                />
                Answered
              </form>
            </div>
          </div>
          <div className="card-body">
            {displayQuestionIds.map((id) => (
              <ul key={id}>
                <Poll id={id} />
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Home);
