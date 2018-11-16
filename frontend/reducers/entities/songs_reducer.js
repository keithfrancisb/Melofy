import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  UPDATE_PLAYLIST_TO_ADD,
  UPDATE_PLAYLIST_TO_REMOVE,
  RECEIVE_SONG_ERRORS
} from '../../actions/song_actions';

export const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  const { playlistId, songId } = action;

  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;
    // case UPDATE_PLAYLIST_TO_ADD:
    //   newState[songId].playlistIds.push(playlistId);
    //   return newState;
    // case UPDATE_PLAYLIST_TO_REMOVE:
    //   const index = newState[songId].playlistIds.indexOf(playlistId);
    //   const left = newState[songId].playlistIds.slice(0,index);
    //   const right = newState[songId].playlistIds.slice(index+1);
    //   newState[songId].playlistIds = left.concat(right);
    //   return newState;
    default:
      return state;
  }
}
