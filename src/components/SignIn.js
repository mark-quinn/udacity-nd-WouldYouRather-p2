import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter, Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    selectedUser: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedUser } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(selectedUser));
  };

  handleChange = (e) => {
    const name = e.target.value;

    this.setState({
      selectedUser: name,
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/home" } };
    const { users, authedUser } = this.props;
    const { selectedUser } = this.state;

    if (authedUser) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container d-flex justify-content-center mt-2">
        <div className="card">
          <div className="card-header bg-light">
            <p className="text-center font-weight-bold mb-0">
              Welcome to the Would You Rather App!
            </p>
            <p className="text-center font-weight-light">
              Please sign in to continue
            </p>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center text-success">Sign in</h5>
            <form onSubmit={this.handleSubmit}>
              <select
                className="custom-select mb-2"
                value={selectedUser || "none"}
                onChange={this.handleChange}
              >
                <option value="none" disabled>
                  Select User
                </option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              <button className="btn btn-success btn-lg btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users).map((user) => user),
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(SignIn));
