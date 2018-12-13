import * as PSApiUtil from '../util/ps_api_util';
import { receivePlaylist } from './playlist_actions';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONGS';
export const UPDATE_PLAYLIST_TO_ADD = 'UPDATE_PLAYLIST_TO_ADD';
export const UPDATE_PLAYLIST_TO_REMOVE = 'UPDATE_PLAYLIST_TO_REMOVE';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';

// Regular Actions

export const receiveSongs = (payload) => {
  return {
    type: RECEIVE_SONGS,
    payload
  };
};

export const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

const receiveSongErrors = errors => {
  return {
    type: RECEIVE_SONG_ERRORS,
    errors
  };
};

// Thunk Actions

export const fetchSongs = (searchTerm, song_ids) => dispatch => {
  return PSApiUtil.fetchSongs(searchTerm, song_ids)
    .then( payload => dispatch(receiveSongs(payload)))
      .fail( err => dispatch(receiveSongErrors(err.responseJSON)));
};

export const fetchSong = id => dispatch => {
  return PSApiUtil.fetchSong(id)
    .then( song => dispatch(receiveSong(song)))
      .fail( err => dispatch(receiveSongErrors(err.responseJSON)));
};

export const addSongToPlaylist = (playlistId, songId) => dispatch => {
  return PSApiUtil.addSongToPlaylist(playlistId, songId)
    .then( updatedPlaylist => dispatch(receivePlaylist(updatedPlaylist)));
};

export const removeSongFromPlaylist = (playlistId, songId) => dispatch => {
  return PSApiUtil.removeSongFromPlaylist(playlistId, songId)
    .then( updatedPlaylist => dispatch(receivePlaylist(updatedPlaylist)));
};
