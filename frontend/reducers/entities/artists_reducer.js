import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST
} from '../../actions/artist_actions';
import { RECEIVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../../actions/album_actions';
import { RECEIVE_SONGS } from '../../actions/song_actions';

export const ArtistsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_ARTISTS:
      if(action.payload.artists){
        return action.payload.artists;
      } else {
        return {};
      }
    case RECEIVE_ARTIST:
      newState[action.payload.artist.id] = action.payload.artist;
      return newState;
    default:
      return state;
  }
};
