import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
  RECEIVE_PLAYLIST_ERRORS
} from '../../actions/playlist_actions';

export const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      if(action.playlists){
        return action.playlists;
      } else {
        return {};
      }
    case RECEIVE_PLAYLIST:
      newState[action.payload.playlist.id] = action.payload.playlist;
      return newState;
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};
