import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors/errors_reducer';
import { SessionReducer } from './session_reducer';
import NowPlayingReducer from './now_playing_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  nowPlaying: NowPlayingReducer,
  errors: ErrorsReducer
});

export default RootReducer;
