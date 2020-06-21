import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

function mapStateToProps({ authedUser }) {
  return {
    loggedIn: authedUser ? true : false,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
