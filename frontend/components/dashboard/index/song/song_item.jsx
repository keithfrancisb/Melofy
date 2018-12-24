import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';

import { save, unsave } from '../../../../actions/save_actions';

class SongItem extends React.Component {

  constructor(props) {
    super(props);

    this.contextTrigger = null;

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handlePlaySong = this.handlePlaySong.bind(this);
  }

  toggleMenu(e) {
    if(this.contextTrigger)
      this.contextTrigger.handleContextClick(e);
  }

  handleSave() {
    const { savedSongIds, song } = this.props;
    if(savedSongIds.includes(song.id)){
      const saveId = this.props.saves.filter( (save) => {
        return save.saveable_id === this.props.song.id && save.saveable_type === 'Song';
      })[0].id;
      this.props.unsave(saveId);
    } else {
      this.props.save(song.id, 'Song');
    }
  }

  handlePlaySong(song) {
    if(this.props.parentType !== 'Queue'){
      return () => { return this.props.playSong(song)(); };
    }
  }

  render() {

    const { song, artist, album, setupAddToPlaylist, playSong } = this.props;
    const saveLabel = this.props.savedSongIds.includes(song.id) ? 'Remove from your Library' : 'Save to your Library';
    const playedColor = song.id === this.props.nowPlayingId ? 'green' : 'not-green';


    let removeFromPlaylist;
    if(this.props.parentType === 'Playlist' && this.props.allowRemoveSong){
      removeFromPlaylist = (
        <MenuItem>
          <span onClick={this.props.handleRemoveFromPlaylist(this.props.parentId, song.id)}>Remove from this Playlist</span>
        </MenuItem>
      );
    } else {
      removeFromPlaylist = null;
    }

    const player = document.getElementById('music-player');
    let playIcon;
    if(player){
      playIcon = <svg onClick={this.handlePlaySong(song)} className="icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
      if(!player.paused && this.props.nowPlayingId === song.id){
      playIcon = <svg className="icon-pause" viewBox="0 0 60 100"><path fill="currentColor" d="M0 8c0-5 3-8 8-8s9 3 9 8v84c0 5-4 8-9 8s-8-3-8-8V8zm43 0c0-5 3-8 8-8s8 3 8 8v84c0 5-3 8-8 8s-8-3-8-8V8z"><title>PAUSE</title></path></svg>      }
    }


      return (
        <div key={song.id} className='div-browse-song-list-item' onDoubleClick={this.handlePlaySong(song)}>
          <li className='songs-list'>
            <div className='left-side-song-item'>
              <div className={playedColor}>
                <span className='mini-play'></span>
                {playIcon}
              </div>
              <div className='song-info'>
                <div>
                  <span className={playedColor}>{song.name}</span>
                </div>
                <div className='sub-song-info'>
                  <span>{artist ? artist.name : ""}</span>
                  <span className="second-line-separator">•</span>
                  <span>{album ? album.name : ""}</span>
                </div>
              </div>
            </div>
            <div className='dot-div'>
              <ContextMenuTrigger id={`${song.id}`} ref={c => this.contextTrigger = c}>
                <button id='popup' onClick={this.toggleMenu}>
                  <img className='song-misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
                </button>
              </ContextMenuTrigger>
              <div className='sub-song-info'>
                <span className={playedColor}>{song.duration}</span>
              </div>
            </div>

          </li>
          <>
          <ContextMenu id={`${song.id}`}>
            <MenuItem>
              <span onClick={setupAddToPlaylist ? setupAddToPlaylist(song.id) : null}>Add to Playlist</span>
            </MenuItem>
            {removeFromPlaylist}
            <MenuItem>
              <span onClick={this.handleSave}>{saveLabel}</span>
            </MenuItem>
          </ContextMenu>
          </>
        </div>
      );
  }
}

const msp = state => {

  return {
    savedSongIds: state.session.saved_song_ids,
    saves: Object.values(state.session.saves),
    nowPlayingId: state.ui.queue.nowPlaying.id
  };
};

const mdp = dispatch => {
  return {
    save: (saveId, saveType) => dispatch(save(saveId, saveType)),
    unsave: (saveId) => dispatch(unsave(saveId))
  };
};

export default connect(msp, mdp)(SongItem);
