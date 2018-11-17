import * as PSApiUtil from '../util/ps_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONGS';
export const UPDATE_PLAYLIST_TO_ADD = 'UPDATE_PLAYLIST_TO_ADD';
export const UPDATE_PLAYLIST_TO_REMOVE = 'UPDATE_PLAYLIST_TO_REMOVE';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';

// Regular Actions

export const receiveSongs = ({songs}) => {
  return {
    type: RECEIVE_SONGS,
    songs
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

export const fetchSong = id => dispatch => {
  return PSApiUtil.fetchSong(id)
    .then( song => dispatch(receiveSong(song)))
      .fail( err => dispatch(receiveSongErrors(err.responseJSON)));
};
