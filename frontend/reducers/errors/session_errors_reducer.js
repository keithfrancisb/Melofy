import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ALL_ERRORS } from '../../actions/session_actions';


export const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ALL_ERRORS:
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
