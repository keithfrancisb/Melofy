import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_ALL_ERRORS = 'CLEAR_ALL_ERRORS';

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

export const receiveUserErrors = (errors) => {

  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const clearAllErrors = () => {
  return {
    type: CLEAR_ALL_ERRORS
  };
};

// THUNK
export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user)
    .then( user => dispatch(receiveCurrentUser(user)))
      .fail( err => dispatch(receiveSessionErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then( () => dispatch(logoutUser()))
      .fail( err => dispatch(receiveSessionErrors(err.responseJSON)));
};

export const signup = (user) => {
  return dispatch => {
    return SessionAPIUtil.signup(user)
      .then( user => dispatch(receiveCurrentUser(user)))
        .fail( err => { return dispatch(receiveSessionErrors(err.responseJSON))});
  }
};

// USER

export const fetchUser = id => dispatch => {
  return SessionAPIUtil.fetchUser(id)
    .then( user => dispatch(receiveUser(user)))
      .fail( err => dispatch(receiveUserErrors(err)));
};
