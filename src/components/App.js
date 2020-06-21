import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import Home from "./Home";
import PollPage from "./PollPage";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Routes from "./Routes";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <LoadingBar />
          {this.props.loading === true ? null : (
            <Routes loggedIn={this.props.authedUser} />
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    loading: users && questions,
  };
}

export default connect(mapStateToProps)(App);
