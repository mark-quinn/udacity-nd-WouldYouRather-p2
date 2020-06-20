export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER = "ADD_ANSWER";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveUserAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}
