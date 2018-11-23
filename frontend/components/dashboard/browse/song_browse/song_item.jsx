import React from 'react';

// const calculateTotalTime = (duration) => {
//
//     const minutes = Math.floor(duration / 60);
//     const seconds_int = duration - minutes * 60;
//     const seconds_str = seconds_int.toString();
//     const seconds = seconds_str.substr(0, 2);
//     const totalTime = `${minutes}:${seconds}`;

//     return totalTime;
// };

const SongItem = (props) => {
  const { song, artist, album, setupAddToPlaylist, playSong } = props;
  // const audio = document.createElement('audio');

  // audio.src = song.song_url;
  // const duration = calculateTotalTime(audio.duration);

  return (
    <div key={song.id} className='div-browse-song-list-item' onDoubleClick={playSong(song)}>
      <li className='song-browse-list'>
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
