import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <p>Leaderboard</p>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const userResults = Object.values(users).map((user) => ({
    id: user.id,
    totalAnswered: Object.values(user.answers).length,
    questionsAsked: user.questions.length,
  }));

  return {
    userResults,
  };
}

export default connect(mapStateToProps)(Leaderboard);
