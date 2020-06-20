import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import Home from "./Home";
import PollPage from "./PollPage";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import ProtectedRoute from "./ProtectedRoute";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            {this.props.loading === true ? null : (
              <div>
                <Nav />
                <Route path="/sign-in" component={SignIn} />
                <ProtectedRoute path="/" exact component={Home} />
                <ProtectedRoute path="/poll/:id" component={PollPage} />
                <ProtectedRoute path="/leaderboard" component={Leaderboard} />
                <ProtectedRoute path="/new" component={NewQuestion} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ loadingBar, authedUser }) {
  return {
    loading: loadingBar > 0,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
