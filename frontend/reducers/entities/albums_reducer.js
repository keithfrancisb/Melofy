import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM
} from '../../actions/album_actions';
import { RECEIVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_SONGS } from '../../actions/song_actions';

export const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    // case RECEIVE_SONGS:
    case RECEIVE_PLAYLIST:
      return Object.assign({}, action.payload.albums);
    case RECEIVE_ALBUMS:
      return action.payload.albums;
    case RECEIVE_ALBUM:
      newState[action.payload.album.id] = action.payload.album;
      return newState;
    default:
      return state;
  }
};
