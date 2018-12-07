import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  RECEIVE_SONG_ERRORS
} from '../../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../../actions/album_actions';

export const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  const { playlistId, songId } = action;

  switch (action.type) {
    // case RECEIVE_ALBUM:
    // case RECEIVE_PLAYLIST:
      // return Object.assign({}, action.payload.songs);
    case RECEIVE_SONGS:
      return action.payload.songs;
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;
    default:
      return state;
  }
}
