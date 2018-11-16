import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM
} from '../../actions/album_actions';

export const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    default:
      return state;
  }
};
