import * as AAApiUtil from '../util/aa_api_util';
import { receiveAlbums } from './album_actions';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';

// Regular Actions

const receiveArtists = payload => {
  return {
    type: RECEIVE_ARTISTS,
    payload
  };
};

const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    payload
  };
};

const receiveArtistErrors = errors => {
  return {
    type: RECEIVE_ARTIST_ERRORS,
    errors
  };
};

// Thunk Actions

export const fetchArtists = () => dispatch => {
  return AAApiUtil.fetchArtists()
    .then( payload => dispatch(receiveArtists(payload)))
      .fail( err => dispatch(receiveArtistErrors(err.responseJSON)));
};

export const fetchArtist = (artistId) => dispatch => {
  return AAApiUtil.fetchArtist(artistId)
    .then( payload => {
      dispatch(receiveArtist(payload.artist));
      dispatch(receiveAlbums(payload.albums))
    })
      .fail( err => dispatch(receiveArtistErrors(err.responseJSON)));
};
