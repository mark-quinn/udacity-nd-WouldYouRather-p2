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
import ProtectedRoute from './ProtectedRoute';

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
          <Switch>
            {this.props.authedUser === null ? (
              <Route path="/" exact component={SignIn} />
            ) : (
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/poll/:id" component={PollPage} />
                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route path="/add" exact component={NewQuestion} />
              </Fragment>
            )}
            <ProtectedRoute component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ loadingBar, authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
