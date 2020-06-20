import { getInitialData, savePollAnswerAPI } from '../utils/api';
import { receiveUsers, saveUserAnswer } from './users';
import { receiveQuestions } from './questions';
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    })
  }
}

export function handleSavePollAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return savePollAnswerAPI({ authedUser, qid, answer }).then(() => {
      dispatch(saveUserAnswer(authedUser, qid, answer));
      dispatch(hideLoading());
    });
  };
}
