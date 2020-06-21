import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { userResults } = this.props;

    return (
      <div className="container mt-2">
        <table className="table table-striped table-bordered">
          <caption>Sorted from highest scoring to lowest</caption>
          <thead className="thead-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Answered Questions</th>
              <th scope="col">Created Questions</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {userResults.map((user) => (
              <tr key={user.id}>
                <th>
                  <img
                    src={user.avatarURL}
                    className="rounded img-fluid"
                    alt={`Avatar of ${user.name}`}
                  />
                </th>
                <th>{user.name}</th>
                <td>{user.totalAnswered}</td>
                <td>{user.questionsAsked}</td>
                <td>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
