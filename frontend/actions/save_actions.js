import * as SaveApiUtil from '../util/save_api_util';
import { receiveCurrentUser } from './session_actions';



// THUNK ACTIONS

export const save = (saveId, saveType) => dispatch => {
  return SaveApiUtil.save(saveId, saveType)
    .then( currentUser => dispatch(receiveCurrentUser(currentUser)));
};

export const unsave = saveId => dispatch => {
  return SaveApiUtil.unsave(saveId)
    .then( currentUser => dispatch(receiveCurrentUser(currentUser)));
};
