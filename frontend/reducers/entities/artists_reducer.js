import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST
} from '../../actions/artist_actions';

export const ArtistsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      newState[action.artist.id] = action.artist;
      return newState;
    default:
      return state;
  }
};
