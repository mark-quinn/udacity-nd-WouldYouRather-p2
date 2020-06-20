import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Nav = (props) => {
  const { user } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/new"
              exact
              activeClassName="active"
              className="nav-link"
            >
              New Question
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/leaderboard"
              exact
              activeClassName="active"
              className="nav-link"
            >
              Leader Board
            </NavLink>
          </li>
        </ul>
        {user && (
          <div>
            <span className="navbar-text">{`Hello, ${user.name}`}</span>
            <button className="ml-2 btn btn-link">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

function mapStateToProps({ authedUser, users }) {
  let user = null;
  if (authedUser) {
    user = users[authedUser];
  }

  return {
    user,
  };
}

export default connect(mapStateToProps)(Nav);
