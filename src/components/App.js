import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
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
