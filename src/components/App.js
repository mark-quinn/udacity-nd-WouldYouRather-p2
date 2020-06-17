import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn";
import Home from './Home';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        {this.props.loading === true ? null : (
          <div>
            <SignIn />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    loading: users === {},
  };
}

export default connect(mapStateToProps)(App);
