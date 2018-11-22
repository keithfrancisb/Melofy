import React from 'react';

const SongItem = (props) => {
  const { song, artist, album, setupAddToPlaylist, playSong } = props;
  return (
    <div className='div-browse-song-list-item'>
      <li className='song-browse-list' onDoubleClick={playSong(song)}>
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
          <button id='popup'>
            <img className='song-misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
          </button>
          <div className='popupBox-song'>
            <ul>
              <li>
                <span onClick={setupAddToPlaylist(song.id)}>Add to Playlist</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SongItem;
