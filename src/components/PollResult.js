import React from "react";

const PollResult = (props) => {
  const { question, totalVotes } = props;
  const text = question.text;
  const votes = question.votes.length;
  const percentage = (votes / totalVotes) * 100;

  return (
    <div className="card">
      <div className="card-body">
        <p>Would you rather {text}?</p>
        <p>{percentage}% voted this choice</p>
        <p className="font-weight-bold text-center">{`${votes} out of ${totalVotes}`}</p>
      </div>
    </div>
  );
};

export default PollResult;
