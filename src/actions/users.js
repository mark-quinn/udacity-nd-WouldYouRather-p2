export const RECEIVE_USERS = "RECEIVE_USERS";
export const ANSWER_POLL = "ANSWER_POLL";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function answerPoll(userId, questionId) {
  return {
    type: ANSWER_POLL,
    userId,
    questionId,
  };
}
