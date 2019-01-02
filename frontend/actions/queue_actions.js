import * as PSApiUtil from '../util/ps_api_util';

export const RECEIVE_CURRENT_SONG_LIST = 'RECEIVE_CURRENT_SONG_LIST';
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE';
export const TOGGLE_REPEAT = 'TOGGLE_REPEAT';
export const NEXT_SONG = 'NEXT_SONG';
export const PREV_SONG = 'PREV_SONG';
export const FINALIZE_SONG_CHANGE = 'FINALIZE_SONG_CHANGE';
export const CHANGE_PLAY_STATUS = 'CHANGE_PLAY_STATUS';

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

export const receiveCurrentSong = (song) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    song
  };
};

export const receiveCurrentSongList = (songs) => {
  return {
    type: RECEIVE_CURRENT_SONG_LIST,
    songs
  };
};

export const addToQueue = (song) => {
  return {
    type: ADD_TO_QUEUE,
    song
  };
};

export const toggleShuffle = () => {
  return {
    type: TOGGLE_SHUFFLE
  };
};

export const toggleRepeat = () => {
  return {
    type: TOGGLE_REPEAT
  };
};

export const nextSong = () => {
  return {
    type: NEXT_SONG
  };
};

export const prevSong = () => {
  return {
    type: PREV_SONG
  };
};

export const finalizeSongChange = () => {
  return {
    type: FINALIZE_SONG_CHANGE
  };
};

export const changePlayStatus = (boolean) => {
  return {
    type:CHANGE_PLAY_STATUS,
    boolean
  }
}


export const fetchCurrentSong = (songId) => dispatch => {
  return PSApiUtil.fetchSong(songId)
    .then( currentSong => dispatch(receiveCurrentSong(currentSong)));
};
