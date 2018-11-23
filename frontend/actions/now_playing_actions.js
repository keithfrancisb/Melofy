import * as PSApiUtil from '../util/ps_api_util';


export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

export const receiveCurrentSong = (song) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    song
  };
};

export const fetchCurrentSong = (song) => dispatch => {
  return PSApiUtil.fetchSong(song.id)
    .then( currentSong => dispatch(receiveCurrentSong(currentSong)));
};
