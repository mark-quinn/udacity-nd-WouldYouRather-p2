import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { withRouter } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;

    if (optionOne && optionTwo) {
      this.props.dispatch(handleAddQuestion(optionOne, optionTwo));
      this.props.history.push("/");
    }
  };

  handleChange = (e) => {
    const value = e.target.value;

    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  render() {
    const { optionOne, optionTwo } = this.state;

    return (
      <div className="container d-flex justify-content-center mt-2">
        <div className="card w-50">
          <div className="card-header bg-light">
            <h3 className="font-weight-bold mb-0 text-center">
              Create New Question
            </h3>
          </div>
          <div className="card-body">
            <p>Complete the question:</p>
            <p className="font-weight-bold">Would you rather ...</p>
            <form onSubmit={this.handleSubmit}>
              <input
                className="w-100"
                name="optionOne"
                value={optionOne}
                placeholder="Enter Option One Text Here"
                onChange={this.handleChange}
              />
              <p className="font-weight-bold text-center">OR</p>
              <input
                className="w-100"
                name="optionTwo"
                value={optionTwo}
                placeholder="Enter Option Two Text Here"
                onChange={this.handleChange}
              />
              <button className="btn btn-success btn-block mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestion));
