import * as AAApiUtil from '../util/aa_api_util.js';
import { receiveSongs } from './song_actions';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';

export const receiveAlbums = payload => {
  return {
    type: RECEIVE_ALBUMS,
    payload
  };
};

const receiveAlbum = payload => {
  return {
    type: RECEIVE_ALBUM,
    payload
  };
};

const receiveAlbumErrors = errors => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  };
};

// THUNK

export const fetchAlbums = (searchTerm, album_ids) => dispatch => {
  return AAApiUtil.fetchAlbums(searchTerm, album_ids)
    .then( payload => dispatch(receiveAlbums(payload)))
      .fail( err => dispatch(receiveAlbumErrors(err.responseJSON)));
};

export const fetchAlbum = albumId => dispatch => {
  return AAApiUtil.fetchAlbum(albumId)
    .then( payload => {
      dispatch(receiveAlbum(payload));
    })
      .fail( err => dispatch(receiveAlbumErrors(err.responseJSON)));
};
