import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';

import * as PSApiUtil from './util/ps_api_util';
import { createPlaylist, updatePlaylist, deletePlaylist } from './actions/playlist_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TEST
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.createPlaylist = createPlaylist;
  window.updatePlaylist = updatePlaylist;
  window.deletePlaylist = deletePlaylist;

  // window.createPlaylist = PSApiUtil.createPlaylist;
  // window.updatePlaylist = PSApiUtil.updatePlaylist;
  // window.deletePlaylist = PSApiUtil.deletePlaylist;
  window.addSongToPlaylist = PSApiUtil.addSongToPlaylist;
  window.removeSongFromPlaylist = PSApiUtil.removeSongFromPlaylist;

  // TEST

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
