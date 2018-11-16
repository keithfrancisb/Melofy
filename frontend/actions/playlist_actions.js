import * as PSApiUtil from '../util/ps_api_util';
import { receiveSongs } from './song_actions';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';

// Regular Actions

const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

const receivePlaylist = ({playlist}) => {
  debugger
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

export const fetchPlaylists = () => dispatch => {
  return PSApiUtil.fetchPlaylists()
    .then( playlists => dispatch(receivePlaylists(playlists)))
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const fetchPlaylist = id => dispatch => {
  return PSApiUtil.fetchPlaylist(id)
    .then( response => {
      dispatch(receiveSongs(response));
      dispatch(receivePlaylist(response));
    })
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

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
