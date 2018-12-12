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
  
    case RECEIVE_ALBUMS:
      if(action.payload.albums){
        return action.payload.albums;
      } else {
        return {};
      }
    case RECEIVE_ALBUM:
      newState[action.payload.album.id] = action.payload.album;
      return newState;
    default:
      return state;
  }
};
