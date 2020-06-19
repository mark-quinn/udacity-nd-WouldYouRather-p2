import React from "react";

const PollResult = (props) => {
  const { question, totalVotes } = props;
  const text = question.text;
  const votes = question.votes.length;
  const percentage = votes / totalVotes * 100;

  return (
    <div>
      <p>{text}</p>
      <p>{percentage}%</p>
      <p>{`${votes} out of ${totalVotes}`}</p>
    </div>
  )
};

export default PollResult;
