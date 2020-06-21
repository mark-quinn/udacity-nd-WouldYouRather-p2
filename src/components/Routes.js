import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import PollPage from "./PollPage";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

const Routes = (props) => (
  <div className="container">
    <Switch>
      {
        <Fragment>
          <Route path="/" exact component={SignIn} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/poll/:id" component={PollPage} />
          <ProtectedRoute path="/leaderboard" component={Leaderboard} />
          <ProtectedRoute path="/add" component={NewQuestion} />
        </Fragment>
      }
      {/* <Route component={NotFound} /> */}
    </Switch>
  </div>
);

export default Routes;
