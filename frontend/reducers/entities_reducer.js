import { combineReducers } from 'redux';
import { UsersReducer } from './entities/users_reducer';
import { PlaylistsReducer } from './entities/playlists_reducer';
import { SongsReducer } from './entities/songs_reducer';
import { AlbumsReducer } from './entities/albums_reducer';
import { ArtistsReducer } from './entities/artists_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  playlists: PlaylistsReducer,
  songs: SongsReducer,
  albums: AlbumsReducer,
  artists: ArtistsReducer
});

export default EntitiesReducer;
