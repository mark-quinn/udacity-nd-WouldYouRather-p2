import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import Home from './Home';
import PollPage from './PollPage';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        {this.props.loading === true ? null : (
          <div>
            <Leaderboard />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
