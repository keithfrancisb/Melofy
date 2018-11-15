import * as PSApiUtil from '../util/ps_api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';

// Regular Actions

const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

const removePlaylist = playlistId => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId
  };
};

const receivePlaylistErrors = errors => {
  return {
    type: RECEIVE_PLAYLIST_ERRORS,
    errors
  };
};

// Thunk Actions

export const createPlaylist = playlist => dispatch => {
  return PSApiUtil.createPlaylist(playlist)
    .then( playlist => dispatch(receivePlaylist(playlist)))
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const updatePlaylist = playlist => dispatch => {
  return PSApiUtil.updatePlaylist(playlist)
    .then( playlist => dispatch(receivePlaylist(playlist)))
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const deletePlaylist = playlistId => dispatch => {
  return PSApiUtil.deletePlaylist(playlistId)
    .then( playlist => dispatch(removePlaylist(playlist.id)))
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};
