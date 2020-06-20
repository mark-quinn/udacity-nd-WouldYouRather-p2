import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { userResults } = this.props;

    return (
      <div className="container">
        {userResults.map((user) => (
          <ul key={user.id}>
            <div className="card d-flex justify-content-center mt-2 w-50">
              <div className="card-body">
                <h3 className="font-weight-bold">{user.name}</h3>
                <p>Answered questions: {user.totalAnswered}</p>
                <p>Created questions: {user.questionsAsked}</p>
                <p>Score: {user.score}</p>
              </div>
            </div>
          </ul>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const userResults = Object.values(users).map((user) => ({
    ...users[user.id],
    totalAnswered: Object.values(user.answers).length,
    questionsAsked: user.questions.length,
    score: Object.values(user.answers).length + user.questions.length,
  }));

  userResults.sort((x, y) => y.score - x.score);

  return {
    userResults,
  };
}

export default connect(mapStateToProps)(Leaderboard);
