import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
// const calculateTotalTime = (duration) => {
//
//     const minutes = Math.floor(duration / 60);
//     const seconds_int = duration - minutes * 60;
//     const seconds_str = seconds_int.toString();
//     const seconds = seconds_str.substr(0, 2);
//     const totalTime = `${minutes}:${seconds}`;

//     return totalTime;
// };

const toggleDropdown = (id) => {
  return () => {
    document.getElementById(`dropDown${id}`).classList.toggle('show');
    window.songId = id;
  };
};

const renderTotalTime = () => {
  const player = document.getElementById('music-player');

  if(player && player.duration) {
    const duration = player.duration;
    const total_minute = parseInt(duration / 60) % 60;
    const total_seconds_long = duration % 60;
    const total_seconds = total_seconds_long.toFixed();
    const totalTime = (total_minute < 10 ? "0" + total_minute :
      total_minute) + ":" + (total_seconds < 10 ? "0" + total_seconds : total_seconds);

    return totalTime;
  } else {
    return '     ';
  }
}

class SongItem extends React.Component {

  constructor(props) {
    super(props);

    this.contextTrigger = null;

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    if(this.contextTrigger)
      this.contextTrigger.handleContextClick(e);
  }

  render() {

    const { song, artist, album, setupAddToPlaylist, playSong } = this.props;

    const liClass = this.props.parentId ? 'songs-list' : 'song-browse-list';
    const divClass = this.props.parentId ? 'div-song-list-item' : 'div-browse-song-list-item';

    return (
      <div key={song.id} className={divClass} onDoubleClick={playSong(song)}>
        <li className={liClass}>
          <div>
            <div>
              <span>{song.name}</span>
            </div>
            <div className='sub-song-info'>
              <span>{artist.name}</span>
              <span className="second-line-separator">•</span>
              <span>{album.name}</span>
            </div>
          </div>
          <div className='dot-div'>
            <ContextMenuTrigger id={`${song.id}`} ref={c => this.contextTrigger = c}>
              <button id='popup' onClick={this.toggleMenu} className={`button${song.id}`}>
                <img className='song-misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
              </button>
            </ContextMenuTrigger>
          </div>
        </li>
        <>
        <ContextMenu id={`${song.id}`}>
          <MenuItem>
            <span onClick={setupAddToPlaylist(song.id)}>Add to Playlist</span>
          </MenuItem>
        </ContextMenu>
        </>
      </div>
    );
  }
}

export default SongItem;
