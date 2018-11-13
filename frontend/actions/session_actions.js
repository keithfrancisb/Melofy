import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

// THUNK
export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user)
    .then( user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then( () => dispatch(logoutUser()));
};

export const signup = (user) => {
  return dispatch => {
    return SessionAPIUtil.signup(user)
      .then( user => dispatch(receiveCurrentUser(user))), err => (console.log(err));
  }
};
