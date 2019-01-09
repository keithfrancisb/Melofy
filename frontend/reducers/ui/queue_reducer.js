import {  RECEIVE_CURRENT_SONG,
          RECEIVE_CURRENT_SONG_LIST,
          ADD_TO_QUEUE,
          TOGGLE_REPEAT,
          TOGGLE_SHUFFLE,
          NEXT_SONG,
          PREV_SONG,
          FINALIZE_SONG_CHANGE,
          CHANGE_PLAY_STATUS,
          CHANG_SHOW_QUEUE
 } from '../../actions/queue_actions';
import { merge } from 'lodash';


let defaultState = {
  nowPlaying: {},
  songs: {}, // object of song objects
  queue: [],
  songList: [], // list to be displayed
  originalList: [], // ordered list of original songlist
  prevSongs: [],
  shuffleStatus: false,
  repeatSongStatus: false,
  repeatAllStatus: false,
  changedSongStatus: false,
  playing: false,
  showQueue: false
};

const shuffle = (songArray) => {
  const songArrayDup = songArray.slice(0);
  for (let i = songArrayDup.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songArrayDup[i], songArrayDup[j]] = [songArrayDup[j], songArrayDup[i]];
  }
  return songArrayDup;
}

const findSongIndex = (songList, songId) => {
  for(let i=0; i<songList.length; i++){
    if(songList[i] === `${songId}`)
      return i;
  }
  return -1;
};

const loopList = (songList, songId) => {
  const currentIndex = findSongIndex(songList, songId);
  return songList.slice(currentIndex).concat(songList.slice(0,currentIndex));
};

const sliceList = (songList, songId) => {
  const currentIndex = findSongIndex(songList, songId);
  return songList.slice(currentIndex+1);
};

const formatSongList = (newState) => {
  let newSongList;
  let { repeatAllStatus, shuffleStatus, originalList, nowPlaying } = newState;
  if(repeatAllStatus && shuffleStatus){ // repeat ON && shuffle ON
    newSongList = loopList(shuffle(originalList), nowPlaying.id);
    newState.songList = newSongList.concat(shuffle(newSongList));
  } else if (!repeatAllStatus && shuffleStatus){ // repeat OFF && shuffle ON
    newState.songList = loopList(shuffle(originalList), nowPlaying.id);
  } else if (repeatAllStatus && !shuffleStatus){ // repeat ON && shuffle OFF
    newSongList = loopList(originalList, nowPlaying.id);
    newState.songList = newSongList.slice(1).concat(newSongList);
  } else if (!repeatAllStatus && !shuffleStatus){ // repeat OFF && shuffle OFF
    newState.songList = sliceList(originalList, nowPlaying.id);
  }

  return newState;
};


export const QueueReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  let nextSongId, songIndex;

  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState.nowPlaying = action.song;
      newState.changedSongStatus = true;
      return newState;
    case RECEIVE_CURRENT_SONG_LIST:
      newState.songs = action.songs;
      newState.originalList = Object.keys(action.songs);

      return formatSongList(newState);
    case ADD_TO_QUEUE:
      newState.queue.push(action.song.id);
      newState.songs[action.song.id] = action.song;

      return newState;
    case TOGGLE_SHUFFLE:
      newState.shuffleStatus = !newState.shuffleStatus;

      return formatSongList(newState);
    case TOGGLE_REPEAT:
      if(!newState.repeatAllStatus && !newState.repeatSongStatus){
        newState.repeatAllStatus = true;
      } else if(newState.repeatAllStatus && !newState.repeatSongStatus){
        newState.repeatAllStatus = false;
        newState.repeatSongStatus = true;
      } else if(!newState.repeatAllStatus && newState.repeatSongStatus){
        newState.repeatSongStatus = false;
      }

      return formatSongList(newState);
    case NEXT_SONG:
      if(newState.queue.length !== 0) {
        nextSongId = newState.queue.shift();
        newState.nowPlaying = newState.songs[nextSongId];
      } else if(newState.repeatAllStatus && newState.songList.length <= newState.originalList.length) {
        nextSongId = newState.songList[0];
        newState.nowPlaying = newState.songs[nextSongId];
        newState = formatSongList(newState);
      } else {
        nextSongId = newState.songList.shift();
        newState.nowPlaying = newState.songs[nextSongId];
      }

      newState.changedSongStatus = true;
      return newState;
    case PREV_SONG:

      newState.songList.unshift(`${newState.nowPlaying.id}`);
      songIndex = findSongIndex(newState.originalList, newState.nowPlaying.id);
      if(songIndex === 0) songIndex = newState.originalList.length;
      nextSongId = newState.originalList[songIndex-1];
      newState.nowPlaying = newState.songs[nextSongId];

      if(newState.repeatAllStatus && newState.songList.length > newState.originalList.length * 2){
        formatSongList(newState);
      }

      newState.changedSongStatus = true;
      return newState;
    case CHANGE_PLAY_STATUS:
      newState.playing = action.boolean;
      return newState;
    case CHANG_SHOW_QUEUE:
      newState.showQueue = action.boolean;
      return newState;
    case FINALIZE_SONG_CHANGE:
      newState.changedSongStatus = false;
      return newState;
    default:
      return state;
  }


}
