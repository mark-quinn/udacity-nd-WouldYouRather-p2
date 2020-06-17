import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { users, questions, authedUser } = this.props;
    const user = users[authedUser];
    const allQuestions = Object.keys(questions);

    const answeredQuestions = Object.keys(user.answers);
    const unAnsweredQuestions = answeredQuestions
      .filter((x) => !allQuestions.includes(x))
      .concat(allQuestions.filter((x) => !answeredQuestions.includes(x)));

    return <p>Home Component</p>;
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
