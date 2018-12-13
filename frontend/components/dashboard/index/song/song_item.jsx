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

  render() {

    const { song, artist, album, setupAddToPlaylist, playSong } = this.props;
    const liClass = this.props.parentId ? 'songs-list' : 'song-browse-list';
    const divClass = this.props.parentId ? 'div-song-list-item' : 'div-browse-song-list-item';
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

    return (
      <div key={song.id} className={divClass} onDoubleClick={playSong(song)}>
        <li className={liClass}>
          <div className='left-side-song-item'>
            <div className={playedColor}>
              <span className='mini-play'></span>
            </div>
            <div>
              <div>
                <span className={playedColor}>{song.name}</span>
              </div>
              <div className='sub-song-info'>
                <span>{artist.name}</span>
                <span className="second-line-separator">•</span>
                <span>{album.name}</span>
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
            <span onClick={setupAddToPlaylist(song.id)}>Add to Playlist</span>
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
    nowPlayingId: state.nowPlaying.id
  };
};

const mdp = dispatch => {
  return {
    save: (saveId, saveType) => dispatch(save(saveId, saveType)),
    unsave: (saveId) => dispatch(unsave(saveId))
  };
};

export default connect(msp, mdp)(SongItem);
