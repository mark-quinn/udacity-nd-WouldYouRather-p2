import React, { Component } from "react";
import { connect } from "react-redux";

class SignIn extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    return <div>SignIn</div>;
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(SignIn);
