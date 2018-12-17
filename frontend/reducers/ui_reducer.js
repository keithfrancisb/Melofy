import { combineReducers } from 'redux';
import { QueueReducer } from './ui/queue_reducer';

const UIReducer = combineReducers({
  queue: QueueReducer
});

export default UIReducer;
