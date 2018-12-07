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

const toggleDropdown = (id) => {
  return () => {
    document.getElementById(`dropDown${id}`).classList.toggle('show');
    window.songId = id;
  };
};


const SongItem = (props) => {
  const { song, artist, album, setupAddToPlaylist, playSong } = props;
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = (event) => {
    if (!event.target.matches(`button${window.songId}`)) {

      const dropdowns = document.getElementsByClassName("popupBox-song");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show') && openDropdown.id !== `dropDown${window.songId}`) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

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
          <button id='popup' onClick={toggleDropdown(song.id)} className={`button${song.id}`}>
            <img className='song-misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
          </button>
          <div id={`dropDown${song.id}`} className='popupBox-song'>
            <span onClick={setupAddToPlaylist(song.id)}>Add to Playlist</span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SongItem;
