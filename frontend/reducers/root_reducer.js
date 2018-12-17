import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors/errors_reducer';
import UIReducer from './ui_reducer';
import { SessionReducer } from './session_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  ui: UIReducer,
  errors: ErrorsReducer
});

export default RootReducer;
