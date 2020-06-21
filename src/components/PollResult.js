import React from "react";

const PollResult = (props) => {
  const { question, totalVotes, answered } = props;
  const text = question.text;
  const votes = question.votes.length;
  const percentage = (votes / totalVotes) * 100;

  return (
    <div className={answered ? "card mb-2 text-white bg-success" : "card mb-2"}>
      <div className="card-body">
        {answered && (
          <span className="badge badge-warning float-right">You voted this choice!</span>
        )}
        <p>Would you rather {text}?</p>
        <p>{percentage}% voted this choice</p>
        <p className="font-weight-bold text-center">{`${votes} out of ${totalVotes}`}</p>
      </div>
    </div>
  );
};

export default PollResult;
