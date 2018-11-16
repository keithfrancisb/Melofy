import * as AAApiUtil from '../util/aa_api_util.js';
import { receiveSongs } from './song_actions';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';

export const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

const receiveAlbum = album => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

const receiveAlbumErrors = errors => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  };
};

// THUNK

export const fetchAlbums = () => dispatch => {
  return AAApiUtil.fetchAlbums()
    .then( albums => dispatch(receiveAlbums(albums)))
      .fail( err => dispatch(receiveAlbumErrors(err.responseJSON)));
};

export const fetchAlbum = albumId => dispatch => {
  return AAApiUtil.fetchAlbum(albumId)
    .then( payload => {
      dispatch(receiveAlbum(payload.album));
      dispatch(receiveSongs(payload.songs));
    })
      .fail( err => dispatch(receiveAlbumErrors(err.responseJSON)));
};
