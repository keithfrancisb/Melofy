import { combineReducers } from 'redux';
import { UsersReducer } from './entities/users_reducer';
import { PlaylistsReducer } from './entities/playlists_reducer';
import { SongsReducer } from './entities/songs_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  playlists: PlaylistsReducer,
  songs: SongsReducer
});

export default EntitiesReducer;
