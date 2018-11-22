import { RECEIVE_CURRENT_SONG } from '../actions/now_playing_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return action.song;
    default:
      return state;
  }
}
