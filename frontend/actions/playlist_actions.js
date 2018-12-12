import * as PSApiUtil from '../util/ps_api_util';
import { receiveSongs } from './song_actions';
import { receiveArtists } from './artist_actions';
import { receiveAlbums } from './album_actions';


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

const receivePlaylist = (payload) => {
  return {
    type: RECEIVE_PLAYLIST,
    payload
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

export const fetchPlaylists = (searchTerm, playlist_ids) => dispatch => {
  return PSApiUtil.fetchPlaylists(searchTerm, playlist_ids)
    .then( playlists => dispatch(receivePlaylists(playlists)))
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const fetchPlaylist = id => dispatch => {
  return PSApiUtil.fetchPlaylist(id)
    .then( payload => {
      dispatch(receivePlaylist(payload));
    })
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const createPlaylist = playlist => dispatch => {
  return PSApiUtil.createPlaylist(playlist)
    .then( payload => dispatch(receivePlaylist(payload)))
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const updatePlaylist = playlist => dispatch => {
  return PSApiUtil.updatePlaylist(playlist)
    .then( payload => dispatch(receivePlaylist(payload)))
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};

export const deletePlaylist = (playlistId, userId) => dispatch => {

  return PSApiUtil.deletePlaylist(playlistId)
    .then( playlist => dispatch(removePlaylist(playlist.id)))
      .fail( err => dispatch(receivePlaylistErrors(err.responseJSON)));
};
