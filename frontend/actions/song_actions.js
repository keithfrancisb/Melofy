import * as PSApiUtil from '../util/ps_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const UPDATE_PLAYLIST_TO_ADD = 'UPDATE_PLAYLIST_TO_ADD';
export const UPDATE_PLAYLIST_TO_REMOVE = 'UPDATE_PLAYLIST_TO_REMOVE';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';

// Regular Actions

const receiveSongErrors = errors => {
  return {
    type: RECEIVE_SONG_ERRORS,
    errors
  };
};

const updatePlaylistToAdd = payload => {
  return {
    type: UPDATE_PLAYLIST_TO_ADD,
    playlistId: payload.playlistId,
    songId: payload.songId
  };
};

const updatePlaylistToRemove = payload => {
  return {
    type: UPDATE_PLAYLIST_TO_REMOVE,
    playlistId: payload.playlistId,
    songId: payload.songId
  };
};

// Thunk Actions

export const addSongToPlaylist = (playlistId, songId) => dispatch => {
  return PSApiUtil.addSongToPlaylist(playlistId, songId);
    .then( payload => dispatch(updatePlaylistToAdd(payload)))
      .fail( err => dispatch(receiveSongErrors(err.responseJSON)));
};

export const removeSongFromPlaylist = (playlistId, songId) => dispatch => {
  return PSApiUtil.removeSongFromPlaylist(playlistId, songId);
    .then( payload => dispatch(updatePlaylistToRemove(payload)))
      .fail( err => dispatch(receiveSongErrors(err.responseJSON)));
};
