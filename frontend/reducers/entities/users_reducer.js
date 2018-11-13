import { RECEIVE_USER } from '../../actions/session_actions';



export const UsersReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};
