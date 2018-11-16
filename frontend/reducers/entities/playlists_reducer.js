import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
  RECEIVE_PLAYLIST_ERRORS
} from '../../actions/playlist_actions';

import {
  UPDATE_PLAYLIST_TO_ADD,
  UPDATE_PLAYLIST_TO_REMOVE
} from '../../actions/song_actions';

export const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
    debugger
      newState[action.playlist.id] = action.playlist;
      return newState;
    case UPDATE_PLAYLIST_TO_ADD:
      newState[playlistId].playlistIds.push(songId);
      return newState;
    case UPDATE_PLAYLIST_TO_REMOVE:
      const index = newState[playlistId].playlistIds.indexOf(songId);
      const left = newState[playlistId].playlistIds.slice(0,index);
      const right = newState[playlistId].playlistIds.slice(index+1);
      newState[playlistId].playlistIds = left.concat(right);
      return newState;
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};
