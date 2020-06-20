import { RECEIVE_USERS, ANSWER_POLL } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_POLL:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: state[action.userId][action.questionId].concat([
            action.questionId,
          ]),
        },
      };

    default:
      return state;
  }
}
