import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { users, questions, authedUser } = this.props;
    return <p>Home Component</p>;
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser: "sarahedo", // TODO: remove fake auth usr
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Home);
